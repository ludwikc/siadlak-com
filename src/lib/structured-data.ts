const BASE_URL = 'https://siadlak.com';

// ─── Core Entity IDs ───
const IDS = {
  person: `${BASE_URL}/#ludwik`,
  organization: `${BASE_URL}/#siadlak-com`,
  website: `${BASE_URL}/#website`,
  serviceLifeOS: `${BASE_URL}/#life-os-mentoring`,
  serviceDiscovery: `${BASE_URL}/#discovery-session`,
  courseProduktywnosc: `${BASE_URL}/#kurs-produktywnosc`,
  courseSilnaGlowa: `${BASE_URL}/#kurs-silna-glowa`,
  courseUwazneZycie: `${BASE_URL}/#kurs-uwazne-zycie`,
  courseMeskiKompas: `${BASE_URL}/#kurs-meski-kompas`,
  podcastLifeHacking: `${BASE_URL}/#podcast-life-hacking`,
  podcastUwazneZycie: `${BASE_URL}/#podcast-uwazne-zycie`,
} as const;

export function getPersonEntity() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': IDS.person,
    name: 'Ludwik C. Siadlak',
    alternateName: 'Ludwik Siadlak',
    url: BASE_URL,
    image: `${BASE_URL}/lovable-uploads/SIADLAK-coffee-transparent.png`,
    jobTitle: 'Productivity & Mindfulness Coach, AI-Resistant Leadership Mentor',
    description: 'Ludwik C. Siadlak is a productivity and mindfulness coach based in Poland with 19 years of experience. He works with tech professionals through 1:1 mentoring and self-paced mental programs using his Diamond Mind methodology.',
    knowsAbout: [
      'Productivity',
      'Mindfulness',
      'Mental Resilience',
      'AI-Resistant Leadership',
      'Deep Work',
      'Coaching',
      'Diamond Way Buddhism',
      'Mental Models',
      'Microsoft Technologies',
      'SQL Server',
      'Power BI',
      'Microsoft Copilot',
      'Focus Management',
      'Identity Work',
      'Masculine Development',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'IT Degree, Oxford Brookes University',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'Microsoft Certified Trainer (MCT)',
      },
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Oxford Brookes University',
      sameAs: 'https://www.brookes.ac.uk/',
    },
    sameAs: [
      'https://www.linkedin.com/in/siadlak/',
      'https://www.instagram.com/ludwiksiadlak/',
      'https://x.com/ludwiksiadlak',
      'https://www.youtube.com/@ludwiksiadlak',
    ],
    founder: { '@id': IDS.organization },
    makesOffer: [
      { '@id': IDS.serviceLifeOS },
      { '@id': IDS.serviceDiscovery },
      { '@id': IDS.courseProduktywnosc },
      { '@id': IDS.courseSilnaGlowa },
      { '@id': IDS.courseUwazneZycie },
      { '@id': IDS.courseMeskiKompas },
    ],
    nationality: {
      '@type': 'Country',
      name: 'Poland',
    },
  };
}

export function getOrganizationEntity() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': IDS.organization,
    name: 'Siadlak.com',
    alternateName: 'Diamentowy Umysł',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: 'Siadlak.com offers productivity coaching, mindfulness training, and AI-resistant leadership mentoring for tech professionals in Poland and Europe. Founded by Ludwik C. Siadlak.',
    founder: { '@id': IDS.person },
    areaServed: [
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Continent', name: 'Europe' },
    ],
    knowsAbout: [
      'Productivity Coaching',
      'Mindfulness Training',
      'Mental Resilience',
      'AI-Resistant Leadership',
      'Deep Work',
    ],
    sameAs: [
      'https://www.linkedin.com/in/siadlak/',
      'https://www.instagram.com/ludwiksiadlak/',
    ],
  };
}

