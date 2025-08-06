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
  
  const isUrgent = timeLeft <= 2 * 60 * 1000; // Last 2 minutes
  
  return (
    <div className={cn(
      "glass-card p-6 text-center border-2",
      isUrgent ? "border-destructive animate-pulse" : "border-primary/30",
      className
    )}>
      <div className="flex items-center justify-center gap-3 mb-3">
        <Timer className={cn(
          "h-6 w-6",
          isUrgent ? "text-destructive" : "text-primary"
        )} />
        <h3 className={cn(
          "text-xl font-bold",
          isUrgent ? "text-destructive" : "text-foreground"
        )}>
          OFERTA WYGASA ZA:
        </h3>
      </div>
      
      <div className={cn(
        "text-4xl font-mono font-bold tracking-wider",
        isUrgent ? "text-destructive" : "text-primary"
      )}>
        {formatOTOTime(timeLeft)}
      </div>
      
      <p className="text-sm text-muted-foreground mt-2">
        To jednorazowa oferta - po wygaśnięciu nie będzie dostępna ponownie
      </p>
    </div>
  );
}