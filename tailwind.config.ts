
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// New color palette for siadlak.com
				'primary-purple': '#7C00FF',
				'electric-violet': '#B100FF',
				'magenta-glow': '#D951FF',
				'quantum-blue': '#4A29D9',
				'midnight-black': '#0B0B0D',
				'luminous-white': '#F9F9FB',
				'silver-detail': '#E9E9F1',
				'deep-charcoal': '#2B2B33',
				'light-purple-gray': '#F0F0F5',
				'slightly-lighter-black': '#1A1A24',
				'success-green': '#36D399',
				'error-red': '#F87272',
				'warning-amber': '#FBBD23',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
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
					'0%, 100%': { boxShadow: '0 0 15px rgba(177, 0, 255, 0.5)' },
					'50%': { boxShadow: '0 0 25px rgba(177, 0, 255, 0.7)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			},
			backgroundImage: {
				'logo-glow-gradient': 'linear-gradient(135deg, #B100FF, #7C00FF, #4A29D9)',
				'primary-button-gradient': 'linear-gradient(90deg, #B100FF, #7C00FF)',
				'header-banner-gradient': 'linear-gradient(90deg, #4A29D9, #7C00FF)',
				'accent-highlight-gradient': 'linear-gradient(90deg, #7C00FF, #D951FF)',
				'subtle-background-gradient': 'linear-gradient(180deg, #0B0B0D, #1A1A24)',
			},
			boxShadow: {
				'button-glow': '0 0 15px rgba(177, 0, 255, 0.5)',
				'button-glow-hover': '0 0 25px rgba(177, 0, 255, 0.7)',
				'element-glow': '0 0 20px rgba(124, 0, 255, 0.4)',
			},
			textShadow: {
				'text-glow': '0 0 10px rgba(124, 0, 255, 0.7)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
