# Design System Storybook Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Storybook 8 to `src/design-system/` with a co-located story per component family, rendering on-brand, ready for a storybook-shape `/design-sync` resume.

**Architecture:** `@storybook/react-vite` reusing the repo's Vite + PostCSS (`postcss-import`→`tailwindcss`→`autoprefixer`) pipeline. Brand CSS is loaded in `.storybook/preview.ts` exactly like `src/main.tsx` (a `preview.css` with tokens+base+components+`@tailwind`, then `global.css` imported after to preserve cascade). CSF3 stories co-located as `src/design-system/components/<name>.stories.tsx`.

**Tech Stack:** Storybook 8.x, `@storybook/react-vite`, `@storybook/addon-essentials`, `@storybook/addon-a11y`, React 18, Tailwind v3.

## Global Constraints

- Storybook is additive dev tooling only — do NOT change website runtime/appearance; `npm run build` must still pass.
- Stories must render on-brand: brand fonts + tokens (electric-blue/depth-purple) + Tailwind utilities + brand CSS layers visibly applied. A blank/browser-default render is a failure.
- `global.css` is imported in `preview.ts` AFTER `preview.css` (JS import order) — NEVER `@import`ed inside a stylesheet (postcss-import would hoist it above `@tailwind` and shift rendering).
- Stories live INSIDE `src/design-system/` so they travel with the folder.
- One story file per component family; compound sub-parts composed inside the parent. Realistic content, no `foo`/`bar`.
- Component import style: most are named exports from the sibling file; `app-card.tsx` is a **default export**. Read each component file for its real exported API before writing its story.
- No library build/package added to the design system (Storybook ≠ publish pipeline).
- Conventional Commits; no Claude/Anthropic mentions.
- Pre-existing `npm run lint` failure (ESLint 9 / `@typescript-eslint`) is unrelated — ignore it.

---

### Task 1: Scaffold Storybook + prove brand CSS (pilot: Button)

**Files:**
- Create: `.storybook/main.ts`, `.storybook/preview.ts`, `.storybook/preview.css`, `.storybook/decorators.tsx`
- Create: `src/design-system/components/button.stories.tsx`
- Modify: `package.json` (devDependencies + scripts), `tailwind.config.ts` (content)

**Interfaces:**
- Produces: a working Storybook whose preview applies brand CSS; a story template the later tasks copy. Decorators module exports `withProviders` (wraps in `TooltipProvider`, mounts `<Toaster/>` + Sonner `<Toaster/>`).

- [ ] **Step 1: Install Storybook + addons**

Run:
```bash
npm install -D storybook@^8 @storybook/react-vite@^8 @storybook/addon-essentials@^8 @storybook/addon-a11y@^8
```
Expected: installs without peer-dep errors (React 18 + Vite 5 are compatible). If `storybook init` is tempting, do NOT use it — it rewrites config; create files manually below.

- [ ] **Step 2: Add scripts to `package.json`**

Add to `"scripts"`:
```json
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"
```

- [ ] **Step 3: Create `.storybook/main.ts`**

```ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/design-system/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  docs: { autodocs: "tag" },
};

export default config;
```

- [ ] **Step 4: Create `.storybook/preview.css`** (brand CSS entry — mirrors the app minus page-specific)

```css
@import "../src/design-system/tokens.css";
@import "../src/design-system/styles/base.css";
@import "../src/design-system/styles/components.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 5: Create `.storybook/decorators.tsx`**

```tsx
import * as React from "react";
import { TooltipProvider } from "../src/design-system/components/tooltip";
import { Toaster } from "../src/design-system/components/toaster";
import { Toaster as SonnerToaster } from "../src/design-system/components/sonner";

export function withProviders(Story: React.ComponentType) {
  return (
    <TooltipProvider>
      <Story />
      <Toaster />
      <SonnerToaster />
    </TooltipProvider>
  );
}
```

- [ ] **Step 6: Create `.storybook/preview.ts`**

```ts
import type { Preview } from "@storybook/react";
import "./preview.css";
import "../src/design-system/styles/global.css"; // AFTER preview.css — preserves raw-CSS cascade
import { withProviders } from "./decorators";

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

export default preview;
```

- [ ] **Step 7: Add `.storybook` to Tailwind content**

In `tailwind.config.ts`, add `"./.storybook/**/*.{ts,tsx}"` to the `content` array (after the existing entries, before the `!`-exclusion line).

- [ ] **Step 8: Write the pilot story `src/design-system/components/button.stories.tsx`** (this is the TEMPLATE later tasks follow)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "special", "secondary", "outline", "ghost", "link", "destructive"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Get started" } };

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="special">Special</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = { args: { children: "Disabled", disabled: true } };
```

