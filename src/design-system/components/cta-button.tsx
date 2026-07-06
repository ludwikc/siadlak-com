import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/cn';

interface CTAButtonProps {
  /** Button text content */
  children: ReactNode;
  /** primary — gradient fill; secondary — outlined; tertiary — text link */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Button size - defaults to large for optimal mobile touch targets */
  size?: 'default' | 'lg' | 'xl';
  /** Optional click handler */
  onClick?: () => void;
  /** External URL — renders a plain anchor */
  href?: string;
  /** Internal route — renders a react-router Link (no full page reload) */
  to?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show arrow icon */
  showArrow?: boolean;
  /** Aria label for accessibility */
  'aria-label'?: string;
}

const fillSizeClasses = {
  default: 'py-3 px-6 text-xs',
  lg: 'py-4 px-8 text-sm',
  xl: 'py-5 px-12 text-base',
} as const;

const tertiarySizeClasses = {
  default: 'text-xs',
  lg: 'text-sm',
  xl: 'text-base',
} as const;

/**
 * Standardized CTA button component for consistent conversion-focused design.
 * Ensures minimum 44px touch targets and one hover physics site-wide
 * (translateY(-1px) + shadow — never scale).
 */
export function CTAButton({
  children,
  variant = 'primary',
  size = 'lg',
  onClick,
  href,
  to,
  className,
  showArrow = true,
  'aria-label': ariaLabel,
  ...props
}: CTAButtonProps) {
  const variantClasses = {
    primary: cn(
      'min-h-[44px] rounded-[var(--border-radius-sm)] uppercase tracking-widest',
      '[background:var(--gradient-premium)] text-white shadow-sm',
      'hover:-translate-y-px hover:shadow-lg',
      fillSizeClasses[size],
    ),
    secondary: cn(
      'min-h-[44px] rounded-[var(--border-radius-sm)] uppercase tracking-widest',
      'bg-transparent border border-border text-on-light',
      'hover:-translate-y-px hover:shadow-sm',
      fillSizeClasses[size],
    ),
    tertiary: cn(
      'uppercase tracking-widest text-electric hover:underline underline-offset-4',
      tertiarySizeClasses[size],
    ),
  };

  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2',
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className={variant === 'tertiary' ? 'h-4 w-4' : 'h-5 w-5'}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} aria-label={ariaLabel} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel} {...props}>
      {content}
    </button>
  );
}
