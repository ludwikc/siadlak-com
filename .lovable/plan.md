
# Aktualizacja copy: Program Odporność Psychiczna (Silna Głowa)

## Zakres zmian

### 1. Plik: `src/pages/program/SilnaGlowa.tsx` — pełna aktualizacja copy

Kluczowe zmiany treściowe:
- **Hero**: usunięcie badge'a "PRZEDSPRZEDAŻ" i daty "10 stycznia". Zmiana ceny z 777 zł na **897 zł**. Dodanie brakujących social proof pills (Ocena 5.0/5.0, Dostęp natychmiastowy, 30 dni gwarancji). Usunięcie strikethrough "12 000 zł → 777 zł".
- **Definicja**: Aktualizacja opisu — dodanie "6 modułów. 36 lekcji po ~10 minut. Razem 6 godzin nagrań". Zmiana daty aktualizacji na 5 maja 2026. Zmiana ceny na 897 PLN, oceny na 5.0/5.0. Dodanie "~6 godzin nagrań" do czasu trwania.
- **Problem section**: Dodanie brakującego tekstu o układzie nerwowym ("a Twój układ nerwowy nie zdążył się do tego dostosować").
- **Boat metaphor**: Bez zmian — tekst się zgadza.
- **Adversity section**: Bez zmian — tekst się zgadza.
- **Author section**: Usunięcie "Przedsprzedaż trwa tylko do 10 stycznia!". Dodanie brakującego tekstu o "taką samą szansę na bogactwo".
- **Benefits/Transformacja**: Aktualizacja na 6 kroków zamiast 5 (dodanie kroku 3 "Przekujesz zagrożenie w wyzwanie", przesunięcie pozostałych). Nowe opisy kroków zgodne z nowym copy.
- **Course modules**: Aktualizacja opisów modułów, dodanie metadanych "1 tydzień / 6 lekcji" do każdego modułu. Nowy nagłówek "6 modułów. 36 lekcji po ~10 minut. 6 tygodni do trwałej zmiany."
- **Pricing**: Zmiana ceny na 897 zł. Zmiana tekstu referencji mentoringu ("referencja, nie dyskonto — to inny produkt"). Dodanie "Live Q&A ze mną: 1 500 zł" i "Społeczność wsparcia (grupa Mastermind): bezcenne" do value stack. Dzienne rozbicie: "2,46 zł" (897/365).
- **Objections**: Zastąpienie accordion-based `SILNA_GLOWA_OBJECTIONS` na nowe inline objections (4 pytania z nowymi odpowiedziami, m.in. raty 0% przez Przelewy24/Stripe, link do Discovery).
- **Final CTA**: Usunięcie "Przedsprzedaż trwa tylko do 10 stycznia!".
- **FAQ**: Aktualizacja na 3 nowe pytania z nowym copy (Kiedy dostanę kurs?, Jak długo?, Jakieś bonusy?). Treść bonusów bez wzmianki o "przedsprzedaży".
- **LifehackerzySection**: Dodanie `<LifehackerzySection />` po sekcji modułów (po "najbardziej wspierającej załogi"), przed sekcją pricing — analogicznie do stron Produktywność i Uważność.

### 2. Plik: `src/data/course-objections.ts`

Usunięcie `SILNA_GLOWA_OBJECTIONS` — te objections nie będą już potrzebne, bo nowe copy definiuje 4 inline objections bezpośrednio w komponencie strony (bez accordion, jako karty z pytaniem i odpowiedzią).

### 3. Plik: `src/pages/program/SilnaGlowa.tsx` — SEO metadata

- Aktualizacja `getReviewSchema` — zmiana `ratingValue` na 5.0, usunięcie `reviewCount: 118`.
- Aktualizacja FAQ schema na nowe pytania.

### Szczegóły techniczne

- Import `LifehackerzySection` z `@/components/sections/LifehackerzySection`
- Usunięcie importu `SILNA_GLOWA_OBJECTIONS` z course-objections
- Objections section zmienia się z accordion na inline karty — usunięcie nieużywanego `Accordion*` importu jeśli nie potrzebny
- Cena w `ctaUrl` się nie zmienia (ten sam checkout link)
- Unicode escapes (`\u201E`, `\u201D`) dla polskich cudzysłowów w string literals
