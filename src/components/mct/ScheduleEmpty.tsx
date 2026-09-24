import type { CourseSlug } from "@/config/mct/types";
import { CTAButton } from "@/design-system/components/cta-button";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import { cardClass, darkSecondaryCtaClass } from "./mct-styles";

type ScheduleEmptyProps = { courseSlug?: CourseSlug };

export default function ScheduleEmpty({ courseSlug }: ScheduleEmptyProps) {
  const { t, surface, setPrefill } = useMct();
  const copy = t.schedule.empty;

  return (
    <div className={cn(cardClass, "p-8 md:p-10")} data-reveal-child>
      <h3 className="m-0 text-xl font-bold text-on-dark md:text-2xl">{copy.title}</h3>
      <p className="mt-3 mb-8 max-w-3xl text-dim">{copy.body}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <CTAButton
          variant="primary"
          onClick={() =>
            setPrefill({ tier: "public", intent: "waitlist", courseSlug }, "schedule-empty-waitlist")
          }
          data-cta={`${surface}:schedule-empty-waitlist`}
        >
          {copy.notify}
        </CTAButton>
        <CTAButton
          variant="secondary"
          onClick={() =>
            setPrefill({ tier: "enterprise", intent: "scope-call", courseSlug }, "schedule-empty-private")
          }
          data-cta={`${surface}:schedule-empty-private`}
          className={darkSecondaryCtaClass}
        >
          {copy.privateRun}
        </CTAButton>
      </div>
    </div>
  );
}
