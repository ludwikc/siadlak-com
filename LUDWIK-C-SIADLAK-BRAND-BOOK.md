# LUDWIK C. SIADLAK BRAND BOOK
## Comprehensive Design System

---

## TABLE OF CONTENTS

1. [Core Color System](#1-core-color-system)
2. [Typography System](#2-typography-system)
3. [Gradient Specifications](#3-gradient-specifications)
4. [Glow Effects](#4-glow-effects)
5. [Shadows & Elevation](#5-shadows--elevation)
6. [Border Specifications](#6-border-specifications)
7. [Spacing System](#7-spacing-system)
8. [Dark & Light Mode Implementation](#8-dark--light-mode-implementation)
9. [Component Specifications](#9-component-specifications)
10. [CSS Variables & Implementation](#10-css-variables--implementation)
11. [Accessibility Guidelines](#11-accessibility-guidelines)

---

## 1. CORE COLOR SYSTEM

### Primary Brand Colors

| Name | Hex | RGB | Description | Usage |
|------|-----|-----|-------------|-------|
| **Primary Purple** | #7C00FF | (124, 0, 255) | Bold, near-neon purple | Logo, primary accents, key elements |
| **Electric Violet-Pink** | #B100FF | (177, 0, 255) | Warmer accent purple | CTAs, highlights, interactive elements |

### Secondary Colors

| Name | Hex | RGB | Description | Usage |
|------|-----|-----|-------------|-------|
| **Refined Quantum Blue** | #4A36C2 | (74, 54, 194) | Sophisticated blue-purple | Secondary elements, supporting content |
| **Refined Magenta** | #C961E3 | (201, 97, 227) | Elegant pink-purple | Accents, secondary highlights |
| **Royal Indigo** | #383B6C | (56, 59, 108) | Deeply desaturated indigo | Supporting elements, backgrounds |
| **Premium Gold** | #D4AF37 | (212, 175, 55) | Rich, premium accent | Extremely limited use for premium offerings |

### Discord-Inspired Neutral Colors

| Name | Hex | RGB | Description | Usage |
|------|-----|-----|-------------|-------|
| **Discord Dark** | #1E1F22 | (30, 31, 34) | Primary dark surface | Dark mode backgrounds, primary dark surface |
| **Discord Grey** | #2B2D31 | (43, 45, 49) | Secondary dark surface | Secondary surfaces in dark mode |
| **Discord Light Grey** | #313338 | (49, 51, 56) | Tertiary dark surface | Card backgrounds, containers in dark mode |
| **Discord Divider** | #3F4147 | (63, 65, 71) | Subtle separators | Borders, dividers, subtle UI elements |
| **Discord Text Grey** | #B5BAC1 | (181, 186, 193) | Primary text in dark mode | Text on dark backgrounds |
| **Discord Light** | #F2F3F5 | (242, 243, 245) | Primary light surface | Light mode backgrounds, primary surface |
| **Discord Light Text** | #2E3338 | (46, 51, 56) | Primary text in light mode | Text on light backgrounds |

### UI State Colors

| Name | Hex | RGB | Description | Usage |
|------|-----|-----|-------------|-------|
| **Success Green** | #36D399 | (54, 211, 153) | Success states | Confirmations, completed states |
| **Warning Amber** | #FBBD23 | (251, 189, 35) | Warning states | Alerts, important notices |
| **Error Red** | #F87272 | (248, 114, 114) | Error states | Error messages, destructive actions |
| **Info Blue** | #4A36C2 | (74, 54, 194) | Information states | Informational messages, help tips |

### Color Application Rules

1. **Hierarchy of Prominence**
   - Primary Purple and Electric Violet-Pink: Maximum 10% of any screen
   - Use Discord-inspired neutrals for 80-90% of UI surfaces
   - Premium Gold: Maximum 3% of any screen, exclusive to highest-tier offerings

2. **Color Pairing Guidance**
   - Primary Purple + Discord Dark: Primary dark mode combination
   - Electric Violet-Pink + Discord Light: Primary light mode combination
   - Always place vibrant brand colors against neutral backgrounds for maximum impact

3. **Cross-Platform Consistency Controls**
   - Decrease saturation by 5% for printed materials
   - Increase contrast by 7% for mobile applications
   - Maintain Discord-inspired neutral palette across all platforms

---

## 2. TYPOGRAPHY SYSTEM

### Primary Font Family: Inter

| Weight Name | Weight Value | Usage | Sample |
|-------------|--------------|-------|--------|
| Bold | 700 | Primary headlines (H1), Key CTAs | The Black Panther Method |
| Semi-Bold | 600 | Secondary headlines (H2) | Reclaim Your Power |
| Medium | 500 | Subheadings (H3-H4), Button text, Navigation | Implementation Framework |
| Regular | 400 | Small headlines, Important UI elements | Featured Insights |
| Light | 300 | Primary body text, General interface text | Comprehensive approach to digital mastery |
| Extra-Light | 200 | Secondary body text, Caption text | Learn more about our methodology |

### Premium Accent Font: Quattrocento

| Weight Name | Weight Value | Usage | Notes |
|-------------|--------------|-------|-------|
| Bold | 700 | Premium offering headlines, Featured quotes | Use extremely sparingly |
| Regular | 400 | First letter of premium sections, Lead-in text | Limited to 2-3 instances per page |

### Font Size System (Mobile-First)

| Element | Mobile (≤767px) | Tablet (768-1023px) | Desktop (≥1024px) | Notes |
|---------|----------------|---------------------|-------------------|-------|
| H1 | 28px/1.2 | 36px/1.2 | 44px/1.1 | Always Inter Bold or Quattrocento Bold |
| H2 | 24px/1.3 | 28px/1.25 | 36px/1.2 | Inter Semi-Bold |
| H3 | 20px/1.3 | 24px/1.3 | 28px/1.25 | Inter Medium |
| H4 | 18px/1.4 | 20px/1.3 | 24px/1.3 | Inter Medium |
| Body (Primary) | 16px/1.5 | 16px/1.5 | 18px/1.5 | Inter Light |
| Body (Secondary) | 14px/1.5 | 14px/1.5 | 16px/1.5 | Inter Extra-Light |
| Small/Caption | 12px/1.4 | 12px/1.4 | 14px/1.4 | Inter Extra-Light |
| Button Text | 16px/1.2 | 16px/1.2 | 16px/1.2 | Inter Medium |
| Navigation | 14px/1.2 | 16px/1.2 | 16px/1.2 | Inter Medium |

### Typography Spacing

| Element | Letter Spacing | Notes |
|---------|---------------|-------|
| H1 | -0.5px | Tighter for impact |
| H2 | -0.3px | Slightly tighter |
| H3-H4 | -0.2px | Minimal tightening |
| Body Text | 0px | Default spacing |
| Small/Caption | 0.2px | Slightly expanded for legibility |
| ALL CAPS text | 1.2px | Always expanded for readability |

### Font Pairing Rules

1. **Premium Content Hierarchy**
   - Level 1 (Highest): Quattrocento Bold headline + Inter Light body
   - Level 2 (High): Inter Bold headline + Inter Light body
   - Level 3 (Standard): Inter Medium headline + Inter Light body

2. **Single-Page Limitation**
   - Maximum one instance of Quattrocento Bold per major section
   - Maximum three instances of Quattrocento Bold per page
   - Never use Quattrocento for body text

3. **Stylistic Application**
   - Apply Quattrocento only to complete elements, never mid-sentence
   - When using Quattrocento for first letter, size it 1.5× the text size
   - Do not apply additional styling (color, etc.) to Quattrocento without applying to Inter counterparts

---

## 3. GRADIENT SPECIFICATIONS

### Core Gradients

#### 1. Logo Glow Gradient
```css
background: linear-gradient(135deg, #B100FF, #7C00FF 65%, #4A36C2);
```

#### 2. Primary Button Gradient
```css
background: linear-gradient(90deg, #B100FF, #9900FF 60%, #7C00FF);
```

#### 3. Header/Banner Gradient
```css
background: linear-gradient(90deg, #4A36C2, #7C00FF);
```

#### 4. Accent Highlight Gradient
```css
background: linear-gradient(90deg, #7C00FF, #C961E3);
```

#### 5. Subtle Background Gradient (Discord-Inspired)
```css
background: linear-gradient(180deg, #1E1F22, #2B2D31);
```

#### 6. Premium Accent Gradient
```css
background: linear-gradient(90deg, #7C00FF, #D4AF37);
```

### Gradient Application Rules

1. **Element Suitability**
   - Buttons: Primary Button Gradient
   - Main headers: Header Gradient
   - Backgrounds: Subtle Background Gradient
   - Premium elements: Premium Accent Gradient
   - Standout elements: Accent Highlight Gradient

2. **Direction Guidelines**
   - Horizontal (90deg): Action elements (buttons, controls)
   - Vertical (180deg): Backgrounds, containers
   - Diagonal (135deg): Dynamic elements, logo, special features

3. **Performance Considerations**
   - Limit animated gradients to max one per view
   - Use simpler two-color gradients for mobile devices
   - Consider fallbacks for older browsers

4. **Discord-Inspired Integration**
   - Use gradients sparingly against the neutral Discord-inspired backgrounds
   - Consider subtle 2-3% opacity gradients for large surface areas
   - Reserve full-opacity gradients for interactive elements and key UI components

---

## 4. GLOW EFFECTS

### Standard Glow Levels

#### 1. Subtle Glow (UI Elements)
```css
box-shadow: 0 0 10px rgba(124, 0, 255, 0.15);
```

#### 2. Medium Glow (Interactive Elements)
```css
box-shadow: 0 0 15px rgba(124, 0, 255, 0.3);
```

#### 3. Strong Glow (Featured Elements)
```css
box-shadow: 0 0 20px rgba(124, 0, 255, 0.5);
```

#### 4. Intense Glow (Key Moments)
```css
box-shadow: 0 0 30px rgba(124, 0, 255, 0.7);
```

### Glow Implementation Rules

1. **Usage Hierarchy**
   - Intense Glow: Maximum one per view, only for primary CTA or featured content
   - Strong Glow: Limited to 2-3 elements per view
   - Medium Glow: Standard for interactive elements
   - Subtle Glow: Can be used liberally for visual interest

2. **Discord-Inspired Integration**
   - Glow effects appear more dramatic against neutral Discord-inspired backgrounds
   - Use glows strategically to highlight key actions against calm neutral backgrounds
   - Consider reducing glow intensity by 10-15% to maintain the calming effect of the neutral palette

3. **Accessibility Considerations**
   - Never rely on glow alone to indicate state or interactivity
   - Maintain sufficient contrast ratios even when glow is applied
   - Provide alternative indicators for users with visual sensitivity

---

## 5. SHADOWS & ELEVATION

### Elevation System

The elevation system defines 5 distinct layers of elevation, each with its own shadow properties.

#### 0. Base Layer (No Elevation)
```css
box-shadow: none;
```

#### 1. Subtle Elevation (Cards, Containers)
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

#### 2. Medium Elevation (Dropdowns, Popovers)
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
```

#### 3. High Elevation (Modals, Dialogs)
```css
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
```

#### 4. Maximum Elevation (Critical Alerts, Onboarding)
```css
box-shadow: 0 16px 24px rgba(0, 0, 0, 0.25);
```

### Discord-Inspired Shadow Adjustments

For the Discord-inspired system, shadows should be more subtle but still maintain elevation cues:

```css
/* Discord-inspired shadow adjustments */
.elevation-1 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.elevation-2 {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.elevation-3 {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
}

.elevation-4 {
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
}
```

### Elevation Implementation Rules

1. **Z-Index Management**
   - Elevation 0: z-index 0-9
   - Elevation 1: z-index 10-19
   - Elevation 2: z-index 20-29
   - Elevation 3: z-index 30-39
   - Elevation 4: z-index 40+

2. **Animation Guidelines**
   - Transition timing: 0.2s for elevation changes
   - Ease function: cubic-bezier(0.4, 0, 0.2, 1)
   - Always animate both shadow and transform properties

3. **Discord-Inspired Integration**
   - Combine elevation with subtle border color changes (using Discord Divider color)
   - Consider using 1px borders with Discord-inspired neutral colors instead of heavy shadows when appropriate
   - For elements on darker backgrounds, reduce shadow opacity by 15% to maintain the calming effect

---

## 6. BORDER SPECIFICATIONS

### Border Widths

| Name | Size | Usage | Example |
|------|------|-------|---------|
| Hairline | 1px | Subtle separators, table cells | Dividers, subtle card borders |
| Thin | 2px | Standard borders, active indicators | Form field, button borders |
| Medium | 3px | Emphasis, focus states | Focused elements, active tabs |
| Thick | 4px | Major emphasis, structural borders | Featured containers, section separators |

### Border Radii

| Name | Size | Usage | Example |
|------|------|-------|---------|
| None | 0 | Sharp edges, technical interfaces | Code blocks, data tables |
| Slight | 4px | Subtle rounding, utility elements | Form inputs, cards, buttons |
| Rounded | 8px | Standard UI elements | Containers, modals, tooltips |
| Pill | 999px | Buttons, tags, badges | Action buttons, status indicators |
| Circular | 50% | Profile elements, icons | Avatar images, icon buttons |

### Discord-Inspired Border Colors

```css
/* Main border color for light elements on dark backgrounds */
.border-light {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Main border color for dark elements on light backgrounds */
.border-dark {
  border-color: rgba(0, 0, 0, 0.1);
}

/* Discord divider color */
.border-divider {
  border-color: #3F4147;
}

/* Highlight border */
.border-highlight {
  border-color: #7C00FF;
}
```

### Border Implementation Rules

1. **Border/Background Combinations**
   - Discord Dark + #3F4147 borders
   - Discord Light + rgba(0, 0, 0, 0.1) borders
   - Use borders sparingly, following Discord's minimal approach to borders

2. **Border Radius Consistency**
   - Maintain consistent radius within related element groups
   - Use 8px as the default radius for most containers (Discord-inspired)
   - Inner elements should never have larger radii than their containers

3. **Discord-Inspired Integration**
   - Use hairline (1px) borders for most UI elements
   - Consider using borders instead of shadows for subtle elevation in some cases
   - Reserve colored borders for interactive states and highlights

---

## 7. SPACING SYSTEM

### Base Unit

The spacing system is built on a base unit of **4px**. All spacing values should be multiples of this base unit.

### Spacing Scale

| Token | Value | Example Use |
|-------|-------|-------------|
| space-0 | 0 | Remove margin/padding |
| space-1 | 4px | Minimum spacing between related elements |
| space-2 | 8px | Default spacing for related items |
| space-3 | 12px | Separation between form elements |
| space-4 | 16px | Standard component padding |
| space-5 | 24px | Separation between distinct sections |
| space-6 | 32px | Major section spacing |
| space-7 | 48px | Content area padding |
| space-8 | 64px | Page section separation |
| space-9 | 96px | Major layout divisions |
| space-10 | 128px | Maximum spacing value |

### Discord-Inspired Spacing Considerations

1. **Consistent Gutters**
   - Use 16px (space-4) as the standard gutter between related elements (Discord standard)
   - Use 8px (space-2) for compact UIs and related controls
   - Consider 20px spacing for section divisions within the same context

2. **Component Padding**
   - Cards/Containers: 16px padding (standard)
   - Modals/Dialogs: 24px padding
   - Form elements: 10px vertical, 12px horizontal 

3. **Content Breathing Room**
   - Allow for generous whitespace in content areas (like Discord)
   - Use 16px minimum padding inside containers
   - Consider 48px+ spacing between major sections

---

## 8. DARK & LIGHT MODE IMPLEMENTATION

### Discord-Inspired Color Mapping

| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| **Background (Primary)** | Discord Dark (#1E1F22) | Discord Light (#F2F3F5) |
| **Background (Secondary)** | Discord Grey (#2B2D31) | #E3E5E8 |
| **Background (Tertiary)** | Discord Light Grey (#313338) | #EBEDEF |
| **Text (Primary)** | Discord Text Grey (#B5BAC1) | Discord Light Text (#2E3338) |
| **Text (Secondary)** | #A0A5AC | #4F545C |
| **Borders (Primary)** | #3F4147 | #D4D7DC |
| **Borders (Subtle)** | rgba(255, 255, 255, 0.1) | rgba(0, 0, 0, 0.1) |
| **Buttons (Primary)** | Primary Button Gradient | Primary Button Gradient |
| **Buttons (Secondary)** | #4E5058 | #E0E1E5 |

### Mode-Specific Adjustments

#### 1. Shadow Adjustments
```css
.dark-mode .elevation-2 {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.light-mode .elevation-2 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

#### 2. Glow Adjustments
```css
.dark-mode .button:hover {
  box-shadow: 0 0 25px rgba(177, 0, 255, 0.5);
}

.light-mode .button:hover {
  box-shadow: 0 0 15px rgba(177, 0, 255, 0.3);
}
```

#### 3. Gradient Adjustments
```css
.dark-mode .subtle-background-gradient {
  background: linear-gradient(180deg, #1E1F22, #2B2D31);
}

.light-mode .subtle-background-gradient {
  background: linear-gradient(180deg, #F2F3F5, #E3E5E8);
}
```

### Mode Transition

For smooth transitions between dark and light modes:

```css
/* Apply to html or body element */
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Apply to all elements for comprehensive transition */
.theme-transition * {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
```

### Implementation Using CSS Variables

```css
:root {
  /* Discord-inspired Light mode defaults */
  --background-primary: #F2F3F5;
  --background-secondary: #E3E5E8;
  --background-tertiary: #EBEDEF;
  --text-primary: #2E3338;
  --text-secondary: #4F545C;
  --border-primary: #D4D7DC;
  --border-subtle: rgba(0, 0, 0, 0.1);
  
  /* Brand colors (constant) */
  --color-primary: #7C00FF;
  --color-primary-light: #B100FF;
  --color-primary-dark: #4A36C2;
  --color-accent: #C961E3;
  --color-premium: #D4AF37;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-primary: #1E1F22;
    --background-secondary: #2B2D31;
    --background-tertiary: #313338;
    --text-primary: #B5BAC1;
    --text-secondary: #A0A5AC;
    --border-primary: #3F4147;
    --border-subtle: rgba(255, 255, 255, 0.1);
  }
}

/* For manual mode switching */
html[data-theme="dark"] {
  --background-primary: #1E1F22;
  --background-secondary: #2B2D31;
  --background-tertiary: #313338;
  --text-primary: #B5BAC1;
  --text-secondary: #A0A5AC;
  --border-primary: #3F4147;
  --border-subtle: rgba(255, 255, 255, 0.1);
}
```

### Discord-Inspired Implementation Guidelines

1. **Content Consistency**
   - Maintain identical information architecture between modes
   - Ensure all interactive elements have the same functionality
   - Use Discord-inspired neutral palette as the foundation for both modes

2. **Brand Color Application**
   - Apply brand colors (purples) consistently across both modes 
   - Consider slightly reducing color saturation in light mode
   - Use brand colors primarily for interactive elements and accents

3. **User Preference Handling**
   - Default to system preference using `prefers-color-scheme`
   - Provide easy access toggle in navigation
   - Remember user preference in local storage

---

## 9. COMPONENT SPECIFICATIONS

### Discord-Inspired Card Component

```css
.card {
  background-color: var(--background-tertiary);
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--border-subtle);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: var(--border-primary);
}

.card-header {
  margin-bottom: 16px;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  color: var(--text-primary);
  margin: 0 0 8px 0;
}

.card-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.card-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
}
```

### Discord-Inspired Button Components

#### Primary Button
```css
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: var(--color-primary);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  border-radius: 4px;
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.button-primary:hover {
  background-color: var(--color-primary-light);
  transform: translateY(-1px);
}

.button-primary:active {
  transform: translateY(0);
}

/* For special actions, use gradient */
.button-primary.special {
  background: linear-gradient(90deg, #B100FF, #9900FF 60%, #7C00FF);
  box-shadow: 0 0 10px rgba(177, 0, 255, 0.2);
}

.button-primary.special:hover {
  box-shadow: 0 0 15px rgba(177, 0, 255, 0.3);
}
```

#### Secondary Button
```css
.button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: transparent;
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid var(--border-primary);
  transition: all 0.2s ease;
  cursor: pointer;
}

.button-secondary:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-color: var(--text-secondary);
}

.dark-mode .button-secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
```

### Discord-Inspired Form Elements

#### Text Input
```css
.input {
  width: 100%;
  padding: 10px 12px;
  background-color: var(--background-tertiary);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(124, 0, 255, 0.2);
}

.input::placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}

/* Discord-style dark input */
.dark-mode .input {
  background-color: rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.2);
}
```

### Discord-Inspired Navigation

#### Sidebar Navigation
```css
.sidebar {
  width: 240px;
  height: 100%;
  background-color: var(--background-secondary);
  padding: 16px 0;
  overflow-y: auto;
}

.sidebar-header {
  padding: 0 16px 16px;
  border-bottom: 1px solid var(--border-subtle);
}

.sidebar-section {
  margin: 24px 0 8px;
  padding: 0 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--text-secondary);
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-primary);
  border-radius: 4px;
  margin: 2px 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sidebar-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.dark-mode .sidebar-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.sidebar-item.active {
  background-color: rgba(124, 0, 255, 0.1);
  color: var(--color-primary);
}

.sidebar-item-icon {
  margin-right: 8px;
  width: 18px;
  height: 18px;
  opacity: 0.8;
}
```

---

## 10. CSS VARIABLES & IMPLEMENTATION

### Core CSS Variables Setup

```css
:root {
  /* Color System - Discord-Inspired */
  --background-primary: #F2F3F5;
  --background-secondary: #E3E5E8;
  --background-tertiary: #EBEDEF;
  --text-primary: #2E3338;
  --text-secondary: #4F545C;
  --border-primary: #D4D7DC;
  --border-subtle: rgba(0, 0, 0, 0.1);
  
  /* Brand Colors */
  --color-primary: #7C00FF;
  --color-primary-light: #B100FF;
  --color-primary-dark: #4A36C2;
  --color-accent: #C961E3;
  --color-indigo: #383B6C;
  --color-premium: #D4AF37;
  
  /* UI States */
  --color-success: #36D399;
  --color-warning: #FBBD23;
  --color-error: #F87272;
  --color-info: #4A36C2;
  
  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-family-premium: 'Quattrocento', serif;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-light: 300;
  --font-weight-extralight: 200;
  
  /* Font Sizes */
  --font-size-h1: 2.75rem; /* 44px */
  --font-size-h2: 2.25rem; /* 36px */
  --font-size-h3: 1.75rem; /* 28px */
  --font-size-h4: 1.5rem; /* 24px */
  --font-size-body: 1.125rem; /* 18px */
  --font-size-body-sm: 1rem; /* 16px */
  --font-size-caption: 0.875rem; /* 14px */
  
  /* Line Heights */
  --line-height-heading: 1.2;
  --line-height-body: 1.5;
  
  /* Spacing */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.5rem; /* 24px */
  --space-6: 2rem; /* 32px */
  --space-7: 3rem; /* 48px */
  --space-8: 4rem; /* 64px */
  --space-9: 6rem; /* 96px */
  --space-10: 8rem; /* 128px */
  
  /* Borders */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-pill: 999px;
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --border-width-medium: 3px;
  --border-width-thick: 4px;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 16px 24px rgba(0, 0, 0, 0.12);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Z-indices */
  --z-index-dropdown: 10;
  --z-index-sticky: 20;
  --z-index-fixed: 30;
  --z-index-modal: 40;
  --z-index-popover: 50;
  --z-index-tooltip: 60;
}
```

### Dark Mode Variables

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-primary: #1E1F22;
    --background-secondary: #2B2D31;
    --background-tertiary: #313338;
    --text-primary: #B5BAC1;
    --text-secondary: #A0A5AC;
    --border-primary: #3F4147;
    --border-subtle: rgba(255, 255, 255, 0.1);
    
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.3);
    --shadow-xl: 0 16px 24px rgba(0, 0, 0, 0.35);
  }
}

/* For manual theme switching */
html[data-theme="dark"] {
  --background-primary: #1E1F22;
  --background-secondary: #2B2D31;
  --background-tertiary: #313338;
  --text-primary: #B5BAC1;
  --text-secondary: #A0A5AC;
  --border-primary: #3F4147;
  --border-subtle: rgba(255, 255, 255, 0.1);
  
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 16px 24px rgba(0, 0, 0, 0.35);
}
```

### SCSS Mixins for Discord-Inspired Design

```scss
// Typography Mixins
@mixin heading-1 {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-h1);
  line-height: var(--line-height-heading);
  letter-spacing: -0.5px;
  color: var(--text-primary);
}

@mixin heading-2 {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-h2);
  line-height: var(--line-height-heading);
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

@mixin body-text {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-body-sm);
  line-height: var(--line-height-body);
  color: var(--text-primary);
}

// Discord-Inspired Component Mixins
@mixin discord-card {
  background-color: var(--background-tertiary);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-subtle);
  padding: var(--space-4);
  transition: all var(--transition-fast);
}

@mixin discord-input {
  background-color: var(--background-tertiary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-sm);
  padding: 10px 12px;
  font-size: 14px;
  transition: all var(--transition-fast);
  
  &:focus {
    border-color: var(--color-primary);
    outline: none;
  }
}

// Interactive Element Mixins
@mixin hover-effect {
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    
    @at-root .dark-mode & {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
}

// Brand Accent Mixins
@mixin brand-accent {
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: var(--color-primary);
    border-radius: var(--border-radius-sm) 0 0 var(--border-radius-sm);
  }
}

// Responsive Mixins
@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: 768px) and (max-width: 1023px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}
```

### Implementation Examples

#### Discord-Inspired Card Component

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Course Module: Introduction</h3>
  </div>
  <div class="card-body">
    <p>Learn the basics of the Black Panther system and prepare for your transformation journey.</p>
  </div>
  <div class="card-footer">
    <button class="button-primary">Start Module</button>
  </div>
</div>
```

```scss
.card {
  @include discord-card;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  // Premium variant
  &.premium {
    @include brand-accent;
    
    .card-title {
      color: var(--color-primary);
    }
  }
}
```

#### Discord-Inspired Page Layout

```html
<div class="app-container">
  <div class="sidebar">
    <!-- Sidebar content -->
  </div>
  <div class="main-content">
    <header class="page-header">
      <h1>Black Panther</h1>
    </header>
    <div class="content-area">
      <!-- Main content -->
    </div>
  </div>
</div>
```

```scss
.app-container {
  display: flex;
  height: 100vh;
  background-color: var(--background-primary);
  color: var(--text-primary);
}

.sidebar {
  width: 240px;
  background-color: var(--background-secondary);
  padding: var(--space-4) 0;
}

.main-content {
  flex: 1;
  overflow-y: auto;
}

.page-header {
  padding: var(--space-5);
  border-bottom: 1px solid var(--border-subtle);
  
  h1 {
    @include heading-1;
    margin: 0;
  }
}

.content-area {
  padding: var(--space-5);
  max-width: 1200px;
  margin: 0 auto;
}
```

---

## 11. ACCESSIBILITY GUIDELINES

### Color Contrast Requirements

All color combinations must meet the following minimum contrast ratios:

1. **WCAG 2.1 AA Standards**
   - Normal text (< 18pt): 4.5:1 minimum
   - Large text (≥ 18pt or 14pt bold): 3:1 minimum
   - UI components and graphical objects: 3:1 minimum

2. **Recommended Text/Background Combinations**
   - Dark mode text: Discord Text Grey (#B5BAC1) on Discord Dark (#1E1F22) - 7.5:1
   - Light mode text: Discord Light Text (#2E3338) on Discord Light (#F2F3F5) - 12.8:1
   - Primary Purple (#7C00FF) on Discord Dark (#1E1F22) - 4.9:1
   - Primary Purple (#7C00FF) should use white text when used as a background

### Focus States

All interactive elements must have clear focus states:

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* For elements where default outline is unsuitable */
.custom-focus:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background-primary), 0 0 0 4px var(--color-primary);
}
```

### Reduced Motion Considerations

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  
  .grain-texture::after,
  .line-texture::after {
    display: none !important;
  }
}
```

### Form Controls Accessibility

1. **Labels & Instructions**
   - All form controls must have associated labels
   - Use the `for` attribute to connect labels with inputs
   - Instructions should be clear and positioned before the input
   - Error messages should be clear and associated with the input using `aria-describedby`

2. **Keyboard Navigation**
   - Ensure proper tab order using the natural DOM order
   - Make sure focus states are clearly visible
   - Provide keyboard shortcuts for common actions when appropriate, documented with `aria-keyshortcuts`

3. **ARIA Attributes for Enhanced Forms**
   ```html
   <div class="form-group">
     <label for="username" id="username-label">Username</label>
     <input 
       type="text" 
       id="username" 
       aria-labelledby="username-label" 
       aria-describedby="username-hint username-error"
       aria-required="true"
     >
     <div id="username-hint" class="form-hint">Choose a unique username</div>
     <div id="username-error" class="form-error" aria-live="polite"></div>
   </div>
   ```

### Discord-Inspired Accessibility Features

1. **High Contrast Mode**
   - Provide a high contrast theme option beyond standard light/dark
   - Enhance border contrast in high contrast mode
   - Use solid backgrounds instead of subtle gradients

2. **Reduced Animation Mode**
   - Beyond standard `prefers-reduced-motion`, provide a toggle for animation reduction
   - Create simplified transitions as alternatives to more complex animations

3. **Screen Reader Optimizations**
   - Add "skip to content" links that are visible on focus
   - Ensure proper heading hierarchy
   - Use ARIA landmarks consistently (header, main, navigation, footer)
   - Test with popular screen readers (NVDA, VoiceOver)

4. **Keyboard Navigation Enhancements**
   - Implement consistent keyboard shortcuts for navigation
   - Support arrow key navigation within component groups
   - Ensure all interactive components have appropriate focus management

### Implementation Checklist

- [ ] Test color contrast of all text and UI combinations
- [ ] Ensure all interactive elements have focus states
- [ ] Implement reduced motion accommodations
- [ ] Test with keyboard navigation
- [ ] Add appropriate ARIA attributes
- [ ] Test with screen readers (NVDA, VoiceOver)
- [ ] Implement proper semantic HTML
- [ ] Ensure color is not the sole means of conveying information
