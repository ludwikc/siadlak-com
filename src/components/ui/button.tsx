import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--border-radius-sm)] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] hover:translate-y-[-1px] hover:shadow-[var(--shadow-sm)]",
        special:
          "bg-gradient-to-r from-[#B100FF] via-[#9900FF] to-[#7C00FF] text-white shadow-[0_0_10px_rgba(177,0,255,0.2)] hover:shadow-[0_0_15px_rgba(177,0,255,0.3)] hover:translate-y-[-1px]",
        secondary:
          "bg-transparent text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--text-secondary)]",
        outline:
          "border border-[var(--border-primary)] bg-transparent text-[var(--text-primary)] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--text-secondary)]",
        ghost:
          "bg-transparent hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-primary)]",
        link: "bg-transparent text-[var(--color-primary)] underline-offset-4 hover:underline p-0 h-auto",
        destructive:
          "bg-[var(--color-error)] text-white hover:bg-[var(--color-error)]/90 hover:translate-y-[-1px] hover:shadow-[var(--shadow-sm)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
