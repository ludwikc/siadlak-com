import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Check, Phone } from "lucide-react";

const symptoms = [
  {
    bold: "Budzisz się zmęczony",
    text: " — niezależnie od tego, ile spałeś. Wstanie z łóżka wymaga wysiłku, którego nie potrafisz nikomu wytłumaczyć.",
  },
  {
    bold: "Nawet najprostsze decyzje",
    text: " — co zjeść, co obejrzeć, co odpisać — paraliżują cię jak nigdy wcześniej.",
  },
  {
    bold: "Wiadomości od znajomych leżą nieprzeczytane",
    text: ". Mówisz sobie \u201Eodpiszę za chwilę\u201D — i nigdy tego nie robisz.",
  },
  {
    bold: "Na zewnątrz uśmiechasz się i działasz",
    text: ". W środku — cisza, pustka i pytanie: \u201Edlaczego mi się nie chce żyć tak jak kiedyś?\u201D",
  },
  {
    bold: "Próbujesz wspominać dobre chwile",
    text: ", ale nawet w najlepszych wspomnieniach odnajdujesz teraz tylko ból.",
  },
  {
    bold: "Czujesz, że jesteś ciężarem dla świata",
    text: ". Że innym byłoby bez ciebie lżej. Że nie ma sensu próbować.",
  },
];

const benefits = [
  "Konkretne sygnały ostrzegawcze, po których rozpoznasz depresję u siebie — zanim będzie za późno.",
  "Jak zauważyć depresję u bliskiej osoby, nawet gdy nosi maskę uśmiechu.",
  "Szczerą historię człowieka, który przeszedł przez najczarniejszy moment — i wyszedł po drugiej stronie.",
  "Bezpieczną przestrzeń do pytań — bez kamery, bez nagrywania, bez oceniania.",
  "Pierwszy krok, który możesz zrobić jeszcze dziś, nawet jeśli wydaje ci się, że nie masz siły na nic.",
];

function TheCut() {
  return <div className="the-cut" />;
}

