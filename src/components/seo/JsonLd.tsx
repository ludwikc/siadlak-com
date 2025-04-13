import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * Generic JSON-LD component for structured data
 * Renders structured data in script tag with type application/ld+json
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/**
 * Organization schema for structured data
 */
export const OrganizationSchema: React.FC = () => {
  const { language } = useLanguage();
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ludwik C. Siadlak',
    url: 'https://siadlak.com',
    logo: 'https://siadlak.com/images/logo.png',
    sameAs: [
      'https://instagram.com/ludwiksiadlak',
      'https://twitter.com/siadlak',
      'https://linkedin.com/in/ludwiksiadlak',
      'https://youtube.com/c/ludwiksiadlak'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48-123-456-789',
      contactType: 'customer service',
      availableLanguage: ['English', 'Polish'],
      email: 'contact@siadlak.com'
    },
    description: language === 'pl' 
      ? 'Ludwik C. Siadlak - mentor i coach na styku technologii i ludzkiego potencjału.'
      : 'Ludwik C. Siadlak - mentor and coach at the intersection of technology and human potential.'
  };
  
  return <JsonLd data={organizationData} />;
};

/**
 * Person schema for structured data
 */
export const PersonSchema: React.FC = () => {
  const { language } = useLanguage();
  
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ludwik C. Siadlak',
    url: 'https://siadlak.com',
    image: 'https://siadlak.com/images/ludwik-siadlak.jpg',
    sameAs: [
      'https://instagram.com/ludwiksiadlak',
      'https://twitter.com/siadlak',
      'https://linkedin.com/in/ludwiksiadlak',
      'https://youtube.com/c/ludwiksiadlak'
    ],
    jobTitle: language === 'pl' ? 'Mentor i Coach' : 'Mentor and Coach',
    worksFor: {
      '@type': 'Organization',
      name: 'Ludwik C. Siadlak'
    },
    description: language === 'pl' 
      ? 'Ekspert na styku technologii i ludzkiego potencjału.'
      : 'Expert at the intersection of technology and human potential.',
    knowsLanguage: ['en', 'pl']
  };
  
  return <JsonLd data={personData} />;
};

/**
 * Service schema for structured data
 */
export const ServiceSchema: React.FC = () => {
  const { language } = useLanguage();
  
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: language === 'pl' ? 'Mentoring i Coaching' : 'Mentoring and Coaching',
    provider: {
      '@type': 'Person',
      name: 'Ludwik C. Siadlak',
      url: 'https://siadlak.com'
    },
    description: language === 'pl' 
      ? 'Profesjonalne usługi mentoringu i coachingu na styku technologii i ludzkiego potencjału.'
      : 'Professional mentoring and coaching services at the intersection of technology and human potential.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Mental Elevator',
        description: language === 'pl' 
          ? 'Program rozwoju osobistego i zawodowego.'
          : 'Personal and professional development program.'
      },
      {
        '@type': 'Offer',
        name: 'Hakowanie Produktywności',
        description: language === 'pl' 
          ? 'Program zwiększania efektywności osobistej.'
          : 'Personal productivity enhancement program.'
      }
    ],
    areaServed: {
      '@type': 'Country',
      name: language === 'pl' ? 'Polska' : 'Poland'
    }
  };
  
  return <JsonLd data={serviceData} />;
};

/**
 * FAQ schema for structured data
 */
export const FaqSchema: React.FC = () => {
  const { language } = useLanguage();
  
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: language === 'pl' 
      ? [
          {
            '@type': 'Question',
            name: 'Jak mogę się zapisać na konsultację?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Możesz zapisać się na konsultację poprzez formularz kontaktowy na stronie lub wysyłając email na adres contact@siadlak.com.'
            }
          },
          {
            '@type': 'Question',
            name: 'Jakie są Twoje obszary specjalizacji?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Specjalizuję się w mentoringu na styku technologii i ludzkiego potencjału, pomagając profesjonalistom rozwijać się w erze sztucznej inteligencji i cyfrowej transformacji.'
            }
          },
          {
            '@type': 'Question',
            name: 'Czy oferujesz sesje online?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tak, wszystkie sesje mentoringu i coachingu są dostępne online, co pozwala na elastyczność i dostępność niezależnie od lokalizacji.'
            }
          }
        ]
      : [
          {
            '@type': 'Question',
            name: 'How can I book a consultation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can book a consultation through the contact form on the website or by sending an email to contact@siadlak.com.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are your areas of expertise?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I specialize in mentoring at the intersection of technology and human potential, helping professionals thrive in the age of artificial intelligence and digital transformation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you offer online sessions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all mentoring and coaching sessions are available online, allowing for flexibility and accessibility regardless of location.'
            }
          }
        ]
  };
  
  return <JsonLd data={faqData} />;
};

/**
 * Combined SEO component that includes all structured data
 */
export const StructuredData: React.FC = () => {
  return (
    <>
      <OrganizationSchema />
      <PersonSchema />
      <ServiceSchema />
      <FaqSchema />
    </>
  );
};

export default StructuredData;
