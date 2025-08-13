import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";
import { isLandingPage } from "../../lib/landing-pages";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

function LayoutContent({ children, hideHeader, hideFooter }: LayoutProps) {
  const { theme } = useTheme();
  const location = useLocation();
  
  // Auto-detect landing pages if props not explicitly set
  const shouldHideHeader = hideHeader ?? isLandingPage(location.pathname);
  const shouldHideFooter = hideFooter ?? isLandingPage(location.pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Apply theme class to body
    document.body.classList.remove(
      "light",
      "dark",
      "dark-mode",
      "dev",
      "dev-light",
    );

    if (theme === "light") {
      document.body.classList.add("light");
    } else if (theme === "dark") {
      document.body.classList.add("dark", "dark-mode");
    } else if (theme === "dev") {
      document.body.classList.add("dark", "dark-mode", "dev");
    } else if (theme === "dev-light") {
      document.body.classList.add("dev-light");
    }
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideHeader && <Header />}
      <main className={`flex-grow animate-page-transition ${shouldHideHeader ? '' : 'pt-20'}`}>
        <div className="page-content animate-fade-in">{children}</div>
      </main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default function Layout({ children, hideHeader, hideFooter }: LayoutProps) {
  return <LayoutContent children={children} hideHeader={hideHeader} hideFooter={hideFooter} />;
}
