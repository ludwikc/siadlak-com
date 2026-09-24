import type { Locale } from "./types";

// Bump whenever the catalog, pricing or policies change: it feeds dateModified in JSON-LD, <meta name="revised"> and the footer.
export const MCT_CONTENT_UPDATED = "2026-09-24";

export const formatUpdatedDate = (iso: string, locale: Locale): string =>
  new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
