import { describe, expect, it } from "vitest";
import { findCenter } from "./catalog";
import { bookingRequestSchema, buildBlockerEvent } from "./request";

const base = {
  center: "asseco",
  training: "dp-600",
  days: 4,
  startDate: "2027-01-11",
  name: "Anna Nowak",
  email: "anna@example.com",
  delivery: "remote",
  language: "pl",
};

describe("bookingRequestSchema", () => {
  it("accepts a catalog training", () => {
    expect(bookingRequestSchema.safeParse(base).success).toBe(true);
  });

  it("requires a name for a custom training", () => {
    const result = bookingRequestSchema.safeParse({ ...base, training: "custom", customTraining: "" });
    expect(result.success).toBe(false);
  });

  it("rejects unknown trainings and on-site requests without a city", () => {
    expect(bookingRequestSchema.safeParse({ ...base, training: "az-900" }).success).toBe(false);
    expect(bookingRequestSchema.safeParse({ ...base, delivery: "onsite" }).success).toBe(false);
  });
});

describe("buildBlockerEvent", () => {
  it("creates a tentative all-day blocker spanning the training days", () => {
    const request = bookingRequestSchema.parse(base);
    const event = buildBlockerEvent(request, findCenter("asseco")!, "req-1");
    expect(event.summary).toEqual("[Blocker] DP-600 – Asseco");
    expect(event.start).toEqual({ date: "2027-01-11" });
    expect(event.end).toEqual({ date: "2027-01-15" });
    expect(event.status).toEqual("tentative");
    expect(event.description).toContain("anna@example.com");
  });

  it("uses the custom training name in the summary", () => {
    const request = bookingRequestSchema.parse({ ...base, training: "custom", customTraining: "Power Automate" });
    expect(buildBlockerEvent(request, findCenter("glasspaper")!, "req-2").summary).toEqual(
      "[Blocker] Power Automate – Glasspaper",
    );
  });
});
