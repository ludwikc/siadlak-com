// Env vars: CRM_LEAD_URL (defaults to the crm-lead Supabase edge function),
// CRM_LEAD_SECRET (sent as x-lead-secret; when unset the CRM call is skipped
// entirely and every lead goes to the blob fallback, and GET health reports
// "blob"), BLOB_READ_WRITE_TOKEN (read implicitly by @vercel/blob for the
// fallback store used when the CRM is skipped, fails or times out),
// MCT_LEAD_ALERT_WEBHOOK (optional Discord-style webhook; receives a
// best-effort {content} alert on every blob fallback).
import { randomUUID } from "node:crypto";
import { courses } from "../src/config/mct/courses.js";
import { toBlobMarkdown, toCrmPayload, type CrmLeadPayload } from "../src/config/mct/lead-format.js";
import { pricing } from "../src/config/mct/pricing.js";
import { quoteSeats, quoteToCents } from "../src/config/mct/pricing-utils.js";
import { leadSchema, type LeadPayload } from "../src/config/mct/lead-schema.js";
import { sessions } from "../src/config/mct/schedule.js";
import { getUpcomingSessions } from "../src/config/mct/schedule-utils.js";
import type { ScheduledSession } from "../src/config/mct/types";

type LeadRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type LeadResponse = {
  status: (code: number) => LeadResponse;
  json: (data: unknown) => void;
};

const CRM_LEAD_URL =
  process.env.CRM_LEAD_URL ?? "https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-lead";
const CRM_TIMEOUT_MS = 8000;
const ALERT_TIMEOUT_MS = 3000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 20_000;

const rateLimitHits = new Map<string, number[]>();

function clientIp(req: LeadRequest): string {
  const header = req.headers?.["x-forwarded-for"];
  const raw = Array.isArray(header) ? header[0] : header;
  return (raw ?? "unknown").split(",")[0].trim();
}

function pruneRateLimitHits(ip: string, now: number): number[] {
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length > 0) {
    rateLimitHits.set(ip, hits);
  } else {
    rateLimitHits.delete(ip);
  }
  return hits;
}

// Only an ACCEPTED request consumes quota: a 429 must not itself push a hit,
// or repeated rejections would keep the window artificially full forever.
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = pruneRateLimitHits(ip, now);
  if (hits.length >= RATE_LIMIT_MAX) return true;
  hits.push(now);
  rateLimitHits.set(ip, hits);
  return false;
}

function isHoneypotFilled(raw: Record<string, unknown>): boolean {
  const { website } = raw;
  if (website === undefined) return false;
  if (typeof website === "string") return website.length > 0;
  return true; // present but not a string — never let field validation name it
}

function computeQuote(
  p: LeadPayload,
  sessionDays?: 1 | 2,
): { quoteCents?: number; currency?: "eur" | "pln" } {
  const currencyCode = pricing.currencyByLocale[p.locale];
  const currency = currencyCode.toLowerCase() as "eur" | "pln";

  if (p.tier === "public" && p.courseSlug && p.seats) {
    const days = sessionDays ?? courses[p.courseSlug]?.days;
    if (!days) return {};
    const quote = quoteSeats(p.seats, days, currencyCode);
    return { quoteCents: quoteToCents(quote.total), currency };
  }

  if (p.tier === "briefing") {
    const flat = pricing.briefing.flat[currencyCode];
    return { quoteCents: quoteToCents(flat), currency };
  }

  return {};
}

type CrmResult = { contactId?: string } | { reason: string };

async function sendToCrm(payload: CrmLeadPayload, secret: string): Promise<CrmResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CRM_TIMEOUT_MS);
  try {
    const response = await fetch(CRM_LEAD_URL, {
      method: "POST",
      headers: { "content-type": "application/json", "x-lead-secret": secret },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (response.ok) {
      const data = (await response.json().catch(() => ({}))) as { contactId?: string; dealId?: string };
      return { contactId: data.contactId };
    }
    const bodyText = await response.text().catch(() => "");
    console.error("crm-lead", `${response.status} ${bodyText.slice(0, 300)}`);
    return { reason: `crm-http-${response.status}` };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("mct-lead-crm-failed", message);
    return { reason: controller.signal.aborted ? "crm-timeout" : `crm-error: ${message}` };
  } finally {
    clearTimeout(timeout);
  }
}

async function alertFallback(lead: LeadPayload, submissionId: string, reason: string): Promise<void> {
  const webhook = process.env.MCT_LEAD_ALERT_WEBHOOK;
  if (!webhook) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ALERT_TIMEOUT_MS);
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        content: `⚠️ MCT lead fell back to blob (${reason}) — ${lead.tier}/${lead.intent} ${lead.company ?? lead.email} · ${submissionId}`,
      }),
      signal: controller.signal,
    });
  } catch (error) {
    console.error("mct-lead-alert-failed", error instanceof Error ? error.message : error);
  } finally {
    clearTimeout(timeout);
  }
}

