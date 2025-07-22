

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 rounded-xl relative">
              <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4 text-neural-violet dark:text-luminal-magenta">
                {step.icon || (
                  <div className="w-8 h-8 rounded-full bg-neural-violet dark:bg-luminal-magenta text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                {step.title}
              </h3>
              
              <p className="text-subtle-slate dark:text-silver-mist/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
