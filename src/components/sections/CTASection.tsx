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
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-electric/10 to-depth/5 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 rounded-md p-10 md:p-16 border-2 border-electric/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              {title}
            </h2>

            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <Link to={buttonLink}>
              <div className="relative inline-block group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-electric via-depth to-electric rounded blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="relative bg-brand-gradient hover:opacity-90 text-white px-8 py-6 text-lg font-bold"
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
