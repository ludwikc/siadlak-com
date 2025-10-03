

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
                alt="Ludwik Siadlak"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-zenith-gold to-twilight-indigo rounded-full blur-2xl opacity-30"></div>
          </div>

          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="text-deep-charcoal mb-6">
              About{" "}
              <span className="text-zenith-gold">
                Ludwik
              </span>
            </h2>

            <p className="text-subtle-slate mb-4">
              Ludwik Siadlak is a premier coach and mentor working at the
              intersection of technology and human potential. With over 15 years
              of experience in tech leadership, he helps professionals amplify
              their capabilities while maintaining their humanity in our rapidly
              evolving digital landscape.
            </p>

            <p className="text-subtle-slate mb-8">
              His unique approach combines cutting-edge technical expertise with
              deep understanding of human psychology and performance
              optimization, helping clients develop systems that enhance their
              effectiveness without sacrificing their well-being.
            </p>

            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="secondary">Learn More About Ludwik</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
