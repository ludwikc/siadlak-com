import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { fetchMock, putMock } = vi.hoisted(() => ({
  fetchMock: vi.fn(),
  putMock: vi.fn(),
}));

vi.stubGlobal("fetch", fetchMock);

vi.mock("@vercel/blob", () => ({ put: putMock }));

vi.mock("node:crypto", () => ({ randomUUID: () => "test-submission-id" }));

const OPEN_SESSION = {
  id: "sess-open",
  courseSlug: "dp-600",
  startsAt: "2099-01-01T09:00:00+01:00",
  days: 2,
  language: "pl",
  seatsTotal: 8,
  status: "open",
};
const FULL_SESSION = {
  id: "sess-full",
  courseSlug: "dp-600",
  startsAt: "2099-01-01T09:00:00+01:00",
  days: 2,
  language: "pl",
  seatsTotal: 8,
  status: "full",
};

vi.mock("../src/config/mct/schedule", () => ({
  sessions: [OPEN_SESSION, FULL_SESSION],
}));

type FakeResponse = {
  statusCode: number;
  body: unknown;
  status: (code: number) => FakeResponse;
  json: (data: unknown) => void;
};

function makeRes(): FakeResponse {
  const res: FakeResponse = {
    statusCode: 0,
    body: undefined,
    status(code: number) {
      res.statusCode = code;
      return res;
    },
    json(data: unknown) {
      res.body = data;
    },
  };
  return res;
}

async function loadHandler() {
  vi.resetModules();
  const mod = await import("./mct-lead");
  return mod.default;
}

const validSeatBody = {
  name: "Anna Kowalska",
  email: "anna@firma.pl",
  company: "Firma sp. z o.o.",
  tier: "public",
  intent: "seat",
  language: "pl",
  locale: "pl",
  consent: true,
  pagePath: "/szkolenia/kursy/dp-600",
  courseSlug: "dp-600",
  seats: 2,
  sessionId: "sess-open",
};

const ALERT_WEBHOOK = "https://discord.example/api/webhooks/alert";