async function storeToBlob(payload: CrmLeadPayload, submittedAt: string): Promise<void> {
  const { put } = await import("@vercel/blob");
  const markdown = toBlobMarkdown(payload, submittedAt);
  const date = submittedAt.slice(0, 10);
  await put(`mct-leads/${date}/${payload.submissionId}.md`, markdown, {
    access: "public",
    addRandomSuffix: true,
    contentType: "text/markdown",
  });
}

export default async function handler(req: LeadRequest, res: LeadResponse) {
  if (req.method === "GET") {
    res.status(200).json({ ok: true, storage: process.env.CRM_LEAD_SECRET ? "crm" : "blob" });
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method-not-allowed" });
    return;
  }

  const raw = (typeof req.body === "object" && req.body !== null ? req.body : {}) as Record<
    string,
    unknown
  >;

  if (isHoneypotFilled(raw)) {
    res.status(200).json({ ok: true, ref: "crm" }); // indistinguishable from a real success
    return;
  }

  if (isRateLimited(clientIp(req))) {
    res.status(429).json({ ok: false, error: "rate-limited" });
    return;
  }

  if (JSON.stringify(raw).length > MAX_BODY_BYTES) {
    res.status(400).json({ ok: false, error: "payload-too-large" });
    return;
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "invalid-submission", issues: parsed.error.issues });
    return;
  }
  const lead = parsed.data;

  let matchedSession: ScheduledSession | undefined;
  if (lead.tier === "public" && lead.intent === "seat") {
    const now = new Date();
    const upcoming = getUpcomingSessions(sessions, now);
    matchedSession = upcoming.find(
      (s) => s.id === lead.sessionId && s.courseSlug === lead.courseSlug && s.status !== "full",
    );
    if (!matchedSession) {
      res.status(400).json({ ok: false, error: "session-unavailable" });
      return;
    }
  }

  const submissionId = lead.submissionId ?? randomUUID();
  const { quoteCents, currency } = computeQuote(lead, matchedSession?.days);
  const submittedAt = new Date().toISOString();

  // Safety net: if both stores fail below, only these five fields (not the
  // full submission) survive in the Vercel function logs.
  console.log(
    "mct-lead",
    JSON.stringify({
      submissionId,
      tier: lead.tier,
      intent: lead.intent,
      email: lead.email,
      company: lead.company,
    }),
  );

  const enriched: LeadPayload & Record<string, unknown> = { ...raw, ...lead };
  const crmPayload = toCrmPayload(enriched, submissionId, quoteCents, currency);

  const secret = process.env.CRM_LEAD_SECRET;
  let reason: string;
  if (secret) {
    const crm = await sendToCrm(crmPayload, secret);
    if (!("reason" in crm)) {
      res.status(200).json({ ok: true, ref: "crm", contactId: crm.contactId });
      return;
    }
    reason = crm.reason;
  } else {
    console.error("mct-lead: CRM_LEAD_SECRET not set — using blob fallback");
    reason = "crm-secret-unset";
  }

  console.error("mct-lead FALLBACK", JSON.stringify({ submissionId, reason }));
  const [stored] = await Promise.allSettled([
    storeToBlob(crmPayload, submittedAt),
    alertFallback(lead, submissionId, reason),
  ]);
  if (stored.status === "fulfilled") {
    res.status(200).json({ ok: true, ref: "blob" });
    return;
  }
  console.error(
    "mct-lead-blob-fallback-failed",
    stored.reason instanceof Error ? stored.reason.message : stored.reason,
  );
  res.status(502).json({ ok: false, error: "store-failed" });
}
