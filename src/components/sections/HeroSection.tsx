import type { ReactNode } from 'react';

interface HeroSectionProps {
  /** Main title text - will be displayed in large, bold typography */
  title: string;
  /** Subtitle text - displayed below title with accent styling */
  subtitle?: string | ReactNode;
  /** Optional children to render below subtitle (e.g., CTAs, additional content) */
  children?: ReactNode;
  /** Optional className for customization */
  className?: string;
}

/**
 * Reusable hero section component with consistent styling across all pages.
 * Uses the Mental Elevator gradient background and responsive typography.
 * Optimized for conversion with clear visual hierarchy.
 */
export default function HeroSection({ 
  title, 
  subtitle, 
  children, 
  className = "" 
}: HeroSectionProps) {
  return (
    <section className={`relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-neural-violet to-quantum-blue overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-silver-mist leading-tight">
              {subtitle}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}