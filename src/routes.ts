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
  '/webinar/meski-kompas',
  '/webinar/kod-kapitana',
  '/webinar/depresja',
  '/help',
  '/thank-you',
  '/mct',
  '/start',
  '/siadlakvip'
];

// Dynamic routes that should be excluded from static generation
export const dynamicRoutes = [
  '/webinar',
  '/program/:courseSlug',
  '/help/:subpageSlug',
  '/webinar/meski-kompas/replay',
  '/webinar/meski-kompas/dziekuje',
  '/webinar/depresja/live'
];
