# Design System Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract the brand design system embedded in the website into a self-contained, copy-pasteable `src/design-system/` folder, with zero change to the rendered output.

**Architecture:** Pure relocation. Move the token layer (CSS variables + fonts), the Tailwind theme/utility plugin (as a preset), the brand CSS layers, and the `src/components/ui/*` primitives into `src/design-system/`. Internalize every dependency the folder needs (`cn`, `use-mobile`, `use-toast`) so nothing reaches back into app code. The app consumes the system through deep paths (`@/design-system/components/<x>`) — the existing `@/` alias already maps to `src/`, so no new alias is required.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS v3, shadcn/ui, Radix, lucide-react, puppeteer (already a devDependency, used for verification).

## Global Constraints

- The rendered website MUST look identical to end users before and after. Verified by screenshot comparison + production CSS-bundle diff.
- No visual changes, no renaming of tokens/utilities/classes, no CSS "cleanup". Relocation only.
- `src/design-system/` MUST be self-contained: no `import ... from "@/..."` referencing app code may remain inside the folder (only relative paths within the folder, or external npm packages). Enforced by a grep gate.
- The codemod is a **path-prefix swap** `@/components/ui` → `@/design-system/components`, NOT a rewrite to a barrel (deep named imports like `CardContent` must keep resolving).
- The toast hook MUST exist as a single module instance (moved, not copied) — duplicating it would split toast state and break `<Toaster>`.
- Conventional Commits; no mention of Claude/Anthropic in commit messages.
- macOS `sed` requires the `-i ''` form (shown in commands).

---

### Task 0: Verification harness + baseline capture

**Files:**
- Create: `scripts/visual-check.mjs`
- Modify: `.gitignore` (add `.visual/`)

**Interfaces:**
- Produces: `node scripts/visual-check.mjs <label>` — screenshots every route in `ROUTES` at desktop (1440px) and mobile (390px) widths against the running dev server, saving PNGs to `.visual/<label>/`. Animations/transitions are disabled before capture for determinism.

- [ ] **Step 1: Write the screenshot script**

Create `scripts/visual-check.mjs`:

```js
import puppeteer from "puppeteer";
import { mkdir } from "node:fs/promises";

const label = process.argv[2];
if (!label) {
  console.error("usage: node scripts/visual-check.mjs <label>");
  process.exit(1);
}

const BASE = "http://localhost:8080";
const ROUTES = [
  "/", "/about", "/contact", "/program",
  "/mct", "/webinar/kod-kapitana", "/oto", "/discovery",
];
const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const KILL_ANIM = `* , *::before, *::after {
  animation: none !important;
  transition: none !important;
  animation-duration: 0s !important;
}`;

const slug = (r) => (r === "/" ? "home" : r.replace(/\//g, "_").replace(/^_/, ""));

const outDir = `.visual/${label}`;
await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: "new" });
try {
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
      await page.addStyleTag({ content: KILL_ANIM });
      await page.evaluate(() => document.fonts.ready);
      await new Promise((r) => setTimeout(r, 400));
      const file = `${outDir}/${slug(route)}-${vp.name}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log("captured", file);
    }
    await page.close();
  }
} finally {
  await browser.close();
}
```

- [ ] **Step 2: Ignore the screenshot output dir**

Add a line `.visual/` to `.gitignore`:

```bash
printf '\n.visual/\n' >> .gitignore
```

- [ ] **Step 3: Start the dev server in the background**

Run:
```bash
npm run dev
```
Run this in the background (it serves on port 8080). Wait until it logs `Local: http://localhost:8080/`.

- [ ] **Step 4: Capture the baseline screenshots**

Run:
```bash
node scripts/visual-check.mjs baseline
```
Expected: 16 lines of `captured .visual/baseline/<route>-<vp>.png` (8 routes × 2 viewports), no errors.

- [ ] **Step 5: Capture the baseline production CSS bundle**

Run:
```bash
npm run build && mkdir -p .visual && cp dist/assets/*.css .visual/baseline-css.css && wc -c .visual/baseline-css.css
```
Expected: build succeeds; one CSS file copied; a byte count printed.

- [ ] **Step 6: Commit the harness**

```bash
git add scripts/visual-check.mjs .gitignore
git commit -m "test: add visual regression harness for design system extraction"
```

---

### Task 1: Extract tokens, Tailwind preset, and brand CSS layers

