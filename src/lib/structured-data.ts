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
    jobTitle: 'Coach produktywności i uważności, mentor liderów, twórca metody Diamentowego Umysłu',
    description: 'Ludwik C. Siadlak — coach produktywności i uważności z 19-letnim doświadczeniem. Certyfikowany Trener Microsoft (MCT), absolwent Oxford Brookes University. Twórca Aplikacji Mentalnych i metody Diamentowego Umysłu. Pracuje z przedsiębiorcami, liderami i profesjonalistami technologicznymi poprzez mentoring 1:1 (Life OS) oraz programy zmiany sposobu myślenia. Przeszkolił ponad 10 000 osób w firmach Fortune 500 i jednostkach NATO.',
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
    description: 'Siadlak.com — Aplikacje Mentalne i coaching mentalny dla profesjonalistów. Programy zmiany sposobu myślenia: Produktywność, Silna Głowa, Uważne Życie, Męski Kompas oraz Life OS: System Upgrade (mentoring 1:1). Stworzone przez Ludwika C. Siadlaka — 19 lat doświadczenia, 1 240+ absolwentów, ocena 4.9/5.0.',
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
    description: 'Aplikacje Mentalne — programy zmiany sposobu myślenia dla profesjonalistów. Coaching produktywności, trening uważności i mentoring liderów. Twórca: Ludwik C. Siadlak.',
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
    description: 'Life OS: System Upgrade — 8-tygodniowy program mentoringowy 1:1 z Ludwikiem C. Siadlakiem. Pełna reinstalacja systemu operacyjnego życia metodą Diamentowego Umysłu. Praca na poziomie tożsamości i sposobu myślenia, nie technik. Maksymalnie 5 klientów jednocześnie. Cena: 16 000 PLN z gwarancją zwrotu po 2 tygodniach.',
    provider: { '@id': IDS.person },
    serviceType: 'Coaching mentalny i mentoring liderów',
    areaServed: [
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Continent', name: 'Europe' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Profesjonaliści, przedsiębiorcy i liderzy 30+',
    },
    offers: {
      '@type': 'Offer',
      price: '16000',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/LimitedAvailability',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Co zawiera Life OS: System Upgrade',
      itemListElement: [
        '8 cotygodniowych sesji 1:1 (50 min do 2,5 h)',
        'Dostęp VIP 24/7 między sesjami',
        'Pełna diagnostyka Life OS',
        'Spersonalizowana mapa transformacji',
        'Nagrania sesji',
        'Dożywotni dostęp do społeczności Lifehackerzy (Discord)',
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
    description: 'Bezpłatna 30-minutowa sesja diagnostyczna 1:1 z Ludwikiem C. Siadlakiem przez Zoom. Wzajemna ocena — nie rozmowa sprzedażowa. Pomaga ustalić, czy program Life OS: System Upgrade jest odpowiedni.',
    provider: { '@id': IDS.person },
    serviceType: 'Konsultacja diagnostyczna',
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
    name: 'Program: Produktywność — Aplikacja Mentalna',
    description: 'Aplikacja Mentalna Produktywność — 4–6-tygodniowy program zmiany sposobu myślenia o czasie, energii i prokrastynacji. Nie kolejny kurs produktywności, lecz trwała zmiana perspektywy: zamiast zarządzać zadaniami, zarządzasz energią. 1 240+ absolwentów, ocena 4.9/5.0. Twórca: Ludwik C. Siadlak. Cena: 1 497 PLN, dożywotni dostęp.',
    duration: 'P6W',
    price: '1497',
    ratingValue: '4.9',
    ratingCount: '1240',
  },
  'silna-glowa': {
    id: IDS.courseSilnaGlowa,
    name: 'Program: Silna Głowa — Aplikacja Mentalna (Odporność Psychiczna)',
    description: 'Aplikacja Mentalna Silna Głowa — 6-tygodniowy program odporności psychicznej. Firewall dla umysłu: presja przestaje paraliżować i zaczyna skupiać, krytyka przestaje ranić i zaczyna informować. 118+ uczestników, ocena 4.8/5.0. Twórca: Ludwik C. Siadlak. Cena: 777 PLN.',
    duration: 'P6W',
    price: '777',
    ratingValue: '4.8',
    ratingCount: '118',
  },
  'uwazne-zycie': {
    id: IDS.courseUwazneZycie,
    name: 'Program: Uważne Życie — Aplikacja Mentalna (Mindfulness)',
    description: 'Aplikacja Mentalna Uważne Życie — 4–6-tygodniowy program uważności dla analitycznych umysłów i osób z ADHD. Nie „zamknij oczy i oddychaj", lecz przejęcie kontroli nad kokpitem: praktyczna uważność, która działa na spotkaniach, w korku i w codziennym życiu. 500+ kapitanów w społeczności, ocena 4.9/5.0. Twórca: Ludwik C. Siadlak.',
    duration: 'P6W',
  },
  'meski-kompas': {
    id: IDS.courseMeskiKompas,
    name: 'Program: Męski Kompas — Aplikacja Mentalna (Tożsamość)',
    description: 'Aplikacja Mentalna Męski Kompas — 5-tygodniowy intensywny program dla analitycznych mężczyzn 30+. System nawigacji (kompas, mapa, latarnia) do przełamania paraliżu decyzyjnego i zbudowania własnej definicji siebie — napisanej na własnych warunkach. Twórca: Ludwik C. Siadlak.',
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
      audienceType: 'Profesjonaliści i liderzy 30+',
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
      description: 'Podcast o life hackach, optymalizacji produktywności i praktycznych strategiach dla profesjonalistów. Prowadzący: Ludwik C. Siadlak — coach produktywności z 19-letnim doświadczeniem.',
    },
    'uwazne-zycie': {
      id: IDS.podcastUwazneZycie,
      name: 'Uważne Życie Podcast',
      description: 'Podcast o uważności, świadomym życiu i odnajdywaniu równowagi w codzienności. Dla analitycznych umysłów, które szukają głębi, nie kolejnych trików. Prowadzący: Ludwik C. Siadlak.',
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

// ─── BreadcrumbList schema ───

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function getCourseBreadcrumb(courseName: string, coursePath: string) {
  return getBreadcrumbSchema([
    { name: 'Strona główna', path: '/' },
    { name: 'Programy', path: '/program' },
    { name: courseName, path: coursePath },
  ]);
}

export function getPodcastBreadcrumb(podcastName: string, podcastPath: string) {
  return getBreadcrumbSchema([
    { name: 'Strona główna', path: '/' },
    { name: podcastName, path: podcastPath },
  ]);
}

// ─── VideoObject schema ───

export function getVideoObjectSchema(config: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl?: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: config.name,
    description: config.description,
    thumbnailUrl: config.thumbnailUrl,
    uploadDate: config.uploadDate,
    contentUrl: config.contentUrl,
    ...(config.embedUrl && { embedUrl: config.embedUrl }),
    ...(config.duration && { duration: config.duration }),
    author: { '@id': IDS.person },
    publisher: { '@id': IDS.organization },
    inLanguage: 'pl-PL',
  };
}

// ─── Review / AggregateRating ───

type ReviewItem = {
  author: string;
  reviewBody: string;
  ratingValue: number;
};

export function getReviewSchema(
  courseName: string,
  courseUrl: string,
  reviews: ReviewItem[],
  aggregateRating: { ratingValue: number; reviewCount: number },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    url: `${BASE_URL}${courseUrl}`,
    provider: { '@id': IDS.person },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount: aggregateRating.reviewCount,
    },
    review: reviews.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.ratingValue,
        bestRating: 5,
      },
    })),
  };
}

