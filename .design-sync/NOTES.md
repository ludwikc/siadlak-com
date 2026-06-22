# design-sync notes

## Status: PAUSED — doing Storybook first (2026-06-22)

A first design-sync was attempted (package shape) and paused by user decision to
add a Storybook first. The Claude Design project already exists and is pinned in
config.json — resume into the SAME project.

- **Project:** "siadlak.com Design System" — `edb1cc1b-751b-4551-916e-6f4c642e3c91`
  (https://claude.ai/design/p/edb1cc1b-751b-4551-916e-6f4c642e3c91). Currently EMPTY.
- **globalName:** `SiadlakDS` (keep stable across syncs so the bundle global is consistent).

## Why package shape was hard here (read before resuming)

The design system (`src/design-system/`) is a **bare source folder** — no
`package.json`, no built `dist/`, no `.d.ts`. The package-shape converter needs a
real package root:
- `exportedNames()` reads `<PKG_DIR>/package.json` and crashes (ENOENT) when
  `PKG_DIR` resolves to a non-existent `node_modules/<pkg>`.
- Component discovery is `.d.ts`-export based; with no built declarations it hits
  `[ZERO_MATCH]`. Synth-from-src only triggers when `--entry` is omitted, but then
  `PKG_DIR` is bogus and the package.json read crashes.
- Components are styled with **Tailwind utility classes**, so previews also need a
  COMPILED stylesheet (Tailwind run over the component source) wired as `cfg.cssEntry`
  — `tokens.css` alone is not enough.

## Resume plan (storybook shape — preferred)

Once a Storybook exists for `src/design-system`:
- Re-run design-sync; detection should pick `shape: storybook` (record
  `storybookConfigDir` if the config lives outside repo root).
- Storybook shape auto-generates previews from stories (no hand-authoring 45 cards)
  and verifies against the storybook render — the high-fidelity path.
- The Storybook's preview must load the brand CSS (tokens + Tailwind utilities +
  the preset) so components render on-brand — that compiled CSS also resolves the
  package-shape `cssEntry` gap above if we ever revert to package shape.

## Storybook-shape attempt findings (2026-06-22)

Switched config to `shape: storybook`. What works: reference Storybook builds
(`.design-sync/sb-reference`, 159 entries → 44 components, iframe.html 17.5KB);
chromium + playwright installed; converter build exits 0 — bundle 1384 KB,
203 exports, 115/115 stories paired, `.storybook/preview` decorators bundled.

**Blocker — component filter needs `.d.ts`:** `package-build.mjs` line ~692 filters
storybook components by the `.d.ts`-derived `exported` set
(`src.components.filter(c => exported.has(c.name))`), NOT by `exportEvidence`
(the real bundle export list). With no built `.d.ts`, `exported` is empty →
all 44 titles dropped as `[TITLE_UNMAPPED]` → 0 components → 0 previews.
- `cfg.provider` triggers `exportEvidence` (esbuild's real 203-name export list)
  but ONLY for the provider gate, not the component filter — doesn't fix discovery.
- `exportedNames()` reads a SINGLE aggregating entry `.d.ts` (`pkgJson.types ||
  index.d.ts` at the pkg dir), enumerating its exported value declarations.
- The full bundle entry `.design-sync/ds-full-entry.ts` (star re-exports + 3
  default-export re-exports) is correct for the BUNDLE; the gap is purely the
  type-declaration surface the filter reads.

**To finish the sync, the design system needs TypeScript declarations**, i.e. a
real build (dist + .d.ts) — which reverses the "no build infra" decision. Options
pending user decision: add a real library build, or emit `.d.ts` into a gitignored
scratch + wire `pkgJson.types`/typesRoot (fragile, touches shared package.json).

## Grading rules (storybook-shape compare — for fan-out subagents)

Pipeline is proven: solo set (Button, GlassCard, Table, AppCard) all grade `match`;
44/44 previews render cleanly in validate. Two repo-specific rules:

- **[GENERAL] Overlays portal → `sb-error` "no storybook root content".** Dialog,
  AlertDialog, Sheet (and any `defaultOpen` overlay with no visible trigger) render
  their content into `<body>`, so the reference storybook's `#storybook-root` is
  empty → compare reports `sb-error`. They DO render correctly (validate render-check
  is 44/44 clean; `cardMode: "single"` shows them in the product card). For these,
  DON'T skip — grade on the PREVIEW render: Read the preview screenshot
  `ds-bundle/_screenshots/<group>__<Name>.png` (or the cardMode-single card), confirm
  the overlay renders correctly + on-brand, and write `{"verdict":"match","note":
  "overlay portals to body — reference root empty; judged on preview render-check"}`.
- **[GENERAL] Reference-deficient variants.** Some variants (e.g. AppCard Premium)
  render correctly in the PREVIEW (which uses the shipped site-compiled CSS,
  `cfg.cssEntry=dist/brand.css`) but UNDER-render in the reference storybook (its
  generated CSS lacks some styling, e.g. white-on-white). Per the §4 rubric, when the
  reference is clearly the deficient side, judge the preview on its own merit
  (`match` + a note). The shipped bundle uses the site CSS, so the preview is the
  faithful artifact.

Grade keys are component names (export names): e.g. `ChartContainer`, `ResizablePanelGroup`,
`SonnerToaster`, `Tooltip`. Provider for previews: `cfg.provider=TooltipProvider`
(README wrap guidance); tooltip.stories also carries a `TooltipProvider` meta decorator.

## Scratch tooling

`.ds-sync/` (staged converter scripts + its node_modules) and `ds-bundle/` are
gitignored scratch — safe to delete; re-copied on the next run.

- InputOTP is also portal/focus-capture class (sb-error) — graded on preview render. NavigationMenu graded `close` (storybook shows at-rest trigger button bg; preview/site CSS shows plain links). OptimizedImage Public Asset/Avatar `close` — /public + remote URLs unresolvable in the isolated renderer on BOTH sides (env, not a component bug).

## Re-sync risks (watch-list)
- **cssEntry = site-purged CSS.** `cfg.cssEntry=dist/brand.css` is a COPY of the website's compiled CSS (regenerate: `npm run build` → copy newest `dist/assets/*.css` to `src/design-system/dist/brand.css`; then `git checkout -- dist`). It only contains classes the SITE uses, so a few brand preset utilities (`bg-gradient-text-brand`, `bg-premium-*`, `font-primary`) are PURGED and absent from the shipped bundle — designs using them render unstyled. Future improvement: compile the brand CSS with a safelist of all preset utilities so the full vocabulary ships.
- **dist/brand.css + dist/index.mjs + dist/index.d.ts are gitignored build output** — regenerate via `npm run build:ds` (tsup → index.mjs/index.d.ts) and the brand.css copy above before a re-sync. The converter entry is `--entry src/design-system/dist/index.mjs`.
- **ds-full-entry.ts** is NOT used (we build from `dist/index.mjs`); leftover, harmless.
- tsup emits `.mjs` (true ESM) via `outExtension`; `src/design-system/package.json` `module`/`exports.import` point at `./dist/index.mjs` — manifest and output agree.
- Overlays (Dialog/AlertDialog/Sheet/InputOTP/Toast/Tooltip/Popover) portal → graded on preview render, not side-by-side. `close` grades: Tabs (active-tab indicator), Toggle (unpressed frame), NavigationMenu (at-rest trigger bg), XIcon In Context (tone), OptimizedImage Public Asset/Avatar (env-unresolvable URLs), ChartContainer (axis max). All reference-deficiency or framing, not component bugs.
