# Design System Extraction — Notes & Decisions

## CSS import architecture (Task 1)

- `postcss-import` was added as the FIRST plugin in `postcss.config.js`. Without it,
  Vite inlines CSS `@import` AFTER Tailwind's JIT runs, so imported `@layer` content
  gets purged. With it, `@import` is inlined before Tailwind processes the file.
- Consequence: `postcss-import` hoists all `@import` statements to the top of
  `index.css`, so the DS CSS files are imported BEFORE the `@tailwind` directives.
  The plan's prescribed ordering (DS style imports AFTER `@tailwind`) is not
  achievable with this toolchain.
- **Verified non-issue:** `base.css`/`components.css` already use `@apply` against
  utility-layer classes (e.g. `@apply container mx-auto px-4`, `@apply bg-white/40
  backdrop-blur-sm`, `@apply font-sans antialiased`), and the production CSS bundle
  is rule-for-rule identical to the pre-refactor baseline. This proves `@apply`
  resolves correctly under the import ordering, because Tailwind's `@apply` is a
  build-time transform over the whole inlined stylesheet, not subject to native
  CSS `@layer` declaration order. Future `@apply` additions to the DS layer files
  behave the same way.

## Verification gate (Task 1)

- Gate relaxed from strict byte-identical bundle to SEMANTIC identity, which is the
  user's actual requirement ("looks the same"): production CSS bundle SIZE unchanged
  (210546 bytes) + identical rule set (each `selector{declarations}` extracted and
  sorted matches) + screenshots match baseline. This allows position-independent
  blocks (`:root` tokens, raw brand CSS) to relocate into the DS folder while
  proving no rule was added, removed, or changed.

## What lives where after Task 1

- `src/design-system/tokens.css` — brand font `@import`s + the full `:root` token block.
- `src/design-system/tailwind-preset.ts` — `theme.extend` + the custom-utility plugin
  + `tailwindcss-animate` (moved verbatim from `tailwind.config.ts`).
- `src/design-system/styles/base.css` — `@layer base`.
- `src/design-system/styles/components.css` — `@layer components`.
- `src/design-system/styles/global.css` — raw (unlayered) brand CSS.
- `src/index.css` — imports the DS files + retains PAGE-SPECIFIC CSS only
  (TrainTheTrainer Hero, Homepage phase backgrounds, Testimonials page styles).
- No top-level `.dark {}` token-override block exists in this project.

## Pre-existing issues (not introduced by this work)

- `npm run lint` fails on an ESLint 9 / `@typescript-eslint` incompatibility
  (TypeError) in files like `Redirect.tsx` / `MailerLiteEmbed.tsx`. This predates the
  refactor and is unrelated to it. `npm run build` (TypeScript) passes.

## Repo hygiene during this work

- `dist/` is TRACKED (not gitignored); builds dirty it — never commit dist changes
  (`git checkout -- dist`).
- Unrelated untracked `MAIL-IG-RESET.md` must stay out of all commits.
- All implementer commits stage explicit paths only — never `git add -A`.
