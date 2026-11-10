import { courses } from "../mct/courses.js";
import type { CourseSlug, Locale } from "../mct/types";

export type BookingCenter = { slug: string; name: string; locale: Locale };

export const CENTERS: BookingCenter[] = [
  { slug: "asseco", name: "Asseco", locale: "pl" },
  { slug: "glasspaper", name: "Glasspaper", locale: "en" },
];

export const findCenter = (slug: string | undefined): BookingCenter | undefined =>
  CENTERS.find((c) => c.slug === slug?.toLowerCase());

export const CUSTOM_TRAINING = "custom";

const OFFICIAL_DAYS: Record<CourseSlug, number> = {
  "ab-731": 1,
  "ms-4014": 1,
  "build-agents-copilot-studio": 1,
  "copilot-studio-agents": 2,
  "dp-600": 4,
  "dp-605": 1,
  "dp-700": 4,
  "dp-300": 4,
  "dp-080": 2,
  "tsql-performance": 2,
};

export type TrainingCategory = "certified" | "custom";

export type BookingTraining = {
  id: CourseSlug;
  category: TrainingCategory;
  code?: string;
  shortName: string;
  title: Record<Locale, string>;
  defaultDays: number;
};

const stripEssentials = (title: string): string => title.replace(/^[A-Z]{2}-\d{3} Essentials: /, "");

export const TRAININGS: BookingTraining[] = (Object.keys(OFFICIAL_DAYS) as CourseSlug[]).map((slug) => {
  const course = courses[slug];
  const code = course.codes[0];
  return {
    id: slug,
    category: code ? "certified" : "custom",
    code,
    shortName: code ? code.replace(/T00$/, "") : course.shortTitle.pl.replace(/\s*\(.*\)$/, ""),
    title: { en: stripEssentials(course.title.en), pl: stripEssentials(course.title.pl) },
    defaultDays: OFFICIAL_DAYS[slug],
  };
});

export const trainingsIn = (category: TrainingCategory): BookingTraining[] =>
  TRAININGS.filter((t) => t.category === category).sort((a, b) => (a.code ?? "").localeCompare(b.code ?? ""));

export const findTraining = (id: string): BookingTraining | undefined => TRAININGS.find((t) => t.id === id);

export const trainingLabel = (training: BookingTraining, locale: Locale): string =>
  training.code ? `${training.code}: ${training.title[locale]}` : training.title[locale];
