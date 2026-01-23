#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Import redirect config
let redirects = {};
try {
  const redirectConfigPath = join(projectRoot, 'src/config/redirects.ts');
  const redirectContent = readFileSync(redirectConfigPath, 'utf-8');
  // Extract the redirects object from the TypeScript file
  const redirectsMatch = redirectContent.match(/export const redirects[^{]*=\s*{([^}]*)}/s);
  if (redirectsMatch) {
    const redirectsStr = '{' + redirectsMatch[1] + '}';
    // Parse the object (simple eval for config file)
    redirects = eval('(' + redirectsStr + ')');
  }
} catch (error) {
  console.warn('⚠️  Could not load redirects config, skipping redirect routes');
}

// Get redirect source paths (excluding /webinar which causes navigation timeout)
const redirectRoutes = Object.keys(redirects).filter(route => route !== '/webinar');

// Routes to prerender
const routes = [
  '/',
  '/about',
  '/contact',
  '/work',
  '/newsletter',
  '/testimonials',
  '/assessment',
  '/discovery',
  '/legal',
  '/legal/privacy',
  '/legal/terms',
  '/sitemap',
  '/community',
  '/program',
  '/program/hakowanie-produktywnosci',
  '/program/lifeos-system-upgrade',
  '/program/silna-glowa',
  '/program/meski-kompas',
  '/train-the-trainer',
  '/oto',
  '/podcast',
  '/new-podcast',
  '/podcast/life-hacking',
  '/program/uwazne-zycie',
  '/webinar/kod-kapitana',
  '/webinar/meski-kompas',
  '/webinar/expired',
  '/webinar/replay',
  '/help',
  '/thank-you',
  '/thank-you/meski-kompas',
  // Add redirect routes from config
  ...redirectRoutes
];

async function startPreviewServer() {
  console.log('🚀 Starting preview server...');

  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', '8080', '--host'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: projectRoot
    });

    let serverReady = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      if (output.includes('Local:') && !serverReady) {
        serverReady = true;
        setTimeout(() => resolve(server), 2000); // Wait 2s for server to fully start
      }
    });

    server.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    server.on('error', reject);

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!serverReady) {
        server.kill();
        reject(new Error('Preview server failed to start within 30 seconds'));
      }
    }, 30000);
  });
}

async function prerender() {
  console.log('🚀 Starting prerendering...\n');

  let server = null;
  let successCount = 0;
  let errorCount = 0;

  try {
    // Start preview server
    server = await startPreviewServer();
    console.log('✅ Preview server started\n');

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport and user agent
    await page.setViewport({ width: 1200, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

    for (const route of routes) {
      try {
        console.log(`📄 Prerendering: ${route}`);

        // Navigate to the route
        const url = `http://localhost:8080${route}`;
        await page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 30000
        });

        // Wait for React to render and SEO tags to be set
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get the full HTML
        const html = await page.content();

        // Create the file path
        const filePath = route === '/'
          ? join(projectRoot, 'dist', 'index.html')
          : join(projectRoot, 'dist', route.slice(1), 'index.html');

        // Create directory if it doesn't exist
        const fileDir = dirname(filePath);
        if (!existsSync(fileDir)) {
          mkdirSync(fileDir, { recursive: true });
        }

        // Write the prerendered HTML
        writeFileSync(filePath, html);

        console.log(`✅ Success: ${route} -> ${filePath}`);
        successCount++;

      } catch (error) {
        console.error(`❌ Error prerendering ${route}:`, error.message);
        errorCount++;
      }
    }
  
    await browser.close();

    console.log(`\n🎉 Prerendering complete!`);
    console.log(`✅ Successfully prerendered: ${successCount} pages`);
    console.log(`❌ Failed to prerender: ${errorCount} pages`);

  } catch (error) {
    console.error('❌ Prerendering failed:', error.message);
    throw error;
  } finally {
    // Stop preview server
    if (server) {
      console.log('\n🛑 Stopping preview server...');
      server.kill();

      // Wait a moment for server to shutdown
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if (errorCount > 0) {
      process.exit(1);
    }
  }
}

prerender().catch(console.error);