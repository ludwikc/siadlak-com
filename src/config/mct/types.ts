import type { COURSE_SLUGS } from "./slugs.mjs";

export type Locale = "en" | "pl";
export type Localized<T = string> = Record<Locale, T>;
export type Currency = "EUR" | "PLN";
export type TierId = "public" | "briefing" | "enterprise";
export type LeadIntent = "seat" | "waitlist" | "briefing" | "scope-call";
export type Track = "copilot" | "fabric" | "sql";
export type CourseSlug = (typeof COURSE_SLUGS)[number];
export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type AgendaDay = { title: Localized; modules: Localized<string[]>; addOn: Localized };
export type Course = {
  slug: CourseSlug; track: Track; codes: string[]; official: boolean; condensed: boolean;
  days: 1 | 2; level: CourseLevel;
  title: Localized; tagline: Localized; summary: Localized;
  audience: Localized<string[]>; notFor: Localized;
  outcomes: Localized<string[]>; agenda: AgendaDay[]; prerequisites: Localized<string[]>;
  tags: string[]; msLearnUrl?: string; examCode?: string;
};
export type SessionStatus = "open" | "filling" | "full" | "confirmed" | "cancelled";
export type ScheduledSession = {
  id: string; courseSlug: CourseSlug; startsAt: string; days: 1 | 2;
  language: Locale; seatsTotal: number; seatsLeft?: number; status: SessionStatus;
};
export type PricingConfig = {
  publicSeat: { perDay: Record<Currency, number>; twoDay: Record<Currency, number>; maxSeats: number; multiSeatDiscount: { fromSeats: number; percent: number } };
  briefing: { flat: Record<Currency, number>; durationHours: number; maxLeaders: number };
  currencyByLocale: Record<Locale, Currency>;
};
export type FaqItem = { id: string; question: Localized; answer: Localized; scope: Array<"hub" | "course" | "briefing" | "enterprise"> };
export type Testimonial = { id?: string; quote: string; detail?: string; author: string; tags: Array<"military" | "enterprise" | "data" | "modernwork">; featured?: boolean };
