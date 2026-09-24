import StickyCtaBar from "@/components/conversion/StickyCtaBar";
import { fill } from "@/config/mct/copy";
import { pricing } from "@/config/mct/pricing";
import { formatPrice } from "@/config/mct/pricing-utils";
import { formatSessionRange } from "@/config/mct/schedule-utils";
import type { Course, ScheduledSession } from "@/config/mct/types";
import { useMct } from "./MctContext";
import type { Prefill } from "./MctContext";

type MctStickyCtaProps =
  | { variant: "hub-teams" | "hub-enterprise" | "briefing" | "enterprise" }
  | { variant: "course"; course: Course; nextSession?: ScheduledSession };

export default function MctStickyCta(props: MctStickyCtaProps) {
  const { locale, t, currency, surface, setPrefill } = useMct();
  const price = (amount: number) => formatPrice(amount, currency, locale);

  const resolve = (): { label: string; ctaText: string; prefill: Prefill } => {
    switch (props.variant) {
      case "hub-teams":
        return {
          label: fill(t.sticky.teams.label, { perDay: price(pricing.publicSeat.perDay[currency]) }),
          ctaText: t.sticky.teams.cta,
          prefill: { tier: "public", intent: "seat" },
        };
      case "hub-enterprise":
        return {
          label: t.sticky.enterprise.label,
          ctaText: t.sticky.enterprise.cta,
          prefill: { tier: "enterprise", intent: "scope-call" },
        };
      case "briefing":
        return {
          label: fill(t.sticky.briefing.label, { flat: price(pricing.briefing.flat[currency]) }),
          ctaText: t.sticky.briefing.cta,
          prefill: { tier: "briefing", intent: "briefing" },
        };
      case "enterprise":
        return {
          label: t.sticky.enterprisePage.label,
          ctaText: t.sticky.enterprisePage.cta,
          prefill: { tier: "enterprise", intent: "scope-call" },
        };
      case "course": {
        const { course, nextSession } = props;
        const code = course.codes[0] ?? course.title[locale];
        if (!nextSession) {
          return {
            label: fill(t.sticky.courseNoDate.label, { code }),
            ctaText: t.sticky.courseNoDate.cta,
            prefill: { tier: "enterprise", intent: "scope-call", courseSlug: course.slug },
          };
        }
        return {
          label: fill(t.sticky.course.label, { code, date: formatSessionRange(nextSession, locale) }),
          ctaText: t.sticky.course.cta,
          prefill: {
            tier: "public",
            intent: nextSession.status === "full" ? "waitlist" : "seat",
            courseSlug: course.slug,
            sessionId: nextSession.id,
          },
        };
      }
    }
  };

  const { label, ctaText, prefill } = resolve();

  return (
    <StickyCtaBar
      label={label}
      ctaText={ctaText}
      href="#request"
      onCtaClick={() => setPrefill(prefill, `sticky-${props.variant}`, { scroll: false })}
      showAfterScrollPx={600}
      hideNearBottomPx={900}
      dismissLabel={t.sticky.dismiss}
      dataCta={`${surface}:sticky`}
    />
  );
}
