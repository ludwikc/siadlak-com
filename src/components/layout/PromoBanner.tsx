import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

/**
 * Premium promotional banner displayed above the main header.
 * Promotes the new "Train The Trainer: AI" mentoring program.
 */
export default function PromoBanner() {
  return (
    <Link
      to="/program/ttt-ai"
      className="group fixed top-0 left-0 right-0 z-[60] block bg-gradient-to-r from-[hsl(var(--depth-purple-dark))] via-[hsl(var(--electric-blue-dark))] to-[hsl(var(--depth-purple-dark))] border-b border-white/10 overflow-hidden"
    >
      {/* Subtle shimmer overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.08) 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
        <Sparkles
          size={12}
          className="text-white/90 flex-shrink-0 hidden sm:block"
          aria-hidden="true"
        />
        <span className="text-white/70 uppercase tracking-[0.15em] font-semibold text-[10px] sm:text-[11px] hidden sm:inline">
          Nowy program
        </span>
        <span className="hidden sm:inline text-white/30">·</span>
        <span className="text-white font-bold tracking-wide truncate">
          Train The Trainer:{" "}
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            AI
          </span>
        </span>
        <span className="hidden md:inline text-white/60 font-normal normal-case tracking-normal">
          — Mentoring 1:1 dla trenerów i ekspertów
        </span>
        <span className="inline-flex items-center gap-1 text-white/90 font-semibold whitespace-nowrap group-hover:text-white transition-colors">
          <span className="hidden sm:inline">Sprawdź</span>
          <ArrowRight
            size={12}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
