

# Diamond Hybrid Design Reset: 4 Pages + 2 Shared Components

## Overview

Apply the Diamond Hybrid design system (alternating `bg-void-glow` / `bg-diamond-light` sections with `.the-cut` dividers) to 4 pages and 2 shared components. This matches the style already implemented on `/webinar/depresja`.

## Shared Components to Update First

### 1. `ContentTextSection.tsx`
Currently uses `bg-luminous-white` and `bg-secondary/30`. These are used by About.tsx and Discovery.tsx.

**Changes:**
- `backgroundVariant="light"` maps to `bg-diamond-light` (was `bg-luminous-white`)
- `backgroundVariant="muted"` maps to `bg-void-glow` (was `bg-secondary/30`)
- Add new variant `"dark"` mapping to `bg-void-glow`
- Title text: use `text-text-on-light` (light bg) or `text-text-on-dark` (dark bg)
- Body text: use `text-text-on-light/80` (light) or `text-text-dim` (dark)
- Remove `content-h2` class (uses old colors), replace with explicit `font-heading text-2xl md:text-4xl font-bold`

### 2. `ContentGridSection.tsx`
Same background mapping changes as ContentTextSection.

### 3. `CommunityCallToAction.tsx`
- Replace `bg-secondary/30` with `bg-void-glow`
- Replace `text-deep-charcoal` with `text-text-on-dark`
- Replace `text-twilight-indigo` with `text-electric`
- Replace `text-subtle-slate` with `text-text-dim`

## Pages to Reset

### Page 1: `About.tsx` (506 lines)

Structure (8 sections, alternating dark/light):

```text
[HERO]             -> bg-void-glow (dark)    -- was bg-gradient-locked-hero
[THE CUT]
[Bylem tam]        -> bg-diamond-light       -- was ContentTextSection muted
[THE CUT]
[Nie ucze]         -> bg-void-glow           -- was bg-luminous-white (with image)
[THE CUT]
[To nie dla]       -> bg-diamond-light       -- was ContentGridSection muted
[THE CUT]
[Life OS callout]  -> bg-void-glow           -- was ContentTextSection light
[THE CUT]
[Credentials]      -> bg-diamond-light       -- was bg-luminous-white
[THE CUT]
[CTA]              -> bg-void-glow           -- was ContentTextSection muted
```

**Specific changes:**
- Hero: Remove `bg-gradient-locked-hero section-locked text-locked-white`, blur orbs, `animate-pulse`, `shadow-2xl`, `backdrop-blur-sm`. Replace with `bg-void-glow`, `text-text-on-dark`.
- All `glass-card` divs -> plain `div` with `border border-white/10` (dark) or `border border-text-on-light/10` (light)
- All `text-deep-charcoal` -> `text-text-on-light` (on light bg) or `text-text-on-dark` (on dark bg)
- All `text-neural-blue` -> `text-electric`
- All `text-twilight-indigo` -> `text-depth` or `text-electric`
- Remove all `shadow-xl`, `shadow-lg`, `shadow-2xl`, `blur-3xl`, `backdrop-blur-sm`
- Remove all `animate-pulse`, `hover:scale-*`, `hover:shadow-*`
- Buttons: `rounded-sm`, flat `bg-electric text-white` or gradient CTA (same as /webinar/depresja)
- Image: Remove `shadow-xl`, use `rounded-sm`
- Add `<TheCut />` between every section change

### Page 2: `Newsletter.tsx` (934 lines)

Structure (9 sections, alternating):

```text
[HERO]              -> bg-void-glow          -- was gradient twilight
[THE CUT]
[MAIN PROMISE]      -> bg-diamond-light      -- was bg-background
[THE CUT]
[PROBLEM]           -> bg-void-glow          -- was bg-deep-charcoal/5
[THE CUT]
[SOLUTION]          -> bg-diamond-light      -- was bg-background
[THE CUT]
[TESTIMONIALS]      -> bg-void-glow          -- was gradient
[THE CUT]
[PRICING]           -> bg-diamond-light      -- was gradient bg
[THE CUT]
[EXAMPLE]           -> bg-void-glow          -- was bg-deep-charcoal/5
[THE CUT]
[FINAL CTA]         -> bg-diamond-light      -- was gradient
[THE CUT]
[FOOTER]            -> bg-void-glow          -- was bg-background
```

**Specific changes:**
- Hero: Remove gradient, blur orbs, `backdrop-blur-sm`, `drop-shadow-*`. Use `bg-void-glow`, `text-text-on-dark`.
- Remove all `animate-pulse` badges, `shadow-2xl`, `hover:shadow-3xl`
- All `text-deep-charcoal` -> `text-text-on-light` or `text-text-on-dark`
- All `text-twilight-indigo` -> `text-electric` or `text-depth`
- All `bg-twilight-indigo/X` tints -> `bg-electric/X` or flat borders
- All `bg-gradient-to-*` on sections -> flat `bg-void-glow` or `bg-diamond-light`
- Pricing cards: Remove `shadow-lg`, `shadow-2xl`, `scale-105`. Use flat cards with `border border-white/10` (dark) or `border border-text-on-light/10` (light)
- Buttons: Flat gradient CTA (`linear-gradient(135deg, electric, depth)`) same as /webinar/depresja
- Progress bar: Use `bg-electric` instead of `bg-gradient-to-r from-twilight-indigo`

### Page 3: `Discovery.tsx` (534 lines)

