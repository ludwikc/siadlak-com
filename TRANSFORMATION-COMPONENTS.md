# Transformation Component Pattern Library

Reusable coaching-brand utility classes for consistent transformation/life coaching aesthetic.

## 🎨 Design Principles

- **Light, not dark** - Possibility, not mystery
- **Blue, not purple** - Trust & growth, not technology
- **Grid patterns** - Structure, not chaos
- **Static depth** - Calm confidence, not animated excitement
- **Transformation language** - Impact, not features

## 📦 Available Utilities

### Background Components

#### `.bg-transformation-light`

Light gradient background for hero sections.

```tsx
<section className="bg-transformation-light">
  {/* Light, airy hero content */}
</section>
```

#### `.bg-transformation-grid`

Subtle grid pattern overlay (use with absolute positioning).

```tsx
<div className="absolute inset-0 bg-transformation-grid opacity-20"></div>
```

#### `.bg-transformation-hero`

Complete hero background with gradient + grid (automatically includes ::before pseudo-element).

```tsx
<section className="bg-transformation-hero">
  {/* Grid pattern automatically applied */}
</section>
```

### Card Components

#### `.transformation-card`

Standard transformation card with hover effects.

```tsx
<div className="transformation-card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

**Features:**

- White background
- 2rem padding
- Transformation-blue border (20% opacity)
- Hover: lift + border intensifies + shadow grows

#### `.transformation-card-elevated`

Premium elevated card for featured content.

```tsx
<div className="transformation-card-elevated">
  <h3>Premium Feature</h3>
  <p>Special content...</p>
</div>
```

**Features:**

- Larger padding (2.5rem)
- Larger border-radius (1.5rem)
- Elevated shadow (more dramatic)
- Hover: dramatic shadow + lift

#### `.transformation-card-feature`

Feature card with playful hover rotation.

```tsx
<div className="transformation-card-feature">
  <h3>Feature Title</h3>
  <p>Feature description...</p>
</div>
```

**Features:**

- Same as elevated but with rotation on hover (-1deg)
- Perfect for grid layouts of features/benefits

### Section Components

#### `.transformation-section-light`

Light gradient section for hero/important areas.

```tsx
<section className="transformation-section-light">
  <div className="container mx-auto px-4">{/* Section content */}</div>
</section>
```

**Features:**

- 5rem padding top/bottom
- Light gradient background
- Overflow hidden
- Relative positioning for absolute children

#### `.transformation-section-clean`

Clean, minimal section for content areas.

```tsx
<section className="transformation-section-clean">
  <div className="container mx-auto px-4">{/* Clean content section */}</div>
</section>
```

**Features:**

- 5rem padding top/bottom
- Muted background (30% opacity)
- No decorative elements - content breathes

#### `.transformation-section-cta`

Energizing CTA section with light gradient.

```tsx
<section className="transformation-section-cta">
  <div className="container mx-auto px-4">{/* CTA content */}</div>
</section>
```

**Features:**

- 5rem padding top/bottom
- Blue-to-gold gradient (very subtle)
- Overflow hidden for orbs/effects

### Button Components

#### `.btn-transformation-primary`

Primary action button with gradient.

```tsx
<button className="btn-transformation-primary">
  Get Started
  <ArrowRight className="w-5 h-5" />
