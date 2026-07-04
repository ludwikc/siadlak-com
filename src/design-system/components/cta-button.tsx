import type { ReactNode } from 'react';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/cn';

interface CTAButtonProps {
  /** Button text content */
  children: ReactNode;
  /** primary = brand gradient fill; secondary = outlined; tertiary = electric text link */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'premium';
  /** Button size */
  size?: 'default' | 'lg' | 'xl';
  /** Use dark-surface border on secondary */
  onDark?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional href for link buttons */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show ArrowRight icon */
  showArrow?: boolean;
  /** Aria label */
  'aria-label'?: string;
  /** Optional type attribute */
  type?: 'button' | 'submit' | 'reset';
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest ' +
  'rounded-[var(--border-radius-sm)] transition-all duration-150 ease-out ' +
  'hover:-translate-y-px hover:shadow-md ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 ' +
  'min-h-[44px]';

const sizeClasses = {
  default: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg',
} as const;

function variantClasses(variant: 'primary' | 'secondary' | 'tertiary' | 'premium', onDark: boolean) {
  if (variant === 'primary' || variant === 'premium') {
    return 'text-white bg-[image:var(--gradient-premium)] shadow-[var(--shadow-premium)]';
  }
  if (variant === 'secondary') {
    return onDark
      ? 'bg-transparent border border-white/20 text-white hover:border-white/40'
      : 'bg-transparent border border-border text-foreground hover:border-foreground/40';
  }
  // tertiary — text link, electric
  return 'p-0 min-h-0 text-electric hover:text-electric/80 normal-case tracking-normal font-semibold shadow-none';
}

/**
 * Standardized CTA button — three variants, one hover physic.
 * Never use raw styled <Link> as a button; use this component.
 */
export function CTAButton({
  children,
  variant = 'primary',
  size = 'lg',
  onDark = false,
  onClick,
  href,
  className,
  showArrow = true,
  'aria-label': ariaLabel,
  type,
}: CTAButtonProps) {
  const classes = cn(
    baseClasses,
    variant !== 'tertiary' && sizeClasses[size],
    variantClasses(variant, onDark),
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      type={type}
      className={classes}
      variant="ghost"
      size={size === 'xl' ? 'lg' : size}
      aria-label={ariaLabel}
    >
      {content}
    </Button>
  );
}

export default CTAButton;
