import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { CTAButton } from "@/design-system/components/cta-button";

type StickyCtaBarProps = {
  label: string;
  sublabel?: string;
  ctaText: string;
  to?: string;
  href?: string;
  onCtaClick?: () => void;
  /** Renders a compact live countdown to this instant. */
  countdownTarget?: Date;
  /** localStorage key for persistent dismissal; omit = dismiss for the session only. */
  storageKey?: string;
  /** Show only after the user has scrolled this far (engagement gate). */
  showAfterScrollPx?: number;
  /** Hide within this distance of the document end so it never covers footer CTAs. */
  hideNearBottomPx?: number;
  dataCta?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

function useCountdown(target?: Date): string | null {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    if (!target) return;
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setText(null);
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setText(`${d > 0 ? `${d}d ` : ""}${pad(h)}:${pad(m)}:${pad(s)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return text;
}

/**
 * One reusable bottom-anchored CTA bar (mobile-first, thumb-reachable).
 * Overlay only — reserves no layout space, and auto-hides near the document end
 * so it doesn't cover final-section CTAs. Sits at z-40: below Header/dialogs.
 */
export default function StickyCtaBar({
  label,
  sublabel,
  ctaText,
  to,
  href,
  onCtaClick,
  countdownTarget,
  storageKey,
  showAfterScrollPx = 600,
  hideNearBottomPx = 900,
  dataCta,
}: StickyCtaBarProps) {
  const dismissKey = storageKey ? `stickyCtaDismissed:${storageKey}` : null;
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (!dismissKey) return false;
    try {
      return localStorage.getItem(dismissKey) === "1";
    } catch {
      return false;
    }
  });
  const [visible, setVisible] = useState(false);
  const countdown = useCountdown(countdownTarget);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const nearBottom =
        window.innerHeight + scrolled >
        document.body.offsetHeight - hideNearBottomPx;
      setVisible(scrolled > showAfterScrollPx && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dismissed, showAfterScrollPx, hideNearBottomPx]);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    if (dismissKey) {
      try {
        localStorage.setItem(dismissKey, "1");
      } catch {
        /* ignore */
      }
    }
  };

  const handleCta = () => {
    if (dismissKey) {
      try {
        localStorage.setItem(dismissKey, "1");
      } catch {
        /* ignore */
      }
    }
    onCtaClick?.();
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-void/95 backdrop-blur transition-transform duration-200 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-locked-white">{label}</p>
          {(sublabel || countdown) && (
            <p className="truncate text-xs text-on-dark-tertiary">
              {sublabel}
              {sublabel && countdown ? " · " : ""}
              {countdown && <span className="font-mono tabular-nums">{countdown}</span>}
            </p>
          )}
        </div>
        <CTAButton
          variant="primary"
          size="default"
          to={to}
          href={href}
          onClick={handleCta}
          data-cta={dataCta}
          className="flex-shrink-0"
        >
          {ctaText}
        </CTAButton>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Zamknij"
          className="flex-shrink-0 rounded-full p-2 text-dim transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
