

import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
  const location = useLocation();
  const isMobile = useIsMobile();

  // Theme-aware background
  const getBackgroundClasses = () => {
    if (backgroundImage) {
      return "";
    }
    
    // Light gradient in light mode, dark gradient in dark mode
    return "bg-gradient-to-br from-white to-purple-50 dark:from-deep-space dark:to-quantum-blue";
  };

  // Use dark text on light background
  const getTextClasses = () => {
    if (backgroundImage) {
      return "text-white";
    }
    return "text-deep-charcoal";
  };

  return (
    <section
      className={`relative ${fullHeight ? "min-h-[90vh]" : "pt-24 pb-16 md:pt-32 md:pb-24"} ${getBackgroundClasses()} flex items-center`}
      aria-labelledby="hero-title"
      role="banner"
    >

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
              id="hero-title"
              className={`
              mb-6 font-heading font-bold !leading-tight animate-fade-in bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta
              ${location.pathname === "/" ? "text-5xl md:text-6xl lg:text-7xl" : ""} 
              `}
            >
              {title}
            </h1>

            <p
              className={`
              mb-10 mx-auto animate-fade-in ${getTextClasses()}/80
              ${location.pathname === "/" ? "text-2xl md:text-3xl max-w-xl" : "text-xl md:text-2xl max-w-lg"}
              `}
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
                  variant="special"
                  className={`
                    ${isMobile ? "w-full justify-center" : "px-6 py-3 text-base"}
                  `}
                  size={isMobile ? "default" : "lg"}
                >
                  {ctaText}
                  <ArrowRight size={18} className="text-white" />
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

