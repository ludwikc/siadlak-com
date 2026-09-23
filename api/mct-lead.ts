// Env vars: CRM_LEAD_URL (defaults to the crm-lead Supabase edge function),
// CRM_LEAD_SECRET (sent as x-lead-secret; GET health reports "blob" storage
// when unset), BLOB_READ_WRITE_TOKEN (read implicitly by @vercel/blob for the
// fallback store used when the CRM call fails or times out).
import { randomUUID } from "node:crypto";
import { courses } from "../src/config/mct/courses";
import { toBlobMarkdown, toCrmPayload } from "../src/config/mct/lead-format";
import { pricing } from "../src/config/mct/pricing";
import { quoteSeats, quoteToCents } from "../src/config/mct/pricing-utils";
import { leadSchema, type LeadPayload } from "../src/config/mct/lead-schema";
import { sessions } from "../src/config/mct/schedule";
import { getUpcomingSessions } from "../src/config/mct/schedule-utils";

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
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 20_000;

const rateLimitHits = new Map<string, number[]>();

function clientIp(req: LeadRequest): string {
  const header = req.headers?.["x-forwarded-for"];
  const raw = Array.isArray(header) ? header[0] : header;
  return (raw ?? "unknown").split(",")[0].trim();
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function computeQuote(p: LeadPayload): { quoteCents?: number; currency?: "eur" | "pln" } {
  const currencyCode = pricing.currencyByLocale[p.locale];
  const currency = currencyCode.toLowerCase() as "eur" | "pln";

  if (p.tier === "public" && p.courseSlug && p.seats) {
    const course = courses[p.courseSlug];
    if (!course) return {};
    const quote = quoteSeats(p.seats, course.days, currencyCode);
    return { quoteCents: quoteToCents(quote.total), currency };
  }

  if (p.tier === "briefing") {
    const flat = pricing.briefing.flat[currencyCode];
    return { quoteCents: quoteToCents(flat), currency };
  }

  return {};
}

async function storeToBlob(submissionId: string, markdown: string): Promise<void> {
  const { put } = await import("@vercel/blob");
  const date = new Date().toISOString().slice(0, 10);
  await put(`mct-leads/${date}/${submissionId}.md`, markdown, {
    access: "private",
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

  if (typeof raw.website === "string" && raw.website.length > 0) {
    res.status(200).json({ ok: true }); // honeypot: pretend success, store nothing
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

  if (lead.tier === "public" && lead.intent === "seat") {
    const now = new Date();
    const upcoming = getUpcomingSessions(sessions, now);
    const session = upcoming.find((s) => s.id === lead.sessionId);
    if (!session) {
      res.status(400).json({ ok: false, error: "session-unavailable" });
      return;
    }
  }

  const submissionId = randomUUID();
  const { quoteCents, currency } = computeQuote(lead);
  const submittedAt = new Date().toISOString();

  // Log-based safety net: if both the CRM call and the blob fallback fail,
  // the payload survives in the Vercel function logs.
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

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CRM_TIMEOUT_MS);
  try {
    const response = await fetch(CRM_LEAD_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-lead-secret": process.env.CRM_LEAD_SECRET ?? "",
      },
      body: JSON.stringify(crmPayload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`CRM responded ${response.status}`);
    const data = (await response.json()) as { contactId?: string; dealId?: string };
    res.status(200).json({ ok: true, ref: "crm", contactId: data.contactId });
  } catch (error) {
    console.error("mct-lead-crm-failed", error instanceof Error ? error.message : error);
    try {
      const markdown = toBlobMarkdown(lead, submittedAt, submissionId);
      await storeToBlob(submissionId, markdown);
      res.status(200).json({ ok: true, ref: "blob" });
    } catch (blobError) {
      console.error(
        "mct-lead-blob-fallback-failed",
        blobError instanceof Error ? blobError.message : blobError,
      );
      res.status(502).json({ ok: false, error: "store-failed" });
    }
  } finally {
    clearTimeout(timeout);
  }
}
