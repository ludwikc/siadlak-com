# Design Consistency Pass — Diamond Hybrid System Enforcement

Scope: unify existing UI to `src/design-system/tokens.css`. No redesigns, no new tokens. Executed in 7 phases so each phase can be verified before moving on.

---

## Phase 1 — Button system collapse (highest leverage)

**Goal:** three variants only (`primary`, `secondary`, `tertiary`), one hover physic, one source (`CTAButton`).

Files:
- `src/design-system/components/cta-button.tsx` — rewrite:
  - variants: `primary` = `var(--gradient-premium)` fill / white / uppercase `tracking-widest` / radius `var(--border-radius-sm)`; `secondary` = transparent + `border-border` (or `border-white/20` via `dark` prop) same casing/radius; `tertiary` = electric text link with `<ArrowRight>`.
  - Remove `hover:scale-105`; use `hover:-translate-y-px hover:shadow-md transition-all duration-150 ease-out`.
  - Remove arrow `ml-2` (Button has `gap-2`).
  - Anchor (`href`) branch mirrors button branch exactly (same size/radius classes).
- `src/design-system/components/button.tsx` — replace `special` variant hardcoded magenta gradient with `var(--gradient-premium)`; align hover physics (translateY only).
- Migrate raw styled `<Link>` CTAs → `CTAButton`:
  - `src/pages/Index.tsx` (hero CTAs, pricing card, "Dwie ścieżki")
  - `src/components/layout/Header.tsx` ("Aplikuj")
  - `src/pages/Testimonials.tsx` (`.cta-button`)
  - Newsletter/program pages that use raw Link+Button combos
- `src/components/sections/CTASection.tsx` — remove blur-glow wrapper div, drop `variant="secondary"` + `bg-brand-gradient` repaint, use `<CTAButton variant="primary">`.
- Purge `.btn-hero` / `.cta-button` `scale(1.05)` / `translateY(-2px)` / `opacity-90` hover rules in `src/index.css`.

## Phase 2 — Off-token color purge

- `src/pages/Testimonials.tsx` + related CSS in `src/index.css`: keep 5 card layouts, re-skin using `hsl(var(--text-on-light))`, `hsl(var(--muted-foreground))`, `hsl(var(--card))`, `hsl(var(--muted))`, `hsl(var(--border))`, `hsl(var(--electric-blue)/0.12)`. Standardize card radius → `var(--border-radius-md)`.
- `src/components/layout/Footer.tsx`: replace `bg-gradient-to-br from-void via-electric to-void` with `bg-void` + `var(--glow-gradient)` overlay; `hover:text-depth` → `hover:text-electric`.
- Homepage marquee: `style={{ backgroundColor:'#080808' }}` → `bg-void`.
- Rename `.status-dot--gold` → `.status-dot--accent` (and all usages).
- Grep `src/**/*.{tsx,css}` for `#[0-9a-fA-F]{3,6}`; replace with nearest token (allow-list: LinkedIn `#0077B5`, other third-party brand colors).

## Phase 3 — Typography

- `src/design-system/styles/base.css`: `h1,h2,h3,h4,h5,h6` already use `--font-family-heading`. Verify inheritance is not overridden on Contact.tsx h1, HeroSection.tsx h1, CTASection.tsx h2 (remove any overriding `font-sans` / inline font class).
- Merge `src/components/sections/Hero.tsx` + `HeroSection.tsx` → single `Hero` with props `align`, `fullHeight`, `backgroundImage`, `heroImage`. Remove `isUwazneZyciePage` conditional; that page passes `align="right"`. Delete dead `isHomePage ? "bg-void-glow" : "bg-void-glow"` ternary.
- Single hero h1 ramp: `text-4xl md:text-6xl lg:text-7xl` (matches `clamp(2.5rem,5vw,4.5rem)`). Remove the other two ramps.

## Phase 4 — Layout rhythm

