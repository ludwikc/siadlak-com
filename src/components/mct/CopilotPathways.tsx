import { Check, Compass, Bot, Workflow } from "lucide-react";
import { fill } from "@/config/mct/copy";
import { courses } from "@/config/mct/courses";
import { coursePath } from "@/config/mct/locale";
import { copilotPathways, pathwayCopy } from "@/config/mct/pathways";
import { formatPrice, seatPrice } from "@/config/mct/pricing-utils";
import { CTAButton } from "@/design-system/components/cta-button";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";

const icons = [Compass, Bot, Workflow];

export default function CopilotPathways() {
  const { locale, currency, t, surface, setPrefill } = useMct();

  return (
    <section id="ai-pathways" className="mct-pathways scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={pathwayCopy.eyebrow} title={pathwayCopy.title} />
        <p className="mt-0 mb-10 max-w-3xl text-lg leading-relaxed text-dim">{pathwayCopy.sub}</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {copilotPathways.map((pathway, index) => {
            const course = courses[pathway.courseSlug];
            const Icon = icons[index] ?? Compass;
            const days = course.days === 1 ? t.catalog.dayOne : fill(t.catalog.dayMany, { n: course.days });
            return (
              <article key={course.slug} className="mct-pathway flex min-w-0 flex-col p-8">
                <div className="mb-6 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-electric" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm text-dim">0{index + 1}</span>
                </div>
                <p className="mct-eyebrow mt-0 mb-3 text-electric">{pathway.audience}</p>
                <h3 className="m-0 text-2xl font-bold leading-tight text-on-dark">{pathway.title}</h3>
                <p className="mt-4 mb-6 leading-relaxed text-dim">{pathway.description}</p>
                <ul className="mt-0 mb-8 flex list-none flex-col gap-3 p-0">
                  {pathway.outcomeIndices.map((outcomeIndex) => (
                    <li key={outcomeIndex} className="flex gap-3 text-sm leading-relaxed text-on-dark">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                      {course.outcomes[locale][outcomeIndex]}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-border pt-6">
                  <p className="mt-0 mb-2 text-sm font-semibold text-on-dark">{course.shortTitle[locale]}</p>
                  <p className="mt-0 mb-6 text-sm text-dim">{fill(pathwayCopy.price, {
                    price: formatPrice(seatPrice(course.days, currency), currency, locale), days,
                  })}</p>
                  <CTAButton variant="primary" to={coursePath(locale, course.slug)} showArrow data-cta={`${surface}:pathway-${course.slug}`} className="w-full">
                    {pathway.cta}
                  </CTAButton>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="m-0 text-xl font-bold text-on-dark">{pathwayCopy.customTitle}</h3>
            <p className="mt-2 mb-0 leading-relaxed text-dim">{pathwayCopy.customBody}</p>
          </div>
          <CTAButton variant="secondary" onClick={() => setPrefill({ tier: "enterprise", intent: "scope-call" }, "pathway-custom")} data-cta={`${surface}:pathway-custom`} className="shrink-0">
            {pathwayCopy.customCta}
          </CTAButton>
        </div>
        <CTAButton variant="tertiary" to="#courses" showArrow data-cta={`${surface}:pathway-all`} className="mt-6">{pathwayCopy.allCourses}</CTAButton>
      </div>
    </section>
  );
}