import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import { getPersonEntity, getWebPageEntity, getBreadcrumbSchema, getVideoObjectSchema, getFAQSchema } from "@/lib/structured-data";

const wywiadyFaqs = [
  {
    question: "O czym s\u0105 wywiady z Ludwikiem C. Siadlakiem?",
    answer: "Rozmowy dotycz\u0105 produktywno\u015Bci, life hackingu, pracy zdalnej, budowania biznesu edukacyjnego i filozofii optymalizacji \u017Cycia. Prowadzone przez niezale\u017Cnych tw\u00F3rc\u00F3w \u2014 Gildi\u0119 Trener\u00F3w, Danut\u0119 Piaseck\u0105, Damiana Mazurka, Bogusza P\u0119kalskiego, Daniela Bartosiewicza i kana\u0142 Lepiej Teraz.",
  },
  {
    question: "Czym jest life hacking?",
    answer: "Life hacking to filozofia \u015Bwiadomej optymalizacji codziennego funkcjonowania \u2014 od zarz\u0105dzania energi\u0105 i czasem, przez systemy decyzyjne, po nawyki i rytua\u0142y. Nie chodzi o \u2018triki\u2019, ale o trwa\u0142\u0105 zmian\u0119 sposobu my\u015Blenia. Ludwik C. Siadlak jest jednym z pionier\u00F3w life hackingu w Polsce.",
  },
  {
    question: "Jak zaprosi\u0107 Ludwika do wywiadu?",
    answer: "Przez formularz kontaktowy na stronie siadlak.com/contact. Tematy, kt\u00F3re ch\u0119tnie poruszam: produktywno\u015B\u0107, uwa\u017Cno\u015B\u0107, odporno\u015B\u0107 psychiczna, praca zdalna, budowanie spo\u0142eczno\u015Bci, metoda Diamentowego Umys\u0142u i przej\u015Bcie od korporacji do w\u0142asnego biznesu.",
  },
];

const interviews = [
  {
    id: "MersV7TtoOU",
    title: "Produktywność w copywritingu - jak wziąć się do pracy jako freelancer?",
    host: "Daniel Bartosiewicz (Content i Automatyzacja)",
    hostUrl: "https://www.youtube.com/@daniel_bartosiewicz",
    date: "2025-04-10",
    dateLabel: "10 kwietnia 2025",
    description:
      "Produktywność dla freelancerów i copywriterów. Jak przełamać opór przed pracą, zbudować system zamiast polegać na motywacji i skutecznie zarządzać energią, gdy nikt nie patrzy Ci na ręce.",
    topics: ["produktywność", "freelancing", "copywriting", "systemy"],
  },
  {
    id: "LFJKgaP8BlQ",
    title: "Jak robić więcej, gdy się nie chce?",
    host: "Gildia Trenerów",
    hostUrl: "https://www.youtube.com/@GildiaTrenerow",
    date: "2024-06-11",
    dateLabel: "11 czerwca 2024",
    description:
      "Dlaczego motywacja to pułapka - i co faktycznie działa zamiast niej. Rozmowa o prokrastynacji, systemach produktywności i różnicy między \u2018chcieć\u2019 a \u2018robić\u2019. Dla trenerów, coachów i osób pracujących z ludźmi.",
    topics: ["produktywność", "prokrastynacja", "motywacja", "systemy"],
  },
  {
    id: "-I1hyOHDXWE",
    title: "Jak współpraca z konkurencją może wzmocnić Twój biznes?",
    host: "Danuta Piasecka (Zwiększaj Zyski)",
    hostUrl: "https://www.youtube.com/@zwiekszajzyski",
    date: "2023-12-29",
    dateLabel: "29 grudnia 2023",
    description:
      "Strategia współpracy zamiast rywalizacji. O budowaniu społeczności trenerskich i tym, dlaczego dzielenie się wiedzą z \u2018konkurencją\u2019 jest najlepszą strategią biznesową na długą metę.",
    topics: ["biznes", "współpraca", "strategia", "społeczność"],
  },
  {
    id: "GUYxFooFkO8",
    title: "Na czym polega bycie lifehackerem?",
    host: "Damian Mazurek",
    hostUrl: "https://www.youtube.com/@DamianMazurek",
    date: "2023-03-14",
    dateLabel: "14 marca 2023",
    description:
      "Czym jest life hacking i skąd się wziął w Polsce? O filozofii optymalizacji życia, narzędziach mentalnych i różnicy między prawdziwym life hackingiem a \u2018trikami produktywności\u2019.",
    topics: ["life hacking", "filozofia", "optymalizacja", "mindset"],
  },
  {
    id: "G0U9KkV8Hw4",
    title: "Życie trenera, lifehacking, rytuały, książki",
    host: "Bogusz Pękalski (Startup My Way)",
    hostUrl: "https://www.youtube.com/@StartupMyWay",
    date: "2018-02-20",
    dateLabel: "20 lutego 2018",
    description:
      "Codzienne życie trenera IT pracującego zdalnie z całego świata. O rytuałach, książkach, które kształtują myślenie, i o tym, jak łączyć życie cyfrowego nomada z głęboką pracą mentalną.",
    topics: ["praca zdalna", "rytuały", "książki", "cyfrowy nomad"],
  },
  {
    id: "HENveKXgNpY",
    title: "Jak zostać trenerem IT i zarabiać w podróży?",
    host: "Lepiej Teraz",
    hostUrl: "https://www.youtube.com/@LepiejTeraz",
    date: "2018-04-17",
    dateLabel: "17 kwietnia 2018",
    description:
      "Ścieżka od Certyfikowanego Trenera Microsoft do własnego biznesu edukacyjnego. Jak zbudować karierę trenera IT, pracować z dowolnego miejsca na świecie i przejść od szkoleń korporacyjnych do rozwoju osobistego.",
    topics: ["kariera", "trener IT", "podróże", "przedsiębiorczość"],
  },
];

