# siadlak.com Design System ("Diamond Hybrid")

Self-contained brand design system: tokens, Tailwind preset, brand CSS, and UI primitives. Copy this folder into a new project to inherit the same look and feel.

## Reuse in a new project

1. Copy `src/design-system/` into the target project's `src/`.

2. Install peer packages:

   ```bash
   npm install react react-dom tailwindcss tailwindcss-animate clsx tailwind-merge class-variance-authority lucide-react \
     @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-checkbox \
     @radix-ui/react-dialog @radix-ui/react-hover-card @radix-ui/react-label \
     @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover \
     @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area \
     @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider \
     @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs \
     @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group \
     @radix-ui/react-tooltip \
     cmdk input-otp sonner embla-carousel-react react-day-picker react-resizable-panels recharts
   ```

   > **Note:** Only install the packages whose components you actually use. At minimum you need `react`, `react-dom`, `tailwindcss`, `tailwindcss-animate`, `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`, and `@radix-ui/react-slot`.

3. Wire Tailwind — `tailwind.config.ts`:

   ```ts
   import preset from "./src/design-system/tailwind-preset";
   export default {
     presets: [preset],
     content: ["./src/**/*.{ts,tsx}"],
     prefix: "",
     darkMode: ["class", "class"],
   };
   ```

4. Import the brand CSS in your global stylesheet, in this order:

   ```css
   @import "@/design-system/tokens.css";
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   @import "@/design-system/styles/base.css";
   @import "@/design-system/styles/components.css";
   @import "@/design-system/styles/global.css";
   ```

   Relative paths work too (e.g. `./design-system/tokens.css`) if your bundler doesn't resolve `@/`.

5. Use components:

   ```tsx
   import { Button, CTAButton, GlassCard, cn } from "@/design-system";
   ```

## Layout

- `tokens.css` — CSS variables (colors, shadows, radii, fonts) + `.dark` overrides + brand font imports.
- `tailwind-preset.ts` — theme extension + custom utility classes (`-locked-*`, premium surfaces, gradients, `the-cut`, `glass-card`, …) + `tailwindcss-animate`.
- `styles/` — brand base typography, component classes, and global brand CSS.
- `components/` — UI primitives (shadcn-derived + custom: `cta-button`, `glass-card`, `app-card`, `x-icon`, `OptimizedImage`).
- `lib/` — `cn`, `use-mobile`, `use-toast`.
- `index.ts` — public entry.

## Notes

- `react-router-dom` is used by `app-card.tsx` (internal `<Link>`). If your project uses a different router, swap that import in `app-card.tsx`.
- `next-themes` (`ThemeProvider`) is not part of this folder — wire it in your app shell if you need dark-mode toggling.
- The `use-toast` hook is a single-instance store; only one `<Toaster>` should be mounted per app.