</button>
```

**Features:**

- Blue-to-green gradient
- Large padding (0.75rem 2rem)
- Hover: gradient reverses + scale 1.05 + shadow

#### `.btn-transformation-secondary`

Secondary action button (outline style).

```tsx
<button className="btn-transformation-secondary">Learn More</button>
```

**Features:**

- White background
- Transformation-blue border + text
- Hover: light blue background + lift

#### `.btn-transformation-ghost`

Ghost button for tertiary actions.

```tsx
<button className="btn-transformation-ghost">View Details →</button>
```

**Features:**

- Transparent background
- Transformation-blue text
- Hover: light background + slide right

### Badge Components

#### `.transformation-badge`

Standard transformation badge.

```tsx
<span className="transformation-badge">New Feature</span>
```

**Features:**

- Transformation-blue (10% bg, 30% border)
- Pill shape (rounded-full)
- Small, compact padding

#### `.transformation-badge-success`

Success/achievement badge.

```tsx
<span className="transformation-badge-success">Completed</span>
```

**Features:**

- Success-green colors
- Same styling as standard badge

#### `.transformation-badge-premium`

Premium/exclusive badge.

```tsx
<span className="transformation-badge-premium">Premium Only</span>
```

**Features:**

- Growth-gold colors
- Same styling as standard badge

## 🎯 Usage Examples

### Hero Section Pattern

```tsx
<section className="transformation-section-light">
  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

  {/* Static gradient orbs */}
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/8 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="transformation-card-elevated max-w-4xl mx-auto text-center">
      <span className="transformation-badge mb-6">New Program</span>
      <h1 className="text-5xl font-bold mb-6">Transform Your Life</h1>
      <p className="text-xl mb-8">Your journey starts here...</p>
      <button className="btn-transformation-primary">Start Your Journey</button>
    </div>
  </div>
</section>
```

### Feature Grid Pattern

```tsx
<section className="transformation-section-clean">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.id} className="transformation-card-feature">
          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
          <p className="text-deep-charcoal/70">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### CTA Section Pattern

```tsx
<section className="transformation-section-cta">
  <div className="container mx-auto px-4 text-center">
    <div className="transformation-card-elevated max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
      <p className="text-xl mb-8">
        Join 1,000+ people transforming their lives
      </p>
      <div className="flex gap-4 justify-center">
        <button className="btn-transformation-primary">Get Started</button>
        <button className="btn-transformation-secondary">Learn More</button>
      </div>
    </div>
  </div>
</section>
```

## 🎨 Color Reference

- **Transformation Blue**: `hsl(217 91% 60%)` - #2563eb
- **Success Green**: `hsl(142 76% 36%)` - #059669
- **Growth Gold**: `hsl(38 92% 50%)` - #f59e0b
- **Deep Charcoal**: Text color for body content
- **Muted**: Background tints at 30% opacity

## ⚠️ Anti-Patterns (Don't Do This)

❌ **Dark backgrounds** - Use light backgrounds instead

```tsx
// BAD
<section className="bg-gradient-to-br from-deep-space via-quantum-blue">

// GOOD
<section className="transformation-section-light">
```

❌ **Pulsing animations** - Use static depth instead

```tsx
// BAD
<div className="animate-pulse">

// GOOD
<div className="transformation-card"> {/* Static hover effects */}
```

❌ **Tech jargon** - Use transformation language

```tsx
// BAD
<h1>8-week transformation from engineer to trainer</h1>

// GOOD
<h1>From Engineer to Thought Leader: Your 8-Week Journey</h1>
```

❌ **High contrast orbs** - Use subtle depth

```tsx
// BAD (too visible)
<div className="bg-neural-violet/30 blur-3xl animate-pulse">

// GOOD (barely perceptible)
<div className="bg-[#2563eb]/8 blur-3xl"> {/* 8% opacity, static */}
```

## 📚 Related Files

- `src/index.css` - Color variables and base styles
- `tailwind.config.ts` - Utility class definitions
- `src/pages/Wyzwanie.tsx` - Reference implementation (CORRECT aesthetic)
- `CLAUDE.md` - Project coding standards

## 🔄 Migration Guide

When updating existing components:

1. **Replace dark backgrounds** → `transformation-section-light` or `transformation-section-clean`
2. **Replace tech color borders** → Transformation-blue borders in cards
3. **Replace pulsing orbs** → Static orbs at 8-10% opacity
4. **Replace neural-violet/quantum-blue** → transformation-blue
5. **Update copy** → Transformation language, not tech jargon

Example migration:

```tsx
// BEFORE (Tech/SaaS)
<section className="bg-gradient-to-br from-deep-space via-quantum-blue">
  <div className="bg-white/10 backdrop-blur-sm border border-white/20">
    <h1 className="text-white">Technical Training Program</h1>
  </div>
</section>

// AFTER (Transformation/Coaching)
<section className="transformation-section-light">
  <div className="transformation-card-elevated">
    <h1 className="text-deep-charcoal">Master Your Impact Journey</h1>
  </div>
</section>
```
