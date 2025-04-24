import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export default function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-deep-charcoal dark:text-silver-mist mb-4">{title}</h2>
          {subtitle && (
            <p className="text-subtle-slate dark:text-silver-mist/80 text-lg">{subtitle}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-neural-violet dark:text-luminal-magenta mb-4 flex items-center">
                {feature.icon}
              </div>
              
              <h3 className="text-deep-charcoal dark:text-silver-mist text-xl mb-3">
                {feature.title}
              </h3>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                {feature.description}
              </p>
              
              {feature.link && (
                <a 
                  href={feature.link} 
                  className="flex items-center text-neural-violet dark:text-luminal-magenta font-medium group"
                >
                  Learn more
                  <ArrowRight size={18} className="ml-2 group-hover:ml-3 transition-all" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
