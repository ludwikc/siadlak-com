# TrainTheTrainer.tsx Color Palette Documentation
**Complete color system used across the Train The Trainer landing page**

## Primary Color Palette

### Gold (Premium Accent)
- **CSS Variable**: `--gold: 45 95% 60%`
- **Tailwind**: `gold`
- **HSL**: `hsl(45, 95%, 60%)`
- **HEX**: `#F9C23C`
- **RGB**: `rgb(249, 194, 60)`
- **Usage**: Premium accent for qualification bar, hero text gradients, trust indicators
- **Sections**: Qualification bar, Hero section, Footer, Mentor section

### Luminal Magenta (Energy Accent)
- **Tailwind**: `luminal-magenta`
- **HEX**: `#DA1EAE`
- **RGB**: `rgb(218, 30, 174)`
- **Usage**: High-energy CTA buttons, urgency signals, vibrant gradients
- **Sections**: Hero CTA, Final CTA, Background effects

### Ascension Pink (Conversion Accent)
- **Tailwind**: `ascension-pink`
- **HEX**: `#B0128C`
- **RGB**: `rgb(176, 1, 140)`
- **Usage**: Primary conversion CTAs, premium background overlays
- **Sections**: Hero CTA button, Application Process section

### Neural Violet (Deep Purple)
- **Tailwind**: `neural-violet`
- **HEX**: `#3B0F77`
- **RGB**: `rgb(59, 15, 119)`
- **Usage**: Professional gradient accent, section headers, elegant transitions
- **Sections**: Hero background, Section dividers, Mentor section (replaced gold/magenta)

### Quantum Blue (Deep Navy)
- **Tailwind**: `quantum-blue`
- **HEX**: `#061A40`
- **RGB**: `rgb(6, 26, 64)`
- **Usage**: Primary professional color, icons, borders, section backgrounds
- **Sections**: All sections (primary color throughout)

### Deep Space (Premium Black)
- **Tailwind**: `deep-space`
- **HEX**: `#0A0A0A`
- **RGB**: `rgb(10, 10, 10)`
- **Usage**: Dark section backgrounds, text, foundations
- **Sections**: Hero background, Mentor section, Final CTA section

### White
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **Usage**: Text, card backgrounds, borders, glass morphism
- **Sections**: All sections (primary text and UI element color)

---

## Section-by-Section Color Usage

