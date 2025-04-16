
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Primary Brand Colors
				"primary-purple": "#7C00FF",
				"electric-violet": "#B100FF",
				"magenta-glow": "#D951FF",
				"quantum-blue": "#4A36C2",
				
				// Secondary Colors
				"refined-magenta": "#C961E3",
				"royal-indigo": "#383B6C",
				"premium-gold": "#D4AF37",
				
				// Neutral Colors
				"midnight-black": "#0B0B0D",
				"dark-charcoal": "#1A1A24",
				"deep-charcoal": "#2B2B33",
				"slate-gray": "#4E4E5C",
				"silver-detail": "#E9E9F1",
				"luminous-white": "#F9F9FB",
				"light-purple-gray": "#F0F0F5",
				"slightly-lighter-black": "#1A1A24",
				
				// UI State Colors
				"success-green": "#36D399",
				"warning-amber": "#FBBD23",
				"error-red": "#F87272",
				"info-blue": "#4A36C2",
				
				// Base shadcn-ui color system
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				neural: {
					violet: "#7C00FF",
					pink: "#B100FF"
				},
				ascension: { 
					pink: "#D951FF"
				},
				luminal: { 
					magenta: "#C961E3"
				},
				deep: { 
					space: "#0B0B0D"
				},
				subtle: { 
					slate: "#4E4E5C"
				},
				silver: { 
					mist: "#E9E9F1"
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Inter', 'sans-serif'],
				premium: ['Quattrocento', 'serif'],
			},
			letterSpacing: {
				tightest: '-0.5px',
				tighter: '-0.3px',
				tight: '-0.2px',
				normal: '0px',
				wider: '0.2px',
				widest: '1.2px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(124, 0, 255, 0.3)' },
					'50%': { boxShadow: '0 0 25px rgba(124, 0, 255, 0.5)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
			},
			backgroundImage: {
				'logo-glow-gradient': 'linear-gradient(135deg, #B100FF, #7C00FF 65%, #4A36C2)',
				'primary-button-gradient': 'linear-gradient(90deg, #B100FF, #9900FF 60%, #7C00FF)',
				'header-banner-gradient': 'linear-gradient(90deg, #4A36C2, #7C00FF)',
				'accent-highlight-gradient': 'linear-gradient(90deg, #7C00FF, #C961E3)',
				'subtle-background-gradient': 'linear-gradient(180deg, #0B0B0D, #1A1A24)',
				'premium-accent-gradient': 'linear-gradient(90deg, #7C00FF, #D4AF37)',
			},
			boxShadow: {
				'subtle-glow': '0 0 10px rgba(124, 0, 255, 0.15)',
				'medium-glow': '0 0 15px rgba(124, 0, 255, 0.3)',
				'strong-glow': '0 0 20px rgba(124, 0, 255, 0.5)',
				'intense-glow': '0 0 30px rgba(124, 0, 255, 0.7)',
				'button-glow': '0 0 15px rgba(177, 0, 255, 0.3)',
				'button-glow-hover': '0 0 25px rgba(177, 0, 255, 0.5)',
				'premium-glow': '0 0 15px rgba(124, 0, 255, 0.3), 0 0 2px rgba(212, 175, 55, 0.5)',
				'double-glow': '0 0 15px rgba(124, 0, 255, 0.3), 0 0 30px rgba(124, 0, 255, 0.1)',
				'elevation-1': '0 2px 4px rgba(11, 11, 13, 0.1)',
				'elevation-2': '0 4px 8px rgba(11, 11, 13, 0.15)',
				'elevation-3': '0 8px 16px rgba(11, 11, 13, 0.2)',
				'elevation-4': '0 16px 24px rgba(11, 11, 13, 0.25)',
				'dark-elevation-1': '0 2px 4px rgba(0, 0, 0, 0.2)',
				'dark-elevation-2': '0 4px 8px rgba(0, 0, 0, 0.25)',
				'dark-elevation-3': '0 8px 16px rgba(0, 0, 0, 0.3)',
				'dark-elevation-4': '0 16px 24px rgba(0, 0, 0, 0.35)',
			},
			textShadow: {
				'glow': '0 0 10px rgba(124, 0, 255, 0.3)',
				'text-glow': '0 0 10px rgba(124, 0, 255, 0.7)',
			},
			spacing: {
				'1': '0.25rem',  // 4px
				'2': '0.5rem',   // 8px
				'3': '0.75rem',  // 12px
				'4': '1rem',     // 16px
				'5': '1.5rem',   // 24px
				'6': '2rem',     // 32px
				'7': '3rem',     // 48px
				'8': '4rem',     // 64px
				'9': '6rem',     // 96px
				'10': '8rem',    // 128px
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
