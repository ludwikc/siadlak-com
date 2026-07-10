import Layout from "../components/layout/Layout";
import jakubGlowaczOpinia from "@/assets/JakubGlowacz-opinia.webp";
import slackIcon from "@/assets/slack-icon.png";
import slackVerifiedIcon from "@/assets/slack-verified-icon.png";
import SEO from "../components/SEO";
import { getSEOConfig, getTopicalConfig } from "../lib/seo-config";
import TopicalMeta from "../components/TopicalMeta";
import { getHomepageEntities, getFAQSchema, getBreadcrumbSchema } from "../lib/structured-data";
import { Link } from "react-router-dom";
import sessionPhoto6 from "@/assets/Ludwik C. Siadlak-sessionphotos6.webp?format=avif;webp&as=picture";
import programUwaznosc from "@/assets/LCS-program-Uwaznosc.png?w=400;800&format=avif;webp;png&as=picture";
import programProduktywnosc from "@/assets/LCS-program-Produktywnosc.png?w=400;800&format=avif;webp;png&as=picture";
import programOdpornosc from "@/assets/LCS-program-Odpornosc.png?w=400;800&format=avif;webp;png&as=picture";
import programMeskiKompas from "@/assets/LCS-program-MeskiKompas.png?w=400;800&format=avif;webp;png&as=picture";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import { CTAButton } from "@/design-system/components/cta-button";
import { Shield, Leaf } from "lucide-react";

/* ─── tiny reusable pieces ─── */

const TheCut = () => <div className="the-cut" />;