### 1. Qualification Bar (Top)
```css
background: linear-gradient(to right,
  rgba(10, 10, 10, 0.05),  /* deep-space/5 */
  rgba(249, 194, 60, 0.05), /* gold/5 */
  rgba(10, 10, 10, 0.05)    /* deep-space/5 */
);
border-bottom: 2px solid rgba(249, 194, 60, 0.2); /* gold/20 */
```
**Icons**: Gold (#F9C23C)
**Dividers**: `bg-gold/30`

### 2. Hero Section
**Background Gradient:**
```css
background: linear-gradient(to bottom right,
  #0A0A0A,      /* deep-space */
  #061A40,      /* quantum-blue */
  #3B0F77       /* neural-violet */
);
```

**Background Orbs:**
1. Luminal Magenta (top-left): `w-48 h-48 blur-3xl opacity-20`
2. Gold (bottom-right): `w-56 h-56 blur-3xl opacity-20`
3. Quantum Blue (center): `w-64 h-64 blur-3xl opacity-20`

**Hero Text Gradients:**
```css
/* "Jesteś" and "Przewodnikiem." */
background: linear-gradient(to right, #FFFFFF, #F9C23C);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Primary CTA Button:**
```css
background: linear-gradient(to right, #B0128C, #DA1EAE);
/* Hover: from-luminal-magenta to-ascension-pink */
```

**CTA Glow:**
```css
background: linear-gradient(to right,
  #B0128C,      /* ascension-pink */
  #DA1EAE,      /* luminal-magenta */
  #B0128C       /* ascension-pink */
);
filter: blur(16px);
opacity: 0.75;
```

**Trust Indicators:**
- Pulse dots: Gold (`bg-gold`)
- Pulse dots: Luminal Magenta (`bg-luminal-magenta`)

### 3. Qualification Criteria Section
**Background:** White with subtle dark space tint
```css
background: linear-gradient(to bottom,
  #FFFFFF,
  rgba(10, 10, 10, 0.05),  /* deep-space/5 */
  #FFFFFF
);
```

**Divider Line:**
```css
background: linear-gradient(to right, #061A40, #3B0F77);
/* from-quantum-blue to-neural-violet */
```

**Icon Backgrounds:** White with quantum-blue icons
**Cards:** White background, quantum-blue borders

**CTA Glow:**
```css
background: linear-gradient(to right,
  #061A40,      /* quantum-blue */
  #3B0F77,      /* neural-violet */
  #061A40       /* quantum-blue */
);
```

### 4. Train The Trainer: Elite Academy Section
**Background:** Light gradient
```css
background: linear-gradient(to bottom right,
  hsl(var(--background)),
  rgba(10, 10, 10, 0.05)  /* deep-space/5 */
);
```

**Section Badge:**
```css
background: linear-gradient(to right, #3B0F77, #061A40);
/* from-neural-violet to-quantum-blue */
```

**All Cards:**
- White background (`bg-white`)
- Quantum-blue icons (`text-quantum-blue`)
- Quantum-blue borders

### 5. Mentor Section (Ludwik C. Siadlak)
**NOTE**: This section uses quantum-blue/neural-violet instead of gold/magenta

**Background Gradient:**
```css
background: linear-gradient(to bottom right,
  #0A0A0A,      /* deep-space */
  #061A40,      /* quantum-blue */
  #0A0A0A       /* deep-space */
);
```

**Background Orbs (20% opacity):**
1. Quantum Blue (top-left): `w-80 h-80 blur-3xl`
2. Neural Violet (bottom-right): `w-96 h-96 blur-3xl`
3. Quantum Blue (center): `w-72 h-72 blur-3xl`

**Name Divider:**
```css
background: linear-gradient(to right, #061A40, #3B0F77);
/* from-quantum-blue to-neural-violet */
```

**Image Glow:**
```css
background: linear-gradient(to bottom right, #061A40, #3B0F77);
filter: blur(32px);
opacity: 0.3;
```

**Credential Badge ("19 Years"):**
```css
background: linear-gradient(to bottom right, #061A40, #3B0F77);
border: 2px solid rgba(255, 255, 255, 0.2);
```

**Achievement Icons:**
```css
background: linear-gradient(to bottom right, #061A40, #3B0F77);
```

**Quote Box:**
```css
background: linear-gradient(to right,
  rgba(6, 26, 64, 0.1),    /* quantum-blue/10 */
  rgba(59, 15, 119, 0.1)   /* neural-violet/10 */
);
border: 1px solid rgba(6, 26, 64, 0.3);  /* quantum-blue/30 */
```

**Stats Cards Glow:**
```css
background: linear-gradient(to bottom right, #061A40, #3B0F77);
filter: blur(12px);
opacity: 0.5;
/* Hover: opacity: 0.75 */
```

### 6. Investment Section
**Header Gradient:**
```css
background: linear-gradient(to right,
  #0A0A0A,      /* deep-space */
  #061A40,      /* quantum-blue */
  #3B0F77       /* neural-violet */
);
```

**Guarantee Box:**
```css
background: linear-gradient(to right,
  rgba(6, 26, 64, 0.1),    /* quantum-blue/10 */
  rgba(59, 15, 119, 0.1),  /* neural-violet/10 */
  rgba(6, 26, 64, 0.1)     /* quantum-blue/10 */
);
```

### 7. Application Process Section (Final CTA)
**Background Gradient:**
```css
background: linear-gradient(to bottom right,
  #0A0A0A,      /* deep-space */
  #061A40,      /* quantum-blue */
  #3B0F77       /* neural-violet */
);
```

**Premium Background Effects:**
```css
/* Overlay */
background: linear-gradient(to right,
  rgba(176, 1, 140, 0.1),   /* ascension-pink/10 */
  rgba(218, 30, 174, 0.1)   /* luminal-magenta/10 */
);
opacity: 0.5;

/* Orbs */
- Ascension Pink (top-left): `w-96 h-96 bg-ascension-pink/20 blur-3xl`
- Luminal Magenta (bottom-right): `w-96 h-96 bg-luminal-magenta/20 blur-3xl`
```

**Final CTA Button:**
```css
background: linear-gradient(to right, #B0128C, #DA1EAE);
/* from-ascension-pink to-luminal-magenta */

/* Hover */
background: linear-gradient(to right, #DA1EAE, #B0128C);
/* from-luminal-magenta to-ascension-pink */
```

**CTA Glow (Massive):**
```css
background: linear-gradient(to right,
  #B0128C,      /* ascension-pink */
  #DA1EAE,      /* luminal-magenta */
  #B0128C       /* ascension-pink */
);
filter: blur(48px);  /* blur-3xl */
opacity: 0.8;
```

**Step Number Badges:**
```css
background: linear-gradient(to bottom right, #061A40, #3B0F77);
border: 4px solid #0A0A0A;  /* deep-space */
```

---

## Gradient Formulas Reference

### Gold Gradients (Hero Text Only)
```css
/* White to Gold */
.hero-text {
  background: linear-gradient(to right, #FFFFFF, #F9C23C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
**Tailwind**: `bg-gradient-to-r from-white to-gold bg-clip-text text-transparent`

### Quantum Blue / Neural Violet (Primary Professional)
```css
/* Horizontal */
background: linear-gradient(to right, #061A40, #3B0F77);
```
**Tailwind**: `bg-gradient-to-r from-quantum-blue to-neural-violet`

```css
/* Diagonal */
background: linear-gradient(to bottom right, #061A40, #3B0F77);
```
**Tailwind**: `bg-gradient-to-br from-quantum-blue to-neural-violet`

### Ascension Pink / Luminal Magenta (Conversion CTAs)
```css
/* CTA Button */
background: linear-gradient(to right, #B0128C, #DA1EAE);
```
**Tailwind**: `bg-gradient-to-r from-ascension-pink to-luminal-magenta`

```css
/* CTA Glow */
background: linear-gradient(to right, #B0128C, #DA1EAE, #B0128C);
```
**Tailwind**: `bg-gradient-to-r from-ascension-pink via-luminal-magenta to-ascension-pink`

### Dark Section Backgrounds
```css
/* Deep Space → Quantum Blue → Neural Violet */
background: linear-gradient(to bottom right, #0A0A0A, #061A40, #3B0F77);
```
**Tailwind**: `bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet`

```css
/* Deep Space → Quantum Blue → Deep Space */
background: linear-gradient(to bottom right, #0A0A0A, #061A40, #0A0A0A);
```
**Tailwind**: `bg-gradient-to-br from-deep-space via-quantum-blue to-deep-space`

---

## Opacity Variations

### Gold Opacity Levels
- **100%**: `#F9C23C` - Solid gold (icons, text)
- **30%**: `rgba(249, 194, 60, 0.3)` - Dividers
- **20%**: `rgba(249, 194, 60, 0.2)` - Borders
- **5%**: `rgba(249, 194, 60, 0.05)` - Background tints

### Quantum Blue Opacity Levels
- **100%**: `#061A40` - Solid color (icons, text)
- **50%**: `rgba(6, 26, 64, 0.5)` - Glows
- **30%**: `rgba(6, 26, 64, 0.3)` - Borders
- **20%**: `rgba(6, 26, 64, 0.2)` - Card borders
- **10%**: `rgba(6, 26, 64, 0.1)` - Background tints
- **5%**: `rgba(6, 26, 64, 0.05)` - Very subtle backgrounds

### Ascension Pink / Luminal Magenta Opacity
- **20%**: `rgba(176, 1, 140, 0.2)` - Background orbs
- **10%**: `rgba(176, 1, 140, 0.1)` - Subtle overlays

### White Opacity Levels
- **100%**: `#FFFFFF` - Primary text
- **90%**: `rgba(255, 255, 255, 0.9)` - Secondary text
- **30%**: `rgba(255, 255, 255, 0.3)` - Borders on CTAs
- **20%**: `rgba(255, 255, 255, 0.2)` - Glass morphism borders
- **10%**: `rgba(255, 255, 255, 0.1)` - Card backgrounds
- **5%**: `rgba(255, 255, 255, 0.05)` - Very subtle backgrounds

---

## Design Strategy

### Color Hierarchy
1. **Primary Professional**: Quantum Blue (#061A40) - Used most frequently, icons, borders, text accents
2. **Secondary Professional**: Neural Violet (#3B0F77) - Gradients, section headers, sophisticated accents
3. **Premium Accent**: Gold (#F9C23C) - Qualification bar, hero text gradients only
4. **Conversion Accent**: Ascension Pink (#B0128C) + Luminal Magenta (#DA1EAE) - CTAs only
5. **Foundation**: Deep Space (#0A0A0A) - Dark backgrounds
6. **Clarity**: White (#FFFFFF) - Light backgrounds, text

### Usage Guidelines
- **Gold**: Used sparingly in qualification bar and hero text to avoid "candy-like" appearance
- **Quantum Blue/Neural Violet**: Primary gradient throughout entire page for elegant, professional feel
- **Ascension Pink/Luminal Magenta**: Reserved exclusively for conversion CTAs (Hero CTA, Final CTA)
- **White Cards**: All feature/benefit cards use clean white backgrounds with quantum-blue accents

### Conversion Focused Elements
- Hero CTA: Ascension Pink → Luminal Magenta
- Final CTA: Ascension Pink → Luminal Magenta (larger, more prominent)
- Both use dramatic glows and hover effects for maximum attention

---

## Tailwind Class Reference

### Text Colors
- `text-gold` - Gold text (#F9C23C)
- `text-quantum-blue` - Quantum blue text
- `text-neural-violet` - Neural violet text
- `text-white` - White text
- `text-white/90` - 90% white text
- `text-deep-charcoal` - Deep charcoal text

### Background Colors
- `bg-gold` - Solid gold background
- `bg-quantum-blue` - Solid quantum blue
- `bg-neural-violet` - Solid neural violet
- `bg-ascension-pink` - Solid ascension pink
- `bg-luminal-magenta` - Solid luminal magenta
- `bg-deep-space` - Solid deep space
- `bg-white` - Solid white

### Borders
- `border-gold/20` - 20% opacity gold border
- `border-quantum-blue/20` - 20% opacity quantum blue border
- `border-white/20` - 20% opacity white border

### Gradients
- `bg-gradient-to-r from-white to-gold` - Hero text gradient
- `bg-gradient-to-r from-quantum-blue to-neural-violet` - Professional gradient
- `bg-gradient-to-r from-ascension-pink to-luminal-magenta` - CTA gradient
- `bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet` - Dark section background

### Effects
- `bg-clip-text text-transparent` - Text gradient clip
- `backdrop-blur-sm` - Glass morphism blur
- `blur-3xl` - Heavy blur (48px)
- `animate-pulse` - Pulsing animation

---

## CSS Custom Properties

```css
:root {
  /* Primary Colors */
  --gold: 45 95% 60%;
  --quantum-blue: #061A40;
  --neural-violet: #3B0F77;
  --ascension-pink: #B0128C;
  --luminal-magenta: #DA1EAE;
  --deep-space: #0A0A0A;

  /* Gradients */
  --gradient-hero-text: linear-gradient(to right, #FFFFFF, #F9C23C);
  --gradient-professional: linear-gradient(to right, #061A40, #3B0F77);
  --gradient-cta: linear-gradient(to right, #B0128C, #DA1EAE);
  --gradient-dark-section: linear-gradient(to bottom right, #0A0A0A, #061A40, #3B0F77);
}
```

---

## Visual Color Swatches

### Full Palette
```
█ #F9C23C  Gold (Premium - Hero only)
█ #061A40  Quantum Blue (Primary professional)
█ #3B0F77  Neural Violet (Secondary professional)
█ #B0128C  Ascension Pink (Conversion)
█ #DA1EAE  Luminal Magenta (Conversion)
█ #0A0A0A  Deep Space (Foundation)
█ #FFFFFF  White (Clarity)
```

### Primary Gradient Preview
```
Professional Gradient (Most used):
███████████████████ Quantum Blue → Neural Violet
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Conversion Gradient (CTAs only):
███████████████████ Ascension Pink → Luminal Magenta
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```
