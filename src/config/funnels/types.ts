export type FunnelPhase = "upcoming" | "live" | "replay" | "expired";

export type FunnelRegistration =
  | { type: "easycart"; checkoutUrl: string }
  | { type: "mailerlite"; formId: string };

export type FunnelSeo = {
  title: string;
  description: string;
  keywords: string;
};

export type DtrVariantContent = {
  title: string;
  subtitle?: string;
};

/**
 * Dynamic Text Replacement config. `param` names the whitelisted URL param
 * (utm_term / utm_content); only its exact matches against `variants` keys are
 * rendered — a raw/unknown value always falls back to the page default, so the
 * URL text is never injected verbatim (XSS + brand safety).
 * Keep variant copy roughly the same length as the default to avoid reflow.
 */
export type DtrConfig = {
  param: "utm_term" | "utm_content";
  variants: Record<string, DtrVariantContent>;
};

export type FunnelConfig = {
  slug: string;
  name: string;
  eventStart: string;
  eventDurationMinutes: number;
  format: "webinar" | "warsztat" | "spotkanie";
  registration: FunnelRegistration;
  replay?: { url?: string; availableHours: number };
  oto: boolean;
  promoBar?: { copy: string; ctaLabel: string };
  expiredCtas?: { primary: string; secondary: string };
  seo: FunnelSeo;
  dtr?: DtrConfig;
};
