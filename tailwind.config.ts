import type { Config } from "tailwindcss";

const config: Config = {
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
        // Brand Colors
        "color-primary": "hsl(var(--color-primary))",
        "color-primary-light": "hsl(var(--color-primary-light))",
        "color-primary-dark": "hsl(var(--color-primary-dark))",
        "color-accent": "hsl(var(--color-accent))",
        "color-indigo": "hsl(var(--color-indigo))",
        "color-premium": "hsl(var(--color-premium))",

        // UI State Colors - WCAG AA compliant
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
        "border-subtle": "hsl(var(--border-subtle))",

        // Tailwind Custom Colors - HSL values
        "deep-space": "hsl(0 0% 4%)",
        "neural-violet": "hsl(267 83% 26%)",
        "quantum-blue": "hsl(215 85% 13%)",
        "ascension-pink": "hsl(308 80% 38%)",
        "luminal-magenta": "hsl(308 79% 49%)",
        "gold": "hsl(var(--gold))",
        "silver-mist": "hsl(240 13% 89%)",
        "subtle-slate": "hsl(242 6% 51%)",
        "luminous-white": "hsl(240 20% 98%)",
        "deep-charcoal": "hsl(240 9% 18%)",
        "gentle-lavender": "hsl(240 11% 80%)", // Improved contrast - was #A9A8BD

        // Lifehackerzy Community Colors
        lifehacker: {
          purple: "hsl(270, 90%, 60%)",
          "purple-dark": "hsl(270, 70%, 8%)",
          "purple-light": "hsl(270, 90%, 70%)",
          "purple-border": "hsl(270, 90%, 60% / 0.3)",
          "purple-border-light": "hsl(270, 90%, 60% / 0.2)",
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
        heading: ["var(--font-family-heading)", "Montserrat", "sans-serif"],
        sans: ["var(--font-family-primary)", "Inter", "sans-serif"],
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
        // Theme-locked gradient utilities - these never change regardless of theme
        ".bg-gradient-locked-primary": {
          background:
            "linear-gradient(to bottom right, hsl(267 83% 26%), hsl(308 80% 38%)) !important",
        },
        ".bg-gradient-locked-dark": {
          background:
            "linear-gradient(to bottom right, hsl(0 0% 4%), hsl(215 85% 13%)) !important",
        },
        ".bg-gradient-locked-hero": {
          background:
            "linear-gradient(to bottom right, hsl(267 83% 26%), hsl(215 85% 13%), hsl(0 0% 4%)) !important",
        },
        ".bg-gradient-locked-hero-complex": {
          background:
            "linear-gradient(to bottom right, hsl(267 83% 26%) 0%, hsl(215 85% 13%) 50%, hsl(0 0% 4%) 100%) !important",
        },
        ".bg-gradient-locked-cta": {
          background: "linear-gradient(to right, hsl(267 83% 26%), hsl(308 80% 38%)) !important",
        },
        ".bg-gradient-locked-pricing": {
          background:
            "linear-gradient(to bottom right, hsl(267 83% 26%), hsl(215 85% 13%), hsl(0 0% 4%)) !important",
        },
        // Theme-adaptive gradient utilities (these were the original ones)
        ".bg-gradient-brand-primary": {
          background: "linear-gradient(to bottom right, hsl(267 83% 26%), hsl(308 80% 38%))",
        },
        ".bg-gradient-brand-dark": {
          background: "linear-gradient(to bottom right, hsl(0 0% 4%), hsl(215 85% 13%))",
        },
        ".bg-gradient-brand-hero": {
          background:
            "linear-gradient(to bottom right, hsl(267 83% 26%), hsl(215 85% 13%), hsl(0 0% 4%))",
        },
        ".bg-gradient-text-brand": {
          background: "linear-gradient(to right, hsl(267 83% 26%), hsl(308 80% 38%))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
        ".bg-gradient-text-brand-dark": {
          background: "linear-gradient(to right, hsl(240 13% 89%), hsl(308 79% 49%))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
          ".dark &": {
            background: "linear-gradient(to right, hsl(240 13% 89%), hsl(308 79% 49%))",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
          },
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
          background: "linear-gradient(to right, hsl(308 80% 38%), hsl(308 79% 49%)) !important",
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
          background: "linear-gradient(to right, hsl(0 0% 100%), hsl(210 40% 98%)) !important",
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
      });
    },
  ],
};

export default config;
