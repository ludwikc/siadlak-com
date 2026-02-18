

# Audyt Wizualny i Dostepnosci -- Strona Glowna (Index.tsx)

## RAPORT BLEDOW

---

### KRYTYCZNE

---

**BLAD K1 -- Legacy Hero.tsx: kolory spoza Brand Booka**

- [LOKALIZACJA] `src/components/sections/Hero.tsx`, linie 49, 56-57, 94, 104
- [PROBLEM] Komponent Hero.tsx (uzywany na podstronach, NIE na glownej, ale istnieje w projekcie) zawiera legacy tokeny: `deep-space`, `deep-charcoal`, `neural-blue`, `twilight-indigo`, `zenith-gold`. Te kolory nie istnieja w Brand Booku. Jezeli jakakolwiek podstrona uzywa tego komponentu, laczy niestandardowe kolory z nowym designem.
- [PRIORYTET] Krytyczny
- [POPRAWKA] Pelna migracja Hero.tsx: usunac `deep-space`, `deep-charcoal`, `neural-blue`, `twilight-indigo`, `zenith-gold`. Zastapic: tlo gradient -> `bg-void-glow`, tekst tytulu -> `text-white`, subtitle -> `text-dim`, gradient tekstu -> `bg-brand-gradient` + `bg-clip-text text-transparent`.

---

