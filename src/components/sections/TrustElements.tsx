import { Star, Users, Award } from "lucide-react";

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
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return parts[0][0] + parts[1][0];
  }
  return parts[0][0] + (parts[0][1] || "");
};

export default function TrustElements({
  title,
  communityStats,
  testimonials,
  credentialsSummary,
}: TrustElementsProps) {
  return (
    <section className="py-20 md:py-24 bg-diamond">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-2 bg-electric/10 rounded-full border border-electric/20">
            <span className="text-sm font-semibold text-electric uppercase tracking-wide">
              Zaufali nam profesjonaliści
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-on-light">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-brand-gradient mx-auto rounded-full"></div>
        </div>

        {communityStats && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="bg-white rounded-md p-6 border border-electric/20 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-xl font-bold text-on-light">
                  {communityStats}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="group bg-white rounded-md p-8 border border-electric/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                  >
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-on-light">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-dim">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-electric"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="text-on-light leading-relaxed">
                  <span className="text-4xl text-electric/30 float-left mr-2 leading-none">
                    "
                  </span>
                  {testimonial.quote}
                </p>
              </div>
            );
          })}
        </div>

        {credentialsSummary && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-electric/5 rounded-md p-8 border border-electric/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <p className="text-xl font-bold text-on-light">
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
