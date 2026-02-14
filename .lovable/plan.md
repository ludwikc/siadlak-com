

# New Page: /webinar/depresja

## Overview
A deeply personal, emotionally resonant landing page for a free online meeting on International Depression Awareness Day (February 23, 2026). The tone is raw, vulnerable, and human -- the opposite of a sales webinar. The design must reflect that: warm, quiet, safe, with no flashy gradients or aggressive CTAs.

## Design Direction

**Theme: "Safe Harbor"** -- subdued, warm, human. Not the usual dark/premium webinar aesthetic.

- Background: soft warm white (`#FAF8F5`) with very subtle warm grey sections
- Text: deep charcoal (`#1a1a2e`) for readability, muted grey for secondary text
- Accent: a single soft teal/blue-green (`#2B7A78`) -- calm, clinical trust, not aggressive
- Emergency strip at bottom: warm amber background with crisis hotline numbers -- always visible
- No flashy gradients, no glow effects, no countdown timers
- Hero uses Ludwik's profile image with a soft, human presentation
- CTA button: solid teal, understated, with arrow -- not screaming "BUY NOW"

## Technical Implementation

### 1. Create `src/pages/WebinarDepresja.tsx`

Single-file page component (following WebinarKodKapitana pattern):

**Sections:**
1. **Hero** -- "Nie musisz tego znosic sam." Large, quiet typography. Date badge: "23 lutego 2026". Subtitle about the free meeting. Profile image with warm border.
2. **Symptoms** -- "Czy ostatnio lapiesz sie na tym, ze..." -- 6 pain points, each as a quiet card with subtle left border accent
3. **Personal Story** -- "Wiem, co czujesz. Bo to czulem." -- Blockquote with the metro station story. Personal narrative in prose.
4. **What You'll Get** -- 5 bullet points with check icons
5. **Logistics + CTA** -- Date/time/format badges + single CTA button linking to `https://buy.siadlak.com/checkout/depresja2026`
6. **Crisis Footer** -- Fixed or prominent strip with emergency phone numbers (116 123, 800 70 2222)

**Layout:** `hideHeader={true}`, `hideFooter={true}` (landing page pattern)

### 2. Add route to `src/App.tsx`

```
import WebinarDepresja from "./pages/WebinarDepresja";
// ...
<Route path="/webinar/depresja" element={<WebinarDepresja />} />
```

### 3. SEO

Using the existing `<SEO>` component with appropriate title and description for this sensitive topic.

## Section Details

### Hero
- Warm white background, no dark gradient
- Large heading: "Nie musisz tego znosic sam."
- Subdued date badge (not urgency -- just information)
- Profile image of Ludwik (from existing uploads)
- Single line: "Bezplatne spotkanie online z czlowiekiem, ktory stal na krawedzi peronu -- i wrocil."

### Symptoms Section
- 6 cards, each with a soft left border in teal
- Bold lead phrase + normal description text
- Quiet, empathetic tone -- no exclamation marks, no urgency

### Personal Story
- Blockquote styled with left border and italic text
- Narrative paragraphs with generous line spacing
- "Siadlak" introduction with credentials mentioned casually

### Benefits (What You'll Get)
- Simple list with soft check icons
- Each item as clean text, no cards needed

### Logistics + CTA
- Date/time/format in a clean row of badges
- "To nie jest webinar sprzedazowy" disclaimer
- Single CTA: "Dolaczam do spotkania" linking to checkout URL
- Note about Q&A not being recorded

### Crisis Strip
- Warm amber/orange background at page bottom
- Emergency numbers prominently displayed
- Always visible, not hidden

