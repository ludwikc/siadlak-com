import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Timer, X } from "lucide-react";
import { getRemainingTime, formatOTOTime } from "@/lib/oto-utils";
import { cn } from "@/lib/utils";

interface OTOMinimizedTimerProps {
  onExpired: () => void;
  onDismiss?: () => void;
}

export function OTOMinimizedTimer({
  onExpired,
  onDismiss,
}: OTOMinimizedTimerProps) {
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

  const isUrgent = timeLeft <= 2 * 60 * 1000; // Last 2 minutes

  if (timeLeft <= 0) return null;

  const timerContent = (
    <div className="fixed bottom-4 left-4 z-[9999] animate-fade-in">
      <div
        className={cn(
          "bg-card/95 backdrop-blur-sm border-2 rounded-xl shadow-2xl p-4 min-w-[280px]",
          isUrgent ? "border-destructive animate-pulse" : "border-primary/30",
        )}
      >
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="absolute -top-2 -right-2 p-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
            aria-label="Zamknij"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="flex items-center gap-3 mb-2">
          <Timer
            className={cn(
              "h-5 w-5",
              isUrgent ? "text-destructive" : "text-primary",
            )}
          />
          <h3
            className={cn(
              "text-sm font-bold uppercase",
              isUrgent ? "text-destructive" : "text-foreground",
            )}
          >
            Oferta wygasa za:
          </h3>
        </div>

        <div
          className={cn(
            "text-3xl font-mono font-bold tracking-wider text-center",
            isUrgent ? "text-destructive" : "text-primary",
          )}
        >
          {formatOTOTime(timeLeft)}
        </div>

        <p className="text-xs text-muted-foreground mt-2 text-center">
          77 PLN → 497 PLN
        </p>
      </div>
    </div>
  );

  return createPortal(timerContent, document.body);
}
