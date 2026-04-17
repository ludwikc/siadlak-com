import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getSEOConfig } from "@/lib/seo-config";
import { getBreadcrumbSchema } from "@/lib/structured-data";

const tttBullets = [
  "Jesteś mocny technicznie, ale słaby w sprzedaży i prezentacji przed grupą.",
  "Chcesz wyjść zza klawiatury na scenę i na sale szkoleniowe.",
  "Twoim głównym celem na ten kwartał jest drastyczne podniesienie stawek i zmiana pozycjonowania rynkowego.",
  "Potrzebujesz twardego frameworku dydaktycznego i sprzedażowego, którego dziś nie masz.",
];

const lifeOsBullets = [
  "Osiągnąłeś sukces na zewnątrz, ale płacisz za niego chaosem lub wypaleniem wewnątrz.",
  "Narzędzia z zakresu produktywności przestały działać, bo problem leży głębiej — w Twojej tożsamości.",
  "Tracisz godziny w tygodniu na overthinking i paraliż decyzyjny.",
  "Szukasz spójności między byciem bezwzględnie skutecznym w biznesie, a głęboko spokojnym po godzinach.",
];

export default function Mentoring() {
  return (
    <Layout>
      <SEO
        {...getSEOConfig("/mentoring")}
        jsonLd={[
          getBreadcrumbSchema([
            { name: "Strona główna", path: "/" },
            { name: "Mentoring 1:1", path: "/mentoring" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative bg-void-glow py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-electric font-mono text-xs md:text-sm uppercase tracking-widest mb-4">
            Mentoring 1:1
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-on-dark mb-6 leading-tight">
            Dwa 8-tygodniowe programy. Jedna decyzja: którą ścianę rozbijamy w tym kwartale.
          </h1>
          <p className="text-dim text-base md:text-lg leading-relaxed">
            Ta strona istnieje po to, żebyś w 3 minuty wiedział, który z moich programów mentoringowych jest dla Ciebie — i umówił rozmowę kwalifikacyjną wiedząc dokładnie, po co na nią idziesz.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-diamond py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-electric font-mono text-xs md:text-sm uppercase tracking-widest mb-4">
            Zanim przejdziemy do wyboru
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-light mb-6 leading-tight">
            Twój następny poziom nie wymaga nowej wiedzy. Wymaga nowego systemu.
          </h2>
          <div className="space-y-4 text-on-light text-base md:text-lg leading-relaxed">
            <p>
              Jeśli trafiłeś tutaj, to najprawdopodobniej dlatego, że coś w Twoim obecnym układzie przestało się domykać. Wiedzę masz. Narzędzia masz. Kompetencje masz. A mimo to — coś uderza w sufit.
            </p>
            <p>
              Prowadzę dwa 8-tygodniowe, prywatne programy mentoringowe 1:1. Oba polegają na architektonicznej zmianie tego, jak funkcjonujesz — ale uderzają w zupełnie różne ściany.
            </p>
            <p>
              Pierwszy zdejmuje Twój sufit rynkowy i finansowy. Drugi dekonstruuje sufit wewnątrz Twojej głowy.
            </p>
            <p>
              Oba to <strong>8 tygodni</strong> głębokiej, prywatnej pracy bezpośrednio ze mną. Żadnych grupowych calli. Żadnych nagranych modułów. Żadnego lania wody. Tylko Ty, ja i systemowy problem do rozwiązania.
            </p>
            <p>
              Pytanie nie brzmi, czy jesteś gotowy na pracę. Pytanie brzmi:{" "}
              <strong>gdzie aktualnie uderzasz głową w sufit?</strong>
            </p>
            <p className="text-on-light-dim text-sm md:text-base">
              Masz do wyboru dwa poligony. Zobacz, na którym stoisz.
            </p>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="bg-void py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Path 1: TTT:AI */}
            <article className="min-w-0 flex flex-col rounded-lg border border-white/10 bg-void-glow p-5 sm:p-6 md:p-8 overflow-hidden">
              <p className="text-electric font-mono text-xs uppercase tracking-widest mb-2">
                Ścieżka 1 · External Work
              </p>
              <p className="text-dim text-sm mb-4">
                Rynek, Dźwignia i Rzemiosło.
              </p>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-on-dark mb-4 break-words hyphens-auto">
                Train The Trainer: AI
              </h2>
              <div className="space-y-4 text-dim text-sm md:text-base leading-relaxed mb-6">
                <p>
                  Masz potężną wiedzę techniczną. Jesteś biegły w LLM-ach, agentach, automatyzacjach, MCP. Twój problem nie polega na tym, że nie wiesz, <em>jak to zbudować</em>. Twój problem polega na tym, że rynek płaci Ci za to ułamek tego, co jest warte — bo nie potrafisz tej wiedzy <em>przekazać i sprzedać</em> decydentom w garniturach.
                </p>
                <p>
                  W tym programie budujemy most. Uczymy rzemiosła trenerskiego, prezencji scenicznej i sprzedaży B2B, żeby przenieść Cię z ligi „freelancera łapiącego zlecenia za kilkaset złotych” do „certyfikowanego trenera AI, który bierze 2 000 zł za dzień w centrum szkoleniowym i 5 000–10 000 zł za dzień u bezpośredniego klienta”.
                </p>
              </div>

              <p className="text-on-dark font-bold text-sm md:text-base mb-3">
                Wybierz TTT:AI, jeśli:
              </p>
              <ul className="space-y-2 mb-6">
                {tttBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-dim text-sm md:text-base">
                    <Check className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="text-dim text-sm md:text-base leading-relaxed mb-8">
                Program kończy się certyfikacją <strong className="text-on-dark">Lifehackerzy Certified AI Trainer</strong> i gwarancją pierwszego płatnego zlecenia w ciągu 12 tygodni.
              </p>

              <div className="mt-auto">
                <Button asChild className="w-full h-auto min-h-[48px] py-3 px-4 bg-brand-gradient text-white uppercase tracking-wide font-bold whitespace-normal text-center text-xs sm:text-sm leading-tight">
                  <Link to="/program/ttt-ai">
                    <span className="break-words">Sprawdź szczegóły Train The Trainer: AI</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Link>
                </Button>
              </div>
            </article>

            {/* Path 2: Life OS */}
            <article className="min-w-0 flex flex-col rounded-lg border border-white/10 bg-void-glow p-5 sm:p-6 md:p-8 overflow-hidden">
              <p className="text-electric font-mono text-xs uppercase tracking-widest mb-2">
                Ścieżka 2 · Internal Work
              </p>
              <p className="text-dim text-sm mb-4">
                Spokój, Decyzje i Architektura Umysłu.
              </p>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-on-dark mb-4 break-words hyphens-auto">
                Life OS: System Upgrade
              </h2>
              <div className="space-y-4 text-dim text-sm md:text-base leading-relaxed mb-6">
                <p>
                  Masz już sukces rynkowy. Firma działa, stanowisko się zgadza, pieniądze są na koncie. Ale wewnątrz trwa wojna domowa. Twój analityczny umysł i różne życiowe role (lider, partner, twórca, ojciec) walczą ze sobą, paląc Twoją energię i wydłużając proces decyzyjny. Zbudowałeś wysokopłatne więzienie.
                </p>
                <p>
                  W tym programie robimy dekonstrukcję. Schodzimy do jądra Twojego systemu operacyjnego, usuwamy wewnętrzne konflikty i wdrażamy nowy OS. Celem jest diamentowy umysł — stan, w którym podejmujesz trafne decyzje w 20 minut, bez paraliżu i bez utraty spokoju.
                </p>
              </div>

              <p className="text-on-dark font-bold text-sm md:text-base mb-3">
                Wybierz Life OS, jeśli:
              </p>
              <ul className="space-y-2 mb-6">
                {lifeOsBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-dim text-sm md:text-base">
                    <Check className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="text-dim text-sm md:text-base leading-relaxed mb-8">
                Program kończy się <strong className="text-on-dark">zintegrowanym osobistym systemem operacyjnym</strong> — Twoim, nie uniwersalnym — którego używasz przez następne lata.
              </p>

              <div className="mt-auto">
                <Button asChild className="w-full h-auto min-h-[48px] py-3 px-4 bg-brand-gradient text-white uppercase tracking-wide font-bold whitespace-normal text-center text-xs sm:text-sm leading-tight">
                  <Link to="/program/lifeos-system-upgrade">
                    <span className="break-words">Sprawdź szczegóły Life OS: System Upgrade</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DISCOVERY CTA */}
      <section className="bg-diamond py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-light mb-6 leading-tight">
            Stoisz w kropce? To jest dokładnie ten moment, żeby pomówić.
          </h2>
          <p className="text-on-light-dim text-base md:text-lg leading-relaxed mb-4">
            Wiem, że analityczne umysły potrafią nadmiernie analizować nawet wybór programu mentoringowego. Jeśli widzisz u siebie elementy obu tych światów — zdejmijmy to z Twojej głowy.
          </p>
          <p className="text-on-light text-base md:text-lg leading-relaxed mb-8">
            <strong>Nie masz tego rozstrzygać sam. Od tego jestem.</strong>
          </p>

          <Button asChild size="lg" className="w-full sm:w-auto h-auto min-h-[48px] py-3 px-4 bg-brand-gradient text-white uppercase tracking-wide font-bold whitespace-normal text-center text-xs sm:text-sm leading-tight mb-8">
            <Link to="/discovery">
              <span className="break-words">Umów bezpłatną, 30-minutową Sesję Discovery</span>
              <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
            </Link>
          </Button>

          <div className="space-y-4 text-on-light-dim text-base md:text-lg leading-relaxed text-left">
            <p>
              Wejdziemy na Google Meet. Zadam Ci kilka pytań, które w pierwszych 15 minutach obnażą, gdzie leży Twój prawdziwy bottleneck. Na koniec rozmowy będziesz wiedział, co robić — niezależnie od tego, czy zrobimy to razem, czy pójdziesz z tym dalej sam.
            </p>
            <p>
              Nie każdy wychodzi z tej rozmowy jako mój klient. Każdy wychodzi z niej wiedząc, którą ścianę powinien rozbić najpierw. To samo w sobie jest warte Twojego czasu.
            </p>
          </div>

          <p className="text-on-light-dim text-sm md:text-base mt-12 pt-8 border-t border-on-light/10">
            Programy <strong className="text-on-light">Train The Trainer: AI</strong> oraz <strong className="text-on-light">Life OS: System Upgrade</strong> to 8 tygodni prywatnej pracy 1:1 ze mną. Ograniczona liczba miejsc w każdym kwartale.
          </p>
        </div>
      </section>
    </Layout>
  );
}
