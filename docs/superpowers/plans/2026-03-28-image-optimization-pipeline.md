# Image Optimization Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all plain `<img>` tags with an `<OptimizedImage>` component that serves AVIF/WebP/PNG via `<picture>` elements with lazy loading and correct `fetchpriority` on LCP images.

**Architecture:** Two-track system — Track A (`src/assets/`, ES module imports) uses `vite-imagetools` for build-time AVIF/WebP/srcset generation; Track B (`public/lovable-uploads/`, string URL paths) uses a standalone `scripts/optimize-images.mjs` Sharp script that generates `.webp`/`.avif` siblings. A single `<OptimizedImage>` component handles both tracks via its `src` prop type.

**Tech Stack:** Vite 5, React 18, TypeScript 5, `vite-imagetools` (devDep), `sharp` (devDep), Vercel static hosting.

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `scripts/optimize-images.mjs` | Sharp script for Track B (public/) image optimization |
| Create | `src/components/ui/OptimizedImage.tsx` | Unified `<picture>` wrapper component |
| Modify | `vite.config.ts` | Add `vite-imagetools` plugin |
| Modify | `package.json` | Add `optimize-images` npm script |
| Modify | `src/vite-env.d.ts` | Add vite-imagetools type reference |
| Modify | `src/components/sections/Hero.tsx` | Replace `<img>` (2 instances) |
| Modify | `src/components/sections/AboutSection.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/sections/BeforeAfterSlider.tsx` | Replace `<img>` (2 instances) |
| Modify | `src/components/sections/CoursePreview.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/sections/TestimonialCarousel.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/webinar/WebinarTestimonials.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/podcast/PodcastEpisodeList.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/podcast/PodcastPlatformLinks.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/podcast/PodcastCard.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/podcast/PodcastPlayer.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/components/oto/OTOProductDisplay.tsx` | Replace `<img>` (5 instances) |
| Modify | `src/pages/Index.tsx` | Replace `<img>` (6 instances) + update Track A imports |
| Modify | `src/pages/About.tsx` | Replace `<img>` (2 instances) |
| Modify | `src/pages/Wyzwanie.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/pages/Newsletter.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/pages/HakowanieProduktywnosci.tsx` | Replace `<img>` (1 instance) |
| Modify | `src/pages/WebinarMeskiKompas.tsx` | Replace `<img>` (2 instances, 1 is LCP) |
| Modify | `src/pages/MeskiKompas.tsx` | Replace `<img>` (5 instances) |
| Modify | `src/pages/UwazneZycie.tsx` | Replace `<img>` (2 instances) |
| Modify | `src/pages/WebinarKodKapitana.tsx` | Replace `<img>` (2 instances, 1 is LCP) |
| Modify | `src/pages/SiedemTechnik.tsx` | Replace `<img>` (2 instances) |
| Modify | `src/pages/WebinarLive.tsx` | Replace `<img>` (3 instances) |
| Modify | `src/pages/MCT.tsx` | Replace `<img>` (2 instances) |
| Modify | `src/pages/Program.tsx` | Replace `<img>` (3 instances) |

---

## Task 1: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install vite-imagetools and sharp**

```bash
npm install -D vite-imagetools sharp
```

Expected output: packages added to `devDependencies` in `package.json`.

- [ ] **Step 2: Verify installation**

```bash
cat package.json | grep -E "vite-imagetools|sharp"
```

Expected output:
```
"sharp": "^0.33.x",
"vite-imagetools": "^6.x.x",
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add vite-imagetools and sharp for image optimization"
```

---

## Task 2: Configure vite-imagetools

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/vite-env.d.ts`

- [ ] **Step 1: Read current vite.config.ts**

Read `vite.config.ts` to confirm its current content before editing.

- [ ] **Step 2: Update vite.config.ts**

Replace the content of `vite.config.ts` with:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    },
    charset: 'utf8'
  },
}));
```

- [ ] **Step 3: Add vite-imagetools type reference**

Read `src/vite-env.d.ts` first. Then add the imagetools reference at the top:

```ts
/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev -- --port 8081
```

Expected: server starts on port 8081 without errors. Press Ctrl+C to stop.

- [ ] **Step 5: Commit**

```bash
git add vite.config.ts src/vite-env.d.ts
git commit -m "feat: add vite-imagetools plugin to Vite config"
```

