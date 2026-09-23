import { describe, expect, it } from "vitest";
import { leadSchema } from "./lead-schema";

const basePublic = {
  name: "Anna Kowalska",
  email: "anna@firma.pl",
  company: "Firma sp. z o.o.",
  tier: "public" as const,
  language: "pl" as const,
  locale: "pl" as const,
  consent: true as const,
  pagePath: "/szkolenia/kursy/dp-600",
  courseSlug: "dp-600" as const,
  seats: 2,
};

describe("leadSchema", () => {
  it("parses a valid seat booking", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "seat", sessionId: "dp-600-2026-11-16-pl" });
    expect(result.success).toBe(true);
  });

  it("parses a valid waitlist request without a session id", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist" });
    expect(result.success).toBe(true);
  });

  it("parses a valid briefing request", () => {
    const result = leadSchema.safeParse({
      name: "Jan Nowak",
      email: "jan@firma.pl",
      company: "Firma sp. z o.o.",
      tier: "briefing",
      intent: "briefing",
      language: "pl",
      locale: "pl",
      consent: true,
      pagePath: "/szkolenia/briefing-dla-zarzadu",
      topic: "Copilot dla zarządu",
    });
    expect(result.success).toBe(true);
  });

  it("parses a valid enterprise scope-call request", () => {
    const result = leadSchema.safeParse({
      name: "Piotr Wiśniewski",
      email: "piotr@firma.pl",
      company: "Enterprise sp. z o.o.",
      tier: "enterprise",
      intent: "scope-call",
      language: "en",
      locale: "en",
      consent: true,
      pagePath: "/mct/enterprise",
    });
    expect(result.success).toBe(true);
  });

  it("fails on courseSlug when a public lead has none", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", courseSlug: undefined });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((i) => i.path.join("."))).toContain("courseSlug");
    }
  });

  it("rejects seats below the minimum", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", seats: 0 });
    expect(result.success).toBe(false);
  });

  it("rejects seats above the cap", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", seats: 9 });
    expect(result.success).toBe(false);
  });

  it("rejects a false consent value", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects a filled honeypot field", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", website: "http://spam.example" });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown course slug", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", courseSlug: "not-a-real-course" });
    expect(result.success).toBe(false);
  });

  it("fails on sessionId when a public seat booking has none", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "seat" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((i) => i.path.join("."))).toContain("sessionId");
    }
  });

  it("fails on topic when a briefing request has none", () => {
    const result = leadSchema.safeParse({
      name: "Jan Nowak",
      email: "jan@firma.pl",
      company: "Firma sp. z o.o.",
      tier: "briefing",
      intent: "briefing",
      language: "pl",
      locale: "pl",
      consent: true,
      pagePath: "/szkolenia/briefing-dla-zarzadu",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((i) => i.path.join("."))).toContain("topic");
    }
  });

  it("coerces a numeric-string seat count", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", seats: "3" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.seats).toBe(3);
    }
  });

  it("accepts an empty phone string", () => {
    const result = leadSchema.safeParse({ ...basePublic, intent: "waitlist", phone: "" });
    expect(result.success).toBe(true);
  });

  it("accepts a uuid submissionId and rejects a non-uuid one", () => {
    const ok = leadSchema.safeParse({
      ...basePublic,
      intent: "waitlist",
      submissionId: "3f1c2b8e-5d4a-4c7b-9e2f-1a6b0c9d8e7f",
    });
    const bad = leadSchema.safeParse({ ...basePublic, intent: "waitlist", submissionId: "not-a-uuid" });
    expect([ok.success, bad.success]).toEqual([true, false]);
    if (!bad.success) {
      expect(bad.error.issues.map((i) => i.path.join("."))).toEqual(["submissionId"]);
    }
  });
});