export default function Wywiady() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Strona główna", path: "/" },
    { name: "Wywiady", path: "/wywiady" },
  ]);

  const videoSchemas = interviews.map(v =>
    getVideoObjectSchema({
      name: v.title,
      description: v.description,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      uploadDate: v.date,
      contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
      embedUrl: `https://www.youtube.com/embed/${v.id}`,
    })
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wywiady z Ludwikiem C. Siadlakiem",
    description:
      "Wywiady i rozmowy z Ludwikiem C. Siadlakiem - coachem produktywności i uważności, twórcą Aplikacji Mentalnych i metody Diamentowego Umysłu.",
    numberOfItems: interviews.length,
    itemListElement: interviews.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.youtube.com/watch?v=${v.id}`,
    })),
  };

  return (
    <Layout>
      <SEO
        {...getSEOConfig("/wywiady")}
        jsonLd={[
          getPersonEntity(),
          getWebPageEntity(
            "/wywiady",
            "Wywiady z Ludwikiem C. Siadlakiem",
            "Wywiady i rozmowy z Ludwikiem C. Siadlakiem prowadzone przez Daniela Bartosiewicza, Gildię Trenerów, Danutę Piasecką, Damiana Mazurka, Bogusza Pękalskiego i kanał Lepiej Teraz.",
            ["/about", "/program", "/discovery"]
          ),
          breadcrumb,
          itemListSchema,
          getFAQSchema(wywiadyFaqs),
          ...videoSchemas,
        ]}
      />

      {/* HERO */}
      <section className="py-16 md:py-24 bg-void-glow relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-dim">
                <li>
                  <Link to="/" className="hover:text-electric transition-colors">
                    Strona główna
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-on-dark font-medium">Wywiady</li>
              </ol>
            </nav>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-on-dark mb-6">
              Wywiady z Ludwikiem C. Siadlakiem
            </h1>

            <p className="text-lg text-dim leading-relaxed max-w-2xl">
              Rozmowy z lat 2018–2025 w obszarze produktywności,
              rozwoju osobistego i przedsiębiorczości. Zaproszenia od
              Daniela Bartosiewicza, Gildi Trenerów, Danuty Piaseckiej, Damiana
              Mazurka, Bogusza Pękalskiego i kanału Lepiej Teraz.
            </p>
          </div>
        </div>
      </section>

      {/* Definicja — extractable block */}
      <section className="py-10 bg-void">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
            Kim jest Ludwik C. Siadlak jako go&#347;&#263; wywiad&#243;w?
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            Coach produktywno&#347;ci i uwa&#380;no&#347;ci z 19-letnim
            do&#347;wiadczeniem, Certyfikowany Trener Microsoft, absolwent
            Oxford Brookes University. Tw&#243;rca Aplikacji Mentalnych i metody
            Diamentowego Umys&#322;u. Zapraszany przez podcast&#243;w
            i kana&#322;y YouTube w obszarze produktywno&#347;ci, life hackingu
            i przedsi&#281;biorczo&#347;ci od 2018 roku.
          </p>
        </div>
      </section>

      {/* INTERVIEWS */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {interviews.map(interview => (
              <article key={interview.id} className="group">
                <div className="aspect-video rounded-md overflow-hidden mb-6 bg-void">
                  <iframe
                    src={`https://www.youtube.com/embed/${interview.id}`}
                    title={interview.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>

                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                  {interview.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                  <span>
                    Prowadzący:{" "}
                    <a
                      href={interview.hostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric hover:underline"
                    >
                      {interview.host}
                    </a>
                  </span>
                  <time dateTime={interview.date}>{interview.dateLabel}</time>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {interview.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {interview.topics.map(topic => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-void">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-10 text-center">
            Najcz&#281;&#347;ciej zadawane pytania
          </h2>
          <div className="space-y-4">
            {wywiadyFaqs.map((faq, i) => (
              <details key={i} className="group border border-white/10 rounded-md">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-on-dark font-medium hover:text-electric transition-colors">
                  {faq.question}
                  <span className="ml-4 text-dim group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-dim leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
            Chcesz porozmawiać z Ludwikiem?
          </h2>
          <p className="text-dim mb-6">
            Jeśli prowadzisz podcast lub kanał i chcesz zaprosić
            Ludwika jako gościa{" "}
            <Link
              to="/contact"
              className="text-electric hover:underline"
            >
              skontaktuj się
            </Link>
            . Jeśli szukasz mentora{" "}
            <Link
              to="/discovery"
              className="text-electric hover:underline"
            >
              umów Sesję Discovery
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-on-dark hover:border-electric/50 transition-colors"
            >
              Poznaj Ludwika
            </Link>
            <Link
              to="/program"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-electric text-white hover:bg-electric/90 transition-colors"
            >
              Zobacz programy
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