---

## Task 3: Write optimize-images script

**Files:**
- Create: `scripts/optimize-images.mjs`
- Modify: `package.json`

- [ ] **Step 1: Create the script**

Create `scripts/optimize-images.mjs`:

```js
#!/usr/bin/env node
/**
 * Generates .webp and .avif siblings for every PNG/JPG/JPEG in:
 *   - public/lovable-uploads/
 *   - public/
 *   - src/assets/
 *
 * Safe to re-run: skips files that already have siblings.
 * Run after any Lovable session that adds new images.
 */

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SCAN_DIRS = [
  join(ROOT, "public", "lovable-uploads"),
  join(ROOT, "public"),
  join(ROOT, "src", "assets"),
];

const SOURCE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

async function getFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries
    .filter((e) => e.isFile() && SOURCE_EXTS.has(extname(e.name).toLowerCase()))
    .map((e) => join(dir, e.name));
}

async function siblingExists(filePath, newExt) {
  const sibling = filePath.replace(/\.[^.]+$/, newExt);
  try {
    await stat(sibling);
    return true;
  } catch {
    return false;
  }
}

async function processFile(filePath) {
  const name = basename(filePath);
  const webpPath = filePath.replace(/\.[^.]+$/, ".webp");
  const avifPath = filePath.replace(/\.[^.]+$/, ".avif");

  const needsWebp = !(await siblingExists(filePath, ".webp"));
  const needsAvif = !(await siblingExists(filePath, ".avif"));

  if (!needsWebp && !needsAvif) {
    console.log(`  skip  ${name} (siblings exist)`);
    return;
  }

  const image = sharp(filePath);

  if (needsWebp) {
    await image.clone().webp({ quality: 85 }).toFile(webpPath);
    console.log(`  webp  ${name}`);
  }

  if (needsAvif) {
    await image.clone().avif({ quality: 70 }).toFile(avifPath);
    console.log(`  avif  ${name}`);
  }
}

async function main() {
  console.log("Optimizing images...\n");
  let total = 0;

  for (const dir of SCAN_DIRS) {
    const files = await getFiles(dir);
    if (files.length === 0) continue;

    console.log(`${dir.replace(ROOT, ".")}`);
    for (const file of files) {
      await processFile(file);
      total++;
    }
    console.log();
  }

  console.log(`Done. Processed ${total} source files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Step 2: Add npm script to package.json**

In `package.json`, add to the `"scripts"` block:

```json
"optimize-images": "node scripts/optimize-images.mjs"
```

The full scripts block becomes:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:prerender": "vite build && npm run prerender",
  "build:dev": "vite build --mode development",
  "prerender": "node scripts/prerender.mjs",
  "lint": "eslint .",
  "preview": "vite preview",
  "optimize-images": "node scripts/optimize-images.mjs"
}
```

- [ ] **Step 3: Run the script**

```bash
npm run optimize-images
```

Expected output:
```
Optimizing images...

./public/lovable-uploads
  webp  17bd28c7-cb8f-4096-adcd-c6f6a3b7c266.png
  avif  17bd28c7-cb8f-4096-adcd-c6f6a3b7c266.png
  ...

./src/assets
  webp  LCS-7Technik.png
  avif  LCS-7Technik.png
  ...

