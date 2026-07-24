/**
 * Runtime environment guards shared by the analytics + attribution layers.
 *
 * The site is prerendered with Puppeteer (Googlebot UA) and crawled by real
 * bots. Neither should generate analytics events or attribution state, so
 * every tracking entry point checks `isPrerender()` first.
 */

export const isBrowser = typeof window !== "undefined";

export function isPrerender(): boolean {
  if (!isBrowser) return true;
  return (
    navigator.webdriver === true ||
    /Googlebot|HeadlessChrome|Chrome-Lighthouse|bot|crawler|spider/i.test(
      navigator.userAgent,
    )
  );
}
