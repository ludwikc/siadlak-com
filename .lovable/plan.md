

# Replace all em dashes (—) with hyphens (-) across the project

## Scope
30 source files with ~2425 occurrences of `—` (em dash) to replace with `-` (hyphen).

## Affected files
All `.tsx` and `.ts` files in `src/` containing em dashes — primarily in copy/text content across pages, components, and data files. Key files include:

- `src/pages/Index.tsx` — homepage copy
- `src/pages/About.tsx` — bio/story
- `src/pages/Wspolpraca.tsx` — hub page
- `src/pages/Discovery.tsx` — discovery page
- `src/pages/Program.tsx` — programs
- `src/pages/MCT.tsx`, `SilnaGlowa.tsx`, `MeskiKompas.tsx`, etc. — program pages
- `src/pages/WebinarDepresja.tsx`, `WebinarMeskiKompas.tsx`, etc. — webinar pages
- `src/components/discovery/*`, `src/components/oto/*`, `src/components/sections/*` — section components
- `src/data/course-objections.ts` — FAQ data
- `src/pages/help/*` — help subpages

## Approach
Simple find-and-replace: every `—` → `-` in each file. No logic changes, no structural modifications. Pure text substitution.

## Risk
None — this is a cosmetic typography change. No code logic is affected.

