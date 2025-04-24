
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
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageDescription
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-luminous-white to-secondary dark:from-deep-space dark:to-neural-violet/30 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/80 to-transparent dark:from-deep-space/80 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl">
          <h1 className="mb-4 font-bold !leading-tight bg-gradient-to-r from-neural-violet-light dark:from-neural-violet to-ascension-pink-light dark:to-ascension-pink dark:bg-clip-text dark:text-transparent bg-clip-text text-deep-charcoal dark:text-transparent animate-fade-in">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/80 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to={ctaLink} 
              className="btn-primary flex items-center gap-2 bg-neural-violet-light hover:bg-neural-violet dark:bg-neural-violet hover:dark:bg-neural-violet/80"
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink} 
                className="btn-secondary"
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
