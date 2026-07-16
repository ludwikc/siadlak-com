import { useEffect, useState } from "react";

type FunnelCountdownProps = {
  target: Date;
  label?: string;
  className?: string;
};

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

const getRemaining = (target: Date): Remaining | null => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const units: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "dni" },
  { key: "hours", label: "godz" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sek" },
];

export default function FunnelCountdown({ target, label, className }: FunnelCountdownProps) {
  const [remaining, setRemaining] = useState<Remaining | null>(() =>
    getRemaining(target),
  );

  useEffect(() => {
    const interval = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!remaining) return null;

  return (
    <div className={className}>
      {label && (
        <p className="text-sm font-medium text-dim mb-2 text-center">{label}</p>
      )}
      <div className="flex items-center justify-center gap-3">
        {units.map(({ key, label: unitLabel }) => (
          <div key={key} className="text-center min-w-[3.5rem]">
            <div className="text-2xl md:text-3xl font-bold font-heading tabular-nums">
              {String(remaining[key]).padStart(2, "0")}
            </div>
            <div className="text-xs uppercase tracking-widest text-dim">
              {unitLabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
