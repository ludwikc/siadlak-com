import { describe, expect, it } from "vitest";
import {
  blockStartFor,
  bookableDays,
  bookingWindow,
  busyDays,
  freeWorkdays,
  isDateKey,
  isPolishHoliday,
  startDatesFor,
  todayKey,
} from "./availability";

describe("busyDays", () => {
  it("blocks every day of an all-day event, end date exclusive", () => {
    const busy = busyDays([{ start: { date: "2027-01-11" }, end: { date: "2027-01-13" } }]);
    expect([...busy]).toEqual(["2027-01-11", "2027-01-12"]);
  });

  it("blocks all-day events even when marked as free", () => {
    const busy = busyDays([
      { transparency: "transparent", start: { date: "2027-01-11" }, end: { date: "2027-01-12" } },
    ]);
    expect([...busy]).toEqual(["2027-01-11"]);
  });

  it("blocks a timed event overlapping 9–17 Warsaw time", () => {
    const busy = busyDays([
      { start: { dateTime: "2027-01-11T16:30:00+01:00" }, end: { dateTime: "2027-01-11T18:00:00+01:00" } },
    ]);
    expect([...busy]).toEqual(["2027-01-11"]);
  });

  it("ignores timed events entirely outside 9–17", () => {
    const busy = busyDays([
      { start: { dateTime: "2027-01-11T07:00:00+01:00" }, end: { dateTime: "2027-01-11T09:00:00+01:00" } },
      { start: { dateTime: "2027-01-11T17:00:00+01:00" }, end: { dateTime: "2027-01-11T20:00:00+01:00" } },
    ]);
    expect(busy.size).toEqual(0);
  });

  it("converts UTC timestamps to Warsaw time, including summer time", () => {
    const busy = busyDays([
      { start: { dateTime: "2027-07-12T06:30:00Z" }, end: { dateTime: "2027-07-12T07:30:00Z" } },
      { start: { dateTime: "2027-07-13T05:00:00Z" }, end: { dateTime: "2027-07-13T06:30:00Z" } },
    ]);
    expect([...busy]).toEqual(["2027-07-12"]);
  });

  it("blocks each working window of a multi-day timed event", () => {
    const busy = busyDays([
      { start: { dateTime: "2027-01-11T10:00:00+01:00" }, end: { dateTime: "2027-01-13T08:00:00+01:00" } },
    ]);
    expect([...busy]).toEqual(["2027-01-11", "2027-01-12"]);
  });

  it("skips cancelled, declined, free timed and working-location events", () => {
    const day = { start: { dateTime: "2027-01-11T10:00:00+01:00" }, end: { dateTime: "2027-01-11T11:00:00+01:00" } };
    const busy = busyDays([
      { ...day, status: "cancelled" },
      { ...day, transparency: "transparent" },
      { ...day, attendees: [{ self: true, responseStatus: "declined" }] },
      { eventType: "workingLocation", start: { date: "2027-01-12" }, end: { date: "2027-01-13" } },
    ]);
    expect(busy.size).toEqual(0);
  });
});

describe("freeWorkdays", () => {
  it("skips weekends and busy days", () => {
    expect(freeWorkdays(new Set(["2027-01-12"]), "2027-01-08", "2027-01-13")).toEqual([
      "2027-01-08",
      "2027-01-11",
      "2027-01-13",
    ]);
  });
});

describe("startDatesFor", () => {
  const week = ["2027-01-11", "2027-01-12", "2027-01-13", "2027-01-14", "2027-01-15"];

  it("never crosses a weekend", () => {
    expect(startDatesFor([...week, "2027-01-18"], 4)).toEqual(["2027-01-11", "2027-01-12"]);
  });

  it("allows a full five-day week starting Monday only", () => {
    expect(startDatesFor(week, 5)).toEqual(["2027-01-11"]);
  });

  it("requires every day of the training to be free", () => {
    expect(startDatesFor(["2027-01-11", "2027-01-13", "2027-01-14"], 2)).toEqual(["2027-01-13"]);
  });

  it("returns nothing for out-of-range lengths", () => {
    expect(startDatesFor(week, 0)).toEqual([]);
    expect(startDatesFor(week, 6)).toEqual([]);
    expect(startDatesFor(week, 1.5)).toEqual([]);
  });
});

