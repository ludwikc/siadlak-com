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
        // === DIAMOND HYBRID CORE (4 colors) ===
        "electric-blue": "hsl(var(--electric-blue))",
        "electric-blue-light": "hsl(var(--electric-blue-light))",
        "electric-blue-dark": "hsl(var(--electric-blue-dark))",
        "depth-purple": "hsl(var(--depth-purple))",
        "depth-purple-light": "hsl(var(--depth-purple-light))",
        "depth-purple-dark": "hsl(var(--depth-purple-dark))",
        "void-black": "hsl(var(--void-black))",
        "diamond-light": "hsl(var(--diamond-light))",

        // Text utilities
        "text-on-dark": "hsl(var(--text-on-dark))",
        "text-on-light": "hsl(var(--text-on-light))",
        "text-dim": "hsl(var(--text-dim))",
        "text-on-light-dim": "#4B5563",

        // Design system aliases (per guidelines)
        electric: "#007AFF",
        depth: "#6D28D9",
        void: "#080808",
        surface: "rgba(255,255,255,0.03)",
        diamond: "#F9FAFB",
        paper: "#FFFFFF",
        dim: "#9CA3AF",

        // Accent
        "zenith-gold": "hsl(var(--zenith-gold))",
        gold: "hsl(var(--zenith-gold))",

        // UI States
        "color-success": "hsl(var(--color-success))",
        "color-warning": "hsl(var(--color-warning))",
        "color-error": "hsl(var(--color-error))",
        "color-info": "hsl(var(--color-info))",

        // === LEGACY ALIASES (backward compat, mapped to core 4) ===
        "deep-space": "#080808",
        "neural-blue": "#007AFF",
        "neural-blue-light": "#3D9AFF",
        "neural-blue-dark": "#0062CC",
        "quantum-blue": "#007AFF",
        "neural-violet": "#6D28D9",
        "twilight-indigo": "#6D28D9",
        "twilight-indigo-light": "#8B5CF6",
        "twilight-indigo-dark": "#5B21B6",
        "ascension-pink": "#6D28D9",
        "luminal-magenta": "#007AFF",
        "luminous-white": "#F9FAFB",
        "deep-charcoal": "#111827",
        "silver-mist": "#E5E7EB",
        "subtle-slate": "#6B7280",
        "gentle-lavender": "#9CA3AF",

        // Lifehackerzy Community
        lifehacker: {
          purple: "hsl(263, 70%, 50%)",
          "purple-dark": "hsl(263, 70%, 8%)",
          "purple-light": "hsl(263, 70%, 62%)",
          "purple-border": "hsl(263, 70%, 50% / 0.3)",
          "purple-border-light": "hsl(263, 70%, 50% / 0.2)",
        },

        // === SHADCN/UI SEMANTIC ===
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
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
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
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
        // === CORE UTILITIES ===
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
            backgroundColor: "hsl(211 100% 50%)",
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
          "&:hover": { transform: "scale(1.05)" },
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

        // === THE CUT — Sharp dark-to-light divider ===
        ".the-cut": {
          height: "4px",
          width: "100%",
          background: "linear-gradient(90deg, #080808 0%, #007AFF 40%, #6D28D9 60%, #F9FAFB 100%)",
          border: "none",
          margin: "0",
          padding: "0",
        },

        // === VOID GLOW — Pulsing dark surface (car dashboard at night) ===
        ".bg-void-glow": {
          backgroundColor: "#080808",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(109, 40, 217, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.15) 0%, transparent 50%)",
        },

        // === GRADIENT UTILITIES (consolidated) ===
        ".bg-gradient-locked-primary": {
          background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%)) !important",
        },
        ".bg-gradient-locked-dark": {
          background: "linear-gradient(135deg, hsl(0 0% 3%), hsl(0 0% 8%)) !important",
        },
        ".bg-gradient-locked-hero-complex": {
          background: "linear-gradient(135deg, hsl(0 0% 3%) 0%, hsl(263 70% 50% / 0.3) 50%, hsl(211 100% 50% / 0.2) 100%) !important",
        },
        ".bg-gradient-text-brand": {
          background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
        ".bg-gradient-text-brand-dark": {
          background: "linear-gradient(135deg, hsl(210 17% 96%), hsl(263 70% 62%))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },

        // === LOCKED TEXT (for dark gradient sections) ===
        ".text-locked-white": { color: "hsl(0 0% 100%) !important" },
        ".text-locked-silver": { color: "hsl(240 13% 89%) !important" },
        ".text-locked-primary": { color: "hsl(0 0% 100%) !important" },
        ".text-locked-secondary": { color: "hsl(240 13% 89%) !important" },
        ".text-locked-muted": { color: "hsl(240 11% 80%) !important" },

        // === LOCKED CARDS ===
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

        // === LOCKED BORDERS ===
        ".border-locked": { borderColor: "hsl(0 0% 100% / 0.2) !important" },
        ".border-locked-solid": { borderColor: "hsl(0 0% 100% / 0.4) !important" },
        ".border-locked-accent": { borderColor: "hsl(263 70% 50%) !important" },
        ".border-locked-success": { borderColor: "hsl(142 71% 45%) !important" },
        ".border-locked-warning": { borderColor: "hsl(38 92% 50%) !important" },
        ".border-locked-error": { borderColor: "hsl(0 84% 60%) !important" },

        // === LOCKED ICONS ===
        ".icon-locked": { color: "hsl(0 0% 100%) !important" },
        ".icon-locked-accent": { color: "hsl(263 70% 50%) !important" },
        ".icon-locked-success": { color: "hsl(142 71% 45%) !important" },
        ".icon-locked-warning": { color: "hsl(38 92% 50%) !important" },
        ".icon-locked-error": { color: "hsl(0 84% 60%) !important" },

        // === LOCKED BUTTONS ===
        ".btn-locked-primary": {
          background: "linear-gradient(to right, hsl(0 0% 100%), hsl(210 40% 98%)) !important",
          color: "hsl(263 70% 42%) !important",
          border: "none !important",
          boxShadow: "0 4px 12px hsl(263 70% 42% / 0.15) !important",
          "&:hover": {
            background: "linear-gradient(to right, hsl(210 40% 98%), hsl(214 32% 91%)) !important",
            boxShadow: "0 6px 16px hsl(263 70% 42% / 0.2) !important",
          },
        },
        ".btn-locked-secondary": {
          backgroundColor: "transparent !important",
          color: "hsl(0 0% 100%) !important",
          border: "1px solid hsl(0 0% 100% / 0.4) !important",
          "&:hover": { backgroundColor: "hsl(0 0% 100% / 0.1) !important" },
        },
        ".btn-locked-accent": {
          backgroundColor: "hsl(263 70% 50%) !important",
          color: "hsl(0 0% 100%) !important",
          border: "none !important",
          "&:hover": { backgroundColor: "hsl(263 70% 62%) !important" },
        },

        // === SECTION LOCKED (auto-styles children) ===
        ".section-locked": {
          "& h1, & h2, & h3, & h4, & h5, & h6": { color: "hsl(0 0% 100%) !important" },
          "& p": { color: "hsl(240 13% 89%) !important" },
          "& .text-muted, & .text-secondary": { color: "hsl(240 11% 80%) !important" },
          '& .card, & [class*="card"]': {
            backgroundColor: "hsl(0 0% 100% / 0.1) !important",
            backdropFilter: "blur(10px) !important",
            border: "1px solid hsl(0 0% 100% / 0.2) !important",
            color: "hsl(0 0% 100%) !important",
          },
          "& svg": { color: "hsl(0 0% 100%) !important" },
        },

        // === HERO BACKGROUNDS ===
        ".bg-hero-light": { backgroundColor: "hsl(270 100% 99%)" },
        ".bg-hero-dark": { backgroundColor: "hsl(0 0% 4%)" },
        ".gradient-blur-top-right": {
          width: "24rem",
          height: "24rem",
          top: "-10rem",
          right: "-10rem",
          backgroundImage: "linear-gradient(to bottom right, hsla(263, 70%, 50%, 0.3), hsla(211, 100%, 50%, 0.3))",
          filter: "blur(56px)",
          borderRadius: "50%",
          position: "absolute",
        },
        ".gradient-blur-bottom-left": {
          width: "20rem",
          height: "20rem",
          bottom: "-8rem",
          left: "-8rem",
          backgroundImage: "linear-gradient(to top left, hsla(211, 100%, 50%, 0.3), hsla(263, 70%, 50%, 0.3))",
          filter: "blur(48px)",
          borderRadius: "50%",
          position: "absolute",
        },

        // === PREMIUM SURFACE UTILITIES ===
        ".text-premium-on-dark": { color: "hsl(210 17% 96%) !important" },
        ".text-premium-secondary-dark": { color: "hsl(215 14% 65%) !important" },
        ".text-premium-tertiary-dark": { color: "hsl(215 14% 50%) !important" },
        ".bg-premium-dark-base": { backgroundColor: "hsl(0 0% 3%) !important" },
        ".bg-premium-dark-elevated": { backgroundColor: "hsl(0 0% 6%) !important" },
        ".bg-premium-dark-floating": { backgroundColor: "hsl(0 0% 10%) !important" },
        ".bg-premium-gradient-overlay": {
          background: "linear-gradient(135deg, hsl(0 0% 3%), hsl(0 0% 6%), hsl(0 0% 10%)) !important",
        },
        ".bg-premium-mesh": {
          background: `radial-gradient(circle at 20% 30%, hsl(263 70% 50% / 0.04), transparent 40%), radial-gradient(circle at 80% 70%, hsl(211 100% 50% / 0.03), transparent 40%), hsl(210 20% 98%)`,
        },
        ".bg-premium-mesh-dark": {
          background: `radial-gradient(circle at 20% 30%, hsl(263 70% 50% / 0.06), transparent 40%), radial-gradient(circle at 80% 70%, hsl(211 100% 50% / 0.04), transparent 40%), hsl(0 0% 3%)`,
        },
      });
    },
  ],
};

export default config;
