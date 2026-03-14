

## URL Rename Plan

### Summary
Change canonical URLs for 4 program pages and add 301 redirects so old URLs keep working. The project uses a 3-layer redirect system: Apache `.htaccess`, Netlify `_redirects`, and client-side `redirects.ts` config rendered via a `<Redirect>` component.

### URL Mapping

```text
OLD                                → NEW
/program/hakowanie-produktywnosci  → /program/produktywnosc
/program/silna-glowa               → /program/odpornosc
/program/uwazne-zycie              → /program/uwaznosc
/program/meski-kompas              → /program/meskosc
```

### Files to Change

**1. Route definitions — `src/App.tsx`**
- Change 4 `<Route path=...>` entries to new paths
- Old paths become redirect entries (handled via redirects config)

**2. Redirect config — `src/config/redirects.ts`**
- Add 4 legacy path redirects: `/program/hakowanie-produktywnosci` → `/program/produktywnosc`, etc.
- Update existing shortcut targets (`/mk`, `/meskikompas`, `/hp`, `/uwaznosc`, `/u`) to point to new paths

**3. SSG routes — `src/routes.ts`**
- Replace 4 old paths with new ones

**4. SEO config — `src/lib/seo-config.ts`**
- Update `path` and `url` fields for 4 entries

**5. Server-side redirects — `.htaccess`**
- Update existing rules (`^mk$`, `^meskikompas$`, `^hp$`) to point to new paths
- Add 4 new 301 rules for old `/program/*` paths

**6. Netlify redirects — `public/_redirects`**
- Update `/uwaznosc` target to `/program/uwaznosc`
- Add `/u` redirect to `/program/uwaznosc`

**7. Internal links (update to new paths)**
- `src/pages/Index.tsx` — 4 link references
- `src/pages/Program.tsx` — 4 link references
- `src/pages/Sitemap.tsx` — 3 link references
- `src/components/layout/Footer.tsx` — 2 link references
- `src/components/sections/Hero.tsx` — pathname check
- `src/pages/WebinarReplay.tsx` — 3 navigate calls (webinar pages excluded per user, but these navigate TO program pages so targets must update)

**8. Other files with references**
- `src/pages/MeskiKompas.tsx` — internal checkout URLs stay (external buy.siadlak.com), no path refs to change
- `public/.htaccess` — same as root `.htaccess`

### What stays unchanged
- Webinar subpages (`/webinar/*`) — excluded per user instruction
- `/webinar/meski-kompas` path stays as-is
- `/thank-you/meski-kompas` path stays as-is
- External checkout URLs (buy.siadlak.com) stay as-is

