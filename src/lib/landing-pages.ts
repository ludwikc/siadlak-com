// Configuration for pages that should hide header/footer (landing pages)
export const LANDING_PAGES = new Set([
  '/webinar',
  '/oto'
]);

export const isLandingPage = (pathname: string): boolean => {
  return LANDING_PAGES.has(pathname);
};