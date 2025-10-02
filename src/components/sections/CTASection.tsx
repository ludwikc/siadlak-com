
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-deep-space via-quantum-blue/80 to-deep-space text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-neural-violet rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-neural-violet rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-quantum-blue rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-16 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              {title}
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <Link to={buttonLink}>
              <div className="relative inline-block group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-neural-violet via-neural-violet to-neural-violet rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="relative bg-white hover:bg-white/90 text-neural-violet px-8 py-6 text-lg font-bold shadow-xl"
                >
                  {buttonText}
                  <ArrowRight size={20} className="text-neural-violet ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
