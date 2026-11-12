import { courses } from "../mct/courses.js";
import type { CourseSlug, Locale } from "../mct/types";

export const BOOKING_PATH = "/booking-center";

export type BookingCenter = { slug: Locale; locale: Locale };

export const CENTERS: BookingCenter[] = [
  { slug: "pl", locale: "pl" },
  { slug: "en", locale: "en" },
];

export const findCenter = (slug: string | undefined): BookingCenter | undefined =>
  CENTERS.find((c) => c.slug === slug?.toLowerCase());

export const LEGACY_CENTERS: Record<string, { slug: Locale; company: string }> = {
  asseco: { slug: "pl", company: "Asseco" },
  glasspaper: { slug: "en", company: "Glasspaper" },
};

export const legacyCenterPath = (slug: string | undefined): string | undefined => {
  const legacy = LEGACY_CENTERS[slug?.toLowerCase() ?? ""];
  return legacy && `${BOOKING_PATH}/${legacy.slug}?company=${encodeURIComponent(legacy.company)}`;
};

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
export type TrainingArea = "bi" | "ai";

export const TRAINING_AREAS: Array<{ id: TrainingArea; label: string }> = [
  { id: "bi", label: "Business Intelligence" },
  { id: "ai", label: "Artificial Intelligence" },
];

export type BookingTraining = {
  id: CourseSlug;
  category: TrainingCategory;
  area: TrainingArea;
  code?: string;
  shortName: string;
  title: Record<Locale, string>;
  defaultDays: number;
};

const stripEssentials = (title: string): string => {
  const stripped = title.replace(/^[A-Z]{2}-\d{3} Essentials: /, "");
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
};

export const TRAININGS: BookingTraining[] = (Object.keys(OFFICIAL_DAYS) as CourseSlug[]).map((slug) => {
  const course = courses[slug];
  const code = course.codes[0];
  return {
    id: slug,
    category: code ? "certified" : "custom",
    area: course.track === "copilot" ? "ai" : "bi",
    code,
    shortName: code ? code.replace(/T00$/, "") : course.shortTitle.pl.replace(/\s*\(.*\)$/, ""),
    title: { en: stripEssentials(course.title.en), pl: stripEssentials(course.title.pl) },
    defaultDays: OFFICIAL_DAYS[slug],
  };
});

export const trainingsIn = (category: TrainingCategory, area?: TrainingArea): BookingTraining[] =>
  TRAININGS.filter((t) => t.category === category && (!area || t.area === area)).sort((a, b) =>
    (a.code ?? "").localeCompare(b.code ?? ""),
  );

export const findTraining = (id: string): BookingTraining | undefined => TRAININGS.find((t) => t.id === id);

export const trainingLabel = (training: BookingTraining, locale: Locale): string =>
  training.code ? `${training.shortName}: ${training.title[locale]}` : training.title[locale];

export const matchesQuery = (training: BookingTraining, locale: Locale, query: string): boolean =>
  `${training.shortName} ${training.title[locale]}`.toLowerCase().includes(query.trim().toLowerCase());
