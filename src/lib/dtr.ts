import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setClarityTag, track } from "./analytics";
import type { DtrConfig, DtrVariantContent, FunnelConfig } from "@/config/funnels";

export type DtrResolved = DtrVariantContent & { key: string };

const safeSession = {
  get(key: string): string | null {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      sessionStorage.setItem(key, value);
    } catch {
      /* private mode */
    }
  },
};

/**
 * Whitelist lookup: a sticky (in-session) key wins, else the URL param's exact
 * lowercase match against the config variants. Returns null (page default) for
 * missing/unknown values — the raw URL string is never rendered.
 */
export function resolveDtrVariant(
  config: DtrConfig,
  search: string,
  scope: string,
): DtrResolved | null {
  const storageKey = `dtr:${scope}`;
  const sticky = safeSession.get(storageKey);
  if (sticky && config.variants[sticky]) {
    return { key: sticky, ...config.variants[sticky] };
  }
  const raw = new URLSearchParams(search).get(config.param);
  if (!raw) return null;
  const key = raw.trim().toLowerCase();
  const variant = config.variants[key];
  if (!variant) return null;
  safeSession.set(storageKey, key); // sticky: keep the variant across in-site nav
  return { key, ...variant };
}

/**
 * Resolve a DTR variant for a scope. Resolves post-mount (not in the initial
 * render) so the client's first paint matches the prerendered default H1 and
 * hydration doesn't mismatch; the variant then swaps in atomically.
 */
export function useDtr(config: DtrConfig | undefined, scope: string): DtrResolved | null {
  const { search } = useLocation();
  const [resolved, setResolved] = useState<DtrResolved | null>(null);

  useEffect(() => {
    if (!config) return;
    const variant = resolveDtrVariant(config, search, scope);
    if (!variant) return;
    setResolved(variant);
    track("dtr_variant_applied", {
      funnel_slug: scope,
      dtr_param: config.param,
      dtr_variant: variant.key,
    });
    setClarityTag(`dtr_${scope}`, variant.key);
  }, [config, search, scope]);

  return resolved;
}

/** Convenience wrapper for funnel pages. */
export const useFunnelDtr = (funnel: FunnelConfig): DtrResolved | null =>
  useDtr(funnel.dtr, funnel.slug);
