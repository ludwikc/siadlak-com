
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-button-gradient text-luminous-white shadow-button-glow hover:shadow-button-glow-hover transform hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-error-red text-luminous-white hover:bg-error-red/90",
        outline: "border-2 border-primary-purple bg-transparent text-primary-purple hover:bg-primary-purple/5 dark:text-silver-detail dark:hover:bg-primary-purple/10",
        secondary: "bg-silver-detail/30 dark:bg-luminous-white/10 text-deep-charcoal dark:text-silver-detail hover:bg-silver-detail/50 dark:hover:bg-luminous-white/20",
        ghost: "hover:bg-silver-detail/30 hover:text-primary-purple dark:hover:bg-luminous-white/10 dark:hover:text-electric-violet",
        link: "text-electric-violet underline-offset-4 hover:text-magenta-glow hover:underline",
        gradient: "bg-logo-glow-gradient text-luminous-white shadow-button-glow hover:shadow-button-glow-hover transform hover:-translate-y-0.5 active:translate-y-0",
        accent: "bg-accent-highlight-gradient text-luminous-white shadow-button-glow hover:shadow-button-glow-hover transform hover:-translate-y-0.5 active:translate-y-0",
        premium: "bg-premium-accent-gradient text-luminous-white shadow-premium-glow hover:shadow-button-glow-hover transform hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-12 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
