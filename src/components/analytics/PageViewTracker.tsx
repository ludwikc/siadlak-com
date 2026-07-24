import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";

/**
 * Fires one page_view per route (including the first load) and re-captures
 * attribution on every navigation — /ig and /links rewrite internal links with
 * fresh UTMs, so attribution must be read per-route, not only at boot.
 * Renders nothing; mounted once inside the Router.
 */
export default function PageViewTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    captureAttribution(search);
    trackPageView(pathname);
  }, [pathname, search]);

  return null;
}
