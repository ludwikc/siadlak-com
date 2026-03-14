import { Flame, Users, Star } from "@/lib/icons";

export default function DiscoveryHero() {
  return (
    <section className="py-16 md:py-24 bg-void-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-4 sm:px-6 py-2 sm:py-3">
              <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
              <span className="text-xs sm:text-sm font-bold text-text-on-dark">
                TYLKO 5 MIEJSC JEDNOCZEŚNIE
              </span>
            </div>
          </div>

          <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight text-text-on-dark text-center">
            <span className="text-electric">Sesja Discovery</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-6 sm:mb-8 text-text-on-dark text-center">
            Ty masz diament. Ja mam pytania.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-text-dim leading-relaxed text-center max-w-4xl mx-auto">
            W ciągu pół godziny sprawdzimy razem, pod jakimi warstwami sukna
            jest ukryty — i czy jestem właściwą osobą, żeby pomóc Ci je zdjąć.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
            <div className="flex items-center gap-2 border border-white/10 rounded-sm px-3 sm:px-4 py-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
              <span className="text-sm sm:text-base font-semibold text-text-on-dark">
                Maksymalnie 5 aktywnych klientów
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-electric fill-electric"
                />
              ))}
              <span className="ml-2 text-sm sm:text-base font-semibold text-text-on-dark">
                Transformacyjna praca 1:1
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <button
              className="inline-flex items-center justify-center px-10 py-4 rounded font-semibold text-white uppercase tracking-wide text-sm"
              style={{
                background:
                  "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
              }}
              onClick={() => {
                const el = document.querySelector("#formularz");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Sprawdź dostępność →
            </button>

            <a
              href="#nie"
              className="text-sm text-text-dim hover:text-electric transition-colors underline"
            >
              Dla kogo to NIE jest →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
