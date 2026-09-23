import type { TierId } from "@/config/mct/types";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";
import { cardClass } from "./mct-styles";

const LANE_ORDER: TierId[] = ["public", "briefing", "enterprise"];

export default function ProcessLanes() {
  const { t } = useMct();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {LANE_ORDER.map((lane) => (
            <div key={lane} className={cn(cardClass, "p-8")} data-reveal-child>
              <h3 className="mt-0 mb-6 text-lg font-bold text-on-dark">{t.process.lanes[lane].title}</h3>
              <ol className="m-0 flex list-none flex-col gap-5 p-0">
                {t.process.lanes[lane].beats.map((beat, index) => (
                  <li key={beat} className="flex gap-4">
                    <span className="shrink-0 font-mono text-sm font-bold text-electric" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-dim">{beat}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
