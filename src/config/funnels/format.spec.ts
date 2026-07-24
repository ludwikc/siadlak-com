import { describe, expect, it } from "vitest";
import {
  formatEventDate,
  formatEventDateShort,
  formatEventTime,
  formatEventTimeRange,
} from "./format";
import type { FunnelConfig } from "./types";

// 2 Feb 2026 20:05 CET (+01:00), 90-minute event — a Monday.
const base: FunnelConfig = {
  slug: "kod-kapitana",
  name: "Kod Kapitana",
  eventStart: "2026-02-02T20:05:00+01:00",
  eventDurationMinutes: 90,
  format: "spotkanie",
  registration: { type: "easycart", checkoutUrl: "https://buy.siadlak.com/checkout/kod-kapitana" },
  oto: true,
  seo: { title: "t", description: "d", keywords: "k" },
};

describe("funnel date formatting", () => {
  it("formats the full Polish date in Europe/Warsaw", () => {
    expect(formatEventDate(base)).toBe("poniedziałek, 2 lutego 2026");
  });

  it("formats the start time", () => {
    expect(formatEventTime(base)).toBe("20:05");
  });

  it("formats the time range across the duration", () => {
    expect(formatEventTimeRange(base)).toBe("20:05–21:35");
  });

  it("formats the short date", () => {
    expect(formatEventDateShort(base)).toBe("2.02");
  });

  it("renders a stored offset in Warsaw time, not the viewer's local zone", () => {
    // Same instant expressed in UTC must still print as 20:05 Warsaw (CET).
    expect(formatEventTime({ ...base, eventStart: "2026-02-02T19:05:00Z" })).toBe("20:05");
  });
});
