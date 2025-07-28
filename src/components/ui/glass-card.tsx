import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  /** Card content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Card padding variant */
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to show hover effects */
  hover?: boolean;
  /** Card variant for different contexts */
  variant?: 'default' | 'bordered' | 'subtle';
}

/**
 * Reusable glass card component with consistent backdrop blur and transparency.
 * Automatically adapts to light/dark themes and provides consistent spacing.
 * Used extensively across the site for content sections and feature highlights.
 */
export function GlassCard({ 
  children, 
  className, 
  padding = 'md',
  hover = true,
  variant = 'default',
  ...props 
}: GlassCardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };

  const variantClasses = {
    default: 'glass-card',
    bordered: 'glass-card border-2 border-white/20 dark:border-white/10',
    subtle: 'bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/5'
  };

  return (
    <div
      className={cn(
        // Base glass card styling from Tailwind config
        variantClasses[variant],
        // Padding
        paddingClasses[padding],
        // Border radius
        'rounded-xl',
        // Hover effects
        hover && 'hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1',
        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}