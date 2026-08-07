import { useState, useEffect } from 'react';
import { Timer } from '@/lib/icons';
import { getRemainingTime, formatOTOTime } from '@/lib/oto-utils';
import { cn } from '@/lib/utils';

interface OTOCountdownProps {
  onExpired: () => void;
  className?: string;
}

export function OTOCountdown({ onExpired, className }: OTOCountdownProps) {
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
  
  const isUrgent = timeLeft <= 2 * 60 * 1000;
  
  return (
    <div
      className={cn(
        "rounded-[var(--border-radius-sm)] border p-4 text-center",
        isUrgent
          ? "border-red-500/60 bg-red-500/10"
          : "border-white/20 bg-white/5",
        className,
      )}
    >
      <div className="mb-2 flex items-center justify-center gap-2">
        <Timer
          className={cn("h-4 w-4", isUrgent ? "text-red-400" : "text-electric")}
        />
        <h3
          className={cn(
            "text-[11px] font-bold uppercase tracking-widest",
            isUrgent ? "text-red-400" : "text-dim",
          )}
        >
          Oferta wygasa za
        </h3>
      </div>

      <div
        className={cn(
          "font-mono text-4xl font-bold tracking-wider",
          isUrgent ? "text-red-400" : "text-locked-white",
        )}
      >
        {formatOTOTime(timeLeft)}
      </div>

      <p className="mt-2 text-xs text-on-dark-tertiary">
        Po czasie wraca cena katalogowa 497 PLN
      </p>
    </div>
  );
}
