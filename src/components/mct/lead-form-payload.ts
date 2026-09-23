import type { z } from "zod";
import type { BriefingTopicId, DeliveryOption, FormMode, StackOption } from "@/config/mct/copy";
import type { leadSchema } from "@/config/mct/lead-schema";
import type { CourseSlug, LeadIntent, Locale, TierId } from "@/config/mct/types";

export const NOTIFY_SESSION = "notify";
export const PRIVATE_QUOTE_FROM_SEATS = 6;

export type TopicChoice = BriefingTopicId | "custom";

export type LeadFormValues = {
  mode: FormMode;
  courseSlug: CourseSlug | "";
  sessionChoice: string;
  seats: number;
  wantsPrivateQuote: boolean;
  topic: TopicChoice | "";
  windows: string;
  leaders: string;
  stack: StackOption[];
  teamSize: string;
  timeline: string;
  delivery: DeliveryOption | "";
  procurement: string;
  language: Locale;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  consent: boolean;
  website: string;
};

export type LeadPayloadDraft = Omit<z.input<typeof leadSchema>, "consent"> & { consent: boolean };

export type LeadPayloadContext = {
  locale: Locale;
  pagePath: string;
  topicLabels: Record<TopicChoice, string>;
};

export const MODE_TIER: Record<FormMode, TierId> = {
  seat: "public",
  briefing: "briefing",
  scope: "enterprise",
};

export const TIER_MODE: Record<TierId, FormMode> = {
  public: "seat",
  briefing: "briefing",
  enterprise: "scope",
};

const optionalText = (value: string): string | undefined => {
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
};

const optionalNumber = (value: string): number | undefined =>
  value.trim() === "" ? undefined : Number(value);

export function pickSessionChoice(
  sessionIds: string[],
  preferred?: { intent?: LeadIntent; sessionId?: string },
): string {
  if (preferred?.intent === "waitlist") return NOTIFY_SESSION;
  if (preferred?.sessionId && sessionIds.includes(preferred.sessionId)) return preferred.sessionId;
  return sessionIds[0] ?? NOTIFY_SESSION;
}

// leadSchema's superRefine is skipped while a base field aborts (e.g. unchecked consent), so these
// per-mode requirements are listed up front to show every missing field on the first submit.
export function missingModeFields(values: LeadFormValues): Array<keyof LeadFormValues> {
  if (values.mode === "seat" && !values.courseSlug) return ["courseSlug"];
  if (values.mode === "briefing" && !values.topic) return ["topic"];
  return [];
}

export function buildLeadPayload(values: LeadFormValues, ctx: LeadPayloadContext): LeadPayloadDraft {
  const base = {
    tier: MODE_TIER[values.mode],
    locale: ctx.locale,
    pagePath: ctx.pagePath,
    language: values.language,
    name: values.name,
    email: values.email,
    company: values.company,
    phone: optionalText(values.phone),
    consent: values.consent,
    ...(values.website ? { website: values.website } : {}),
  };

  if (values.mode === "seat") {
    const sessionId = values.sessionChoice === NOTIFY_SESSION ? undefined : optionalText(values.sessionChoice);
    return {
      ...base,
      intent: sessionId ? "seat" : "waitlist",
      courseSlug: values.courseSlug || undefined,
      sessionId,
      seats: values.seats,
      wantsPrivateQuote: values.seats >= PRIVATE_QUOTE_FROM_SEATS ? values.wantsPrivateQuote : undefined,
      message: optionalText(values.message),
    };
  }

  if (values.mode === "briefing") {
    return {
      ...base,
      intent: "briefing",
      topic: values.topic ? ctx.topicLabels[values.topic] : undefined,
      windows: optionalText(values.windows),
      leaders: optionalNumber(values.leaders),
      message: optionalText(values.message),
    };
  }

  return {
    ...base,
    intent: "scope-call",
    courseSlug: values.courseSlug || undefined,
    stack: values.stack.length > 0 ? values.stack : undefined,
    teamSize: optionalText(values.teamSize),
    timeline: optionalText(values.timeline),
    delivery: values.delivery || undefined,
    procurement: optionalText(values.procurement),
  };
}
