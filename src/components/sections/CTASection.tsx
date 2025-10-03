import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-neural-blue/10 to-growth-gold/5 overflow-hidden">
      {/* Light gradient - energizing, not aggressive */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 md:p-16 border-2 border-neural-blue/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-deep-charcoal leading-tight">
              {title}
            </h2>

            <p className="text-xl text-deep-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <Link to={buttonLink}>
              <div className="relative inline-block group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white px-8 py-6 text-lg font-bold shadow-xl"
                >
                  {buttonText}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
