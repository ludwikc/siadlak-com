import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/design-system/components/dialog";
import { CTAButton } from "@/design-system/components/cta-button";
import MailerLiteEmbed from "@/components/MailerLiteEmbed";
import { withAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import type { FunnelConfig } from "@/config/funnels";

const LEAD_MAGNET_FORM = "9Ffuno";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** "lead_magnet" or an active easycart funnel to push its registration. */
  funnel?: FunnelConfig;
  onConverted: () => void;
};

export default function ExitIntentModal({ open, onOpenChange, funnel, onConverted }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const isFunnelOffer = !!funnel && funnel.registration.type === "easycart";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`z-[100] max-w-md ${
          reducedMotion
            ? "data-[state=open]:animate-none data-[state=closed]:animate-none"
            : ""
        }`}
      >
        {isFunnelOffer ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Zanim zamkniesz tę stronę</DialogTitle>
              <DialogDescription className="text-base text-foreground">
                Miejsce na „{funnel!.name}" nic nie kosztuje. Decyzję, czy zostać,
                podejmiesz w trakcie — nie teraz.
              </DialogDescription>
            </DialogHeader>
            <CTAButton
              variant="primary"
              size="lg"
              href={withAttribution((funnel!.registration as { checkoutUrl: string }).checkoutUrl)}
              data-cta="exit-intent:funnel"
              onClick={() => {
                onConverted();
                track("registration_click", {
                  funnel_slug: funnel!.slug,
                  checkout_url: (funnel!.registration as { checkoutUrl: string }).checkoutUrl,
                  placement: "exit_intent",
                });
              }}
            >
              Rezerwuję miejsce
            </CTAButton>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Zanim wyjdziesz — jedna rzecz</DialogTitle>
              <DialogDescription className="text-base text-foreground">
                Zostaw email, a wyślę Ci Test Otwartych Pętli: 10 pytań, 2 minuty.
                Zobaczysz, ile energii zżera Ci to, co niedomknięte. Zero spamu.
              </DialogDescription>
            </DialogHeader>
            <MailerLiteEmbed dataForm={LEAD_MAGNET_FORM} source="exit-intent" onSuccess={onConverted} />
          </>
        )}
        <p className="text-center text-xs text-muted-foreground">
          Ten komunikat nie pojawi się ponownie w tej sesji.
        </p>
      </DialogContent>
    </Dialog>
  );
}
