import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentTextSectionProps {
  /** Optional section title */
  title?: string | ReactNode;
  /** Main content (paragraphs, subsections, etc.) */
  children: ReactNode;
  /** Optional className for customization */
  className?: string;
  /** Background variant */
  backgroundVariant?: "light" | "muted";
  /** Maximum width of content container */
  maxWidth?: "800px" | "900px" | "1000px";
  /** Text alignment - left is recommended for long-form readability */
  alignment?: "left" | "center";
  /** Optional id for anchor links */
  id?: string;
}

/**
 * SECTION TYPE B: TEXT-HEAVY (Left-aligned, readable)
 *
 * Use for:
 * - Long-form explanatory content
 * - Multi-paragraph sections
 * - Content with subsections (H3s)
 *
 * Features:
 * - Max-width 800px container (default)
 * - 65ch max-width for body text (optimal readability)
 * - Left-aligned by default (best for long text)
 * - Support for subsections with proper spacing
 * - Breathable padding (120px desktop, 80px mobile)
 *
 * Best Practices:
 * - Use left alignment for 3+ paragraphs
 * - Break long content with H3 subheadings
 * - Add whitespace between subsections (48px+)
 *
 * @example
 * ```tsx
 * <ContentTextSection
 *   title="Co się dzieje podczas sesji?"
 *   backgroundVariant="muted"
 *   alignment="left"
 * >
 *   <p>Zadam Ci kilka pytań...</p>
 *   <h3>1. Za co walczysz?</h3>
 *   <p>Jaki jest Twój niewidzialny wróg?</p>
 * </ContentTextSection>
 * ```
 */
export function ContentTextSection({
  title,
  children,
  className,
  backgroundVariant = "light",
  maxWidth = "800px",
  alignment = "left",
  id,
}: ContentTextSectionProps) {
  const bgClasses = {
    light: "bg-luminous-white",
    muted: "bg-secondary/30",
  };

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section
      id={id}
      className={cn("section-content", bgClasses[backgroundVariant], className)}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={cn("mx-auto", alignmentClasses[alignment])}
          style={{ maxWidth }}
        >
          {title && (
            <h2 className="content-h2 mb-8 text-deep-charcoal">{title}</h2>
          )}

          {/* Content with proper prose spacing */}
          <div className="space-y-6 text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
