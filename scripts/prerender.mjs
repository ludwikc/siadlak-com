#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

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
  '/program/mental-elevator',
  '/program/silna-glowa',
  '/program/meski-kompas',
  '/train-the-trainer',
  '/oto',
  '/podcast',
  '/new-podcast',
  '/podcast/life-hacking',
  '/program/uwazne-zycie',
  '/webinar',
  '/webinar/expired',
  '/webinar/replay',
  '/help',
  '/thank-you'
];

async function prerender() {
  console.log('🚀 Starting prerendering...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport and user agent
  await page.setViewport({ width: 1200, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const route of routes) {
    try {
      console.log(`📄 Prerendering: ${route}`);
      
      // Navigate to the route
      const url = `http://localhost:8080${route}`;
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for React to render and SEO tags to be set  
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender().catch(console.error);