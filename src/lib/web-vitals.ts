import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";
import { isBrowser, isPrerender } from "./env";

/**
 * Real-user Core Web Vitals → dataLayer (GTM can forward to GA4). Guarded so
 * prerender/bots don't skew the field data. CLS is scaled ×1000 so it survives
 * as an integer metric.
 */
export function reportWebVitals(): void {
  if (!isBrowser || isPrerender()) return;

  const report = (metric: Metric) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web_vitals",
      metric_name: metric.name,
      metric_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      metric_rating: metric.rating,
      metric_id: metric.id,
    });
  };

  onCLS(report);
  onINP(report);
  onLCP(report);
  onFCP(report);
  onTTFB(report);
}
