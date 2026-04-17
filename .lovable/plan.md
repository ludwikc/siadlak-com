

## Plan: Add /program/ttt-ai page

### 1. Create new page `src/pages/TrainTheTrainerAI.tsx`

Build a long-form sales page following the existing program-page pattern (e.g. `HakowanieProduktywnosci.tsx`, `SiedemTechnik.tsx`). The copy provided is preserved verbatim — I will only split it into typed React sections, never edit wording.

Sections (top → bottom), all using existing brand utilities (`bg-void-glow`, `bg-diamond`, `bg-brand-gradient`, `Card`, `Button`, lucide icons):

1. **Hero** (`bg-void-glow`, dark) — Title "TRAIN THE TRAINER: AI", subtitle "Prywatny, 8-tygodniowy mentoring 1:1…", credentials line about MCT/US Army, primary CTA "Zapisz się na rozmowę kwalifikacyjną →" → `/discovery`.
2. **"Zacznijmy od prawdy, która boli"** — narrative section, light bg.
3. **"Przepaść, w której leżą pieniądze"** — narrative with pull-quote on key line.
4. **"Dla kogo to jest" / "Dla kogo to nie jest"** — two-column grid with check/x icons.
5. **"Co to właściwie jest"** — 4 numbered pillar cards.
6. **"Metoda: Protokół Pomostu™"** — table (POMOST acronym, 6 rows) rendered as a styled grid responsive on mobile.
7. **"Program — 8 tygodni"** — 8 expandable/stacked week cards (Tydzień 1…8).
8. **"Co konkretnie dostajesz"** — bullet list with icons (8 items + guarantee callout).
9. **"Co to jest warte"** — ROI breakdown with sub-headings (Zwrot, Return OF, Return ON 2 lata, Wartość radialna, Amplifikator).
10. **"Inwestycja"** — pricing cards: edycja inauguracyjna 7 999 zł (3 miejsca, Q2 2026) vs regularna 24 999 zł (Q3 2026+).
11. **"Dlaczego ja"** — Ludwik bio narrative.
12. **CTA + "Decyzja…"** section — booking process explained, big CTA button → `/discovery`.
13. **FAQ** — using existing `FAQAccordion` with 7 questions from copy.
14. **Closing "Ostatnie słowo"** + final CTA → `/discovery`.
15. `RelatedPrograms` component at bottom.

CTAs all link to `/discovery` (the rozmowa kwalifikacyjna route).

### 2. Wire up routing & SEO

- **`src/App.tsx`** — add `<Route path="/program/ttt-ai" element={<TrainTheTrainerAI />} />` above the catch-all `/program/:courseSlug` route.
- **`src/lib/seo-config.ts`** — add a new `RouteConfig` entry for `/program/ttt-ai` with title "Train The Trainer: AI — Mentoring 1:1 dla ekspertów AI", description summarising the 8-week 1:1 mentoring, type `course`, plus `topical` config (primaryTopic: "AI trainer certification", intent: commercial, significantLinks to `/discovery`, `/program`, `/about`).
- **`src/routes.ts`** — append `/program/ttt-ai` so prerender picks it up.
- **`scripts/prerender.mjs`** — append `/program/ttt-ai` to the static-route list.
- **`public/sitemap.xml`** — add `<url>` entry for `https://siadlak.com/program/ttt-ai`.

### 3. Fix blocking build errors (must do — repo won't build otherwise)

The `BreadcrumbItem` type expects `{ name, path }` but four files pass `{ name, url }`:
- `src/pages/About.tsx` lines 35–36
- `src/pages/Index.tsx` line 99
- `src/pages/Slownik.tsx` lines 115–116

Replace `url:` → `path:` in those breadcrumb item literals (and strip the `https://siadlak.com` prefix if present so values match `path` semantics — verify each call site).

### Notes

- No new images required — page is text-rich; can use lucide icons (`Brain`, `Target`, `Users`, `ShieldCheck`, `Award`, `TrendingUp`, etc.) for visual rhythm.
- All copy preserved verbatim per user instruction. Polish characters written as literals (no `\u…` escapes), per the recent /slownik and /wywiady fixes.
- Using existing components only — no new dependencies.

