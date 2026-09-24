import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import ClientMarquee from "@/components/mct/ClientMarquee";
import FaqAccordion from "@/components/mct/FaqAccordion";
import MctHero from "@/components/mct/MctHero";
import MctLeadForm from "@/components/mct/MctLeadForm";
import MctShell from "@/components/mct/MctShell";
import MctStickyCta from "@/components/mct/MctStickyCta";
import PricingTiers from "@/components/mct/PricingTiers";
import ProcessLanes from "@/components/mct/ProcessLanes";
import ScheduleTable from "@/components/mct/ScheduleTable";
import SegmentPaths from "@/components/mct/SegmentPaths";
import Testimonials from "@/components/mct/Testimonials";
import TrackGrid from "@/components/mct/TrackGrid";
import TrustBand from "@/components/mct/TrustBand";
import WhyMe from "@/components/mct/WhyMe";
import { MctProvider, useMct } from "@/components/mct/MctContext";
import { darkSecondaryCtaClass } from "@/components/mct/mct-styles";
import { EMAIL, PHONE_PL, PHONE_PL_TEL } from "@/config/mct/contact";
import { courseList } from "@/config/mct/courses";
import { hreflangAlternates, htmlLang, hubPath, ogLocale } from "@/config/mct/locale";
import { MCT_CONTENT_UPDATED } from "@/config/mct/meta";
import type { LeadIntent, Locale, TierId } from "@/config/mct/types";
import { CTAButton } from "@/design-system/components/cta-button";
import { track } from "@/lib/analytics";
import { getMctEntityGraph, getMctFaqSchema, getMctHubEntities } from "@/lib/structured-data-mct";

type HubPath = "teams" | "enterprise";

const FINAL_TIERS: Array<{ tier: TierId; intent: LeadIntent }> = [
  { tier: "public", intent: "seat" },
  { tier: "briefing", intent: "briefing" },
  { tier: "enterprise", intent: "scope-call" },
];

const contactLinkClass = "text-on-dark underline underline-offset-4 hover:text-electric";

function useHubPath(): HubPath | undefined {
  const [searchParams] = useSearchParams();
  const { prefill } = useMct();
  const param = searchParams.get("path");

  if (prefill?.tier === "enterprise") return "enterprise";
  if (prefill?.tier === "public") return "teams";
  if (param === "enterprise" || param === "teams") return param;
  return undefined;
}

function FinalCta() {
  const { t, surface, setPrefill } = useMct();
  const [beforeEmail, afterEmail = ""] = t.finalCta.contactLine.split("{email}");

  return (
    <section className="border-y border-white/10 bg-mct-navy-elevated py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="m-0 text-3xl font-bold leading-tight text-on-dark md:text-4xl">{t.finalCta.title}</h2>
        <p className="mt-4 mb-10 text-lg leading-relaxed text-dim">{t.finalCta.sub}</p>
        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          {FINAL_TIERS.map(({ tier, intent }, index) => (
            <CTAButton
              key={tier}
              variant={index === 0 ? "primary" : "secondary"}
              onClick={() => setPrefill({ tier, intent }, `final-${tier}`)}
              data-cta={`${surface}:final-${tier}`}
              className={index === 0 ? undefined : darkSecondaryCtaClass}
            >
              {t.tiers.items[tier].cta}
            </CTAButton>
          ))}
        </div>
        <p className="mt-10 mb-0 text-sm text-dim">
          {beforeEmail}
          <a href={`mailto:${EMAIL}`} className={contactLinkClass}>
            {EMAIL}
          </a>
          {afterEmail} ·{" "}
          <a href={`tel:${PHONE_PL_TEL}`} className={contactLinkClass}>
            {PHONE_PL}
          </a>
        </p>
      </div>
    </section>
  );
}

function MctHubContent() {
  const { locale, t } = useMct();
  const path = useHubPath();
  const pathname = hubPath(locale);

  useEffect(() => {
    track("mct_view", { locale, page: "hub" });
  }, [locale]);

  return (
    <MctShell>
      <SEO
        title={t.meta.hub.title}
        description={t.meta.hub.description}
        keywords={t.meta.hub.keywords}
        modifiedDate={MCT_CONTENT_UPDATED}
        url={pathname}
        type="website"
        locale={ogLocale(locale)}
        lang={htmlLang(locale)}
        alternates={hreflangAlternates(locale, pathname)}
        jsonLd={[...getMctEntityGraph(), ...getMctHubEntities(locale, courseList), getMctFaqSchema(locale, "hub")]}
      />
      <MctHero />
      <TrustBand />
      <ClientMarquee />
      <SegmentPaths />
      <div id="pricing" className="scroll-mt-20">
        <PricingTiers highlight={path === "teams" ? "public" : undefined} />
      </div>
      <ScheduleTable />
      <TrackGrid />
      <WhyMe />
      <Testimonials />
      <ProcessLanes />
      <FaqAccordion scope="hub" />
      <FinalCta />
      <MctLeadForm />
      <MctStickyCta variant={path === "enterprise" ? "hub-enterprise" : "hub-teams"} />
    </MctShell>
  );
}

export default function MctHub({ locale }: { locale: Locale }) {
  return (
    <MctProvider key={locale} locale={locale}>
      <MctHubContent />
    </MctProvider>
  );
}
