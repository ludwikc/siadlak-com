import { describe, expect, it } from "vitest";
import { formatPrice, quoteSeats, quoteToCents, seatPrice } from "./pricing-utils";

describe("seatPrice", () => {
  it("returns per-day and two-day prices for both currencies", () => {
    const cases: Array<[1 | 2, "EUR" | "PLN"]> = [
      [1, "EUR"],
      [1, "PLN"],
      [2, "EUR"],
      [2, "PLN"],
    ];

    expect(cases.map(([days, currency]) => seatPrice(days, currency))).toEqual([590, 2490, 1090, 4490]);
  });
});

describe("quoteSeats", () => {
  it("quotes seat counts across day lengths, currencies and the multi-seat discount", () => {
    const cases: Array<[number, 1 | 2, "EUR" | "PLN"]> = [
      [1, 1, "EUR"],
      [1, 1, "PLN"],
      [1, 2, "EUR"],
      [1, 2, "PLN"],
      [2, 1, "EUR"],
      [3, 1, "EUR"],
    ];

    expect(cases.map(([seats, days, currency]) => quoteSeats(seats, days, currency))).toEqual([
      { seats: 1, unit: 590, subtotal: 590, discountPercent: 0, discount: 0, total: 590 },
      { seats: 1, unit: 2490, subtotal: 2490, discountPercent: 0, discount: 0, total: 2490 },
      { seats: 1, unit: 1090, subtotal: 1090, discountPercent: 0, discount: 0, total: 1090 },
      { seats: 1, unit: 4490, subtotal: 4490, discountPercent: 0, discount: 0, total: 4490 },
      { seats: 2, unit: 590, subtotal: 1180, discountPercent: 0, discount: 0, total: 1180 },
      { seats: 3, unit: 590, subtotal: 1770, discountPercent: 10, discount: 177, total: 1593 },
    ]);
  });

  it("throws RangeError above the seat cap", () => {
    expect(() => quoteSeats(9, 1, "EUR")).toThrow(RangeError);
  });

  it("throws RangeError below one seat", () => {
    expect(() => quoteSeats(0, 1, "EUR")).toThrow(RangeError);
  });
});

describe("formatPrice", () => {
  it("formats PLN with the pl-PL grouping separator, no decimals", () => {
    expect(formatPrice(2490, "PLN", "pl")).toBe("2 490 zł");
  });

  it("formats EUR with the en-IE symbol, no decimals", () => {
    expect(formatPrice(590, "EUR", "en")).toBe("€590");
  });
});

describe("quoteToCents", () => {
  it("converts a whole-currency total to its integer cents value", () => {
    expect(quoteToCents(1593)).toBe(159300);
  });
});
