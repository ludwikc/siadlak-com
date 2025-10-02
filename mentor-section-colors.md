# Mentor Section Color Swatch
**Color Palette for "Ludwik C. Siadlak" Section**

## Primary Colors

### Gold (Premium Accent)
- **CSS Variable**: `--gold: 45 95% 60%`
- **HSL**: `hsl(45, 95%, 60%)`
- **HEX**: `#F9C23C`
- **RGB**: `rgb(249, 194, 60)`
- **Usage**: Primary warm accent color for prestige and achievement

### Luminal Magenta (Secondary Accent)
- **Tailwind**: `luminal-magenta`
- **HEX**: `#DA1EAE`
- **RGB**: `rgb(218, 26, 174)`
- **Usage**: Secondary warm accent, creates vibrant gradient with gold

### Quantum Blue (Deep Navy)
- **Tailwind**: `quantum-blue`
- **HEX**: `#061A40`
- **RGB**: `rgb(6, 26, 64)`
- **Usage**: Deep blue accent in background

### Deep Space (Premium Black)
- **Tailwind**: `deep-space`
- **HEX**: `#0A0A0A`
- **RGB**: `rgb(10, 10, 10)`
- **Usage**: Section background base

### White
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **Usage**: Text and borders

---

## Background Configuration

### Section Background Gradient
```css
background: linear-gradient(to bottom right, #0A0A0A, #061A40, #0A0A0A);
```
**Tailwind**: `bg-gradient-to-br from-deep-space via-quantum-blue to-deep-space`

### Background Orbs (Animated, 20% opacity)
1. **Gold Orb** (top-left)
   - Color: `#F9C23C`
   - Size: 320px × 320px (w-80 h-80)
   - Blur: 48px (blur-3xl)
   - Opacity: 20%
   - Animation: pulse

2. **Magenta Orb** (bottom-right)
   - Color: `#DA1EAE`
   - Size: 384px × 384px (w-96 h-96)
   - Blur: 48px (blur-3xl)
   - Opacity: 20%
   - Animation: pulse with 1s delay

3. **Quantum Blue Orb** (center)
   - Color: `#061A40`
   - Size: 288px × 288px (w-72 h-72)
   - Blur: 48px (blur-3xl)
   - Opacity: 20%
   - Animation: pulse with 0.5s delay

---

## Gradient Formulas

### Gold to Magenta Gradient (Primary Accent)
```css
background: linear-gradient(to bottom right, #F9C23C, #DA1EAE);
background: linear-gradient(135deg, hsl(45, 95%, 60%), #DA1EAE);
```
**Tailwind**: `bg-gradient-to-br from-gold to-luminal-magenta`

**Used in:**
- Name divider line
- Image glow effect (30% opacity)
- Floating credential badge ("19 Years")
- Achievement icon backgrounds
- Stats card glows (50% opacity, blur-md)

### Gold to Magenta Gradient (Linear Horizontal)
```css
background: linear-gradient(to right, #F9C23C, #DA1EAE);
```
**Tailwind**: `bg-gradient-to-r from-gold to-luminal-magenta`

**Used in:**
- Horizontal divider under name

---

## Opacity Variations

### Gold Opacity Levels
- **100%**: `#F9C23C` - Solid gold (badges, icons)
- **30%**: `rgba(249, 194, 60, 0.3)` - Image borders, quote box borders
- **10%**: `rgba(249, 194, 60, 0.1)` - Subtle background tints

### Magenta Opacity Levels
- **100%**: `#DA1EAE` - Solid magenta (gradient end)
- **10%**: `rgba(218, 26, 174, 0.1)` - Subtle background tints

### White Opacity Levels
- **100%**: `#FFFFFF` - Primary text
- **90%**: `rgba(255, 255, 255, 0.9)` - Secondary text
- **20%**: `rgba(255, 255, 255, 0.2)` - Borders, glass morphism
- **10%**: `rgba(255, 255, 255, 0.1)` - Card backgrounds, subtle borders
- **5%**: `rgba(255, 255, 255, 0.05)` - Very subtle backgrounds

---

## Component Color Mapping

