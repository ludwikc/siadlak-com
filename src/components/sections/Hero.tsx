import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import { CTAButton } from "@/design-system/components/cta-button";

interface HeroProps {
  title: string;
  subtitle: string | React.ReactNode;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageDescription?: string;
  backgroundImage?: string;
  heroImage?: string;
  fullHeight?: boolean;
  /** Text alignment */
  align?: "left" | "center" | "right";
}

/**
 * Unified Hero — one component, one h1 ramp, one background treatment.
 * Uses Diamond Hybrid void-glow surface.
 */
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
  align,
}: HeroProps) {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Default alignment: center for home, left elsewhere
  const resolvedAlign = align ?? (location.pathname === "/" ? "center" : "left");
  const alignText =
    resolvedAlign === "center" ? "text-center" : resolvedAlign === "right" ? "text-right" : "text-left";
  const alignFlex =
    resolvedAlign === "center" ? "justify-center" : resolvedAlign === "right" ? "justify-end" : "justify-start";

  return (
    <section
      className={`relative ${fullHeight ? "min-h-[90vh]" : "pt-24 pb-16 md:pt-32 md:pb-24"} bg-void-glow flex items-center overflow-hidden`}
      aria-labelledby="hero-title"
      role="banner"
    >
      {backgroundImage && !heroImage && (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={backgroundImage}
            alt={imageDescription || "Background"}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
      )}

      <div className={`container mx-auto px-4 relative z-10 ${fullHeight ? "h-full" : ""}`}>
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center ${resolvedAlign === "right" ? "justify-end" : ""}`}>
          <div
            className={`${isMobile ? "w-full text-center order-1 mb-8" : heroImage ? "w-2/3 pr-8" : "w-full"} ${isMobile ? "text-center" : alignText}`}
          >
            <h1
              id="hero-title"
              className={`mb-6 font-heading font-bold !leading-tight animate-fade-in text-white text-4xl md:text-6xl lg:text-7xl ${isMobile ? "text-center" : alignText}`}
            >
              {title}
            </h1>

            <p
              className={`mb-10 animate-fade-in text-dim text-xl md:text-2xl max-w-lg ${isMobile ? "text-center mx-auto" : alignText} ${resolvedAlign === "center" ? "mx-auto" : ""} ${resolvedAlign === "right" ? "ml-auto" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>

            <div
              className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-4 animate-fade-in ${isMobile ? "justify-center" : alignFlex}`}
              style={{ animationDelay: "0.4s" }}
            >
              <CTAButton
                variant="primary"
                href={ctaLink}
                className={isMobile ? "w-full" : ""}
                aria-label={`${ctaText} - primary action`}
              >
                {ctaText}
              </CTAButton>

              {secondaryCtaText && secondaryCtaLink && (
                <CTAButton
                  variant="secondary"
                  onDark
                  href={secondaryCtaLink}
                  className={isMobile ? "w-full" : ""}
                  showArrow={false}
                  aria-label={`${secondaryCtaText} - secondary action`}
                >
                  {secondaryCtaText}
                </CTAButton>
              )}
            </div>
          </div>

          {heroImage && (
            <div className={`${isMobile ? "w-full order-2 mt-4" : "w-1/3 -ml-6"} relative z-0 flex justify-end h-full`}>
              <OptimizedImage
                src={heroImage}
                alt={imageDescription || "Hero"}
                className={`${isMobile ? "h-auto max-h-[60vh] w-auto mx-auto" : "h-full max-h-[80vh]"} object-contain object-right`}
                width={800}
                height={1000}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Re-export ArrowRight to keep tree-shakable icon usage explicit where callers used it
export { ArrowRight };
