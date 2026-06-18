# Design System Extraction — Design Spec

**Date:** 2026-06-18
**Status:** Approved (pending spec review)

## Goal

Extract the brand design system that currently lives embedded inside the
siadlak.com website into a **self-contained `src/design-system/` folder** that
can be copied into future projects to give them the same visual *and emotional*
brand consistency.

**Hard constraint:** the rendered website must look **identical** to end users
before and after. This is a pure code-side restructuring, not a redesign.

## Non-Goals

- No monorepo, no published npm package, no build/publish pipeline (Option A:
  "copy the folder"). The folder is built to make a future package/submodule a
  short hop, but that is out of scope now.
- No Storybook yet (explicitly deferred to a later effort).
- No visual changes, no renaming of tokens/utilities, no "cleanup" of CSS.
- Layout, sections, and domain components (`podcast/`, `webinar/`) are NOT part
  of the design system — they are site-specific compositions and stay as app
  code.

## Scope Boundary

**In the design system** (the reusable, brand-defining layer):

- Token layer: `:root` CSS variables + `.dark` overrides + brand font imports.
- The Tailwind theme (`theme.extend`) + the custom-utility plugin
  (`-locked-*`, premium surfaces, gradients, `the-cut`, `glass-card`, etc.) +
  `tailwindcss-animate`.
- The reusable primitives in `src/components/ui/*` (shadcn primitives + custom
  `cta-button`, `glass-card`, `app-card`, `x-icon`, `OptimizedImage`).
- Brand-global CSS from `index.css` (base typography, brand component classes,
  animations, prose).

**Stays as app code:**

- `src/components/layout/`, `src/components/sections/`, `podcast/`, `webinar/`.
- Page-specific CSS blocks in `index.css` (e.g. `TrainTheTrainer Hero`,
  `Homepage: Phase backgrounds`).
- Page-local `@fontsource` imports (`jetbrains-mono` in `MCT.tsx`, `caveat` in
  two pages) — they are used only on specific pages, not brand-global.
- `src/lib/utils.ts` (`cn`) — used by 52 app files and non-UI code; the design
  system gets its own copy (see below).

## Target Folder Layout

```
src/design-system/
  index.ts              # single public entry — re-exports all components + cn + types
  tokens.css            # :root variables, .dark overrides, brand font @import
  tailwind-preset.ts    # theme.extend + custom-utility plugin + tailwindcss-animate
  styles/
    base.css            # @layer base brand typography + body
    components.css       # @layer components brand classes (NOT page-specific)
  lib/
    cn.ts               # self-contained copy of cn() — no app dependency
  components/
    button.tsx, card.tsx, cta-button.tsx, glass-card.tsx, app-card.tsx, ...
  README.md             # reuse instructions
```

### Consumption contract (and future-project wiring)

1. `tailwind.config.ts` → `{ presets: [designSystemPreset], content, prefix, darkMode }`
2. global CSS → `@import "@/design-system/tokens.css";` then the base/components CSS
3. components → `import { Button, CTAButton, GlassCard, cn } from "@/design-system";`

## The CSS / Token / Preset Split

This is the highest-risk step. The governing principle: **pure relocation** —
every selector, variable, and utility keeps identical text and load order so
Tailwind emits byte-equivalent CSS. Nothing is renamed.

- **`tokens.css`** ← `index.css` lines ~1–163: brand font `@import`s + the full
  `:root` block and `.dark` overrides.
- **`tailwind-preset.ts`** ← everything in `tailwind.config.ts`'s
  `theme.extend`, the inline custom-utility plugin, and `tailwindcss-animate`,
  moved verbatim into a `Config` used as a preset. `tailwind.config.ts` retains
  only `presets`, `content`, `prefix`, `darkMode`.
- **`styles/base.css` + `styles/components.css`** ← the `@layer base` /
  `@layer components` brand blocks (typography, prose, animations, brand
  component classes).