Done. Processed N source files.
```

Note: `.webp` files in `src/assets/` will have only `.avif` generated (no `.webp` needed since they already are WebP).

- [ ] **Step 4: Verify output**

```bash
ls public/lovable-uploads/*.webp | head -5
ls public/lovable-uploads/*.avif | head -5
ls src/assets/*.avif | head -5
```

Each should return file listings.

- [ ] **Step 5: Add generated files to .gitignore (optional)**

If you prefer not to commit generated images to git, add to `.gitignore`:
```
# Generated image variants (re-created by npm run optimize-images)
public/lovable-uploads/*.webp
public/lovable-uploads/*.avif
src/assets/*.webp
src/assets/*.avif
```

If you want them committed (simpler Vercel deploys — recommended), skip this step.

- [ ] **Step 6: Commit**

```bash
git add scripts/optimize-images.mjs package.json
git commit -m "feat: add optimize-images script for WebP/AVIF generation"
```

---

## Task 4: Build the OptimizedImage component

**Files:**
- Create: `src/components/ui/OptimizedImage.tsx`

The component handles both tracks:
- **Track B** (`src` is a string like `"/lovable-uploads/foo.png"`): derives `.webp` and `.avif` sibling paths automatically.
- **Track A** (`src` is a `Picture` object from vite-imagetools `?as=picture`): uses the pre-built sources array.

- [ ] **Step 1: Create the component**

Create `src/components/ui/OptimizedImage.tsx`:

```tsx
import type { Picture } from "vite-imagetools";

type OptimizedImageProps = {
  src: string | Picture
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
}

function deriveSiblingPath(src: string, ext: string): string {
  return src.replace(/\.[^./?#]+($|\?)/, `${ext}$1`);
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "100vw",
}: OptimizedImageProps) {
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : undefined;

  if (typeof src === "string") {
    const webpSrc = deriveSiblingPath(src, ".webp");
    const avifSrc = deriveSiblingPath(src, ".avif");

    return (
      <picture>
        <source type="image/avif" srcSet={avifSrc} sizes={sizes} />
        <source type="image/webp" srcSet={webpSrc} sizes={sizes} />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          className={className}
          decoding="async"
        />
      </picture>
    );
  }

  // Track A: Picture object from vite-imagetools
  const { sources, img } = src;

  return (
    <picture>
      {sources.map(({ type, srcset }) => (
        <source key={type} type={type} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={img.src}
        alt={alt}
        width={width ?? img.w}
        height={height ?? img.h}
        loading={loading}
        fetchPriority={fetchPriority}
        className={className}
        decoding="async"
      />
    </picture>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. If you see `Property 'fetchPriority' does not exist`, your `@types/react` is older than 18.2.0 — update it:

```bash
npm install -D @types/react@latest @types/react-dom@latest
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/OptimizedImage.tsx
git commit -m "feat: add OptimizedImage component with AVIF/WebP picture support"
```

---

## Task 5: Replace img tags in shared components

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/AboutSection.tsx`
- Modify: `src/components/sections/BeforeAfterSlider.tsx`
- Modify: `src/components/sections/CoursePreview.tsx`
- Modify: `src/components/sections/TestimonialCarousel.tsx`
- Modify: `src/components/webinar/WebinarTestimonials.tsx`
- Modify: `src/components/podcast/PodcastEpisodeList.tsx`
- Modify: `src/components/podcast/PodcastPlatformLinks.tsx`
- Modify: `src/components/podcast/PodcastCard.tsx`
- Modify: `src/components/podcast/PodcastPlayer.tsx`

Read each file before editing. The pattern for each replacement:

**Before:**
```tsx
<img src={someUrl} alt="..." className="..." />
```

**After (Track B string, not a hero/LCP):**
```tsx
<OptimizedImage src={someUrl} alt="..." className="..." width={W} height={H} />
```

**After (Track B string, hero/above-fold):**
```tsx
<OptimizedImage src={someUrl} alt="..." className="..." width={W} height={H} priority />
```

Add import at top of each modified file:
```tsx
import OptimizedImage from "@/components/ui/OptimizedImage";
```

- [ ] **Step 1: Read and update Hero.tsx**

Read `src/components/sections/Hero.tsx`. It has 2 `<img>` tags:

1. Line ~46 — `backgroundImage` (full-screen cover): **priority** (LCP candidate)
2. Line ~144 — `heroImage` prop: **priority** (LCP candidate, shown on hero pages)

The `Hero` component receives `heroImage` and `backgroundImage` as string props — both are Track B.

Replace the background img (line ~46):
```tsx
<OptimizedImage
  src={backgroundImage}
  alt={imageDescription || "Background"}
  className="w-full h-full object-cover"
  width={1920}
  height={1080}
  priority
  sizes="100vw"
/>
```

Replace the heroImage img (line ~144):
```tsx
<OptimizedImage
  src={heroImage}
  alt={imageDescription || "Hero"}
  className={`
    ${isMobile ? "h-auto max-h-[60vh] w-auto mx-auto" : "h-full max-h-[80vh]"}
    object-contain object-right
  `}
  width={800}
  height={1000}
  priority
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

- [ ] **Step 2: Read and update AboutSection.tsx**

Read `src/components/sections/AboutSection.tsx`. It has 1 `<img>` tag (the author photo).

Replace with (not LCP — below fold):
```tsx
<OptimizedImage
  src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
  alt="Ludwik C. Siadlak"
  className={/* keep existing className */}
  width={600}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

