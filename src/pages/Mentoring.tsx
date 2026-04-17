import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getSEOConfig } from "@/lib/seo-config";
import { getBreadcrumbSchema } from "@/lib/structured-data";

const tttBullets = [
  "Zajebiście dowozisz technicznie, ale słabo się sprzedajesz.",
  "Chcesz wyjść zza klawiatury na scenę i sale szkoleniowe.",
  "Twoim głównym celem na ten kwartał jest drastyczne podniesienie stawek i zmiana pozycjonowania rynkowego.",
  "Potrzebujesz twardego frameworku dydaktycznego i sprzedażowego.",
];

const lifeOsBullets = [
  "Osiągnąłeś sukces na zewnątrz, ale płacisz za niego chaosem lub wypaleniem wewnątrz.",
  "Narzędzia z zakresu produktywności przestały działać, bo problem leży głębiej — w Twojej tożsamości.",
  "Tracisz godziny w tygodniu na ruminacje i paraliż decyzyjny.",
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
            Twój następny poziom nie wymaga nowej wiedzy. Wymaga nowego systemu.
          </h1>
          <p className="text-dim text-base md:text-lg leading-relaxed mb-4">
            To nie jest katalog szkoleń do „przerobienia”. To miejsce, w którym wybierasz, jaki bottleneck musimy rozbić w tym kwartale.
          </p>
          <p className="text-dim text-base md:text-lg leading-relaxed">
            Prowadzę dwa 8-tygodniowe, prywatne programy mentoringowe 1:1. Oba polegają na architektonicznej zmianie tego, jak funkcjonujesz — ale uderzają w zupełnie inne ściany. Pierwszy zdejmuje Twój sufit rynkowy i finansowy. Drugi dekonstruuje sufit wewnątrz Twojej głowy. Zobacz, w którym miejscu obecnie stoisz, i wybierz swoją ścieżkę.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-diamond py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-on-light text-base md:text-lg leading-relaxed mb-4">
            Oba programy to <strong>8 tygodni</strong> głębokiej, prywatnej pracy bezpośrednio ze mną. Żadnych grupowych calli, nagranych wideo czy lania wody. Tylko Ty, ja i systemowy problem do rozwiązania.
          </p>
          <p className="text-on-light text-base md:text-lg leading-relaxed">
            Pytanie nie brzmi, czy jesteś gotowy na pracę. Pytanie brzmi:{" "}
            <strong>gdzie aktualnie uderzasz głową w sufit?</strong>
          </p>
          <p className="text-on-light-dim text-sm md:text-base mt-4">
            Masz do wyboru dwa poligony. Zobacz, na którym stoisz.
          </p>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="bg-void py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Path 1: TTT:AI */}
            <article className="flex flex-col rounded-lg border border-white/10 bg-void-glow p-6 md:p-8">
              <p className="text-electric font-mono text-xs uppercase tracking-widest mb-2">
                Ścieżka 1 · Zewnątrz
              </p>
              <p className="text-dim text-sm mb-4">
                Rynek, Dźwignia i Rzemiosło.
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-4">
                Train The Trainer: AI
              </h2>
              <div className="space-y-4 text-dim text-sm md:text-base leading-relaxed mb-6">
                <p>
                  Masz potężną wiedzę techniczną. Jesteś biegły w LLMach, agentach i automatyzacjach. Twój problem nie polega na tym, że nie wiesz <em>jak to zbudować</em>. Twój problem polega na tym, że rynek płaci Ci za to ułamek tego, co jest to warte, bo nie potrafisz tej wiedzy <em>przekazać i sprzedać</em> decydentom w garniturach.
                </p>
                <p>
                  W tym programie budujemy most. Uczymy rzemiosła trenerskiego, prezencji i sprzedaży B2B, żeby przenieść Cię z ligi „freelancera za kilkaset złotych” do „eksperta biorącego 5 000 – 10 000 zł za dzień warsztatowy”.
                </p>
              </div>

              <p className="text-on-dark font-bold text-sm md:text-base mb-3">
                Wybierz TTT:AI, jeśli:
              </p>
              <ul className="space-y-2 mb-8">
                {tttBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-dim text-sm md:text-base">
                    <Check className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button asChild className="w-full bg-brand-gradient text-white uppercase tracking-wide font-bold">
                  <Link to="/program/ttt-ai">
                    Sprawdź szczegóły Train The Trainer: AI
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>

            {/* Path 2: Life OS */}
            <article className="flex flex-col rounded-lg border border-white/10 bg-void-glow p-6 md:p-8">
              <p className="text-electric font-mono text-xs uppercase tracking-widest mb-2">
                Ścieżka 2 · Wewnątrz
              </p>
              <p className="text-dim text-sm mb-4">
                Spokój, Decyzje i Architektura Umysłu.
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-4">
                Life OS: System Upgrade
              </h2>
              <div className="space-y-4 text-dim text-sm md:text-base leading-relaxed mb-6">
                <p>
                  Masz już sukces rynkowy. Firma działa, stanowisko się zgadza, pieniądze są na koncie. Ale wewnątrz trwa wojna domowa. Twój analityczny umysł i różne życiowe role (lider, partner, twórca) walczą ze sobą, paląc Twoją energię i wydłużając proces decyzyjny. Zbudowałeś wysokopłatne więzienie.
                </p>
                <p>
                  W tym programie robimy dekonstrukcję. Schodzimy do jądra Twojego systemu operacyjnego, usuwamy wewnętrzne konflikty i wdrażamy nowy OS. Celem jest diamentowy umysł — stan, w którym podejmujesz trafne decyzje w 20 minut, bez paraliżu i bez utraty spokoju.
                </p>
              </div>

              <p className="text-on-dark font-bold text-sm md:text-base mb-3">
                Wybierz Life OS, jeśli:
              </p>
              <ul className="space-y-2 mb-8">
                {lifeOsBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-dim text-sm md:text-base">
                    <Check className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button asChild className="w-full bg-brand-gradient text-white uppercase tracking-wide font-bold">
                  <Link to="/program/lifeos-system-upgrade">
                    Sprawdź szczegóły Life OS: System Upgrade
                    <ArrowRight className="ml-2 h-4 w-4" />
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
            System sprawdza się w praktyce. Zróbmy test.
          </h2>
          <p className="text-on-light-dim text-base md:text-lg leading-relaxed mb-4">
            Wiem, że analityczne umysły potrafią overthinkować nawet wybór programu mentoringowego. Jeśli stoisz w kropce i widzisz u siebie elementy obu tych światów — zdejmijmy to z Twojej głowy.
          </p>
          <p className="text-on-light-dim text-base md:text-lg leading-relaxed mb-8">
            Wejdziemy na Meet. Zadam Ci kilka pytań, które błyskawicznie obnażą, gdzie leży Twój prawdziwy bottleneck. Na koniec tej rozmowy będziesz wiedział, co robić — niezależnie od tego, czy zrobimy to razem, czy pójdziesz z tym dalej sam.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-brand-gradient text-white uppercase tracking-wide font-bold">
            <Link to="/discovery">
              Umów bezpłatną, 30-minutową Sesję Discovery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
