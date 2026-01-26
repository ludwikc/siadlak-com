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
      {/* Deep Ocean backdrop - takes ~1/4 of screen */}
      <div 
        className="relative backdrop-blur-xl border-t shadow-2xl"
        style={{ 
          minHeight: "25vh",
          background: "linear-gradient(165deg, hsl(215, 50%, 6%) 0%, hsl(210, 45%, 10%) 40%, hsl(205, 40%, 14%) 100%)",
          borderColor: "rgba(56, 189, 248, 0.15)",
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(56,189,248,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Zamknij"
        >
          <X size={18} className="text-white/70" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-5 relative z-10">
          {/* Title */}
          <div className="text-center mb-3">
            <span 
              className="text-base sm:text-lg font-black uppercase tracking-wider drop-shadow-lg"
              style={{ 
                background: "linear-gradient(135deg, hsl(199, 89%, 58%) 0%, hsl(190, 95%, 65%) 50%, hsl(199, 89%, 58%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(56, 189, 248, 0.5)",
              }}
            >
              🚢 Kod Kapitana
            </span>
            <p className="text-slate-300 text-sm mt-1">
              Spotkanie online już za:
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-1 mb-4">
            <div 
              className="flex flex-col items-center rounded-lg px-2.5 py-1.5"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] text-cyan-400/70 uppercase">dni</span>
            </div>
            <span className="text-cyan-400/50 text-lg font-bold">:</span>
            <div 
              className="flex flex-col items-center rounded-lg px-2.5 py-1.5"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] text-cyan-400/70 uppercase">godz</span>
            </div>
            <span className="text-cyan-400/50 text-lg font-bold">:</span>
            <div 
              className="flex flex-col items-center rounded-lg px-2.5 py-1.5"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] text-cyan-400/70 uppercase">min</span>
            </div>
            <span className="text-cyan-400/50 text-lg font-bold">:</span>
            <div 
              className="flex flex-col items-center rounded-lg px-2.5 py-1.5"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-xl font-bold text-white font-mono">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] text-cyan-400/70 uppercase">sek</span>
            </div>
          </div>

          {/* CTA Button - matching Kod Kapitana style */}
          <Link
            to="/webinar/kod-kapitana"
            className="w-full max-w-xs text-white font-bold py-3 px-6 rounded-xl text-center transition-all active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(217, 91%, 50%) 100%)",
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.3), 0 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            🚢 Zarezerwuj miejsce
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileWebinarBar;
