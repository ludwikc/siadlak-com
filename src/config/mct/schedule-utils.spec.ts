import { describe, expect, it } from "vitest";
import {
  formatSessionDate,
  formatSessionRange,
  getSessionsForCourse,
  getUpcomingSessions,
  nextSession,
  sessionEndsAt,
  sessionHoursLabel,
} from "./schedule-utils";
import type { ScheduledSession } from "./types";

const now = new Date("2026-01-01T00:00:00Z");

const past: ScheduledSession = {
  id: "dp-600-2025-12-01-en",
  courseSlug: "dp-600",
  startsAt: "2025-12-01T09:00:00+01:00",
  days: 1,
  language: "en",
  seatsTotal: 8,
  status: "open",
};

const futureOpen: ScheduledSession = {
  id: "dp-600-2026-11-16-en",
  courseSlug: "dp-600",
  startsAt: "2026-11-16T09:00:00+01:00",
  days: 2,
  language: "en",
  seatsTotal: 8,
  status: "open",
};

const futureCancelled: ScheduledSession = {
  id: "dp-600-2026-06-01-en",
  courseSlug: "dp-600",
  startsAt: "2026-06-01T09:00:00+02:00",
  days: 1,
  language: "en",
  seatsTotal: 8,
  status: "cancelled",
};

const futureOtherCourse: ScheduledSession = {
  id: "dp-700-2026-03-10-pl",
  courseSlug: "dp-700",
  startsAt: "2026-03-10T09:00:00+01:00",
  days: 1,
  language: "pl",
  seatsTotal: 8,
  status: "filling",
};

const fixture = [past, futureOpen, futureCancelled, futureOtherCourse];

describe("getUpcomingSessions", () => {
  it("returns exactly the future, non-cancelled sessions, sorted ascending", () => {
    expect(getUpcomingSessions(fixture, now)).toEqual([futureOtherCourse, futureOpen]);
  });
});

describe("getSessionsForCourse", () => {
  it("filters upcoming sessions to a single course slug", () => {
    expect(getSessionsForCourse(fixture, "dp-600", now)).toEqual([futureOpen]);
  });
});

describe("nextSession", () => {
  it("returns the soonest upcoming session", () => {
    expect(nextSession(fixture, now)).toEqual(futureOtherCourse);
  });

  it("returns undefined when nothing is upcoming", () => {
    expect(nextSession([past, futureCancelled], now)).toBeUndefined();
  });
});

describe("sessionEndsAt", () => {
  it("approximates 17:00 Europe/Warsaw on the last day for a 1-day session", () => {
    expect(sessionEndsAt(futureCancelled).toISOString()).toBe("2026-06-01T15:00:00.000Z");
  });

  it("approximates 17:00 Europe/Warsaw on the last day for a 2-day session", () => {
    expect(sessionEndsAt(futureOpen).toISOString()).toBe("2026-11-17T16:00:00.000Z");
  });
});

describe("formatSessionDate", () => {
  it("formats the Polish full date", () => {
    expect(formatSessionDate(futureOpen, "pl")).toBe("poniedziałek, 16 listopada 2026");
  });

  it("formats the English (en-GB) full date", () => {
    expect(formatSessionDate(futureOpen, "en")).toBe("Monday, 16 November 2026");
  });
});

describe("formatSessionRange", () => {
  it("formats a 2-day range within the same month", () => {
    expect(formatSessionRange(futureOpen, "en")).toBe("16–17 November 2026");
    expect(formatSessionRange(futureOpen, "pl")).toBe("16–17 listopada 2026");
  });

  it("formats a 2-day range spanning two months as two full dates", () => {
    const crossMonth: ScheduledSession = { ...futureOpen, startsAt: "2026-11-30T09:00:00+01:00" };
    expect(formatSessionRange(crossMonth, "en")).toBe("30 November 2026 – 1 December 2026");
  });

  it("formats a 1-day session as a single full date", () => {
    expect(formatSessionRange(futureOtherCourse, "en")).toBe("10 March 2026");
  });
});

describe("sessionHoursLabel", () => {
  it("is the fixed daily hours label", () => {
    expect(sessionHoursLabel).toBe("09:00–17:00 CET/CEST");
  });
});
