/**
 * Centralized redirect configuration
 *
 * Add new redirects here to keep them organized and easy to maintain.
 * Supports both shortcut URLs and legacy route redirects.
 */

export type RedirectConfig = Record<string, string>;

export const redirects: RedirectConfig = {
  // Shortcut redirects for marketing/social media
  "/mk": "/program/meski-kompas",
  "/meskikompas": "/program/meski-kompas",
  "/meski-kompas": "/program/meski-kompas",
  "/hp": "/program/hakowanie-produktywnosci",
  "/lh": "/podcast/life-hacking",
  "/ttt": "/program/ttt",

  // Legacy/renamed routes
  "/program/mental-elevator": "/program/lifeos-system-upgrade",

  // Temporary redirects (can be removed later)
  "/webinar": "/webinar/kod-kapitana",
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