export function getWebSiteEntity() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': IDS.website,
    name: 'Siadlak.com - Diamentowy Umysł',
    url: BASE_URL,
    description: 'Productivity coaching, mindfulness training, and AI-resistant leadership mentoring for tech professionals.',
    publisher: { '@id': IDS.organization },
    inLanguage: 'pl-PL',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/sitemap`,
    },
  };
}

export function getWebPageEntity(path: string, name: string, description: string, significantLinks?: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}${path}`,
    name,
    description,
    url: `${BASE_URL}${path}`,
    isPartOf: { '@id': IDS.website },
    author: { '@id': IDS.person },
    inLanguage: 'pl-PL',
    ...(significantLinks && { significantLink: significantLinks.map(l => `${BASE_URL}${l}`) }),
  };
}

export function getServiceLifeOS() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': IDS.serviceLifeOS,
    name: 'Life OS: System Upgrade',
    description: '8-week 1:1 mentoring program for tech leaders and professionals. Ludwik C. Siadlak uses the Diamond Mind methodology to help clients transform their identity-level operating system, not just surface habits.',
    provider: { '@id': IDS.person },
    serviceType: 'Personal Development Coaching',
    areaServed: [
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Continent', name: 'Europe' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Tech professionals, executives, and leaders aged 30+',
    },
    offers: {
      '@type': 'Offer',
      price: '16000',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/LimitedAvailability',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Life OS Program Features',
      itemListElement: [
        '8 weekly 1:1 sessions (50 min to 2.5 hours)',
        'Signal access between sessions',
        'Full system diagnostic',
        'Personalized transformation map',
        'Session recordings',
        'Lifetime community access (Lifehackerzy Discord)',
      ],
    },
  };
}

export function getServiceDiscovery() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': IDS.serviceDiscovery,
    name: 'Discovery Session',
    description: 'Free 30-minute 1:1 diagnostic session with Ludwik C. Siadlak via Zoom. A genuine diagnostic conversation, not a sales call. Helps determine if the Life OS mentoring program is the right fit.',
    provider: { '@id': IDS.person },
    serviceType: 'Consultation',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/LimitedAvailability',
    },
  };
}

interface CourseConfig {
  id: string;
  name: string;
  description: string;
  duration: string;
  price?: string;
  ratingValue?: string;
  ratingCount?: string;
}

const courseConfigs: Record<string, CourseConfig> = {
  produktywnosc: {
    id: IDS.courseProduktywnosc,
    name: 'Produktywność (Productivity Mental App)',
    description: 'A 4-6 week self-paced mental program that permanently changes how you approach work, time, and energy. Not another productivity course - a mental operating system upgrade. 100+ participants, 4.9/5.0 rating.',
    duration: 'P6W',
    price: '777',
    ratingValue: '4.9',
    ratingCount: '100',
  },
  'silna-glowa': {
    id: IDS.courseSilnaGlowa,
    name: 'Silna Głowa (Mental Resilience App)',
    description: 'A 6-week mental resilience program that transforms pressure from an enemy into fuel. A mental firewall that permanently changes how you process stress, criticism, and uncertainty. 118+ participants, 4.8/5.0 rating.',
    duration: 'P6W',
    price: '777',
    ratingValue: '4.8',
    ratingCount: '118',
  },
  'uwazne-zycie': {
    id: IDS.courseUwazneZycie,
    name: 'Uważne Życie (Mindful Living App)',
    description: 'A 4-6 week mindfulness program designed for analytical minds and people with ADHD. Not "close your eyes and breathe" - a practical cockpit takeover that works in meetings, traffic, and everyday life.',
    duration: 'P6W',
  },
  'meski-kompas': {
    id: IDS.courseMeskiKompas,
    name: 'Męski Kompas (Masculine Navigation System)',
    description: 'A 5-week intensive program for analytical men over 30. Provides a navigation system (compass, map, lighthouse) to overcome analysis paralysis and align values with daily actions.',
    duration: 'P5W',
  },
};