- [ ] **Step 3: Read and update BeforeAfterSlider.tsx**

Read `src/components/sections/BeforeAfterSlider.tsx`. It has 2 `<img>` tags for before/after images. These are Track A (imported from `@/assets/`).

Both images are not above-fold (slider section). No `priority`.

```tsx
import OptimizedImage from "@/components/ui/OptimizedImage";

// Replace both <img> tags:
<OptimizedImage
  src={workspaceBefore}
  alt="Before"
  className={/* keep existing className */}
  width={800}
  height={533}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

<OptimizedImage
  src={workspaceAfter}
  alt="After"
  className={/* keep existing className */}
  width={800}
  height={533}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

Note: `workspaceBefore` and `workspaceAfter` are imported PNG strings from Vite — they become hashed URLs like `/assets/workspace-before-abc123.png`. The `deriveSiblingPath` function in OptimizedImage will correctly derive `/assets/workspace-before-abc123.webp` — but only if the `.webp` sibling was also imported/processed. For this to work, vite-imagetools must emit WebP variants for all PNG imports.

Add `?url` query to force Vite to treat them as plain URLs (already the default for non-imagetools imports), and separately import the optimized variants using imagetools:

```tsx
import workspaceBeforePicture from "@/assets/workspace-before.png?w=400;800&format=avif;webp;png&as=picture";
import workspaceAfterPicture from "@/assets/workspace-after.png?w=400;800&format=avif;webp;png&as=picture";
```

Then use as Track A:
```tsx
<OptimizedImage
  src={workspaceBeforePicture}
  alt="Before"
  className={/* keep existing className */}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
<OptimizedImage
  src={workspaceAfterPicture}
  alt="After"
  className={/* keep existing className */}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

Remove the old plain imports if no longer used elsewhere.

- [ ] **Step 4: Read and update CoursePreview.tsx**

Read `src/components/sections/CoursePreview.tsx`. It has 1 `<img>` tag for a course thumbnail. Below fold, no priority.

