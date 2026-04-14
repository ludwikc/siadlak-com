import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getPersonEntity, getWebPageEntity, getBreadcrumbSchema, getVideoObjectSchema } from "@/lib/structured-data";

const interviews = [
  {
    id: "MersV7TtoOU",
    title: "Produktywność w\u00A0copywritingu - jak wziąć się do pracy jako freelancer?",
    host: "Daniel Bartosiewicz (Content i\u00A0Automatyzacja)",
    hostUrl: "https://www.youtube.com/@daniel_bartosiewicz",
    date: "2025-04-10",
    dateLabel: "10 kwietnia 2025",
    description:
      "Ludwik C. Siadlak w\u00A0rozmowie z\u00A0Danielem Bartosiewiczem o\u00A0produktywności dla freelancerów i\u00A0copywriterów. Jak przełamać opór przed pracą, zbudować system zamiast polegać na motywacji i\u00A0skutecznie zarządzać energią, gdy nikt nie patrzy Ci na ręce.",
    topics: ["produktywność", "freelancing", "copywriting", "systemy"],
  },
  {
    id: "LFJKgaP8BlQ",
    title: "Jak robi\u0107 wi\u0119cej, gdy si\u0119 nie chce?",
    host: "Gildia Trener\u00F3w",
    hostUrl: "https://www.youtube.com/@GildiaTrenerow",
    date: "2024-06-11",
    dateLabel: "11 czerwca 2024",
    description:
      "Ludwik C. Siadlak t\u0142umaczy, dlaczego motywacja to pu\u0142apka \u2014 i co dzia\u0142a zamiast niej. Rozmowa o prokrastynacji, systemach produktywno\u015Bci i r\u00F3\u017Cnicy mi\u0119dzy \u2018chcie\u0107\u2019 a \u2018robi\u0107\u2019. Praktyczne podej\u015Bcie dla trener\u00F3w, coach\u00F3w i os\u00F3b pracuj\u0105cych z lud\u017Ami.",
    topics: ["produktywno\u015B\u0107", "prokrastynacja", "motywacja", "systemy"],
  },
  {
    id: "-I1hyOHDXWE",
    title: "Jak wsp\u00F3\u0142praca z konkurencj\u0105 mo\u017Ce wzmocni\u0107 Tw\u00F3j biznes?",
    host: "Danuta Piasecka (Zwi\u0119kszaj Zyski)",
    hostUrl: "https://www.youtube.com/@zwiekszajzyski",
    date: "2023-12-29",
    dateLabel: "29 grudnia 2023",
    description:
      "Wywiad o strategii wsp\u00F3\u0142pracy zamiast rywalizacji. Ludwik C. Siadlak opowiada, jak budowa\u0142 spo\u0142eczno\u015Bci trenerskie i dlaczego dzielenie si\u0119 wiedz\u0105 z \u2018konkurencj\u0105\u2019 jest najlepsz\u0105 strategi\u0105 biznesow\u0105 na d\u0142ug\u0105 met\u0119.",
    topics: ["biznes", "wsp\u00F3\u0142praca", "strategia", "spo\u0142eczno\u015B\u0107"],
  },
  {
    id: "GUYxFooFkO8",
    title: "Na czym polega bycie lifehackerem?",
    host: "Damian Mazurek",
    hostUrl: "https://www.youtube.com/@DamianMazurek",
    date: "2023-03-14",
    dateLabel: "14 marca 2023",
    description:
      "Czym jest life hacking i sk\u0105d si\u0119 wzi\u0105\u0142 w Polsce? Ludwik C. Siadlak \u2014 jeden z pionier\u00F3w polskiego life hackingu \u2014 o filozofii optymalizacji \u017Cycia, narz\u0119dziach mentalnych i r\u00F3\u017Cnicy mi\u0119dzy prawdziwym life hackingiem a \u2018trikami produktywno\u015Bci\u2019.",
    topics: ["life hacking", "filozofia", "optymalizacja", "mindset"],
  },
  {
    id: "G0U9KkV8Hw4",
    title: "\u017Bycie trenera, lifehacking, rytua\u0142y, ksi\u0105\u017Cki",
    host: "Bogusz P\u0119kalski (Startup My Way)",
    hostUrl: "https://www.youtube.com/@StartupMyWay",
    date: "2018-02-20",
    dateLabel: "20 lutego 2018",
    description:
      "Rozmowa o codziennym \u017Cyciu trenera IT, kt\u00F3ry pracuje zdalnie z ca\u0142ego \u015Bwiata. Ludwik C. Siadlak o swoich rytua\u0142ach, ksi\u0105\u017Ckach, kt\u00F3re go ukszta\u0142towa\u0142y, i o tym, jak \u0142\u0105czy\u0107 \u017Cycie cyfrowego nomada z g\u0142\u0119bok\u0105 prac\u0105 mentaln\u0105.",
    topics: ["praca zdalna", "rytua\u0142y", "ksi\u0105\u017Cki", "cyfrowy nomad"],
  },
  {
    id: "HENveKXgNpY",
    title: "Jak zosta\u0107 trenerem IT i zarabia\u0107 w podr\u00F3\u017Cy?",
    host: "Lepiej Teraz",
    hostUrl: "https://www.youtube.com/@LepiejTeraz",
    date: "2018-04-17",
    dateLabel: "17 kwietnia 2018",
    description:
      "Ludwik C. Siadlak o \u015Bcie\u017Cce od Certyfikowanego Trenera Microsoft do w\u0142asnego biznesu edukacyjnego. Jak zbudowa\u0107 karier\u0119 trenera IT, pracowa\u0107 z dowolnego miejsca na \u015Bwiecie i przej\u015B\u0107 od szkole\u0144 korporacyjnych do rozwoju osobistego.",
    topics: ["kariera", "trener IT", "podr\u00F3\u017Ce", "przedsi\u0119biorczo\u015B\u0107"],
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
      "Wywiady i rozmowy z Ludwikiem C. Siadlakiem \u2014 coachem produktywno\u015Bci i uwa\u017Cno\u015Bci, tw\u00F3rc\u0105 Aplikacji Mentalnych i metody Diamentowego Umys\u0142u.",
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
        title="Wywiady z Ludwikiem C. Siadlakiem \u2014 Rozmowy o Produktywno\u015Bci, Uwa\u017Cno\u015Bci i Life Hackingu"
        description="Wywiady i podcasty z Ludwikiem C. Siadlakiem \u2014 coachem produktywno\u015Bci z 19-letnim do\u015Bwiadczeniem. Rozmowy o life hackingu, systemach mentalnych, pracy zdalnej i przedsi\u0119biorczo\u015Bci."
        url="/wywiady"
        jsonLd={[
          getPersonEntity(),
          getWebPageEntity(
            "/wywiady",
            "Wywiady z Ludwikiem C. Siadlakiem",
            "Wywiady i rozmowy z Ludwikiem C. Siadlakiem prowadzone przez Gildi\u0119 Trener\u00F3w, Danut\u0119 Piaseck\u0105, Damiana Mazurka, Bogusza P\u0119kalskiego i kana\u0142 Lepiej Teraz.",
            ["/about", "/program", "/discovery"]
          ),
          breadcrumb,
          itemListSchema,
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
                    Strona g&#322;&#243;wna
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
              Ludwik C. Siadlak jest regularnie zapraszany jako go&#347;&#263;
              podcast&#243;w i wywiad&#243;w w obszarze produktywno&#347;ci,
              rozwoju osobistego i przedsi&#281;biorczo&#347;ci. Poni&#380;ej
              zebrane rozmowy z lat 2018{"\u2013"}2024 prowadzone przez
              Gildi&#281; Trener&#243;w, Danut&#281; Piaseck&#261;, Damiana
              Mazurka, Bogusza P&#281;kalskiego i kana&#322; Lepiej Teraz.
            </p>
          </div>
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
                    Prowadz&#261;cy:{" "}
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

      {/* CTA */}
      <section className="py-12 md:py-16 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
            Chcesz porozmawia&#263; z Ludwikiem?
          </h2>
          <p className="text-dim mb-6">
            Je&#347;li prowadzisz podcast lub kana&#322; i chcesz zaprosi&#263;
            Ludwika jako go&#347;cia{" "}
            <Link
              to="/contact"
              className="text-electric hover:underline"
            >
              skontaktuj si&#281;
            </Link>
            . Je&#347;li szukasz mentora{" "}
            <Link
              to="/discovery"
              className="text-electric hover:underline"
            >
              um&#243;w Sesj&#281; Discovery
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
