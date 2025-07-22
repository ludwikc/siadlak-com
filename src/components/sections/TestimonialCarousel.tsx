import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function TestimonialCarousel({
  testimonials,
  title = "What Clients Say",
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-center text-deep-charcoal dark:text-silver-mist mb-16">
            {title}
          </h2>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="relative py-8 px-6 md:p-12 glass-card rounded-2xl">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-neural-violet/20 dark:text-luminal-magenta/20">
              <Quote size={48} />
            </div>

            <div className="text-center">
              <blockquote className="text-lg md:text-xl text-deep-charcoal dark:text-silver-mist italic mb-8 relative z-10 px-4">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex flex-col items-center">
                {currentTestimonial.image ? (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink dark:from-neural-violet dark:to-luminal-magenta mb-3"></div>
                )}
                <div className="text-deep-charcoal dark:text-silver-mist font-semibold">
                  {currentTestimonial.name}
                </div>
                <div className="text-subtle-slate dark:text-silver-mist/70 text-sm">
                  {currentTestimonial.title}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            {testimonials.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 mt-8">
                <button
                  onClick={goToPrev}
                  aria-label="Previous testimonial"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 dark:bg-quantum-blue/30 dark:hover:bg-quantum-blue/50 text-deep-charcoal dark:text-silver-mist transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next testimonial"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 dark:bg-quantum-blue/30 dark:hover:bg-quantum-blue/50 text-deep-charcoal dark:text-silver-mist transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
