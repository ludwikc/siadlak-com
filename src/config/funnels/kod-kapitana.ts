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
  // Message-match for paid traffic: ?utm_term=<key> swaps the H1 + subtitle to
  // the matching angle. Unknown values fall back to the default copy above.
  dtr: {
    param: "utm_term",
    variants: {
      produktywnosc: {
        title: "Produktywność bez wewnętrznego chaosu",
        subtitle:
          "Jak w 90 minut odzyskać kontrolę nad natłokiem zadań i myśli — bez kolejnej aplikacji do zadań i bez zaciskania zębów.",
      },
      koncentracja: {
        title: "Koncentracja, która naprawdę wraca",
        subtitle:
          "Jak w 90 minut nauczyć się wracać uwagą tam, gdzie chcesz — nawet gdy wokół chaos, a w głowie sto otwartych kart.",
      },
      prokrastynacja: {
        title: "Prokrastynacja to nie lenistwo",
        subtitle:
          "Jak w 90 minut zrozumieć, dlaczego odkładasz — i co działa zamiast walki ze sobą i presji kolejnych deadline'ów.",
      },
    },
  },
};
