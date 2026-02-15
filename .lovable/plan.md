

## Migrate Legacy Colors in 7 Remaining Page Files

Batch replacement of all legacy color tokens (`twilight-indigo`, `neural-blue`, `zenith-gold`, `deep-charcoal`, `deep-space`, `luminous-white`, `ascension-pink`) with Diamond Hybrid standard equivalents across 7 page files, plus WCAG contrast verification.

---

### Color Replacement Mapping

| Legacy Token | Replacement | Context |
|---|---|---|
| `twilight-indigo` | `depth` | All: text, bg, border, gradient, ring |
| `neural-blue` | `electric` | All: text, bg, border, gradient |
| `zenith-gold` | `electric` (accents) or `depth` (highlights) | Context-dependent |
| `deep-charcoal` | `on-light` (headings) or `on-light-dim` (body/opacity variants) | Light backgrounds |
| `deep-space` | `void` | Backgrounds |
| `luminous-white` | `diamond` | Backgrounds |
| `ascension-pink` | `depth` | Accents, gradients |

---

### File-by-File Summary

**1. SiedemTechnik.tsx (277 lines) -- ~45 replacements**

Key changes:
- Hero: `bg-gradient-to-br from-deep-space via-neural-blue to-twilight-indigo` -> `bg-void-glow`
- CheckCircle icons: `text-twilight-indigo` -> `text-electric`
- Blur orbs: `from-twilight-indigo to-neural-blue` -> `from-depth to-electric`
- Eyebrow badge: `bg-twilight-indigo/10 text-twilight-indigo` -> `bg-depth/10 text-depth`
- Headings: `text-deep-charcoal` -> `text-on-light`
- Body: `text-deep-charcoal` -> `text-on-light-dim`
- Gradient divider: `from-twilight-indigo via-twilight-indigo` -> `from-depth via-depth`
- Card borders: `border-neural-blue/20`, `border-twilight-indigo/20` -> `border-electric/20`, `border-depth/20`
- Number circles: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth`
- Strong text: `text-twilight-indigo` -> `text-depth`
- Course logo section: `from-luminous-white` -> `from-diamond`
- Pricing section: `from-deep-space via-neural-blue/80 to-deep-space` -> `bg-void-glow`
- CTA blur: `from-twilight-indigo via-twilight-indigo to-twilight-indigo` -> `from-depth via-depth to-depth`
- CTA button text: `text-twilight-indigo` -> `text-depth`
- Images: `rounded-2xl shadow-2xl` -> `rounded-sm` (geometry fix)
- Cards: remove `shadow-lg`, `hover:shadow-2xl`, `hover:-translate-y-1`

**2. LifeHackingPodcast.tsx (193 lines) -- ~15 replacements**

Key changes:
- Hero: `from-deep-space to-neural-blue` -> `bg-void-glow`
- Body text: `text-deep-charcoal` -> `text-on-light` / `text-on-light-dim`
- Info box: `bg-luminous-white` -> `bg-diamond`
- Info heading: `text-twilight-indigo` -> `text-depth`
- Load more button: `bg-zenith-gold hover:bg-twilight-indigo` -> `bg-brand-gradient`
- Email input ring: `ring-twilight-indigo` -> `ring-depth`
- Submit button: `bg-twilight-indigo hover:bg-twilight-indigo/80` -> `bg-depth hover:bg-depth/80`
- Subscribe heading: `text-deep-charcoal` -> `text-on-light`
- Subscribe body: `text-deep-charcoal/80` -> `text-on-light-dim`

**3. ThankYou.tsx (457 lines) -- ~25 replacements**

Key changes:
- Badge pills: `bg-twilight-indigo/10 text-twilight-indigo` -> `bg-depth/10 text-depth` (lines 54, 120, 184, 270, 408)
- Step number circles: `bg-twilight-indigo` -> `bg-depth` (lines 227, 233, 239)
- Discovery call fact heading: `text-twilight-indigo` -> `text-depth` (line 212)
- Body text: `text-deep-charcoal/80` -> `text-on-light-dim` (lines 205, 291, 426)
- Webinar offer gradient: `from-twilight-indigo/10 to-zenith-gold/10` -> `from-depth/10 to-electric/10` (line 303)
- Offer labels: `text-twilight-indigo` -> `text-depth` (lines 308, 319, 343)
- Page background: `from-luminous-white` -> `from-diamond` (line 445)
- Background blur orbs: `from-twilight-indigo/20 to-zenith-gold/20` -> `from-depth/20 to-electric/20` (lines 447-448)

**4. WebinarReplay.tsx (685 lines) -- ~80 replacements**

Key changes:
- Page bg: `from-luminous-white` -> `from-diamond` (line 114)
- Title gradient: `from-twilight-indigo to-zenith-gold bg-clip-text text-transparent` -> `text-depth` (plain, no gradient text -- line 122)
- Timer: `text-twilight-indigo` -> `text-depth` (line 131)
- Timeline heading: `text-twilight-indigo` -> `text-depth` (line 165)
- Timeline labels: `text-deep-charcoal/60` -> `text-on-light-dim` (line 168)
- Timeline items hover: `hover:bg-twilight-indigo/5` -> `hover:bg-depth/5` (line 176)
- Timeline item text: `text-deep-charcoal` -> `text-on-light` (line 179)
- Timeline badge: `bg-twilight-indigo/10 text-twilight-indigo` -> `bg-depth/10 text-depth` (line 182)
- Offer card: `to-ascension-pink/5` -> `to-depth/5` (line 196)
- Offer gradient badges: `from-twilight-indigo to-ascension-pink` -> `bg-brand-gradient` (lines 216, 234)
- Pricing box: `from-twilight-indigo via-twilight-indigo/95 to-ascension-pink` -> `from-depth via-depth/95 to-electric` (line 234)
- Savings text: `text-zenith-gold` -> `text-electric` (line 268)
- Benefit checkmarks: `text-twilight-indigo` -> `text-depth` (lines 282, 289, 291, 329)
- Bonus stars: `text-ascension-pink` -> `text-depth` (lines 307, 311, 318)
- CTA button: `from-twilight-indigo to-ascension-pink` -> `bg-brand-gradient` (line 346)
- Guarantee: `bg-twilight-indigo/5 border-twilight-indigo/10 text-twilight-indigo` -> `bg-depth/5 border-depth/10 text-depth` (lines 357-359)
- Testimonials section: `from-twilight-indigo/5 to-zenith-gold/5` -> `from-depth/5 to-electric/5` (line 370)
- Testimonial headings: `text-twilight-indigo` -> `text-depth` (lines 371, 382)
- Blockquote borders: `border-twilight-indigo` -> `border-depth` (lines 386, 398, 407)
- Blockquote attribution: `text-twilight-indigo` -> `text-depth` (lines 393, 402, 411)
- Community value headings: `text-zenith-gold` -> `text-electric` (line 420)
- Gold blockquote borders: `border-zenith-gold` -> `border-electric` (lines 424, 435)
- Gold attributions: `text-zenith-gold` -> `text-electric` (lines 430, 439)
- Decision blockquotes: `border-deep-charcoal text-deep-charcoal` -> `border-on-light text-on-light` (lines 452-498)
- CTA bar divider: `border-twilight-indigo/20` -> `border-depth/20` (line 506)
- CTA button: `bg-twilight-indigo` -> `bg-depth` (line 512)
- FAQ headings: `text-twilight-indigo` -> `text-depth` (lines 604, 615, 626)
- FAQ body: `text-deep-charcoal/80` -> `text-on-light-dim` (lines 607, 619, 630)
- Additional resources text: `text-deep-charcoal/80` -> `text-on-light-dim` (line 526)
- Floating CTA: `from-twilight-indigo to-ascension-pink` -> `bg-brand-gradient` (line 658)
- Float CTA button: `text-twilight-indigo` -> `text-depth` (line 670)

**5. SilnaGlowa.tsx (1431 lines) -- ~60 replacements**

Key changes:
- Hero blur orbs: `bg-neural-blue/20`, `bg-twilight-indigo/20` -> `bg-electric/20`, `bg-depth/20` (lines 38-39)
- Badge gradient: `from-neural-blue/20 to-twilight-indigo/20 border-neural-blue/30` -> `from-electric/20 to-depth/20 border-electric/30` (line 45)
- Badge icon: `text-twilight-indigo` -> `text-depth` (line 46)
- Social proof icon: `text-twilight-indigo` -> `text-depth` (line 81)
- CTA glow: `from-neural-blue via-twilight-indigo to-neural-blue` -> `from-electric via-depth to-electric` (line 102)
- Price text: `text-twilight-indigo` -> `text-depth` (lines 116, 120)
- Video border hover: `hover:border-zenith-gold/50` -> `hover:border-electric/50` (line 132)
- Play button gradient: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth` (line 134)
- Key message card: `text-twilight-indigo` -> `text-depth` (line 379)
- Italic quotes: `text-twilight-indigo` -> `text-depth` (lines 437, 438, 467, 477)
- Author name: `text-twilight-indigo` -> `text-depth` (line 498)
- Author quote highlight: `border-twilight-indigo` -> `border-depth` (line 523)
- Meditation quote: `text-twilight-indigo` -> `text-depth` (lines 526, 542)
- Navigator text: `text-twilight-indigo` -> `text-depth` (line 542)
- Quote background: `bg-neural-blue/10` -> `bg-electric/10` (lines 523, 576, 854)
- Pre-sale note: `text-twilight-indigo` -> `text-depth` (line 556)
- "Roznica jest w glowie": `text-twilight-indigo` -> `text-depth` (line 584)
- Benefit badges: `from-neural-blue/20 to-twilight-indigo/20` -> `from-electric/20 to-depth/20` (lines 603, 878)
- Badge text: `text-twilight-indigo` -> `text-depth` (lines 604, 880)
- Summary card: `from-neural-blue/10 to-twilight-indigo/10 border-neural-blue/20` -> `from-electric/10 to-depth/10 border-electric/20` (line 731)
- Summary icon circle: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth` (line 733)
- Bullet dots: `bg-twilight-indigo` -> `bg-depth` (line 842)
- Captain text: `text-twilight-indigo` -> `text-depth` (line 862)
- Module badges: `from-neural-blue/10 to-twilight-indigo/10 border-neural-blue/20` -> `from-electric/10 to-depth/10 border-electric/20` (line 953)
- Module badge text: `text-twilight-indigo` -> `text-depth` (line 954)
- SVG stroke: `text-twilight-indigo` -> `text-depth` (line 981)
- Module CTA: `from-neural-blue to-twilight-indigo` -> `bg-brand-gradient` (line 1000)
- Community highlight: `text-twilight-indigo` -> `text-depth` (line 1022)
- Pricing bullets: `text-twilight-indigo` -> `text-depth` (line 1047, 1051, 1055)
- Course name: `text-twilight-indigo` -> `text-depth` (line 1071)
- Pricing card: `border-neural-blue/20` -> `border-electric/20` (line 1075)
- Price gradient: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth` (line 1100)
- Value stack bg: `from-zenith-gold/5 to-twilight-indigo/5 border-neural-blue/20` -> `from-electric/5 to-depth/5 border-electric/20` (line 1116)
- Daily cost: `text-twilight-indigo` -> `text-depth` (line 1154)
- Objections border: `border-neural-blue/20` -> `border-electric/20` (line 1230)
- Conclusion italic: `text-twilight-indigo` -> `text-depth` (line 1331)
- Final CTA orbs: `bg-neural-blue/20`, `bg-twilight-indigo/20` -> `bg-electric/20`, `bg-depth/20` (lines 1358-1359)
- Testimonial quote marks: `text-twilight-indigo/20` -> `text-depth/20` (line 1221)
- Avatar circles: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth` (line 1249)
- Category tags: `bg-neural-blue/10 text-twilight-indigo` -> `bg-electric/10 text-depth` (lines 1266-1267)
- Hover overlays: `from-neural-blue/5 to-twilight-indigo/5` -> `from-electric/5 to-depth/5` (line 1274)
- Trust badge icon: `text-twilight-indigo` -> `text-depth` (line 1291)

**6. HakowanieProduktywnosci.tsx (1452 lines) -- ~70 replacements**

Key changes:
- Hero blur orbs: `bg-neural-blue/20`, `bg-twilight-indigo/20` -> `bg-electric/20`, `bg-depth/20` (lines 38-39)
- Badge gradient: same pattern as SilnaGlowa (line 45)
- Badge icon: `text-twilight-indigo` -> `text-depth` (line 46)
- Social proof icon: `text-twilight-indigo` -> `text-depth` (line 72)
- CTA glow: `from-neural-blue via-twilight-indigo to-neural-blue` -> `from-electric via-depth to-electric` (line 93)
- Scarcity text: `text-twilight-indigo` -> `text-depth` (lines 113, 117)
- Hover text: `hover:text-twilight-indigo` -> `hover:text-depth` (line 125)
- Empathy card gradient/border: `from-neural-blue via-twilight-indigo` -> `from-electric via-depth` (line 309)
- Empathy border: `border-zenith-gold/20` -> `border-electric/20` (line 310)
- Shield icon: `text-twilight-indigo` -> `text-depth` (line 312)
- Bold text: `text-twilight-indigo` -> `text-depth` (line 317)
- Enemy section text: `text-twilight-indigo` -> `text-depth` (line 338)
- Solution section: `from-twilight-indigo/10 to-neural-blue/10` -> `from-depth/10 to-electric/10` (line 389)
- Solution accent: `text-twilight-indigo` -> `text-depth` (lines 404, 436)
- Blockquote: `text-twilight-indigo` -> `text-depth` (line 376)
- Benefits badges: `from-neural-blue/20 to-twilight-indigo/20` -> `from-electric/20 to-depth/20` (line 454)
- Benefits icon: `text-twilight-indigo` -> `text-depth` (lines 455, 503)
- Benefits hover: `hover:border-neural-blue/30` -> `hover:border-electric/30` (line 499)
- Benefits icon bg: `from-neural-blue/20 to-twilight-indigo/20` -> `from-electric/20 to-depth/20` (line 502)
- Sparkles on hover: `text-twilight-indigo` -> `text-depth` (line 510)
- Program badges: same pattern as SilnaGlowa (line 779)
- SVG stroke: `text-twilight-indigo` -> `text-depth` (line 808)
- Module CTA: `from-twilight-indigo to-zenith-gold` -> `bg-brand-gradient` (line 845)
- Community highlight: `text-twilight-indigo` -> `text-depth` (line 866)
- Module portal: `border-twilight-indigo/20 hover:border-twilight-indigo/40` -> `border-depth/20 hover:border-depth/40` (line 678)
- Pricing section orbs: same pattern (lines 915-916)
- Pricing card gradient: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth` (line 1023)
- Sparkle icon: `text-twilight-indigo` -> `text-depth` (line 1041)
- CTA button shadow: `hover:shadow-zenith-gold/25` -> remove (line 1100)
- Arrow icon: `text-twilight-indigo` -> `text-depth` (line 1103)
- Action text: `text-twilight-indigo` -> `text-depth` (line 1121)
- Testimonial avatars/tags: same pattern as SilnaGlowa (lines 1249-1274)
- Myth/Reality cards: `hover:border-neural-blue/30` -> `hover:border-electric/30` (line 1367)
- Myth/Reality icons: `from-neural-blue to-twilight-indigo` -> `from-electric to-depth` (line 1371)

