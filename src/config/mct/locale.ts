import { MCT_PATHS } from "./slugs.mjs";
import type { Locale } from "./types";

const SITE_URL = "https://siadlak.com";

export const LOCALES: readonly Locale[] = ["en", "pl"];

export const otherLocale = (l: Locale): Locale => (l === "en" ? "pl" : "en");

export const hubPath = (l: Locale): string => MCT_PATHS[l].hub;
export const coursePath = (l: Locale, slug: string): string => `${MCT_PATHS[l].courses}/${slug}`;
export const briefingPath = (l: Locale): string => MCT_PATHS[l].briefing;
export const enterprisePath = (l: Locale): string => MCT_PATHS[l].enterprise;

export const altPath = (locale: Locale, pathname: string): string => {
  const current = MCT_PATHS[locale];
  const target = otherLocale(locale);

  if (pathname === current.hub) return hubPath(target);
  if (pathname === current.briefing) return briefingPath(target);
  if (pathname === current.enterprise) return enterprisePath(target);
  if (pathname.startsWith(`${current.courses}/`)) {
    const slug = pathname.slice(current.courses.length + 1);
    return coursePath(target, slug);
  }

  return hubPath(target);
};

export const hreflangAlternates = (
  locale: Locale,
  pathname: string,
): { hrefLang: "en" | "pl" | "x-default"; href: string }[] => {
  const enPath = locale === "en" ? pathname : altPath(locale, pathname);
  const plPath = locale === "pl" ? pathname : altPath(locale, pathname);

  return [
    { hrefLang: "en", href: `${SITE_URL}${enPath}` },
    { hrefLang: "pl", href: `${SITE_URL}${plPath}` },
    { hrefLang: "x-default", href: `${SITE_URL}${enPath}` },
  ];
};

export const ogLocale = (l: Locale): "en_US" | "pl_PL" => (l === "en" ? "en_US" : "pl_PL");

export const htmlLang = (l: Locale): "en" | "pl" => l;
