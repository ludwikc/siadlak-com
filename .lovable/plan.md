

## Simplify Header to Ultra-Minimal Navigation

Replace the entire current Header component (480+ lines with popup/overlay menu, dropdowns, mobile hamburger, scroll effects) with an ultra-simple fixed navbar matching the provided HTML example.

### What will change

**Remove:**
- Full-screen navigation popup/overlay with all its cards, links, and animations
- Desktop dropdown menu ("Mozliwosci" button with hover/click logic)
- Mobile hamburger menu (Menu/X toggle, slide-in panel)
- Scroll-based style changes (isScrolled state, shadow transitions)
- All related state management (isMenuOpen, isDropdownOpen, refs, timeouts, event listeners)
- All unused imports (Menu, X, ChevronDown, Book, Headphones, Users, Mail, Video, Lock, Home, Calendar, ExternalLink, useState, useEffect, useRef)

**Keep:**
- Fixed top navigation bar
- Link to homepage via logo

**New design (matching provided HTML):**
- Fixed bar: `bg-void/80 backdrop-blur-md border-b border-white/5`
- Height: `h-16`, max-width `max-w-7xl`
- Left: Brand text "LCS / Upgrade" with "/" in `text-electric`
- Right: Single "Aplikuj" link pointing to `/discovery`
- Typography: `text-xs font-bold uppercase tracking-widest` for the link, `text-sm font-display font-bold tracking-widest uppercase` for the brand

### Technical details

**File:** `src/components/layout/Header.tsx`

The entire file will be replaced with approximately 25 lines:

```tsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold tracking-widest uppercase text-sm">
          LCS <span className="text-electric">/</span> Upgrade
        </Link>
        <Link
          to="/discovery"
          className="text-xs font-bold uppercase tracking-widest hover:text-electric transition-colors"
        >
          Aplikuj
        </Link>
      </div>
    </nav>
  );
}
```

No other files need changes -- the Header is already imported and used in `Layout.tsx` as-is.

