## /discovery — mobile world-class dla ruchu z Instagrama

Cel: strona ma czuć się jak natywna kontynuacja IG (avatar Ludwika w hero, jeden mocny testimonial, CTA zawsze pod kciukiem), zgodnie z Diamond Hybrid design system.

### 1. Hero — trust, jasność, jedno kliknięcie (`DiscoveryHero.tsx`)

- **Avatar Ludwika** (`src/assets/LUDWIKCSIADLAK-2025-sq.webp`) — okrągły, 96×96 mobile / 128×128 desktop, wyśrodkowany nad badgem. Alt: „Ludwik C. Siadlak". `loading="eager"` + `fetchpriority="high"` (LCP).
- **Dwa badge'y obok siebie**: „🔥 5 MIEJSC" + „⏱ 30 MIN · BEZPŁATNA" — flex-wrap, gap-2. IG-owy user od razu wie: darmowe, krótkie, ekskluzywne.
- **H1** — usunąć `whitespace-pre-line break-words hyphens-auto` (dwa słowa, zbędne).
- **Social proof pigułki** — na mobile jedna kolumna wyśrodkowana, na `sm:` obok siebie.
- **CTA** — wymiana raw `<button>` z inline-gradientem na `<CTAButton variant="primary" size="xl">` + `w-full sm:w-auto`. Scroll do `#formularz` przez `onClick`.
- **Sub-CTA „Dla kogo to NIE jest"** — bump z `text-sm` na `text-base` (tap target).

### 2. Nowa sekcja: „Głos klienta" pod hero (`DiscoverySocialProof.tsx`)

Jeden mocny testimonial, bez karuzeli. Cytat + imię/rola + 5★.
- Cytat wezmę z istniejącego źródła (`src/data/` lub `Testimonials.tsx`) — dopasowany do sesji 1:1.
- `bg-diamond-light` (light bridge między dark hero a dark „Co się dzieje"), `py-12 sm:py-16`, `max-w-3xl`.

### 3. Sticky bottom CTA (mobile) — `DiscoveryStickyMobileCTA.tsx`

- Fixed bottom, `md:hidden`, `bg-void/95 backdrop-blur`, border-top `border-white/10`, `pb-[env(safe-area-inset-bottom)]`.
- Label: **„Sprawdź dostępność"**. Scroll do `#formularz`.
- Ukryty gdy hero widoczne LUB gdy `#formularz` widoczny (IntersectionObserver).

### 4. Diamond Hybrid compliance

- `DiscoveryAvailabilityCheck.tsx`: raw button → `CTAButton primary xl w-full sm:w-auto`. Wrapper `p-6 sm:p-12`. Usunąć `max-w-md` z listy pytań.
- `DiscoveryLifeOSOffer.tsx`: raw button → `CTAButton` (dług do spłaty, nieużywany w Discovery.tsx obecnie).

### 5. Karty w `Discovery.tsx`

- Karty pytań i kroków: `p-8` → `p-6 sm:p-8` (2 sekcje).
- Karta P.S.: `p-8` → `p-6 sm:p-8`.

### 6. `--header-offset` sanity check

Sprawdzę czy `Layout.tsx` liczy sumę Header + PromoBanner. Jeśli anchor scroll do `#formularz` na mobile ląduje pod barem — dostosuję offset lub dodam `scroll-margin-top` do sekcji.

### Poza scope

- Zmiany kopii (poza drugim badge'em „30 MIN · BEZPŁATNA").
- Inline calendar widget (user wybrał NIE).
- Nowe tracking eventy / UTM.
- Nowe wideo Ludwika.
- Redesign globalnego promo baru.

### Weryfikacja

1. Mobile screenshoty 393×852: hero z avatarem, testimonial, karty, sticky CTA po scrollu, formularz.
2. `tsgo --noEmit` + build.
3. Kliknięcie sticky CTA → smooth scroll do `#formularz`.

### Pliki

**Nowe:** `DiscoverySocialProof.tsx`, `DiscoveryStickyMobileCTA.tsx`
**Edytowane:** `DiscoveryHero.tsx`, `DiscoveryAvailabilityCheck.tsx`, `DiscoveryLifeOSOffer.tsx`, `Discovery.tsx`, opcjonalnie `Layout.tsx`
