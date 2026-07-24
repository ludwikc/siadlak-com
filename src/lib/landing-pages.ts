// Routes that render as strict landing pages (no global chrome) and where
// global overlays like the webinar bar and exit-intent must stay suppressed.
// Prefix-matched so nested paths (e.g. /webinar/kod-kapitana) are covered.
export const LANDING_ROUTE_PREFIXES = [
  "/webinar",
  "/oto",
  "/links",
  "/reset",
  "/ig",
] as const;

export const isLandingRoute = (pathname: string): boolean =>
  LANDING_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
