

# LLM Search Optimization (GEO) - Technical Implementation Plan

## Summary

Enhance the existing SEO component with a comprehensive structured data layer optimized for AI systems (ChatGPT, Perplexity, Claude). No copy changes - only machine-readable technical signals.

## Current State

- `SEO.tsx` outputs basic JSON-LD (WebSite or Article only), OG tags, Twitter cards
- No entity graph, no FAQ schema, no Person/Organization entities, no `knowsAbout`, no `sameAs`
- No topical tagging or authorship signals beyond basic `meta author`

---

## Architecture

### New files:
1. **`src/lib/structured-data.ts`** - Central entity definitions + page-specific schema generators
2. **`src/components/TopicalMeta.tsx`** - Hidden topic/audience/intent signals per page

### Modified files:
3. **`src/components/SEO.tsx`** - Accept new `structuredData` prop (array of JSON-LD objects), render multiple `<script type="application/ld+json">` blocks
4. **`src/lib/seo-config.ts`** - Add structured data + topical metadata to each route config
5. **Pages with FAQs** - Add FAQPage schema to pages that have FAQ content (LifeOSSystemUpgrade, SilnaGlowa, Wspolpraca, Wyzwanie, WebinarKodKapitana, CourseDetail)
6. **`src/pages/Index.tsx`** - Add comprehensive homepage entity graph
7. **`src/pages/About.tsx`** - Add Person entity with full credentials
8. **Key pages** (Discovery, Program, Wspolpraca) - Add Service/Course schemas

---

## 1. Entity Graph (`src/lib/structured-data.ts`)

Central file defining all reusable entities with consistent `@id` linking:

```text
Entity Relationship Diagram:

Person(@id: #ludwik)
  ├── founder of → Organization(@id: #siadlak-com)
  ├── offers → Service(@id: #life-os-mentoring)
  ├── offers → Service(@id: #discovery-session)
  ├── author of → Course(@id: #produktywnosc)
  ├── author of → Course(@id: #silna-glowa)
  ├── author of → Course(@id: #uwazne-zycie)
  ├── author of → Course(@id: #meski-kompas)
  ├── knowsAbout → [productivity, mindfulness, resilience,
  │                  AI leadership, coaching, Diamond Way Buddhism,
  │                  deep work, mental models, Microsoft technologies]
  └── sameAs → [LinkedIn, Instagram, X, YouTube]

Organization(@id: #siadlak-com)
  ├── brand → "Diamentowy Umysł"
  ├── areaServed → [Poland, Europe]
  ├── founder → Person(@id: #ludwik)
  └── makesOffer → [Service, Course entities]

WebSite(@id: #website)
  └── publisher → Organization(@id: #siadlak-com)
```

### Exported functions:

- `getPersonEntity()` - Full Person with `knowsAbout`, `sameAs`, credentials
- `getOrganizationEntity()` - Organization with `areaServed`, `founder` ref
- `getWebSiteEntity()` - WebSite with `publisher` ref
- `getServiceEntity(id)` - Service schemas (Life OS, Discovery)
- `getCourseEntity(id)` - Course schemas (4 programs)
- `getFAQSchema(items: {q, a}[])` - FAQPage generator
- `getWebPageEntity(url, name, description)` - WebPage with breadcrumb + `author` ref

All entities use `@id: "https://siadlak.com/#entity-name"` for cross-referencing.

---

## 2. SEO Component Enhancement

Update `SEO.tsx`:
- Add optional `jsonLd?: object[]` prop
- When provided, render each as a separate `<script type="application/ld+json">` block
- Remove the current hardcoded `structuredData` generation (replaced by explicit schemas per page)
- Keep all existing meta/OG/Twitter functionality unchanged

---

## 3. Topical Metadata Component (`src/components/TopicalMeta.tsx`)

