import { Helmet } from 'react-helmet-async';

interface TopicalMetaProps {
  primaryTopic: string;
  secondaryTopics?: string[];
  audience?: string;
  intent?: 'informational' | 'commercial' | 'navigational' | 'transactional';
  significantLinks?: string[];
}

export default function TopicalMeta({
  primaryTopic,
  secondaryTopics = [],
  audience = 'tech professionals aged 30+',
  intent = 'informational',
  significantLinks = [],
}: TopicalMetaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    about: [
      { '@type': 'Thing', name: primaryTopic },
      ...secondaryTopics.map(t => ({ '@type': 'Thing', name: t })),
    ],
    audience: {
      '@type': 'Audience',
      audienceType: audience,
    },
    ...(significantLinks.length > 0 && {
      significantLink: significantLinks.map(l =>
        l.startsWith('http') ? l : `https://siadlak.com${l}`
      ),
    }),
    keywords: [primaryTopic, ...secondaryTopics, intent].join(', '),
  };

  return (
    <Helmet>
      <meta name="topic" content={primaryTopic} />
      <meta name="audience" content={audience} />
      <meta name="page-intent" content={intent} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