beforeEach(() => {
  fetchMock.mockReset();
  putMock.mockReset();
  vi.stubEnv("CRM_LEAD_SECRET", "test-secret");
  vi.stubEnv("MCT_LEAD_ALERT_WEBHOOK", "");
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe("mct-lead handler", () => {
  it("GET reports the storage mode", async () => {
    const handler = await loadHandler();
    const withSecret = makeRes();
    await handler({ method: "GET" }, withSecret);
    vi.stubEnv("CRM_LEAD_SECRET", "");
    const withoutSecret = makeRes();
    await handler({ method: "GET" }, withoutSecret);
    expect([withSecret.body, withoutSecret.body]).toEqual([
      { ok: true, storage: "crm" },
      { ok: true, storage: "blob" },
    ]);
  });

  it("rejects a non-GET/POST method with 405", async () => {
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "PUT" }, res);
    expect(res.statusCode).toBe(405);
    expect(res.body).toEqual({ ok: false, error: "method-not-allowed" });
  });

  it("treats a filled honeypot as an indistinguishable success without calling fetch or blob", async () => {
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: { website: "http://spam.example" } }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, ref: "crm" });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(putMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid body with 400", async () => {
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: { name: "A" } }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body).toMatchObject({ ok: false, error: "invalid-submission" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects a seat booking whose sessionId does not match the courseSlug", async () => {
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: { ...validSeatBody, courseSlug: "dp-605" } }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ ok: false, error: "session-unavailable" });
  });

  it("rejects a seat booking against a full session", async () => {
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: { ...validSeatBody, sessionId: "sess-full" } }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ ok: false, error: "session-unavailable" });
  });

  it("returns the CRM contact id on a 2xx response", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ contactId: "contact_1" }),
      text: async () => "",
    });
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: validSeatBody }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, ref: "crm", contactId: "contact_1" });
    expect(putMock).not.toHaveBeenCalled();
  });

  it("falls back to blob storage once when the CRM responds non-2xx", async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
      text: async () => "server error",
    });
    putMock.mockResolvedValue({ url: "https://blob.example/mct-leads/x.md" });
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: validSeatBody }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, ref: "blob" });
    expect(putMock).toHaveBeenCalledTimes(1);
  });

  it("skips the CRM entirely and stores to blob when CRM_LEAD_SECRET is unset", async () => {
    vi.stubEnv("CRM_LEAD_SECRET", "");
    putMock.mockResolvedValue({ url: "https://blob.example/mct-leads/x.md" });
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: validSeatBody }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, ref: "blob" });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(putMock).toHaveBeenCalledTimes(1);
  });

  it("posts one alert to the fallback webhook when the CRM fails", async () => {
    vi.stubEnv("MCT_LEAD_ALERT_WEBHOOK", ALERT_WEBHOOK);
    fetchMock.mockImplementation(async (url: string) =>
      url === ALERT_WEBHOOK
        ? { ok: true, status: 204, json: async () => ({}), text: async () => "" }
        : { ok: false, status: 500, json: async () => ({}), text: async () => "server error" },
    );
    putMock.mockResolvedValue({ url: "https://blob.example/mct-leads/x.md" });
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: validSeatBody }, res);
    const alertCalls = fetchMock.mock.calls.filter(([url]) => url === ALERT_WEBHOOK);
    expect(res.body).toEqual({ ok: true, ref: "blob" });
    expect(alertCalls).toHaveLength(1);
    expect(JSON.parse(alertCalls[0][1].body)).toEqual({
      content: "⚠️ MCT lead fell back to blob (crm-http-500) — public/seat Firma sp. z o.o. · test-submission-id",
    });
  });

  it("keeps the blob response when the alert webhook itself fails", async () => {
    vi.stubEnv("MCT_LEAD_ALERT_WEBHOOK", ALERT_WEBHOOK);
    fetchMock.mockRejectedValue(new Error("everything down"));
    putMock.mockResolvedValue({ url: "https://blob.example/mct-leads/x.md" });
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: validSeatBody }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, ref: "blob" });
  });

  it("uses the client-supplied submissionId for the CRM payload", async () => {
    const submissionId = "3f1c2b8e-5d4a-4c7b-9e2f-1a6b0c9d8e7f";
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ contactId: "contact_1" }),
      text: async () => "",
    });
    const handler = await loadHandler();
    await handler({ method: "POST", body: { ...validSeatBody, submissionId } }, makeRes());
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).submissionId).toEqual(submissionId);
  });

  it("returns 502 when both the CRM call and the blob fallback fail", async () => {
    fetchMock.mockRejectedValue(new Error("network down"));
    putMock.mockRejectedValue(new Error("blob down"));
    const handler = await loadHandler();
    const res = makeRes();
    await handler({ method: "POST", body: validSeatBody }, res);
    expect(res.statusCode).toBe(502);
    expect(res.body).toEqual({ ok: false, error: "store-failed" });
  });

  it("rate-limits the 6th request from the same IP", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ contactId: "c" }),
      text: async () => "",
    });
    const handler = await loadHandler();
    const req = {
      method: "POST",
      body: validSeatBody,
      headers: { "x-forwarded-for": "203.0.113.5" },
    };

    for (let i = 0; i < 5; i += 1) {
      const res = makeRes();
      await handler(req, res);
      expect(res.statusCode).toBe(200);
    }

    const sixth = makeRes();
    await handler(req, sixth);
    expect(sixth.statusCode).toBe(429);
    expect(sixth.body).toEqual({ ok: false, error: "rate-limited" });
  });

  it("does not let 429s themselves consume quota", async () => {
    vi.useFakeTimers();
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ contactId: "c" }),
      text: async () => "",
    });
    const handler = await loadHandler();
    const req = {
      method: "POST",
      body: validSeatBody,
      headers: { "x-forwarded-for": "203.0.113.9" },
    };
    const WINDOW_MS = 10 * 60 * 1000;
    const base = new Date("2026-01-01T00:00:00.000Z");
    vi.setSystemTime(base);

    // Exhaust the 5-request quota.
    for (let i = 0; i < 5; i += 1) {
      await handler(req, makeRes());
    }

    // Hammer the endpoint with rejected requests just before the window
    // elapses. If a 429 wrongly pushed a timestamp, these would keep the
    // window artificially full past its natural expiry.
    vi.setSystemTime(new Date(base.getTime() + WINDOW_MS - 100));
    for (let i = 0; i < 10; i += 1) {
      const res = makeRes();
      await handler(req, res);
      expect(res.statusCode).toBe(429);
    }

    // Once the original 5 accepted hits age out, a fresh request is
    // accepted again — proving the 10 rejections above never counted.
    vi.setSystemTime(new Date(base.getTime() + WINDOW_MS + 50));
    const res = makeRes();
    await handler(req, res);
    expect(res.statusCode).toBe(200);
  });
});