export function getCourseEntity(slug: string) {
  const config = courseConfigs[slug];
  if (!config) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': config.id,
    name: config.name,
    description: config.description,
    provider: { '@id': IDS.organization },
    creator: { '@id': IDS.person },
    inLanguage: 'pl-PL',
    isAccessibleForFree: false,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      duration: config.duration,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Tech professionals aged 30+',
    },
    ...(config.price && {
      offers: {
        '@type': 'Offer',
        price: config.price,
        priceCurrency: 'PLN',
        availability: 'https://schema.org/InStock',
      },
    }),
    ...(config.ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: config.ratingValue,
        ratingCount: config.ratingCount,
        bestRating: '5',
      },
    }),
    isPartOf: {
      '@type': 'CreativeWork',
      name: 'Aplikacje Mentalne (Mental Apps)',
      url: `${BASE_URL}/program`,
    },
  };
}

export function getFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getPodcastEntity(variant: 'life-hacking' | 'uwazne-zycie') {
  const configs = {
    'life-hacking': {
      id: IDS.podcastLifeHacking,
      name: 'Life Hacking Podcast',
      description: 'Podcast about life hacks, productivity optimization, and practical strategies for tech professionals. Hosted by Ludwik C. Siadlak.',
    },
    'uwazne-zycie': {
      id: IDS.podcastUwazneZycie,
      name: 'Uważne Życie Podcast',
      description: 'Podcast about mindfulness, conscious living, and finding balance in everyday life. Hosted by Ludwik C. Siadlak.',
    },
  };

  const config = configs[variant];

  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    '@id': config.id,
    name: config.name,
    description: config.description,
    author: { '@id': IDS.person },
    publisher: { '@id': IDS.organization },
    inLanguage: 'pl-PL',
    url: `${BASE_URL}/podcast/${variant}`,
  };
}

// ─── Convenience: full homepage entity graph ───
export function getHomepageEntities() {
  return [
    getPersonEntity(),
    getOrganizationEntity(),
    getWebSiteEntity(),
    getWebPageEntity('/', 'Siadlak.com - Diamentowy Umysł | Ludwik C. Siadlak',
      'Ludwik C. Siadlak is a productivity and mindfulness coach based in Poland with 19 years of experience. He helps tech professionals see what they already have inside, instead of chasing external solutions.',
      ['/program', '/discovery', '/about', '/podcast/life-hacking']
    ),
  ];
}

export function getAboutEntities() {
  return [
    getPersonEntity(),
    getWebPageEntity('/about', 'O mnie - Ludwik C. Siadlak',
      'Ludwik C. Siadlak: 19 years as a Microsoft Certified Trainer, Oxford Brookes alumnus, productivity and mindfulness coach. Founder of Siadlak.com, DeepWork.pl, and Fundacja Hackerzy.pl.',
      ['/discovery', '/program']
    ),
  ];
}

export function getProgramEntities() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Aplikacje Mentalne (Mental Apps)',
      description: 'Four self-paced mental programs by Ludwik C. Siadlak: Productivity, Mental Resilience, Mindful Living, and Masculine Navigation. Each installs once and stays forever.',
      url: `${BASE_URL}/program`,
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@id': IDS.courseProduktywnosc } },
        { '@type': 'ListItem', position: 2, item: { '@id': IDS.courseSilnaGlowa } },
        { '@type': 'ListItem', position: 3, item: { '@id': IDS.courseUwazneZycie } },
        { '@type': 'ListItem', position: 4, item: { '@id': IDS.courseMeskiKompas } },
      ],
      provider: { '@id': IDS.organization },
    },
    getWebPageEntity('/program', 'Aplikacje Mentalne - Programy Rozwojowe',
      'Four self-paced mental programs for tech professionals: Productivity, Mental Resilience, Mindful Living, and Masculine Navigation. Created by Ludwik C. Siadlak.',
      ['/program/produktywnosc', '/program/odpornosc', '/program/uwaznosc', '/program/meskosc', '/discovery']
    ),
  ];
}
