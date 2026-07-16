import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { funnels, getNextUpcomingFunnel, getPhaseBoundaries } from "@/config/funnels";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (target: Date): TimeLeft | null => {
  const difference = target.getTime() - Date.now();
  if (difference <= 0) return null;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const MobileWebinarBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const location = useLocation();

  const funnel = getNextUpcomingFunnel(funnels, new Date());
  const promoBar = funnel?.promoBar;
  const ctaClickedKey = funnel ? `webinarBarCTAClicked:${funnel.slug}` : "";
  const isFunnelPage = location.pathname.startsWith("/webinar");
  const isOTOPage = location.pathname === "/oto";

  useEffect(() => {
    if (!funnel || localStorage.getItem(ctaClickedKey) || isFunnelPage || isOTOPage) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname, funnel, ctaClickedKey, isFunnelPage, isOTOPage]);

  useEffect(() => {
    if (!funnel) return;
    const target = getPhaseBoundaries(funnel).liveAt;
    setTimeLeft(calculateTimeLeft(target));
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(target)), 1000);
    return () => clearInterval(timer);
  }, [funnel]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    localStorage.setItem(ctaClickedKey, "true");
    setIsVisible(false);
  };

  if (!funnel || !promoBar || !isVisible || !timeLeft || isFunnelPage || isOTOPage) {
    return null;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const countdownUnits: { value: number; label: string }[] = [
    { value: timeLeft.days, label: "dni" },
    { value: timeLeft.hours, label: "godz" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sek" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div
        className="relative backdrop-blur-xl border-t shadow-2xl"
        style={{
          minHeight: "25vh",
          background: "linear-gradient(165deg, hsl(215, 50%, 6%) 0%, hsl(210, 45%, 10%) 40%, hsl(205, 40%, 14%) 100%)",
          borderColor: "rgba(56, 189, 248, 0.15)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(56,189,248,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
          aria-label="Zamknij"
        >
          <X size={20} className="text-dim" />
        </button>

        <div className="flex flex-col items-center justify-center h-full px-4 py-5 relative z-10">
          <div className="text-center mb-3">
            <span
              className="text-2xl sm:text-3xl font-black uppercase tracking-wider drop-shadow-lg"
              style={{
                background: "linear-gradient(135deg, hsl(199, 89%, 58%) 0%, hsl(190, 95%, 65%) 50%, hsl(199, 89%, 58%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(56, 189, 248, 0.5)",
              }}
            >
              {funnel.name}
            </span>
            <p className="text-slate-300 text-sm mt-1">{promoBar.copy}</p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-4">
            {countdownUnits.map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="text-cyan-400/50 text-lg font-bold">:</span>
                )}
                <div
                  className="flex flex-col items-center rounded-lg px-2.5 py-1.5"
                  style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)" }}
                >
                  <span className="text-xl font-bold text-white font-mono">
                    {formatNumber(unit.value)}
                  </span>
                  <span className="text-[10px] text-cyan-400/70 uppercase">
                    {unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link
            to={`/webinar/${funnel.slug}`}
            onClick={handleCTAClick}
            className="w-full max-w-xs text-white font-bold py-3 px-6 rounded-xl text-center transition-all active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(217, 91%, 50%) 100%)",
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.3), 0 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {promoBar.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileWebinarBar;
