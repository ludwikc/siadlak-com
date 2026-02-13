import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // === Diamond Hybrid Core Palette ===
        // Electric Blue — Clarity, Technology (60%)
        "electric-blue": "hsl(var(--electric-blue))",
        "electric-blue-light": "hsl(var(--electric-blue-light))",
        "electric-blue-dark": "hsl(var(--electric-blue-dark))",

        // Depth Purple — Transformation (25%)
        "depth-purple": "hsl(var(--depth-purple))",
        "depth-purple-light": "hsl(var(--depth-purple-light))",
        "depth-purple-dark": "hsl(var(--depth-purple-dark))",

        // Void Black — Premium dark
        "void-black": "hsl(var(--void-black))",

        // Diamond Light — Clean backgrounds
        "diamond-light": "hsl(var(--diamond-light))",

        // Text utilities
        "text-on-dark": "hsl(var(--text-on-dark))",
        "text-on-light": "hsl(var(--text-on-light))",
        "text-dim": "hsl(var(--text-dim))",

        // Legacy aliases (mapped to new palette)
        "neural-blue": "hsl(var(--neural-blue))",
        "neural-blue-light": "hsl(var(--neural-blue-light))",
        "neural-blue-dark": "hsl(var(--neural-blue-dark))",
        "twilight-indigo": "hsl(var(--twilight-indigo))",
        "twilight-indigo-light": "hsl(var(--twilight-indigo-light))",
        "twilight-indigo-dark": "hsl(var(--twilight-indigo-dark))",
        "pulse-cyan": "hsl(var(--pulse-cyan))",
        "zenith-gold": "hsl(var(--zenith-gold))",
        "color-primary": "hsl(var(--color-primary))",
        "color-primary-light": "hsl(var(--color-primary-light))",
        "color-primary-dark": "hsl(var(--color-primary-dark))",
        "color-accent": "hsl(var(--color-accent))",
        "color-indigo": "hsl(var(--color-indigo))",
        "color-premium": "hsl(var(--color-premium))",
        transformation: {
          blue: "hsl(var(--neural-blue))",
          "blue-light": "hsl(var(--neural-blue-light))",
          "blue-dark": "hsl(var(--neural-blue-dark))",
        },
        "transformation-blue": "hsl(var(--neural-blue))",
        "success-green": "hsl(var(--color-success))",
        "growth-gold": "hsl(var(--zenith-gold))",

        // UI State Colors
        "color-success": "hsl(var(--color-success))",
        "color-warning": "hsl(var(--color-warning))",
        "color-error": "hsl(var(--color-error))",
        "color-info": "hsl(var(--color-info))",

        // Background Colors
        "background-primary": "hsl(var(--background-primary))",
        "background-secondary": "hsl(var(--background-secondary))",
        "background-tertiary": "hsl(var(--background-tertiary))",

        // Text Colors
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",

        // Border Colors
        "border-primary": "hsl(var(--border-primary))",
        "border-subtle": "hsla(var(--border-subtle))",

        // Legacy named colors (mapped to Diamond Hybrid)
        "deep-space": "#080808",
        "neural-violet": "#6D28D9",
        "quantum-blue": "#007AFF",
        "ascension-pink": "#6D28D9",
        "luminal-magenta": "#007AFF",
        gold: "hsl(var(--gold))",
        "silver-mist": "#E5E7EB",
        "subtle-slate": "#6B7280",
        "luminous-white": "#F9FAFB",
        "deep-charcoal": "#111827",
        "gentle-lavender": "#9CA3AF",

        // Lifehackerzy Community Colors
        lifehacker: {
          purple: "hsl(263, 70%, 50%)",
          "purple-dark": "hsl(263, 70%, 8%)",
          "purple-light": "hsl(263, 70%, 62%)",
          "purple-border": "hsl(263, 70%, 50% / 0.3)",
          "purple-border-light": "hsl(263, 70%, 50% / 0.2)",
        },

        // Shadcn/UI Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        primary: ["var(--font-family-primary)", "Inter", "sans-serif"],
        heading: ["var(--font-family-heading)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-family-primary)", "Inter", "sans-serif"],
      },
      fontSize: {
        "content-body": ["1.125rem", { lineHeight: "1.7" }],
        "content-h1": ["3.5rem", { lineHeight: "1.15" }],
        "content-h2": ["2rem", { lineHeight: "1.3" }],
        "content-h3": ["1.5rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        prose: "65ch",
        "prose-wide": "75ch",
        "prose-narrow": "55ch",
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        extrabold: "var(--font-weight-extrabold)",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        pill: "var(--border-radius-pill)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        DEFAULT: "var(--shadow-md)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        medium: "var(--transition-medium)",
        slow: "var(--transition-slow)",
        200: "0.2s",
        300: "0.3s",
        500: "0.5s",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
        in: "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "page-transition": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "page-transition": "page-transition 0.3s ease-out",
        enter: "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        exit: "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<
          string,
          Record<string, string | Record<string, string>>
        >,
      ) => void;
    }) {
      addUtilities({
        ".story-link": {
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "2px",
            bottom: "0",
            left: "0",
            backgroundColor: "hsl(var(--color-primary))",
            transformOrigin: "bottom right",
            transition: "transform 0.3s ease-out",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        },
        ".hover-scale": {
          transition: "transform 0.2s ease-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
        ".glass-card": {
          backgroundColor: "hsl(0 0% 100% / 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid hsl(0 0% 100% / 0.2)",
          ".dark &": {
            backgroundColor: "hsl(0 0% 0% / 0.2)",
            border: "1px solid hsl(0 0% 100% / 0.1)",
          },
        },
        // Theme-locked gradient utilities - Diamond Hybrid
        ".bg-gradient-locked-primary": {
          background:
            "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%)) !important",
        },
        ".bg-gradient-locked-dark": {
          background:
            "linear-gradient(135deg, hsl(0 0% 3%), hsl(0 0% 8%)) !important",
        },
        ".bg-gradient-locked-hero": {
          background:
            "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%)) !important",
        },
        ".bg-gradient-locked-hero-complex": {
          background:
            "linear-gradient(135deg, hsl(0 0% 3%) 0%, hsl(263 70% 50% / 0.3) 50%, hsl(211 100% 50% / 0.2) 100%) !important",
        },
        ".bg-gradient-locked-cta": {
          background:
            "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%)) !important",
        },
        ".bg-gradient-locked-pricing": {
          background:
            "linear-gradient(135deg, hsl(0 0% 3%), hsl(0 0% 6%)) !important",
        },
        // Theme-adaptive gradient utilities
        ".bg-gradient-brand-primary": {
          background:
            "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
        },
        ".bg-gradient-brand-dark": {
          background:
            "linear-gradient(135deg, hsl(0 0% 3%), hsl(0 0% 8%))",
        },
        ".bg-gradient-brand-hero": {
          background:
            "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
        },
        ".bg-gradient-text-brand": {
          background:
            "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
        ".bg-gradient-text-brand-dark": {
          background:
            "linear-gradient(135deg, hsl(210 17% 96%), hsl(263 70% 62%))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
        // COMPREHENSIVE LOCKED UTILITIES FOR DARK GRADIENT SECTIONS
        // Text utilities for locked sections
        ".text-locked-white": {
          color: "hsl(0 0% 100%) !important",
        },
        ".text-locked-silver": {
          color: "hsl(240 13% 89%) !important",
        },
        ".text-locked-primary": {
          color: "hsl(0 0% 100%) !important",
        },
        ".text-locked-secondary": {
          color: "hsl(240 13% 89%) !important",
        },
        ".text-locked-muted": {
          color: "hsl(240 11% 80%) !important",
        },
        ".text-locked-gradient": {
          background:
            "linear-gradient(to right, hsl(308 80% 38%), hsl(308 79% 49%)) !important",
          backgroundClip: "text !important",
          "-webkit-background-clip": "text !important",
          color: "transparent !important",
        },
        // Card utilities for locked sections
        ".card-locked": {
          backgroundColor: "hsl(0 0% 100% / 0.1) !important",
          backdropFilter: "blur(10px) !important",
          border: "1px solid hsl(0 0% 100% / 0.2) !important",
          color: "hsl(0 0% 100%) !important",
        },
        ".card-locked-transparent": {
          backgroundColor: "hsl(0 0% 100% / 0.05) !important",
          backdropFilter: "blur(10px) !important",
          border: "1px solid hsl(0 0% 100% / 0.1) !important",
          color: "hsl(0 0% 100%) !important",
        },
        ".card-locked-solid": {
          backgroundColor: "hsl(0 0% 100% / 0.15) !important",
          backdropFilter: "blur(10px) !important",
          border: "1px solid hsl(0 0% 100% / 0.3) !important",
          color: "hsl(0 0% 100%) !important",
        },
        // Border utilities for locked sections
        ".border-locked": {
          borderColor: "hsl(0 0% 100% / 0.2) !important",
        },
        ".border-locked-solid": {
          borderColor: "hsl(0 0% 100% / 0.4) !important",
        },
        ".border-locked-accent": {
          borderColor: "hsl(308 80% 38%) !important",
        },
        ".border-locked-success": {
          borderColor: "hsl(160 84% 39%) !important",
        },
        ".border-locked-warning": {
          borderColor: "hsl(38 92% 50%) !important",
        },
        ".border-locked-error": {
          borderColor: "hsl(0 84% 60%) !important",
        },
        // Icon utilities for locked sections
        ".icon-locked": {
          color: "hsl(0 0% 100%) !important",
        },
        ".icon-locked-accent": {
          color: "hsl(308 80% 38%) !important",
        },
        ".icon-locked-success": {
          color: "hsl(160 84% 39%) !important",
        },
        ".icon-locked-warning": {
          color: "hsl(38 92% 50%) !important",
        },
        ".icon-locked-error": {
          color: "hsl(0 84% 60%) !important",
        },
        // Button utilities for locked sections
        ".btn-locked-primary": {
          background:
            "linear-gradient(to right, hsl(0 0% 100%), hsl(210 40% 98%)) !important",
          color: "hsl(267 83% 26%) !important",
          border: "none !important",
          boxShadow: "0 4px 12px hsl(267 83% 26% / 0.15) !important",
          "&:hover": {
            background:
              "linear-gradient(to right, hsl(210 40% 98%), hsl(214 32% 91%)) !important",
            boxShadow: "0 6px 16px hsl(267 83% 26% / 0.2) !important",
          },
        },
        ".btn-locked-secondary": {
          backgroundColor: "transparent !important",
          color: "hsl(0 0% 100%) !important",
          border: "1px solid hsl(0 0% 100% / 0.4) !important",
          "&:hover": {
            backgroundColor: "hsl(0 0% 100% / 0.1) !important",
          },
        },
        ".btn-locked-accent": {
          backgroundColor: "hsl(308 80% 38%) !important",
          color: "hsl(0 0% 100%) !important",
          border: "none !important",
          "&:hover": {
            backgroundColor: "hsl(308 79% 49%) !important",
          },
        },
        // Section-level locked utility
        ".section-locked": {
          "& h1, & h2, & h3, & h4, & h5, & h6": {
            color: "hsl(0 0% 100%) !important",
          },
          "& p": {
            color: "hsl(240 13% 89%) !important",
          },
          "& .text-muted, & .text-secondary": {
            color: "hsl(240 11% 80%) !important",
          },
          '& .card, & [class*="card"]': {
            backgroundColor: "hsl(0 0% 100% / 0.1) !important",
            backdropFilter: "blur(10px) !important",
            border: "1px solid hsl(0 0% 100% / 0.2) !important",
            color: "hsl(0 0% 100%) !important",
          },
          "& svg": {
            color: "hsl(0 0% 100%) !important",
          },
        },
        // Hero-specific theme-adaptive background utilities
        ".bg-hero-light": {
          backgroundColor: "hsl(270 100% 99%)",
        },
        ".bg-hero-dark": {
          backgroundColor: "hsl(0 0% 4%)",
        },
        // Hero gradient blur elements matching reference CSS
        ".gradient-blur-top-right": {
          width: "24rem",
          height: "24rem",
          top: "-10rem",
          right: "-10rem",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(177, 0, 255, 0.3), rgba(255, 0, 177, 0.3))",
          filter: "blur(56px)",
          borderRadius: "50%",
          position: "absolute",
        },
        ".gradient-blur-bottom-left": {
          width: "20rem",
          height: "20rem",
          bottom: "-8rem",
          left: "-8rem",
          backgroundImage:
            "linear-gradient(to top left, rgba(0, 100, 255, 0.3), rgba(75, 0, 130, 0.3))",
          filter: "blur(48px)",
          borderRadius: "50%",
          position: "absolute",
        },
        // Premium text utilities for dark surfaces
        ".text-premium-on-dark": {
          color: "hsl(var(--text-on-dark-primary)) !important",
        },
        ".text-premium-secondary-dark": {
          color: "hsl(var(--text-on-dark-secondary)) !important",
        },
        ".text-premium-tertiary-dark": {
          color: "hsl(var(--text-on-dark-tertiary)) !important",
        },
        // Premium surface utilities
        ".bg-premium-dark-base": {
          backgroundColor: "hsl(var(--surface-dark-base)) !important",
        },
        ".bg-premium-dark-elevated": {
          backgroundColor: "hsl(var(--surface-dark-elevated)) !important",
        },
        ".bg-premium-dark-floating": {
          backgroundColor: "hsl(var(--surface-dark-floating)) !important",
        },
        // Premium gradient overlay utilities
        ".bg-premium-gradient-overlay": {
          background:
            "linear-gradient(135deg, hsl(var(--surface-dark-base)), hsl(var(--surface-dark-elevated)), hsl(var(--surface-dark-floating))) !important",
        },
        // Premium static gradient mesh (Stripe/Linear style)
        ".bg-premium-mesh": {
          background: `radial-gradient(circle at 20% 30%, hsl(267 100% 50% / 0.04), transparent 40%), radial-gradient(circle at 80% 70%, hsl(233 31% 32% / 0.03), transparent 40%), hsl(var(--background-primary))`,
        },
        ".bg-premium-mesh-dark": {
          background: `radial-gradient(circle at 20% 30%, hsl(267 100% 50% / 0.06), transparent 40%), radial-gradient(circle at 80% 70%, hsl(233 31% 32% / 0.04), transparent 40%), hsl(var(--surface-dark-base))`,
        },
        // Transformation background utilities - Life coaching aesthetic
        ".bg-transformation-light": {
          background:
            "linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--background)), hsl(var(--muted) / 0.5))",
        },
        ".bg-transformation-grid": {
          backgroundImage:
            "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        },
        ".bg-transformation-hero": {
          position: "relative",
          background:
            "linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--background)), hsl(var(--muted) / 0.3))",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: "0.2",
          },
        },
        // Transformation Card Components (Neural Lighthouse Brand)
        ".transformation-card": {
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          border: "2px solid hsl(217 91% 60% / 0.2)", // neural-blue
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "hsl(244 45% 58% / 0.5)", // twilight-indigo on hover
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px hsl(244 45% 58% / 0.2)",
            transform: "translateY(-0.5rem)",
          },
        },
        ".transformation-card-elevated": {
          backgroundColor: "white",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          border: "2px solid hsl(217 91% 60% / 0.2)", // neural-blue
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "hsl(244 45% 58% / 0.5)", // twilight-indigo on hover
            boxShadow:
              "0 25px 50px -12px hsl(244 45% 58% / 0.25), 0 20px 25px -5px rgb(0 0 0 / 0.1)",
            transform: "translateY(-0.5rem)",
          },
        },
        ".transformation-card-feature": {
          backgroundColor: "white",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          border: "2px solid hsl(217 91% 60% / 0.2)",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            borderColor: "hsl(217 91% 60% / 0.5)",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px hsl(217 91% 60% / 0.2)",
            transform: "translateY(-0.5rem) rotate(-1deg)",
          },
        },
        // Transformation Section Components
        ".transformation-section-light": {
          position: "relative",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          background:
            "linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--background)), hsl(var(--muted) / 0.3))",
          overflow: "hidden",
        },
        ".transformation-section-clean": {
          paddingTop: "5rem",
          paddingBottom: "5rem",
          backgroundColor: "hsl(var(--muted) / 0.3)",
        },
        ".transformation-section-cta": {
          position: "relative",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          background:
            "linear-gradient(to bottom right, hsl(217 91% 60% / 0.1), hsl(38 92% 50% / 0.05))",
          overflow: "hidden",
        },
        // Transformation Button Components
        ".btn-transformation-primary": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.75rem 2rem",
          fontSize: "1.125rem",
          fontWeight: "700",
          borderRadius: "0.75rem",
          background:
            "linear-gradient(to right, hsl(217 91% 60%), hsl(244 45% 58%))", // neural-blue to twilight-indigo
          color: "white",
          border: "none",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            background:
              "linear-gradient(to right, hsl(244 45% 58%), hsl(217 91% 60%))", // reverse on hover
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px hsl(244 45% 58% / 0.5)",
            transform: "scale(1.05)",
          },
        },
        ".btn-transformation-secondary": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.75rem 2rem",
          fontSize: "1.125rem",
          fontWeight: "600",
          borderRadius: "0.75rem",
          backgroundColor: "white",
          color: "hsl(217 91% 60%)", // neural-blue
          border: "2px solid hsl(217 91% 60%)",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "hsl(217 91% 60% / 0.05)",
            borderColor: "hsl(217 91% 60%)",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            transform: "translateY(-2px)",
          },
        },
        ".btn-transformation-ghost": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: "0.75rem",
          backgroundColor: "transparent",
          color: "hsl(217 91% 60%)",
          border: "none",
          transition: "all 0.2s ease",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "hsl(217 91% 60% / 0.1)",
            transform: "translateX(4px)",
          },
        },
        // Transformation Badge Components
        ".transformation-badge": {
          display: "inline-flex",
          alignItems: "center",
          padding: "0.5rem 1.5rem",
          fontSize: "0.875rem",
          fontWeight: "600",
          borderRadius: "9999px",
          backgroundColor: "hsl(217 91% 60% / 0.1)",
          color: "hsl(217 91% 60%)",
          border: "2px solid hsl(217 91% 60% / 0.3)",
        },
        ".transformation-badge-success": {
          display: "inline-flex",
          alignItems: "center",
          padding: "0.5rem 1.5rem",
          fontSize: "0.875rem",
          fontWeight: "600",
          borderRadius: "9999px",
          backgroundColor: "hsl(244 45% 58% / 0.1)", // twilight-indigo
          color: "hsl(244 45% 58%)",
          border: "2px solid hsl(244 45% 58% / 0.3)",
        },
        ".transformation-badge-premium": {
          display: "inline-flex",
          alignItems: "center",
          padding: "0.5rem 1.5rem",
          fontSize: "0.875rem",
          fontWeight: "600",
          borderRadius: "9999px",
          backgroundColor: "hsl(38 92% 50% / 0.1)",
          color: "hsl(38 92% 50%)",
          border: "2px solid hsl(38 92% 50% / 0.3)",
        },
      });
    },
  ],
};

export default config;
