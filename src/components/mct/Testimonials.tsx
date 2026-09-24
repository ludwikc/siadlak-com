import { useState } from "react";
import { Quote } from "lucide-react";
import { fill } from "@/config/mct/copy";
import type { TestimonialTag } from "@/config/mct/copy";
import { testimonialCount, testimonials } from "@/config/mct/testimonials";
import type { Testimonial } from "@/config/mct/types";
import { Button } from "@/design-system/components/button";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";
import { cardClass } from "./mct-styles";

type Filter = "all" | TestimonialTag;

const FILTERS: Filter[] = ["all", "military", "enterprise", "data", "modernwork"];
const COLLAPSED_COUNT = 6;
const FEATURED_COUNT = 3;

function TestimonialCard({ testimonial, large }: { testimonial: Testimonial; large: boolean }) {
  return (
    <figure className={cn(cardClass, "m-0 flex flex-col gap-4", large ? "p-8" : "p-6")}>
      <Quote className="h-5 w-5 text-electric" aria-hidden="true" />
      <blockquote className="m-0 flex flex-col gap-3">
        <p className={cn("m-0 font-semibold text-on-dark", large ? "text-xl leading-snug" : "text-base")}>
          {testimonial.quote}
        </p>
        {testimonial.detail && (
          <p className="m-0 text-sm leading-relaxed text-dim">{testimonial.detail}</p>
        )}
      </blockquote>
      <figcaption className="mct-eyebrow mt-auto text-on-dark-tertiary">{testimonial.author}</figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { locale, t } = useMct();
  const ref = useReveal<HTMLElement>();
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const visible =
    filter === "all" ? testimonials : testimonials.filter((item) => item.tags.includes(filter));
  const featured = visible.filter((item) => item.featured).slice(0, FEATURED_COUNT);
  const rest = visible.filter((item) => !featured.includes(item));
  const shownRest = expanded ? rest : rest.slice(0, COLLAPSED_COUNT);

  const selectFilter = (next: Filter) => {
    setFilter(next);
    setExpanded(false);
  };

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          eyebrow={t.proof.eyebrow}
          title={fill(t.proof.title, { n: testimonialCount })}
          sub={t.proof.sub}
          note={locale === "pl" ? t.proof.note : undefined}
        />

        <div role="group" aria-label={t.proof.eyebrow} className="mb-10 flex flex-wrap gap-2" data-reveal-child>
          {FILTERS.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => selectFilter(id)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric",
                filter === id
                  ? "border-electric/60 bg-electric/10 text-on-dark"
                  : "border-white/10 text-dim hover:text-on-dark",
              )}
            >
              {t.proof.filters[id]}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-dim">{t.proof.empty}</p>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="mb-6 grid gap-6 lg:grid-cols-3">
                {featured.map((item) => (
                  <TestimonialCard key={item.author + item.quote} testimonial={item} large />
                ))}
              </div>
            )}
            {shownRest.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {shownRest.map((item) => (
                  <TestimonialCard key={item.author + item.quote} testimonial={item} large={false} />
                ))}
              </div>
            )}
            {rest.length > COLLAPSED_COUNT && (
              <div className="mt-8">
                <Button
                  variant="ghost"
                  aria-expanded={expanded}
                  onClick={() => setExpanded((value) => !value)}
                  className="font-mono uppercase tracking-widest text-electric hover:bg-white/5"
                >
                  {expanded ? t.proof.showFewer : fill(t.proof.readAll, { n: visible.length })}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
