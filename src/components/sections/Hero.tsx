
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageDescription?: string;
  backgroundImage?: string;
  heroImage?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageDescription,
  backgroundImage,
  heroImage,
  fullHeight = false,
}: HeroProps) {
  const { theme } = useTheme();
  const location = useLocation();
  const isMobile = useIsMobile();

  // Check if current page is Podcasts, Community, or other pages that should be theme-locked
  const isPodcastsOrCommunity =
    location.pathname === "/podcasts" ||
    location.pathname === "/community" ||
    location.pathname.includes("/podcasts/") ||
    location.pathname.includes("/community/");

  // Check if this is a sales page or special page that should be theme-locked
  const isThemeLockedPage = 
    location.pathname.includes("/programs/") ||
    location.pathname.includes("/webinar") ||
    isPodcastsOrCommunity;

  // For theme-locked pages, always use dark styling
  // For other pages, use theme-based styling
  const isLightMode = isThemeLockedPage
    ? false
    : theme === "light" || theme === "dev-light";

  // Determine background classes
  const getBackgroundClasses = () => {
    if (backgroundImage || heroImage) {
      return "";
    }
    
    if (isThemeLockedPage) {
      // Always use dark gradient for theme-locked pages
      return "bg-gradient-locked-hero";
    }
    
    // Theme-adaptive backgrounds for regular pages
    return isLightMode
      ? "bg-gradient-to-r from-neural-violet to-ascension-pink relative"
      : "bg-gradient-to-br from-deep-space to-quantum-blue";
  };

  return (
    <section
      className={`relative ${fullHeight ? "min-h-[90vh]" : "pt-24 pb-16 md:pt-32 md:pb-24"} ${getBackgroundClasses()} flex items-center`}
      aria-label="Hero section"
    >
      {/* Add a lighter overlay in light mode for theme-adaptive sections only */}
      {isLightMode &&
        !backgroundImage &&
        !heroImage &&
        !isThemeLockedPage && (
          <div className="absolute inset-0 bg-luminous-white/30 z-0"></div>
        )}

      {/* Background Image (if provided) */}
      {backgroundImage && !heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={imageDescription || "Background"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
      )}

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
        {!backgroundImage && !heroImage && (
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/80 to-transparent dark:from-deep-space/80 pointer-events-none"></div>
        )}
      </div>

      <div
        className={`container mx-auto px-4 relative z-10 ${fullHeight ? "h-full" : ""}`}
      >
        <div
          className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center ${fullHeight ? "h-full" : ""}`}
        >
          {/* Left column - Text content (2/3 width on desktop) */}
          <div
            className={`
            ${isMobile ? "w-full text-center order-1 mb-8" : "w-2/3 pr-8"} 
            ${fullHeight ? "flex flex-col justify-center" : ""}
            ${location.pathname === "/" ? "text-center" : ""}
          `}
          >
            <h1
              className={`
              mb-6 font-bold !leading-tight animate-fade-in
              ${location.pathname === "/" ? "text-5xl md:text-6xl lg:text-7xl" : ""} 
              ${
                isThemeLockedPage
                  ? "text-locked-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : isLightMode
                    ? "text-neural-violet bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              }`}
            >
              {title}
            </h1>

            <p
              className={`
              mb-10 mx-auto animate-fade-in
              ${location.pathname === "/" ? "text-2xl md:text-3xl max-w-xl" : "text-xl md:text-2xl max-w-lg"}
              ${
                isThemeLockedPage
                  ? "text-locked-silver drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : isLightMode
                    ? "text-deep-charcoal"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>

            <div
              className={`
              flex ${isMobile ? "flex-col" : "flex-row"} ${location.pathname === "/" ? "justify-center" : ""} 
              gap-4 animate-fade-in
            `}
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                to={ctaLink}
                onClick={() => window.scrollTo(0, 0)}
                aria-label={`${ctaText} - primary action`}
                className={`${isMobile ? "w-full" : ""}`}
              >
                <Button
                  variant={
                    isThemeLockedPage
                      ? "special"
                      : isLightMode
                        ? "default"
                        : "special"
                  }
                  className={`
                    ${
                      isThemeLockedPage
                        ? ""
                        : isLightMode
                          ? "bg-luminous-white text-neural-violet"
                          : ""
                    }
                    ${isMobile ? "w-full justify-center" : "px-6 py-3 text-base"}
                  `}
                  size={isMobile ? "default" : "lg"}
                >
                  {ctaText}
                  <ArrowRight size={18} />
                </Button>
              </Link>

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  onClick={() => window.scrollTo(0, 0)}
                  aria-label={`${secondaryCtaText} - secondary action`}
                  className={`${isMobile ? "w-full" : ""}`}
                >
                  <Button
                    variant="secondary"
                    className={`
                      ${
                        isThemeLockedPage
                          ? "text-white border-white hover:bg-white/20"
                          : isLightMode
                            ? "text-white border-white bg-neural-violet/70 hover:bg-neural-violet/90"
                            : "text-white border-white hover:bg-white/20"
                      }
                      ${isMobile ? "w-full justify-center" : "px-6 py-3 text-base"}
                    `}
                    size={isMobile ? "default" : "lg"}
                  >
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Right column - Image (1/3 width on desktop) */}
          {heroImage && (
            <div
              className={`
              ${isMobile ? "w-full order-2 mt-4" : "w-1/3 -ml-6"}
              relative z-0 flex justify-end h-full
            `}
            >
              <img
                src={heroImage}
                alt={imageDescription || "Hero"}
                className={`
                  ${isMobile ? "h-auto max-h-[60vh] w-auto mx-auto" : "h-full max-h-[80vh]"} 
                  object-contain object-right
                `}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
