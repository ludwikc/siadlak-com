#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { glob } from 'glob';

const pagesToProcess = [
  { file: 'Contact.tsx', route: '/contact' },
  { file: 'Discovery.tsx', route: '/discovery' },
  { file: 'Work.tsx', route: '/work' },
  { file: 'Newsletter.tsx', route: '/newsletter' },
  { file: 'Testimonials.tsx', route: '/testimonials' },
  { file: 'Assessment.tsx', route: '/assessment' },
  { file: 'Legal.tsx', route: '/legal' },
  { file: 'Privacy.tsx', route: '/legal/privacy' },
  { file: 'Terms.tsx', route: '/legal/terms' },
  { file: 'Community.tsx', route: '/community' },
  { file: 'Courses.tsx', route: '/program' },
  { file: 'HakowanieProduktywnosci.tsx', route: '/program/hakowanie-produktywnosci' },
  { file: 'LifeOSSystemUpgrade.tsx', route: '/program/lifeos-system-upgrade' },
  { file: 'SilnaGlowa.tsx', route: '/program/silna-glowa' },
  { file: 'MeskiKompas.tsx', route: '/program/meski-kompas' },
  { file: 'TrainTheTrainer.tsx', route: '/train-the-trainer' },
  { file: 'Podcasts.tsx', route: '/podcast' },
  { file: 'LifeHackingPodcast.tsx', route: '/podcast/life-hacking' },
  { file: 'UwazneZyciePodcast.tsx', route: '/program/uwazne-zycie' },
  { file: 'Webinar.tsx', route: '/webinar' },
  { file: 'Help.tsx', route: '/help' },
  { file: 'Sitemap.tsx', route: '/sitemap' }
];

function addSEOToPage(filePath, route) {
  let content = readFileSync(filePath, 'utf-8');
  
  // Skip if SEO is already imported
  if (content.includes('import SEO from')) {
    console.log(`✓ ${filePath} already has SEO`);
    return;
  }
  
  // Add imports after existing imports
  const importSEOLine = "import SEO from '@/components/SEO';\nimport { getSEOConfig } from '@/lib/seo-config';";
  
  // Find the last import line
  const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
  const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
  const afterLastImport = content.indexOf('\n', lastImportIndex) + 1;
  
  // Insert the new imports
  content = content.slice(0, afterLastImport) + importSEOLine + '\n' + content.slice(afterLastImport);
  
  // Add SEO component after <Layout>
  const layoutOpenTag = '<Layout>';
  const layoutIndex = content.indexOf(layoutOpenTag);
  
  if (layoutIndex !== -1) {
    const insertPoint = layoutIndex + layoutOpenTag.length;
    const seoComponent = `\n      <SEO {...getSEOConfig("${route}")} />`;
    content = content.slice(0, insertPoint) + seoComponent + content.slice(insertPoint);
    
    writeFileSync(filePath, content);
    console.log(`✅ Added SEO to ${filePath} for route ${route}`);
  } else {
    console.log(`❌ Could not find <Layout> in ${filePath}`);
  }
}

function main() {
  console.log('Adding SEO components to pages...\n');
  
  for (const { file, route } of pagesToProcess) {
    const filePath = resolve(process.cwd(), 'src/pages', file);
    try {
      addSEOToPage(filePath, route);
    } catch (error) {
      console.log(`❌ Error processing ${file}: ${error.message}`);
    }
  }
  
  console.log('\n🎉 SEO addition complete!');
}

main();