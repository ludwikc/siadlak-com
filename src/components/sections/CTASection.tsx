import { CTAButton } from "@/design-system/components/cta-button";

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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 rounded-md p-10 md:p-16 border-2 border-electric/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              {title}
            </h2>

            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <CTAButton variant="primary" href={buttonLink}>
              {buttonText}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
