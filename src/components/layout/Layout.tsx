import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import { useLocation } from "react-router-dom";
import { isLandingPage } from "../../lib/landing-pages";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

function LayoutContent({ children, hideHeader, hideFooter }: LayoutProps) {
  const location = useLocation();

  // Auto-detect landing pages if props not explicitly set
  const shouldHideHeader = hideHeader ?? isLandingPage(location.pathname);
  const shouldHideFooter = hideFooter ?? isLandingPage(location.pathname);

  // Scroll restoration lives in App.tsx (<ScrollToTop />) — do not duplicate here.

  // Publish header offset as CSS variables so heroes/anchors align to the
  // actual header stack (banner 36px + header 64px). When the header/banner
  // is hidden, offsets collapse to 0.
  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--banner-height", shouldHideHeader ? "0px" : "36px");
    root.setProperty("--header-offset", shouldHideHeader ? "0px" : "100px");
    return () => {
      root.removeProperty("--banner-height");
      root.removeProperty("--header-offset");
    };
  }, [shouldHideHeader]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {!shouldHideHeader && <PromoBanner />}
      {!shouldHideHeader && <Header />}
      <main
        className={`flex-grow animate-page-transition ${shouldHideHeader ? "" : "pt-[var(--header-offset,100px)]"}`}
      >
        <div className="page-content animate-fade-in">{children}</div>
      </main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default function Layout({
  children,
  hideHeader,
  hideFooter,
}: LayoutProps) {
  return (
    <LayoutContent
      children={children}
      hideHeader={hideHeader}
      hideFooter={hideFooter}
    />
  );
}
