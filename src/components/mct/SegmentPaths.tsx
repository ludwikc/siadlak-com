import { fill } from "@/config/mct/copy";
import { enterprisePath } from "@/config/mct/locale";
import { pricing } from "@/config/mct/pricing";
import { formatPrice } from "@/config/mct/pricing-utils";
import { CTAButton } from "@/design-system/components/cta-button";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import { cardClass, darkSecondaryCtaClass } from "./mct-styles";
import { useSelectPath } from "./useSelectPath";

export default function SegmentPaths() {
  const { locale, t, currency, surface } = useMct();
  const ref = useReveal<HTMLElement>();
  const selectPath = useSelectPath();
  const price = formatPrice(pricing.publicSeat.perDay[currency], currency, locale);

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <article className={cn(cardClass, "flex flex-col p-8 md:p-10")} data-reveal-child>
          <h2 className="m-0 text-2xl font-bold text-on-dark md:text-3xl">{t.segment.teams.title}</h2>
          <p className="mt-4 mb-8 leading-relaxed text-dim">{fill(t.segment.teams.body, { price })}</p>
          <CTAButton
            variant="primary"
            onClick={() => selectPath("segment-teams")}
            data-cta={`${surface}:segment-teams`}
            className="mt-auto self-start"
          >
            {t.segment.teams.cta}
          </CTAButton>
        </article>
        <article className={cn(cardClass, "flex flex-col p-8 md:p-10")} data-reveal-child>
          <h2 className="m-0 text-2xl font-bold text-on-dark md:text-3xl">{t.segment.enterprise.title}</h2>
          <p className="mt-4 mb-8 leading-relaxed text-dim">{t.segment.enterprise.body}</p>
          <CTAButton
            variant="secondary"
            to={enterprisePath(locale)}
            data-cta={`${surface}:segment-enterprise`}
            className={cn("mt-auto self-start", darkSecondaryCtaClass)}
          >
            {t.segment.enterprise.cta}
          </CTAButton>
        </article>
      </div>
    </section>
  );
}
