/**
 * Typed dataLayer event layer.
 *
 * All events flow through `track()`, which pushes to window.dataLayer (read by
 * GTM — see docs/analytics/gtm-setup.md) with campaign attribution merged in.
 * Guarded so prerender/bots never emit events. Consent gating happens in GTM
 * via Google Consent Mode v2; this layer always pushes, and tags decide whether
 * to fire.
 */
import { isBrowser, isPrerender } from "./env";
import { getFlatAttribution } from "./attribution";

type EventParams = {
  page_view: { page_path: string; page_title: string };
  funnel_view: { funnel_slug: string; funnel_phase: string; dtr_variant?: string };
  registration_click: { funnel_slug: string; checkout_url: string; placement: string };
  registration_complete: { funnel_slug: string };
  lead_submitted: { form_id: string; page_path: string; source?: string; funnel_slug?: string };
  lead_submit_error: { form_id: string; page_path: string; source?: string };
  webinar_bar_click: { funnel_slug: string; placement: "mobile_bar" | "desktop_bar" };
  cta_click: { cta: string };
  oto_view: { product: string };
  oto_expired: { product: string };
  oto_purchase_click: { product: string; value: number; currency: "PLN" };
  reset_quiz_start: Record<string, never>;
  reset_quiz_complete: { score: number; tier: string };
  discovery_booking_click: { placement: string };
  exit_intent_shown: { trigger_type: "mouse_out" | "scroll_up"; offer: string; page_path: string };
  exit_intent_dismissed: { offer: string };
  exit_intent_converted: { offer: string };
  experiment_exposure: { experiment_id: string; variant: string };
  dtr_variant_applied: { funnel_slug: string; dtr_param: string; dtr_variant: string };
};

export type AnalyticsEvent = keyof EventParams;

export function track<E extends AnalyticsEvent>(event: E, params: EventParams[E]): void {
  if (!isBrowser || isPrerender()) return;
  const payload = { event, ...params, ...getFlatAttribution() };
  if (import.meta.env.DEV) console.debug("[analytics]", event, payload);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

// Dedupe page_view by path — StrictMode double-invokes effects in dev and SPA
// re-renders can repeat a path; GTM's own pageview is disabled so this is the
// single source.
let lastTrackedPath: string | null = null;

export function trackPageView(path: string): void {
  if (!isBrowser || isPrerender()) return;
  if (lastTrackedPath === path) return;
  lastTrackedPath = path;
  // Defer one tick so react-helmet-async settles document.title first. Uses
  // setTimeout, not requestAnimationFrame — rAF is fully paused in hidden/
  // background tabs (link opened in a new tab), which would strand the event.
  setTimeout(() => {
    track("page_view", { page_path: path, page_title: document.title });
  }, 0);
}

// Clarity custom tags let us slice recordings/heatmaps by DTR variant and
// experiment. Clarity may load late (consent) or never, so tags are buffered
// and flushed once it exists.
const pendingClarityTags: Record<string, string> = {};

function flushClarityTags(): void {
  if (typeof window.clarity !== "function") return;
  for (const [key, value] of Object.entries(pendingClarityTags)) {
    window.clarity("set", key, value);
  }
}

export function setClarityTag(key: string, value: string): void {
  if (!isBrowser || isPrerender()) return;
  pendingClarityTags[key] = value;
  flushClarityTags();
}

/**
 * Mounted once at boot. When the visitor grants consent mid-session, pixels
 * that were blocked missed the initial page_view — replay the current one and
 * flush any buffered Clarity tags.
 */
export function initAnalytics(): void {
  if (!isBrowser || isPrerender()) return;
  document.addEventListener("cookieyes_consent_update", () => {
    flushClarityTags();
    if (lastTrackedPath) {
      const path = lastTrackedPath;
      lastTrackedPath = null;
      trackPageView(path);
    }
  });
}
