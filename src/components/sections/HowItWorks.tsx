
import { Link } from 'react-router-dom';
import { ArrowRight } from '@/lib/icons';

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export default function HowItWorks({ title, steps }: HowItWorksProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-luminous-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-neural-violet rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-neural-violet rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-2 bg-neural-violet/10 rounded-full border border-neural-violet/20">
            <span className="text-sm font-semibold text-neural-violet uppercase tracking-wide">
              Jak to działa
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-charcoal">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neural-violet via-neural-violet to-neural-violet mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Top two tiles in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {steps.slice(0, 2).map((step, index) => {
              const gradients = [
                'from-quantum-blue to-neural-violet',
                'from-neural-violet to-quantum-blue',
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border-2 border-neural-violet/20 hover:border-neural-violet/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {step.icon || (
                      <div className="text-white text-2xl font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-deep-charcoal group-hover:text-neural-violet transition-colors">
                    {step.title}
                  </h3>

                  <p
                    className="text-deep-charcoal/80 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />

                  {step.link && (
                    <Link
                      to={step.link}
                      className="inline-flex items-center text-neural-violet hover:text-neural-violet transition-colors font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      {step.linkText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom community tile - centered and special */}
          {steps[2] && (
            <div className="flex justify-center">
              <div className="relative bg-gradient-to-br from-neural-violet/10 via-neural-violet/10 to-quantum-blue/10 rounded-2xl p-10 border-2 border-neural-violet/30 shadow-2xl max-w-3xl w-full text-center group hover:-translate-y-2 transition-all duration-300">
                {/* Gradient glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet via-neural-violet to-neural-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>

                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-neural-violet via-neural-violet to-ascension-pink rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform">
                    <span className="text-4xl text-white">∞</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-deep-charcoal">
                    {steps[2].title}
                  </h3>

                  <p
                    className="text-deep-charcoal/80 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: steps[2].description }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
