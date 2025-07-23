
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
    <section className="py-16 bg-gradient-locked-cta section-locked">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-locked-white mb-4">{title}</h2>

          <p className="text-locked-silver text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <Link to={buttonLink}>
            <Button
              variant="secondary"
              size="lg"
              className="btn-locked-primary"
            >
              {buttonText}
              <ArrowRight size={18} className="text-neural-violet" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
