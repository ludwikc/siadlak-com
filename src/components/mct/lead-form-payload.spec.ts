import { describe, expect, it } from "vitest";
import { leadSchema } from "@/config/mct/lead-schema";
import type { ScheduledSession } from "@/config/mct/types";
import {
  buildLeadPayload,
  leadRequestBody,
  missingModeFields,
  nextSessionChoice,
  NOTIFY_SESSION,
  pickSessionChoice,
} from "./lead-form-payload";
import type { LeadFormValues, LeadPayloadContext } from "./lead-form-payload";

const ctx: LeadPayloadContext = {
  locale: "en",
  pagePath: "/mct",
  topicLabels: { a: "Copilot ROI", b: "Fabric build vs buy", c: "AI governance", custom: "My own question" },
};

const blank: LeadFormValues = {
  mode: "seat",
  courseSlug: "",
  sessionChoice: NOTIFY_SESSION,
  seats: 1,
  wantsPrivateQuote: false,
  topic: "",
  windows: "",
  leaders: "",
  stack: [],
  teamSize: "",
  timeline: "",
  delivery: "",
  procurement: "",
  language: "en",
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  phone: "",
  message: "",
  consent: true,
  website: "",
};

const contact = {
  locale: "en",
  pagePath: "/mct",
  language: "en",
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  consent: true,
};

const issuePaths = (payload: unknown) => {
  const result = leadSchema.safeParse(payload);
  return result.success ? [] : result.error.issues.map((issue) => issue.path.join("."));
};

describe("buildLeadPayload", () => {
  it("builds a seat request for a chosen session that the lead schema accepts", () => {
    const payload = buildLeadPayload(
      { ...blank, courseSlug: "dp-600", sessionChoice: "dp-600-2026-11-16-en", seats: 3, message: " Hi " },
      ctx,
    );

    expect(JSON.parse(JSON.stringify(payload))).toEqual({
      ...contact,
      tier: "public",
      intent: "seat",
      courseSlug: "dp-600",
      sessionId: "dp-600-2026-11-16-en",
      seats: 3,
      message: "Hi",
    });
    expect(issuePaths(payload)).toEqual([]);
  });

  it("turns 'notify me' into a waitlist request with no sessionId key", () => {
    const payload = buildLeadPayload({ ...blank, courseSlug: "dp-600", seats: 2 }, ctx);

    expect(JSON.parse(JSON.stringify(payload))).toEqual({
      ...contact,
      tier: "public",
      intent: "waitlist",
      courseSlug: "dp-600",
      seats: 2,
    });
    expect(issuePaths(payload)).toEqual([]);
  });

  it("sends wantsPrivateQuote only from six seats up", () => {
    const five = buildLeadPayload({ ...blank, courseSlug: "dp-600", seats: 5, wantsPrivateQuote: true }, ctx);
    const six = buildLeadPayload({ ...blank, courseSlug: "dp-600", seats: 6, wantsPrivateQuote: true }, ctx);

    expect([five.wantsPrivateQuote, six.wantsPrivateQuote]).toEqual([undefined, true]);
  });

  it("flags a missing course in seat mode", () => {
    expect(issuePaths(buildLeadPayload(blank, ctx))).toEqual(["courseSlug"]);
  });

  it("builds a briefing request with the topic label and omits empty leaders", () => {
    const payload = buildLeadPayload(
      { ...blank, mode: "briefing", topic: "b", windows: "Tue AM", courseSlug: "dp-600", seats: 4 },
      ctx,
    );

    expect(JSON.parse(JSON.stringify(payload))).toEqual({
      ...contact,
      tier: "briefing",
      intent: "briefing",
      topic: "Fabric build vs buy",
      windows: "Tue AM",
    });
    expect(issuePaths(payload)).toEqual([]);
  });

  it("sends leaders as a number and flags out-of-range values and a missing topic", () => {
    expect(buildLeadPayload({ ...blank, mode: "briefing", topic: "a", leaders: "7" }, ctx).leaders).toEqual(7);
    expect(issuePaths(buildLeadPayload({ ...blank, mode: "briefing", leaders: "11" }, ctx))).toEqual([
      "leaders",
      "topic",
    ]);
  });

  it("builds a scope request with stack keys and no seat fields", () => {
    const payload = buildLeadPayload(
      {
        ...blank,
        mode: "scope",
        stack: ["fabric", "copilot"],
        teamSize: "12",
        timeline: "Q1",
        delivery: "hybrid",
        procurement: "PO required",
        phone: "+48 510",
        message: "ignored in scope mode",
        seats: 7,
      },
      ctx,
    );

    expect(JSON.parse(JSON.stringify(payload))).toEqual({
      ...contact,
      phone: "+48 510",
      tier: "enterprise",
      intent: "scope-call",
      stack: ["fabric", "copilot"],
      teamSize: "12",
      timeline: "Q1",
      delivery: "hybrid",
      procurement: "PO required",
    });
    expect(issuePaths(payload)).toEqual([]);
  });

  it("keeps a prefilled course on a scope request", () => {
    expect(buildLeadPayload({ ...blank, mode: "scope", courseSlug: "dp-600" }, ctx).courseSlug).toEqual("dp-600");
  });

  it("keeps a filled honeypot out of the validated payload and flags missing consent", () => {
    const payload = buildLeadPayload({ ...blank, mode: "scope", consent: false, website: "autofill" }, ctx);

    expect("website" in payload).toEqual(false);
    expect(issuePaths(payload)).toEqual(["consent"]);
  });
});

