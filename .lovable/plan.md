## Plan

1. **Usunąć sekcję ze zdjęciem z `src/pages/program/SilnaGlowa.tsx`** — cofnięcie wcześniej dodanej sekcji "Handwritten Testimonial" oraz import obrazka.

2. **Dodać sekcję ze zdjęciem do `src/pages/Index.tsx`** nad sekcją MECHANIZM (linia 308):
   - Import `jakubGlowaczOpinia` z `@/assets/JakubGlowacz-opinia.webp`
   - Sekcja z `bg-void` (ciemne tło, spójne z otoczeniem)
   - Zdjęcie wyświetlone w 100% widoczności (`object-contain`, `w-full`) — bez przycinania
   - `lazy` loading, odpowiedni alt text po polsku
