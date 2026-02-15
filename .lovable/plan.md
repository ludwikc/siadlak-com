

## Migrate /program Page to Diamond Hybrid Global Standards (Updated)

Comprehensive styling migration of `/program` (~946 lines). Content and structure stay identical -- only visual classes change.

---

### Updated Section Layout

Two changes from the original plan per user feedback:
- **Lifehackerzy Community** keeps its current dark violet styling (no migration to light)
- **The Cut** appears at every dark-to-light and light-to-dark transition (not just once)

```text
 1. Hero                    -> bg-void-glow        (DARK)
 2. LifeOS AppStore Header  -> bg-surface           (DARK)
 3. App Cards (#1-#4)       -> bg-void-glow         (DARK)
 4. Authority / Keynote     -> bg-surface            (DARK)
    ── THE CUT ──────────────────────────────────────
 5. FAQ: Efekt?             -> bg-diamond            (LIGHT)
    ── THE CUT ──────────────────────────────────────
 6. Lifehackerzy Community  -> UNCHANGED (dark violet palette)
    ── THE CUT ──────────────────────────────────────
 7. LifeOS: System Upgrade  -> bg-diamond            (LIGHT)
 8. Final CTA               -> bg-paper              (LIGHT)
 9. Red Pill GIF            -> bg-diamond            (LIGHT)
```

Three Cut dividers total: after section 4, after section 5, and after section 6.

---

### Changes Per Section

**Global removals across ALL sections (except Lifehackerzy):**
- `rounded-2xl` -> `rounded-sm` or `rounded-none`
- `shadow-2xl`, `shadow-3xl`, `shadow-lg`, `shadow-xl` -> removed (max `shadow-sm`)
- `hover:-translate-y-*` -> `hover:opacity-90` or `hover:border-electric/30`
- `backdrop-blur-sm` on sections -> removed
- `bg-gradient-to-br from-*/5 to-*/5` backgrounds -> system backgrounds
- Gradient text (`bg-clip-text text-transparent`) -> plain `text-white` or `text-electric`
- `hover:shadow-*`, `hover:scale-*` -> removed

**1. Hero (lines ~121-151) -- bg-void-glow:**
- Badge: `border border-white/10 bg-white/5 text-electric` (remove `shadow-lg`)
- h1: `text-white leading-[1.1] tracking-[-0.02em]` (no gradient text)
- Body: `text-dim`
- Eyebrow: `text-xs font-bold uppercase tracking-[0.2em]`

**2. LifeOS AppStore Header (lines ~153-178) -- bg-surface:**
- h2: `text-white` (no gradient on "AppStore")
- Body: `text-dim`

**3. App Cards #1-#4 (lines ~180-417) -- bg-void-glow:**
- Cards: `rounded-sm border border-white/10 bg-white/[0.03]`
- Eyebrows: `text-xs font-bold uppercase tracking-[0.2em] text-electric`
- h3: `text-white`, body: `text-dim`, strong: `text-white/90`
- Bullet icons: `text-electric` or `text-depth`
- "Co sie zmienia" boxes: `bg-white/[0.03] rounded-sm border border-white/10`
- CTAs: `bg-brand-gradient` (135deg #007AFF to #6D28D9), rounded, white text

**4. Authority / Keynote (lines ~421-478) -- bg-surface:**
- Image: `rounded-sm border border-white/10` (no `rounded-2xl shadow-2xl`)
- Remove hover overlay with `backdrop-blur-sm`
- Warning card: `rounded-sm border border-white/10 bg-white/[0.03]`
- Headings: `text-white`, body: `text-dim`

**THE CUT** -- `<div className="the-cut" />`

**5. FAQ: Efekt? (lines ~480-541) -- bg-diamond:**
- Badge: `text-electric border-electric`
- h2: `text-on-light`
- Overlay: `bg-black/80` (no `backdrop-blur-sm`)
- GIF container: `rounded-sm border border-black/10`
- Caption: `text-xs text-on-light-dim`

**THE CUT** -- `<div className="the-cut" />`

**6. Lifehackerzy Community (lines ~543-696) -- NO CHANGES:**
- Keep `bg-lifehacker-purple-dark` background
- Keep all `text-lifehacker-purple` accents
- Keep all existing violet borders, gradients, and hover effects
- This section is untouched

**THE CUT** -- `<div className="the-cut" />`

**7. LifeOS: System Upgrade (lines ~698-878) -- bg-diamond:**
- Remove blur orbs (`blur-3xl` divs)
- Card: `rounded-sm border border-black/10 bg-paper`
- Overlay: `bg-black/80` (no `backdrop-blur-sm`)
- h2, h3: `text-on-light`
- Price: `text-depth` (replaces `text-zenith-gold`)
- Exclusivity badge: `rounded-sm border border-depth/20 bg-depth/5`
- Stars: `text-depth`
- Feature bullets: `text-on-light-dim`, dots `bg-depth`

**8. Final CTA (lines ~880-915) -- bg-paper:**
- Remove grid pattern overlay div
- h3: `text-on-light`, body: `text-on-light-dim`
- CTA: `bg-brand-gradient`

**9. Red Pill GIF (lines ~917-943) -- bg-diamond:**
- Image: `rounded-sm` (no `shadow-2xl`, no glow div)
- CTA: `bg-brand-gradient` (not red)
- Caption: `text-xs text-on-light-dim`

---

### Animation Changes

- Remove all `hover:-translate-y-*`, `hover:scale-*`, `hover:shadow-*`
- Keep `transition-colors` on interactive elements
- Card hover: `hover:opacity-90` or `hover:border-electric/30`
- Keep `animate-fade-in` on overlay reveals (opacity only)

---

### Technical Details

**File modified:** `src/pages/Program.tsx` (~946 lines, class replacement pass)

**No new files or dependencies.** All utility classes (`bg-void-glow`, `the-cut`, `bg-surface`, `bg-diamond`, `text-dim`, `text-on-light`, `text-on-light-dim`, `text-electric`, `text-depth`) already exist in `tailwind.config.ts` and `index.css`.

