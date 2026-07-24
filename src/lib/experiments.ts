import { useEffect, useState } from "react";
import { isBrowser, isPrerender } from "./env";
import { setClarityTag, track } from "./analytics";

/**
 * Deterministic A/B assignment persisted in localStorage (`exp:<id>`). Read
 * synchronously in the first render so copy/colour swaps don't flicker on
 * client-side navigation. Bots/prerender always get the control (variants[0]),
 * so the prerendered HTML is stable; a first-time visitor assigned a non-control
 * variant reconciles via React's text-hydration (client value wins).
 */
function assign<T extends string>(experimentId: string, variants: readonly T[]): T {
  if (!isBrowser || isPrerender()) return variants[0];
  const key = `exp:${experimentId}`;
  try {
    const stored = localStorage.getItem(key) as T | null;
    if (stored && variants.includes(stored)) return stored;
    const picked = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(key, picked);
    return picked;
  } catch {
    return variants[0];
  }
}

export function useExperiment<T extends string>(
  experimentId: string,
  variants: readonly [T, ...T[]],
): T {
  const [variant] = useState<T>(() => assign(experimentId, variants));

  useEffect(() => {
    if (isPrerender()) return;
    const exposureKey = `exp_exposed:${experimentId}`;
    try {
      if (sessionStorage.getItem(exposureKey)) return;
      sessionStorage.setItem(exposureKey, "1");
    } catch {
      /* still track once per load */
    }
    track("experiment_exposure", { experiment_id: experimentId, variant });
    setClarityTag(experimentId, variant); // filter Clarity recordings/heatmaps by variant
  }, [experimentId, variant]);

  return variant;
}
