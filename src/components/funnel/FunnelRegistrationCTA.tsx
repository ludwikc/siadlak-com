import type { ReactNode } from "react";
import { CTAButton } from "@/design-system/components/cta-button";
import MailerLiteEmbed from "@/components/MailerLiteEmbed";
import { useFunnelPhase } from "@/hooks/use-funnel-phase";
import FunnelExpiredNotice from "./FunnelExpiredNotice";
import type { FunnelConfig } from "@/config/funnels";

type FunnelRegistrationCTAProps = {
  funnel: FunnelConfig;
  className?: string;
  children?: ReactNode;
};

export default function FunnelRegistrationCTA({
  funnel,
  className,
  children,
}: FunnelRegistrationCTAProps) {
  const { phase } = useFunnelPhase(funnel);

  if (phase === "upcoming") {
    if (funnel.registration.type === "mailerlite") {
      return (
        <div className={className}>
          <MailerLiteEmbed
            dataForm={funnel.registration.formId}
            hiddenFields={{ funnel: funnel.slug }}
          />
        </div>
      );
    }
    return (
      <div className={className}>
        <CTAButton variant="primary" size="xl" href={funnel.registration.checkoutUrl}>
          {children ?? "Rezerwuję miejsce"}
        </CTAButton>
      </div>
    );
  }

  if (phase === "live") {
    return (
      <div className={className}>
        <CTAButton variant="primary" size="xl" to={`/webinar/${funnel.slug}/live`}>
          Trwa teraz — dołącz
        </CTAButton>
      </div>
    );
  }

  if (phase === "replay" && funnel.replay?.url) {
    return (
      <div className={className}>
        <CTAButton variant="primary" size="xl" to={`/webinar/${funnel.slug}/replay`}>
          Obejrzyj nagranie
        </CTAButton>
      </div>
    );
  }

  return <FunnelExpiredNotice funnel={funnel} className={className} />;
}
