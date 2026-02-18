
# Poprawka: nieczytelny tekst na jasnych sekcjach strony glownej

## Problem

Klasa `text-on-light` uzywana w ~15 miejscach w `Index.tsx` NIE jest poprawna klasa Tailwind. W konfiguracji `tailwind.config.ts` kolor jest zdefiniowany jako `'text-on-light'`, wiec poprawna klasa to `text-text-on-light` (prefiks `text-` + nazwa koloru `text-on-light`).

Aktualnie tekst wyswietla sie poprawnie tylko dzieki dziedziczeniu z `body { color: hsl(var(--text-on-light)) }` -- ale jest to kruche i moze sie zepsc w roznych kontekstach.

Ten sam problem dotyczy `text-on-light-dim` -- poprawna klasa to `text-text-on-light-dim`.

## Dotkniete elementy

- **h2 "Life OS:"** (linia 446) -- `text-on-light` (no-op)
- **h3 "Glosy tych, ktorzy zdjeli sukno"** (linia 529)
- **h3 "Gwarancja Satysfakcji"** (linia 605)
- **h3 "Uwazne Zycie"** (linia 735)
- **h3 kart programow** (linia 779)
- **h2 "Tylko 5 miejsc jednoczesnie"** (linia 655)
- **h2 "Aplikacje Mentalne"** (linia 713)
- **Komponent TestimonialCard** (linia 50) -- warunkowy `text-on-light`
- **Lista "TO JEST DLA CIEBIE"** (linia 587)
- **Blockquote Lucja** (linia 671)
- **Span "Ludwik"** (linia 636)
- **Em cytatu** (linia 618)
- **Link "POZNAJ PROGRAM"** (linia 741)
- Wiele instancji `text-on-light-dim` (~20+)

## Rozwiazanie

Zamiast naprawiac klasy na `text-text-on-light` (co jest brzydkie i nieintuicyjne), lepsze podejscie to dodanie aliasow kolorow w `tailwind.config.ts`:

```
'on-light': 'hsl(var(--text-on-light))',
'on-light-dim': '#4B5563',
'on-dark': 'hsl(var(--text-on-dark))',
```

Dzieki temu klasa `text-on-light` stanie sie poprawna (`text-` + `on-light`).

## Szczegoly techniczne

### Plik 1: `tailwind.config.ts`

Dodac 3 aliasy kolorow w obiekcie `colors`:
- `'on-light': 'hsl(var(--text-on-light))'` -- alias, zeby `text-on-light` dzialalo
- `'on-light-dim': '#4B5563'` -- alias dla `text-on-light-dim`
- `'on-dark': 'hsl(var(--text-on-dark))'` -- alias dla `text-on-dark`

To jednolinijkowa zmiana, ktora naprawi WSZYSTKIE instancje w calym projekcie bez koniecznosci edycji kazdego pliku.

### Brak zmian w Index.tsx

Zadne pliki stron nie wymagaja edycji -- klasy `text-on-light` i `text-on-light-dim` stana sie automatycznie poprawne po dodaniu aliasow.

## Zakres

- **1 plik**: `tailwind.config.ts` (3 linie dodane)
- **0 zmian** w plikach stron