- [ ] **Step 9: Build Storybook to verify the pipeline**

Run:
```bash
npm run build-storybook 2>&1 | tail -20
```
Expected: completes with "Storybook ... built" and no compile errors. Output in `storybook-static/`.

- [ ] **Step 10: Verify brand CSS renders (screenshot)**

Run Storybook dev in the background (`npm run storybook`), wait for `http://localhost:6006`, then with puppeteer screenshot the Button "Variants" story iframe:
```bash
node -e "const p=require('puppeteer');(async()=>{const b=await p.launch({headless:'new'});const pg=await b.newPage();await pg.setViewport({width:900,height:400});await pg.goto('http://localhost:6006/iframe.html?id=components-button--variants&viewMode=story',{waitUntil:'networkidle0'});await pg.evaluate(()=>document.fonts.ready);await new Promise(r=>setTimeout(r,500));await pg.screenshot({path:'.visual/sb-button.png'});await b.close();})()"
```
Read `.visual/sb-button.png`. Expected: the "default" button is electric-blue (not browser-default grey), "special" is a purple gradient — i.e. brand tokens applied. If buttons are unstyled, the preview CSS chain is wrong — fix before proceeding. Stop the dev server.

- [ ] **Step 11: Add `storybook-static/` to `.gitignore` and commit**

```bash
printf '\nstorybook-static/\n' >> .gitignore
git add .storybook .gitignore package.json package-lock.json tailwind.config.ts src/design-system/components/button.stories.tsx
git commit -m "feat(storybook): scaffold Storybook with brand CSS wiring and Button stories"
```
(Do NOT `git add -A`; the unrelated `MAIL-IG-RESET.md` and `dist/` must stay out. `.visual/` is already gitignored.)

---

### Task 2: Brand & custom component stories

**Files:** Create `src/design-system/components/{cta-button,glass-card,app-card,x-icon,OptimizedImage}.stories.tsx`

**Interfaces:** Consumes Task 1's template + `withProviders`. Each story follows the Task 1 CSF3 structure (`Meta`/`StoryObj`, `title`, `tags:['autodocs']`, a Default + a variant-sweep + states), reading the component's real exported API from its `.tsx`.

- [ ] **Step 1: Write the five stories**, `title: "Brand/<Name>"`, per these component-specific facts (read each file to confirm props):
  - `cta-button.tsx` — named export `CTAButton`; props `variant: 'primary'|'secondary'|'premium'`, `size: 'default'|'lg'|'xl'`, `children`, `showArrow?`, `href?`. Sweep the 3 variants; one with `showArrow`. (`href` set → renders an anchor.)
  - `glass-card.tsx` — named export `GlassCard`; props `padding` and `variant: 'default'|'bordered'|'subtle'`; children. Render on a dark section (`<div className="bg-void-glow p-10">`) so the glass effect is visible.
  - `app-card.tsx` — **default export** `AppCard`; uses react-router `<Link>` → wrap the story in a router decorator: `import { MemoryRouter } from "react-router-dom"` and add `decorators: [(S) => <MemoryRouter><S/></MemoryRouter>]` on the meta. Props: `title, subtitle, description, category ("Produktywność"|"Odporność psychiczna"|"Męskość"), rating (number), downloads (string), status ("NOWA"|"POLECANE"|"NIEDOSTĘPNA"|"DOSTĘPNA"), features (string[]), link (string), duration?, target?, featured?, premium?`. Use realistic Polish content matching the site. Stories: a default card, a `featured` one, a `premium` one, a `NIEDOSTĘPNA` (unavailable) one.
  - `x-icon.tsx` — read its export/props; simple render at a couple of sizes.
  - `OptimizedImage.tsx` — read its props (needs a `src`); use a small inline data-URI or a public asset path so it renders. Set story `parameters: { layout: "padded" }`.
- [ ] **Step 2: Build** — `npm run build-storybook 2>&1 | tail -20`. Expected: no compile errors.
- [ ] **Step 3: Screenshot-spot-check** CTAButton + GlassCard + AppCard stories (same puppeteer one-liner as Task 1 Step 10, changing the `id=`). Read the PNGs; confirm on-brand. Stop the dev server.
- [ ] **Step 4: Commit** — `git add src/design-system/components/*.stories.tsx && git commit -m "feat(storybook): brand & custom component stories"`

---

### Task 3: Form & input primitive stories

**Files:** Create stories for: `input, textarea, label, checkbox, switch, radio-group, select, slider, input-otp, form`.

**Interfaces:** Consumes Task 1 template + `withProviders`.

