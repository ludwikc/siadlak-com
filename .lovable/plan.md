

## Plan: Rewrite /about page with new copy

### Summary
Complete rewrite of `src/pages/About.tsx`. The new copy replaces guru-positioning with warm, prose-based storytelling centered on the diamond/cloth metaphor. Removes income gatekeeping, bullet-point credentials, and Buffett quote. Adds prose narrative sections with personal story, two paths (Wojownik/Poszukiwacz), and warm closing.

### Architecture

```text
1. HERO (DARK: bg-void-glow)
   - Badge: "19 LAT DOŚWIADCZENIA"
   - h1: "W 2014 roku stałem na peronie metra Dworzec Gdański..."
   - Body: "Miałem wszystko... I absolutnie nic..."
   - No CTA in hero (story-first opening)

2. DROGA — "Historia, której nie planowałem opowiedzieć" (DARK: bg-void)
   - Prose narrative: 16 years old, migraines, kodeina, survival systems
   - Oxford, Microsoft, Fortune 500 → peron 2014
   - Diamond/cloth metaphor callback
   - No bullet points — full prose

--- THE CUT ---

3. DWIE ŚCIEŻKI (LIGHT: bg-diamond)
   - h2: "Dwie ścieżki, jeden cel"
   - Two cards: Ścieżka Wojownika / Ścieżka Poszukiwacza
   - Warm copy (no "brutalna", no "odciągnę skrzydła")
   - "Flex then undercut" — Jung, Faust + "jestem czarną owcą w rodzinie artystów"
   - Closing prose paragraph

--- THE CUT ---

4. DLACZEGO ZAUFAĆ (DARK: bg-void-glow)
   - Split layout: image left, prose right (keep existing image)
   - Prose credentials (not bullet list): Microsoft, Oxford, Fortune 500
   - "Undercut" section: tatuaż Wołanda, buddyzm, rozwód, Machiavelli
   - Discord 12:30 daily presence
   - Bold closing statement

--- THE CUT ---

5. DLA KOGO / NIE DLA KOGO (LIGHT: bg-diamond)
   - Prose format (no bullet lists, no income gatekeeping)
   - "Nie potrzebujesz więcej. Potrzebujesz mniej."
   - Diamond callback

--- THE CUT ---

6. METODA — "Jak to wygląda w praktyce" (DARK: bg-void)
   - Prose: productivity → why → Life OS
   - "Nie dodaję aplikacji — pomagam odinstalować"
   - Diamond/cloth closing metaphor

7. ZDJĘCIE + CTA (DARK: bg-void-glow)
   - Photo of Ludwik (keep existing image)
   - h2: "Jesteś gotów?"
   - Discovery CTA button
   - "max 5 klientów" note (warm framing)

8. PODPIS (LIGHT: bg-diamond or bg-paper)
   - Personal closing: "Kiedyś myślałem... Teraz wiem..."
   - "— Ludwik" signature
   - No Buffett quote
```

### Key removals
- `ContentTextSection` and `ContentGridSection` component usage → raw sections
- Bullet-point credentials list with `CheckCircle` icons
- Income gatekeeping ("€100K-10M+ rocznie")
- "brutalnego, by powiedzieć Ci prawdę"
- "Koń trojański" framing
- "Nie uczę. Katalizuję. Prowadzę. Transformuję." guru-line
- Warren Buffett quote
- Star rating icons
- `Star`, `Users` icon imports

### Key additions
- Full prose narrative (no lists in persuasive sections)
- Concrete anchor: peron metra Dworzec Gdański, 2014
- Diamond/cloth metaphor woven throughout
- "Flex then undercut" pattern in credentials
- Warm "Dla kogo" section based on attitude, not income
- Life OS explanation through metaphor, not declaration
- Personal signature closing

### Styling
- Diamond Hybrid patterns: bg-void-glow, bg-void, bg-diamond, the-cut dividers
- Prose body: `text-dim` on dark, `text-on-light-dim` on light
- Path cards: `rounded-sm border border-white/10 p-8` on dark, or `border-on-light/10` on light
- Keep existing photo images (SIADLAK-ig.png and/or 18c4e8c1)
- CTA: standard branded gradient button

### File changes
- **`src/pages/About.tsx`** — full rewrite (single file)

