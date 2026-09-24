import type { ReactNode } from "react";
import Hero from "@/components/sections/Hero";

type MctPageHeroProps = { eyebrow?: ReactNode; title: string; subtitle?: string; children?: ReactNode };

export default function MctPageHero({ eyebrow, title, subtitle, children }: MctPageHeroProps) {
  return (
    <div className="[&>section]:bg-mct-navy">
      <Hero
        align="left"
        eyebrow={eyebrow}
        title={<span className="block text-4xl text-on-dark md:text-6xl">{title}</span>}
        subtitle={subtitle}
      >
        {children}
      </Hero>
    </div>
  );
}
