import type { FunnelConfig } from "./types";

export const depresja: FunnelConfig = {
  slug: "depresja",
  name: "Nie musisz tego znosić sam",
  eventStart: "2026-02-23T19:05:00+01:00",
  eventDurationMinutes: 90,
  format: "spotkanie",
  registration: {
    type: "easycart",
    checkoutUrl: "https://buy.siadlak.com/checkout/depresja2026",
  },
  oto: false,
  expiredCtas: { primary: "/contact", secondary: "/newsletter" },
  seo: {
    title: "Nie musisz tego znosić sam — spotkanie online",
    description:
      "Bezpłatne spotkanie online z człowiekiem, który stał na krawędzi peronu — i wrócił. Międzynarodowy Dzień Walki z Depresją.",
    keywords: "depresja, zdrowie psychiczne, spotkanie online, Ludwik Siadlak",
  },
};
