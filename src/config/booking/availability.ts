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

const easterSunday = (year: number): string => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const g = Math.floor((8 * b + 13) / 25);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 19 * l) / 433);
  const month = Math.floor((h + l - 7 * m + 90) / 25);
  const day = (h + l - 7 * m + 33 * month + 19) % 32;
  return stampToKey(Date.UTC(year, month - 1, day));
};

const FIXED_POLISH_HOLIDAYS = ["01-01", "01-06", "05-01", "05-03", "08-15", "11-01", "11-11", "12-24", "12-25", "12-26"];

export function isPolishHoliday(key: string): boolean {
  if (FIXED_POLISH_HOLIDAYS.includes(key.slice(5))) return true;
  const easter = easterSunday(Number(key.slice(0, 4)));
  return key === addDays(easter, 1) || key === addDays(easter, 60);
}

export function freeWorkdays(busy: Set<string>, from: string, to: string): string[] {
  const free: string[] = [];
  for (let day = from; day <= to; day = addDays(day, 1)) {
    if (!isWeekend(day) && !isPolishHoliday(day) && !busy.has(day)) free.push(day);
  }
  return free;
}

export const trainingDates = (start: string, days: number): string[] =>
  Array.from({ length: days }, (_, i) => addDays(start, i));

export function startDatesFor(free: string[], days: number): string[] {
  if (!isValidTrainingLength(days)) return [];
  const freeSet = new Set(free);
  return free.filter(
    (start) =>
      isoWeekday(start) + days - 1 <= 5 && trainingDates(start, days).every((day) => freeSet.has(day)),
  );
}

export const isValidTrainingLength = (days: number): boolean =>
  Number.isInteger(days) && days >= 1 && days <= MAX_TRAINING_DAYS;

export function bookableDays(starts: string[], days: number): Set<string> {
  return new Set(starts.flatMap((start) => trainingDates(start, days)));
}

export function blockStartFor(starts: string[], days: number, day: string): string | undefined {
  if (starts.includes(day)) return day;
  return starts.filter((start) => start < day && addDays(start, days - 1) >= day).sort().pop();
}