// ─── Convenience: full homepage entity graph ───
export function getHomepageEntities() {
  return [
    getPersonEntity(),
    getOrganizationEntity(),
    getWebSiteEntity(),
    getWebPageEntity('/', 'Siadlak.com — Diamentowy Umysł | Ludwik C. Siadlak',
      'Ludwik C. Siadlak — coach produktywności i uważności z 19-letnim doświadczeniem. Twórca Aplikacji Mentalnych i metody Diamentowego Umysłu. Pomaga profesjonalistom, liderom i przedsiębiorcom zobaczyć to, co mieli w sobie od zawsze — zamiast szukać tego na zewnątrz. 1 240+ absolwentów, ocena 4.9/5.0.',
      ['/program', '/discovery', '/about', '/podcast/life-hacking']
    ),
  ];
}

export function getAboutEntities() {
  return [
    getPersonEntity(),
    getWebPageEntity('/about', 'O mnie — Ludwik C. Siadlak',
      'Ludwik C. Siadlak — Certyfikowany Trener Microsoft (MCT) z 19-letnim doświadczeniem, absolwent Oxford Brookes University, coach produktywności i uważności. Twórca metody Diamentowego Umysłu, założyciel Siadlak.com, DeepWork.pl i Fundacji Hackerzy.pl. Przeszkolił 10 000+ profesjonalistów w firmach Fortune 500 i NATO.',
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
      description: 'Cztery Aplikacje Mentalne Ludwika C. Siadlaka: Produktywność, Silna Głowa (odporność psychiczna), Uważne Życie (mindfulness) i Męski Kompas (tożsamość). Każdą instalujesz raz — i zostaje z Tobą na zawsze.',
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
      'Cztery Aplikacje Mentalne dla profesjonalistów: Produktywność, Silna Głowa, Uważne Życie i Męski Kompas. Programy zmiany sposobu myślenia stworzone przez Ludwika C. Siadlaka.',
      ['/program/produktywnosc', '/program/odpornosc', '/program/uwaznosc', '/program/meskosc', '/discovery']
    ),
  ];
}
