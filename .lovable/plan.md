

# Uproszczenie kolorow na stronie /program/hakowanie-produktywnosci

## Problem

Strona uzywa ~25 kolorow spoza Brand Booka: red, orange, green, yellow, pink, rose, indigo, color-success, color-info, color-warning, color-error. Brand Book dopuszcza tylko 7 tokenow: void (#080808), electric (#007AFF), depth (#6D28D9), diamond (#F9FAFB), text-on-dark (#F3F4F6), text-on-light (#111827), text-dim (#9CA3AF).

## Zasada mapowania

Wszystkie kolory semantyczne zostana zastapione tokenami Brand Booka:
- **Czerwone/pomaranczowe** (problemy, bledy, mity) -> `text-dim` (neutralny) lub brak koloru (czarny tekst na bialym tle)
- **Zielone** (sukces, prawda, weryfikacja) -> `electric` (#007AFF)
- **Zolte** (gwiazdki, ostrzezenia) -> `electric` lub `depth`
- **Rozowe/fioletowe/indigo** (gradienty modulow) -> `from-electric to-depth` (brand gradient)
- **Szare Tailwind** (gray-100/600/700) -> `muted`/`muted-foreground` (dozwolone tokeny shadcn)

## Sekcja "Otrzymujesz" (linie 924-1051)

BEZ ZMIAN -- uzytkownik potwierdzil, ze jest OK.

---

## Szczegoly zmian

### Sekcja 1: Problem Agitation (linie 134-327)

**Kategorie problemow (Focus/Action/Energy):**
- Usunac ikony kategorii w kolorowych kolkach (red, orange) -> jedna spojny styl: `bg-electric/10` + `text-electric`
- Karty problemow: usunac `border-red-100/200`, `border-orange-100` -> `border-muted`
- Usunac inline `style={{ background: linear-gradient(135deg, rgba(239,68,68,...)) }}` -> bez inline stylu, czyste `bg-white`
- Usunac paski intensywnosci (czerwone/pomaranczowe progress bars, linie 179-184, 238-242, 287-292) -> calkowicie usunac te elementy dekoracyjne
- Ikony problemow: `text-red-600`, `text-orange-600`, `text-red-700` -> `text-dim`
- Tla ikon: `bg-red-100/200`, `bg-orange-100` -> `bg-muted`
- Usunac `group-hover:animate-pulse` i `group-hover:scale-110` na ikonach
- Usunac `hover:-translate-y-1` i `hover:shadow-lg` na kartach

**Empathy box (linie 308-324):**
- Usunac glow `absolute -inset-1 bg-gradient-to-r... blur` (linia 309)
- `border-2 border-electric/20` -> `border border-muted`

### Sekcja 2: Enemy/Context (linie 329-396)

- `border-l-color-warning` (linia 418 w Solution, ale dotyczy tej sekcji) -> `border-l-electric`
- Sekcja jest w zasadzie OK, uzywa `text-electric`, `glass-card`

### Sekcja 3: Solution Introduction (linie 398-446)

- `border-l-color-warning` (linia 418) -> `border-l-depth`
- `text-color-error` (linia 426) -> `text-foreground font-bold` (pogrubienie zamiast czerwieni)
- `from-electric/20 to-depth/20` na dole (linia 433) -> OK, to brand gradient

### Sekcja 4: Benefits/Future Vision (linie 448-648)

**Dream Benefits Grid (linie 469-515):**
- Usunac indywidualne `gradient` prop z kazdego benefitu (`from-purple-500/10`, `from-blue-500/10`, `from-green-500/10`, `from-orange-500/10`, `from-pink-500/10`)
- Karty: `bg-gradient-to-br ${benefit.gradient}` -> czyste `bg-white`
- `hover:shadow-xl hover:-translate-y-2` -> usunac
- `border-gray-100 hover:border-electric/30` -> `border-muted hover:border-electric/30`
- Hover sparkle efekt (linie 508-511) -> usunac

**Transformation Benefits (linie 517-625):**
- Badge "Konkretne rezultaty": `from-color-success/20 to-color-info/20` -> `from-electric/10 to-depth/10`
- `text-color-success` (ikony, tekst, badge) -> `text-electric`
- Karty: `from-color-success/5 to-color-success/10` -> czyste `bg-white` lub `bg-card`
- `hover:shadow-xl hover:shadow-color-success/10 hover:scale-[1.02]` -> usunac nadmierne hover
- Overlay na hover (linia 587) -> usunac
- Progress bar na hover (linie 615-620) -> usunac
- `text-color-info` (ThumbsUp ikony) -> `text-electric`
- Checkmark circles `bg-color-success/10` -> `bg-electric/10`

**"Dodatkowo zyskasz" box (linie 627-645):**
- `from-color-success/10 to-color-info/10` -> `from-electric/10 to-depth/10`

### Sekcja 5: Program Modules (linie 650-854)

**Karty modulow (linie 711-851):**
- 6 roznych gradientow modulow (`from-purple-500 to-purple-600`, `from-blue-500 to-blue-600`, `from-green-500 to-green-600`, `from-orange-500 to-yellow-500`, `from-pink-500 to-rose-600`, `from-indigo-500 to-purple-600`) -> wszystkie na `from-electric to-depth` (brand gradient)
- Karty: `rounded-2xl sm:rounded-3xl` -> `rounded-md` (8px)
- `hover:shadow-2xl hover:-translate-y-2` -> usunac
- SVG progress arc (linie 795-809) -> usunac
- `group-hover:scale-110` na ikonach -> usunac
- Meta info: `bg-gray-100` -> `bg-muted`, `text-gray-600/700` -> `text-muted-foreground`
- Install button: `bg-brand-gradient rounded-xl hover:scale-[1.02]` -> `bg-brand-gradient rounded-[4px]` (btn radius)
- Progress badge (linia 779): OK, uzywa electric/depth

**Portal preview (linia 678):**
- `rounded-2xl` -> `rounded-md`
- `shadow-2xl` -> usunac
- `border-depth/20 hover:border-depth/40` -> `border-muted`

**Warning card (linia 688):**
- `border-l-color-warning` -> `border-l-depth`

### Sekcja 6: Testimonials (linie 1133-1322)

**Header badge (linie 1139-1144):**
- `from-yellow-500/20 to-orange-500/20` -> `from-electric/10 to-depth/10`
- `text-yellow-600` (ikona i tekst) -> `text-electric`

**Karty testimoniali (linie 1192-1276):**
- `rounded-2xl` -> `rounded-md`
- `hover:shadow-2xl hover:-translate-y-2` -> usunac
- Gwiazdki: `text-yellow-500 fill-yellow-500` -> `text-electric fill-electric`
- Verified badge: `bg-green-50` + `text-green-600` -> `bg-electric/10` + `text-electric`
- Before/After bar (linie 1230-1244): `from-red-50 to-green-50`, `bg-red-500`, `text-gray-600`, `bg-green-500`, `text-green-700` -> uproscic do `bg-muted`, `text-dim` (before), `text-electric font-bold` (after)
- Quote decoration: `text-depth/20` -> OK
- Hover overlay (linia 1274) -> usunac

**Trust badges (linie 1280-1307):**
- `text-yellow-500` (star) -> `text-electric`
- `text-green-600` (check) -> `text-electric`
- `border-gray-100` -> `border-muted`

### Sekcja 7: Guarantee (linie 1324-1340)

- `from-color-success/10 to-color-info/10` -> `bg-diamond` lub `bg-muted`
- `border-color-success` (border-4) -> `border-electric`
- `text-color-success` (ikona) -> `text-electric`

### Sekcja 8: Objections/FAQ (linie 1342-1449)

**Header badge (linie 1348-1353):**
- `from-orange-500/20 to-red-500/20` -> `from-electric/10 to-depth/10`
- `text-orange-600` -> `text-electric`

**Myth vs Reality karty (linie 1363-1420):**
- `border-gray-200 hover:border-electric/30` -> OK
- `rounded-2xl` -> `rounded-md`
- Icon header: `from-gray-50 to-gray-100` -> `bg-muted`
- Myth box: `bg-red-50`, `border-red-500`, `text-red-600`, `text-red-900` -> `bg-muted`, `border-dim`, `text-dim`, `text-foreground`
- Reality box: `bg-green-50`, `border-green-500`, `text-green-600`, `text-green-900` -> `bg-electric/5`, `border-electric`, `text-electric`, `text-foreground`
- Myth/Reality gradient overlays (linie 1381, 1404 + data `mythColor`/`realityColor`) -> usunac overlaye

### Komponenty zewnetrzne

**ValueCalculator.tsx:**
- `border-l-color-success` -> `border-l-electric`
- `text-color-success` -> `text-electric`
- `text-text-primary` -> `text-foreground` (nieistniejaca klasa!)

**CountdownTimer.tsx:**
- Juz uzywa `text-electric` -- OK

**course-objections.ts:**
- `mythColor` i `realityColor` pola nie beda uzywane po usunieciu overlayow -- mozna zostawic lub usunac

---

## Podsumowanie

| Obszar | Liczba zmian | Glowna zmiana |
|--------|-------------|---------------|
| Problem Agitation | ~20 | Usunac red/orange, intensity bars |
| Benefits | ~25 | color-success/info -> electric |
| Modules | ~15 | 6 gradientow -> 1 brand gradient |
| Testimonials | ~15 | yellow/green -> electric |
| Guarantee | ~3 | color-success -> electric |
| Objections | ~10 | red/green semantic -> neutral/electric |
| ValueCalculator | ~3 | color-success -> electric, fix text-text-primary |

**Pliki do edycji:** `src/pages/HakowanieProduktywnosci.tsx`, `src/components/sales/ValueCalculator.tsx`

**BEZ ZMIAN:** Sekcja "Otrzymujesz" (linie 924-1051), CountdownTimer.tsx, course-objections.ts (dane)

