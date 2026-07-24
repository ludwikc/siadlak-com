import { useEffect, useRef } from "react";
import { isPrerender } from "@/lib/env";

export type ExitIntentTrigger = "mouse_out" | "scroll_up";

export type ExitIntentOptions = {
  enabled: boolean;
  onTrigger: (trigger: ExitIntentTrigger) => void;
  /** Arm only after this dwell time (ms). */
  minDwellMs?: number;
  /** Arm only after the user has seen this fraction of the page. */
  minScrollRatio?: number;
  /** Desktop: mouseout Y threshold (px from top). */
  topThresholdPx?: number;
  /** Mobile: upward scroll distance within the window that counts as "leaving". */
  mobileUpDistancePx?: number;
  mobileUpWindowMs?: number;
};

/**
 * Fires once when the user signals they're about to leave. Mobile is the
 * primary target (Instagram traffic): a fast upward flick deep in the page.
 * Desktop mouse-out toward the browser chrome is the secondary trigger. Both
 * listeners coexist without a device branch — mouseout never fires on touch,
 * and the scroll heuristic won't trip on a desktop until someone flicks fast.
 */
export function useExitIntent({
  enabled,
  onTrigger,
  minDwellMs = 10_000,
  minScrollRatio = 0.25,
  topThresholdPx = 15,
  mobileUpDistancePx = 600,
  mobileUpWindowMs = 700,
}: ExitIntentOptions): void {
  const onTriggerRef = useRef(onTrigger);
  onTriggerRef.current = onTrigger;

  useEffect(() => {
    if (!enabled || isPrerender()) return;

    const mountedAt = Date.now();
    let maxScrollRatio = 0;
    let fired = false;
    let samples: { t: number; y: number }[] = [];

    const scrollableHeight = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const engaged = (): boolean => {
      if (Date.now() - mountedAt < minDwellMs) return false;
      // Short pages (link-in-bio): the depth requirement is meaningless.
      return scrollableHeight() < 200 || maxScrollRatio >= minScrollRatio;
    };

    const fire = (trigger: ExitIntentTrigger) => {
      if (fired) return;
      fired = true;
      onTriggerRef.current(trigger);
    };

    const onMouseOut = (e: MouseEvent) => {
      // relatedTarget null => pointer left the document (toward browser chrome)
      if (e.relatedTarget === null && e.clientY <= topThresholdPx && engaged()) {
        fire("mouse_out");
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const h = scrollableHeight();
      if (h > 0) maxScrollRatio = Math.max(maxScrollRatio, y / h);

      const now = Date.now();
      samples.push({ t: now, y });
      while (samples.length > 1 && now - samples[0].t > mobileUpWindowMs) samples.shift();
      const upwardTravel = samples[0].y - y;
      if (upwardTravel >= mobileUpDistancePx && engaged()) {
        samples = [];
        fire("scroll_up");
      }
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled, minDwellMs, minScrollRatio, topThresholdPx, mobileUpDistancePx, mobileUpWindowMs]);
}
