import type { ReactNode } from 'react';
import { Button } from './button';
import { ArrowRight } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  /** Button text content */
  children: ReactNode;
  /** Button variant - primary for main CTAs, secondary for alternative actions */
  variant?: 'primary' | 'secondary' | 'premium';
  /** Button size - defaults to large for optimal mobile touch targets */
  size?: 'default' | 'lg' | 'xl';
  /** Optional click handler */
  onClick?: () => void;
  /** Optional href for link buttons */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show arrow icon */
  showArrow?: boolean;
  /** Aria label for accessibility */
  'aria-label'?: string;
}

/**
 * Standardized CTA button component for consistent conversion-focused design.
 * Ensures minimum 44px touch targets and consistent hover states.
 * Optimized for both desktop and mobile experiences.
 */
export function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'lg',
  onClick, 
  href, 
  className,
  showArrow = true,
  'aria-label': ariaLabel,
  ...props 
}: CTAButtonProps) {
  const baseClasses = cn(
    // Ensure minimum touch target size
    'min-h-[44px] min-w-[44px]',
    // Consistent padding for different sizes
    size === 'xl' && 'py-6 px-12 text-xl',
    size === 'lg' && 'py-4 px-8 text-lg',
    // Smooth transitions and hover effects
    'transition-all duration-300 transform hover:scale-105',
    'shadow-lg hover:shadow-xl',
    className
  );

  const variantClasses = {
    primary: 'bg-neural-violet hover:bg-ascension-pink text-white',
    secondary: 'bg-transparent border-2 border-neural-violet text-neural-violet hover:bg-neural-violet hover:text-white dark:border-luminal-magenta dark:text-luminal-magenta dark:hover:bg-luminal-magenta dark:hover:text-white',
    premium: 'bg-gradient-to-r from-ascension-pink to-luminal-magenta hover:from-luminal-magenta hover:to-ascension-pink text-white'
  };

  const buttonContent = (
    <>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={cn(baseClasses, variantClasses[variant], 'inline-flex items-center justify-center rounded-lg font-medium')}
        aria-label={ariaLabel}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant])}
      size={size === "xl" ? "lg" : size}
      aria-label={ariaLabel}
      {...props}
    >
      {buttonContent}
    </Button>
  );
}