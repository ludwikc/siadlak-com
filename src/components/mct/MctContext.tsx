import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { getCopy } from "@/config/mct/copy";
import type { MctCopy } from "@/config/mct/copy";
import { pricing } from "@/config/mct/pricing";
import { MCT_PATHS } from "@/config/mct/slugs.mjs";
import type { MctPaths } from "@/config/mct/slugs.mjs";
import type { CourseSlug, Currency, LeadIntent, Locale, TierId } from "@/config/mct/types";
import { track } from "@/lib/analytics";

export type Prefill = {
  tier: TierId;
  intent: LeadIntent;
  courseSlug?: CourseSlug;
  sessionId?: string;
};

type SetPrefillOptions = { scroll?: boolean };

export type MctSurface = "mct" | "szkolenia";

type MctContextValue = {
  locale: Locale;
  surface: MctSurface;
  t: MctCopy;
  currency: Currency;
  paths: MctPaths;
  prefill: Prefill | null;
  setPrefill: (prefill: Prefill, placement: string, options?: SetPrefillOptions) => void;
};

const MctContext = createContext<MctContextValue | null>(null);

export function MctProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [prefill, setPrefillState] = useState<Prefill | null>(null);

  const setPrefill = useCallback(
    (next: Prefill, placement: string, { scroll = true }: SetPrefillOptions = {}) => {
      setPrefillState(next);
      track("mct_tier_select", {
        locale,
        tier: next.tier,
        course_slug: next.courseSlug,
        session_id: next.sessionId,
        placement,
      });
      if (!scroll || typeof document === "undefined") return;
      document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
    },
    [locale],
  );

  const value = useMemo<MctContextValue>(
    () => ({
      locale,
      surface: locale === "en" ? "mct" : "szkolenia",
      t: getCopy(locale),
      currency: pricing.currencyByLocale[locale],
      paths: MCT_PATHS[locale],
      prefill,
      setPrefill,
    }),
    [locale, prefill, setPrefill],
  );

  return <MctContext.Provider value={value}>{children}</MctContext.Provider>;
}

export function useMct(): MctContextValue {
  const ctx = useContext(MctContext);
  if (!ctx) throw new Error("useMct must be used inside <MctProvider>");
  return ctx;
}
