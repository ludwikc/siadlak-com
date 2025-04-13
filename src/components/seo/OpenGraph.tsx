import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

interface OpenGraphProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  profile?: {
    firstName?: string;
    lastName?: string;
    username?: string;
    gender?: string;
  };
}

/**
 * Enhanced OpenGraph component for SEO
 * Provides comprehensive Open Graph tags for better social media sharing
 */
export const OpenGraph: React.FC<OpenGraphProps> = ({
  title,
  description,
  image,
  type = 'website',
  article,
  profile,
}) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Default values
  const defaultTitle = language === 'pl' 
    ? 'Ludwik C. Siadlak | Mentor i Coach'
    : 'Ludwik C. Siadlak | Mentor & Coach';
    
  const defaultDescription = language === 'pl'
    ? 'Rozwiń swój potencjał z Ludwikiem C. Siadlakiem, ekspertem na styku technologii i ludzkiego rozwoju.'
    : 'Transform your potential with Ludwik C. Siadlak, expert at the intersection of technology and human development.';
    
  const defaultImage = 'https://siadlak.com/images/og-image.jpg';
  
  // Construct the canonical URL
  const baseUrl = 'https://siadlak.com';
  const canonicalUrl = `${baseUrl}${location.pathname}`;
  
  // Determine the locale
  const locale = language === 'pl' ? 'pl_PL' : 'en_US';
  const alternateLocale = language === 'pl' ? 'en_US' : 'pl_PL';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Basic */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:site_name" content="Ludwik C. Siadlak" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@siadlak" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Article Specific (if type is article) */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Profile Specific (if type is profile) */}
      {type === 'profile' && profile && (
        <>
          {profile.firstName && (
            <meta property="profile:first_name" content={profile.firstName} />
          )}
          {profile.lastName && (
            <meta property="profile:last_name" content={profile.lastName} />
          )}
          {profile.username && (
            <meta property="profile:username" content={profile.username} />
          )}
          {profile.gender && (
            <meta property="profile:gender" content={profile.gender} />
          )}
        </>
      )}
    </Helmet>
  );
};

export default OpenGraph;
