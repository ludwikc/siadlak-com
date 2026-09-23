import type { LeadPayload } from "./lead-schema";

export type CrmLeadPayload = {
  submissionId: string;
  email: string;
  name: string;
  company?: string;
  phone?: string;
  tier: "public" | "briefing" | "enterprise";
  intent: "seat" | "waitlist" | "briefing" | "scope-call";
  courseSlug?: string;
  sessionId?: string;
  seats?: number;
  language: "en" | "pl";
  locale: "en" | "pl";
  message?: string;
  pagePath?: string;
  quoteCents?: number;
  currency?: "eur" | "pln";
  utm?: Record<string, string>;
};

// Key names produced by src/lib/attribution.ts#getFlatAttribution: session
// params as-is, first-touch params prefixed `ft_`.
const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "landing_page",
  "referrer",
  "captured_at",
];
const ATTRIBUTION_KEYS = [...ATTRIBUTION_PARAMS, ...ATTRIBUTION_PARAMS.map((k) => `ft_${k}`)];

function extractUtm(raw: Record<string, unknown>): Record<string, string> | undefined {
  const utm: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = raw[key];
    if (typeof value === "string" && value.length > 0) utm[key] = value;
  }
  return Object.keys(utm).length > 0 ? utm : undefined;
}

// Briefing/enterprise fields have no home in the CRM schema's typed columns,
// so they are folded into `message` as labelled lines instead of dropped.
function foldExtrasIntoLines(p: LeadPayload): string[] {
  const lines: string[] = [];
  if (p.topic) lines.push(`Topic: ${p.topic}`);
  if (p.windows) lines.push(`Windows: ${p.windows}`);
  if (p.leaders !== undefined) lines.push(`Leaders: ${p.leaders}`);
  if (p.stack && p.stack.length > 0) lines.push(`Stack: ${p.stack.join(", ")}`);
  if (p.teamSize) lines.push(`Team size: ${p.teamSize}`);
  if (p.timeline) lines.push(`Timeline: ${p.timeline}`);
  if (p.delivery) lines.push(`Delivery: ${p.delivery}`);
  if (p.procurement) lines.push(`Procurement: ${p.procurement}`);
  if (p.wantsPrivateQuote !== undefined) lines.push(`Wants private quote: ${p.wantsPrivateQuote ? "yes" : "no"}`);
  return lines;
}

function buildMessage(p: LeadPayload): string | undefined {
  const extras = foldExtrasIntoLines(p).join("\n");
  const combined = [extras, p.message ?? ""].filter((s) => s.length > 0).join("\n\n");
  return combined.length > 0 ? combined : undefined;
}

export function toDealTitle(p: LeadPayload): string {
  return `MCT — ${p.tier} — ${p.company}`;
}

export function toCrmPayload(
  p: LeadPayload & Record<string, unknown>,
  submissionId: string,
  quoteCents?: number,
  currency?: "eur" | "pln",
): CrmLeadPayload {
  return {
    submissionId,
    email: p.email,
    name: p.name,
    company: p.company,
    phone: p.phone ? p.phone : undefined,
    tier: p.tier,
    intent: p.intent,
    courseSlug: p.courseSlug,
    sessionId: p.sessionId,
    seats: p.seats,
    language: p.language,
    locale: p.locale,
    message: buildMessage(p),
    pagePath: p.pagePath,
    quoteCents,
    currency,
    utm: extractUtm(p),
  };
}

export function toBlobMarkdown(p: LeadPayload, submittedAt: string, submissionId: string): string {
  const yaml = (value: unknown) => JSON.stringify(value ?? null);
  const message = buildMessage(p);
  return [
    "---",
    `submission_id: ${yaml(submissionId)}`,
    `submitted_at: ${yaml(submittedAt)}`,
    `tier: ${yaml(p.tier)}`,
    `intent: ${yaml(p.intent)}`,
    `name: ${yaml(p.name)}`,
    `email: ${yaml(p.email)}`,
    `company: ${yaml(p.company)}`,
    `phone: ${yaml(p.phone)}`,
    `course_slug: ${yaml(p.courseSlug)}`,
    `session_id: ${yaml(p.sessionId)}`,
    `seats: ${yaml(p.seats)}`,
    `language: ${yaml(p.language)}`,
    `locale: ${yaml(p.locale)}`,
    `page_path: ${yaml(p.pagePath)}`,
    "---",
    "",
    message ? `## Message\n\n${message}\n` : "",
  ].join("\n");
}
