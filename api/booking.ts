// Env vars: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN (OAuth for
// ludwikc@siadlak.com with the calendar.events scope — see docs/booking-setup.md),
// BOOKING_CALENDAR_ID (defaults to "primary"). Optional notifications on every
// new request: BOOKING_NOTIFY_EMAIL (Gmail API; the refresh token also needs the
// gmail.send scope), CALLMEBOT_PHONE + CALLMEBOT_APIKEY (WhatsApp via CallMeBot),
// BOOKING_ALERT_WEBHOOK (Discord-style webhook).
import { randomUUID } from "node:crypto";
import {
  addDays,
  bookingWindow,
  busyDays,
  freeWorkdays,
  startDatesFor,
  type CalendarEvent,
} from "../src/config/booking/availability.js";
import { findCenter } from "../src/config/booking/catalog.js";
import { buildNotification, toGmailRaw } from "../src/config/booking/notify.js";
import type { BookingNotification } from "../src/config/booking/notify";
import { bookingRequestSchema, buildBlockerEvent } from "../src/config/booking/request.js";

type BookingRequest = {
  method?: string;
  body?: unknown;
  query?: Record<string, string | string[] | undefined>;
  headers?: Record<string, string | string[] | undefined>;
};

type BookingResponse = {
  status: (code: number) => BookingResponse;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const CALENDAR_API = "https://www.googleapis.com/calendar/v3";
const GOOGLE_TIMEOUT_MS = 8000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 10_000;

const rateLimitHits = new Map<string, number[]>();

function isRateLimited(req: BookingRequest): boolean {
  const header = req.headers?.["x-forwarded-for"];
  const ip = ((Array.isArray(header) ? header[0] : header) ?? "unknown").split(",")[0].trim();
  const now = Date.now();
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) return true;
  hits.push(now);
  rateLimitHits.set(ip, hits);
  return false;
}

class CalendarNotConfigured extends Error {}

async function googleFetch(url: string, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GOOGLE_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function accessToken(): Promise<string> {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) throw new CalendarNotConfigured();
  const response = await googleFetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  if (!response.ok) throw new Error(`google-token-${response.status} ${(await response.text()).slice(0, 200)}`);
  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

const calendarUrl = () =>
  `${CALENDAR_API}/calendars/${encodeURIComponent(process.env.BOOKING_CALENDAR_ID || "primary")}/events`;

async function listEvents(token: string, from: string, to: string): Promise<CalendarEvent[]> {
  const events: CalendarEvent[] = [];
  let pageToken: string | undefined;
  do {
    const params = new URLSearchParams({
      timeMin: `${addDays(from, -1)}T00:00:00Z`,
      timeMax: `${addDays(to, 1)}T23:59:59Z`,
      singleEvents: "true",
      maxResults: "2500",
      fields: "nextPageToken,items(status,transparency,eventType,start,end,attendees(self,responseStatus))",
    });
    if (pageToken) params.set("pageToken", pageToken);
    const response = await googleFetch(`${calendarUrl()}?${params}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error(`google-events-${response.status} ${(await response.text()).slice(0, 200)}`);
    const data = (await response.json()) as { items?: CalendarEvent[]; nextPageToken?: string };
    events.push(...(data.items ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);
  return events;
}

async function currentFreeDays(token: string) {
  const window = bookingWindow(new Date());
  const events = await listEvents(token, window.from, window.to);
  return { ...window, freeDays: freeWorkdays(busyDays(events), window.from, window.to) };
}

async function expectOk(label: string, response: Response): Promise<void> {
  if (!response.ok) throw new Error(`${label}-${response.status} ${(await response.text()).slice(0, 200)}`);
}

async function notifyEmail(token: string, notification: BookingNotification, replyTo: string): Promise<void> {
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  if (!to) return;
  const response = await googleFetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ raw: toGmailRaw(to, notification, replyTo) }),
  });
  await expectOk("gmail-send", response);
}

async function notifyWhatsApp({ text }: BookingNotification): Promise<void> {
  const { CALLMEBOT_PHONE, CALLMEBOT_APIKEY } = process.env;
  if (!CALLMEBOT_PHONE || !CALLMEBOT_APIKEY) return;
  const params = new URLSearchParams({ phone: CALLMEBOT_PHONE, text, apikey: CALLMEBOT_APIKEY });
  await expectOk("callmebot", await googleFetch(`https://api.callmebot.com/whatsapp.php?${params}`));
}

async function notifyWebhook({ text }: BookingNotification): Promise<void> {
  const webhook = process.env.BOOKING_ALERT_WEBHOOK;
  if (!webhook) return;
  const response = await googleFetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ content: text }),
  });
  await expectOk("webhook", response);
}

