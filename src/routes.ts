// Static routes for SSG generation
export const routes = [
  '/',
  '/about',
  '/contact',
  
  '/newsletter',
  '/testimonials',
  
  '/discovery',
  '/legal',
  '/legal/privacy',
  '/legal/terms',
  '/sitemap',
  
  '/program',
  '/program/hakowanie-produktywnosci',
  '/program/lifeos-system-upgrade',
  '/program/silna-glowa',
  '/program/meski-kompas',
  '/oto',
  '/podcast/life-hacking',
  '/program/uwazne-zycie',
  '/webinar',
  '/webinar/expired',
  '/webinar/replay',
  '/webinar/meski-kompas',
  '/wyzwanie',
  '/help',
  '/thank-you',
  '/thank-you/meski-kompas',
  '/mct'
];

// Dynamic routes that should be excluded from static generation
export const dynamicRoutes = [
  '/program/:courseSlug',
  '/help/:subpageSlug',
  '/webinar/live' // Real-time content
];