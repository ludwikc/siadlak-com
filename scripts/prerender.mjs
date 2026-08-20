#!/usr/bin/env node

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import { staticRoutes } from "../src/routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

// Third-party origins blocked during the snapshot: keeps their markup (CookieYes
// banner, GTM iframes) out of the static HTML and prevents analytics pollution
// from the Googlebot-UA crawl (belt-and-suspenders with the navigator.webdriver
// guard in src/lib/env.ts).
const BLOCKED = [
  "googletagmanager.com",
  "google-analytics.com",
  "cdn-cookieyes.com",
  "assets.mailerlite.com",
  "clarity.ms",
  "doubleclick.net",
  "connect.facebook.net",
  "facebook.com",
];

// Local dev has full puppeteer (bundled Chrome). CI/Vercel build containers
// can't run that download (bun skips postinstall), so fall back to
// @sparticuz/chromium — a self-contained headless shell extracted at runtime.
async function launchBrowser() {
  try {
    const puppeteer = (await import("puppeteer")).default;
    return await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  } catch (err) {
    console.warn(`⚠️  Bundled Chrome unavailable (${err.message}); trying @sparticuz/chromium…`);
  }
  const [{ default: puppeteerCore }, { default: chromium }] = await Promise.all([
    import("puppeteer-core"),
    import("@sparticuz/chromium"),
  ]);
  return await puppeteerCore.launch({
    headless: true,
    executablePath: await chromium.executablePath(),
    args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
  });
}

async function startPreviewServer() {
  console.log("🚀 Starting preview server...");
  const server = spawn("npx", ["vite", "preview", "--port", "8080", "--host"], {
    stdio: ["pipe", "pipe", "pipe"],
    cwd: projectRoot,
  });
  server.stdout.on("data", (data) => console.log(data.toString()));
  server.stderr.on("data", (data) => console.error(data.toString()));
  server.on("error", (err) => console.error("Preview server error:", err.message));

  // Readiness via HTTP poll — vite's startup banner lands on stdout or stderr
  // depending on TTY/CI, so parsing it is unreliable (broke the Vercel build).
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch("http://localhost:8080/", { redirect: "manual" });
      if (res.status < 500) return server;
    } catch {
      // server not accepting connections yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  server.kill();
  throw new Error("Preview server failed to start within 60 seconds");
}

async function prerender() {
  console.log("🚀 Starting prerendering...\n");
  let server = null;
  let successCount = 0;
  let errorCount = 0;

  try {
    server = await startPreviewServer();
    console.log("✅ Preview server started\n");

    let browser;
    try {
      browser = await launchBrowser();
    } catch (launchError) {
      // Prerender is an SEO/LCP enhancement, not a correctness requirement — the
      // SPA build already deployed serves every route via the vercel.json rewrite.
      // If the build container can't launch Chrome, skip prerender without failing
      // the deploy.
      console.warn(
        `⚠️  Skipping prerender (browser unavailable): ${launchError.message}\n` +
          "   The SPA build is intact; routes are served via the vercel.json rewrite.",
      );
      return;
    }

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.setUserAgent(
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    );

    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const url = req.url();
      if (BLOCKED.some((host) => url.includes(host))) req.abort();
      else req.continue();
    });

    for (const route of staticRoutes) {
      try {
        console.log(`📄 Prerendering: ${route}`);
        const url = `http://localhost:8080${route}`;
        await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

        // Let React render + react-helmet-async populate <head>.
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Collect the JS chunks this route loaded, so we can hint the browser to
        // fetch them in parallel on a cold deep-link load (ad traffic speed).
        const chunks = await page.evaluate(() =>
          performance
            .getEntriesByType("resource")
            .map((e) => e.name)
            .filter((n) => /\/assets\/.*\.js($|\?)/.test(n))
            .map((n) => new URL(n).pathname),
        );

        let html = await page.content();
        if (chunks.length) {
          const preloads = [...new Set(chunks)]
            .map((href) => `<link rel="modulepreload" href="${href}">`)
            .join("\n    ");
          html = html.replace("</head>", `    ${preloads}\n  </head>`);
        }

        const filePath =
          route === "/"
            ? join(projectRoot, "dist", "index.html")
            : join(projectRoot, "dist", route.slice(1), "index.html");
        const fileDir = dirname(filePath);
        if (!existsSync(fileDir)) mkdirSync(fileDir, { recursive: true });
        writeFileSync(filePath, html);

        console.log(`✅ Success: ${route}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error prerendering ${route}:`, error.message);
        errorCount++;
      }
    }

    await browser.close();
    console.log(`\n🎉 Prerendering complete!`);
    console.log(`✅ Success: ${successCount} · ❌ Failed: ${errorCount}`);
  } catch (error) {
    // Prerender is an SEO enhancement, not a correctness requirement — any
    // route not snapshotted is served via the vercel.json SPA rewrite. Never
    // fail the deploy over it; the warning stays visible in the build log.
    console.warn(`⚠️  Prerendering skipped/incomplete: ${error.message}`);
  } finally {
    if (server) {
      console.log("\n🛑 Stopping preview server...");
      server.kill();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    if (successCount === 0) {
      console.warn("⚠️  No routes prerendered — deploy continues as plain SPA.");
    }
  }
}

prerender().catch((error) => {
  console.warn(`⚠️  Prerendering skipped: ${error.message} — deploy continues as plain SPA.`);
  process.exit(0);
});
