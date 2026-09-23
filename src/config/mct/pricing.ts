import type { PricingConfig } from "./types";

export const pricing: PricingConfig = {
  publicSeat: {
    perDay: { EUR: 590, PLN: 2490 },
    twoDay: { EUR: 1090, PLN: 4490 },
    maxSeats: 8,
    multiSeatDiscount: { fromSeats: 3, percent: 10 },
  },
  briefing: { flat: { EUR: 1900, PLN: 7900 }, durationHours: 3, maxLeaders: 10 },
  currencyByLocale: { en: "EUR", pl: "PLN" },
};