Renders a hidden `<script type="application/ld+json">` block with page-level topic signals:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "about": [{"@type": "Thing", "name": "productivity"}],
  "audience": {"@type": "Audience", "audienceType": "tech professionals"},
  "significantLink": ["/program", "/discovery"]
}
```

Props: `primaryTopic`, `secondaryTopics[]`, `audience`, `intent` (informational/commercial).

---

## 4. Page-by-Page Implementation

### Homepage (`Index.tsx`)
- JSON-LD: Person + Organization + WebSite + WebPage (all interlinked)
- TopicalMeta: primary="productivity coaching", secondary=["mindfulness", "resilience", "AI leadership"], audience="tech professionals 30+", intent="commercial"

### About (`About.tsx`)
- JSON-LD: Person (full - with credentials, `hasCredential`, `alumniOf: Oxford Brookes`, `knowsAbout`, `sameAs`)
- TopicalMeta: primary="personal story", intent="informational"

### Program (`Program.tsx`)
- JSON-LD: ItemList of 4 Course entities + Organization as provider
- TopicalMeta: primary="mental apps", intent="commercial"

### Each Course Page (Produktywnosc, SilnaGlowa, UwazneZycie, MeskiKompas)
- JSON-LD: Course entity with `provider`, `hasCourseInstance`, `offers` (price), `coursePrerequisites`, `educationalLevel`
- FAQPage schema extracted from existing FAQ sections on these pages

### LifeOSSystemUpgrade
- JSON-LD: Service entity (type `ProfessionalService`) with `offers`, `areaServed`, `provider`
- FAQPage from existing `faqs` array (already has 6+ Q&As)

### Discovery
- JSON-LD: Service (free consultation) with `offers.price: 0`

### Wspolpraca (/start)
- JSON-LD: WebPage + ItemList (all offerings) + Organization
- TopicalMeta: primary="collaboration overview", intent="navigational"

### Testimonials
- JSON-LD: WebPage with `review` array (select top testimonials as Review schema)

### Podcast pages
- JSON-LD: PodcastSeries entity with `author`, `inLanguage: pl`

---

## 5. FAQ Schema Extraction

Pages with existing FAQ content get `FAQPage` schema. Extracted from:

| Page | Source | Estimated Q&As |
|------|--------|----------------|
| LifeOSSystemUpgrade | `faqs` array | 6 |
| SilnaGlowa | FAQ section | 5 |
| CourseDetail | FAQ section | varies |
| Wyzwanie | FAQ section | varies |
| WebinarKodKapitana | FAQ section | varies |
| FAQAccordion (sales) | component data | 5 |

Each FAQ answer will be standalone and concise (already is in most cases).

---

## 6. HTML Semantic Improvements

Audit and fix across key pages:
- Ensure single `<h1>` per page (already mostly correct)
- Add `<article>` wrapper to About page content
- Add `<nav>` to internal navigation sections (Program decision tree, Wspolpraca navigation guide)
- Add `role="main"` to Layout's `<main>` element (already uses `<main>`)
- Ensure `<section>` elements have accessible names via `aria-labelledby` on key sections

---

## 7. Internal Linking Signals

No new links needed (content is finalized). Enhancement:
- In `structured-data.ts`, each entity's `@id` cross-references related entities
- `WebPage` schemas include `significantLink` arrays pointing to related pages
- `relatedLink` and `isPartOf` properties connect courses to the Program hub

---

## 8. Meta Description Updates

Update `seo-config.ts` descriptions to be answer-style (LLM-friendly):

Example before:
> "Odkryj swój potencjal z programami rozwoju osobistego..."

Example after:
> "Ludwik C. Siadlak is a productivity and mindfulness coach based in Poland, working with tech professionals through 1:1 mentoring and self-paced mental programs."

Keep Polish descriptions but make them factual, entity-dense, definition-style. Add English `alternateName` in Person entity for international discoverability.

---

## Implementation Order

1. Create `src/lib/structured-data.ts` (all entity definitions)
2. Update `src/components/SEO.tsx` (accept `jsonLd` prop)
3. Create `src/components/TopicalMeta.tsx`
4. Update `src/lib/seo-config.ts` (topical metadata per route)
5. Update Homepage + About (highest priority entities)
6. Update Program + Course pages (Course schemas + FAQ)
7. Update remaining pages (Discovery, Wspolpraca, Testimonials, Podcasts)
8. Semantic HTML fixes across Layout + key pages

Estimated: ~10 files created/modified. No visual changes. No copy changes.

