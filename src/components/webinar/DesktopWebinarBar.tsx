import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

// Target date: 02.02.2026 at 20:02
const TARGET_DATE = new Date("2026-02-02T20:02:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DesktopWebinarBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledToTruth, setHasScrolledToTruth] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const location = useLocation();

  // Hide on the webinar page itself
  const isWebinarPage = location.pathname === "/webinar/kod-kapitana";
  const isHomePage = location.pathname === "/";

  // Check scroll position to detect when user reaches the "truth" section
  useEffect(() => {
    if (!isHomePage) {
      setHasScrolledToTruth(false);
      return;
    }

    const handleScroll = () => {
      const truthSection = document.getElementById("truth");
      if (truthSection) {
        const rect = truthSection.getBoundingClientRect();
        // Trigger when the section comes into view
        if (rect.top <= window.innerHeight * 0.5) {
          setHasScrolledToTruth(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]);

  // Reset visibility on route change (unless CTA was clicked)
  useEffect(() => {
    const ctaClicked = localStorage.getItem("webinarBarCTAClicked");
    
    if (ctaClicked || isWebinarPage) {
      setIsVisible(false);
    } else if (isHomePage && hasScrolledToTruth) {
      setIsVisible(true);
    } else if (!isHomePage) {
      // On other pages, show immediately
      setIsVisible(true);
    }
  }, [location.pathname, isWebinarPage, isHomePage, hasScrolledToTruth]);

  // Countdown timer
  useEffect(() => {
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

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    localStorage.setItem("webinarBarCTAClicked", "true");
    setIsVisible(false);
  };

  // Don't show on mobile, if event passed, or on webinar page
  if (!isVisible || !timeLeft || isWebinarPage) {
    return null;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
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
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
          aria-label="Zamknij"
        >
          <X size={24} className="text-white/80" />
        </button>

        {/* Content - horizontal layout for desktop */}
        <div className="flex items-center justify-center h-full px-8 py-6 relative z-10 gap-10">
          {/* Title */}
          <div className="text-center">
            <span 
              className="text-3xl lg:text-4xl font-black uppercase tracking-wider drop-shadow-lg block"
              style={{ 
                background: "linear-gradient(135deg, hsl(199, 89%, 58%) 0%, hsl(190, 95%, 65%) 50%, hsl(199, 89%, 58%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(56, 189, 248, 0.5)",
              }}
            >
              Kod Kapitana
            </span>
            <p className="text-slate-300 text-base mt-1">
              Spotkanie online już za:
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-2">
            <div 
              className="flex flex-col items-center rounded-lg px-4 py-2"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-3xl font-bold text-white font-mono">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-xs text-cyan-400/70 uppercase">dni</span>
            </div>
            <span className="text-cyan-400/50 text-2xl font-bold">:</span>
            <div 
              className="flex flex-col items-center rounded-lg px-4 py-2"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-3xl font-bold text-white font-mono">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-xs text-cyan-400/70 uppercase">godz</span>
            </div>
            <span className="text-cyan-400/50 text-2xl font-bold">:</span>
            <div 
              className="flex flex-col items-center rounded-lg px-4 py-2"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-3xl font-bold text-white font-mono">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-xs text-cyan-400/70 uppercase">min</span>
            </div>
            <span className="text-cyan-400/50 text-2xl font-bold">:</span>
            <div 
              className="flex flex-col items-center rounded-lg px-4 py-2"
              style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
            >
              <span className="text-3xl font-bold text-white font-mono">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-xs text-cyan-400/70 uppercase">sek</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/webinar/kod-kapitana"
            onClick={handleCTAClick}
            className="text-white font-bold py-4 px-10 rounded-xl text-center transition-all hover:scale-[1.02] active:scale-[0.98] text-lg"
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

export default DesktopWebinarBar;
