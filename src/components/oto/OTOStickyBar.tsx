import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Timer } from "@/lib/icons";
import { getRemainingTime, formatOTOTime } from "@/lib/oto-utils";
import { cn } from "@/lib/utils";

interface OTOStickyBarProps {
  href: string;
  onClick?: () => void;
  onExpired: () => void;
}

/** Mobile-only sticky purchase bar with live countdown — CTA always under the thumb. */
export function OTOStickyBar({ href, onClick, onExpired }: OTOStickyBarProps) {
  const [timeLeft, setTimeLeft] = useState<number>(getRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getRemainingTime();
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        onExpired();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [onExpired]);

  if (timeLeft <= 0) return null;

  const isUrgent = timeLeft <= 2 * 60 * 1000;

  const bar = (
    <div className="fixed inset-x-0 bottom-0 z-[9998] md:hidden">
      <div className="bg-void/95 backdrop-blur-md border-t border-white/15 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div
              className={cn(
                "flex items-center gap-1.5 text-[11px] uppercase tracking-widest",
                isUrgent ? "text-red-400" : "text-dim",
              )}
            >
              <Timer className="h-3.5 w-3.5" />
              <span>Oferta znika za</span>
            </div>
            <div
              className={cn(
                "font-mono text-2xl font-bold leading-tight",
                isUrgent ? "text-red-400" : "text-locked-white",
              )}
            >
              {formatOTOTime(timeLeft)}
            </div>
          </div>
          <a
            href={href}
            onClick={onClick}
            className="flex min-h-[48px] flex-1 items-center justify-center whitespace-nowrap rounded-[var(--border-radius-sm)] px-4 text-sm font-bold uppercase tracking-widest text-locked-white shadow-lg transition-all duration-200 ease-out [background:var(--gradient-premium)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
          >
            Kup za 77 PLN
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(bar, document.body);
}
