import { Flame, Users, Star, Clock } from "@/lib/icons";
import { CTAButton } from "@/design-system/components/cta-button";
import ludwikAvatar from "@/assets/LUDWIKCSIADLAK-2025-sq.webp";

export default function DiscoveryHero() {
  const scrollToForm = () => {
    const el = document.querySelector("#formularz");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 bg-void-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Avatar — LCP */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <img
              src={ludwikAvatar}
              alt="Ludwik C. Siadlak"
              width={128}
              height={128}
              loading="eager"
              // @ts-expect-error fetchpriority is a valid HTML attr
              fetchpriority="high"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-white/20 shadow-lg"
            />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-3 sm:px-4 py-2">
              <Flame className="h-4 w-4 text-electric" />
              <span className="text-xs sm:text-sm font-bold text-text-on-dark uppercase tracking-wide">
                5 miejsc
              </span>
            </div>
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-3 sm:px-4 py-2">
              <Clock className="h-4 w-4 text-electric" />
              <span className="text-xs sm:text-sm font-bold text-text-on-dark uppercase tracking-wide">
                30 min · bezpłatna
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight text-text-on-dark text-center">
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
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
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
          <div className="flex flex-col items-center gap-4 mb-2">
            <CTAButton
              variant="primary"
              size="xl"
              onClick={scrollToForm}
              className="w-full sm:w-auto"
              data-cta="discovery:hero"
            >
              Sprawdź dostępność
            </CTAButton>

            <a
              href="#nie"
              className="text-base text-text-dim hover:text-electric transition-colors underline py-2"
            >
              Dla kogo to NIE jest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
