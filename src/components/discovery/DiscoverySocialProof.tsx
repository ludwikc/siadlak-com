import { Star } from "@/lib/icons";

export default function DiscoverySocialProof() {
  return (
    <section className="bg-diamond-light py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-electric fill-electric"
              />
            ))}
          </div>

          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-on-light leading-tight mb-6">
            „Nie zdawałem sobie sprawy, ile energii szło na walkę z samym
            sobą."
          </blockquote>

          <p className="text-base sm:text-lg text-text-on-light/70">
            <span className="font-semibold text-text-on-light">Tomek, 38 lat</span>
            {" — "}CTO startupu, ojciec dwójki
          </p>
          <p className="text-sm text-text-on-light/50 mt-2 uppercase tracking-wider">
            Sesja Discovery + Life OS
          </p>
        </div>
      </div>
    </section>
  );
}