- **App `index.css` keeps** the page-specific blocks. Every ambiguous block
  will be enumerated with a move/stay verdict during implementation and
  surfaced for confirmation rather than decided silently.

### index.css structural map (current)

| Lines (approx) | Content | Verdict |
|---|---|---|
| 1–3 | Brand font `@import`s | → tokens.css |
| 5–7 | `@tailwind` directives | stay (app entry) |
| 18–163 | `:root` Diamond Hybrid tokens (+ `.dark`) | → tokens.css |
| 164–174 | Diamond Hybrid Body | → base.css |
| 175–222 | `@layer base` typography | → base.css |
| 223–415 | `@layer components` brand classes | → components.css |
| 416–422 | Prose styles | → components.css |
| 423–494 | Animations | → components.css |
| 495–563 | TrainTheTrainer Hero | STAY (page-specific) |
| 564–568 | Homepage phase backgrounds | STAY (page-specific) |
| 569–580 | Marquee | review (likely components.css) |
| 581–589 | Diamond bullet list | review (likely components.css) |
| 590–594 | Brand gradient bg utility | review (likely components.css) |
| 595–1015 | remainder | enumerate + verdict during impl |

Load order in the app's global CSS after the split must preserve the original
order: font imports → `@tailwind base/components/utilities` → tokens → base →
components → page-specific. (`@import` statements must precede `@tailwind`/other
rules per CSS rules; tokens.css carries the font imports at its top and is
imported first.)

## Component Move, `cn`, Import Codemod

- Move `src/components/ui/*` → `src/design-system/components/*`.
- Rewrite their internal `@/lib/utils` import → the design system's own `cn`
  via a **relative** path (`../lib/cn`), not an alias, so the folder stays
  portable when copied into another project. `cn` is also re-exported from
  `index.ts`.
- The design system gets its own `cn` copy at `lib/cn.ts`; the app keeps
  `src/lib/utils.ts` for its 52 consumers and non-UI usage. Intentional small
  duplication that buys self-containment.
- **Codemod** the 52 app files importing `@/components/ui` (barrel) and
  `@/components/ui/<x>` (direct) → `@/design-system`. Both forms handled.
- Delete `src/components/ui/` after migration (no compatibility shims).
- Preserve the public component surface: `index.ts` must export every name the
  old `src/components/ui/index.ts` barrel exported, plus the direct-imported
  components, so no app import breaks.

## Verification (proving "looks identical")

1. **Baseline (pre-refactor):** `npm run build`, then puppeteer screenshots of
   representative routes — `/`, `/about`, `/courses`, a webinar page,
   `/contact`, the MCT page — at desktop + mobile widths.
2. **Post-refactor:** same build + screenshots, pixel-diff against baseline.
   Zero meaningful diff is the pass bar.
3. `npm run lint` and `npm run build` must stay green.
4. Secondary check: diff the emitted production CSS bundle before/after — it
   should be byte-equivalent (or only trivially reordered), confirming the
   relocation changed nothing semantically.

## Risks & Mitigations

- **CSS load-order / `@import` placement breakage** → keep exact original order;
  verify via CSS-bundle diff + screenshots.
- **Missed import in codemod** → `npm run build` (TypeScript) fails fast on any
  unresolved `@/components/ui` path.
- **Page-specific CSS misclassified as global (or vice versa)** → enumerate
  every ambiguous block with a verdict; screenshot diff catches regressions.
- **Tailwind `content` globs** → preset carries `theme`/`plugins` only; `content`
  stays in `tailwind.config.ts` pointing at `./src/**` so DS + app classes are
  still scanned.

## Success Criteria

- `src/design-system/` is self-contained (no imports reaching outside the
  folder) and copy-pasteable.
- App imports the system only through `@/design-system` (+ `tokens.css` /
  preset wiring).
- Screenshot diff shows no visual change; lint + build green.
