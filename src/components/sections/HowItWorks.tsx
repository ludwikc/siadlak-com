
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Top two tiles in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {steps.slice(0, 2).map((step, index) => (
              <div key={index} className="glass-card p-6 rounded-xl relative hover-scale hover:shadow-xl hover:shadow-neural-violet/10 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-neural-violet/10 rounded-full flex items-center justify-center mb-4 text-neural-violet">
                  {step.icon || (
                    <div className="w-8 h-8 rounded-full bg-neural-violet text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  {step.title}
                </h3>

                <p className="text-subtle-slate mb-4">
                  {step.description}
                </p>

                {step.link && (
                  <Link 
                    to={step.link}
                    className="inline-flex items-center text-neural-violet hover:text-ascension-pink transition-colors font-medium group-hover:translate-x-1 transition-transform"
                  >
                    {step.linkText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bottom community tile - centered and special */}
          {steps[2] && (
            <div className="flex justify-center">
              <div className="glass-card p-8 rounded-xl relative hover-scale hover:shadow-xl hover:shadow-neural-violet/10 transition-all duration-300 max-w-2xl w-full border-2 border-ascension-pink/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-violet to-ascension-pink rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl text-white">∞</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-deep-charcoal">
                  {steps[2].title}
                </h3>

                <p className="text-subtle-slate text-lg leading-relaxed">
                  {steps[2].description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
