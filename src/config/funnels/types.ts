export type FunnelPhase = "upcoming" | "live" | "replay" | "expired";

export type FunnelRegistration =
  | { type: "easycart"; checkoutUrl: string }
  | { type: "mailerlite"; formId: string };

export type FunnelSeo = {
  title: string;
  description: string;
  keywords: string;
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
};
