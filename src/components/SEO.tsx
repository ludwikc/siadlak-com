import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'course' | 'podcast' | 'event' | 'tool';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  locale?: string;
  noindex?: boolean;
  favicon?: string;
}

const defaultSEO = {
  title: 'SIADLAK.COM - Diamentowy Umysł | Ludwik C. Siadlak',
  description: 'Odkryj swój potencjał z programami rozwoju osobistego, coachingiem i narzędziami produktywności. Dołącz do społeczności ludzi dążących do lepszego życia.',
  keywords: 'rozwój osobisty, coaching, produktywność, motywacja, sukces, życie, szczęście',
  image: '/og-image.jpg',
  url: 'https://siadlak.com',
  type: 'website' as const,
  author: 'Ludwik C. Siadlak',
  locale: 'pl_PL'
};

export default function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  author = defaultSEO.author,
  publishedDate,
  modifiedDate,
  locale = defaultSEO.locale,
  noindex = false,
  favicon
}: SEOProps) {
  const fullTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title;
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;
  const canonicalUrl = url === defaultSEO.url ? url : `${defaultSEO.url}${url}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : 'Article',
    name: fullTitle,
    description,
    url: canonicalUrl,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: author
    },
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
    ...(type === 'website' && {
      publisher: {
        '@type': 'Organization',
        name: 'Siadlak.com',
        logo: {
          '@type': 'ImageObject',
          url: `${defaultSEO.url}/logo.png`
        }
      }
    })
  };

  return (
    <Helmet>
      {/* Charset */}
      <meta charSet="UTF-8" />

      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      {favicon && <link rel="icon" href={favicon} type="image/png" />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="SIADLAK.COM" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Article specific */}
      {type === 'article' && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {type === 'article' && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}