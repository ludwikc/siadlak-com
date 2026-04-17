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
  '/program/produktywnosc',
  '/program/lifeos-system-upgrade',
  '/program/odpornosc',
  '/program/meskosc',
  '/oto',
  '/podcast/life-hacking',
  '/program/uwaznosc',
  '/program/ttt-ai',
  '/mentoring',
  '/webinar',
  '/webinar/expired',
  '/webinar/replay',
  '/webinar/meski-kompas',
  '/wyzwanie',
  '/help',
  '/thank-you',
  '/thank-you/meski-kompas',
  '/mct',
  '/start',
  '/siadlakvip'
];

// Dynamic routes that should be excluded from static generation
export const dynamicRoutes = [
  '/program/:courseSlug',
  '/help/:subpageSlug',
  '/webinar/live' // Real-time content
];
