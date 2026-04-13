

## Fix: MailerLite forms not rendering in SPA

### Problem
`window.ml("account", "484845")` is a no-op when called a second time — MailerLite's Universal script caches its initialization state and won't re-scan the DOM for new `.ml-embedded` nodes. The placeholder div renders correctly (visible in DevTools) but stays empty (0px height).

### Solution
Force a full MailerLite re-bootstrap by destroying its cached state and re-injecting the script from scratch each time the component mounts.

### Changes

**`src/components/MailerLiteEmbed.tsx`** — rewrite the `useEffect`:

1. On mount (after a short delay for React to flush the placeholder to DOM):
   - Remove all existing MailerLite script tags from `<head>`
   - Delete `window.ml` and any MailerLite internal globals (`window.mlDataset`, `window.MailerLite`)
   - Create and append a fresh `<script src="https://assets.mailerlite.com/js/universal.js">` 
   - On load, call `window.ml("account", "484845")` — this time it runs as a first-time init and scans the DOM, finding the placeholder

2. On unmount (cleanup):
   - Remove the injected script tag to keep the DOM clean

This approach works because MailerLite's script checks for its own global — if `window.ml` doesn't exist yet, it performs a full initialization including DOM scanning.

**No other files change.** Both `/reset` and `/newsletter` already use `<MailerLiteEmbed>`, so fixing the component fixes both pages.

### Why previous approach failed
- `window.ml("account", "484845")` with `ml` already defined → MailerLite treats it as a queued command, not a fresh init → no DOM scan
- The script in `index.html` `<head>` runs once on page load, finds zero `.ml-embedded` nodes (React hasn't rendered them yet), and never looks again

### Risk mitigation
- The `index.html` head script will still run on initial page load — that's fine, it handles any forms present in the initial HTML
- The component's fresh re-injection only fires when React mounts the embed, ensuring the placeholder is in the DOM first
- `initialized.current` ref prevents double-firing in React Strict Mode

