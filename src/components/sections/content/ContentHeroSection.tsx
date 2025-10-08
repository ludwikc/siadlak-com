import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentHeroSectionProps {
  /** Main title - displayed in large, bold typography (max 900px width) */
  title: string | ReactNode;
  /** Subtitle/body content - displayed below title (max 700px width) */
  subtitle?: string | ReactNode;
  /** Optional children (CTAs, additional content) */
  children?: ReactNode;
  /** Optional className for customization */
  className?: string;
  /** Background variant */
  backgroundVariant?: "light" | "gradient" | "muted";
}

/**
 * SECTION TYPE A: HERO (Full-width, centered)
 *
 * Use for:
 * - Opening sections and major statements
 * - Page introductions
 * - Hero sections with single key message
 *
 * Features:
 * - Max-width 900px for headlines
 * - Max-width 700px for body copy
 * - Centered alignment
 * - Breathable padding (120px desktop, 80px mobile)
 * - Responsive typography with clamp()
 *
 * @example
 * ```tsx
 * <ContentHeroSection
 *   title="SESJA DISCOVERY"
 *   subtitle={<p>To nie jest sprzedażowa rozmowa...</p>}
 *   backgroundVariant="gradient"
 * >
 *   <Button>CTA Button</Button>
 * </ContentHeroSection>
 * ```
 */
export function ContentHeroSection({
  title,
  subtitle,
  children,
  className,
  backgroundVariant = "light",
}: ContentHeroSectionProps) {
  const bgClasses = {
    light: "bg-luminous-white",
    gradient:
      "bg-gradient-to-br from-deep-space via-neural-blue to-twilight-indigo text-white",
    muted: "bg-secondary/30",
  };

  const textColorClasses = {
    light: "text-deep-charcoal",
    gradient: "text-white",
    muted: "text-deep-charcoal",
  };

  const subtitleColorClasses = {
    light: "text-deep-charcoal/80",
    gradient: "text-white/90",
    muted: "text-deep-charcoal/80",
  };

  return (
    <section
      className={cn(
        "section-content relative overflow-hidden",
        bgClasses[backgroundVariant],
        className,
      )}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mx-auto text-center">
          {/* Headline - max 900px */}
          <h1
            className={cn(
              "content-h1 mb-8 max-w-[900px] mx-auto",
              textColorClasses[backgroundVariant],
            )}
          >
            {title}
          </h1>

          {/* Subtitle/Body - max 700px */}
          {subtitle && (
            <div
              className={cn(
                "text-lg md:text-xl leading-relaxed mb-12 max-w-[700px] mx-auto",
                subtitleColorClasses[backgroundVariant],
              )}
            >
              {subtitle}
            </div>
          )}

          {/* CTA or additional content */}
          {children && <div className="mt-12">{children}</div>}
        </div>
      </div>
    </section>
  );
}
