import { useEffect } from "react";
import SEO from "@/components/SEO";
import FaqAccordion from "@/components/mct/FaqAccordion";
import MctLeadForm from "@/components/mct/MctLeadForm";
import MctPageHero from "@/components/mct/MctPageHero";
import MctShell from "@/components/mct/MctShell";
import MctStickyCta from "@/components/mct/MctStickyCta";
import ProcessLanes from "@/components/mct/ProcessLanes";
import SectionHead from "@/components/mct/SectionHead";
import TrustBand from "@/components/mct/TrustBand";
import WhyMe from "@/components/mct/WhyMe";
import { MctProvider, useMct } from "@/components/mct/MctContext";
import { cardClass, darkSecondaryCtaClass } from "@/components/mct/mct-styles";
import { CALENDAR_URL } from "@/config/mct/contact";
import { enterprisePath, hreflangAlternates, htmlLang, hubPath, ogLocale } from "@/config/mct/locale";
import { testimonials } from "@/config/mct/testimonials";
import type { Locale } from "@/config/mct/types";
import { CTAButton } from "@/design-system/components/cta-button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { getMctBreadcrumb, getMctEnterpriseService, getMctFaqSchema } from "@/lib/structured-data-mct";

const CASE_QUOTE_IDS: Record<string, string[]> = { "us-army": ["blankenship", "buenavente"] };

const pillClass = "w-full whitespace-normal text-center sm:w-auto";

function EnterpriseHero() {
  const { locale, t, surface, setPrefill } = useMct();

  return (
    <MctPageHero
      eyebrow={<p className="mct-eyebrow mt-0 mb-6 text-electric">{t.enterprise.eyebrow}</p>}
      title={t.enterprise.title}
      subtitle={t.enterprise.sub}
    >
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <CTAButton
            variant="primary"
            onClick={() => setPrefill({ tier: "enterprise", intent: "scope-call" }, "hero-primary")}
            data-cta={`${surface}:hero-primary`}
            className={pillClass}
          >
            {t.enterprise.primaryCta}
          </CTAButton>
          <CTAButton
            variant="secondary"
            href={CALENDAR_URL}
            target="_blank"
            showArrow={false}
            onClick={() => track("mct_calendar_click", { locale, placement: "enterprise-hero" })}
            data-cta={`${surface}:hero-calendar`}
            className={cn(pillClass, darkSecondaryCtaClass)}
          >
            {t.enterprise.secondaryCta}
          </CTAButton>
        </div>
    </MctPageHero>
  );
}

function EnterpriseCases() {
  const { t } = useMct();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.enterprise.casesEyebrow} title={t.enterprise.casesTitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.enterprise.cases.map((item) => {
            const quotes = (CASE_QUOTE_IDS[item.id] ?? []).flatMap((id) =>
              testimonials.filter((quote) => quote.id === id),
            );

            return (
              <article key={item.id} className={cn(cardClass, "flex flex-col p-8")}>
                <h3 className="mt-0 mb-3 text-xl font-bold text-on-dark">{item.title}</h3>
                <p className="m-0 leading-relaxed text-dim">{item.body}</p>
                {quotes.map((quote) => (
                  <figure key={quote.author} lang="en" className="mt-6 mb-0 border-l-2 border-electric pl-4">
                    <blockquote className="m-0 text-on-dark">“{quote.quote}”</blockquote>
                    <figcaption className="mt-2 text-sm text-on-dark-tertiary">{quote.author}</figcaption>
                  </figure>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EnterpriseProcurement() {
  const { t } = useMct();

  return (
    <section className="border-y border-white/10 bg-mct-navy-elevated py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.enterprise.procurement.eyebrow} title={t.enterprise.procurement.title} />
        <dl className="m-0 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {t.enterprise.procurement.facts.map((fact) => (
            <div key={fact.label} className="border-t border-white/10 pt-4">
              <dt className="mct-eyebrow mb-2 text-electric">{fact.label}</dt>
              <dd className="m-0 leading-relaxed text-dim">{fact.body}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 max-w-3xl">
          <h3 className="mt-0 mb-3 text-2xl font-bold text-on-dark">{t.enterprise.privateRun.title}</h3>
          <p className="m-0 text-lg leading-relaxed text-dim">{t.enterprise.privateRun.body}</p>
        </div>
      </div>
    </section>
  );
}

function MctEnterpriseContent() {
  const { locale, t } = useMct();
  const pathname = enterprisePath(locale);

  useEffect(() => {
    track("mct_view", { locale, page: "enterprise" });
  }, [locale]);

  return (
    <MctShell>
      <SEO
        title={t.meta.enterprise.title}
        description={t.meta.enterprise.description}
        url={pathname}
        type="website"
        locale={ogLocale(locale)}
        lang={htmlLang(locale)}
        alternates={hreflangAlternates(locale, pathname)}
        jsonLd={[
          getMctEnterpriseService(locale),
          getMctFaqSchema(locale, "enterprise"),
          getMctBreadcrumb(locale, [
            { name: t.nav.hub, path: hubPath(locale) },
            { name: t.nav.enterprise, path: pathname },
          ]),
        ]}
      />
      <EnterpriseHero />
      <TrustBand />
      <EnterpriseCases />
      <EnterpriseProcurement />
      <WhyMe />
      <ProcessLanes emphasis="enterprise" />
      <FaqAccordion scope="enterprise" />
      <MctLeadForm defaultMode="scope" />
      <MctStickyCta variant="enterprise" />
    </MctShell>
  );
}

export default function MctEnterprise({ locale }: { locale: Locale }) {
  return (
    <MctProvider key={locale} locale={locale}>
      <MctEnterpriseContent />
    </MctProvider>
  );
}