**BLAD K2 -- Copyright: text-on-light-dim na ciemnym tle (#2F0F43)**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 875
- [PROBLEM] `text-on-light-dim` (#4B5563 -- ciemny szary) uzyty na tle `#2F0F43` (ciemny fiolet). Kontrast ~1.8:1 -- calkowicie nieczytelny. Narusza WCAG AA.
- [PRIORYTET] Krytyczny
- [POPRAWKA] Zmienic na `text-dim` (#9CA3AF) lub `text-white/50`. Brand Book: tekst na ciemnym tle -> `--text-on-dark` lub `--text-dim`.

---

**BLAD K3 -- Downsell Separator: tlo spoza Brand Booka**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 698
- [PROBLEM] `bg-gradient-to-b from-gray-50 to-white` -- uzywa Tailwind `gray-50` (#F9FAFB) i `white` (#FFFFFF). Chocia kolory sa bliskie Brand Bookowi, gradient nie jest zdefiniowany w systemie. Brand Book definiuje tylko: `--diamond-light` (#F9FAFB) i `white` dla kart.
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic na `bg-diamond` (jednorodne tlo) lub `bg-paper` -- bez gradientu miedzy dwoma odcieniami bieli.

---

### WYSOKIE

---

**BLAD W1 -- Kolor tla Closing Footer: #2F0F43 spoza Brand Booka**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 838
- [PROBLEM] `backgroundColor: "#2F0F43"` -- ten kolor nie istnieje w Brand Booku. Dozwolone tla ciemne to wylacznie `--void-black` (#080808). Niestandardowy fioletowy kolor lamie spojnosc systemu.
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic na `bg-void-glow` (ktory daje subtelny fioletowy glow na #080808) lub uzyc `bg-void` z dekoracyjnym blobem `bg-depth/20`.

---

**BLAD W2 -- Kolor tla Scarcity: #D7D6CF spoza Brand Booka**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 646
- [PROBLEM] `backgroundColor: "#D7D6CF"` -- cieploszary, nie zdefiniowany w Brand Booku. Dozwolone tla jasne: `--diamond-light` (#F9FAFB) lub `white` (#FFFFFF).
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic na `bg-diamond` (#F9FAFB). Ewentualnie jesli efekt wizualny z foto jest krytyczny, uzyc `bg-paper` z lekkim overlayem.

---

**BLAD W3 -- TestimonialCard: rounded-xl (12px) zamiast dozwolonych wartosci**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 44 (komponent TestimonialCard)
- [PROBLEM] `rounded-xl` odpowiada ~12px. Brand Book definiuje: 4px (btn), 8px (card). 12px nie jest dozwolone.
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic `rounded-xl` na `rounded-md` (8px = `--border-radius-md`).

---

**BLAD W4 -- Pricing card: rounded-2xl (16px)**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 483 i 683
- [PROBLEM] `rounded-2xl` = 16px. Brand Book: max border-radius dla kart = 8px.
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic na `rounded-md` (8px).

---

**BLAD W5 -- Case Study card: rounded-xl**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 405
- [PROBLEM] `rounded-xl` = 12px na karcie Case Study. Niezgodne z Brand Book (max 8px dla kart).
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic na `rounded-md`.

---

**BLAD W6 -- Featured program card i CTA card: rounded-2xl**

- [LOKALIZACJA] `src/pages/Index.tsx`, linie 725 (Uwazne Zycie card), 772 (program cards `rounded-xl`)
- [PROBLEM] Karty programow uzywaja `rounded-2xl` (16px) i `rounded-xl` (12px). Brand Book: 8px.
- [PRIORYTET] Wysoki
- [POPRAWKA] Zunifikowane na `rounded-md` (8px).

---

**BLAD W7 -- Guarantee box: rounded-xl i shadow-sm**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 605
- [PROBLEM] `rounded-xl` (12px) i `shadow-sm` -- Brand Book definiuje 8px (`rounded-md`) i cienie tylko w `.btn-primary` i `.light-card`.
- [PRIORYTET] Wysoki
- [POPRAWKA] Zmienic na `rounded-md`. Cien moze zostac jesli traktujemy to jako `.light-card`.

---

**BLAD W8 -- Inline style `backgroundColor: "#080808"` zamiast klasy**

- [LOKALIZACJA] `src/pages/Index.tsx`, linie 212, 372
- [PROBLEM] Inline style `style={{ backgroundColor: "#080808" }}` obok klasy `bg-void`. Redundancja -- klasa `bg-void` juz ustawia ten kolor. Inline style jest niezgodny z konwencja (kolory powinny byc przez tokeny CSS/Tailwind).
- [PRIORYTET] Wysoki
- [POPRAWKA] Usunac inline style, pozostawic `bg-void` lub `bg-void-glow`.

---

**BLAD W9 -- border-gray-200 zamiast tokenu Brand Book**

- [LOKALIZACJA] `src/pages/Index.tsx`, linie 49, 474, 569, 635, 829
- [PROBLEM] `border-gray-200` nie jest kolorem z Brand Booka. Dozwolone: `border-white/10` (dark), `border-border` (light).
- [PRIORYTET] Wysoki
- [POPRAWKA] Na jasnych tla zastapic na `border-border/50` lub `border-on-light/10`. W TestimonialCard linia 49 `border-gray-200/50` -> `border-border/50`.

---

**BLAD W10 -- Brak widocznego focusu klawiaturowego na CTA linkach**

- [LOKALIZACJA] `src/pages/Index.tsx`, linie 148-153, 496-501, 684-689, 827-832
- [PROBLEM] Linki stylizowane jako przyciski (`<Link>` i `<a>`) nie maja jawnych styli `focus:` ani `focus-visible:`. Brand Book wymaga widocznego focusu (WCAG 2.1 AA 2.4.7).
- [PRIORYTET] Wysoki
- [POPRAWKA] Dodac `focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2` do kazdego interaktywnego elementu.

---

### NISKIE

---

**BLAD N1 -- Eyebrow: text-depth na ciemnym tle**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 294 (`<Eyebrow color="depth">AUTORYTET</Eyebrow>`)
- [PROBLEM] `text-depth` (#6D28D9) na `bg-void` (#080808). Kontrast ~3.4:1. Przechodzi dla duzego/bold tekstu (jest `text-xs font-bold uppercase`), ale jest na granicy. WCAG wymaga 3:1 dla tekstu >= 18px bold, a `text-xs` = 12px.
- [PRIORYTET] Niski (tekst jest dekoracyjny/eyebrow, ale formalnie narusza AA)
- [POPRAWKA] Per standard WCAG: zmienic `color="depth"` na `color="electric"` (kontrast ~4.6:1) lub `color="dim"`.

---

**BLAD N2 -- Eyebrow w OFFER #2: text-depth na bg-white**

- [LOKALIZACJA] `src/pages/Index.tsx`, linia 714
- [PROBLEM] `<Eyebrow color="depth">` na `bg-white`. Kolor `text-depth` (#6D28D9) na bialym tle daje kontrast ~6.5:1 -- OK. Nie jest bledem. (Informacyjnie.)
- [PRIORYTET] Brak bledu

---

**BLAD N3 -- Czerwony kolor (text-red-500, text-red-400) spoza palety**

- [LOKALIZACJA] `src/pages/Index.tsx`, linie 235, 579
- [PROBLEM] `text-red-500` i `text-red-400` nie sa zdefiniowane w Brand Booku. Uzywane jako ikony "X" (odrzucenie).
- [PRIORYTET] Niski (semantyczne uzycie koloru bledu)
- [POPRAWKA] Zastapic tokenem `text-destructive` (ktory jest zmapowany na `--color-error: 0 84% 60%` = #EF4444 ~ red-500). Zachowuje semantyke, ale uzywa tokenu systemowego.

---

**BLAD N4 -- Body: glow-gradient na jasnym tle globalnym**

- [LOKALIZACJA] `src/index.css`, linia 164
- [PROBLEM] `background-image: var(--glow-gradient)` ustawiony globalnie na body z `background-attachment: fixed`. Glow gradient jest subtelny, ale moze byc widoczny na jasnych sekcjach (bg-diamond, bg-paper), gdzie Brand Book nie przewiduje takich efektow.
- [PRIORYTET] Niski
- [POPRAWKA] Rozwazyc usuniecie `background-image` z body i stosowanie `bg-void-glow` tylko na ciemnych sekcjach, jak to juz jest robione w Index.tsx.

---

**BLAD N5 -- Duplikacja :root w CSS**

- [LOKALIZACJA] `src/index.css`, linie 20-157 i 204-298
- [PROBLEM] Zmienne CSS sa zdefiniowane dwukrotnie w dwoch blokach `:root`. Druga deklaracja (wewnatrz `@layer base`) nadpisuje pierwsza. Nie powoduje bledu wizualnego, ale jest bledem technicznym i utrudnia utrzymanie.
- [PRIORYTET] Niski
- [POPRAWKA] Polaczyc oba bloki `:root` w jeden.

---

**BLAD N6 -- Heading hierarchy: brak h3 po h2 w niektorych sekcjach**

- [LOKALIZACJA] `src/pages/Index.tsx`, sekcja Proof (linia 531) uzywa `<h3>` bezposrednio, co jest poprawne. Ale sekcja Offer #2 (linia 737) uzywa `<h3>` wewnatrz sekcji z `<h2>` -- to jest poprawne. Ogolnie hierarchia jest zachowana.
- [PRIORYTET] Brak bledu

---

## PODSUMOWANIE POPRAWEK

| Priorytet | Liczba | Glowne obszary |
|-----------|--------|----------------|
| Krytyczny | 2 | Legacy Hero.tsx, copyright contrast |
| Wysoki | 10 | Niestandardowe kolory tla (#2F0F43, #D7D6CF), border-radius, border-gray, focus states, inline styles |
| Niski | 5 | Eyebrow depth contrast, red tokens, body glow, CSS duplication |

## PLAN IMPLEMENTACJI

### Faza 1: Krytyczne (natychmiastowe)

1. **Hero.tsx** -- pelna migracja legacy tokenow (deep-space, neural-blue, twilight-indigo, zenith-gold, deep-charcoal) na tokeny Diamond Hybrid
2. **Closing Footer copyright** (linia 875) -- `text-on-light-dim` -> `text-dim`

### Faza 2: Wysokie

3. **Index.tsx linia 838** -- `#2F0F43` -> `bg-void-glow`
4. **Index.tsx linia 646** -- `#D7D6CF` -> `bg-diamond`
5. **Index.tsx linia 698** -- `from-gray-50 to-white` -> `bg-diamond`
6. **Index.tsx** -- wszystkie `rounded-xl` i `rounded-2xl` na kartach -> `rounded-md`
7. **Index.tsx** -- usunac inline `backgroundColor: "#080808"` z linii 212, 372
8. **Index.tsx** -- `border-gray-200` -> `border-border/50` (5 wystapien)
9. **Index.tsx** -- dodac `focus-visible:ring-2 focus-visible:ring-electric` do 4 CTA linkow/przyciskow

### Faza 3: Niskie

10. **Index.tsx linia 294** -- Eyebrow `color="depth"` -> `color="electric"`
11. **Index.tsx** -- `text-red-500`/`text-red-400` -> `text-destructive`
12. **index.css** -- usunac duplikat `:root`, usunac `background-image` z body

### Szacowany zakres

- **Index.tsx**: ~25 zmian (linie replace)
- **Hero.tsx**: ~15 zmian (pelna migracja)
- **index.css**: ~2 zmiany (deduplikacja, body background)

