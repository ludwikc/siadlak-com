import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";

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
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-diamond relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-depth rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-depth rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-2 bg-depth/10 rounded-full border border-depth/20">
            <span className="text-sm font-semibold text-depth uppercase tracking-wide">
              Jak to działa
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-brand-gradient mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {steps.slice(0, 2).map((step, index) => {
              const gradients = [
                "from-electric to-depth",
                "from-depth to-electric",
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={index}
                  className="group bg-white rounded-md p-8 border-2 border-depth/20 hover:border-depth/50 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-md flex items-center justify-center mb-6 transition-transform`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-depth transition-colors">
                    {step.title}
                  </h3>

                  <p
                    className="text-foreground/80 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />

                  {step.link && (
                    <Link
                      to={step.link}
                      className="inline-flex items-center text-depth hover:text-depth transition-colors font-semibold"
                    >
                      {step.linkText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {steps[2] && (
            <div className="flex justify-center">
              <div className="relative bg-gradient-to-br from-depth/10 via-depth/10 to-electric/10 rounded-md p-10 border-2 border-depth/30 max-w-3xl w-full text-center group transition-all duration-300">
                <div className="absolute -inset-1 bg-brand-gradient rounded-md blur opacity-20 group-hover:opacity-30 transition-opacity"></div>

                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-depth via-depth to-electric rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-4xl text-white">∞</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    {steps[2].title}
                  </h3>

                  <p
                    className="text-foreground/80 text-lg leading-relaxed"
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