- [ ] **Step 1: Write the ten stories** (`title: "Components/<Name>"`), reading each `.tsx` for its real sub-exports and props. Notes:
  - `label` — compose with an `Input` (a label alone is trivial); show the label+input pair.
  - `radio-group` — compose `RadioGroup` + `RadioGroupItem`s with labels.
  - `select` — compose `Select`/`SelectTrigger`/`SelectValue`/`SelectContent`/`SelectItem` with realistic options; render with `defaultValue` so it shows a value (use `parameters: { layout: "centered" }`; the dropdown content is trigger-based so the closed state is fine).
  - `slider` — `defaultValue={[40]}`.
  - `input-otp` — compose the OTP slots group; `maxLength={6}`.
  - `form` — composes `react-hook-form`; build a minimal `useForm` example with 2 fields (an `Input` and a `Select`) using the `Form`/`FormField`/`FormItem`/`FormLabel`/`FormControl`/`FormMessage` parts. Render inside the story's component function (hooks need a component) — use a `render: () => { const form = useForm(...); return (<Form {...form}>...) }`.
  - `checkbox`/`switch` — show checked + unchecked, each with a label.
- [ ] **Step 2: Build** — `npm run build-storybook 2>&1 | tail -20`. No compile errors.
- [ ] **Step 3: Screenshot-spot-check** select + form + radio-group; read PNGs; confirm on-brand. Stop dev server.
- [ ] **Step 4: Commit** — `git add src/design-system/components/*.stories.tsx && git commit -m "feat(storybook): form & input primitive stories"`

---

### Task 4: Overlay & menu stories (render open)

**Files:** Create stories for: `dialog, sheet, popover, hover-card, tooltip, alert-dialog, menubar`.

**Interfaces:** Consumes Task 1 template + `withProviders` (TooltipProvider already global).

