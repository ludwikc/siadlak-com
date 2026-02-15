
## Update Lovable Theme to Match swatch-2026-5.html Exactly

This is a two-part task: (1) clean up `tailwind.config.ts` and `src/index.css` to remove legacy color tokens not in the brandbook, and (2) replace all legacy color references across ~42 component/page files with the correct Diamond Hybrid equivalents.

---

### Part 1: Theme Files Cleanup

**swatch-2026-5.html defines exactly these tokens:**

```text
Core Palette:
  void-black:     #080808
  electric-blue:  #007AFF
  depth-purple:   #6D28D9
  diamond-light:  #F9FAFB

Utility Text:
  text-on-dark:   #F3F4F6
  text-on-light:  #111827
  text-dim:       #9CA3AF

Gradients:
  brand-gradient: linear-gradient(135deg, #007AFF, #6D28D9)
  glow-gradient:  two radial gradients (violet + blue)
```

**Legacy colors to REMOVE from `tailwind.config.ts` (lines 41-62):**

| Legacy Name | Replacement |
|---|---|
| `zenith-gold` | `electric` (#007AFF) for accents, `depth` (#6D28D9) for highlights |
| `gold` | remove (alias of zenith-gold) |
| `deep-space` | `void` (#080808) |
| `neural-blue` | `electric` (#007AFF) |
| `neural-blue-light` | `electric-blue-light` |
| `neural-blue-dark` | `electric-blue-dark` |
| `quantum-blue` | `electric` (#007AFF) |
| `neural-violet` | `depth` (#6D28D9) |
| `twilight-indigo` | `depth` (#6D28D9) |
| `twilight-indigo-light` | `depth-purple-light` |
| `twilight-indigo-dark` | `depth-purple-dark` |
| `ascension-pink` | `depth` (#6D28D9) |
| `luminal-magenta` | `electric` (#007AFF) |
| `luminous-white` | `diamond` (#F9FAFB) |
| `deep-charcoal` | `text-on-light` (#111827) |
| `silver-mist` | remove (use border utilities) |
| `subtle-slate` | `dim` (#9CA3AF) |
| `gentle-lavender` | `dim` (#9CA3AF) |

**Legacy CSS vars to REMOVE from `src/index.css`:**
- `--zenith-gold` (line 40)
- `--gradient-gold` (line 92)

---

### Part 2: Codebase-Wide Class Replacement (~42 files)

Every `.tsx` file using legacy color names gets a find-and-replace pass. The mapping:

**Text colors:**
- `text-deep-charcoal` -> `text-on-light` (on light sections) or `text-white` (on dark)
- `text-deep-charcoal/80`, `text-deep-charcoal/90` -> `text-on-light-dim`
- `text-twilight-indigo` -> `text-depth`
- `text-zenith-gold` -> `text-electric`
- `text-subtle-slate` -> `text-dim`
- `text-gentle-lavender` -> `text-dim`
- `text-neural-blue` -> `text-electric`
- `text-neural-violet` -> `text-depth`
- `text-luminous-white` -> `text-diamond`

**Background colors:**
- `bg-twilight-indigo` -> `bg-depth`
- `bg-zenith-gold` -> `bg-electric`
- `bg-luminous-white` -> `bg-diamond`
- `bg-deep-space` -> `bg-void`

**Gradient classes:**
- `from-twilight-indigo` -> `from-depth`
- `to-twilight-indigo` -> `to-depth`
- `from-zenith-gold` -> `from-electric`
- `to-zenith-gold` -> `to-electric`
- `from-neural-blue` -> `from-electric`
- `via-twilight-indigo` -> `via-depth`
- `gradient-gold` references -> remove or replace with brand-gradient

**Border colors:**
- `border-twilight-indigo` -> `border-depth`
- `border-zenith-gold` -> `border-electric`

**Hover states:**
- `hover:bg-zenith-gold` -> `hover:bg-electric`
- `hover:bg-twilight-indigo` -> `hover:bg-depth`
- `hover:text-zenith-gold` -> `hover:text-electric`
- `hover:text-twilight-indigo` -> `hover:text-depth`

**Ring/focus:**
- `ring-twilight-indigo` -> `ring-depth`
- `focus:ring-twilight-indigo` -> `focus:ring-depth`

---

### Files to Modify

**Theme files (2):**
1. `tailwind.config.ts` -- remove 18 legacy color entries from colors object
2. `src/index.css` -- remove `--zenith-gold` and `--gradient-gold` vars

**Component/page files (~40):** Every file containing legacy color classes gets the replacement pass. Key files include:
- `src/components/ui/cta-button.tsx`
- `src/components/sales/ValueCalculator.tsx`
- `src/components/podcast/ValueProposition.tsx`
- `src/components/webinar/SpecialOfferCountdown.tsx`
- `src/pages/WebinarReplay.tsx`
- `src/pages/ThankYou.tsx`
- `src/pages/UwazneZyciePodcast.tsx`
- `src/pages/LifeHackingPodcast.tsx`
- And ~32 other files with legacy references

**No new dependencies needed.** All replacement tokens already exist in the config.
