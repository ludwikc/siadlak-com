

# Diamond Hybrid Design System -- Clean Rewrite

## Current Problem
The stylesheet has grown organically into 1000+ lines of CSS and 760+ lines of Tailwind config with:
- 30+ duplicate CSS variables mapping to the same 4 core colors
- Legacy "transformation-*" utility classes nobody asked for
- Redundant gradient utilities (locked, brand, hero -- all identical)
- Old color names (`--color-primary`, `--transformation-blue`, `--success-green`) that are just aliases of Electric Blue or Depth Purple
- No "The Cut" divider concept
- Glow gradient exists but is buried in noise

## Brand Book: Diamond Hybrid System

**4 Core Colors only:**
- **Void Black** `#080808` -- dark surfaces, problem/emotion sections
- **Electric Blue** `#007AFF` -- clarity, technology, focus (60% usage)
- **Depth Purple** `#6D28D9` -- transformation, depth (25% usage)
- **Diamond Light** `#F9FAFB` -- truth, logic, light sections (15%)

**Key Design Elements:**
- Dark sections pulse with Electric Blue + Depth Purple glow (like car dashboard at night)
- "The Cut" -- a sharp gradient divider separating dark (problem) from light (solution)
- One gradient button (Blue to Purple) that works on both dark and light backgrounds
- Body uses Diamond Light with subtle glow gradient overlay

## Changes

### 1. `src/index.css` -- Rewrite `:root` variables

**Remove** all redundant aliases:
- `--color-primary`, `--color-primary-light`, `--color-primary-dark`, `--color-accent`, `--color-indigo`, `--color-premium`
- `--transformation-blue`, `--transformation-blue-light`, `--transformation-blue-dark`
- `--success-green`, `--growth-gold`
- `--neural-blue` / `--twilight-indigo` legacy aliases (keep only in Tailwind config)
- `--gradient-body-primary`, `--gradient-body-overlay`

**Keep** (clean and organized):
- 4 core palette variables (electric-blue, depth-purple, void-black, diamond-light)
- Void Black surface scale (base/elevated/floating)
- Text utilities (on-dark, on-light, dim)
- Shadcn/UI semantic tokens (mapped to core 4)
- Brand gradients (premium, hero, glow)
- Shadows, typography, spacing, borders (unchanged)
- UI states (success, warning, error, info)

**Add:**
- `.the-cut` -- a utility class for the sharp dark-to-light divider
- Cleaner glow-gradient with visible Blue/Purple pulse on Void Black

**Remove from components layer:**
- `.btn-special` (hardcoded purple hex -- use gradient instead)
- Remove duplicate `.section` definition

### 2. `tailwind.config.ts` -- Consolidate colors

**Keep** legacy Tailwind color names (50+ files reference them) but point them directly at the 4 core colors:
- `deep-space` -> Void Black hex
- `neural-blue` / `quantum-blue` -> Electric Blue
- `twilight-indigo` / `neural-violet` / `ascension-pink` -> Depth Purple
- `luminous-white` -> Diamond Light
- `deep-charcoal` -> foreground dark
- `silver-mist`, `subtle-slate`, `gentle-lavender` -> grayscale scale
- `zenith-gold` -> keep as accent (gold stays)
- `pulse-cyan` -> remove (unused or map to Electric Blue light)

**Remove** from Tailwind config:
- `color-primary`, `color-primary-light`, `color-primary-dark`, `color-accent`, `color-indigo`, `color-premium` (not used in templates)
- `transformation` object and `transformation-blue` flat key
- `success-green`, `growth-gold` duplicates

**Remove** plugin utilities:
- All `.transformation-card*`, `.transformation-section*`, `.transformation-badge*`, `.btn-transformation*` classes (only used in 1 file -- LifeOSSystemUpgrade.tsx which can use Tailwind classes directly)
- Duplicate gradient utilities -- keep only: `bg-gradient-locked-primary`, `bg-gradient-locked-dark`, `bg-gradient-locked-hero-complex`, `bg-gradient-text-brand`
- Remove: `bg-gradient-locked-hero` (identical to primary), `bg-gradient-locked-cta` (identical), `bg-gradient-brand-*` (identical non-locked versions)

**Add:**
- `.the-cut` utility in plugin
- `.bg-void-glow` utility -- Void Black with pulsing Blue/Purple radial gradients

### 3. Footer -- No changes (as requested)

## Technical Notes

- The legacy Tailwind color aliases stay to avoid breaking 50+ component files
- CSS variables are reduced from ~95 to ~45
- Tailwind plugin utilities reduced from ~50 to ~20
- The LifeOSSystemUpgrade.tsx page uses `transformation-badge*` classes -- these will need inline Tailwind replacements (can be done in a follow-up)
- "The Cut" will be a reusable `<div className="the-cut" />` element -- a 4px-tall gradient strip from Electric Blue through Depth Purple

