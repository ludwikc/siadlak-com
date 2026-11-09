export const BOOKING_TIME_ZONE = "Europe/Warsaw";
export const WORKDAY_START_HOUR = 9;
export const WORKDAY_END_HOUR = 17;
export const MAX_TRAINING_DAYS = 5;
export const HORIZON_MONTHS = 3;

export type CalendarEvent = {
  status?: string;
  transparency?: string;
  eventType?: string;
  start?: { date?: string; dateTime?: string };
  end?: { date?: string; dateTime?: string };
  attendees?: Array<{ self?: boolean; responseStatus?: string }>;
};

const IGNORED_EVENT_TYPES = new Set(["workingLocation", "birthday"]);
const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;
const MAX_EVENT_SPAN_DAYS = 400;

const keyToStamp = (key: string): number => {
  const [y, m, d] = key.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
};

const stampToKey = (stamp: number): string => new Date(stamp).toISOString().slice(0, 10);

export const addDays = (key: string, days: number): string => stampToKey(keyToStamp(key) + days * DAY_MS);

export const isoWeekday = (key: string): number => new Date(keyToStamp(key)).getUTCDay() || 7;

export const isWeekend = (key: string): boolean => isoWeekday(key) > 5;

export const isDateKey = (value: string): boolean =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) && stampToKey(keyToStamp(value)) === value;

const wallClockStamp = (instant: Date, timeZone: string): number => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(instant)
      .map((p) => [p.type, p.value]),
  );
  return Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );
};

export const todayKey = (now: Date, timeZone = BOOKING_TIME_ZONE): string =>
  stampToKey(Math.floor(wallClockStamp(now, timeZone) / DAY_MS) * DAY_MS);

const isDeclined = (event: CalendarEvent): boolean =>
  event.attendees?.some((a) => a.self && a.responseStatus === "declined") ?? false;

export function busyDays(events: CalendarEvent[], timeZone = BOOKING_TIME_ZONE): Set<string> {
  const busy = new Set<string>();
  for (const event of events) {
    if (event.status === "cancelled" || isDeclined(event)) continue;
    if (event.eventType && IGNORED_EVENT_TYPES.has(event.eventType)) continue;

    const { start, end } = event;
    if (start?.date && end?.date) {
      for (let day = start.date, i = 0; day < end.date && i < MAX_EVENT_SPAN_DAYS; day = addDays(day, 1), i++) {
        busy.add(day);
      }
      continue;
    }
    if (!start?.dateTime || !end?.dateTime || event.transparency === "transparent") continue;

    const from = wallClockStamp(new Date(start.dateTime), timeZone);
    const to = wallClockStamp(new Date(end.dateTime), timeZone);
    for (
      let day = Math.floor(from / DAY_MS) * DAY_MS, i = 0;
      day < to && i < MAX_EVENT_SPAN_DAYS;
      day += DAY_MS, i++
    ) {
      const windowStart = day + WORKDAY_START_HOUR * HOUR_MS;
      const windowEnd = day + WORKDAY_END_HOUR * HOUR_MS;
      if (from < windowEnd && to > windowStart) busy.add(stampToKey(day));
    }
  }
  return busy;
}

export function bookingWindow(now: Date, timeZone = BOOKING_TIME_ZONE): { from: string; to: string } {
  const today = todayKey(now, timeZone);
  const [y, m, d] = today.split("-").map(Number);
  return { from: addDays(today, 1), to: stampToKey(Date.UTC(y, m - 1 + HORIZON_MONTHS, d)) };
}

export function freeWorkdays(busy: Set<string>, from: string, to: string): string[] {
  const free: string[] = [];
  for (let day = from; day <= to; day = addDays(day, 1)) {
    if (!isWeekend(day) && !busy.has(day)) free.push(day);
  }
  return free;
}

export const trainingDates = (start: string, days: number): string[] =>
  Array.from({ length: days }, (_, i) => addDays(start, i));

export function startDatesFor(free: string[], days: number): string[] {
  if (!Number.isInteger(days) || days < 1 || days > MAX_TRAINING_DAYS) return [];
  const freeSet = new Set(free);
  return free.filter(
    (start) =>
      isoWeekday(start) + days - 1 <= 5 && trainingDates(start, days).every((day) => freeSet.has(day)),
  );
}
