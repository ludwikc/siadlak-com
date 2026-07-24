import type { ReactNode } from "react";
import { CTAButton } from "@/design-system/components/cta-button";
import MailerLiteEmbed from "@/components/MailerLiteEmbed";
import { useFunnelPhase } from "@/hooks/use-funnel-phase";
import FunnelExpiredNotice from "./FunnelExpiredNotice";
import type { FunnelConfig, FunnelPhase } from "@/config/funnels";
import { track } from "@/lib/analytics";
import { withAttribution } from "@/lib/attribution";

type FunnelRegistrationCTAProps = {
  funnel: FunnelConfig;
  className?: string;
  children?: ReactNode;
  /** Per-phase label overrides; `children` is shorthand for the upcoming label. */
  labels?: Partial<Record<FunnelPhase, string>>;
  /** Analytics placement / data-cta, e.g. "kod-kapitana:hero". */
  dataCta?: string;
};

export default function FunnelRegistrationCTA({
  funnel,
  className,
  children,
  labels,
  dataCta,
}: FunnelRegistrationCTAProps) {
  const { phase } = useFunnelPhase(funnel);
  const placement = dataCta ?? `${funnel.slug}:cta`;

  if (phase === "upcoming") {
    if (funnel.registration.type === "mailerlite") {
      return (
        <div className={className}>
          <MailerLiteEmbed
            dataForm={funnel.registration.formId}
            source={funnel.slug}
            hiddenFields={{ funnel: funnel.slug }}
          />
        </div>
      );
    }
    const checkoutUrl = funnel.registration.checkoutUrl;
    return (
      <div className={className}>
        <CTAButton
          variant="primary"
          size="xl"
          href={withAttribution(checkoutUrl)}
          data-cta={placement}
          onClick={() =>
            track("registration_click", {
              funnel_slug: funnel.slug,
              checkout_url: checkoutUrl,
              placement,
            })
          }
        >
          {labels?.upcoming ?? children ?? "Rezerwuję miejsce"}
        </CTAButton>
      </div>
    );
  }

  if (phase === "live") {
    return (
      <div className={className}>
        <CTAButton variant="primary" size="xl" to={`/webinar/${funnel.slug}/live`} data-cta={placement}>
          {labels?.live ?? "Trwa teraz — dołącz"}
        </CTAButton>
      </div>
    );
  }

  if (phase === "replay" && funnel.replay?.url) {
    return (
      <div className={className}>
        <CTAButton variant="primary" size="xl" to={`/webinar/${funnel.slug}/replay`} data-cta={placement}>
          {labels?.replay ?? "Obejrzyj nagranie"}
        </CTAButton>
      </div>
    );
  }

  return <FunnelExpiredNotice funnel={funnel} className={className} />;
}
