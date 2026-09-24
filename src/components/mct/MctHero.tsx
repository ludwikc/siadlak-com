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

const HERO_IMAGE = "/lovable-uploads/ludwikcsiadlak-stojacy-kawa-fioletowa-poswiata-wyciety.webp";

export default function MctHero() {
  const { locale, t, surface } = useMct();
  const selectPath = useSelectPath();
  const [upcoming] = useState(() => nextSession(sessions, new Date()));

  return (
    <div className="[&>section]:bg-mct-navy">
      <Hero
        align="left"
        heroImage={HERO_IMAGE}
        imageDescription={altFor("ludwikcsiadlak-stojacy-kawa-fioletowa-poswiata-wyciety", locale)}
        eyebrow={<p className="mct-eyebrow mt-0 mb-6 text-electric">{t.hero.eyebrow}</p>}
        title={
          <span className="mct-display block text-on-dark">
            {t.hero.line1}
            <span className="mct-display-outline block">{t.hero.line2}</span>
          </span>
        }
      >
        <p className="mx-auto mt-0 mb-10 max-w-2xl text-lg leading-relaxed text-dim md:mx-0 md:text-xl">
          {t.hero.sub}
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <CTAButton
            variant="primary"
            onClick={() => selectPath("hero-teams")}
            data-cta={`${surface}:hero-teams`}
            className={pillClass}
          >
            {t.hero.pathTeams}
          </CTAButton>
          <CTAButton
            variant="secondary"
            to={enterprisePath(locale)}
            data-cta={`${surface}:hero-enterprise`}
            className={cn(pillClass, darkSecondaryCtaClass)}
          >
            {t.hero.pathEnterprise}
          </CTAButton>
        </div>
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
