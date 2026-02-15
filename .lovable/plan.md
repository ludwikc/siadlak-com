

## Fixes: Remove Gap Above Content + Make Header Text Light

### Problem 1: Bright gap at top of pages
The header height is `h-16` (64px), but Layout applies `pt-20` (80px) of top padding. The extra 16px shows the page's light background peeking through above the first section. Fix: change `pt-20` to `pt-16` to match the header exactly.

### Problem 2: Header text not visible on dark bar
The header links ("LCS / Upgrade" and "Aplikuj") have no explicit text color, so they inherit from the page — which may be dark text on a dark bar. Fix: add `text-white` to both links.

---

### Technical Details

**File: `src/components/layout/Layout.tsx` (line 29)**
- Change `pt-20` to `pt-16` so main content starts right after the 64px header with no gap.

**File: `src/components/layout/Header.tsx`**
- Add `text-white` to the brand `<Link>` (line 7)
- Add `text-white` to the "Aplikuj" `<Link>` (line 11)