- [ ] **Step 1: Write the seven stories.** Each overlay must render in its OPEN state so the card shows real content:
  - `dialog` — `<Dialog defaultOpen>` (or `open`) with `DialogContent`/`DialogHeader`/`DialogTitle`/`DialogDescription`/`DialogFooter` containing realistic copy + a `Button`. Set `parameters: { layout: "fullscreen" }` so the centered overlay fits.
  - `sheet` — `<Sheet defaultOpen>` with `SheetContent` (side="right"); `layout: "fullscreen"`.
  - `popover` — `<Popover defaultOpen>` with `PopoverTrigger` (a Button) + `PopoverContent`.
  - `hover-card` — `<HoverCard defaultOpen>` with content (hover can't render statically; `defaultOpen` shows it).
  - `tooltip` — `<Tooltip defaultOpen>` with `TooltipTrigger` + `TooltipContent`.
  - `alert-dialog` — `<AlertDialog defaultOpen>` with the confirm/cancel actions; `layout: "fullscreen"`.
  - `menubar` — compose a realistic `Menubar` with a couple of menus + items (closed menus are fine; show the bar).
  - Read each `.tsx` for the exact sub-export names.
- [ ] **Step 2: Build** — `npm run build-storybook 2>&1 | tail -20`. No compile errors.
- [ ] **Step 3: Screenshot-spot-check** dialog + sheet + tooltip; read PNGs; confirm the overlay content is visible and on-brand. Stop dev server.
- [ ] **Step 4: Commit** — `git add src/design-system/components/*.stories.tsx && git commit -m "feat(storybook): overlay & menu stories"`

---

### Task 5: Navigation, disclosure & data-display stories

**Files:** Create stories for: `tabs, accordion, navigation-menu, pagination, command, table, separator, scroll-area, resizable`.

**Interfaces:** Consumes Task 1 template.

- [ ] **Step 1: Write the nine stories**, reading each `.tsx`. Notes:
  - `tabs` — `Tabs`/`TabsList`/`TabsTrigger`/`TabsContent`, `defaultValue` set, 2–3 realistic tabs.
  - `accordion` — `type="single" collapsible defaultValue` open on the first item; 3 items with real Q&A copy.
  - `navigation-menu` — compose a realistic nav with a couple of items/triggers.
  - `pagination` — a realistic paginated control (pages 1–5, one active).
  - `command` — `Command` with `CommandInput`/`CommandList`/`CommandGroup`/`CommandItem`s (render inline, not in the dialog variant).
  - `table` — `Table`/`TableHeader`/`TableBody`/`TableRow`/`TableCell` with ~4 realistic rows; `parameters: { layout: "padded" }`.
  - `separator` — show horizontal + vertical between content.
  - `scroll-area` — fixed-height `ScrollArea` with overflowing content.
  - `resizable` — `ResizablePanelGroup` with 2 panels + handle; `layout: "padded"`, give it a fixed width/height.
- [ ] **Step 2: Build** — `npm run build-storybook 2>&1 | tail -20`. No compile errors.
- [ ] **Step 3: Screenshot-spot-check** tabs + accordion + table; read PNGs; confirm on-brand. Stop dev server.
- [ ] **Step 4: Commit** — `git add src/design-system/components/*.stories.tsx && git commit -m "feat(storybook): navigation, disclosure & data-display stories"`

---

### Task 6: Feedback, media & special-case stories

**Files:** Create stories for: `badge, progress, skeleton, toast, sonner, carousel, calendar, sidebar, chart, toggle, toggle-group`.

**Interfaces:** Consumes Task 1 template + `withProviders` (global Toaster/SonnerToaster mounted).

- [ ] **Step 1: Write the eleven stories**, reading each `.tsx`. Special handling:
  - `badge` — sweep variants (read `badgeVariants`); realistic labels.
  - `progress` — `value={60}`.
  - `skeleton` — a realistic card-skeleton composition.
  - `toast` — a story with a `Button` whose `onClick` calls `useToast().toast({ title, description })`; the global `<Toaster/>` (from `withProviders`) renders it. (No separate `toaster.stories.tsx` — toaster is infra demoed here.)
  - `sonner` — a `Button` calling `toast(...)` from `sonner`; global SonnerToaster renders it. (Read `sonner.tsx` for the exported toast fn / re-export.)
  - `carousel` — `Carousel`/`CarouselContent`/`CarouselItem`s (3–4 slides) + prev/next; fixed width; `layout: "padded"`.
  - `calendar` — `Calendar` with `mode="single"` and a `selected` date via a small stateful `render`.
  - `sidebar` — read `sidebar.tsx`; it needs `SidebarProvider`. Wrap the story in `SidebarProvider` + a minimal `Sidebar`/`SidebarContent`/menu composition; `layout: "fullscreen"`.
  - `chart` — read `chart.tsx` (recharts wrapper); provide small inline sample data + a `ChartContainer` config; `layout: "padded"`. If it proves too data-heavy to render statically, render a minimal bar/line with 4 datapoints.
  - `toggle` — pressed + unpressed.
  - `toggle-group` — `type="single" defaultValue` with 3 options.
- [ ] **Step 2: Build** — `npm run build-storybook 2>&1 | tail -20`. No compile errors. If `chart` or `sidebar` can't render statically, give it the simplest valid composition rather than skipping (note any in the report).
- [ ] **Step 3: Screenshot-spot-check** badge + carousel + sidebar + chart; read PNGs; confirm on-brand. Stop dev server.
- [ ] **Step 4: Commit** — `git add src/design-system/components/*.stories.tsx && git commit -m "feat(storybook): feedback, media & special-case stories"`

---

### Task 7: Final verification

**Files:** none (verification + possible doc note).

- [ ] **Step 1: Confirm story coverage** — every visual component family has a story:
```bash
cd /Users/ludwikc/git/siadlakcom/siadlak-com
comm -23 <(ls src/design-system/components/*.tsx | grep -v '.stories.' | xargs -n1 basename | sed 's/.tsx$//' | sort) <(ls src/design-system/components/*.stories.tsx | xargs -n1 basename | sed 's/.stories.tsx$//' | sort)
```
Expected: prints only intentional non-story files: `toaster` (demoed in toast story). Anything else listed is a missing story — add it. (Note in the report which files intentionally have no standalone story.)

- [ ] **Step 2: Full Storybook build** — `npm run build-storybook 2>&1 | tail -25`. Expected: builds clean, no compile errors, all stories included.

- [ ] **Step 3: Website build still passes** — `npm run build 2>&1 | tail -5` → success. Then `git checkout -- dist`.

- [ ] **Step 4: Contact-sheet visual review** — dev server up, screenshot ~8 representative stories (button, cta-button, glass-card, app-card, dialog, form, table, carousel) into `.visual/sb/`, Read them, confirm uniformly on-brand. Stop the dev server.

- [ ] **Step 5: Commit any fixes** from steps 1/4 — `git add src/design-system/components/*.stories.tsx && git commit -m "fix(storybook): coverage and review fixes"` (skip if nothing changed).

---

## Notes for the implementer

- Read each component's `.tsx` for its real exported names/props before writing its story — shadcn sub-export names are consistent but confirm (e.g. `Card`/`CardHeader`/...). `app-card.tsx` is a default export and needs `MemoryRouter`.
- `npm run build-storybook` is the per-task gate — it compiles every story, so a broken import/typo fails the build. There is no unit-test layer.
- Keep stories realistic (real copy, sensible data) — they become the design-sync preview cards and are browsed by humans.
- Stage stories with explicit paths; never `git add -A` (keep `MAIL-IG-RESET.md` and `dist/` out).
