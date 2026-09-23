import { pricing } from "./pricing";
import type { Currency, Locale } from "./types";

export type SeatQuote = {
  seats: number;
  unit: number;
  subtotal: number;
  discountPercent: number;
  discount: number;
  total: number;
};

export function seatPrice(days: 1 | 2, currency: Currency): number {
  return days === 1 ? pricing.publicSeat.perDay[currency] : pricing.publicSeat.twoDay[currency];
}

export function quoteSeats(seats: number, days: 1 | 2, currency: Currency): SeatQuote {
  if (seats < 1 || seats > pricing.publicSeat.maxSeats) {
    throw new RangeError(`seats must be between 1 and ${pricing.publicSeat.maxSeats}, got ${seats}`);
  }

  const unit = seatPrice(days, currency);
  const subtotal = unit * seats;
  const { fromSeats, percent } = pricing.publicSeat.multiSeatDiscount;
  const discountPercent = seats >= fromSeats ? percent : 0;
  const discount = discountPercent === 0 ? 0 : Math.round((subtotal * discountPercent) / 100);

  return { seats, unit, subtotal, discountPercent, discount, total: subtotal - discount };
}

export function formatPrice(amount: number, currency: Currency, locale: Locale): string {
  const intlLocale = locale === "pl" ? "pl-PL" : "en-IE";
  return new Intl.NumberFormat(intlLocale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(amount);
}

export function quoteToCents(total: number): number {
  return total * 100;
}
