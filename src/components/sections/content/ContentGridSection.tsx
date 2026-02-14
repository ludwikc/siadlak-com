import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentGridSectionProps {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
  backgroundVariant?: "light" | "muted" | "dark";
  id?: string;
}

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
  const isDark = backgroundVariant === "muted" || backgroundVariant === "dark";

  const bgClasses = {
    light: "bg-diamond-light",
    muted: "bg-void-glow",
    dark: "bg-void-glow",
  };

  const titleColor = isDark ? "text-text-on-dark" : "text-text-on-light";
  const subtitleColor = isDark ? "text-text-dim" : "text-text-on-light/80";

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
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 max-w-[800px] mx-auto">
            {title && (
              <h2 className={cn("font-heading text-2xl md:text-4xl font-bold mb-6", titleColor)}>{title}</h2>
            )}
            {subtitle && (
              <p className={cn("text-lg md:text-xl leading-relaxed mx-auto", subtitleColor)}>
                {subtitle}
              </p>
            )}
          </div>
        )}

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
