import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentGridSectionProps {
  /** Optional section title */
  title?: string | ReactNode;
  /** Optional subtitle/description */
  subtitle?: string | ReactNode;
  /** Grid items (cards, features, etc.) */
  children: ReactNode;
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  /** Gap size between grid items */
  gap?: "sm" | "md" | "lg";
  /** Optional className for customization */
  className?: string;
  /** Background variant */
  backgroundVariant?: "light" | "muted";
  /** Optional id for anchor links */
  id?: string;
}

/**
 * SECTION TYPE C: GRID (Cards, stats, features)
 *
 * Use for:
 * - Feature grids
 * - Statistics/metrics displays
 * - Card-based content
 * - Comparison sections
 *
 * Features:
 * - Responsive grid (1 col mobile → 2-4 cols desktop)
 * - Max-width 1200px container
 * - Optional centered title/subtitle
 * - Flexible gap sizes
 * - Breathable padding (120px desktop, 80px mobile)
 *
 * @example
 * ```tsx
 * <ContentGridSection
 *   title="Kim NIE jesteśmy dla siebie"
 *   columns={2}
 *   gap="lg"
 *   backgroundVariant="muted"
 * >
 *   <div className="content-card">Card 1</div>
 *   <div className="content-card">Card 2</div>
 * </ContentGridSection>
 * ```
 */
export function ContentGridSection({
  title,
  subtitle,
  children,
  columns = 3,
  gap = "md",
  className,
  backgroundVariant = "light",
  id,
}: ContentGridSectionProps) {
  const bgClasses = {
    light: "bg-luminous-white",
    muted: "bg-secondary/30",
  };

  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-6",
    md: "gap-8",
    lg: "gap-12",
  };

  return (
    <section
      id={id}
      className={cn("section-content", bgClasses[backgroundVariant], className)}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        {/* Optional Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 max-w-[800px] mx-auto">
            {title && (
              <h2 className="content-h2 mb-6 text-deep-charcoal">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div
          className={cn(
            "grid grid-cols-1",
            columnClasses[columns],
            gapClasses[gap],
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
