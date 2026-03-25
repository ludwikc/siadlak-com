

# New Page: /start (Współpraca Hub)

## Summary
Create a new hub page at `/start` with all collaboration options organized by engagement level. Update header navigation and routing.

## Files to Create/Edit

### 1. Create `src/pages/Wspolpraca.tsx`
New page component using `Layout` wrapper (with header/footer). Sections:

- **Hero**: H1 "Wszystko w jednym miejscu." + intro paragraph. Dark bg (`bg-void-glow`).
- **Bezpłatnie**: 3-column grid (desktop) / stack (mobile) with cards for Newsletter (📬), Uważne Życie meditations (🧘), DeepWork.pl (🖥️). Light bg (`bg-diamond`).
- **Programy**: Intro text + 4 program cards using existing program images (`programProduktywnosc`, etc.) with prices. 2×2 grid desktop, stack mobile. Dark bg. Link to `/program` + Lifehackerzy note at bottom.
- **Premium**: Single highlighted card for Life OS (16K PLN) with Discovery CTA. Visually distinct — border-electric, larger padding. Dark bg with accent border.
- **"Nie wiesz, od czego zacząć?"**: 4 conditional recommendations with bold lead-ins and inline links. Light bg, prominent padding.
- **Kontakt**: Short paragraph + CTA link to `/contact`.
- **P.S.**: Closing note + "— Ludwik" sign-off.

Uses existing components: `Layout`, `SEO`, `Link`, `TheCut` divider pattern, program image imports. Card styling follows Diamond Hybrid system (rounded-md, no shadows except CTAs).

### 2. Edit `src/App.tsx`
- Import `Wspolpraca` component
- Add route: `<Route path="/start" element={<Wspolpraca />} />`

### 3. Edit `src/components/layout/Header.tsx`
- In desktop dropdown: replace "Więcej ≫" footer link with `<Link to="/start">Wszystkie możliwości →</Link>`
- In mobile menu: same replacement

### 4. Edit `src/routes.ts`
- Add `/start` to static routes array

### 5. Edit `src/lib/seo-config.ts`
- Add SEO config entry for `/start` with title "Współpraca — Ludwik C. Siadlak" and appropriate description

## Technical Notes
- Page uses standard `Layout` (header + footer visible — NOT a landing page)
- Program card images reuse existing assets from `src/assets/`
- External links (deepwork.pl, uwaznezycie.pl, lifehackerzy.pl) open in new tab
- All internal links use React Router `Link`
- Emoji used as functional card icons with `aria-hidden="true"`

