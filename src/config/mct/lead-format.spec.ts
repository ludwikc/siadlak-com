import { describe, expect, it } from "vitest";
import type { LeadPayload } from "./lead-schema";
import { toBlobMarkdown, toCrmPayload, type CrmLeadPayload } from "./lead-format";

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
  it("renders the full CRM payload, including quote and attribution, as frontmatter markdown", () => {
    const crmPayload: CrmLeadPayload = {
      submissionId: "sub_789",
      email: "anna@firma.pl",
      name: "Anna Kowalska",
      company: "Firma sp. z o.o.",
      phone: undefined,
      tier: "briefing",
      intent: "briefing",
      courseSlug: undefined,
      sessionId: undefined,
      seats: undefined,
      language: "pl",
      locale: "pl",
      message: "Topic: Copilot dla zarządu",
      pagePath: "/szkolenia/briefing-dla-zarzadu",
      quoteCents: 790000,
      currency: "pln",
      utm: { utm_source: "newsletter" },
    };

    const expected = [
      "---",
      'submission_id: "sub_789"',
      'submitted_at: "2026-09-23T10:00:00.000Z"',
      'tier: "briefing"',
      'intent: "briefing"',
      'name: "Anna Kowalska"',
      'email: "anna@firma.pl"',
      'company: "Firma sp. z o.o."',
      "phone: null",
      "course_slug: null",
      "session_id: null",
      "seats: null",
      'language: "pl"',
      'locale: "pl"',
      'page_path: "/szkolenia/briefing-dla-zarzadu"',
      "quote_cents: 790000",
      'currency: "pln"',
      'utm: {"utm_source":"newsletter"}',
      "---",
      "",
      "## Message\n\nTopic: Copilot dla zarządu\n",
    ].join("\n");

    expect(toBlobMarkdown(crmPayload, "2026-09-23T10:00:00.000Z")).toEqual(expected);
  });
});
