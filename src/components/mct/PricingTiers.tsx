import { Check } from "lucide-react";
import { fill } from "@/config/mct/copy";
import { pricing } from "@/config/mct/pricing";
import { formatPrice } from "@/config/mct/pricing-utils";
import type { LeadIntent, TierId } from "@/config/mct/types";
import { CTAButton } from "@/design-system/components/cta-button";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";
import { darkSecondaryCtaClass } from "./mct-styles";

type PricingTiersProps = { compact?: boolean; highlight?: TierId };

const TIER_ORDER: TierId[] = ["public", "briefing", "enterprise"];

const TIER_INTENT: Record<TierId, LeadIntent> = {
  public: "seat",
  briefing: "briefing",
  enterprise: "scope-call",
};

export default function PricingTiers({ compact = false, highlight }: PricingTiersProps) {
  const { locale, t, currency, surface, setPrefill } = useMct();
  const ref = useReveal<HTMLElement>();

  const priceVars = {
    perDay: formatPrice(pricing.publicSeat.perDay[currency], currency, locale),
    twoDay: formatPrice(pricing.publicSeat.twoDay[currency], currency, locale),
    flat: formatPrice(pricing.briefing.flat[currency], currency, locale),
  };
  const headlinePrice: Record<TierId, string | null> = {
    public: priceVars.perDay,
    briefing: priceVars.flat,
    enterprise: null,
  };

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.tiers.eyebrow} title={t.tiers.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {TIER_ORDER.map((tier) => {
            const item = t.tiers.items[tier];
            const isHighlighted = tier === highlight;
            const bullets = compact ? item.bullets.slice(0, 2) : item.bullets;
            const headline = headlinePrice[tier];

            return (
              <article
                key={tier}
                data-reveal-child
                className={cn(
                  "flex flex-col rounded-2xl border bg-mct-navy-elevated p-8",
                  isHighlighted ? "border-electric/60" : "border-white/10",
                )}
              >
                <div className="mb-6 flex min-h-7 items-start justify-between gap-4">
                  <h3 className="m-0 text-lg font-bold text-on-dark">{item.title}</h3>
                  {tier === "briefing" && (
                    <span className="mct-eyebrow shrink-0 rounded-full bg-depth-purple/20 px-3 py-1 text-on-dark">
                      {t.tiers.briefingBadge}
                    </span>
                  )}
                </div>
                {headline ? (
                  <>
                    <p className="mct-display m-0 text-[2.5rem] normal-case tracking-normal text-on-dark">
                      {headline}
                    </p>
                    <p className="mt-3 mb-0 font-mono text-sm text-dim">{fill(item.price, priceVars)}</p>
                  </>
                ) : (
                  <p className="m-0 text-2xl font-bold text-on-dark">{fill(item.price, priceVars)}</p>
                )}
                <ul className="my-8 flex list-none flex-col gap-3 p-0">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-dim">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  variant={isHighlighted ? "primary" : "secondary"}
                  onClick={() => setPrefill({ tier, intent: TIER_INTENT[tier] }, `tier-${tier}`)}
                  data-cta={`${surface}:tier-${tier}`}
                  className={cn("mt-auto w-full", !isHighlighted && darkSecondaryCtaClass)}
                >
                  {item.cta}
                </CTAButton>
              </article>
            );
          })}
        </div>
        <p className="mt-8 mb-0 text-sm text-dim">{t.tiers.footnote}</p>
      </div>
    </section>
  );
}
