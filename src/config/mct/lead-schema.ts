import { z } from "zod";
import { COURSE_SLUGS } from "./slugs.mjs";

export const leadSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(200),
    company: z.string().trim().min(1).max(160),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    tier: z.enum(["public", "briefing", "enterprise"]),
    intent: z.enum(["seat", "waitlist", "briefing", "scope-call"]),
    courseSlug: z.enum(COURSE_SLUGS).optional(),
    sessionId: z.string().trim().max(80).optional(),
    seats: z.coerce.number().int().min(1).max(8).optional(),
    language: z.enum(["en", "pl"]),
    locale: z.enum(["en", "pl"]),
    topic: z.string().trim().max(120).optional(),
    windows: z.string().trim().max(500).optional(),
    leaders: z.coerce.number().int().min(1).max(10).optional(),
    stack: z.array(z.string().max(40)).max(8).optional(),
    teamSize: z.string().trim().max(200).optional(),
    timeline: z.string().trim().max(200).optional(),
    delivery: z.string().trim().max(200).optional(),
    procurement: z.string().trim().max(500).optional(),
    message: z.string().trim().max(4000).optional(),
    consent: z.literal(true),
    pagePath: z.string().max(200),
    wantsPrivateQuote: z.boolean().optional(),
    website: z.string().max(0).optional(), // honeypot
    submissionId: z.string().uuid().optional(),
  })
  .superRefine((v, ctx) => {
    if (v.tier === "public") {
      if (!v.courseSlug) ctx.addIssue({ code: "custom", path: ["courseSlug"], message: "required" });
      if (!v.seats) ctx.addIssue({ code: "custom", path: ["seats"], message: "required" });
      if (v.intent === "seat" && !v.sessionId) ctx.addIssue({ code: "custom", path: ["sessionId"], message: "required" });
    }
    if (v.tier === "briefing" && !v.topic) ctx.addIssue({ code: "custom", path: ["topic"], message: "required" });
  });

export type LeadPayload = z.infer<typeof leadSchema>;
