

## Plan: Rewrite /newsletter page

### Summary
Complete rewrite of `src/pages/Newsletter.tsx`. Remove all paid tiers (Krąg Wewnętrzny, Lifehackerzy Premium, 97 PLN offer, scarcity). Replace with free newsletter signup, new "Dlaczego email" essay section, prose-format "Jak to działa", condensed testimonials, and P.S. ladder closing.

### Architecture

```text
1. HERO (DARK: bg-void-glow)
   - Branded prefix (🧠+🤖)^💜
   - h2: "Inteligencja do potęgi serca."
   - Subtitle: cotygodniowy newsletter, niedziela 19:00
   - Single CTA: "Zapisuję się →" (anchor to #formularz)

2. DLACZEGO EMAIL (DARK: bg-void)
   - Prose essay: LinkedIn/Instagram/YouTube algorytm critique
   - "Twoja skrzynka email to ostatnia intymna przystań"
   - No bullets — reflective prose format

--- THE CUT ---

3. JAK TO DZIAŁA (LIGHT: bg-diamond)
   - Three prose blocks with bold headers: Niedziela / Ty odpowiadasz / Sobota
   - Example topics in italics
   - "Ja. Osobiście." declaration

4. PRZYKŁAD TREŚCI (LIGHT: continuation)
   - Newsletter screenshot + blockquote
   - Link to preview

--- THE CUT ---

5. DLA KOGO (DARK: bg-void-glow)
   - "Nie dla Ciebie, jeśli" / "Dla Ciebie, jeśli" — short prose
   - No wound-first, observation style

6. SOCIAL PROOF (DARK: continuation)
   - 2 blockquotes (Katarzyna, Anna) — no stars, no "member since"

--- THE CUT ---

7. CTA ZAPIS (LIGHT: bg-diamond) #formularz
   - h2: "Dołącz do rozmowy"
   - Email input + submit button
   - "150+ osób już czyta"
   - Opens easycart checkout on submit

--- THE CUT ---

8. ZAMKNIĘCIE + P.S. (DARK: bg-void-glow)
   - "Ostatnia rzecz" — irony of internet essay
   - "Dziękuję, że jesteś" — Ludwik signature
   - P.S. → programs, P.P.S. → Discovery, P.P.P.S. → "zatrzymanie się"
```

### Key removals
- Entire pricing grid (3 tiers: Free/Premium/Elite)
- "OFERTA ZAŁOŻYCIELSKA" badge, 97 PLN, progress bar, scarcity
- "PROBLEM" section (wound-first: "samotny w tłumie", "Twoi znajomi")
- "GŁÓWNA OBIETNICA" section header
- 3 testimonials with stars → 2 without stars
- "Kurator myśli. Facylitator dialogu." guru-titling
- Fundacja HACKERZY.PL sponsorship mention
- `CheckCircle`, `X` icon imports (no longer needed)

### Key additions
- "Dlaczego piszę do Ciebie na email?" essay section
- Prose-format "Jak to działa" (replacing emoji-card grid)
- "Dla kogo / Nie dla kogo" observation-style section
- P.S. ladder with crosslinks to /program and /discovery
- Simple email signup form with single CTA

### Styling
- Diamond Hybrid patterns: bg-void-glow, bg-diamond, the-cut dividers
- Prose sections: `text-dim` body on dark, `text-on-light-dim` on light
- Blockquotes: `border-l-2 border-electric pl-6 italic`
- CTA button: standard branded gradient
- Form: single Input + Button, centered, max-w-md

### File changes
- **`src/pages/Newsletter.tsx`** — full rewrite (single file)