- Container widths: sanction `max-w-6xl` (grids) and `max-w-3xl` (prose). Sweep `max-w-7xl|5xl|4xl|2xl` and hardcoded 1400/1280/1200/1024px containers; replace to the nearest sanctioned width.
- Section paddings: `py-20` (standard) / `py-24 md:py-32` (hero/offer). Replace `py-16`, `py-5`, and `padding: 80px` inline rules.
- Header offset variable: `Header.tsx` sets `--header-offset` on `document.documentElement` depending on presence of `PromoBanner`; hero components read `pt-[var(--header-offset)]` instead of hardcoding `pt-20`/`pt-24 md:pt-32`. Replace `fixed top-9`.

## Phase 5 — Motion & interaction

- Global durations: 150ms micro / 300ms structural, `ease-out` only. Apply via utility class sweep + `base.css`.
- Add `ScrollToTop` route-change listener in `App.tsx`; delete all per-link `window.scrollTo(0,0)` handlers and `Footer` `scrollToTop`.
- Header dropdowns: add matching exit transition (fade/scale) to `animate-fade-in`; reduce close timeout 150→80ms.
- Nav "wkrótce" badge: remove `animate-pulse`; `text-[8px]` → `text-[10px]`.
- Add `focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2` to base link + button styles (`Header`, `Footer`, nav links).
- Footer social icons: add `hover:opacity-80` (justifies `transition-all`).
- Testimonials entrance animation: start `opacity:1`; only animate under `@media (prefers-reduced-motion: no-preference)`; add 50ms stagger.

## Phase 6 — Microtypography sweep

- Body copy hyphen-as-dash `" - "` → `" — "` (em dash with spaces). Focus on marquee data, testimonial attributions.
- Polish quotes: straight quotes → `„…"`.
- Remove `→` character from JSX text; ensure every arrow is `<ArrowRight>`.
- `Index.tsx` "Dwie ścieżki" cards: replace `🛡` / `🌿` emoji with `<Shield>` / `<Leaf>` from lucide, `text-electric`.
- Dark sections: standardize secondary text to `text-dim` (`--text-on-dark-secondary`) and tertiary to `hsl(var(--text-on-dark-tertiary))`. Remove ad-hoc `text-white/80`, `text-muted-foreground` in dark contexts.

## Phase 7 — Docs

- `CLAUDE.md`:
  - "Montserrat (headings)" → "Space Grotesk (headings)".
  - Replace duplicated brand color list with pointer to `src/design-system/tokens.css` as source of truth.
  - Add **Forbidden** list: no raw hex in pages/components; no styled raw `<Link>` buttons (use `CTAButton`); no new hero markup (use `Hero`); use `-locked-*` utilities in dark sections.

---

## Acceptance verification (run after Phase 7)

1. `rg "#[0-9a-fA-F]{3,6}" src/pages src/components` → only third-party brand hexes remain (allow-list documented).
2. `rg "→" src -g '*.tsx'` → 0 hits in JSX text.
3. Spot-check computed font-family on Contact/HeroSection/CTASection h1/h2 → Space Grotesk.
4. Only one `Hero.tsx` file; `HeroSection.tsx` deleted; one hero type ramp in code.
5. All CTAs render through `CTAButton`; manual hover shows translateY(-1px)+shadow, no scale.
6. Keyboard-tab through Header/Footer → visible electric focus ring on every link.
7. DevTools "Emulate CSS prefers-reduced-motion: reduce" → Testimonials fully visible, no pulse anywhere.

---

## Notes / risks

- Container-width sweep will visually shift some pages (esp. those on `max-w-7xl`). This is intended tightening; visually re-verify homepage, program pages, testimonials after Phase 4.
- Merging Hero components touches many pages; will do it in a single commit with call-site updates to avoid a broken intermediate state.
- The `special` button variant is used in a few marketing spots; switching to `--gradient-premium` shifts the accent from magenta to electric→depth, matching palette.
- Scope excluded: `/webinar/*` and `/oto` per existing style-exception memory — will not touch those routes' hero/CTA styling.
