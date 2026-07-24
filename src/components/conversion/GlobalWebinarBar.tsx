import { useLocation } from "react-router-dom";
import { funnels, getNextUpcomingFunnel, getPhaseBoundaries } from "@/config/funnels";
import { isLandingRoute } from "@/lib/landing-pages";
import { track } from "@/lib/analytics";
import StickyCtaBar from "./StickyCtaBar";

/**
 * App-wide promo bar for the next upcoming funnel. Renders once (replacing the
 * old Mobile/DesktopWebinarBar duplication) and self-hides on landing routes
 * via isLandingRoute — fixing the previous leak onto /links, /reset, /ig.
 */
export default function GlobalWebinarBar() {
  const { pathname } = useLocation();
  const funnel = getNextUpcomingFunnel(funnels, new Date());

  if (!funnel || !funnel.promoBar || isLandingRoute(pathname)) return null;

  return (
    <StickyCtaBar
      label={funnel.name}
      sublabel={funnel.promoBar.copy}
      ctaText={funnel.promoBar.ctaLabel.replace(/[^\p{L}\p{N} ]/gu, "").trim() || "Rezerwuję miejsce"}
      to={`/webinar/${funnel.slug}`}
      countdownTarget={getPhaseBoundaries(funnel).liveAt}
      storageKey={`webinarBarCTAClicked:${funnel.slug}`}
      dataCta={`webinar-bar:${funnel.slug}`}
      onCtaClick={() =>
        track("webinar_bar_click", { funnel_slug: funnel.slug, placement: "mobile_bar" })
      }
    />
  );
}
