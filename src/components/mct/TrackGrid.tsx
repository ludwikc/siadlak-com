import { courseList, TRACK_ORDER, tracks } from "@/config/mct/courses";
import { useReveal } from "@/hooks/use-reveal";
import CourseCard from "./CourseCard";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";

export default function TrackGrid() {
  const { locale, t } = useMct();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.catalog.eyebrow} title={t.catalog.title} />
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-6">
          {TRACK_ORDER.map((track) => (
            <div key={track} className="flex flex-col gap-4">
              <div data-reveal-child>
                <h3 className="m-0 text-xl font-bold text-on-dark">{tracks[track].title[locale]}</h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-dim">{tracks[track].blurb[locale]}</p>
              </div>
              {courseList
                .filter((course) => course.track === track)
                .map((course) => (
                  <CourseCard key={course.slug} course={course} headingLevel="h4" />
                ))}
            </div>
          ))}
        </div>
        <p className="mt-10 mb-0 max-w-3xl text-sm text-dim">{t.catalog.footer}</p>
      </div>
    </section>
  );
}
