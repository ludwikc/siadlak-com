

# Homepage — 3 Additive Changes

## Change 1: New DIAGNOZA header "Plasterki 🩹"
**Location**: Lines 198-201 (Eyebrow + h2 in DIAGNOZA section)

Replace the Eyebrow text and add a new h2 + intro paragraph before the existing "Diament nie potrzebuje kolejnej oprawki" heading. The existing h2 becomes a secondary heading below the new intro.

**Before**:
```
<Eyebrow>DIAGNOZA</Eyebrow>
<h2>Diament nie potrzebuje kolejnej oprawki</h2>
```

**After**:
```
<Eyebrow>PRAWDA, KTÓRĄ JUŻ CZUJESZ</Eyebrow>
<h2>Branża rozwoju osobistego sprzedaje Ci plasterki 🩹</h2>
<p>A Ty masz w sobie diament — jesteś najtwardszą substancją na Ziemi, tylko jeszcze o tym nie wiesz. Problem nigdy nie był w Tobie. Był w tym, co Ci sprzedawano jako „rozwiązanie".</p>
<h3>Diament nie potrzebuje kolejnej oprawki</h3>
```

Rest of the section unchanged.

## Change 2: New "Dwie ścieżki" section
**Location**: Between the Artur testimonial quote (line 371) and TheCut divider (line 376).

Insert a full new section with:
- Eyebrow: "DWIE ŚCIEŻKI"
- h2: "Dwie ścieżki. Jedna decyzja."
- Intro paragraph
- Two sub-sections with emoji headers: 🛡 Ścieżka Wojownika + 🌿 Ścieżka Poszukiwacza
- Each with prose description + mini case study (Anna for Wojownik, Łucja for Poszukiwacz)
- Closing "Skąd wiem, czego potrzebujesz?" bridge paragraph
- Styled on `bg-void-glow` to alternate with surrounding sections

## Change 3: New testimonials bridge header
**Location**: Lines 480-481 (h3 in PROOF SECTION)

Replace the simple heading with an Eyebrow + heading + intro paragraph.

**Before**:
```
<h3>Głosy tych, którzy zmienili tło</h3>
```

**After**:
```
<Eyebrow color="depth">PRAWDZIWE TRANSFORMACJE</Eyebrow>
<h3>To nie są 5-gwiazdkowe opinie. To są prawdziwe zmiany.</h3>
<p>Nie pokażę Ci anonimowych testimoniali z „Dyrektorem Marketingu"... Pokażę Ci prawdziwe historie ludzi... z innym kolorem diamentu.</p>
```

Testimonial cards below unchanged.

## Technical Details
- Single file: `src/pages/Index.tsx`
- No new imports needed (Eyebrow, Link already imported)
- All changes are additive — no existing content removed except two replaced headings
- Estimated ~60 lines added total

