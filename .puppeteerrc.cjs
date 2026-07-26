// Skip Chromium download on install. Puppeteer is only used by the (deferred)
// prerender step, which does not run in the Vercel build — and the download
// fails in Vercel's build container, breaking `npm ci`. The original Bun setup
// skipped lifecycle scripts, so this never ran before the npm switch.
// For local prerender, install a browser once: `npx puppeteer browsers install chrome`.
module.exports = { skipDownload: true };
