import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const { theme } = useTheme();
  const location = useLocation();

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
      <Header />
      <main className="flex-grow pt-20 animate-page-transition">
        <div className="page-content animate-fade-in">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }: LayoutProps) {
  return <LayoutContent children={children} />;
}
