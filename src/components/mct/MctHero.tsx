import { useState } from "react";
import Hero from "@/components/sections/Hero";
import { fill } from "@/config/mct/copy";
import { courses } from "@/config/mct/courses";
import { enterprisePath } from "@/config/mct/locale";
import { sessions } from "@/config/mct/schedule";
import { formatSessionRange, nextSession } from "@/config/mct/schedule-utils";
import { CTAButton } from "@/design-system/components/cta-button";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import { darkSecondaryCtaClass } from "./mct-styles";
import { useSelectPath } from "./useSelectPath";
import { altFor } from "@/config/image-alt";

const pillClass = "w-full whitespace-normal text-center sm:w-auto";

const gradientWordClass = "bg-gradient-to-r from-electric to-accent bg-clip-text text-transparent";

const splitTail = (text: string, tailWords: number) => {
  const words = text.split(" ");
  const tail = words.splice(-tailWords).join(" ");
  return [words.join(" "), tail] as const;
};

const StyledHeroTitle = ({ line1, line2 }: { line1: string; line2: string }) => {
  const [lead1, tail1] = splitTail(line1, 1);
  const [lead2, tail2] = splitTail(line2, 2);
  return (
    <span className="mct-display block text-on-dark">
      <span className={gradientWordClass}>{lead1} </span>
      <span className="mct-hero-white">{tail1}</span>
      <span className="block">
        <span className={gradientWordClass}>{lead2} </span>
        <span className="mct-hero-glow">{tail2}</span>
      </span>
    </span>
  );
};

const HERO_IMAGE = "/lovable-uploads/ludwikcsiadlak-stojacy-kawa-fioletowa-poswiata-wyciety.webp";

export default function MctHero() {
  const { locale, t, surface, setPrefill } = useMct();
  const selectPath = useSelectPath();
  const [upcoming] = useState(() => nextSession(sessions, new Date()));

  return (
    <div className="mct-hero-dark">
      <Hero
        align="left"
        heroImage={HERO_IMAGE}
        imageDescription={altFor("ludwikcsiadlak-stojacy-kawa-fioletowa-poswiata-wyciety", locale)}
        eyebrow={
          <div className="mb-6 flex items-center gap-4">
            {locale === "en" && <picture className="shrink-0 md:hidden">
              <source srcSet={HERO_IMAGE.replace(".webp", ".avif")} type="image/avif" />
              <img src={HERO_IMAGE} alt={t.course.trainer.name} width={64} height={80} className="h-20 w-16 object-contain" fetchPriority="high" />
            </picture>}
            <p className="mct-eyebrow m-0 text-electric">{t.hero.eyebrow}</p>
          </div>
        }
        title={
          locale === "en" ? (
            <StyledHeroTitle line1={t.hero.line1} line2={t.hero.line2} />
          ) : (
            <span className="mct-display block text-on-dark">
              {t.hero.line1}
              <span className="mct-display-outline block">{t.hero.line2}</span>
            </span>
          )
        }
      >
        <p className="mx-auto mt-0 mb-8 max-w-2xl text-lg leading-relaxed text-dim md:mx-0">
          {t.hero.sub}
        </p>
        {locale === "en" ? <div className="flex flex-wrap justify-start gap-3">
          <CTAButton
            variant="primary"
            onClick={() => setPrefill({ tier: "enterprise", intent: "scope-call" }, "hero-enterprise")}
            data-cta={`${surface}:hero-enterprise`}
            className={pillClass}
          >
            {t.enterprise.primaryCta}
          </CTAButton>
          <CTAButton
            variant="secondary"
            onClick={() => selectPath("hero-teams")}
            data-cta={`${surface}:hero-teams`}
            className={cn(pillClass, darkSecondaryCtaClass)}
          >
            {t.segment.teams.cta}
          </CTAButton>
        </div> : <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <CTAButton variant="primary" onClick={() => selectPath("hero-teams")} data-cta={`${surface}:hero-teams`} className={pillClass}>
            {t.hero.pathTeams}
          </CTAButton>
          <CTAButton variant="secondary" to={enterprisePath(locale)} data-cta={`${surface}:hero-enterprise`} className={cn(pillClass, darkSecondaryCtaClass)}>
            {t.hero.pathEnterprise}
          </CTAButton>
        </div>}
        {locale === "en" && <p className="mt-5 mb-0 text-sm text-dim">{t.footer.responseTime}</p>}
        {upcoming && (
          <p className="mt-8 mb-0">
            <span className="inline-block rounded-full border border-electric/40 px-3 py-1 font-mono text-xs text-electric">
              {fill(t.hero.nextClass, {
                course: courses[upcoming.courseSlug].title[locale],
                date: formatSessionRange(upcoming, locale),
              })}
            </span>
          </p>
        )}
      </Hero>
    </div>
  );
}