describe("pickSessionChoice", () => {
  const ids = ["s1", "s2"];

  it("prefers the requested session when it is still offered", () => {
    expect(pickSessionChoice(ids, { intent: "seat", sessionId: "s2" })).toEqual("s2");
  });

  it("falls back to the earliest session, or to notify when none is offered", () => {
    expect(pickSessionChoice(ids, { sessionId: "gone" })).toEqual("s1");
    expect(pickSessionChoice([], { intent: "seat" })).toEqual(NOTIFY_SESSION);
  });

  it("returns notify for a waitlist prefill even when sessions exist", () => {
    expect(pickSessionChoice(ids, { intent: "waitlist", sessionId: "s1" })).toEqual(NOTIFY_SESSION);
  });
});

describe("missingModeFields", () => {
  it("lists the per-mode required field the schema refinement would only report later", () => {
    expect([
      missingModeFields({ ...blank, name: "" }),
      missingModeFields({ ...blank, courseSlug: "dp-600" }),
      missingModeFields({ ...blank, mode: "briefing" }),
      missingModeFields({ ...blank, mode: "briefing", topic: "custom" }),
      missingModeFields({ ...blank, mode: "scope" }),
    ]).toEqual([["courseSlug"], [], ["topic"], [], []]);
  });
});

describe("leadRequestBody", () => {
  const payload = buildLeadPayload({ ...blank, mode: "scope" }, ctx);

  it("adds the honeypot only when it has a value and never lets attribution override the payload", () => {
    expect([
      leadRequestBody(payload, "", { utm_source: "li", tier: "spoofed" }),
      leadRequestBody(payload, "bot.example", {}),
    ]).toEqual([
      { utm_source: "li", ...payload },
      { ...payload, website: "bot.example" },
    ]);
  });

  it("carries the client submission id, which attribution cannot override, and the schema accepts it", () => {
    const submissionId = "3f1c2b8e-5d4a-4c7b-9e2f-1a6b0c9d8e7f";
    const body = leadRequestBody(payload, "", { submissionId: "spoofed" }, submissionId);

    expect(body).toEqual({ ...payload, submissionId });
    expect(issuePaths(body)).toEqual([]);
  });

  it("omits submissionId when none was generated", () => {
    expect("submissionId" in leadRequestBody(payload, "", {})).toEqual(false);
  });
});

describe("nextSessionChoice", () => {
  const session = (id: string, courseSlug: ScheduledSession["courseSlug"]): ScheduledSession => ({
    id,
    courseSlug,
    startsAt: "2026-11-16T09:00:00+01:00",
    days: 2,
    language: "en",
    seatsTotal: 8,
    status: "open",
  });
  const upcoming = [session("dp-a", "dp-600"), session("dp-b", "dp-600"), session("sql-a", "dp-300")];

  it("picks the prefilled session", () => {
    expect(nextSessionChoice("dp-a", { intent: "seat", courseSlug: "dp-600", sessionId: "dp-b" }, "dp-600", upcoming)).toEqual(
      "dp-b",
    );
  });

  it("picks the earliest session of a prefilled course", () => {
    expect(nextSessionChoice("dp-b", { intent: "seat", courseSlug: "dp-300" }, "dp-600", upcoming)).toEqual("sql-a");
  });

  it("keeps the user's selection when the prefill names no course or session", () => {
    expect(nextSessionChoice("dp-b", { intent: "seat" }, "dp-600", upcoming)).toEqual("dp-b");
  });
});