**7. LifeOSSystemUpgrade.tsx (2288 lines) -- ~120 replacements**

Key changes:
- Sticky bar: `from-twilight-indigo to-neural-blue` -> `bg-brand-gradient` (line 148)
- Hero: `from-deep-space via-twilight-indigo to-neural-blue` -> `bg-void-glow` (line 171)
- Animated orbs: `bg-zenith-gold` -> `bg-electric`, `bg-neural-blue` -> `bg-electric`, `bg-twilight-indigo` -> `bg-depth` (lines 174-182)
- Premium badge glow: `from-zenith-gold via-twilight-indigo to-neural-blue` -> `from-electric via-depth to-electric` (line 191)
- Badge: `from-zenith-gold to-orange-500` -> `bg-brand-gradient` (line 192)
- Gradient text: `from-zenith-gold via-yellow-400 to-orange-500 bg-clip-text text-transparent` -> plain `text-electric` (line 203)
- Feature pills: `border-zenith-gold/30 hover:border-zenith-gold/50` -> `border-electric/30 hover:border-electric/50` (lines 215-238)
- Feature icons: `text-zenith-gold` -> `text-electric` (lines 217, 225, 233)
- CTA glow: `from-zenith-gold via-orange-500 to-zenith-gold` -> `from-electric via-depth to-electric` (line 244)
- All `text-deep-charcoal` -> `text-on-light` (headings) or `text-on-light-dim` (body) throughout
- All `text-deep-charcoal/80`, `/90` -> `text-on-light-dim`
- Section backgrounds: `bg-luminous-white` -> `bg-diamond` (lines 424, 1101, 1416)
- Identity highlight: `text-zenith-gold` -> `text-electric` (line 575)
- Identity box border: `border-zenith-gold/50` -> `border-electric/50` (line 381)
- Life OS section: `from-deep-space via-twilight-indigo to-neural-blue` -> `bg-void-glow` (line 601)
- Methodology badge: `bg-zenith-gold/20 border-zenith-gold/40 text-zenith-gold` -> `bg-electric/20 border-electric/40 text-electric` (line 608)
- Checklist icons: `text-zenith-gold` -> `text-electric` (lines 625-643)
- Phase card borders: `hover:border-zenith-gold/50 hover:shadow-zenith-gold/20` -> `hover:border-electric/50` (lines 699, 762, 835, 899)
- Phase headings: `text-zenith-gold` -> `text-electric` (lines 664, 691, 784, 805, 855, 873, 916, 923, 943)
- Phase gradients: `from-zenith-gold to-orange-500` -> `from-electric to-depth` (line 703)
- Results cards: `border-twilight-indigo bg-gradient-to-br from-twilight-indigo/5` -> `border-depth bg-gradient-to-br from-depth/5` (lines 1011-1073)
- Results headings: `text-twilight-indigo` -> `text-depth` (lines 1013, 1030, 1047, 1059, 1075)
- Results body: `text-deep-charcoal/90` -> `text-on-light-dim` (lines 1016, 1033, 1050, 1062, 1078)
- Testimonial quotes: `text-deep-charcoal/80` -> `text-on-light-dim` (lines 1020, 1037, 1066)
- "Why Me" orbs: `bg-zenith-gold/10` -> `bg-electric/10` (lines 1103, 1231)
- "Why Me" headings: `text-deep-charcoal` -> `text-on-light` (lines 1114, 1242, 1305, 1429)
- "Why Me" cards: `border-zenith-gold from-zenith-gold/5` -> `border-electric from-electric/5` (lines 1119-1202)
- "Why Me" h3: `text-zenith-gold` -> `text-electric` (lines 1121, 1141, 1159, 1178, 1204)
- "Why Me" body: `text-deep-charcoal/90`, `/80` -> `text-on-light-dim` (throughout)
- Investment section: `text-twilight-indigo` -> `text-depth`, `text-zenith-gold` -> `text-electric` (lines 1249-1410)
- Program CheckCircle: `text-twilight-indigo` -> `text-depth` (lines 1254-1276)
- Price: `text-zenith-gold` -> `text-electric` (line 1291)
- Price body: `text-deep-charcoal/80` -> `text-on-light-dim` (line 1294)
- Investment card gradient: `from-twilight-indigo/5 to-zenith-gold/5` -> `from-depth/5 to-electric/5` (line 1285)
- "Dlaczego tyle" card: `from-zenith-gold/5 to-twilight-indigo/5` -> `from-electric/5 to-depth/5` (line 1303)
- Comparison: `bg-twilight-indigo/10 text-twilight-indigo` -> `bg-depth/10 text-depth` (lines 1362-1376)
- Question highlight: `text-zenith-gold` -> `text-electric` (lines 1387, 1404)
- Qualification section: `text-deep-charcoal` -> `text-on-light` / `text-on-light-dim` (lines 1443-1600+)
- Discovery section and remaining (lines 1600+): same pattern

