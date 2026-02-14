import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentTextSectionProps {
  title?: string | ReactNode;
  children: ReactNode;
  className?: string;
  backgroundVariant?: "light" | "muted" | "dark";
  maxWidth?: "800px" | "900px" | "1000px";
  alignment?: "left" | "center";
  id?: string;
}

export function ContentTextSection({
  title,
  children,
  className,
  backgroundVariant = "light",
  maxWidth = "800px",
  alignment = "left",
  id,
}: ContentTextSectionProps) {
  const isDark = backgroundVariant === "muted" || backgroundVariant === "dark";

  const bgClasses = {
    light: "bg-diamond-light",
    muted: "bg-void-glow",
    dark: "bg-void-glow",
  };

  const titleColor = isDark ? "text-text-on-dark" : "text-text-on-light";
  const bodyColor = isDark ? "text-text-dim" : "text-text-on-light/80";

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
            <h2 className={cn("font-heading text-2xl md:text-4xl font-bold mb-8", titleColor)}>{title}</h2>
          )}

          <div className={cn("space-y-6 text-lg md:text-xl leading-relaxed", bodyColor)}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
