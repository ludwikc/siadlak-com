import { describe, expect, it } from "vitest";
import { altPath, hreflangAlternates } from "./locale";
import type { Locale } from "./types";

describe("altPath", () => {
  it("round-trips hub, briefing, enterprise and course paths in both directions", () => {
    const cases: Array<[Locale, string]> = [
      ["en", "/mct"],
      ["pl", "/szkolenia"],
      ["en", "/mct/executive-briefing"],
      ["pl", "/szkolenia/briefing-dla-zarzadu"],
      ["en", "/mct/enterprise"],
      ["pl", "/szkolenia/enterprise"],
      ["en", "/mct/courses/dp-600"],
      ["pl", "/szkolenia/kursy/dp-600"],
    ];

    expect(cases.map(([locale, pathname]) => altPath(locale, pathname))).toEqual([
      "/szkolenia",
      "/mct",
      "/szkolenia/briefing-dla-zarzadu",
      "/mct/executive-briefing",
      "/szkolenia/enterprise",
      "/mct/enterprise",
      "/szkolenia/kursy/dp-600",
      "/mct/courses/dp-600",
    ]);
  });
});

describe("hreflangAlternates", () => {
  it("builds absolute en/pl/x-default alternates for a PL course path", () => {
    expect(hreflangAlternates("pl", "/szkolenia/kursy/dp-600")).toEqual([
      { hrefLang: "en", href: "https://siadlak.com/mct/courses/dp-600" },
      { hrefLang: "pl", href: "https://siadlak.com/szkolenia/kursy/dp-600" },
      { hrefLang: "x-default", href: "https://siadlak.com/mct/courses/dp-600" },
    ]);
  });
});
