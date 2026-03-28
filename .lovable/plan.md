

# Add `/siadlakvip` Community Structure Page

## Summary

Create a new page explaining the SIADLAK.VIP community umbrella and its sub-communities (Telegram, Lifehackerzy Discord, DeepWork.pl, UwazneZycie.pl). Follows the visual and structural patterns from `/start` (Wspolpraca).

## New file: `src/pages/SiadlakVIP.tsx`

A content page using `Layout` with the Diamond Hybrid system (alternating `bg-void-glow` / `bg-diamond` sections). Structure:

1. **Hero** (`bg-void-glow`): H1 "SIADLAK.VIP", subtitle explaining it's the umbrella over all communities
2. **Overview section** (`bg-diamond`): Visual diagram showing the hierarchy - SIADLAK.VIP as the "parasol" containing two main branches
3. **Section 1: SIADLAK.VIP Telegram** (`bg-void-glow`): Card explaining the private Telegram group with personal reflections. CTA linking to Telegram
4. **Section 2: LIFEHACKERZY** (`bg-diamond`): Card for the full Discord community. Two nested sub-cards:
   - **2A: DeepWork.pl** - Deep work co-working channel
   - **2B: UwazneZycie.pl** - Weekly Tuesday 6:30 AM meditation channel
5. **Navigation / CTA** (`bg-void-glow`): Links to `/start`, `/program`, `/discovery`
6. **P.S. + signature** (matching Wspolpraca pattern)

Uses the same `Eyebrow` and `TheCut` patterns from Wspolpraca. Includes SEO component with topical meta.

## Modified files

### `src/App.tsx`
- Import `SiadlakVIP` page
- Add route: `<Route path="/siadlakvip" element={<SiadlakVIP />} />`

### `src/routes.ts`
- Add `'/siadlakvip'` to the static routes array

### `src/lib/seo-config.ts`
- Add SEO config entry for `/siadlakvip` with answer-style description about the community structure

## Technical details

- Reuses existing design tokens: `bg-void-glow`, `bg-diamond`, `text-electric`, `text-dim`, `text-on-light`
- External links to `https://deepwork.pl`, `https://uwaznezycie.pl`, `https://lifehackerzy.pl` with `target="_blank" rel="noopener noreferrer"`
- Hierarchy visualized with nested cards and indentation (2A/2B visually nested under Lifehackerzy)
- Standard header/footer visible (not a landing page)
- No new dependencies