**Files:**
- Create: `src/design-system/tokens.css`
- Create: `src/design-system/tailwind-preset.ts`
- Create: `src/design-system/styles/base.css`
- Create: `src/design-system/styles/components.css`
- Create: `src/design-system/styles/global.css`
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`

**Interfaces:**
- Produces: `src/design-system/tailwind-preset.ts` default-exports a Tailwind `Config` fragment (`theme.extend` + `plugins`) consumed via `presets: [...]`. `src/design-system/tokens.css` carries brand `@font-face`/`@import` + `:root` + `.dark`. The three `styles/*.css` files carry the brand `@layer`/raw CSS.

- [ ] **Step 1: Create the Tailwind preset**

Create `src/design-system/tailwind-preset.ts`. Move the **entire** `theme: { container, extend }` object and the **entire** `plugins: [...]` array (including `require("tailwindcss-animate")` and the inline `addUtilities` function) out of `tailwind.config.ts` verbatim:

```ts
import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  theme: {
    // ← paste the full `container` + `extend` object from tailwind.config.ts unchanged
  },
  plugins: [
    // ← paste the full plugins array from tailwind.config.ts unchanged
  ],
};

export default preset;
```

Copy the content exactly as it currently appears; do not edit any token value, utility, or keyframe.

- [ ] **Step 2: Reduce `tailwind.config.ts` to reference the preset**

Replace `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";
import designSystemPreset from "./src/design-system/tailwind-preset";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  presets: [designSystemPreset],
};

export default config;
```

- [ ] **Step 3: Create `tokens.css`**

Create `src/design-system/tokens.css`. Move into it, in original order: the three brand font `@import url("https://fonts.googleapis.com/...")` lines from the top of `src/index.css`, then the **entire `:root { ... }` block** and any **`.dark { ... }`** override block. Copy verbatim.

- [ ] **Step 4: Create the three brand CSS files**

- `src/design-system/styles/base.css` ← the `@layer base { ... }` block from `index.css` (the "Base Typography" block) and the "Diamond Hybrid Body" rules, in original order.
- `src/design-system/styles/components.css` ← the `@layer components { ... }` block from `index.css`.
- `src/design-system/styles/global.css` ← the remaining brand-global raw CSS in original order: Prose Styles, Animations, Marquee, Diamond bullet list, Brand gradient background utility, and the leading "Custom Hero Styles" (`.hero h1`) block.

Copy verbatim. Do NOT move the page-specific blocks (`TrainTheTrainer Hero`, `Homepage: Phase backgrounds`) — they stay in `index.css`.

- [ ] **Step 5: Rewrite `src/index.css` to import the extracted files in original order**

`src/index.css` becomes (page-specific blocks retained at the bottom):

```css
@import "@/design-system/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@/design-system/styles/base.css";
@import "@/design-system/styles/components.css";
@import "@/design-system/styles/global.css";

/* === page-specific blocks retained below (TrainTheTrainer Hero, Homepage phase backgrounds, etc.) === */
```

Keep every page-specific rule that was NOT moved in Step 4 below the imports, in its original order.

- [ ] **Step 6: Verify the production CSS bundle is unchanged**

Run:
```bash
npm run build && diff <(cat .visual/baseline-css.css) <(cat dist/assets/*.css) && echo "CSS IDENTICAL"
```
Expected: `CSS IDENTICAL`. If `diff` reports differences, inspect them. Custom-property reordering (`:root`) with identical values is acceptable; any changed/missing selector or declaration is NOT — fix import order (e.g. move the `:root` extraction to import right after `@tailwind utilities`) until the only differences are inert reordering, then re-run.

- [ ] **Step 7: Verify lint passes**

Run:
```bash
npm run lint
```
Expected: no new errors versus a pre-change run.

- [ ] **Step 8: Capture screenshots and compare to baseline**

Ensure the dev server is running (restart `npm run dev` if config changes require it), then:
```bash
node scripts/visual-check.mjs task1
```
Then visually compare each `.visual/task1/*.png` against the matching `.visual/baseline/*.png` (open/Read both). Expected: visually identical.

- [ ] **Step 9: Commit**

```bash
git add src/design-system/tokens.css src/design-system/tailwind-preset.ts src/design-system/styles tailwind.config.ts src/index.css
git commit -m "refactor: extract design tokens, tailwind preset, and brand CSS into design-system"
```

---

### Task 2: Relocate UI primitives + internalize dependencies + codemod app imports

**Files:**
- Create: `src/design-system/lib/cn.ts`
- Create: `src/design-system/lib/use-mobile.tsx`
- Create: `src/design-system/index.ts`
- Move: `src/components/ui/*` → `src/design-system/components/*`
- Move: `src/hooks/use-toast.ts` → `src/design-system/lib/use-toast.ts`
- Modify: all app files importing `@/components/ui*` (52) and the 2 pages importing `@/hooks/use-toast`
- Delete: `src/components/ui/` (after move), `src/hooks/use-toast.ts` (after move)

**Interfaces:**
- Consumes: the preset/tokens from Task 1 (unchanged).
- Produces: `import { Button, Badge, Card, Input, Label, Textarea, Select, Checkbox, Switch, Tabs, CTAButton, GlassCard, Form, NavigationMenu, Toast, Toaster, Progress, Dialog, Sheet, Popover, Tooltip, cn, useToast, toast } from "@/design-system"` (the barrel). Deep imports `@/design-system/components/<file>` resolve every named export the old `@/components/ui/<file>` did.

- [ ] **Step 1: Create the self-contained `cn`**

Create `src/design-system/lib/cn.ts` (identical to `src/lib/utils.ts`):

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Copy `use-mobile` into the design system**

Create `src/design-system/lib/use-mobile.tsx` with the exact content of `src/hooks/use-mobile.tsx` (React-only, no app imports — safe to duplicate; the app keeps its copy for `Hero.tsx`):

```tsx
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

- [ ] **Step 3: Move the UI components and the toast hook**

Run:
```bash
mkdir -p src/design-system/components
git mv src/components/ui/* src/design-system/components/
git mv src/design-system/components/index.ts /tmp/old-ui-barrel.ts
git mv src/hooks/use-toast.ts src/design-system/lib/use-toast.ts
```
(The old barrel is set aside; a fresh `index.ts` is authored in Step 6. `/tmp/old-ui-barrel.ts` is kept only as a reference for the export list.)

- [ ] **Step 4: Rewrite imports INSIDE the moved component files**

Run (macOS `sed`):
```bash
cd src/design-system/components
# cn
sed -i '' "s|@/lib/utils|../lib/cn|g" *.tsx *.ts
# sibling ui components (deep): @/components/ui/x -> ./x
sed -i '' "s|@/components/ui/|./|g" *.tsx *.ts
# hooks moved into ../lib
sed -i '' "s|@/hooks/use-toast|../lib/use-toast|g" *.tsx *.ts
sed -i '' "s|@/hooks/use-mobile|../lib/use-mobile|g" *.tsx *.ts
# icons: use lucide-react directly (icons.ts only re-exports lucide names)
sed -i '' "s|@/lib/icons|lucide-react|g" *.tsx *.ts
cd -
```

- [ ] **Step 5: Fix the moved toast hook's type import**

`src/design-system/lib/use-toast.ts` imports a type from `@/components/ui/toast`. Rewrite it to the moved location:
```bash
sed -i '' "s|@/components/ui/toast|../components/toast|g" src/design-system/lib/use-toast.ts
```

- [ ] **Step 6: Create the public barrel**

Create `src/design-system/index.ts` reproducing the old barrel's export surface (pointing at `./components/*`) plus `cn` and the toast hook:

```ts
// Base UI components
export { Button } from "./components/button";
export { Badge } from "./components/badge";
export { Card } from "./components/card";
export { Input } from "./components/input";
export { Label } from "./components/label";
export { Textarea } from "./components/textarea";
export { Select } from "./components/select";
export { Checkbox } from "./components/checkbox";
export { Switch } from "./components/switch";
export { Tabs } from "./components/tabs";

// Custom components
export { CTAButton } from "./components/cta-button";
export { GlassCard } from "./components/glass-card";

// Form components
export { Form } from "./components/form";

// Navigation components
export { NavigationMenu } from "./components/navigation-menu";

// Feedback components
export { Toast } from "./components/toast";
export { Toaster } from "./components/toaster";
export { Progress } from "./components/progress";

// Overlay components
export { Dialog } from "./components/dialog";
export { Sheet } from "./components/sheet";
export { Popover } from "./components/popover";
export { Tooltip } from "./components/tooltip";

// Utilities & hooks
export { cn } from "./lib/cn";
export { useToast, toast } from "./lib/use-toast";
```

- [ ] **Step 7: Codemod the app imports**

Run from repo root (macOS `sed`):
```bash
# deep paths first: @/components/ui/x -> @/design-system/components/x
grep -rl "@/components/ui/" src --include="*.ts" --include="*.tsx" \
  | xargs sed -i '' "s|@/components/ui/|@/design-system/components/|g"
# bare barrel: @/components/ui (quoted, no trailing slash) -> @/design-system
grep -rl "@/components/ui" src --include="*.ts" --include="*.tsx" \
  | xargs sed -i '' "s|@/components/ui\(['\"]\)|@/design-system\1|g"
# the 2 pages using the toast hook directly -> barrel (single shared instance)
grep -rl "@/hooks/use-toast" src --include="*.ts" --include="*.tsx" \
  | xargs sed -i '' "s|@/hooks/use-toast|@/design-system|g"
```

- [ ] **Step 8: Delete the now-empty old locations**

Run:
```bash
rmdir src/components/ui 2>/dev/null || rm -rf src/components/ui
rm -f /tmp/old-ui-barrel.ts
```
(`src/hooks/use-toast.ts` was already moved by `git mv` in Step 3; `src/hooks/use-mobile.tsx` stays for `Hero.tsx`.)

- [ ] **Step 9: Verify the folder is self-contained (no app-alias imports remain)**

Run:
```bash
grep -rn "from ['\"]@/" src/design-system/ && echo "FAIL: app imports remain" || echo "SELF-CONTAINED"
```
Expected: `SELF-CONTAINED`. If any line prints, rewrite that import to a relative path within `src/design-system/` or to an npm package, then re-run.

- [ ] **Step 10: Verify build passes (catches any missed import)**

Run:
```bash
npm run build
```
Expected: build succeeds with no "Cannot find module" / unresolved `@/components/ui` errors.

- [ ] **Step 11: Verify lint passes**

Run:
```bash
npm run lint
```
Expected: no new errors.

- [ ] **Step 12: Screenshot and compare**

Ensure dev server running, then:
```bash
node scripts/visual-check.mjs task2
```
Visually compare `.visual/task2/*.png` against `.visual/baseline/*.png`. Expected: identical (pay attention to a route that triggers a toast and one using the sidebar/glass cards).

- [ ] **Step 13: Commit**

```bash
git add -A
git commit -m "refactor: relocate ui primitives into self-contained design-system folder"
```

---

### Task 3: Document reuse + final verification

**Files:**
- Create: `src/design-system/README.md`

**Interfaces:**
- Consumes: the finished `src/design-system/` from Tasks 1–2.

- [ ] **Step 1: Write the reuse README**

Create `src/design-system/README.md`:

```md
# siadlak.com Design System ("Diamond Hybrid")

Self-contained brand design system: tokens, Tailwind preset, brand CSS, and UI primitives. Copy this folder into a new project to inherit the same look and feel.

## Reuse in a new project

1. Copy `src/design-system/` into the target project's `src/`.
2. Install peer packages: `react`, `react-dom`, `tailwindcss`, `tailwindcss-animate`, `clsx`, `tailwind-merge`, `lucide-react`, and the Radix packages used by the components.
3. Wire Tailwind — `tailwind.config.ts`:
   ```ts
   import preset from "./src/design-system/tailwind-preset";
   export default { presets: [preset], content: ["./src/**/*.{ts,tsx}"], prefix: "", darkMode: ["class", "class"] };
   ```
4. Import the brand CSS in your global stylesheet, in this order:
   ```css
   @import "@/design-system/tokens.css";
   @tailwind base; @tailwind components; @tailwind utilities;
   @import "@/design-system/styles/base.css";
   @import "@/design-system/styles/components.css";
   @import "@/design-system/styles/global.css";
   ```
5. Use components:
   ```tsx
   import { Button, CTAButton, GlassCard, cn } from "@/design-system";
   ```

## Layout

- `tokens.css` — CSS variables (colors, shadows, radii, fonts) + `.dark` overrides + brand font imports.
- `tailwind-preset.ts` — theme extension + custom utility classes (`-locked-*`, premium surfaces, gradients, `the-cut`, `glass-card`, …) + `tailwindcss-animate`.
- `styles/` — brand base typography, component classes, and global brand CSS.
- `components/` — UI primitives (shadcn-derived + custom: `cta-button`, `glass-card`, `app-card`, `x-icon`, `OptimizedImage`).
- `lib/` — `cn`, `use-mobile`, `use-toast`.
- `index.ts` — public entry.
```

- [ ] **Step 2: Final full verification — build + lint**

Run:
```bash
npm run build && npm run lint && echo "BUILD+LINT OK"
```
Expected: `BUILD+LINT OK`.

- [ ] **Step 3: Final screenshot comparison across all routes**

Ensure dev server running, then:
```bash
node scripts/visual-check.mjs final
```
Visually compare every `.visual/final/*.png` against `.visual/baseline/*.png`. Expected: identical across all 16 images.

- [ ] **Step 4: Final CSS-bundle diff**

Run:
```bash
diff <(cat .visual/baseline-css.css) <(cat dist/assets/*.css) && echo "CSS IDENTICAL" || echo "REVIEW DIFF"
```
Expected: `CSS IDENTICAL` (or only inert `:root` reordering, manually confirmed).

- [ ] **Step 5: Commit**

```bash
git add src/design-system/README.md
git commit -m "docs: add design system reuse guide"
```

---

## Notes for the implementer

- If Task 1 Step 6's CSS diff shows a real (non-reordering) difference, the cause is almost always cascade position of unlayered raw CSS in `global.css`. Fallback: keep the affected block physically in `src/index.css` (below `@tailwind utilities`) rather than in `global.css`, and note it. The folder is still reusable — just document that block in the README.
- The codemod uses `sed` string replacement; the build (TypeScript) is the backstop that catches any import the patterns missed.
- `src/lib/utils.ts` (app `cn`), `src/lib/icons.ts`, and `src/hooks/use-mobile.tsx` are intentionally left in place for app consumers; only `use-toast` is moved (single-instance requirement).
