import { describe, expect, it } from "vitest";
import { staticRoutes } from "../../routes.mjs";
import { courses } from "./courses";
import { faq } from "./faq";
import { policies } from "./policies";
import { sessions } from "./schedule";
import { COURSE_SLUGS, mctRoutes } from "./slugs.mjs";

describe("mct slug parity", () => {
  it("has exactly one course per slug", () => {
    expect(Object.keys(courses).sort()).toEqual([...COURSE_SLUGS].sort());
  });

  it("keys every course by its own slug", () => {
    expect(Object.entries(courses).filter(([key, course]) => key !== course.slug)).toEqual([]);
  });

  it("registers all 26 mct routes for prerender", () => {
    const routes = mctRoutes();
    expect(routes).toHaveLength(26);
    expect(routes.filter((route) => !staticRoutes.includes(route))).toEqual([]);
  });

  it("points every scheduled session at a known course with a unique id", () => {
    const known: readonly string[] = COURSE_SLUGS;
    expect(sessions.filter((s) => !known.includes(s.courseSlug))).toEqual([]);
    expect(new Set(sessions.map((s) => s.id)).size).toBe(sessions.length);
  });
});

describe("mct course content", () => {
  const list = Object.values(courses);

  it("has one agenda day per course day", () => {
    expect(list.filter((c) => c.agenda.length !== c.days).map((c) => c.slug)).toEqual([]);
  });

  it("labels condensed courses as Essentials in both languages", () => {
    expect(
      list
        .filter((c) => c.condensed)
        .filter((c) => !c.title.en.includes("Essentials") || !c.title.pl.includes("Essentials"))
        .map((c) => c.slug),
    ).toEqual([]);
    expect(
      list
        .filter((c) => c.condensed)
        .map((c) => c.slug)
        .sort(),
    ).toEqual(["dp-300", "dp-600", "dp-700"]);
  });

  it("states the 4-day to 2-day condensation in both summaries of condensed courses", () => {
    expect(
      list
        .filter((c) => c.condensed)
        .filter(
          (c) =>
            !c.summary.en.toLowerCase().includes("condensed from the official 4-day outline into 2 intensive days") ||
            !c.summary.pl.includes("oficjalny 4-dniowy program skondensowany do 2 intensywnych dni"),
        )
        .map((c) => c.slug),
    ).toEqual([]);
  });

  it("links every official course to Microsoft Learn and no custom one", () => {
    expect(
      list.map((c) => [c.slug, c.official, c.msLearnUrl !== undefined]).filter(([, official, hasUrl]) => official !== hasUrl),
    ).toEqual([]);
  });

  it("gives every agenda day 3 to 6 modules in both languages, with matching counts", () => {
    const offenders = list.flatMap((c) =>
      c.agenda
        .filter(
          (d) =>
            d.modules.en.length < 3 ||
            d.modules.en.length > 6 ||
            d.modules.en.length !== d.modules.pl.length,
        )
        .map((d) => `${c.slug}: ${d.title.en}`),
    );
    expect(offenders).toEqual([]);
  });

  it("keeps list fields the same length in both languages", () => {
    const offenders = list.filter(
      (c) =>
        c.audience.en.length !== 3 ||
        c.audience.pl.length !== 3 ||
        c.outcomes.en.length !== c.outcomes.pl.length ||
        c.outcomes.en.length < 5 ||
        c.outcomes.en.length > 7 ||
        c.prerequisites.en.length !== c.prerequisites.pl.length ||
        c.prerequisites.en.length < 3 ||
        c.prerequisites.en.length > 4,
    );
    expect(offenders.map((c) => c.slug)).toEqual([]);
  });

  it("uses no banned claims", () => {
    const banned = ["20+ years", "10,000+ certifications", "engineers trained", "30+ courses", "classified"];
    const text = JSON.stringify({ courses, faq, policies }).toLowerCase();
    expect(banned.filter((phrase) => text.includes(phrase.toLowerCase()))).toEqual([]);
  });
});

describe("mct faq", () => {
  it("has 11 uniquely identified items", () => {
    expect(faq).toHaveLength(11);
    expect(new Set(faq.map((f) => f.id)).size).toBe(11);
  });

  it("locks the scope of every item", () => {
    expect(faq.map((f) => [f.id, f.scope])).toEqual([
      ["invoices", ["hub", "course", "briefing", "enterprise"]],
      ["po", ["hub", "course", "briefing", "enterprise"]],
      ["vat", ["hub", "course", "briefing", "enterprise"]],
      ["nda", ["enterprise", "hub"]],
      ["cancel-public", ["hub", "course"]],
      ["cancel-private", ["briefing", "enterprise"]],
      ["recording", ["hub", "course", "enterprise"]],
      ["discounts", ["hub", "course"]],
      ["onsite", ["hub", "enterprise"]],
      ["language", ["hub", "course", "briefing", "enterprise"]],
      ["certification", ["hub", "course"]],
    ]);
  });

  it("fills question and answer in both languages and sets a scope", () => {
    const offenders = faq.filter(
      (f) =>
        !f.question.en.trim() ||
        !f.question.pl.trim() ||
        !f.answer.en.trim() ||
        !f.answer.pl.trim() ||
        f.scope.length === 0,
    );
    expect(offenders.map((f) => f.id)).toEqual([]);
  });

  it("reuses the draft policy text for cancellation and recording answers", () => {
    const byId = Object.fromEntries(faq.map((f) => [f.id, f.answer]));
    expect([byId["cancel-public"], byId["cancel-private"], byId.recording]).toEqual([
      policies.cancellationPublic,
      policies.cancellationPrivate,
      policies.recording,
    ]);
  });
});
