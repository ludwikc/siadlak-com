import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Check, Phone } from "lucide-react";

const symptoms = [
  {
    bold: "Budzisz się zmęczony",
    text: "— niezależnie od tego, ile spałeś. Wstanie z łóżka wymaga wysiłku, którego nie potrafisz nikomu wytłumaczyć.",
  },
  {
    bold: "Nawet najprostsze decyzje",
    text: "— co zjeść, co obejrzeć, co odpisać — paraliżują cię jak nigdy wcześniej.",
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

export default function WebinarDepresja() {
  return (
    <Layout hideHeader hideFooter>
      <SEO
        title="Nie musisz tego znosić sam — bezpłatne spotkanie"
        description="Bezpłatne spotkanie online z okazji Międzynarodowego Dnia Walki z Depresją. 23 lutego 2026, godz. 19:05. Prowadzi Ludwik C. Siadlak."
        keywords="depresja, pomoc, spotkanie online, zdrowie psychiczne, wsparcie"
        url="/webinar/depresja"
      />

      <div className="min-h-screen" style={{ backgroundColor: "#FAF8F5" }}>
        {/* Hero */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-block rounded-full px-4 py-1.5 text-sm font-medium mb-8"
              style={{ backgroundColor: "#E8F0EF", color: "#2B7A78" }}
            >
              Międzynarodowy Dzień Walki z Depresją · 23 lutego 2026
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#1a1a2e" }}
            >
              Nie musisz tego znosić sam.
            </h1>

            <div className="flex justify-center mb-8">
              <img
                src="/lovable-uploads/ludwik-siadlak-profile.png"
                alt="Ludwik C. Siadlak"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: "4px solid #E8F0EF" }}
              />
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: "#4a4a5a" }}
            >
              Bezpłatne spotkanie online z człowiekiem, który stał na krawędzi
              peronu — i wrócił.
            </p>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-12 md:py-16 px-4" style={{ backgroundColor: "#F5F3F0" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-10 text-center"
              style={{ color: "#1a1a2e" }}
            >
              Czy ostatnio łapiesz się na tym, że…
            </h2>

            <div className="space-y-4">
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5 md:p-6"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderLeft: "4px solid #2B7A78",
                  }}
                >
                  <p style={{ color: "#1a1a2e", lineHeight: 1.7 }}>
                    <strong>{s.bold}</strong>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8 text-center"
              style={{ color: "#1a1a2e" }}
            >
              Wiem, co czujesz. Bo to czułem.
            </h2>

            <blockquote
              className="italic text-lg md:text-xl mb-10 p-6 rounded-lg"
              style={{
                borderLeft: "4px solid #2B7A78",
                color: "#2a2a3e",
                backgroundColor: "#F5F3F0",
                lineHeight: 1.8,
              }}
            >
              „Stojąc na peronie metra Dworzec Gdański, po raz pierwszy od
              miesięcy poczułem motywację — żeby zrobić jeden krok w przód, pod
              nadjeżdżający pociąg."
            </blockquote>

            <div className="space-y-5" style={{ color: "#3a3a4a", lineHeight: 1.8 }}>
              <p>
                Nazywam się Ludwik Siadlak. Jestem trenerem, mężem, ojcem dwójki
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
                powiedzieć ci, że depresja to nie słabość. To choroba. Normalna,
                ludzka choroba, z której się wychodzi. I chcę ci pokazać, jak
                wygląda ta droga.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 px-4" style={{ backgroundColor: "#F5F3F0" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8 text-center"
              style={{ color: "#1a1a2e" }}
            >
              Co wyniesiesz z tego spotkania
            </h2>

            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="mt-1 flex-shrink-0"
                    size={20}
                    style={{ color: "#2B7A78" }}
                  />
                  <span style={{ color: "#3a3a4a", lineHeight: 1.7 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Logistics + CTA */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["23.02", "niedziela", "godz. 19:05", "online", "bezpłatnie"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full px-4 py-1.5 text-sm font-medium"
                    style={{ backgroundColor: "#E8F0EF", color: "#2B7A78" }}
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ color: "#3a3a4a" }}
            >
              To nie jest webinar sprzedażowy. Nie mam ci niczego do sprzedania.
              Chcę się z tobą spotkać i porozmawiać — bo kiedyś ktoś spotkał się
              ze mną i uratował mi życie.
            </p>

            <a
              href="https://buy.siadlak.com/checkout/depresja2026"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#2B7A78" }}
            >
              Dołączam do spotkania
              <ArrowRight size={20} />
            </a>

            <p className="mt-4 text-sm" style={{ color: "#8a8a9a" }}>
              Spotkanie jest bezpłatne. Część Q&A nie będzie nagrywana.
            </p>
          </div>
        </section>

        {/* Crisis Strip */}
        <section
          className="py-6 px-4"
          style={{ backgroundColor: "#FEF3C7" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone size={18} style={{ color: "#92400E" }} />
              <p className="text-sm font-semibold" style={{ color: "#92400E" }}>
                Jeśli w tej chwili masz myśli samobójcze
              </p>
            </div>
            <p className="text-sm" style={{ color: "#78350F" }}>
              Zadzwoń na Telefon Zaufania:{" "}
              <a href="tel:116123" className="font-bold underline">
                116 123
              </a>{" "}
              lub Centrum Wsparcia:{" "}
              <a href="tel:800702222" className="font-bold underline">
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
