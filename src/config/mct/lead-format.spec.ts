import { describe, expect, it } from "vitest";
import type { LeadPayload } from "./lead-schema";
import { toBlobMarkdown, toCrmPayload, toDealTitle } from "./lead-format";

describe("toDealTitle", () => {
  it("joins the tier and company into a deal title", () => {
    const p = { tier: "enterprise", company: "Firma sp. z o.o." } as LeadPayload;
    expect(toDealTitle(p)).toBe("MCT — enterprise — Firma sp. z o.o.");
  });
});

describe("toCrmPayload", () => {
  it("folds enterprise fields into message and collects attribution keys into utm", () => {
    const payload: LeadPayload & Record<string, unknown> = {
      name: "Anna Kowalska",
      email: "anna@firma.pl",
      company: "Firma sp. z o.o.",
      phone: "+48 600 000 000",
      tier: "enterprise",
      intent: "scope-call",
      language: "pl",
      locale: "pl",
      consent: true,
      pagePath: "/mct/enterprise",
      topic: "Copilot rollout",
      windows: "Q1 2027",
      leaders: 3,
      stack: ["Fabric", "Copilot Studio"],
      teamSize: "50-100",
      timeline: "3 months",
      delivery: "onsite",
      procurement: "framework agreement needed",
      wantsPrivateQuote: true,
      message: "Looking to scale training across three business units.",
      utm_source: "linkedin",
      utm_campaign: "q1-outreach",
      ft_utm_source: "newsletter",
      irrelevant_extra: "should be ignored",
    };

    expect(toCrmPayload(payload, "sub_123", 159300, "eur")).toEqual({
      submissionId: "sub_123",
      email: "anna@firma.pl",
      name: "Anna Kowalska",
      company: "Firma sp. z o.o.",
      phone: "+48 600 000 000",
      tier: "enterprise",
      intent: "scope-call",
      courseSlug: undefined,
      sessionId: undefined,
      seats: undefined,
      language: "pl",
      locale: "pl",
      message:
        "Topic: Copilot rollout\nWindows: Q1 2027\nLeaders: 3\nStack: Fabric, Copilot Studio\nTeam size: 50-100\nTimeline: 3 months\nDelivery: onsite\nProcurement: framework agreement needed\nWants private quote: yes\n\nLooking to scale training across three business units.",
      pagePath: "/mct/enterprise",
      quoteCents: 159300,
      currency: "eur",
      utm: { utm_source: "linkedin", utm_campaign: "q1-outreach", ft_utm_source: "newsletter" },
    });
  });

  it("omits message and utm when there are no extras or attribution keys", () => {
    const payload: LeadPayload & Record<string, unknown> = {
      name: "Jan Nowak",
      email: "jan@firma.pl",
      company: "Firma sp. z o.o.",
      tier: "public",
      intent: "seat",
      language: "pl",
      locale: "pl",
      consent: true,
      pagePath: "/szkolenia/kursy/dp-600",
      courseSlug: "dp-600",
      sessionId: "dp-600-2026-11-16-pl",
      seats: 2,
    };

    expect(toCrmPayload(payload, "sub_456")).toEqual({
      submissionId: "sub_456",
      email: "jan@firma.pl",
      name: "Jan Nowak",
      company: "Firma sp. z o.o.",
      phone: undefined,
      tier: "public",
      intent: "seat",
      courseSlug: "dp-600",
      sessionId: "dp-600-2026-11-16-pl",
      seats: 2,
      language: "pl",
      locale: "pl",
      message: undefined,
      pagePath: "/szkolenia/kursy/dp-600",
      quoteCents: undefined,
      currency: undefined,
      utm: undefined,
    });
  });
});

describe("toBlobMarkdown", () => {
  it("includes the submission id, contact fields and folded message body", () => {
    const payload: LeadPayload = {
      name: "Anna Kowalska",
      email: "anna@firma.pl",
      company: "Firma sp. z o.o.",
      tier: "briefing",
      intent: "briefing",
      language: "pl",
      locale: "pl",
      consent: true,
      pagePath: "/szkolenia/briefing-dla-zarzadu",
      topic: "Copilot dla zarządu",
    };

    const markdown = toBlobMarkdown(payload, "2026-09-23T10:00:00.000Z", "sub_789");

    expect(markdown).toContain('submission_id: "sub_789"');
    expect(markdown).toContain('email: "anna@firma.pl"');
    expect(markdown).toContain("Topic: Copilot dla zarządu");
  });
});
