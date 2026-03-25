

# Homepage Copy Update — Implementation Plan

## Summary

9 changes to `src/pages/Index.tsx` (819 lines). No new files. No new dependencies.

## Phases

### Phase 1: Hero (lines 74-130)
- Replace h1 copy: "Znasz ten moment..." → "Masz wszystko, czego potrzebujesz..."
- Replace body text with new intro paragraph + bold line
- Change CTA from single "PRACUJ ZE MNĄ 1:1" to dual: "SPRAWDŹ DOSTĘPNOŚĆ — Sesja Discovery →" (primary) + "ZOBACZ PROGRAMY →" (secondary, links to `/program`)

### Phase 2: Testimonial Marquee (lines 132-164)
- Replace 5 testimonials with 7 new ones (including Łukasz/ADHD, Anna/CEO, Artur/ojciec, plus the existing Paweł, Betty, Adam, Yasith)
- Each testimonial separated by ◆ diamond separator (already in place)

### Phase 3: Diagnoza (lines 198-253)
- Add humor parenthetical to first bullet: "(Mam je na półce. Wszystkie. Niektóre nawet przeczytane.)"
- Change "Headspace'em i Calmem" → "medytacją i mindfulness" (more universal)
- Keep structure otherwise identical

### Phase 4: Autorytet (lines 255-321)
- Add "10 000+" (plus sign) to the number
- Add humor line at end of prose: "(I tak — to wciąż trochę irytujące. Moi Klienci potwierdzą.)" — already present, keep
- Testimonials grid (lines 298-321): keep as-is (already matches new copy)

### Phase 5: Life OS Offer (lines 386-465)
- Add REMIND paragraph after pricing card: "Zanim popatrzysz na liczbę..." (value-based framing)
- Add virtuous price cycle paragraph: "Jest jeszcze jeden powód..."
- Add link to full program page: "Pełny opis programu i metodologii →" → `/program/lifeos-system-upgrade`
- Update pricing card: add "Możliwość rozłożenia na 2 raty" to footer text
- Keep Anna testimonial, replace Bergen testimonial with the Anna one being the only one here (remove duplicate)

### Phase 6: Proof Section (lines 468-500)
- Change heading: "zdjęli sukno" → "zmienili tło"
- Replace 4 testimonials with new unique ones: Łucja/RefSpace, Klientka Life OS (decyzyjność), Tomek/CTO, Klient Life OS (sobota z rodziną)
- Remove Anna duplicate (she's already in Offer section)

### Phase 7: Qualification (lines 502-577)
- Update "nie dla ciebie" bullet 2: "Potrzebujesz kogoś, kto powie Ci, że jest okej" → "Chcesz gotową receptę z pudełka — 7 kroków, PDF, certyfikat na ścianę"
- Add bullet 3: "Nie jesteś gotów zobaczyć tego, co zobaczysz"
- Update "dla ciebie" bullet 3: add "i bez brutalnej konfrontacji"

### Phase 8: Scarcity CTA (lines 579-620)
- Add Discovery context paragraph: "Zanim cokolwiek zdecydujemy — 30 minut na Zoom..."
- Keep CTA button text as "ZAREZERWUJ SESJĘ DISCOVERY →"
- Keep 30 MIN · BEZ SPRZEDAŻY · BEZ OBIETNIC footer

### Phase 9: Downsell + Newsletter + Closing (lines 622-814)
- **Downsell**: Add placeholder testimonial (Program → Life OS journey)
- **Produktywność card**: Add "1 240+ osób zainstalowało." line
- **Newsletter**: Expand copy with "algorytm vs. email" hook + "150+ osób czyta. Zero spam." footer
- **Remove "OTWARTA PRZYŁBICA"** section (lines 773-814) — replace with P.S. ladder (3 post-scripts) + "— Ludwik" sign-off on `bg-void-glow`

## Technical Details

- Single file edit: `src/pages/Index.tsx`
- No import changes needed (all assets already imported)
- No component API changes
- Testimonial deduplication: each quote appears exactly once across the page
- All links use existing routes (`/discovery`, `/program`, `/program/lifeos-system-upgrade`, `/newsletter`)

