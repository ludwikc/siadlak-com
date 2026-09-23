import { describe, expect, it } from "vitest";
import { testimonialCount, testimonials } from "./testimonials";

describe("testimonials", () => {
  it("exposes the count of migrated quotes", () => {
    expect([testimonialCount, testimonials.length]).toEqual([42, 42]);
  });

  it("has no duplicate quotes and every quote carries at least one tag", () => {
    expect(new Set(testimonials.map((t) => t.quote)).size).toEqual(testimonials.length);
    expect(testimonials.filter((t) => t.tags.length === 0)).toEqual([]);
  });

  it("features exactly the six agreed quotes", () => {
    expect(testimonials.filter((t) => t.featured).map((t) => t.quote)).toEqual([
      "He is the absolute best instructor I have ever had!!",
      "Best instructor I've had in many years.",
      "The best trainer I had the pleasure working with. Top-notch knowledge and communication.",
      "The instructor was one of the best that I have had the pleasure of being instructed by.",
      "Best class I've attended in a very long time.",
      "One of the best classes I have ever been in.",
    ]);
  });

  it("tags the US military quotes as military", () => {
    expect(
      testimonials.filter((t) => t.tags.includes("military")).map((t) => t.author),
    ).toEqual([
      "Ron Wilson, US Army Civilian, Wiesbaden",
      "Lisa Blankenship, US Army Civilian, Wiesbaden",
      "Eric Buenavente, US Military, USARAF",
      "Eric Buenavente, US Military",
    ]);
  });
});
