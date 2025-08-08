import type { ComponentType } from 'react';

// Dynamic imports for help pages
const helpPages: Record<string, () => Promise<{ default: ComponentType }>> = {
  'jak-zaczac': () => import('./JakZaczac'),
  'pierwsze-kroki': () => import('./PierwszeKroki'),
  'nawigacja': () => import('./Nawigacja'),
  'ustawienia-konta': () => import('./UstawieniaKonta'),
  'zmiana-hasla': () => import('./ZmianaHasla'),
  'powiadomienia': () => import('./Powiadomienia'),
  'pierwsze-kroki-z-discordem': () => import('./PierwszeKrokiZDiscordem'),
  'faq': () => import('./FAQ'),
  'kontakt-support': () => import('./KontaktSupport'),
  'rozwiazywanie-problemow': () => import('./RozwiazywanieProblemow'),
  // Add more as you create them
};

export { helpPages };
export { default as HelpPageLayout } from './HelpPageLayout';
export type { HelpPageData } from './types';