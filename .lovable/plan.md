

# Nowa strona `/reset` — Quiz "Otwarte Pętle"

## Podsumowanie

Interaktywny quiz 10 pytań w stylu landing page (bez header/footer). Mobile-first, jedno pytanie na ekran, animacje fade, progress bar, lead capture, ekran wyniku z CTA.

## Nowe pliki

### 1. `src/data/reset-quiz-data.ts`
Tablica 10 pytań (tekst z briefu). Opcje odpowiedzi z wagami (2/1/0). Definicje 3 progów wyniku (0-6, 7-13, 14-20) z nagłówkiem, opisem, kolorem, emoji.

### 2. `src/pages/Reset.tsx`
Główna strona z maszyną stanów: `quiz` → `analyzing` → `lead-capture` → `result`.

**Stan `quiz`:**
- Wyświetla jedno pytanie na raz
- 3 odpowiedzi jako duże klikalne karty (nie radio buttons) z hover microinteractions
- Progress indicator "Pytanie 3/10" + cienki pasek postępu
- Po kliknięciu odpowiedzi: fade-out → 300ms delay → fade-in następne pytanie
- Odpowiedzi zapisywane w state + localStorage

**Stan `analyzing`:**
- Tekst "Analizuję Twoje odpowiedzi…"
- Animowany progress bar (0→100% w 3s)
- Po 3s automatyczne przejście dalej

**Stan `lead-capture`:**
- Formularz: Imię + Email
- Walidacja: oba pola wymagane, email regex
- Przycisk "Zobacz wynik"

**Stan `result`:**
- Wynik na podstawie sumy punktów (3 progi z kolorami)
- Nagłówek + opis + punktacja
- CTA button "Zrób pełny reset systemu" (link do `/program/produktywnosc` lub external)

**Design:**
- Ciemne tło (`bg-void-glow` / surface-dark)
- Duża typografia, wycentrowany kontent, max-w-2xl
- Animacje: existing `animate-fade-in` + custom fade-out via CSS class toggle
- Mobile-first: pełna szerokość kart, duży tap target

### 3. Zmiany w istniejących plikach

**`src/App.tsx`:** Dodanie route `/reset` → `<Reset />`

**`src/lib/landing-pages.ts`:** Dodanie `/reset` do `LANDING_PAGES` (ukrycie header/footer)

## Szczegóły techniczne

- Brak zewnętrznych zależności — wykorzystujemy istniejące komponenty (Button, Input, Progress) i animacje Tailwind
- localStorage key: `reset-quiz-answers` — zapis tablicy odpowiedzi po każdym pytaniu
- Formularz lead capture: na razie tylko frontend (bez wysyłki na backend) — łatwe do podpięcia później
- SEO: komponent `<SEO>` z noindex (landing page)

