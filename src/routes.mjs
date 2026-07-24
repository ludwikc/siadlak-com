/**
 * Single source of truth for the routes the prerender step snapshots.
 * Plain ESM so both Node (scripts/prerender.mjs) and Vite can import it.
 *
 * Excluded on purpose:
 *  - /oto (referrer-gated, dynamic dialog)
 *  - /webinar (dynamic Navigate to the active funnel)
 *  - /legal, /privacy, /terms, /stream (edge redirects in vercel.json)
 *  - webinar live/replay/dziekuje sub-routes (time-sensitive; heavy)
 *  - /help/:slug, /mailing/mute/:topic (dynamic params)
 */
export const staticRoutes = [
  "/",
  "/about",
  "/discovery",
  "/contact",
  "/newsletter",
  "/testimonials",
  "/thank-you",
  "/sitemap",
  "/slownik",
  "/wywiady",
  "/program",
  "/program/produktywnosc",
  "/program/lifeos-system-upgrade",
  "/program/odpornosc",
  "/program/meskosc",
  "/program/uwaznosc",
  "/program/ttt-ai",
  "/mentoring",
  "/podcast/life-hacking",
  "/podcast/uwazne-zycie",
  "/webinar/kod-kapitana",
  "/webinar/meski-kompas",
  "/webinar/depresja",
  "/mct",
  // Instagram is the primary lead source — these link-in-bio landing pages are
  // top-priority for instant HTML + SEO.
  "/ig",
  "/links",
  "/reset",
  "/start",
  "/siadlakvip",
  "/help",
];
