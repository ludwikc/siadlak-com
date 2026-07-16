import type { FunnelConfig } from "./types";

export const kodKapitana: FunnelConfig = {
  slug: "kod-kapitana",
  name: "Kod Kapitana",
  eventStart: "2026-02-02T20:05:00+01:00",
  eventDurationMinutes: 90,
  format: "spotkanie",
  registration: {
    type: "easycart",
    checkoutUrl: "https://buy.siadlak.com/checkout/kod-kapitana",
  },
  replay: { availableHours: 48 },
  oto: true,
  promoBar: {
    copy: "Spotkanie online już za:",
    ctaLabel: "🚢 Zarezerwuj miejsce",
  },
  seo: {
    title: "Kod Kapitana: Uważność, która naprawdę działa",
    description:
      "Bezpłatne spotkanie online: jak w 90 minut zmienić sposób, w jaki reagujesz na stres, natłok myśli i chaos — bez siadania po turecku.",
    keywords:
      "uważność, mindfulness, ADHD, stres, Kod Kapitana, Ludwik Siadlak",
  },
};
