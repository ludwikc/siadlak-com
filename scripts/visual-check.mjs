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