const Eyebrow = ({ children, color = "electric" }: { children: string; color?: "electric" | "depth" | "dim" }) => {
  const colorClass = color === "electric" ? "text-electric" : color === "depth" ? "text-depth" : "text-on-light-dim";
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${colorClass}`}>{children}</p>;
};

const TestimonialCard = ({
  quote,
  author,
  label,
  flag,
  variant = "light",
  size = "sm",
}: {
  quote: string;
  author: string;
  label?: string;
  flag?: string;
  variant?: "light" | "dark";
  size?: "sm" | "base";
}) => {
  const isLight = variant === "light";
  return (
    <div className={`p-6 md:p-8 rounded-md ${isLight ? "bg-diamond" : "bg-surface"}`}>
      <p
        className={`${size === "sm" ? "text-sm" : "text-base"} ${isLight ? "text-on-light-dim" : "text-dim"} leading-relaxed mb-4`}
      >
        {flag && <span className="mr-1">{flag}</span>}„{quote}"
      </p>
      <footer className={`pt-3 border-t ${isLight ? "border-border/50" : "border-white/10"}`}>
        <p className={`text-xs font-bold uppercase tracking-wide ${isLight ? "text-on-light" : "text-white"}`}>
          {author}
        </p>
        {label && <p className={`text-xs mt-1 ${isLight ? "text-on-light-dim" : "text-dim"}`}>{label}</p>}
      </footer>
    </div>
  );
};

const homepageFAQs = [
  {
    question: "Czym Aplikacje Mentalne różnią się od kursów online?",
    answer: "Kursy dostarczają wiedzę — Aplikacje Mentalne zmieniają sposób myślenia. Zamiast uczyć technik, pomagają usunąć warstwy, które blokują naturalną skuteczność. Instalujesz raz — zostają na zawsze.",
  },
  {
    question: "Czym coaching mentalny różni się od terapii?",
    answer: "Terapia pomaga zrozumieć przeszłość. Coaching mentalny zmienia to, jak podejmujesz decyzje w teraźniejszości — pracuje na poziomie tożsamości, nie historii. To nie alternatywa dla terapii, lecz uzupełnienie.",
  },
  {
    question: "Dla kogo są te programy?",
    answer: "Dla ambitnych profesjonalistów, przedsiębiorców i liderów (30–50 lat), którzy przetestowali wystarczająco dużo, by wiedzieć, że problem nie leży w technikach. Przychodzą z poczuciem „powinienem być dalej niż jestem” — mimo obiektywnych sukcesów.",
  },
  {
    question: "Czym jest metoda Diamentowego Umysłu?",
    answer: "Autorska metoda oparta na założeniu, że umysł — jak Diament — jest z natury czysty, ale nabiera „koloru” otoczenia. Praca polega na zdejmowaniu warstw, nie dodawaniu nowych. Inspirowana buddyzmem Diamentowej Drogi i psychologią C.G. Junga.",
  },
  {
    question: "Od którego programu zacząć?",
    answer: "Chaos i prokrastynacja → Produktywność. Stres i presja → Silna Głowa (Odporność Psychiczna). Świadome życie → Uważne Życie (Mindfulness). Głębsza zmiana → Sesja Discovery i rozmowa o Life OS.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/")} jsonLd={[
        ...getHomepageEntities(),
        getBreadcrumbSchema([{ name: 'Strona g\u0142\u00F3wna', path: '/' }]),
      ]} />
      {(() => { const t = getTopicalConfig("/"); return t ? <TopicalMeta {...t} /> : null; })()}

      {/* ╔═══════════════════════════════════════════╗
          ║       FAZA 1: THE VOID (ciemna)          ║
          ╚═══════════════════════════════════════════╝ */}

      {/* ═══ HERO ═══ */}
      <section className="min-h-screen pt-20 bg-void relative overflow-hidden">
        {/* void-glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(109,40,217,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,122,255,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[calc(100vh-5rem)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] text-white mb-8 font-heading">
                Nie brakuje Ci czasu ani narzędzi. <br /> Brakuje Ci <span className="bg-gradient-to-r from-electric to-accent bg-clip-text text-transparent">przejrzystości</span>.
              </h1>

              <div className="space-y-6 text-lg md:text-xl text-dim leading-relaxed max-w-2xl">
                <p>Nazywam się Ludwik C. Siadlak. Od 19 lat pomagam ludziom zobaczyć to, co mieli w sobie od zawsze - zamiast szukać tego na zewnątrz.</p>
                <p className="text-white font-medium">
                  Jeśli wiesz, że problem nie leży w kolejnym narzędziu - jesteś we właściwym miejscu.
                </p>
              </div>

              {/* Dual CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <CTAButton variant="primary" href="/discovery" size="default">
                  SESJA DISCOVERY
                </CTAButton>
                <CTAButton variant="secondary" onDark href="/program" size="default" showArrow={false}>
                  APLIKACJE MENTALNE
                </CTAButton>
              </div>
            </div>

            {/* Right: photo (desktop only) */}
            <div className="hidden lg:block relative">
              {/* Decorative blob */}
              <div
                className="absolute -right-20 top-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(to top right, rgba(0,122,255,0.1), rgba(109,40,217,0.1))",
                  filter: "blur(100px)",
                }}
              />
              <OptimizedImage
                src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                alt="Ludwik C. Siadlak"
                className="relative z-10 h-[85%] w-auto object-contain mx-auto"
                priority
                width={1000}
                height={1600}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL MARQUEE ═══ */}
      <section className="py-5 overflow-hidden bg-void">
        <div className="marquee-track flex gap-12 animate-marquee" style={{ width: "max-content" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-12 items-start" aria-hidden={copy === 1 ? "true" : undefined}>
              {[
                { q: "Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat.", a: "Łukasz, IT, ADHD, sceptyk" },
                { q: "Ludwik is the best instructor I have ever met. His knowledge and teaching skills made this course incredibly interesting.", a: "Paweł Cerkaski" },
                { q: "Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do prawdziwej wiary w możliwości, które mam.", a: "Anna, CEO" },
                { q: "Bardzo fajny gość. Ma wiedzę ale przede wszystkim osobowość. Właściwa osoba na właściwym miejscu.", a: "Adam Anioła" },
                { q: "Excellent instructor. Extremely knowledgeable, articulate and personable. Best instructor I've had in many years.", a: "Betty M. Greenberg" },
                { q: "Poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają. Nie dlatego, że Ludwik jest lepszy. Dlatego, że zadaje inne pytania.", a: "Artur, ojciec, przedsiębiorca" },
                { q: "Easy to understand, clear explanations and a nice teaching personality.", a: "Yasith Navoda" },
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="max-w-md whitespace-normal">
                    <p className="text-sm text-dim leading-relaxed">„{t.q}"</p>
                    <p className="text-xs text-dim font-medium mt-1">— {t.a}</p>
                  </div>
                  <span className="text-white/10 self-center">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PERSPEKTYWA - METAFORA DIAMENTU ═══ */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl">
          <Eyebrow>PERSPEKTYWA</Eyebrow>

          <div className="space-y-6 text-lg md:text-xl text-dim leading-relaxed">
            <p className="text-white text-2xl md:text-3xl font-heading font-bold leading-[1.2]">
              Diament jest najtwardszą substancją na Ziemi. I&nbsp;jest kompletnie przezroczysty.
            </p>

            <p>
              Połóż go na czerwonym suknie - wygląda jak rubin. Na zielonym - jak szmaragd. Zmień sukno - zmieni się
              „kolor" Diamentu.
            </p>

            <blockquote className="border-l-2 border-electric pl-6 py-2 text-white italic">
              Ale Diament sam w sobie? Nie ma koloru. Jest czysty.
              <br />
              Twój umysł działa dokładnie tak samo.
            </blockquote>

            <p>Otaczasz się presją - nabiera koloru napięcia. Myślisz: „jestem zestresowany".</p>
            <p>Wchodzisz w sprint za kolejnym celem - nabiera koloru głodu. Myślisz: „nigdy nie mam dość".</p>

            <p>Ale to nie Ty się zmieniłeś.</p>
            <p className="text-white text-2xl font-bold">
              To <span className="text-electric font-bold">tło</span> się zmieniło.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM SECTION (Diagnoza) ═══ */}
      <section className="py-24 bg-void">
        <div className="container mx-auto px-4 max-w-3xl">
          <Eyebrow>PRAWDA, KTÓRĄ JUŻ CZUJESZ</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-6">
            Branża rozwoju osobistego sprzedaje Ci plasterki
          </h2>
          <p className="text-lg text-dim leading-relaxed mb-12">
            A Ty masz w sobie Diament. Problem nigdy nie był w Tobie. Był w tym, co Ci sprzedawano jako „rozwiązanie".
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Szlifowałeś go kursami: GTD, Todoist, Asana, „7 nawyków skutecznego wszystkiego". (Mam je na półce. Wszystkie. Niektóre nawet przeczytane.)',
              "Polerowałeś terapeutami i coachami — kolejny, i jeszcze jeden, i może ten wreszcie...",
              "Czyściłeś medytacją i mindfulness — bo ktoś Ci powiedział, że problem jest w Twojej głowie.",
            ].map((item, i) => (
              <div key={i} className="p-4 bg-void rounded flex items-start gap-3">
                <span className="text-destructive font-bold shrink-0">✕</span>
                <p className="text-dim">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-lg text-dim leading-relaxed mb-12">
            <p>
              I każde działało. Tydzień. Miesiąc. A potem ten znajomy moment: wracasz do punktu wyjścia, z kolejną
              warstwą niespełnionych obietnic.
            </p>
          </div>

          <blockquote className="border-l-2 border-electric pl-6 py-2 mb-12">
            <p className="text-white text-xl md:text-2xl font-heading leading-relaxed">
              Diament nie potrzebuje kolejnej oprawki. On potrzebuje kogoś, kto powie: „Zmień tło — i spójrz."
            </p>
          </blockquote>

          <div className="p-6 md:p-8 bg-surface rounded-md">
            <p className="text-base md:text-lg text-dim italic leading-relaxed mb-3">
              „Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat."
            </p>
            <footer className="text-xs font-bold uppercase tracking-wide text-white">
              — Łukasz, IT, ADHD, sceptyk
            </footer>
          </div>
        </div>
      </section>

      {/* ═══ AUTHORITY SECTION ═══ */}
      <section className="py-24 relative overflow-hidden bg-void">
        {/* Background photo – pinned left */}
        <div className="absolute left-0 top-0 h-full pointer-events-none hidden lg:block">
          <OptimizedImage src={sessionPhoto6} alt="" className="h-full w-auto object-cover object-left opacity-30" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <Eyebrow color="electric">AUTORYTET</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-12">
            Mam świetne CV. Ale to nie ono przekonuje ludzi.
          </h2>

          <div className="text-dim text-lg space-y-6 max-w-3xl">
            <p>
              19 lat jako trener Microsoft. 10 000+ profesjonalistów. Fortune 500. NATO. Jednostki specjalne. 
              Psychologia na SWPS, a IT - na{" "}
              <a href="https://ox.ac.uk" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
                Oksfordzie
              </a>.
            </p>
            <p>Imponujące, prawda? Mnie też imponowało - przez jakieś piętnaście lat. A potem stanąłem na peronie metra Dworzec Gdański i jedyne, o czym myślałem, to jak łatwo byłoby zrobić jeden krok.</p>

            <blockquote className="border-l-2 border-electric pl-6 py-2 my-8">
              <p className="text-white italic text-xl leading-relaxed">
                „Miałem wszystko. Najpiękniejszy Diament w najdroższej oprawce. I kompletną pustkę w środku."
              </p>
            </blockquote>

            <p>
              Tamtego dnia zrozumiałem coś, co potem zmieniło życie setek ludzi:{" "}
              <strong className="text-white">certyfikaty mówią, co umiesz. Ale nie mówią, kim jesteś.</strong>
            </p>
            <p>I tego nie nauczysz się na żadnym szkoleniu. Tego uczysz się stojąc na peronie i decydując, że jednak zostaniesz.</p>
            <p>
              Od tamtego dnia doskonalę jedną umiejętność: zadawanie pytań, które pomagają ludziom zobaczyć to, co mieli w sobie od zawsze. Nie dlatego, że znam Twoje odpowiedzi. Dlatego, że wiem, jak zapytać Cię tak, żebyś sam je znalazł. (I tak - to wciąż trochę irytujące. Moi Klienci potwierdzą.)
            </p>
          </div>
        </div>
      </section>

      {/* Handwritten Testimonial */}
      <section className="bg-void">
        <img
          src={jakubGlowaczOpinia}
          alt="Ręcznie napisana opinia: Dzięku wielkie za to co robisz. Zmieniasz życie ludziom, którzy tego rzeczywiście potrzebują — Jakub Głowacz, :solute"
          className="w-full h-auto block"
          loading="lazy"
        />
      </section>

      {/* ═══ MECHANISM SECTION ═══ */}
      <section className="py-24 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Eyebrow>MECHANIZM</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-2">
            Diamentowy Umysł
          </h2>
          <p className="text-dim uppercase tracking-widest text-sm mb-16">NIE METAFORA — METODA</p>
        </div>

        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-dim text-lg space-y-6">
            <p>
              Większość metod pracuje na powierzchni: nawyki, czas, emocje. To szlifowanie Diamentu, który nie
              potrzebuje szlifu. Ja pracuję głębiej. Na poziomie jądra systemu.
            </p>
            <p>Nie daję Ci odpowiedzi. Nie prowadzę Cię przez 12 kroków. (Nie mam nawet 12 kroków. Mam pytania.)</p>
            <p>
              Zadaję Ci pytania. I buduję z Tobą metaforę, która jest <em>Twoja</em>. Metafora działa tam, gdzie logika
              się zatrzymuje. Logika mówi „powinieneś". Metafora mówi „aha — <em>widzę</em>". I w tym „aha" wszystko
              się zmienia.
            </p>
          </div>

          <div className="mt-12 p-6 md:p-8 bg-surface rounded-md">
            <p className="text-base md:text-lg text-dim italic leading-relaxed mb-3">
              „Poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają. Nie dlatego, że Ludwik jest lepszy.
              Dlatego, że zadaje inne pytania."
            </p>
            <footer className="text-xs font-bold uppercase tracking-wide text-white">
              — Artur, ojciec, programista, przedsiębiorca
            </footer>
          </div>

          <div className="mt-16 text-center">
            <p className="text-dim mb-4">
              Jeszcze nie wiesz, czy mój język do Ciebie trafia? Sprawdź bez ryzyka — jedna myśl w Twojej skrzynce,
              wtedy, kiedy naprawdę jest coś do powiedzenia.
            </p>
            <CTAButton variant="tertiary" href="/newsletter">
              DOŁĄCZ DO MAILINGU
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══ DWIE ŚCIEŻKI ═══ */}
      <section className="py-24 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl">
          <Eyebrow>DWIE ŚCIEŻKI</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-8">
            Dwie ścieżki. Jedna decyzja.
          </h2>
          <p className="text-lg text-dim leading-relaxed mb-16">
            Nie każdy potrzebuje tego samego. Jedni przychodzą z walką, drudzy z ciszą. Pracuję na dwa sposoby — i wiem, kiedy którego użyć.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-2"><Shield className="text-electric" size={22} aria-hidden="true" /> Ścieżka Wojownika</h3>
              <p className="text-sm text-accent italic">Dla tych, którzy wciąż walczą</p>
              <p className="text-dim leading-relaxed">
                Jesteś uwięziony w narracjach walki, sprawiedliwości, niewidzialnych wrogów. Masz wszystko - a czujesz, że to za mało. Sukno na Twoim diamencie ma kolor bitwy.
              </p>
              <p className="text-dim leading-relaxed">
                Pracujemy wglądami, konfrontacją, filozoficznym rozbijaniem schematów. Metafory z życia — Diamentu, żaglówki, jazdy po torze — żeby pokazać Ci, że to Ty trzymasz kierownicę. Czasem potrzebujesz kogoś, kto przetnie więzy — żebyś mógł wreszcie rozwinąć skrzydła.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 mt-6">
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  Anna przyszła z narracją ofiary i kontrolą, która zjadała jej weekendy. Po 8 tygodniach: „Pierwszy raz wierzę w możliwości, które mam — zamiast walczyć z tymi, których nie mam."
                </p>
              </blockquote>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-2"><Leaf className="text-electric" size={22} aria-hidden="true" /> Ścieżka Poszukiwacza</h3>
              <p className="text-sm text-accent italic">Dla tych, którzy osiągnęli szczyt i zobaczyli pustkę</p>
              <p className="text-dim leading-relaxed">
                Zbudowałeś sukces. Zarabiasz. Masz uznanie. A w środku — cisza, która woła. Tu nie chodzi o kolejny cel. Chodzi o przestanie gonienia. O zobaczenie Diamentu pod suknem sukcesu.
              </p>
              <p className="text-dim leading-relaxed">
                Praca delikatna, głęboka, oparta na uważności i akceptacji. O integrację tego, kim jesteś, z tym, jak żyjesz. O pozwolenie sobie na to, by być już tam, gdzie jesteś.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 mt-6">
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  Łucja była na wakacjach — ale mentalnie siedziała w biurze. Jedno zdanie wystarczyło: „Nic nie jest dla Ciebie zbyt dobre." I zrozumiała, że sukno, które na siebie nałożyła, miało nazwę „muszę zasłużyć".
                </p>
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white font-heading mb-4">Skąd wiem, czego potrzebujesz?</h4>
            <p className="text-dim leading-relaxed max-w-2xl mx-auto">
              Z 19 lat praktyki. I z tego, że sam przeszedłem obie drogi - najpierw walczyłem, potem szukałem. Większość ludzi potrzebuje obu, naprzemiennie. Na to jest sesja Discovery - żebyśmy razem ustalili, którędy idziemy.
            </p>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════╗
          ║     THE CUT - jedyny divider              ║
          ╚═══════════════════════════════════════════╝ */}
      <TheCut />

      {/* ╔═══════════════════════════════════════════╗
          ║       FAZA 2: THE CLARITY (jasna)         ║
          ╚═══════════════════════════════════════════╝ */}

      {/* ═══ OFFER SECTION ═══ */}
      <section className="bg-diamond py-24 md:py-32" id="oferta">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left column (7 cols) */}
            <div className="lg:col-span-7">
              <p className="text-on-light-dim text-xs font-bold tracking-[0.2em] uppercase mb-6">OFERTA #1</p>
              <h2 className="text-4xl md:text-6xl font-bold text-on-light font-heading leading-[1.1] tracking-[-0.02em] mb-4">
                Life OS:
                <br />
                <span className="text-electric">System Upgrade</span>
              </h2>
              <p className="text-on-light-dim uppercase tracking-widest text-sm mb-8">PRACA 1:1</p>

              <div className="space-y-6 text-lg text-on-light-dim leading-relaxed mb-10">
                <p>
                  Nie poprawiamy jednego koloru. Nie zmieniamy sukna na ładniejsze. Zdejmujesz <em>wszystkie</em>{" "}
                  warstwy. I po raz pierwszy widzisz, co jest pod nimi.
                </p>
                <p>
                  To praca ze mną. Nie z nagraniem, nie z chatbotem, nie z PDFem. Z człowiekiem, który zadaje pytanie,
                  o którym nie wiedziałeś, że potrzebujesz je usłyszeć.
                </p>
              </div>

              <ul className="diamond-bullet space-y-3 text-on-light-dim mb-10 list-none">
                <li>8 tygodni sesji 1:1</li>
                <li>Diagnostyka Life OS</li>
                <li>Dostęp VIP 24/7</li>
                <li>
                  <span className="font-bold text-depth inline-flex items-center gap-1.5">Dedykowany Workspace <img src={slackIcon} alt="Slack" className="inline h-5 w-5" /> Slack Verified <img src={slackVerifiedIcon} alt="Verified" className="inline h-5 w-5" /></span>
                </li>
                <li>Dostęp Lifetime do społeczności LIFEHACKERZY.pl</li>
              </ul>

              <p className="text-sm text-on-light-dim border-t border-border/50 pt-6 mb-4">
                Maksymalnie 5 osób jednocześnie. Nie dlatego, żeby brzmiało ekskluzywnie — dlatego, że nie da się
                prowadzić kogoś przez zobaczenie własnego Diamentu w grupie 50 osób.
              </p>
              <Link
                to="/program/lifeos-system-upgrade"
                className="text-sm font-bold text-electric hover:underline"
              >
                Pełny opis programu →
              </Link>
            </div>

            {/* Right column (5 cols) - sticky pricing card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-paper p-10 rounded-md shadow-sm relative">
                {/* Tag */}
                <div className="absolute top-0 right-0 bg-void text-white text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-bl-xl">
                  PREMIUM
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-depth mb-4">Pełen proces już od</p>
                <p className="text-5xl md:text-6xl font-heading font-bold text-electric tracking-tighter mb-8">
                  16 000 <span className="text-2xl text-on-light-dim font-sans font-normal">PLN</span>
                </p>

                <CTAButton variant="primary" href="/discovery" className="w-full mb-4">
                  ZAREZERWUJ SESJĘ DISCOVERY
                </CTAButton>

                <p className="text-xs text-on-light-dim text-center">Faktura VAT · Możliwość płatności 50/50</p>
              </div>
            </div>
          </div>

          {/* Three Life OS testimonials */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <TestimonialCard
              variant="light"
              quote="Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do prawdziwej wiary w możliwości, które mam."
              author="ANNA"
              label="CEO Agencji Marketingowej"
            />
            <TestimonialCard
              variant="light"
              quote="Wcześniej decyzja o zatrudnieniu kosztowała mnie 3 tygodnie snu. Teraz wiem w 20 minut."
              author="KLIENTKA LIFE OS"
            />
            <TestimonialCard
              variant="light"
              quote="Pierwszy raz od 14 lat spędziłem sobotę z rodziną i nie myślałem o firmie. I firma nie spłonęła."
              author="KLIENT LIFE OS"
            />
          </div>
        </div>
      </section>

      {/* ═══ DOWNSELL SEPARATOR ═══ */}
      <section className="py-20 bg-diamond text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-xs font-bold text-on-light-dim uppercase tracking-widest mb-4">JESZCZE NIE TERAZ?</h3>
          <p className="text-on-light-dim text-sm mb-8">
            Rozumiem. Czasem najpierw chcesz zobaczyć, jak pracuję. Wyczuć, czy ten język do Ciebie trafia. Dlatego
            stworzyłem programy, które możesz zainstalować samodzielnie - w swoim tempie, bez umawiania się na sesję.
          </p>
          <blockquote className="text-sm text-on-light-dim italic leading-relaxed max-w-xl mx-auto border-l-2 border-electric pl-4 text-left">
            „Zacząłem od Produktywności - bo wydawało mi się, że chodzi o czas. Po trzech miesiącach wiedziałem, że chodzi o coś innego. Teraz jestem w Life OS i po raz pierwszy rozumiem, po co właściwie wstaję rano."
            <footer className="text-xs font-bold uppercase tracking-wide mt-2 not-italic">- UCZESTNIK PROGRAMU → KLIENT LIFE OS</footer>
          </blockquote>
        </div>
      </section>

      {/* ═══ OFFER 2: APLIKACJE MENTALNE ═══ */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Eyebrow color="depth">OFERTA #2</Eyebrow>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-4">Aplikacje Mentalne</h2>
            <p className="text-on-light-dim max-w-2xl mx-auto">
              Programy, które instalujesz w swoim umyśle, aby rozwiązać konkretny problem - bez reinstalacji całego OS.
            </p>
          </div>

          {/* Featured card: Uważne Życie */}
          <Link
            to="/program/uwaznosc"
            className="group block col-span-3 bg-white rounded-md shadow-sm overflow-hidden mb-8"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <OptimizedImage src={programUwaznosc} alt="Uważność" className="w-full h-full object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-widest text-depth mb-2">NAJNOWSZY PROGRAM</p>
                <h3 className="font-heading font-bold text-3xl text-on-light mb-4">Uważne Życie</h3>
                <p className="text-on-light-dim mb-4">
                  Medytacja dla ludzi z ADHD i analitycznym umysłem. Nie walczysz z myślami — przejmujesz kontrolę nad
                  kokpitem.
                </p>
                <p className="text-xs text-on-light-dim mb-6">777 PLN · przedsprzedaż</p>
                <p className="text-sm font-bold uppercase tracking-widest text-on-light group-hover:text-electric transition-colors">
                  INSTALUJ PROGRAM →
                </p>
              </div>
            </div>
          </Link>

          {/* Vertical cards (3x) */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Produktywność",
                subtitle: "100+ osób · 4.9/5 · 1 497 PLN",
                desc: "Zamiast zarządzać zadaniami — zarządzasz energią. Jedyna aplikacja mentalna, po której nigdy więcej nie potrzebujesz kolejnego kursu produktywności.",
                img: programProduktywnosc,
                link: "/program/produktywnosc",
              },
              {
                title: "Silna Głowa",
                subtitle: "4.8/5 · 897 PLN",
                desc: "Firewall dla Twojego umysłu. Presja przestaje paraliżować — zaczyna skupiać. Krytyka przestaje ranić — zaczyna informować.",
                img: programOdpornosc,
                link: "/program/odpornosc",
              },
              {
                title: "Męski Kompas",
                subtitle: "",
                desc: "Reinstalacja systemu tożsamości dla mężczyzn 30+. Siła przestaje być maską — staje się przezroczystą obecnością. Jak Diament.",
                img: programMeskiKompas,
                link: "/program/meskosc",
              },
            ].map((card) => (
              <Link key={card.title} to={card.link} className="group bg-white rounded-md shadow-sm overflow-hidden">
                <div className="relative pt-[125%]">
                  <OptimizedImage src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-on-light group-hover:text-electric transition-colors mb-1">
                    {card.title}
                  </h3>
                  {card.subtitle && <p className="text-xs text-on-light-dim mb-2">{card.subtitle}</p>}
                  <p className="text-sm text-on-light-dim mb-4">{card.desc}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-light-dim group-hover:text-electric transition-colors">
                    INSTALUJ PROGRAM →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer link */}
          <div className="text-center">
            <Link
              to="/program"
              className="inline-block border border-border text-on-light-dim font-bold uppercase text-xs tracking-[0.2em] rounded px-8 py-4 hover:border-electric hover:text-electric transition-colors focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
            >
              PRZEGLĄDAJ WSZYSTKIE PROGRAMY
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ DLA TRENERÓW I EKSPERTÓW AI ═══ */}
      <section className="bg-diamond py-20 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Eyebrow color="depth">DLA TRENERÓW I EKSPERTÓW AI</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-light leading-[1.1] tracking-[-0.02em] mb-6">
            Szkolisz z AI? To osobna rozmowa.
          </h2>
          <p className="text-on-light-dim text-base md:text-lg leading-relaxed mb-4">
            Większość tej strony mówi o tym, co masz w sobie. Ta sekcja — o tym, ile warte jest to, co już umiesz.
          </p>
          <p className="text-on-light-dim text-base md:text-lg leading-relaxed mb-8">
            Train The Trainer: AI to 8 tygodni pracy 1:1 nad rzemiosłem, sceną i stawkami. Most z ligi „freelancera za
            kilkaset złotych" do „eksperta biorącego 5 000–10 000 zł za dzień warsztatowy".
          </p>
          <CTAButton variant="secondary" href="/program/ttt-ai">
            ZOBACZ PROGRAM
          </CTAButton>
        </div>
      </section>

      {/* ═══ NEWSLETTER CTA ═══ */}
      <TheCut />
      <section className="py-20 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">Wolisz najpierw poczytać?</h3>
          <div className="text-dim leading-relaxed mb-10 space-y-4">
            <p>
              Bez harmonogramu i bez kalendarza treści — piszę, kiedy mam myśl, która ma szansę zderzyć się z Twoją. Bez porad. Bez litości. Bez bzdur. Tylko Ty, ja i Twoja skrzynka mailowa.
            </p>
          </div>
          <CTAButton variant="secondary" onDark href="/newsletter">
            DOŁĄCZ DO NEWSLETTERA
          </CTAButton>
          <p className="text-xs text-dim mt-4">1500+ osób czyta. Zero spamu. Odejdziesz jednym kliknięciem.</p>
        </div>
      </section>

      <TheCut />

      {/* ═══ LICZBY ═══ */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-16">
            Ludwik C. Siadlak w liczbach
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "19", unit: "lat", label: "doświadczenia jako trener i mentor" },
              { value: "100+", unit: "", label: "absolwentów programu Produktywność" },
              { value: "4.9/5.0", unit: "", label: "średnia ocena programów" },
              { value: "8+", unit: "", label: "krajów, z których pochodzą uczestnicy" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-heading font-bold text-electric mb-1">
                  {stat.value}<span className="text-lg text-dim">{stat.unit && ` ${stat.unit}`}</span>
                </p>
                <p className="text-sm text-dim">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm text-dim">
            <div className="bg-surface p-6 rounded-md">
              <p className="text-white font-bold mb-2">Certyfikowany Trener Microsoft (MCT)</p>
              <p>SQL Server, Power BI, Microsoft Copilot. Szkolenia dla Fortune 500 i jednostek wojskowych NATO w kilkunastu krajach.</p>
            </div>
            <div className="bg-surface p-6 rounded-md">
              <p className="text-white font-bold mb-2">Dyplom IT — Oxford Brookes University</p>
              <p>Psychologia na SWPS. Założyciel Fundacji Hackerzy.pl, DeepWork.pl i UwazneZycie.pl.</p>
            </div>
            <div className="bg-surface p-6 rounded-md">
              <p className="text-white font-bold mb-2">Społeczność Lifehackerzy</p>
              <p>Codzienne spotkania o 12:34 na Discordzie. Dożywotni dostęp w cenie każdego programu. Uczestnicy z 8+ krajów.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl">
          <SEO jsonLd={[getFAQSchema(homepageFAQs)]} />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-6">
            {homepageFAQs.map((faq, i) => (
              <details key={i} className="group bg-surface rounded-md">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-electric transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-dim group-open:rotate-45 transition-transform text-2xl ml-4 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-dim leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ P.S. LADDER + CLOSING ═══ */}
      <section className="py-20 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <p className="text-dim leading-relaxed">
            <strong className="text-white">P.S.</strong> Jeśli dotarłeś do końca tej strony i wciąż nie wiesz, od czego zacząć — zacznij od newslettera. Nic nie kosztuje. Nic nie zobowiązuje. I zobaczysz, czy mój język do Ciebie trafia, zanim podejmiesz jakąkolwiek decyzję.
          </p>
          <p className="text-dim leading-relaxed">
            <strong className="text-white">P.P.S.</strong> Jeśli myślisz „brzmi dobrze, ale skąd mam wiedzieć, że to nie kolejny coach z ładnym CV" — to uczciwe pytanie. Odpowiedź: nie wiesz. Ale możesz sprawdzić. Sesja Discovery to 30 minut, w których zobaczysz, jak pracuję. Bez zobowiązań. Jeśli po 30 minutach pomyślisz „to jest dokładnie to, co próbuję powiedzieć każdemu i nikt nie rozumie" — to prawdopodobnie mamy o czym ze sobą rozmawiać.
          </p>
          <p className="text-dim leading-relaxed">
            <strong className="text-white">P.P.P.S.</strong> A jeśli to, co Cię powstrzymuje, to nie pieniądze, nie czas i nie zaufanie — tylko lęk, że spróbujesz i znowu nie zadziała — to jest najuczciwsze, co możesz poczuć. I dokładnie z tym pracuję. Bo ten lęk to nie jest słabość. To jest sukno. I da się je zdjąć.
          </p>
          <p className="text-white font-heading text-xl mt-12">— Ludwik</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