describe("bookingWindow", () => {
  it("starts tomorrow in Warsaw and spans three months", () => {
    expect(bookingWindow(new Date("2026-11-09T23:30:00Z"))).toEqual({ from: "2026-11-11", to: "2027-02-10" });
  });

  it("uses the Warsaw date, not UTC", () => {
    expect(todayKey(new Date("2026-12-31T23:30:00Z"))).toEqual("2027-01-01");
  });
});

describe("isDateKey", () => {
  it("accepts real dates only", () => {
    expect(isDateKey("2027-02-28")).toBe(true);
    expect(isDateKey("2027-02-30")).toBe(false);
    expect(isDateKey("27-02-28")).toBe(false);
  });
});

describe("isPolishHoliday", () => {
  it("covers fixed-date holidays", () => {
    expect(isPolishHoliday("2026-11-11")).toBe(true);
    expect(isPolishHoliday("2026-12-24")).toBe(true);
    expect(isPolishHoliday("2027-01-06")).toBe(true);
    expect(isPolishHoliday("2026-11-12")).toBe(false);
  });

  it("covers Easter Monday and Corpus Christi", () => {
    expect(isPolishHoliday("2027-03-29")).toBe(true);
    expect(isPolishHoliday("2027-05-27")).toBe(true);
    expect(isPolishHoliday("2026-04-06")).toBe(true);
    expect(isPolishHoliday("2026-06-04")).toBe(true);
    expect(isPolishHoliday("2027-03-30")).toBe(false);
  });

  it("is excluded from free workdays", () => {
    expect(freeWorkdays(new Set(), "2026-11-10", "2026-11-12")).toEqual(["2026-11-10", "2026-11-12"]);
  });
});

describe("bookableDays", () => {
  it("includes every day of every valid block, not only start days", () => {
    const free = ["2027-01-11", "2027-01-12", "2027-01-14", "2027-01-15"];
    expect([...bookableDays(startDatesFor(free, 2), 2)]).toEqual(free);
  });

  it("leaves out free days that cannot fit the training", () => {
    const free = ["2027-01-11", "2027-01-13", "2027-01-14"];
    expect([...bookableDays(startDatesFor(free, 2), 2)]).toEqual(["2027-01-13", "2027-01-14"]);
  });
});

describe("blockStartFor", () => {
  const week = ["2027-01-11", "2027-01-12", "2027-01-13", "2027-01-14", "2027-01-15"];

  it("starts the block on the clicked day when it fits", () => {
    expect(blockStartFor(startDatesFor(week, 2), 2, "2027-01-13")).toEqual("2027-01-13");
  });

  it("snaps a Friday click back so the block ends on Friday", () => {
    expect(blockStartFor(startDatesFor(week, 2), 2, "2027-01-15")).toEqual("2027-01-14");
    expect(blockStartFor(startDatesFor(week, 3), 3, "2027-01-15")).toEqual("2027-01-13");
    expect(blockStartFor(startDatesFor(week, 3), 3, "2027-01-14")).toEqual("2027-01-13");
  });

  it("snaps back before a busy day", () => {
    const free = ["2027-01-11", "2027-01-12", "2027-01-14", "2027-01-15"];
    expect(blockStartFor(startDatesFor(free, 2), 2, "2027-01-12")).toEqual("2027-01-11");
  });

  it("returns undefined for a day outside every block", () => {
    const free = ["2027-01-11", "2027-01-13", "2027-01-14"];
    expect(blockStartFor(startDatesFor(free, 2), 2, "2027-01-11")).toBeUndefined();
    expect(blockStartFor(startDatesFor(free, 2), 2, "2027-01-18")).toBeUndefined();
  });
});
