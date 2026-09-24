import { fill } from "@/config/mct/copy";
import { coursePath } from "@/config/mct/locale";
import { formatPrice, seatPrice } from "@/config/mct/pricing-utils";
import type { Course } from "@/config/mct/types";
import { CTAButton } from "@/design-system/components/cta-button";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import { cardClass, codeChipClass } from "./mct-styles";

type CourseCardProps = { course: Course; headingLevel?: "h3" | "h4" };

export default function CourseCard({ course, headingLevel = "h3" }: CourseCardProps) {
  const { locale, t, currency, surface } = useMct();
  const Heading = headingLevel;
  const daysLabel = course.days === 1 ? t.catalog.dayOne : fill(t.catalog.dayMany, { n: course.days });

  return (
    <article
      className={cn(cardClass, "flex flex-col gap-4 p-6 transition-colors hover:border-electric/40")}
      data-reveal-child
    >
      <div className="flex flex-wrap items-center gap-2">
        {course.codes.map((code) => (
          <span key={code} className={codeChipClass}>
            {code}
          </span>
        ))}
        {course.condensed && (
          <span className="rounded-full bg-depth-purple/20 px-2.5 py-0.5 text-xs font-medium text-on-dark">
            {t.badges.condensed}
          </span>
        )}
      </div>
      <Heading className="m-0 text-lg font-bold leading-snug text-on-dark">{course.title[locale]}</Heading>
      <p className="m-0 font-mono text-xs text-dim">
        {daysLabel} · {t.levels[course.level]}
      </p>
      <p className="m-0 text-on-dark">
        <span className="font-mono text-lg font-bold">
          {formatPrice(seatPrice(course.days, currency), currency, locale)}
        </span>{" "}
        <span className="text-sm text-dim">{t.course.perSeat}</span>
      </p>
      <CTAButton
        variant="tertiary"
        to={coursePath(locale, course.slug)}
        showArrow
        data-cta={`${surface}:course-card-${course.slug}`}
        className="mt-auto self-start"
      >
        {t.catalog.cardCta}
      </CTAButton>
    </article>
  );
}
