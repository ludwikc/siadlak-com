import { describe, expect, it } from "vitest";
import { proof } from "../proof";
import { fill, getCopy } from "./copy";

type Shape = string | Shape[] | { [key: string]: Shape };

function keyShape(value: unknown): Shape {
  if (Array.isArray(value)) return value.map(keyShape);
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, keyShape((value as Record<string, unknown>)[key])]),
    );
  }
  return typeof value;
}

function placeholdersByPath(value: unknown, path = ""): Record<string, string[]> {
  if (typeof value === "string") {
    const found = [...value.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
    return { [path]: [...new Set(found)].sort() };
  }
  if (value !== null && typeof value === "object") {
    return Object.entries(value).reduce<Record<string, string[]>>(
      (acc, [key, child]) => ({ ...acc, ...placeholdersByPath(child, `${path}.${key}`) }),
      {},
    );
  }
  return {};
}

describe("fill", () => {
  it("replaces every occurrence of each placeholder with string or number values", () => {
    expect(fill("{code} · next date {date} · {code}", { code: "DP-600", date: "12 Nov" })).toEqual(
      "DP-600 · next date 12 Nov · DP-600",
    );
    expect(fill("Read all {n}", { n: 42 })).toEqual("Read all 42");
  });

  it("leaves placeholders without a value untouched and ignores unused vars", () => {
    expect(fill("{perDay} / day · 2-day {twoDay}", { perDay: "€590", extra: 1 })).toEqual(
      "€590 / day · 2-day {twoDay}",
    );
  });

  it("returns templates without placeholders unchanged", () => {
    expect(fill("Got it.", {})).toEqual("Got it.");
  });
});

describe("getCopy", () => {
  it("returns distinct EN and PL dictionaries", () => {
    expect([getCopy("en").hero.line1, getCopy("pl").hero.line1]).toEqual([
      "BATTLE-TESTED,",
      "SPRAWDZONE W BOJU,",
    ]);
  });

  it("builds the hero eyebrow from canonical proof numbers", () => {
    expect([getCopy("en").hero.eyebrow, getCopy("pl").hero.eyebrow]).toEqual([
      `Microsoft Certified Trainer · ${proof.yearsMct} years · ${proof.trainedProfessionals} professionals trained`,
      `Microsoft Certified Trainer · ${proof.yearsMct} lat · ${proof.trainedProfessionals} przeszkolonych`,
    ]);
  });

  it("has the same nested key shape in both locales, including array lengths", () => {
    expect(keyShape(getCopy("pl"))).toEqual(keyShape(getCopy("en")));
  });

  it("uses identical placeholders for every string in both locales", () => {
    expect(placeholdersByPath(getCopy("pl"))).toEqual(placeholdersByPath(getCopy("en")));
  });
});
