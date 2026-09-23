import { useEffect } from "react";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import FaqAccordion from "@/components/mct/FaqAccordion";
import MctLeadForm from "@/components/mct/MctLeadForm";
import MctShell from "@/components/mct/MctShell";
import MctStickyCta from "@/components/mct/MctStickyCta";
import ProcessLanes from "@/components/mct/ProcessLanes";
import SectionHead from "@/components/mct/SectionHead";
import { MctProvider, useMct } from "@/components/mct/MctContext";
import { cardClass } from "@/components/mct/mct-styles";
import { fill } from "@/config/mct/copy";
import type { BriefingTopicId } from "@/config/mct/copy";
import { briefingPath, hreflangAlternates, htmlLang, hubPath, ogLocale } from "@/config/mct/locale";
import { pricing } from "@/config/mct/pricing";
import { formatPrice } from "@/config/mct/pricing-utils";
import type { Locale } from "@/config/mct/types";
import { CTAButton } from "@/design-system/components/cta-button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { getMctBreadcrumb, getMctBriefingService, getMctFaqSchema } from "@/lib/structured-data-mct";

const TOPIC_ORDER: BriefingTopicId[] = ["a", "b", "c"];

const labelClass = "mct-eyebrow mt-0 mb-4 text-on-dark-tertiary";

function BriefingHero() {
  const { locale, t, currency, surface, setPrefill } = useMct();
  const flat = formatPrice(pricing.briefing.flat[currency], currency, locale);

  return (
    <div className="[&>section]:bg-mct-navy">
      <Hero
        align="left"
        eyebrow={<p className="mct-eyebrow mt-0 mb-6 text-electric">{t.briefing.eyebrow}</p>}
        title={<span className="block text-4xl text-on-dark md:text-6xl">{t.briefing.title}</span>}
        subtitle={fill(t.briefing.sub, { flat })}
      >
        <div className="flex justify-center md:justify-start">
          <CTAButton
            variant="primary"
            onClick={() => setPrefill({ tier: "briefing", intent: "briefing" }, "hero")}
            data-cta={`${surface}:hero`}
          >
            {t.briefing.cta}
          </CTAButton>
        </div>
      </Hero>
    </div>
  );
}

function BriefingTopics() {
  const { t } = useMct();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.briefing.topicsEyebrow} title={t.briefing.topicsTitle} />
        <div className="grid gap-6 lg:grid-cols-3">
          {TOPIC_ORDER.map((id) => {
            const topic = t.briefing.topics[id];
            return (
              <article key={id} className={cn(cardClass, "flex flex-col p-8")}>
                <h3 className="mt-0 mb-8 text-xl font-bold text-on-dark">{topic.title}</h3>
                <p className={labelClass}>{t.briefing.outcomesLabel}</p>
                <ul className="m-0 mb-8 flex list-none flex-col gap-3 p-0">
                  {topic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                      <span className="leading-relaxed text-dim">{outcome}</span>
                    </li>
                  ))}
                </ul>
                <p className={labelClass}>{t.briefing.agendaLabel}</p>
                <ol className="m-0 flex list-none flex-col gap-3 border-t border-white/10 p-0 pt-4">
                  {topic.agenda.map((line) => (
                    <li key={line.time} className="grid grid-cols-[6.5rem_1fr] gap-3 text-sm">
                      <span className="font-mono text-electric">{line.time}</span>
                      <span className="text-dim">{line.item}</span>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>
        <p className="mt-8 mb-0 max-w-3xl text-lg text-on-dark">{t.briefing.ownQuestion}</p>
      </div>
    </section>
  );
}

function MctBriefingContent() {
  const { locale, t } = useMct();
  const pathname = briefingPath(locale);

  useEffect(() => {
    track("mct_view", { locale, page: "briefing" });
  }, [locale]);

  return (
    <MctShell>
      <SEO
        title={t.meta.briefing.title}
        description={t.meta.briefing.description}
        url={pathname}
        type="website"
        locale={ogLocale(locale)}
        lang={htmlLang(locale)}
        alternates={hreflangAlternates(locale, pathname)}
        jsonLd={[
          getMctBriefingService(locale),
          getMctFaqSchema(locale, "briefing"),
          getMctBreadcrumb(locale, [
            { name: t.nav.hub, path: hubPath(locale) },
            { name: t.nav.briefing, path: pathname },
          ]),
        ]}
      />
      <BriefingHero />
      <BriefingTopics />
      <ProcessLanes emphasis="briefing" />
      <FaqAccordion scope="briefing" />
      <MctLeadForm defaultMode="briefing" />
      <MctStickyCta variant="briefing" />
    </MctShell>
  );
}

export default function MctBriefing({ locale }: { locale: Locale }) {
  return (
    <MctProvider key={locale} locale={locale}>
      <MctBriefingContent />
    </MctProvider>
  );
}
