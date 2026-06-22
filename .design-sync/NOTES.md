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

## Scratch tooling

`.ds-sync/` (staged converter scripts + its node_modules) and `ds-bundle/` are
gitignored scratch — safe to delete; re-copied on the next run.