### Badge ("Twój Mentor")
```css
background-color: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
color: #FFFFFF;
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Name Divider
```css
background: linear-gradient(to right, #F9C23C, #DA1EAE);
width: 96px; /* w-24 */
height: 6px; /* h-1.5 */
```

### Image Glow Effect
```css
background: linear-gradient(to bottom right, #F9C23C, #DA1EAE);
filter: blur(32px); /* blur-2xl */
opacity: 0.3;
```

### Image Border
```css
border: 2px solid rgba(249, 194, 60, 0.3);
```

### Credential Badge ("19 Years Experience")
```css
background: linear-gradient(to bottom right, #F9C23C, #DA1EAE);
border: 2px solid rgba(255, 255, 255, 0.2);
```

### Achievement Icons
```css
background: linear-gradient(to bottom right, #F9C23C, #DA1EAE);
border-radius: 12px; /* rounded-xl */
```
**Icon color**: `#FFFFFF`

### Quote Box Background
```css
background: linear-gradient(to right, rgba(249, 194, 60, 0.1), rgba(218, 26, 174, 0.1));
border: 1px solid rgba(249, 194, 60, 0.3);
```

### Stats Cards
**Glow effect:**
```css
background: linear-gradient(to bottom right, #F9C23C, #DA1EAE);
filter: blur(12px); /* blur-md */
opacity: 0.5;
/* On hover: opacity: 0.75 */
```

**Card background:**
```css
background-color: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

---

## Design Principles

1. **Warm Prestige**: Gold (#F9C23C) conveys achievement, expertise, premium quality
2. **Energy & Innovation**: Magenta (#DA1EAE) adds modern, energetic, creative feel
3. **Professional Foundation**: Deep space (#0A0A0A) and quantum blue (#061A40) provide sophisticated, corporate-grade backdrop
4. **Subtle Luxury**: Low opacity overlays (10-30%) create depth without overwhelming
5. **Glass Morphism**: White overlays with backdrop blur create modern, premium aesthetic

---

## CSS Custom Properties

```css
:root {
  --gold: 45 95% 60%;
  --gold-hex: #F9C23C;
  --luminal-magenta: #DA1EAE;
  --quantum-blue: #061A40;
  --deep-space: #0A0A0A;

  /* Gradients */
  --gradient-gold-magenta-br: linear-gradient(to bottom right, #F9C23C, #DA1EAE);
  --gradient-gold-magenta-r: linear-gradient(to right, #F9C23C, #DA1EAE);

  /* Shadows */
  --shadow-gold-glow: 0 0 30px rgba(249, 194, 60, 0.3);
}
```

---

## Tailwind Class Reference

### Backgrounds
- `bg-gold` - Solid gold background
- `bg-luminal-magenta` - Solid magenta background
- `bg-gradient-to-br from-gold to-luminal-magenta` - Diagonal gradient
- `bg-gradient-to-r from-gold to-luminal-magenta` - Horizontal gradient
- `bg-white/10` - 10% white overlay
- `bg-white/5` - 5% white overlay

### Borders
- `border-gold/30` - 30% opacity gold border
- `border-white/20` - 20% opacity white border
- `border-white/10` - 10% opacity white border

### Text
- `text-white` - Pure white text
- `text-white/90` - 90% opacity white text

### Effects
- `backdrop-blur-sm` - Subtle blur (10px)
- `blur-2xl` - Heavy blur (32px)
- `blur-3xl` - Extra heavy blur (48px)
- `blur-md` - Medium blur (12px)

---

## Visual Color Swatches

### Primary Palette
```
█ #F9C23C  Gold (Premium)
█ #DA1EAE  Luminal Magenta (Energy)
█ #061A40  Quantum Blue (Professional)
█ #0A0A0A  Deep Space (Foundation)
█ #FFFFFF  White (Clarity)
```

### Gradient Preview
```
█████████████████ Gold → Magenta
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (to bottom right)
```

### Opacity Variations
```
█ 100% - Full color
▓  50% - Medium transparency
▒  30% - Light transparency
░  10% - Very light tint
```

---

## Implementation Notes

1. **Gold CSS Variable**: Currently defined in `src/index.css` but NOT in `tailwind.config.ts` - uses CSS variable `hsl(var(--gold))`
2. **Luminal Magenta**: Defined in `tailwind.config.ts` as hex `#DA1EAE`
3. **Background Orbs**: Use absolute positioning with blur and pulse animation for dynamic premium feel
4. **Glass Morphism**: Combine `bg-white/[5-10]` with `backdrop-blur-sm` for modern card aesthetics
5. **Gradients**: Always use `to-br` (bottom-right) or `to-r` (right) for consistency
6. **Hover States**: Increase opacity by 25-50% on hover for interactive elements