export default function WebinarDepresja() {
  return (
    <Layout hideHeader hideFooter>
      <SEO
        title="Nie musisz tego znosić sam — bezpłatne spotkanie"
        description="Bezpłatne spotkanie online z okazji Międzynarodowego Dnia Walki z Depresją. 23 lutego 2026, godz. 19:05. Prowadzi Ludwik C. Siadlak."
        keywords="depresja, pomoc, spotkanie online, zdrowie psychiczne, wsparcie"
        url="/webinar/depresja"
      />

      <div className="min-h-screen">
        {/* Hero — void-glow */}
        <section className="bg-void-glow py-24 md:py-36 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-sm px-4 py-1.5 text-sm font-medium tracking-wide uppercase text-electric-blue border border-electric-blue/30 mb-8">
              Międzynarodowy Dzień Walki z Depresją · 23 lutego 2026
            </span>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-on-dark mb-6">
              Nie musisz tego znosić sam.
            </h1>

            <div className="flex justify-center mb-8">
              <img
                src="/lovable-uploads/ludwik-siadlak-profile.png"
                alt="Ludwik C. Siadlak"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-electric-blue/30"
              />
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-text-dim max-w-2xl mx-auto">
              Bezpłatne spotkanie online z człowiekiem, który stał na krawędzi
              peronu — i wrócił.
            </p>
          </div>
        </section>

        <TheCut />

        {/* Symptoms — bg-diamond */}
        <section className="bg-diamond-light py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl md:text-4xl font-bold leading-tight text-text-on-light mb-10 text-center">
              Czy ostatnio łapiesz się na tym, że…
            </h2>

            <div className="space-y-4">
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-5 md:p-6 border-l-4 border-electric-blue rounded-sm"
                >
                  <p className="text-text-on-light/80 leading-relaxed">
                    <strong className="text-text-on-light">{s.bold}</strong>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TheCut />

        {/* Personal Story — void-glow */}
        <section className="bg-void-glow py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl md:text-4xl font-bold leading-tight text-text-on-dark mb-8 text-center">
              Wiem, co czujesz. Bo to czułem.
            </h2>

            <blockquote className="border-l-4 border-electric-blue pl-6 italic text-text-dim text-lg md:text-xl leading-relaxed mb-10">
              „Stojąc na peronie metra Dworzec Gdański, po raz pierwszy od
              miesięcy poczułem motywację — żeby zrobić jeden krok w przód, pod
              nadjeżdżający pociąg."
            </blockquote>

            <div className="space-y-5 text-text-dim text-base md:text-lg leading-relaxed">
              <p>
                Nazywam się <span className="text-text-on-dark font-semibold">Ludwik Siadlak</span>. Jestem trenerem, mężem, ojcem dwójki
                dzieci. Prowadzę szkolenia, coaching, buduję społeczność. Z
                zewnątrz — człowiek, który „ma wszystko poukładane".
              </p>
              <p>
                Ale kilka lat temu świat wyglądał jak film o zombie. Ludzie wokół
                mnie przestali być prawdziwi. Odwoływałem randki z dziewczyną,
                którą kochałem, żeby leżeć na kanapie i płakać. Chodziłem do
                pracy z maską uśmiechu, wracałem do pustego mieszkania i pustki
                wewnątrz.
              </p>
              <p>
                Sięgnąłem po pomoc w ostatnim momencie. Dzisiaj jestem tu — żeby
                powiedzieć ci, że <span className="text-text-on-dark font-semibold">depresja to nie słabość</span>. To choroba. Normalna,
                ludzka choroba, z której się wychodzi. I chcę ci pokazać, jak
                wygląda ta droga.
              </p>
            </div>
          </div>
        </section>

        <TheCut />

        {/* Benefits — bg-diamond */}
        <section className="bg-diamond-light py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl md:text-4xl font-bold leading-tight text-text-on-light mb-8 text-center">
              Co wyniesiesz z tego spotkania
            </h2>

            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-depth-purple flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </span>
                  <span className="text-text-on-light/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <TheCut />

        {/* CTA — void-glow */}
        <section className="bg-void-glow py-24 md:py-32 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["23.02", "niedziela", "godz. 19:05", "online", "bezpłatnie"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-sm px-4 py-1.5 text-sm font-medium text-electric-blue border border-electric-blue/30"
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto text-text-dim">
              To nie jest webinar sprzedażowy. Nie mam ci niczego do sprzedania.
              Chcę się z tobą spotkać i porozmawiać — bo kiedyś ktoś spotkał się
              ze mną i uratował mi życie.
            </p>

            <a
              href="https://buy.siadlak.com/checkout/depresja2026"
              className="inline-flex items-center gap-2 rounded px-10 py-4 text-sm font-semibold text-white uppercase tracking-wide transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                boxShadow: "0 4px 15px hsla(263, 70%, 50%, 0.4)",
              }}
            >
              Dołączam do spotkania
              <ArrowRight size={18} />
            </a>

            <p className="mt-4 text-sm text-text-dim">
              Spotkanie jest bezpłatne. Część Q&A nie będzie nagrywana.
            </p>
          </div>
        </section>

        {/* Crisis Footer — flat void, no glow */}
        <section className="bg-void-black py-8 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone size={18} className="text-yellow-400" />
              <p className="text-sm font-semibold text-yellow-400">
                Jeśli w tej chwili masz myśli samobójcze
              </p>
            </div>
            <p className="text-sm text-text-dim">
              Zadzwoń na Telefon Zaufania:{" "}
              <a href="tel:116123" className="font-bold underline text-text-on-dark">
                116 123
              </a>{" "}
              lub Centrum Wsparcia:{" "}
              <a href="tel:800702222" className="font-bold underline text-text-on-dark">
                800 70 2222
              </a>{" "}
              (całodobowo, bezpłatnie)
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
