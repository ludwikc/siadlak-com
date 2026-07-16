/**
 * Centralized redirect configuration
 *
 * Add new redirects here to keep them organized and easy to maintain.
 * Supports both shortcut URLs and legacy route redirects.
 */

export type RedirectConfig = Record<string, string>;

export const redirects: RedirectConfig = {
  // Shortcut redirects for marketing/social media
  "/kontakt": "/contact",
  "/mk": "/program/meskosc",
  "/meskikompas": "/program/meskosc",
  "/meski-kompas": "/program/meskosc",
  "/hp": "/program/produktywnosc",
  "/lh": "/podcast/life-hacking",
  
  "/uwaznosc": "/program/uwaznosc",
  "/u": "/program/uwaznosc",
  "/depresja": "/webinar/depresja",

  // Legacy program URLs (permanent 301 redirects)
  "/program/hakowanie-produktywnosci": "/program/produktywnosc",
  "/program/silna-glowa": "/program/odpornosc",
  "/program/uwazne-zycie": "/program/uwaznosc",
  "/program/meski-kompas": "/program/meskosc",

  // Legacy/renamed routes
  "/program/mental-elevator": "/program/lifeos-system-upgrade",
  "/program/7-technik": "/program",
  "/program/tech-leadership": "/mentoring",

  // Retired funnels
  "/wyzwanie": "/newsletter",
  "/webinar/expired": "/discovery",

  // Legacy webinar routes (funnel pages now live under /webinar/<slug>/*)
  "/webinar/replay": "/webinar/meski-kompas/replay",
  "/webinar/live": "/webinar/depresja/live",
  "/thank-you/meski-kompas": "/webinar/meski-kompas/dziekuje",
};

/**
 * Get all redirect source paths for prerendering
 */
export const getRedirectSources = (): string[] => {
  return Object.keys(redirects);
};

/**
 * Get redirect target for a given source path
 */
export const getRedirectTarget = (source: string): string | undefined => {
  return redirects[source];
};