```tsx
<OptimizedImage
  src={/* keep existing src prop */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

- [ ] **Step 5: Read and update TestimonialCarousel.tsx**

Read `src/components/sections/TestimonialCarousel.tsx`. It has 1 `<img>` for avatar/photo. Below fold, no priority.

```tsx
<OptimizedImage
  src={/* keep existing src */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={80}
  height={80}
  sizes="80px"
/>
```

- [ ] **Step 6: Read and update WebinarTestimonials.tsx**

Read `src/components/webinar/WebinarTestimonials.tsx`. 1 `<img>` for testimonial avatar. Below fold, no priority.

```tsx
<OptimizedImage
  src={/* keep existing src */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={64}
  height={64}
  sizes="64px"
/>
```

- [ ] **Step 7: Read and update podcast components**

Read and update `src/components/podcast/PodcastEpisodeList.tsx`, `PodcastPlatformLinks.tsx`, `PodcastCard.tsx`, `PodcastPlayer.tsx`. Each has 1 `<img>`.

- Podcast cover art / episode thumbnails: below fold, use `width={300} height={300} sizes="(max-width: 768px) 100vw, 300px"`
- Platform icon links (Apple, Spotify etc): small icons, `width={32} height={32} sizes="32px"`
- Podcast player cover: `width={200} height={200} sizes="200px"`

- [ ] **Step 8: Read and update OTOProductDisplay.tsx**

Read `src/components/oto/OTOProductDisplay.tsx`. It has 5 `<img>` tags, all Track B string paths from `/lovable-uploads/`. All below fold, no priority.

Replace each:
```tsx
<OptimizedImage
  src={/* keep existing src string */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={/* estimate from context: product images ~400px, payment logos ~200px */}
  height={/* estimate */}
/>
```

Specific instances (read file to confirm exact lines):
- Line ~49: product image → `width={400} height={300}`
- Line ~84: product image → `width={600} height={400}`
- Line ~152: product image → `width={400} height={300}`
- Line ~231: product image → `width={400} height={300}`
- Line ~266: payment processors logo → `width={300} height={60}`

- [ ] **Step 9: Verify build still works**

```bash
npm run build
```

Expected: build succeeds, no TypeScript errors.

- [ ] **Step 10: Commit**

```bash
git add src/components/
git commit -m "feat: replace img tags with OptimizedImage in shared components"
```

---

## Task 6: Replace img tags in page files — Index, About, Wyzwanie, Newsletter

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Wyzwanie.tsx`
- Modify: `src/pages/Newsletter.tsx`

- [ ] **Step 1: Read and update Index.tsx**

Read `src/pages/Index.tsx`. It has 6 `<img>` tags:

| Line | src | Priority? | Notes |
|------|-----|-----------|-------|
| 122 | `/lovable-uploads/SIADLAK-coffee-transparent.png` | **YES** | LCP hero image |
| 259 | `sessionPhoto6` (Track A webp import) | no | Background decoration |
| 583 | `sessionPhoto5` (Track A webp import) | no | Background decoration |
| 651 | `programUwaznosc` (Track A png import) | no | Program card |
| 695 | `card.img` (dynamic, Track A or B) | no | Dynamic cards |
| 777 | `onPurple1` (Track A webp import) | no | Section background |

For Track A imports that are already WebP, vite-imagetools can generate AVIF. Update Track A imports for PNGs to use picture format:

```tsx
// Remove these plain imports:
// import programUwaznosc from "@/assets/LCS-program-Uwaznosc.png";
// import programProduktywnosc from "@/assets/LCS-program-Produktywnosc.png";
// import programOdpornosc from "@/assets/LCS-program-Odpornosc.png";
// import programMeskiKompas from "@/assets/LCS-program-MeskiKompas.png";

// Add these imagetools imports:
import programUwaznosc from "@/assets/LCS-program-Uwaznosc.png?w=400;800&format=avif;webp;png&as=picture";
import programProduktywnosc from "@/assets/LCS-program-Produktywnosc.png?w=400;800&format=avif;webp;png&as=picture";
import programOdpornosc from "@/assets/LCS-program-Odpornosc.png?w=400;800&format=avif;webp;png&as=picture";
import programMeskiKompas from "@/assets/LCS-program-MeskiKompas.png?w=400;800&format=avif;webp;png&as=picture";

// For already-WebP imports, use imagetools for AVIF generation:
import sessionPhoto6 from "@/assets/Ludwik C. Siadlak-sessionphotos6.webp?format=avif;webp&as=picture";
import onPurple1 from "@/assets/Ludwik C. Siadlak-on-purple1.webp?format=avif;webp&as=picture";
import sessionPhoto5 from "@/assets/Ludwik C. Siadlak-sessionphotos5.webp?format=avif;webp&as=picture";
```

Replace the 6 `<img>` tags:

```tsx
// Line 122 — LCP hero (priority):
<OptimizedImage
  src="/lovable-uploads/SIADLAK-coffee-transparent.png"
  alt="Ludwik C. Siadlak"
  className="relative z-10 h-[85%] w-auto object-contain mx-auto"
  width={600}
  height={800}
  priority
  sizes="(max-width: 768px) 100vw, 40vw"
/>

// Line 259 — background decoration (no priority):
<OptimizedImage
  src={sessionPhoto6}
  alt=""
  className="h-full w-auto object-cover object-left opacity-30"
  sizes="50vw"
/>

// Line 583 — background decoration (no priority):
<OptimizedImage
  src={sessionPhoto5}
  alt=""
  className="h-full w-auto object-cover object-right"
  sizes="50vw"
/>

// Line 651 — program card:
<OptimizedImage
  src={programUwaznosc}
  alt="Uważność"
  className="w-full h-full object-cover"
  sizes="(max-width: 768px) 100vw, 25vw"
/>

// Line 695 — dynamic card (card.img may be Track A Picture or Track B string):
<OptimizedImage
  src={card.img}
  alt={card.title}
  className="absolute inset-0 w-full h-full object-cover"
  sizes="(max-width: 768px) 100vw, 25vw"
/>

// Line 777 — section background:
<OptimizedImage
  src={onPurple1}
  alt=""
  className="h-full w-auto object-cover object-left"
  sizes="50vw"
/>
```

Add import:
```tsx
import OptimizedImage from "@/components/ui/OptimizedImage";
```

- [ ] **Step 2: Read and update About.tsx**

Read `src/pages/About.tsx`. It has 2 `<img>` tags.

Line 132 is the hero/main portrait — **priority** (LCP).
Line 257 is a secondary photo — no priority.

```tsx
// Line 132 — LCP hero portrait:
<OptimizedImage
  src={/* keep existing src */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={600}
  height={800}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Line 257 — secondary photo:
<OptimizedImage
  src={/* keep existing src */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={400}
  height={400}
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

- [ ] **Step 3: Read and update Wyzwanie.tsx**

Read `src/pages/Wyzwanie.tsx`. Line 714 — profile photo, below fold, no priority.

```tsx
<OptimizedImage
  src="/lovable-uploads/ludwik-siadlak-profile.png"
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={120}
  height={120}
  sizes="120px"
/>
```

- [ ] **Step 4: Read and update Newsletter.tsx**

Read `src/pages/Newsletter.tsx`. Line 195 — newsletter example screenshot, below fold.

```tsx
<OptimizedImage
  src="/lovable-uploads/newsletter-example.png"
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

- [ ] **Step 5: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Index.tsx src/pages/About.tsx src/pages/Wyzwanie.tsx src/pages/Newsletter.tsx
git commit -m "feat: replace img tags with OptimizedImage in Index, About, Wyzwanie, Newsletter"
```

---

## Task 7: Replace img tags in webinar and remaining pages

**Files:**
- Modify: `src/pages/WebinarMeskiKompas.tsx`
- Modify: `src/pages/WebinarKodKapitana.tsx`
- Modify: `src/pages/WebinarLive.tsx`
- Modify: `src/pages/MeskiKompas.tsx`
- Modify: `src/pages/UwazneZycie.tsx`
- Modify: `src/pages/HakowanieProduktywnosci.tsx`
- Modify: `src/pages/SiedemTechnik.tsx`
- Modify: `src/pages/MCT.tsx`
- Modify: `src/pages/Program.tsx`

Read each file before editing.

- [ ] **Step 1: Read and update WebinarMeskiKompas.tsx**

Line 572 — webinar hero/presenter image: **priority** (LCP, above fold on webinar page).
Line 608 — secondary image: no priority.

```tsx
// Line 572 — LCP presenter image:
<OptimizedImage
  src="/lovable-uploads/ludwik-siadlak-profile.png"
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={400}
  height={500}
  priority
  sizes="(max-width: 768px) 100vw, 40vw"
/>

// Line 608 — secondary:
<OptimizedImage
  src={/* keep existing src */}
  alt={/* keep existing alt */}
  className={/* keep existing className */}
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, 40vw"
/>
```

- [ ] **Step 2: Read and update WebinarKodKapitana.tsx**

Read the file. Line 141 is the hero image (**priority**, LCP). Line 862 is below fold (no priority).

Track A imports: `agendaTimelineBg` and `kodKapitanaHero` are PNG imports — update to vite-imagetools:

```tsx
import agendaTimelineBg from "@/assets/agenda-timeline-bg.png?w=800;1200&format=avif;webp;png&as=picture";
import kodKapitanaHero from "@/assets/kod-kapitana-hero.png?w=400;800&format=avif;webp;png&as=picture";
```

```tsx
// Line 141 — LCP hero (priority):
<OptimizedImage
  src={kodKapitanaHero}
  alt={/* keep alt */}
  className={/* keep className */}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Line 862 — agenda background:
<OptimizedImage
  src={agendaTimelineBg}
  alt=""
  className={/* keep className */}
  sizes="100vw"
/>
```

- [ ] **Step 3: Read and update WebinarLive.tsx**

Read the file. Lines 100, 117, 136 — calendar app icons (Google Cal, Apple, Outlook). Below fold, small icons.

Track A imports: `calendarGcal`, `calendarApple`, `calendarOutlook` are PNG imports. Update:

```tsx
import calendarGcal from "@/assets/calendar-gcal.png?w=64;128&format=avif;webp;png&as=picture";
import calendarApple from "@/assets/calendar-apple.png?w=64;128&format=avif;webp;png&as=picture";
import calendarOutlook from "@/assets/calendar-outlook.png?w=64;128&format=avif;webp;png&as=picture";
```

```tsx
<OptimizedImage src={calendarGcal} alt="Google Calendar" className={/* keep */} sizes="48px" />
<OptimizedImage src={calendarApple} alt="Apple Calendar" className={/* keep */} sizes="48px" />
<OptimizedImage src={calendarOutlook} alt="Outlook" className={/* keep */} sizes="48px" />
```

- [ ] **Step 4: Read and update MeskiKompas.tsx**

Read the file. It has 5 `<img>` tags (lines 1972, 1993, 2072, 2196, 2201). None are above-fold LCP (webinar page hero is handled by Hero component separately). All no priority.

For each, keep existing `src`, `alt`, `className`. Add:
```tsx
<OptimizedImage
  src={/* existing src */}
  alt={/* existing alt */}
  className={/* existing className */}
  width={/* read from file, estimate from context */}
  height={/* read from file, estimate from context */}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

- [ ] **Step 5: Read and update UwazneZycie.tsx**

Read the file. Lines 159 and 962. `lifehackerzyLogo` is a Track A PNG import — update:

```tsx
import lifehackerzyLogo from "@/assets/lifehackerzy-logotyp.png?w=200;400&format=avif;webp;png&as=picture";
```

Line 159 — logo: `width={80} height={80} sizes="80px"`. No priority.
Line 962 — secondary image: `width={400} height={300} sizes="(max-width: 768px) 100vw, 33vw"`. No priority.

- [ ] **Step 6: Read and update HakowanieProduktywnosci.tsx**

Read the file. Line 636 — 1 image, below fold, no priority. Keep src/alt/className as-is, add width/height from context.

- [ ] **Step 7: Read and update SiedemTechnik.tsx**

Read the file. Lines 51 and 197. Both below fold, no priority.

- [ ] **Step 8: Read and update MCT.tsx**

Read the file. Lines 225 and 292. `consultantPhoto` is a Track A WebP import:

```tsx
import consultantPhoto from "@/assets/Ludwik C. Siadlak-bw-consultant.webp?format=avif;webp&as=picture";
```

Line 225 — consultant portrait (may be near top of page — **priority**):
```tsx
<OptimizedImage src={consultantPhoto} alt="Ludwik C. Siadlak" className={/* keep */} priority sizes="(max-width: 768px) 100vw, 40vw" />
```

Line 292 — secondary image, no priority.

- [ ] **Step 9: Read and update Program.tsx**

Read the file. Lines 324, 371, 435. `lifehackerzyLogo` is a PNG import:

```tsx
import lifehackerzyLogo from "@/assets/lifehackerzy-logo.png?w=80;160&format=avif;webp;png&as=picture";
```

Line 371 — logo, small: `width={80} height={80} sizes="80px"`.
Lines 324, 435 — program images, below fold.

- [ ] **Step 10: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 11: Commit**

```bash
git add src/pages/
git commit -m "feat: replace img tags with OptimizedImage in webinar and remaining pages"
```

---

## Task 8: Final build verification

**Files:** none (verification only)

- [ ] **Step 1: Full production build**

```bash
npm run build
```

Expected: exits with code 0. Note the total bundle size output.

- [ ] **Step 2: Check AVIF/WebP in dist**

```bash
ls dist/assets/*.avif 2>/dev/null | wc -l
ls dist/assets/*.webp 2>/dev/null | wc -l
```

Track A imagetools-processed images will appear here. (Track B optimized images stay in `public/` and are copied directly to `dist/`.)

- [ ] **Step 3: Check for remaining plain img tags (excluding archive)**

```bash
grep -rn "<img" dist/ | grep -v "lovable-uploads\|assets" | head -20
```

Alternatively scan source:
```bash
grep -rn "<img" src/ --include="*.tsx" | grep -v "archive" | grep -v "OptimizedImage"
```

Expected: 0 results (all `<img>` should now be inside `OptimizedImage.tsx` only).

- [ ] **Step 4: Preview build locally**

```bash
npm run preview
```

Open browser at the printed URL. Check:
- Home page hero image loads (inspect Network tab — should see AVIF or WebP requested)
- Below-fold images have `loading="lazy"` (inspect elements)
- Hero image has `fetchpriority="high"` (inspect element)

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete image optimization pipeline with AVIF/WebP and lazy loading"
```

---

## Ongoing Maintenance

After any Lovable session that adds new images to `public/lovable-uploads/`:

```bash
npm run optimize-images
```

New `<img>` tags added by Lovable will work but won't get AVIF/WebP or lazy loading until a Claude Code pass replaces them with `<OptimizedImage>`.
