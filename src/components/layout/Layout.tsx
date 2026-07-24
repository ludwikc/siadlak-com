import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

// Chrome is controlled by explicit props only. Strict landing pages use
// <LandingLayout>; routes like /webinar/*/live and /replay keep the header via
// hideFooter alone, which prefix auto-detection would have wrongly stripped.
export default function Layout({
  children,
  hideHeader = false,
  hideFooter = false,
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {!hideHeader && <PromoBanner />}
      {!hideHeader && <Header />}
      <main
        className={`flex-grow animate-page-transition ${hideHeader ? "" : "pt-[var(--header-offset)]"}`}
      >
        <div className="page-content animate-fade-in">{children}</div>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