async function notifyAll(token: string, notification: BookingNotification, replyTo: string): Promise<void> {
  const results = await Promise.allSettled([
    notifyEmail(token, notification, replyTo),
    notifyWhatsApp(notification),
    notifyWebhook(notification),
  ]);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("booking-notify-failed", result.reason instanceof Error ? result.reason.message : result.reason);
    }
  }
}

function fail(res: BookingResponse, error: unknown) {
  if (error instanceof CalendarNotConfigured) {
    res.status(503).json({ ok: false, error: "calendar-not-configured" });
    return;
  }
  console.error("booking", error instanceof Error ? error.message : error);
  res.status(502).json({ ok: false, error: "calendar-unavailable" });
}

async function handleGet(req: BookingRequest, res: BookingResponse) {
  const raw = req.query?.center;
  if (!findCenter(Array.isArray(raw) ? raw[0] : raw)) {
    res.status(404).json({ ok: false, error: "unknown-center" });
    return;
  }
  try {
    const availability = await currentFreeDays(await accessToken());
    res.setHeader("Cache-Control", "private, no-store");
    res.status(200).json({ ok: true, ...availability });
  } catch (error) {
    fail(res, error);
  }
}

async function handlePost(req: BookingRequest, res: BookingResponse) {
  const raw = (typeof req.body === "object" && req.body !== null ? req.body : {}) as Record<string, unknown>;

  if (typeof raw.website === "string" && raw.website.length > 0) {
    res.status(200).json({ ok: true });
    return;
  }
  if (isRateLimited(req)) {
    res.status(429).json({ ok: false, error: "rate-limited" });
    return;
  }
  if (JSON.stringify(raw).length > MAX_BODY_BYTES) {
    res.status(400).json({ ok: false, error: "payload-too-large" });
    return;
  }

  const parsed = bookingRequestSchema.safeParse(raw);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "invalid-submission", issues: parsed.error.issues });
    return;
  }
  const request = parsed.data;
  const center = findCenter(request.center);
  if (!center) {
    res.status(404).json({ ok: false, error: "unknown-center" });
    return;
  }

  try {
    const token = await accessToken();
    const { freeDays } = await currentFreeDays(token);
    if (!startDatesFor(freeDays, request.days).includes(request.startDate)) {
      res.status(409).json({ ok: false, error: "slot-taken" });
      return;
    }

    const requestId = randomUUID();
    const event = buildBlockerEvent(request, center, requestId);
    const response = await googleFetch(calendarUrl(), {
      method: "POST",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
      body: JSON.stringify(event),
    });
    await expectOk("google-insert", response);
    const created = (await response.json().catch(() => ({}))) as { htmlLink?: string };

    console.log("booking", JSON.stringify({ requestId, center: center.slug, startDate: request.startDate }));
    await notifyAll(token, buildNotification(request, center, created.htmlLink), request.email);
    res.status(200).json({ ok: true, requestId });
  } catch (error) {
    fail(res, error);
  }
}

export default async function handler(req: BookingRequest, res: BookingResponse) {
  if (req.method === "GET") return handleGet(req, res);
  if (req.method === "POST") return handlePost(req, res);
  res.status(405).json({ ok: false, error: "method-not-allowed" });
}
