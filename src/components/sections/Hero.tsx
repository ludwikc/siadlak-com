
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageDescription?: string;
  backgroundImage?: string;
  heroImage?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageDescription,
  backgroundImage,
  heroImage,
  fullHeight = false
}: HeroProps) {
  const { theme } = useTheme();
  const isLightMode = theme === 'light' || theme === 'dev-light';
  
  // Define a more accessible gradient for light mode with better contrast
  const lightModeGradient = "bg-gradient-to-r from-neural-violet to-ascension-pink relative";
  const darkModeGradient = "bg-gradient-to-br from-deep-space to-quantum-blue";
  return (
    <section 
      className={`relative ${fullHeight ? 'min-h-[90vh]' : 'pt-24 pb-16 md:pt-32 md:pb-24'} ${
        backgroundImage || heroImage 
          ? '' 
          : isLightMode 
            ? lightModeGradient
            : darkModeGradient
      }`}
      aria-label="Hero section"
    >
      {/* Add a lighter overlay in light mode for better gradient text visibility */}
      {isLightMode && !backgroundImage && !heroImage && (
        <div className="absolute inset-0 bg-luminous-white/30 z-0"></div>
      )}
      {/* Background Image (if provided) */}
      {backgroundImage && !heroImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={imageDescription || "Background"} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
      )}
      
      {/* Hero Image (if provided) */}
      {heroImage && (
        <div className="absolute top-0 right-0 h-full z-0 flex items-center justify-end">
          <img 
            src={heroImage} 
            alt={imageDescription || "Hero"} 
            className="h-full object-contain object-right"
          />
        </div>
      )}
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
        {!backgroundImage && !heroImage && (
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/80 to-transparent dark:from-deep-space/80 pointer-events-none"></div>
        )}
      </div>
      
      <div className={`container mx-auto px-4 relative z-10 ${fullHeight ? 'flex flex-col justify-center h-full' : ''}`}>
        <div className={`max-w-4xl ${fullHeight ? 'my-auto py-12' : ''} ${heroImage ? 'w-3/5 md:w-1/2' : ''}`}>
          <h1 className={`mb-4 font-bold !leading-tight animate-fade-in ${
            isLightMode 
              ? 'bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent' 
              : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
          }`}>
            {title}
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in ${
            isLightMode 
              ? 'text-deep-charcoal' 
              : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
          }`} style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to={ctaLink} 
              className={`btn-primary flex items-center gap-2 ${
                isLightMode 
                  ? 'bg-luminous-white hover:bg-luminous-white/90 text-neural-violet font-medium shadow-lg' 
                  : 'bg-neural-violet-light hover:bg-neural-violet dark:bg-neural-violet hover:dark:bg-neural-violet/80 text-white'
              }`}
              onClick={() => window.scrollTo(0, 0)}
              aria-label={`${ctaText} - primary action`}
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink} 
                className={`btn-secondary ${
                  isLightMode 
                    ? 'text-white border-white bg-neural-violet/70 hover:bg-neural-violet/90 shadow-lg' 
                    : 'text-white border-white hover:bg-white/20'
                }`}
                onClick={() => window.scrollTo(0, 0)}
                aria-label={`${secondaryCtaText} - secondary action`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
