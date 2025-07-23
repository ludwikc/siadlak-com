
import { Star, Users, Award } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TrustElementsProps {
  title: string;
  communityStats?: string;
  testimonials: Testimonial[];
  credentialsSummary?: string;
}

export default function TrustElements({
  title,
  communityStats,
  testimonials,
  credentialsSummary,
}: TrustElementsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:bg-gradient-text-brand-dark dark:text-transparent">
            {title}
          </h2>
        </div>

        {communityStats && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users
                className="text-neural-violet dark:text-luminal-magenta mr-2 flex-shrink-0"
                size={24}
              />
              <p className="text-xl font-medium text-deep-charcoal dark:text-silver-mist">
                {communityStats}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex mb-4 text-neural-violet dark:text-luminal-magenta">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <p className="text-subtle-slate dark:text-silver-mist/80 mb-4 italic">
                "{testimonial.quote}"
              </p>

              <div className="text-deep-charcoal dark:text-silver-mist font-medium">
                {testimonial.name}, {testimonial.title}
              </div>
            </div>
          ))}
        </div>

        {credentialsSummary && (
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Award
                className="text-neural-violet dark:text-luminal-magenta mr-2 flex-shrink-0"
                size={24}
              />
              <p className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">
                {credentialsSummary}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
