

## Plan: Rewrite /program page copy and structure

### Summary
Complete rewrite of `src/pages/Program.tsx` to match the new copy guidelines. The page goes from 11 sections to 10, removing Matrix GIFs and the "FAQ: Efekt?" overlay, and adding a new "decision tree" section.

### Architecture (section by section)

```text
1. HERO (DARK: bg-void-glow)
   - h1: "Aplikacje Mentalne"
   - h2: "Programy, które instalujesz raz..."
   - Body paragraphs (diamond/cloth metaphor)

2. DECISION TREE (DARK: bg-void)
   - "Nie wiesz, od czego zacząć?"
   - 5 links in a clean grid/list

--- THE CUT ---

3. APP #1: Produktywność (DARK: bg-void-glow)
   - Social proof pill: 100+ uczestników · 4.9/5.0
   - New copy, "Co się zmienia po instalacji" rhythm-of-three
   - CTA: INSTALUJ PROGRAM → /program/produktywnosc

4. APP #2: Silna Głowa (DARK: same container)
   - New copy (firewall metaphor, no DDoS/redundant neural)

5. APP #3: Uważne Życie (DARK: same container)
   - PROGRAM FLAGOWY badge
   - "Medytacja dla ludzi z ADHD" copy

6. APP #4: Męski Kompas (DARK: same container)
   - "Jak diament" callback
   - New copy

--- THE CUT ---

7. NIE DLA / DLA (DARK: bg-void)
   - Keynote image
   - Updated "Nie dla" / "Dla" copy with warmth

--- THE CUT ---

8. LIFEHACKERZY (bg-lifehacker-purple-dark)
   - Condensed: 5 bullet points instead of 12+
   - Remove expandable details, remove double CTA
   - Jim Rohn quote stays
   - Remove "Hackerzy łamią ograniczenia" branding block

--- THE CUT ---

9. LIFE OS: System Upgrade (LIGHT: bg-diamond)
   - Remove overlay/gatekeeping
   - Active CTA to /discovery
   - Updated features list, price 16,000 PLN, 2 raty

10. ZAMKNIĘCIE (LIGHT: bg-paper)
    - "Ostatnia rzecz" — diamond callback
    - "Dziękuję, że jesteś" — Ludwik signature
    - No Matrix GIFs
```

### Key removals
- `effectGif` and `redPillGif` imports and sections
- `isOverlayVisible` / `isFaqOverlayVisible` state + overlay logic
- Old `communityBenefits` array (12 items → inline 5 bullets)
- `scrollToApps` function
- "Hakowanie Produktywności" naming → "Produktywność"
- Cybersecurity copy (DDoS, redundant neural connections, etc.)
- Version/compatibility metadata lines on cards

### Key additions
- Decision tree section with 5 problem→program links
- Social proof on Produktywność card (100+ · 4.9/5.0)
- PROGRAM FLAGOWY badge on Uważne Życie
- "Jak diament" closing line on Męski Kompas
- Life OS section fully active with Discovery CTA
- P.S./P.P.S. closing signature

### Styling approach
- All existing Diamond Hybrid patterns preserved (bg-void-glow, bg-void, bg-diamond, bg-paper, the-cut dividers)
- App cards keep same structure: `rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10`
- "Co się zmienia" boxes keep `bg-white/[0.03] rounded-sm p-5 border border-white/10`
- CTAs change from `bg-gradient-locked-primary` to standard branded gradient
- Lifehackerzy section stays as visual exception but simplified
- Decision tree: clean list with arrows, each item links to program page

### File changes
- **`src/pages/Program.tsx`** — full rewrite (single file change)