---

### WCAG Contrast Verification

After migration, the following contrast ratios will apply:

| Combination | Ratio | WCAG AA |
|---|---|---|
| `text-on-light` (#111827) on `bg-diamond` (#F9FAFB) | ~16.5:1 | PASS |
| `text-on-light-dim` (#4B5563) on `bg-diamond` (#F9FAFB) | ~7.4:1 | PASS |
| `text-dim` (#9CA3AF) on `bg-void` (#080808) | ~6.3:1 | PASS |
| `text-white` (#FFFFFF) on `bg-void` (#080808) | ~19.5:1 | PASS |
| `text-electric` (#007AFF) on `bg-diamond` (#F9FAFB) | ~4.6:1 | PASS (AA) |
| `text-depth` (#6D28D9) on `bg-diamond` (#F9FAFB) | ~6.6:1 | PASS |
| `text-electric` (#007AFF) on `bg-void` (#080808) | ~4.3:1 | PASS (AA large text) |
| `text-depth` (#6D28D9) on `bg-void` (#080808) | ~3.0:1 | CAUTION -- only for large/bold text |

Concern: `text-depth` on dark backgrounds only passes for large text (18pt+ or 14pt bold). All small body text using `text-depth` on dark sections should be changed to `text-electric` instead for WCAG compliance. This affects accent labels inside dark hero sections.

---

### Technical Details

**Files modified:** 7 page files
1. `src/pages/SiedemTechnik.tsx` (~45 replacements)
2. `src/pages/LifeHackingPodcast.tsx` (~15 replacements)
3. `src/pages/ThankYou.tsx` (~25 replacements)
4. `src/pages/WebinarReplay.tsx` (~80 replacements)
5. `src/pages/SilnaGlowa.tsx` (~60 replacements)
6. `src/pages/HakowanieProduktywnosci.tsx` (~70 replacements)
7. `src/pages/LifeOSSystemUpgrade.tsx` (~120 replacements)

Total: ~415 class replacements across ~7,800 lines of code.

**No new files or dependencies needed.** All replacement tokens already exist in `tailwind.config.ts`.

**Pages using "theme-locked" classes** (SilnaGlowa, HakowanieProduktywnosci) will keep their `-locked-` classes unchanged, as those are separate CSS utilities. Only the legacy color tokens within those pages (blur orbs, gradients, accents) are replaced.