Structure (7 sections, alternating):

```text
[HERO]              -> bg-void-glow          -- was bg-gradient-locked-hero
[THE CUT]
[INTRO]             -> bg-diamond-light      -- was ContentTextSection light
[THE CUT]
[CO SIE DZIEJE]     -> bg-void-glow          -- was ContentTextSection muted
[THE CUT]
[KIM NIE JESTESMY]  -> bg-diamond-light      -- was ContentGridSection light
[THE CUT]
[CO MOZE SIE]       -> bg-void-glow          -- was ContentGridSection muted
[THE CUT]
[TRANSPARENTNIE]    -> bg-diamond-light      -- was ContentTextSection light
[THE CUT]
[CTA]               -> bg-void-glow          -- was ContentTextSection muted
[THE CUT]
[P.S.]              -> bg-diamond-light      -- was ContentTextSection light
```

**Specific changes:**
- Hero: Same cleanup as About (remove locked classes, blur, animate-pulse, shadow)
- Remove `GlassCard` import and usage -> plain div with border
- All `glass-card` -> plain div with appropriate border
- All color token swaps (same as About)
- CTA "Sprawdz dostepnosc" button: flat gradient, remove `hover:scale-105`, `shadow-lg`
- Loading spinner: `border-electric` instead of `border-neural-blue`

### Page 4: `CourseDetail.tsx` (705 lines)

Structure:

```text
[HERO]              -> bg-void-glow          -- was bg-gradient-to-br from-deep-space
[THE CUT]
[OVERVIEW]          -> bg-diamond-light      -- was bg-luminous-white
[THE CUT]
[TESTIMONIALS]      -> bg-void-glow          -- was bg-secondary/30
[THE CUT]
[FAQ]               -> bg-diamond-light      -- was bg-luminous-white
[THE CUT]
[CTA]               -> bg-void-glow          -- was bg-gradient-to-br from-twilight-indigo
```

**Specific changes:**
- Hero: `bg-void-glow`, `text-text-on-dark`. Remove `backdrop-blur-sm`.
- All `glass-card` -> `border border-white/10` (dark) or `border border-text-on-light/10` (light)
- All `text-deep-charcoal` -> `text-text-on-light`
- All `text-subtle-slate` -> `text-text-on-light/70`
- All `text-twilight-indigo` -> `text-electric`
- CTA section: `bg-void-glow` with `text-text-on-dark`
- Remove `bg-twilight-indigo/10` tints
- Week number circles: `bg-depth` instead of `bg-twilight-indigo`
- Featured badge: flat with `border border-white/20`, no `backdrop-blur-sm`

## Global Migration Rules (applied to all 4 pages)

| Old Class | New Class |
|-----------|-----------|
| `text-deep-charcoal` | `text-text-on-light` (light bg) / `text-text-on-dark` (dark bg) |
| `text-neural-blue`, `text-twilight-indigo` | `text-electric` or `text-depth` |
| `text-subtle-slate` | `text-text-on-light/70` (light) / `text-text-dim` (dark) |
| `bg-luminous-white` | `bg-diamond-light` |
| `bg-gradient-locked-hero` | `bg-void-glow` |
| `bg-secondary/30`, `bg-deep-charcoal/5` | `bg-diamond-light` or `bg-void-glow` |
| `glass-card` | `div` with `border border-white/10` (dark) or `border border-text-on-light/10` (light) |
| `shadow-*`, `backdrop-blur-*` | removed |
| `animate-pulse` (decorative) | removed |
| `rounded-2xl`, `rounded-xl` | `rounded-sm` (except CTA button keeps `rounded`) |
| `hover:scale-*`, `hover:shadow-*` | removed |
| `bg-clip-text text-transparent` | removed, use flat `text-electric` |

## Typography

- Headings: `font-heading font-bold leading-tight`
- Body: `font-body leading-relaxed`
- H1: `text-4xl md:text-6xl lg:text-7xl`
- H2: `text-2xl md:text-4xl`

## CTA Button Pattern

```jsx
<a
  href="..."
  className="inline-block px-10 py-4 rounded font-semibold text-white uppercase tracking-wide text-sm"
  style={{
    background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
    boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
  }}
>
  CTA TEXT
</a>
```

## The Cut Usage

A `<TheCut />` component (inline: `<div className="the-cut" />`) is inserted between every pair of sections where background changes from dark to light or vice versa.

## Files Modified (summary)

1. `src/components/sections/content/ContentTextSection.tsx` -- update bg classes
2. `src/components/sections/content/ContentGridSection.tsx` -- update bg classes
3. `src/components/sections/CommunityCallToAction.tsx` -- update colors
4. `src/pages/About.tsx` -- full Diamond Hybrid reset
5. `src/pages/Newsletter.tsx` -- full Diamond Hybrid reset
6. `src/pages/Discovery.tsx` -- full Diamond Hybrid reset
7. `src/pages/CourseDetail.tsx` -- full Diamond Hybrid reset

## Implementation Order

1. ContentTextSection + ContentGridSection (shared components first)
2. CommunityCallToAction
3. About.tsx
4. Newsletter.tsx
5. Discovery.tsx
6. CourseDetail.tsx

Each page will be rewritten section by section, preserving all copy/content but replacing every visual class with Diamond Hybrid equivalents. All sections will follow the strict dark/light alternation with `.the-cut` dividers between each transition.

