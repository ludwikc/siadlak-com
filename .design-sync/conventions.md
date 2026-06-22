# siadlak.com Design System ("Diamond Hybrid") — how to build with it

Build UIs from this library's compiled components (`window.SiadlakDS.*`). Style your own layout glue with this system's **Tailwind utility classes** — do not invent a separate CSS approach.

## Setup / wrapping

- Components are styled by the shipped stylesheet (`styles.css` → `_ds_bundle.css` + brand fonts). It's already loaded; you don't import per-component CSS.
- **Tooltips require a provider:** wrap any `Tooltip` usage in `<TooltipProvider>` (a single one near the root is fine), or it throws "Tooltip must be used within TooltipProvider". `Toaster` / `SonnerToaster` must be mounted once near the app root for toasts to appear.
- Brand fonts: headings use **Space Grotesk** (`font-heading`); body text is **Inter** by default (no class needed). They load via the stylesheet.

## Styling idiom — Tailwind utilities with the brand vocabulary

Use these real utility families (all verified present in the shipped stylesheet). For anything beyond this list, read the Tailwind preset and `tokens.css` first — only classes actually in the bundle render.

| Purpose | Classes |
|---|---|
| Brand colors | `text-electric-blue` / `bg-electric-blue`, `text-depth-purple` / `bg-depth-purple`, `text-void-black`, `bg-diamond-light`; semantic `bg-primary`/`text-primary-foreground`, `bg-secondary`, `bg-muted`, `bg-accent`, `bg-destructive` |
| Headings | `font-heading` (Space Grotesk) |
| Brand surfaces | `glass-card` (translucent blur card), `bg-void-glow` (dark ambient surface), `the-cut` (gradient divider) |
| Dark/"locked" sections | inside dark sections use `section-locked`, `card-locked`, `text-locked-white`/`text-locked-silver`, `btn-locked-primary`/`btn-locked-secondary`, `border-locked`, `icon-locked` — these force the correct on-dark colors |
| Radius/shadow | `rounded-sm/md/lg/pill`, `shadow-sm/md/lg/xl` (brand-tuned) |

Animations: `animate-fade-in`, `animate-scale-in`, `animate-marquee`, `enter`/`exit` (via `tailwindcss-animate`).

## Where the truth lives

- Tokens/colors/shadows/radii: CSS variables in `tokens.css` (`var(--electric-blue)`, `var(--primary)`, `var(--shadow-md)`, …).
- The full utility vocabulary: the Tailwind preset (`tailwind-preset.ts`) — read it before inventing a class.
- Per-component API + usage: each component's `<Name>.d.ts` and `<Name>.prompt.md`.

## Idiomatic example

```tsx
import { Button, CTAButton, GlassCard } from "@/design-system";

function Hero() {
  return (
    <section className="bg-void-glow text-locked-white p-10 rounded-lg">
      <h1 className="font-heading text-4xl text-locked-white">Build your system</h1>
      <p className="text-locked-silver mt-3">Clarity, focus, depth.</p>
      <div className="flex gap-3 mt-6">
        <CTAButton variant="primary" showArrow>Start now</CTAButton>
        <Button variant="outline">Learn more</Button>
      </div>
    </section>
  );
}
```

Custom branded components worth knowing: `CTAButton` (conversion CTAs, `variant: primary|secondary|premium`), `GlassCard` (translucent cards on dark), `AppCard` (course/product cards). Prefer library components over raw HTML (`Button` over `<button>`, `Card` over a `<div>`).
