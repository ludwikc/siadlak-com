import type { FunnelConfig } from "./types";

export const meskiKompas: FunnelConfig = {
  slug: "meski-kompas",
  name: "Koniec z Dryfowaniem",
  eventStart: "2025-10-16T19:00:00+02:00",
  eventDurationMinutes: 120,
  format: "warsztat",
  registration: {
    type: "easycart",
    checkoutUrl: "https://buy.siadlak.com/checkout/spotkanie-online",
  },
  replay: {
    url: "https://webinar.mywave.video/U46SI3aV5Pti8zbg?embed",
    availableHours: 48,
  },
  oto: true,
  seo: {
    title: "Koniec z Dryfowaniem — warsztat dla analitycznych mężczyzn",
    description:
      "Bezpłatny 90-minutowy warsztat: jak analityczny umysł sabotuje Twoją męskość i jak zamienić go w największą siłę. Prowadzą Ludwik C. Siadlak i Mateusz Lizak.",
    keywords:
      "męskość, paraliż analityczny, warsztat dla mężczyzn, Męski Kompas, Ludwik Siadlak",
  },
};
