
import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="section bg-luminous-white dark:bg-deep-space">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/5592c4b4-56a4-49e0-8152-a04120ade57f.png" 
                alt="Ludwik C. Siadlak" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-ascension-pink to-luminal-magenta rounded-full blur-2xl opacity-30 dark:opacity-50"></div>
          </div>
          
          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="text-deep-charcoal dark:text-silver-mist mb-6">
              About <span className="text-ascension-pink dark:text-luminal-magenta">Ludwik</span>
            </h2>
            
            <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
              Ludwik Siadlak is a premier coach and mentor working at the intersection of technology and human potential. With over 15 years of experience in tech leadership, he helps professionals amplify their capabilities while maintaining their humanity in our rapidly evolving digital landscape.
            </p>
            
            <p className="text-subtle-slate dark:text-silver-mist/80 mb-8">
              His unique approach combines cutting-edge technical expertise with deep understanding of human psychology and performance optimization, helping clients develop systems that enhance their effectiveness without sacrificing their well-being.
            </p>
            
            <Link to="/about" className="btn-secondary inline-block">
              Learn More About Ludwik
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
