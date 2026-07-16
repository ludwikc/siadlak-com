import { CTAButton } from "@/design-system/components/cta-button";
import type { FunnelConfig } from "@/config/funnels";

type FunnelExpiredNoticeProps = {
  funnel: FunnelConfig;
  className?: string;
};

export default function FunnelExpiredNotice({ funnel, className }: FunnelExpiredNoticeProps) {
  const primary = funnel.expiredCtas?.primary ?? "/discovery";
  const secondary = funnel.expiredCtas?.secondary ?? "/newsletter";

  return (
    <div className={className}>
      <div className="rounded-xl border border-border bg-surface p-8 text-center max-w-xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          To wydarzenie już się odbyło
        </h3>
        <p className="text-dim mb-6">
          Zapis na nie jest już niemożliwy — ale to nie znaczy, że musisz
          czekać na kolejne, żeby ruszyć z miejsca.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton variant="primary" to={primary}>
            {primary === "/discovery" ? "Umów Sesję Discovery" : "Napisz do mnie"}
          </CTAButton>
          <CTAButton variant="secondary" to={secondary} showArrow={false}>
            Dołącz do newslettera
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
