

# Faza 1: Hero + Rozpoznanie + Dlaczego inne nie zadziałały

## Zakres zmian: linie 80-565

### 1. Dane (linie 80-134)

**Testimonials** (linie 81-100) — zaktualizować cytaty z kontekstem tożsamości:
- "Tomek, 38 lat, CTO startupu, ojciec dwójki" zamiast "CEO, 8-cyfrowe przychody"
- "Klientka Life OS" zamiast "Założycielka tech startup / €2M ARR"
- Dodać cytat Anny ("Zapytał: 'Ile podatku płacisz...'")

**FAQ** (linie 103-134) — zastąpić 6 pytań nowymi 7 z pełnymi odpowiedziami w tonie Ludwika (zgodnie z copy). Kluczowe dodanie: "A co jeśli znowu zainwestuję i znowu nic się nie zmieni?"

### 2. Hero (linie 170-240)

- Usunąć badge "Premium System Upgrade" z ikoną Crown
- Dodać nad tytułem: eyebrow "TYLKO 5 MIEJSC JEDNOCZEŚNIE" (text-xs uppercase tracking-[0.2em] text-electric)
- Zmienić subtitle na: "Nie kolejna aplikacja mentalna. Cały nowy system operacyjny."
- Dodać pod subtitle prose: "8 tygodni pracy 1:1 ze mną. Dla tych, którzy przeglądali programy..."
- Zamienić 3 Feature Pills ("8 tygodni", "Elite Cohort", "Life Transformation") na prosty tekst: "8 tygodni · 1:1 z Ludwikiem · Maksymalnie 5 osób"
- CTA: zachować "Sprawdź dostępność — Sesja Discovery", dodać drugi link "Dla kogo to NIE jest" (anchor do #nie-dla-ciebie)

### 3. Rozpoznanie (linie 242-388)

Zastąpić całą sekcję prostym prose w `max-w-3xl mx-auto`:
- Usunąć karty z ikonami Trophy i AlertTriangle
- Usunąć kartę "Windows 98" z ikoną Download
- Usunąć `BeforeAfterSlider`
- Nowa struktura: heading "Rozpoznajesz ten stan?" + prose paragraphs z nowym copy
- "Część Ciebie → Część Ciebie" zachowane ale jako prose, nie w karcie
- "Próbowałeś to rozwiązać:" zachowane ale bez kart — proste `<p>` z pogrubieniem i strzałką
- Zamknięcie: "Problem leży na poziomie tożsamości. Na suknie, które nałożyłeś na diament..."

### 4. Dlaczego inne nie zadziałały (linie 390-565)

Zastąpić karty z X-ikonkami prose paragraphs:
- Usunąć badge z glow i ikoną Target
- Heading: "Dlaczego to, co próbowałeś, nie zadziałało?" (zachowane)
- 4 paragraphs prose (Coaching, Terapia, Kursy, Duchowość) — każde zaczyna od pogrubionego tytułu, acknowledge + zakwestionowanie
- Humor: "Zen na macie, chaos w Excelu", "Mógłbyś napisać o sobie pracę magisterską"
- Podsumowanie: prose zamiast karty — "Żadne nie zmienia sukna. A problem jest w suknie."
- Usunąć gradient orb dekoracyjny (linia 393)

### 5. Cleanup importów (Faza 1 only)

- Usunąć: `Trophy`, `AlertTriangle`, `Download`, `Target`, `Sparkles`, `Crown`
- Usunąć: `BeforeAfterSlider` import
- Zachować: `X` (używane później w FAQ), pozostałe ikony

### Pliki do edycji

Tylko `src/pages/LifeOSSystemUpgrade.tsx` — linie 1-565.

