# Design System Storybook — Design Spec

**Date:** 2026-06-22
**Status:** Approved by delegation (user asked Claude to make the technical calls and proceed)

## Goal

Add a Storybook to the `src/design-system/` design system so it is browsable/documented, and so the claude.ai/design `/design-sync` can resume via its **storybook shape** (auto-generates preview cards from stories, verified against the storybook render — far less manual work than the package shape's hand-authored previews).

## Constraints

- Stories must render components **on-brand** — the design system's tokens, fonts, Tailwind utilities, and brand CSS layers applied exactly as in the live site.
- Do not change the website's runtime behavior or appearance. Storybook is additive dev tooling (`.storybook/` + devDependencies + scripts).
- Keep the design system self-contained/reusable — stories travel with the folder.
- No library build/package added to the design system (honors the "no build infra" decision; Storybook is dev tooling, not a publish pipeline).

## Decisions (Claude's calls)

- **Storybook 8.x**, framework `@storybook/react-vite` (matches the repo's Vite 5 + SWC setup; inherits the existing PostCSS pipeline: `postcss-import` → `tailwindcss` → `autoprefixer`).
- **CSF3** stories with **autodocs**. Addons: `@storybook/addon-essentials`, `@storybook/addon-a11y` (cheap accessibility signal).
- **Co-located** `<component>.stories.tsx` next to each component in `src/design-system/components/` (Approach 1). Stories import from sibling files / the barrel.
- **One story file per component family** (the ~45 files), composing sub-parts where they belong (a `Card` story renders `CardHeader`/`Content`/`Footer`; a `Dialog` story renders the open dialog with `DialogContent`/`Header`/`Title`). This is the faithful "all 45" interpretation.

## Architecture

### `.storybook/main.ts`
- `framework: '@storybook/react-vite'`
- `stories: ['../src/design-system/**/*.stories.@(tsx|mdx)']`
- `addons: ['@storybook/addon-essentials', '@storybook/addon-a11y']`
- `docs: { autodocs: 'tag' }`

### `.storybook/preview.css` (brand CSS entry — mirrors the app, minus page-specific)
```css
@import "../src/design-system/tokens.css";
@import "../src/design-system/styles/base.css";
@import "../src/design-system/styles/components.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```
(Page-specific CSS from the app's `index.css` is intentionally excluded.)

### `.storybook/preview.ts`
- `import './preview.css'` then `import '../src/design-system/styles/global.css'` — global.css imported AFTER the stylesheet (JS import order), mirroring `main.tsx`, so the raw unlayered brand CSS keeps its cascade position (avoids the documented `postcss-import` hoist regression).
- Global decorators: wrap every story in `TooltipProvider` and mount `<Toaster />` + `<SonnerToaster />` once, so tooltip/toast stories work without per-story boilerplate.
- `parameters`: `layout: 'centered'` (override to `padded`/`fullscreen` per story as needed), `controls: { expanded: true }`.

### Tailwind content
- Add `'./.storybook/**/*.{ts,tsx}'` to `tailwind.config.ts` `content` so any utility classes used in decorators/stories are generated. (`./src/**` already covers co-located stories.)

### Story conventions (each `*.stories.tsx`)
- CSF3 `Meta`/`StoryObj`, `title: 'Components/<Name>'` (custom ones under `title: 'Brand/<Name>'`), `tags: ['autodocs']`.
- A canonical/default story, the primary variant axis swept (e.g. Button `variant`/`size`), and statically-renderable states (`disabled`, `loading`, `error`, `open`). Realistic content (no `foo`/`bar`).
- Overlay components (Dialog, Sheet, Popover, HoverCard, Tooltip, DropdownMenu-like, AlertDialog): a story with the overlay rendered **open** (use `open`/`defaultOpen` or a decorator) so the card shows real content.
- Compound components compose their sub-parts inside the parent.
- Context/infra components handled explicitly:
  - `toaster`/`sonner`: a story with a button that fires a toast (and the global Toaster mounted).
  - `chart`: a story with small inline sample data.
  - `sidebar`: a story wrapped in its required provider/layout.
  - `form`: a story composing `react-hook-form` + a couple of fields.
- Hooks/non-visual files (`lib/`), the barrel, the preset, and `tokens.css` get NO stories.

### package.json scripts
- `"storybook": "storybook dev -p 6006"`, `"build-storybook": "storybook build"`.

## Verification

- `npm run build-storybook` completes with no errors (build is the gate; there is no unit-test layer).
- Spot visual check: a handful of built/served stories render **on-brand** (brand fonts, electric-blue/depth-purple tokens, branded buttons/cards) — confirmed via screenshots, not assumed. A blank/unstyled render means the preview CSS chain isn't wired right.
- No regression to the website: `npm run build` still passes.

## Out of scope

- Resuming `/design-sync` (separate follow-up once Storybook is in).
- Dark-mode theming (no `.dark` token block exists; stories render light).
- Visual regression testing infra (Chromatic etc.).

## Success criteria

- A `.storybook/` config + co-located stories for every visual component family.
- `npm run build-storybook` green; stories render on-brand.
- Stories live inside `src/design-system/` so they travel with the folder.
- Ready for a storybook-shape `/design-sync` resume.
