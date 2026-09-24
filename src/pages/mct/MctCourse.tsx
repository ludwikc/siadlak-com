import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Check, ExternalLink } from "lucide-react";
import trainerPhoto from "@/assets/LUDWIKCSIADLAK-2025-sq.webp?w=160;320&format=avif;webp&as=picture";
import SEO from "@/components/SEO";
import CourseCard from "@/components/mct/CourseCard";
import FaqAccordion from "@/components/mct/FaqAccordion";
import MctLeadForm from "@/components/mct/MctLeadForm";
import MctPageHero from "@/components/mct/MctPageHero";
import MctShell from "@/components/mct/MctShell";
import MctStickyCta from "@/components/mct/MctStickyCta";
import PricingTiers from "@/components/mct/PricingTiers";
import ScheduleTable from "@/components/mct/ScheduleTable";
import { MctProvider, useMct } from "@/components/mct/MctContext";
import { cardClass, chipClass, codeChipClass } from "@/components/mct/mct-styles";
import { fill } from "@/config/mct/copy";
import { courseList } from "@/config/mct/courses";
import { coursePath, hreflangAlternates, htmlLang, hubPath, ogLocale } from "@/config/mct/locale";
import { MCT_CONTENT_UPDATED } from "@/config/mct/meta";
import { formatPrice, seatPrice } from "@/config/mct/pricing-utils";
import { sessions } from "@/config/mct/schedule";
import { getSessionsForCourse } from "@/config/mct/schedule-utils";
import type { AgendaDay, Course, Locale } from "@/config/mct/types";
import { proof } from "@/config/proof";
import { CTAButton } from "@/design-system/components/cta-button";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/design-system/components/tabs";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { getMctBreadcrumb, getMctCourseEntity, getMctEntityGraph, getMctFaqSchema } from "@/lib/structured-data-mct";
import NotFound from "@/pages/NotFound";

