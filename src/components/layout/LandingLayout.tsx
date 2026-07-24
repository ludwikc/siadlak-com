import type { ReactNode } from "react";

/**
 * Strict landing layout: no Header, Footer, PromoBanner or header offset — a
 * single conversion goal. Global overlays (GlobalWebinarBar, exit-intent) are
 * suppressed on these routes via isLandingRoute (src/lib/landing-pages.ts);
 * keep that prefix list in sync when adding a landing route.
 *
 * A minimal legal line is always rendered because these pages capture email
 * (MailerLite) and legally need a privacy-policy link.
 */
type LandingLayoutProps = {
  children: ReactNode;
  showLegal?: boolean;
  /** Applied to the root wrapper — e.g. a dark background that also covers the legal footer. */
  className?: string;
};

function LandingLegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 text-center text-xs text-dim">
      © {year} Ludwik C. Siadlak ·{" "}
      <a
        href="https://docs.siadlak.com/legal/privacy"
        className="underline underline-offset-2 hover:text-on-dark-tertiary"
      >
        Polityka prywatności
      </a>
    </footer>
  );
}

export default function LandingLayout({
  children,
  showLegal = true,
  className,
}: LandingLayoutProps) {
  return (
    <div className={`min-h-[100svh] overflow-x-hidden ${className ?? ""}`}>
      {children}
      {showLegal && <LandingLegalFooter />}
    </div>
  );
}
