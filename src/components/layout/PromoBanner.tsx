import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

/**
 * Premium promotional banner displayed above the main header.
 * Features a continuous marquee scroll effect promoting "Train The Trainer: AI".
 */
export default function PromoBanner() {
  // Single message unit, repeated to create a seamless loop.
  const MessageUnit = () => (
    <span className="inline-flex items-center gap-3 px-[240px] text-[11px] sm:text-xs whitespace-nowrap">
      <Sparkles size={12} className="text-white/80 flex-shrink-0" aria-hidden="true" />
      <span className="text-white/70 uppercase tracking-[0.2em] font-semibold">
        Nowy program
      </span>
      <span className="text-white/30">·</span>
      <span className="text-white font-bold tracking-wide">
        Train The Trainer:{" "}
        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          AI
        </span>
      </span>
      <span className="inline-flex items-center gap-1 text-white/90 font-semibold">
        Sprawdź
        <ArrowRight size={12} aria-hidden="true" />
      </span>
      <span className="text-white/20" aria-hidden="true">
        ◆
      </span>
    </span>
  );

  // Render enough copies to ensure the track always fills the viewport,
  // even on ultra-wide screens. We animate -50% so the second half seamlessly
  // takes over from the first.
  const REPEAT = 8;
  const items = Array.from({ length: REPEAT });

  return (
    <Link
      to="/program/ttt-ai"
      aria-label="Nowy program: Train The Trainer: AI"
      className="group fixed top-0 left-0 right-0 z-[60] block bg-gradient-to-r from-[hsl(var(--depth-purple-dark))] via-[hsl(var(--electric-blue-dark))] to-[hsl(var(--depth-purple-dark))] border-b border-white/10 overflow-hidden h-9"
    >
      {/* Subtle shimmer overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.08) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Edge fade masks for premium feel */}
      <div
        className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--depth-purple-dark)) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, hsl(var(--depth-purple-dark)) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Marquee track: duplicated content animates -50% for a seamless loop */}
      <div className="relative h-full flex items-center overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {/* First half */}
          {items.map((_, i) => (
            <MessageUnit key={`a-${i}`} />
          ))}
          {/* Duplicated half for seamless wrap */}
          {items.map((_, i) => (
            <MessageUnit key={`b-${i}`} />
          ))}
        </div>
      </div>
    </Link>
  );
}