const sectionClass = "py-20";
const containerClass = "mx-auto max-w-6xl px-4";
const bodyClass = "text-dim leading-relaxed";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
          <span className={bodyClass}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <h2 className="mt-0 mb-10 max-w-3xl text-3xl font-bold leading-tight text-on-dark md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function CourseHero({ course }: { course: Course }) {
  const { locale, t, currency, surface, setPrefill } = useMct();
  const daysLabel = course.days === 1 ? t.catalog.dayOne : fill(t.catalog.dayMany, { n: course.days });
  const meta = [
    `${t.course.duration}: ${daysLabel}`,
    `${t.course.level}: ${t.levels[course.level]}`,
    t.course.maxSeats,
    t.course.liveOnline,
  ];

  return (
    <MctPageHero
        eyebrow={
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="mct-eyebrow text-electric">
              {course.official ? t.badges.official : t.badges.custom}
            </span>
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
        }
        title={course.title[locale]}
        subtitle={course.tagline[locale]}
      >
        <ul className="m-0 mb-10 flex list-none flex-wrap justify-center gap-2 p-0 md:justify-start">
          {meta.map((item) => (
            <li key={item} className={chipClass}>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-0 mb-2">
          <span className="text-3xl font-bold text-on-dark">
            {formatPrice(seatPrice(course.days, currency), currency, locale)}
          </span>
          <span className="text-dim"> / {t.course.perSeat}</span>
        </p>
        <CTAButton
          variant="tertiary"
          showArrow={false}
          onClick={() =>
            setPrefill({ tier: "enterprise", intent: "scope-call", courseSlug: course.slug }, "hero-private")
          }
          data-cta={`${surface}:hero-private`}
          className="whitespace-normal normal-case tracking-normal"
        >
          {t.course.orPrivate}
        </CTAButton>
        <div className="mt-8 flex justify-center md:justify-start">
          <CTAButton
            variant="primary"
            onClick={() => setPrefill({ tier: "public", intent: "seat", courseSlug: course.slug }, "hero")}
            data-cta={`${surface}:hero`}
          >
            {t.tiers.items.public.cta}
          </CTAButton>
        </div>
    </MctPageHero>
  );
}

function AgendaDayContent({ day, label }: { day: AgendaDay; label: string }) {
  const { locale, t } = useMct();

  return (
    <>
      <h3 className="mt-0 mb-6 text-lg font-bold text-on-dark">
        {label}: {day.title[locale]}
      </h3>
      <ol className="m-0 mb-8 flex list-none flex-col gap-4 p-0">
        {day.modules[locale].map((module, moduleIndex) => (
          <li key={module} className="flex gap-4">
            <span className="shrink-0 font-mono text-sm font-bold text-electric" aria-hidden="true">
              {String(moduleIndex + 1).padStart(2, "0")}
            </span>
            <span className={bodyClass}>{module}</span>
          </li>
        ))}
      </ol>
      <div className="border-l-2 border-electric pl-4">
        <p className="mct-eyebrow mt-0 mb-2 text-electric">{t.course.addOn}</p>
        <p className={cn(bodyClass, "m-0")}>{day.addOn[locale]}</p>
      </div>
    </>
  );
}

function CourseAgenda({ course }: { course: Course }) {
  const { t } = useMct();
  const dayLabel = (index: number) => fill(t.course.day, { n: index + 1 });
  const panelClass = cn(cardClass, "p-8");

  if (course.days === 1) {
    return (
      <ContentSection title={t.course.agenda}>
        <div className={cn(panelClass, "max-w-3xl")}>
          <AgendaDayContent day={course.agenda[0]} label={dayLabel(0)} />
        </div>
      </ContentSection>
    );
  }

  return (
    <ContentSection title={t.course.agenda}>
      <Tabs defaultValue="day-1" className="max-w-3xl">
        <TabsList aria-label={t.course.agenda} className="mb-6 h-auto border border-white/10 bg-mct-navy-elevated">
          {course.agenda.map((day, index) => (
            <TabsTrigger
              key={day.title.en}
              value={`day-${index + 1}`}
              className="px-4 py-2 text-dim data-[state=active]:bg-electric/15 data-[state=active]:text-on-dark"
            >
              {dayLabel(index)}
            </TabsTrigger>
          ))}
        </TabsList>
        {course.agenda.map((day, index) => (
          <TabsContent key={day.title.en} value={`day-${index + 1}`} className={cn(panelClass, "mt-0")}>
            <AgendaDayContent day={day} label={dayLabel(index)} />
          </TabsContent>
        ))}
      </Tabs>
    </ContentSection>
  );
}

function TrainerStrip() {
  const { t } = useMct();
  const stats = [
    { value: proof.yearsMct, label: t.course.trainer.years },
    { value: proof.trainedProfessionals, label: t.course.trainer.trained },
    { value: proof.countries, label: t.course.trainer.countries },
  ];

  return (
    <section className="border-y border-white/10 bg-mct-navy-elevated py-20">
      <div className={cn(containerClass, "flex flex-col items-center gap-10 md:flex-row")}>
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10">
            <OptimizedImage
              src={trainerPhoto}
              alt={t.course.trainer.name}
              width={80}
              height={80}
              sizes="80px"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mct-eyebrow mt-0 mb-1 text-electric">{t.course.trainer.eyebrow}</p>
            <p className="m-0 text-xl font-bold text-on-dark">{t.course.trainer.name}</p>
          </div>
        </div>
        <dl className="m-0 grid w-full grid-cols-3 gap-6 md:ml-auto md:w-auto md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse text-center md:text-left">
              <dt className="mt-1 text-sm text-dim">{stat.label}</dt>
              <dd className="m-0 font-mono text-3xl font-bold text-on-dark">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function MctCourseContent({ course }: { course: Course }) {
  const { locale, t, currency } = useMct();
  const [upcoming] = useState(() => getSessionsForCourse(sessions, course.slug, new Date()));
  const pathname = coursePath(locale, course.slug);
  const related = courseList.filter((c) => c.track === course.track && c.slug !== course.slug);
  const outcomesTitle =
    course.days === 1 ? t.course.outcomesOne : fill(t.course.outcomes, { n: course.days });

  useEffect(() => {
    track("mct_view", { locale, page: "course", course_slug: course.slug });
  }, [locale, course.slug]);

  return (
    <MctShell>
      <SEO
        title={fill(t.meta.course.title, { shortTitle: course.shortTitle[locale] })}
        description={fill(t.meta.course.description, {
          tagline: course.tagline[locale],
          days: course.days,
          price: formatPrice(seatPrice(course.days, currency), currency, locale),
        })}
        keywords={fill(t.meta.course.keywords, {
          code: course.examCode ?? course.codes[0]?.replace(/T00$/, "") ?? course.shortTitle[locale],
        })}
        modifiedDate={MCT_CONTENT_UPDATED}
        url={pathname}
        type="course"
        locale={ogLocale(locale)}
        lang={htmlLang(locale)}
        alternates={hreflangAlternates(locale, pathname)}
        jsonLd={[
          ...getMctEntityGraph(),
          getMctCourseEntity(course, upcoming, locale),
          getMctFaqSchema(locale, "course"),
          getMctBreadcrumb(locale, [
            { name: t.nav.hub, path: hubPath(locale) },
            { name: course.title[locale], path: pathname },
          ]),
        ]}
      />
      <CourseHero course={course} />

      <div className={cn(containerClass, "pt-20")}>
        <p className="m-0 max-w-3xl text-lg leading-relaxed text-dim">{course.summary[locale]}</p>
      </div>

      {course.condensed && (
        <div className={cn(containerClass, "pt-8")}>
          <p className={cn(cardClass, "m-0 max-w-3xl border-l-2 border-l-electric p-6", bodyClass)}>
            {t.course.condensedNotice}
          </p>
        </div>
      )}

      <section className={sectionClass}>
        <div className={cn(containerClass, "grid gap-6 md:grid-cols-2")}>
          <div className={cn(cardClass, "p-8")}>
            <h2 className="mt-0 mb-6 text-2xl font-bold text-on-dark">{t.course.audience}</h2>
            <CheckList items={course.audience[locale]} />
          </div>
          <div className={cn(cardClass, "p-8")}>
            <h2 className="mt-0 mb-6 text-2xl font-bold text-on-dark">{t.course.notFor}</h2>
            <p className={cn(bodyClass, "m-0")}>{course.notFor[locale]}</p>
          </div>
        </div>
      </section>

      <ContentSection title={outcomesTitle}>
        <div className="max-w-3xl">
          <CheckList items={course.outcomes[locale]} />
        </div>
      </ContentSection>

      <CourseAgenda course={course} />

      <section className={sectionClass}>
        <div className={cn(containerClass, "grid gap-6 md:grid-cols-2")}>
          <div className={cn(cardClass, "p-8")}>
            <h2 className="mt-0 mb-6 text-2xl font-bold text-on-dark">{t.course.prerequisites}</h2>
            <CheckList items={course.prerequisites[locale]} />
            {(course.msLearnUrl || course.examCode) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {course.examCode && (
                  <span className={codeChipClass}>{fill(t.course.exam, { code: course.examCode })}</span>
                )}
                {course.msLearnUrl && (
                  <a
                    href={course.msLearnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-on-dark underline underline-offset-4 hover:text-electric"
                  >
                    {t.course.msLearn}
                    <ExternalLink className="h-4 w-4 text-electric" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className={cn(cardClass, "p-8")}>
            <h2 className="mt-0 mb-6 text-2xl font-bold text-on-dark">{t.course.format.title}</h2>
            <CheckList items={t.course.format.items} />
            <p className={cn(bodyClass, "mt-6 mb-0 text-sm")}>{t.course.format.recording}</p>
          </div>
        </div>
      </section>

      <ScheduleTable courseSlug={course.slug} />
      <PricingTiers compact />
      <TrainerStrip />

      {related.length > 0 && (
        <section className={sectionClass}>
          <div className={containerClass}>
            <h2 className="mt-0 mb-10 text-3xl font-bold text-on-dark md:text-4xl">{t.course.related}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqAccordion scope="course" />
      <MctLeadForm defaultMode="seat" defaultCourseSlug={course.slug} />
      <MctStickyCta variant="course" course={course} nextSession={upcoming[0]} />
    </MctShell>
  );
}

export default function MctCourse({ locale }: { locale: Locale }) {
  const { slug } = useParams();
  const course = courseList.find((c) => c.slug === slug);

  if (!course) return <NotFound />;

  return (
    <MctProvider key={`${locale}-${course.slug}`} locale={locale}>
      <MctCourseContent course={course} />
    </MctProvider>
  );
}
