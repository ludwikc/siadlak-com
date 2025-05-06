
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageDescription?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageDescription,
  backgroundImage
}: HeroProps) {
  return (
    <section className={`relative pt-24 pb-16 md:pt-32 md:pb-24 ${backgroundImage ? '' : 'bg-gradient-to-br from-luminous-white to-secondary dark:from-deep-space dark:to-neural-violet/30'}`}>
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={imageDescription || "Background"} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>
      )}
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/80 to-transparent dark:from-deep-space/80 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className={`mb-4 font-bold !leading-tight ${backgroundImage ? 'text-white' : 'text-neural-violet'}`}>
            {title}
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in ${backgroundImage ? 'text-white/90' : 'text-deep-charcoal/80 dark:text-silver-mist/80'}`} style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to={ctaLink} 
              className="btn-primary flex items-center gap-2 bg-neural-violet-light hover:bg-neural-violet dark:bg-neural-violet hover:dark:bg-neural-violet/80 text-white"
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink} 
                className={`btn-secondary ${backgroundImage ? 'text-white border-white hover:bg-white/20' : 'text-deep-charcoal dark:text-white'}`}
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
