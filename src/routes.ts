// Static routes for SSG generation
export const routes = [
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
  '/webinar/meski-kompas',
  '/wyzwanie',
  '/help',
  '/thank-you'
];

// Dynamic routes that should be excluded from static generation
export const dynamicRoutes = [
  '/program/:courseSlug',
  '/help/:subpageSlug',
  '/webinar/live' // Real-time content
];