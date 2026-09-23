import type { CourseSlug, Locale, ScheduledSession } from "./types";

const TZ = "Europe/Warsaw";

export const sessionHoursLabel = "09:00–17:00 CET/CEST";

// Approximates 17:00 Europe/Warsaw on the last day as startsAt + (days*24h − 16h);
// does not correct for a DST transition falling inside a multi-day session.
export function sessionEndsAt(s: ScheduledSession): Date {
  return new Date(new Date(s.startsAt).getTime() + (s.days * 24 - 16) * 60 * 60 * 1000);
}

export function getUpcomingSessions(sessions: ScheduledSession[], now: Date): ScheduledSession[] {
  return sessions
    .filter((s) => s.status !== "cancelled" && new Date(s.startsAt) > now)
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
}

export function getSessionsForCourse(
  sessions: ScheduledSession[],
  slug: CourseSlug,
  now: Date,
): ScheduledSession[] {
  return getUpcomingSessions(sessions, now).filter((s) => s.courseSlug === slug);
}

export function nextSession(sessions: ScheduledSession[], now: Date): ScheduledSession | undefined {
  return getUpcomingSessions(sessions, now)[0];
}

const fullDate = (d: Date, locale: Locale): string =>
  new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  }).format(d);

export function formatSessionDate(s: ScheduledSession, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  }).format(new Date(s.startsAt));
}

export function formatSessionRange(s: ScheduledSession, locale: Locale): string {
  const start = new Date(s.startsAt);
  if (s.days === 1) return fullDate(start, locale);

  const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
  const partsOf = (d: Date) =>
    new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: TZ,
    }).formatToParts(d);
  const valueOf = (parts: Intl.DateTimeFormatPart[], type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const startParts = partsOf(start);
  const endParts = partsOf(end);
  const sameMonth =
    valueOf(startParts, "month") === valueOf(endParts, "month") &&
    valueOf(startParts, "year") === valueOf(endParts, "year");

  if (sameMonth) {
    return `${valueOf(startParts, "day")}–${valueOf(endParts, "day")} ${valueOf(startParts, "month")} ${valueOf(startParts, "year")}`;
  }
  return `${fullDate(start, locale)} – ${fullDate(end, locale)}`;
}
