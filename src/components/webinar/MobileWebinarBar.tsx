import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

// Target date: 02.02.2026 at 20:02
const TARGET_DATE = new Date("2026-02-02T20:02:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MobileWebinarBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Check if user dismissed the bar in this session
    const dismissed = sessionStorage.getItem("webinarBarDismissed");
    if (dismissed) {
      setIsVisible(false);
    }

    const calculateTimeLeft = (): TimeLeft | null => {
      const now = new Date().getTime();
      const target = TARGET_DATE.getTime();
      const difference = target - now;

      if (difference <= 0) {
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("webinarBarDismissed", "true");
  };

  // Don't show on desktop or if dismissed or if event passed
  if (!isVisible || !timeLeft) {
    return null;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      {/* Backdrop blur container - takes ~1/4 of screen */}
      <div 
        className="relative bg-gradient-to-t from-[hsl(215,50%,8%)] via-[hsl(210,45%,12%)] to-[hsl(205,40%,16%)] backdrop-blur-xl border-t border-white/10 shadow-2xl"
        style={{ minHeight: "25vh" }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Zamknij"
        >
          <X size={18} className="text-white/70" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-5">
          {/* Title */}
          <div className="text-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-growth-gold">
              🚢 Kod Kapitana
            </span>
            <p className="text-white/80 text-sm mt-1">
              Spotkanie online już za:
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="flex flex-col items-center bg-white/10 rounded-lg px-2.5 py-1.5">
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] text-white/60 uppercase">dni</span>
            </div>
            <span className="text-white/50 text-lg font-bold">:</span>
            <div className="flex flex-col items-center bg-white/10 rounded-lg px-2.5 py-1.5">
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] text-white/60 uppercase">godz</span>
            </div>
            <span className="text-white/50 text-lg font-bold">:</span>
            <div className="flex flex-col items-center bg-white/10 rounded-lg px-2.5 py-1.5">
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] text-white/60 uppercase">min</span>
            </div>
            <span className="text-white/50 text-lg font-bold">:</span>
            <div className="flex flex-col items-center bg-white/10 rounded-lg px-2.5 py-1.5">
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] text-white/60 uppercase">sek</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/webinar/kod-kapitana"
            className="w-full max-w-xs bg-gradient-to-r from-growth-gold to-neural-blue text-white font-bold py-3 px-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            🚢 Zarezerwuj miejsce
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileWebinarBar;
