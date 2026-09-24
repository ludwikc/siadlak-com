import { describe, expect, it } from "vitest";
import { MCT_CONTENT_UPDATED, formatUpdatedDate } from "./meta";

describe("MCT_CONTENT_UPDATED", () => {
  it("is an ISO calendar date", () => {
    expect(MCT_CONTENT_UPDATED).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe("formatUpdatedDate", () => {
  it("formats the date in long form for each locale", () => {
    expect([formatUpdatedDate("2026-09-24", "en"), formatUpdatedDate("2026-09-24", "pl")]).toEqual([
      "24 September 2026",
      "24 września 2026",
    ]);
  });

  it("keeps the calendar day at month and year boundaries regardless of the runtime time zone", () => {
    expect([formatUpdatedDate("2027-01-01", "en"), formatUpdatedDate("2026-12-31", "pl")]).toEqual([
      "1 January 2027",
      "31 grudnia 2026",
    ]);
  });
});
