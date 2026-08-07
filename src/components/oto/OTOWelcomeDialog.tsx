import { useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/design-system/components/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { OTOCountdown } from "./OTOCountdown";
import { CTAButton } from "@/design-system/components/cta-button";
import { cn } from "@/lib/utils";

interface OTOWelcomeDialogProps {
  open: boolean;
  onContinue: () => void;
  onExpired: () => void;
}

export function OTOWelcomeDialog({
  open,
  onContinue,
  onExpired,
}: OTOWelcomeDialogProps) {
  const handleContinueClick = () => {
    onContinue();
  };

  useEffect(() => {
    // Trigger confetti when dialog opens
    if (open) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 1000000,
      };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onContinue()}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-[999998] bg-black/80 pointer-events-auto" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-[999999] grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/15 bg-void p-6 shadow-2xl duration-200 pointer-events-auto",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "sm:rounded-lg",
          )}
        >
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm text-locked-white opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-[1000000] pointer-events-auto">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-bold text-center mb-2 text-locked-white">
              Twoje miejsce zostało zarezerwowane! 🥳
            </DialogTitle>
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-dim">
                Ale to nie wszystko...
              </h2>
            </div>
            <DialogDescription className="text-base text-dim">
              <p>
                To jest <strong>jednorazowa</strong> oferta dostępu do kursu 7
                Technik, Które Natychmiast Podnoszą Produktywność w cenie 77 PLN
                zamiast cennikowego 497 PLN.
              </p>
            </DialogDescription>
          </DialogHeader>

          <div className="my-6">
            <OTOCountdown onExpired={onExpired} />
          </div>

          <div className="flex flex-col items-center gap-4">
            <CTAButton
              onClick={handleContinueClick}
              size="lg"
              className="relative z-[1000000] w-full cursor-pointer pointer-events-auto sm:w-auto"
              data-cta="oto:welcome-dialog"
            >
              Pokaż mi tę ofertę
            </CTAButton>
            <p className="text-sm text-on-dark-tertiary text-center max-w-md">
              To jest akcja tylko dla zdecydowanych i pozytywnie
              zdeterminowanych uczestników spotkania, dlatego będzie ważna tylko
              przez 7 minut po czym zostanie wyłączona.
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
