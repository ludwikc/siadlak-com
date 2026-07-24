import type { FunnelConfig } from "./types";

/**
 * Funnel event dates rendered from config `eventStart` — the single source of
 * truth. Always formatted in Europe/Warsaw so a stored ISO offset never leaks
 * the viewer's local timezone into the copy.
 */
const TZ = "Europe/Warsaw";
const LOCALE = "pl-PL";

const eventEnd = (c: FunnelConfig): Date =>
  new Date(new Date(c.eventStart).getTime() + c.eventDurationMinutes * 60_000);

const time = (d: Date): string =>
  new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, hour: "2-digit", minute: "2-digit" }).format(d);

/** e.g. "poniedziałek, 2 lutego 2026" */
export function formatEventDate(c: FunnelConfig): string {
  return new Intl.DateTimeFormat(LOCALE, {
    timeZone: TZ,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(c.eventStart));
}

/** e.g. "20:05" */
export function formatEventTime(c: FunnelConfig): string {
  return time(new Date(c.eventStart));
}

/** e.g. "20:05–21:35" */
export function formatEventTimeRange(c: FunnelConfig): string {
  return `${time(new Date(c.eventStart))}–${time(eventEnd(c))}`;
}

/** e.g. "2.02" */
export function formatEventDateShort(c: FunnelConfig): string {
  const parts = new Intl.DateTimeFormat(LOCALE, {
    timeZone: TZ,
    day: "numeric",
    month: "2-digit",
  }).formatToParts(new Date(c.eventStart));
  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  return `${day}.${month}`;
}
