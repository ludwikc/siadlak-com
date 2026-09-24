import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { fill } from "@/config/mct/copy";
import { pricing } from "@/config/mct/pricing";
import { formatPrice, quoteSeats } from "@/config/mct/pricing-utils";
import { useMct } from "./MctContext";

type SeatQuoteProps = {
  days: 1 | 2;
  seats?: number;
  onSeatsChange?: (seats: number) => void;
};

const MAX_SEATS = pricing.publicSeat.maxSeats;
const HINT_FROM_SEATS = 6;

const clampSeats = (value: number) =>
  Number.isFinite(value) ? Math.min(MAX_SEATS, Math.max(1, Math.round(value))) : 1;

const stepperClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-border text-electric transition-colors hover:border-electric disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric";

export default function SeatQuote({ days, seats: controlledSeats, onSeatsChange }: SeatQuoteProps) {
  const { locale, t, currency } = useMct();
  const [ownSeats, setOwnSeats] = useState(1);
  const seats = clampSeats(controlledSeats ?? ownSeats);
  const quote = quoteSeats(seats, days, currency);
  const price = (amount: number) => formatPrice(amount, currency, locale);

  const changeSeats = (next: number) => {
    const value = clampSeats(next);
    setOwnSeats(value);
    onSeatsChange?.(value);
  };

  return (
    <div className="rounded-2xl border border-border p-6 text-foreground">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-muted-foreground">{t.form.labels.seats}</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={t.form.quote.removeSeat}
            disabled={seats <= 1}
            onClick={() => changeSeats(seats - 1)}
            className={stepperClass}
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="w-8 text-center font-mono text-xl font-bold">{seats}</span>
          <button
            type="button"
            aria-label={t.form.quote.addSeat}
            disabled={seats >= MAX_SEATS}
            onClick={() => changeSeats(seats + 1)}
            className={stepperClass}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <dl className="mt-6 mb-0 space-y-2 text-sm" aria-live="polite" aria-atomic="true">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">
            {fill(t.form.quote.line, { n: quote.seats, price: price(quote.unit) })}
          </dt>
          <dd className="m-0 font-mono">{price(quote.subtotal)}</dd>
        </div>
        {quote.discountPercent > 0 && (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">
              {fill(t.form.quote.discount, { percent: quote.discountPercent })}
            </dt>
            <dd className="m-0 font-mono">{price(-quote.discount)}</dd>
          </div>
        )}
        <div className="flex justify-between gap-4 border-t border-border pt-2 text-base font-bold">
          <dt>{t.form.quote.total}</dt>
          <dd className="m-0 font-mono">{price(quote.total)}</dd>
        </div>
      </dl>

      {seats >= HINT_FROM_SEATS && <p className="mt-4 mb-0 text-sm text-electric-blue-dark">{t.form.seatsHint6}</p>}
    </div>
  );
}
