
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

// Helper function to get initials from name
const getInitials = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return parts[0][0] + parts[1][0];
  }
  return parts[0][0] + (parts[0][1] || '');
};

export default function TrustElements({
  title,
  communityStats,
  testimonials,
  credentialsSummary,
}: TrustElementsProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-luminous-white to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-2 bg-neural-violet/10 rounded-full border border-neural-violet/20">
            <span className="text-sm font-semibold text-neural-violet uppercase tracking-wide">
              Zaufali nam profesjonaliści
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-charcoal">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neural-violet via-luminal-magenta to-neural-violet mx-auto rounded-full shadow-lg"></div>
        </div>

        {communityStats && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-neural-violet/20 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-xl font-bold text-deep-charcoal">
                  {communityStats}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => {
            const gradients = [
              'from-neural-violet to-luminal-magenta',
              'from-luminal-magenta to-neural-violet',
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-neural-violet/20 hover:border-neural-violet/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-lg`}>
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-deep-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-deep-charcoal/70">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-neural-violet"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="text-deep-charcoal leading-relaxed">
                  <span className="text-4xl text-neural-violet/30 float-left mr-2 leading-none">"</span>
                  {testimonial.quote}
                </p>
              </div>
            );
          })}
        </div>

        {credentialsSummary && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-neural-violet/10 to-luminal-magenta/10 rounded-2xl p-8 border-2 border-neural-violet/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <p className="text-xl font-bold text-deep-charcoal">
                  {credentialsSummary}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
