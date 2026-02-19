import React from "react";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Persona {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface PersonaSectionProps {
  title: string;
  personas: Persona[];
  callout?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PersonaSection({
  title,
  personas,
  callout,
  ctaText,
  ctaLink,
}: PersonaSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-depth to-electric bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {personas.map((persona, index) => (
            <div key={index} className="bg-card p-6 rounded-md border border-border transition-all duration-300">
              <div className="w-12 h-12 bg-depth/10 rounded-full flex items-center justify-center mb-4 text-depth">
                {persona.icon || <Users size={24} />}
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">
                {persona.title}
              </h3>

              <p className="text-dim">
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        {callout && (
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-medium text-foreground">
              {callout}
            </p>

            {ctaText && ctaLink && (
              <div className="mt-8">
                <Link to={ctaLink}>
                  <Button variant="secondary">{ctaText}</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
