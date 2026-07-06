import type { ReactNode } from "react";
import { CTAButton } from "@/design-system/components/cta-button";
import { useIsMobile } from "@/hooks/use-mobile";
import OptimizedImage from "@/design-system/components/OptimizedImage";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageDescription?: string;
  backgroundImage?: string;
  heroImage?: string;
  fullHeight?: boolean;
  align?: "left" | "center" | "right";
  children?: ReactNode;
}

const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const justifyClasses = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
} as const;

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
  align = "left",
  children,
}: HeroProps) {
  const isMobile = useIsMobile();

  const subtitleWidthClasses = {
    left: "max-w-lg",
    center: "max-w-xl mx-auto",
    right: "max-w-lg ml-auto",
  } as const;

  return (
    <section
      className={`relative ${fullHeight ? "min-h-[90vh]" : "pt-24 pb-16 md:pt-32 md:pb-24"} bg-void-glow flex items-center overflow-hidden`}
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* Background Image (if provided) */}
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
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center ${fullHeight ? "h-full" : ""} ${align === "right" ? "justify-end" : ""}`}>
          {/* Text content */}
          <div
            className={`
            ${isMobile ? "w-full text-center order-1 mb-8" : align === "center" ? "w-full" : "w-2/3 pr-8"}
            ${fullHeight ? "flex flex-col justify-center" : ""}
            ${isMobile ? "" : textAlignClasses[align]}
          `}
          >
            <h1
              id="hero-title"
              className="mb-6 font-heading font-bold !leading-tight animate-fade-in text-white text-4xl md:text-6xl lg:text-7xl"
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mb-10 animate-fade-in text-dim text-xl md:text-2xl ${isMobile ? "" : subtitleWidthClasses[align]}`}
                style={{ animationDelay: "0.2s" }}
              >
                {subtitle}
              </p>
            )}

            {ctaText && ctaLink && (
              <div
                className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-4 animate-fade-in ${isMobile ? "" : justifyClasses[align]}`}
                style={{ animationDelay: "0.4s" }}
              >
                <CTAButton
                  to={ctaLink}
                  variant="primary"
                  aria-label={`${ctaText} - primary action`}
                  className={isMobile ? "flex w-full" : ""}
                >
                  {ctaText}
                </CTAButton>

                {secondaryCtaText && secondaryCtaLink && (
                  <CTAButton
                    to={secondaryCtaLink}
                    variant="secondary"
                    showArrow={false}
                    aria-label={`${secondaryCtaText} - secondary action`}
                    className={`border-white/20 text-white ${isMobile ? "flex w-full" : ""}`}
                  >
                    {secondaryCtaText}
                  </CTAButton>
                )}
              </div>
            )}

            {children}
          </div>

          {/* Right column - Image (1/3 width on desktop) */}
          {heroImage && (
            <div
              className={`
              ${isMobile ? "w-full order-2 mt-4" : "w-1/3 -ml-6"}
              relative z-0 flex justify-end h-full
            `}
            >
              <OptimizedImage
                src={heroImage}
                alt={imageDescription || "Hero"}
                className={`
                  ${isMobile ? "h-auto max-h-[60vh] w-auto mx-auto" : "h-full max-h-[80vh]"}
                  object-contain object-right
                `}
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
