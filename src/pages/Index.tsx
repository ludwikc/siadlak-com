import type { ReactNode } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { getSEOConfig } from "../lib/seo-config";
import { Link } from "react-router-dom";
import sessionPhoto6 from "@/assets/Ludwik C. Siadlak-sessionphotos6.webp";
import onPurple1 from "@/assets/Ludwik C. Siadlak-on-purple1.webp";
import sessionPhoto5 from "@/assets/Ludwik C. Siadlak-sessionphotos5.webp";
import programUwaznosc from "@/assets/LCS-program-Uwaznosc.png";
import programProduktywnosc from "@/assets/LCS-program-Produktywnosc.png";
import programOdpornosc from "@/assets/LCS-program-Odpornosc.png";
import programMeskiKompas from "@/assets/LCS-program-MeskiKompas.png";

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

const TestimonialHeroQuote = ({ quote, author }: { quote: ReactNode; author: string }) => (
  <section className="py-16 md:py-20 bg-void">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">{quote}</blockquote>
      <footer className="text-sm text-dim font-bold uppercase tracking-widest not-italic">— {author}</footer>
    </div>
  </section>
);

const Index = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("home")} />

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
                Znasz ten moment, kiedy masz wszystko &ndash; a&nbsp;czujesz, że&nbsp;czegoś brakuje?
              </h1>

              <div className="space-y-6 text-lg md:text-xl text-dim leading-relaxed max-w-2xl">
                <p>Masz kompetencje. Masz wyniki. I&nbsp;masz przeczucie, że&nbsp;to wciąż nie to.</p>
                <p>
                  Nie potrzebujesz kolejnego narzędzia. Potrzebujesz kogoś, kto pomoże Ci zobaczyć to, co masz w sobie
                  od zawsze.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12">
                <Link
                  to="/discovery"
                  className="inline-block border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded px-8 py-4 hover:border-electric hover:text-electric transition-colors focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
                >
                  PRACUJ ZE MNĄ 1:1 →
                </Link>
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
              <img
                src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                alt="Ludwik C. Siadlak"
                className="relative z-10 h-[85%] w-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL MARQUEE ═══ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: '#080808' }}>
        <div className="marquee-track flex gap-12 animate-marquee" style={{ width: "max-content" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-12 items-start" aria-hidden={copy === 1 ? "true" : undefined}>
              {[
                {
                  q: "Ludwik is the best instructor I have ever met. His knowledge and teaching skills made this course incredibly interesting.",
                  a: "Paweł Cerkaski",
                },
                {
                  q: "Excellent instructor. Extremely knowledgeable, articulate and personable. Best instructor I've had in many years.",
                  a: "Betty M. Greenberg",
                },
                {
                  q: "Bardzo fajny gość. Ma wiedzę ale przede wszystkim osobowość. Właściwa osoba na właściwym miejscu.",
                  a: "Adam Anioła",
                },
                { q: "Easy to understand, clear explanations and a nice teaching personality.", a: "Yasith Navoda" },
                { q: "Good pace and really good at explaining.", a: "Hilde Mykland Pihl" },
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

      {/* ═══ PERSPEKTYWA — METAFORA DIAMENTU ═══ */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl">
          <Eyebrow>PERSPEKTYWA</Eyebrow>

          <div className="space-y-6 text-lg md:text-xl text-dim leading-relaxed">
            <p className="text-white text-2xl md:text-3xl font-heading font-bold leading-[1.2]">
              Diament jest najtwardszą substancją na Ziemi. I&nbsp;jest kompletnie przezroczysty.
            </p>

            <p>
              Połóż go na czerwonym suknie — wygląda jak rubin. Na zielonym — jak szmaragd. Zmień sukno — zmieni się
              „kolor" diamentu.
            </p>

            <blockquote className="border-l-2 border-electric pl-6 py-2 text-white italic">
              Ale diament sam w sobie? Nie ma koloru. Jest czysty.
              <br />
              Twój umysł działa dokładnie tak samo.
            </blockquote>

            <p>Otaczasz się presją — nabiera koloru napięcia. Myślisz: „jestem zestresowany".</p>
            <p>Wchodzisz w sprint za kolejnym celem — nabiera koloru głodu. Myślisz: „nigdy nie mam dość".</p>

            <p>Ale to nie Ty się zmieniłeś.</p>
            <p className="text-white text-2xl font-bold">
              To <span className="text-electric font-bold">tło</span> się zmieniło.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM SECTION (Diagnoza) ═══ */}
      <section className="py-24 bg-void">
        <div className="container mx-auto px-4 max-w-4xl">
          <Eyebrow>DIAGNOZA</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-8">
            Diament nie potrzebuje kolejnej oprawki
          </h2>

          <div className="space-y-6 text-lg text-dim leading-relaxed mb-12">
            <p>Przez lata próbowałeś go zmienić. Nie wiedziałeś, że wystarczyło zmienić tło, na którym leży.</p>
            <p>Wiem, bo sam to robiłem. I&nbsp;widzę to u każdego, kto do mnie przychodzi.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Szlifowałeś go kursami: GTD, Todoist, Asana, "7 nawyków skutecznego wszystkiego".',
              "Polerowałeś terapeutami i coachami (kolejny, i jeszcze jeden, i może ten wreszcie...).",
              "Czyściłeś Headspace'em i Calmem — bo ktoś Ci powiedział, że problem jest w Twojej głowie.",
              'Kupowałeś nowe systemy i metody — bo stare "nie działały".',
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

          {/* Highlight box */}
          <div className="p-8 bg-void rounded-lg text-center">
            <p className="text-white text-xl md:text-2xl font-heading">
              Diament nie potrzebuje kolejnej oprawki.
              <br />
              On potrzebuje kogoś, kto powie:
              <br />
              <span className="text-electric font-bold text-3xl block mt-2">„Zmień tło &ndash; i spójrz."</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL HERO QUOTE #1 ═══ */}
      <TestimonialHeroQuote
        quote={
          <>
            „Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat."
          </>
        }
        author="ŁUKASZ — IT, ADHD, SCEPTYK"
      />

      {/* ═══ AUTHORITY SECTION ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080808' }}>
        {/* void-glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(109,40,217,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,122,255,0.15) 0%, transparent 50%)",
          }}
        />
        {/* Background photo – pinned left */}
        <div className="absolute left-0 top-0 h-full pointer-events-none hidden lg:block">
          <img src={sessionPhoto6} alt="" className="h-full w-auto object-cover object-left opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]" />
        </div>
        {/* Decorative blob */}
        <div className="absolute -right-64 top-1/4 w-[500px] h-[500px] bg-depth/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Eyebrow color="electric">AUTORYTET</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-12">
            Nie liczby. Przełom.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: paragraphs */}
            <div className="text-dim space-y-6">
              <p>
                Mógłbym Ci teraz wrzucić CV: 19 lat jako trener Microsoft. 10 000 profesjonalistów. Fortune 500. NATO.
                Jednostki specjalne. Psychologia i informatyka — Oxford.
              </p>
              <p>Mógłbym. Ale to nie to przekonuje ludzi.</p>
              <p>
                Przekonuje ich to, że wiem, jak to jest leżeć na wszystkich kolorach sukna naraz — i myśleć, że to Ty
                masz niewłaściwy kolor.
              </p>
            </div>

            {/* Right: blockquote card */}
            <div className="bg-surface p-8 border-l-4 border-depth">
              <blockquote className="text-white italic text-lg leading-relaxed">
                „W 2014 roku stałem na peronie metra Dworzek Gdański i chciałem zrobić krok. Miałem wszystko.
                Najpiękniejszy diament w najdroższej oprawce, na jedwabnym suknie. I kompletną pustkę w środku."
              </blockquote>
            </div>
          </div>

          {/* Below grid */}
          <div className="mt-12 text-dim text-lg space-y-6">
            <p>
              Tamtego dnia zrozumiałem coś, co potem zmieniło życie setek ludzi:{" "}
              <strong className="text-white">żeby zmienić grę, musiałem zobaczyć, że nie jestem graczem.</strong>
            </p>
            <p className="text-white text-center text-xl font-medium">Jestem tym, kto patrzy.</p>
            <p>
              Od 19 lat doskonalę tę umiejętność: zadawanie pytań, które pomagają ludziom zobaczyć to, co mieli w sobie
              od zawsze. Nie dlatego, że znam Twoje odpowiedzi. Dlatego, że wiem, jak zapytać Cię tak, żebyś sam je
              znalazł.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS GRID 3 COL ═══ */}
      <section className="py-16 bg-gradient-to-b from-void to-void-glow">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              variant="dark"
              flag="🇬🇧"
              quote="Great instructor! Would easily recommend Ludwik to anyone wanting to learn Transact-SQL, or any other Microsoft product for that matter, as he's energetic, knowledgeable, competent and great at teaching. 10/10."
              author="Uczestnik szkolenia w Londynie"
            />
            <TestimonialCard
              variant="dark"
              flag="🇳🇴"
              quote="Ludwik was very professional, polite, to the point and also funny. Easy to talk to and could answer any question regarding any subject of SQL Server. I would highly recommend him."
              author="Johnny, Norwegia"
            />
            <TestimonialCard
              variant="dark"
              flag="🇵🇱"
              quote="Brak uwag. Bardzo dobry kontakt, sposób przekazywania informacji, kultura osobista."
              author="Uczestnik szkolenia w Warszawie"
            />
          </div>
        </div>
      </section>

      {/* ═══ MECHANISM SECTION ═══ */}
      <section className="py-24 bg-void">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <Eyebrow>MECHANIZM</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading leading-[1.1] tracking-[-0.02em] mb-2">
            Diamentowy Umysł
          </h2>
          <p className="text-dim uppercase tracking-widest text-sm mb-16">NIE METAFORA — METODA</p>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: explanation */}
            <div className="text-dim text-lg space-y-6">
              <p>
                Większość metod pracuje na powierzchni: nawyki, czas, emocje. To szlifowanie diamentu, który nie
                potrzebuje szlifu. Ja pracuję głębiej. Na poziomie jądra systemu.
              </p>
              <p>Nie daję Ci odpowiedzi. Nie prowadzę Cię przez 12 kroków. (Nie mam nawet 12 kroków. Mam pytania.)</p>
              <p>
                Zadaję Ci pytania. I buduję z Tobą metaforę, która jest <em>Twoja</em>.
              </p>
              <div className="border-l-2 border-electric pl-4 text-white font-medium">
                Metafora działa tam, gdzie logika się zatrzymuje. Logika mówi „powinieneś". Metafora mówi „aha — widzę".
                I w tym „aha" wszystko się zmienia.
              </div>
            </div>

            {/* Right: Case Study card */}
            <div className="bg-void p-10 rounded-md">
              <p className="text-electric text-sm uppercase tracking-widest font-bold mb-4">CASE STUDY: ŁUKASZ</p>
              <blockquote className="italic text-white text-xl leading-relaxed mb-6">
                „Jestem w szoku. Mam totalną pustkę w głowie. Jak rzadko. Nie do końca wiem, co się wydarzyło... I chcę
                więcej."
              </blockquote>
              <div className="border-t border-white/10 pt-4">
                <p className="text-dim">
                  Nie uczył się medytacji. Rozmawialiśmy o samochodach. A on zobaczył swój diament.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL HERO QUOTE #2 ═══ */}
      <TestimonialHeroQuote
        quote={
          '„Poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają. Nie dlatego, że Ludwik jest lepszy. Dlatego, że zadaje inne pytania."'
        }
        author="ARTUR — OJCIEC, PROGRAMISTA, PRZEDSIĘBIORCA"
      />

      {/* ╔═══════════════════════════════════════════╗
          ║     THE CUT — jedyny divider              ║
          ╚═══════════════════════════════════════════╝ */}
      <TheCut />

      {/* ╔═══════════════════════════════════════════╗
          ║       FAZA 2: THE CLARITY (jasna)         ║
          ╚═══════════════════════════════════════════╝ */}

      {/* ═══ OFFER SECTION ═══ */}
      <section className="bg-diamond py-24 md:py-32" id="oferta">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left column (7 cols) */}
            <div className="lg:col-span-7">
              <p className="text-on-light-dim text-xs font-bold tracking-[0.2em] uppercase mb-6">OFERTA #1</p>
              <h2 className="text-4xl md:text-6xl font-bold text-on-light font-heading leading-[1.1] tracking-[-0.02em] mb-8">
                Life OS:
                <br />
                <span className="text-electric">System Upgrade</span>
              </h2>

              <div className="space-y-6 text-lg text-on-light-dim leading-relaxed mb-10">
                <p>
                  Nie poprawiamy jednego koloru. Nie zmieniamy sukna na ładniejsze. Zdejmujesz <em>wszystkie</em>{" "}
                  warstwy. I po raz pierwszy widzisz, co jest pod nimi.
                </p>
                <p>
                  To praca 1:1. Ze mną. Nie z nagraniem, nie z chatbotem, nie z PDFem „7 kroków do lepszego życia". Z
                  człowiekiem, który zadaje pytanie, o którym nie wiedziałeś, że potrzebujesz je usłyszeć.
                </p>
              </div>

              <ul className="diamond-bullet space-y-3 text-on-light-dim mb-10 list-none">
                <li>8 tygodni sesji 1:1</li>
                <li>Diagnostyka Life OS</li>
                <li>Dostęp VIP 24/7</li>
                <li>
                  <span className="font-bold text-depth">Gwarancja zwrotu po 2 tyg.</span>
                </li>
              </ul>

              <p className="text-sm text-on-light-dim border-t border-border/50 pt-6">
                Nie da się prowadzić kogoś przez zobaczenie własnego diamentu w grupie 50 osób. Nie da się tego zrobić
                na webinarze. Taka jest natura tej pracy.
              </p>
            </div>

            {/* Right column (5 cols) — sticky pricing card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-paper p-10 rounded-md shadow-sm relative">
                {/* Tag */}
                <div className="absolute top-0 right-0 bg-void text-white text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-bl-xl">
                  PREMIUM
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-depth mb-4">Pełen Proces</p>
                <p className="text-5xl md:text-6xl font-heading font-bold text-electric tracking-tighter mb-8">
                  16 000 <span className="text-2xl text-on-light-dim font-sans font-normal">PLN</span>
                </p>

                <Link
                  to="/discovery"
                  className="block w-full py-5 bg-brand-gradient text-white text-center font-bold uppercase tracking-widest text-sm rounded shadow-sm hover:opacity-90 transition-opacity mb-4 focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
                >
                  APLIKUJ O MIEJSCE
                </Link>

                <p className="text-xs text-on-light-dim text-center">Dostępne: 3/5 miejsc · Faktura VAT</p>
              </div>
            </div>
          </div>

          {/* Testimonials dual */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <TestimonialCard
              variant="light"
              quote="Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do prawdziwej wiary w możliwości, które mam."
              author="ANNA"
              label="CEO Agencji Marketingowej"
            />
            <TestimonialCard
              variant="light"
              quote="I am impressed of all the clear examples that he made during the course! He is the absolute best instructor I have ever had!!"
              author="Uczestnik szkolenia w Bergen"
              label="Norwegia 🇳🇴"
            />
          </div>
        </div>
      </section>

      {/* ═══ PROOF SECTION ═══ */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <h3 className="font-heading text-3xl font-bold text-on-light mb-16 text-center">
            Głosy tych, którzy zdjęli sukno
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TestimonialCard
              variant="light"
              quote="Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat."
              author="ŁUKASZ"
              label="IT, ADHD, sceptyk"
            />
            <TestimonialCard
              variant="light"
              quote="Poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają. Dlatego, że zadaje inne pytania."
              author="ARTUR"
              label="Ojciec, przedsiębiorca"
            />
            <TestimonialCard
              variant="light"
              quote="Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do prawdziwej wiary w możliwości, które mam."
              author="ANNA"
              label="CEO"
            />
            <TestimonialCard
              variant="light"
              quote="Niby byłam na wakacjach, ale mentalnie byłam w biurze. Ludwik powiedział: 'Nic nie jest dla Ciebie zbyt dobre.' I uwierzyłam."
              author="ŁUCJA"
              label="Founder RefSpace"
            />
          </div>
        </div>
      </section>

      {/* ═══ QUALIFICATION + GUARANTEE ═══ */}
      <section className="bg-diamond py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Qualification Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <p className="font-bold text-xs uppercase tracking-widest border-b border-border/50 pb-4 mb-6 text-on-light-dim">
                TO NIE DLA CIEBIE, JEŚLI:
              </p>
              <ul className="space-y-4 text-on-light-dim">
                {[
                  "Szukasz kolejnego systemu produktywności (mam na to osobny program — patrz niżej)",
                  "Potrzebujesz kogoś, kto powie Ci, że wszystko jest okej",
                  "Chcesz gotową receptę z pudełka",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-destructive font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-widest border-b border-border/50 pb-4 mb-6 text-electric">
                TO JEST DLA CIEBIE, JEŚLI:
              </p>
              <ul className="space-y-4 text-on-light font-medium">
                {[
                  "Osiągnąłeś sukces, który nie smakuje tak, jak miał smakować",
                  "Testowałeś narzędzia i wiesz, że problem leży głębiej",
                  "Jesteś gotów na rozmowę bez klepania po plecach",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-electric font-bold shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="bg-white p-10 rounded-md text-center shadow-sm max-w-3xl mx-auto mb-12">
            <p className="text-electric text-2xl mb-4">★</p>
            <h3 className="font-heading text-2xl font-bold text-on-light mb-6">Gwarancja Satysfakcji</h3>
            <div className="text-on-light-dim leading-relaxed space-y-4">
              <p>
                Jeśli po pierwszych 2 tygodniach nie poczujesz, że ta rozmowa jest fundamentalnie inna niż cokolwiek, co
                próbowałeś do tej pory — powiemy sobie „do widzenia". Nie zapłacisz ani złotówki więcej.
              </p>
              <p>
                Mogę to zaoferować, bo dostarczam momenty, w których mówisz:
                <br />
                <em className="text-on-light font-medium">„Nie wiem, co się wydarzyło."</em>
              </p>
            </div>
          </div>

          {/* Helge honest review */}
          <div className="max-w-3xl mx-auto bg-diamond rounded-lg p-8">
            <p className="text-sm text-on-light-dim italic leading-relaxed mb-6">
              „His knowledge and ability to teach is outstanding, but he talks a bit too much and could be showing more
              practical examples of tool usage a bit slower."
            </p>
            <p className="text-xs text-on-light-dim font-bold uppercase tracking-wide mb-4">
              — Helge Vestoyl, Norwegia 🇳🇴
            </p>
            <div className="border-t border-border/50 mt-6 pt-6">
              <p className="text-sm text-on-light-dim">
                Helge ma rację. Dużo mówię. Ale kiedy pytam — milknę. I to w tej ciszy dzieją się rzeczy. —{" "}
                <span className="font-medium text-on-light">Ludwik</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCARCITY CTA ═══ */}
      <section className="py-24 relative overflow-hidden bg-diamond" id="kontakt">
        {/* Background photo – pinned right */}
        <div className="absolute right-0 top-0 h-full pointer-events-none hidden lg:block">
          <img src={sessionPhoto5} alt="" className="h-full w-auto object-cover object-right" />
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-diamond to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-left relative z-10">
          <h2 className="font-heading text-4xl font-bold text-on-light mb-8">Tylko 5 miejsc jednocześnie.</h2>
          <p className="text-on-light-dim max-w-2xl mb-8">
            Nie da się prowadzić kogoś przez zobaczenie własnego diamentu w grupie 50 osób. Nie da się tego zrobić na
            webinarze. Taka jest natura tej pracy.
          </p>

          {/* Status badge */}
          <div className="inline-block bg-diamond px-6 py-3 rounded-full text-xs font-bold text-electric mb-12">
            STATUS: Ostatnie wolne miejsca
          </div>

          {/* Łucja quote */}
          <div className="py-16 max-w-2xl">
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-on-light italic leading-relaxed mb-6">
              „Pracowałam na wakacjach w mentalnym garniturze. Ludwik powiedział: 'Nic nie jest dla Ciebie zbyt dobre.'
              I uwierzyłam."
            </blockquote>
            <footer className="text-sm uppercase tracking-widest text-on-light-dim">— ŁUCJA — FOUNDER REFSPACE</footer>
          </div>

          {/* CTA Card */}
          <div className="bg-white p-10 rounded-md shadow-sm max-w-lg text-center">
            <Link
              to="/discovery"
              className="block w-full py-5 bg-brand-gradient text-white font-bold uppercase tracking-widest text-sm rounded shadow-sm hover:opacity-90 transition-opacity mb-4 focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
            >
              ZAREZERWUJ BEZPŁATNĄ ROZMOWĘ
            </Link>
            <p className="text-xs text-on-light-dim uppercase tracking-wider">
              30 MINUT · BEZ SPRZEDAŻY · BEZ OBIETNIC
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DOWNSELL SEPARATOR ═══ */}
      <section className="py-16 bg-diamond text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-xs font-bold text-on-light-dim uppercase tracking-widest mb-4">JESZCZE NIE TERAZ?</h3>
          <p className="text-on-light-dim text-sm">
            Rozumiem. Czasem najpierw chcesz zobaczyć, jak pracuję. Wyczuć, czy ten język do Ciebie trafia. Dlatego
            stworzyłem programy, które możesz zainstalować samodzielnie — w swoim tempie, bez umawiania się na sesję.
          </p>
        </div>
      </section>

      {/* ═══ OFFER 2: APLIKACJE MENTALNE ═══ */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Eyebrow color="depth">OFERTA #2</Eyebrow>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-4">Aplikacje Mentalne</h2>
            <p className="text-on-light-dim max-w-2xl mx-auto">
              Programy, które instalujesz w swoim umyśle, aby rozwiązać konkretny problem — bez reinstalacji całego OS.
            </p>
          </div>

          {/* Featured card: Uważne Życie */}
          <Link
            to="/program/uwaznosc"
            className="group block col-span-3 bg-white rounded-md shadow-sm overflow-hidden mb-8"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img src={programUwaznosc} alt="Uważność" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-widest text-depth mb-2">PROGRAM FLAGOWY</p>
                <h3 className="font-heading font-bold text-3xl text-on-light mb-4">Uważne Życie</h3>
                <p className="text-on-light-dim mb-6">
                  Medytacja dla ludzi z ADHD i analitycznym umysłem. Nie walczysz z myślami — przejmujesz kontrolę nad
                  kokpitem.
                </p>
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
                subtitle: "",
                desc: "Zamiast zarządzać zadaniami — zarządzasz energią. Jedyna aplikacja mentalna, po której nigdy więcej nie potrzebujesz kolejnego kursu produktywności.",
                img: programProduktywnosc,
                link: "/program/produktywnosc",
              },
              {
                title: "Silna Głowa",
                subtitle: "",
                desc: "Firewall dla Twojego umysłu. Presja przestaje paraliżować — zaczyna skupiać. Krytyka przestaje ranić — zaczyna informować.",
                img: programOdpornosc,
                link: "/program/odpornosc",
              },
              {
                title: "Męski Kompas",
                subtitle: "",
                desc: "Reinstalacja systemu tożsamości. Siła przestaje być maską — staje się przezroczystą obecnością. Jak diament.",
                img: programMeskiKompas,
                link: "/program/meskosc",
              },
            ].map((card) => (
              <Link key={card.title} to={card.link} className="group bg-white rounded-md shadow-sm overflow-hidden">
                <div className="relative pt-[125%]">
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
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

          {/* Testimonials strip 4col */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <TestimonialCard
              variant="light"
              size="sm"
              flag="🇳🇴"
              quote="Easy to understand, clear explanations and a nice teaching personality."
              author="Yasith Navoda"
            />
            <TestimonialCard
              variant="light"
              size="sm"
              flag="🇳🇴"
              quote="Good pace and really good at explaining."
              author="Hilde Mykland Pihl"
            />
            <TestimonialCard
              variant="light"
              size="sm"
              flag="🇵🇱"
              quote="Trener super. Ma bardzo dobre czytelne przykłady. Świetny gość."
              author="Uczestnik, Warszawa"
            />
            <TestimonialCard
              variant="light"
              size="sm"
              flag="🇳🇴"
              quote="Very energic and knowledgeable teacher. Fun guy as well."
              author="Uczestnik, Oslo"
            />
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

      {/* ═══ NEWSLETTER CTA ═══ */}
      <TheCut />
      <section className="py-20 bg-void-glow">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">Wolisz najpierw poczytać?</h3>
          <p className="text-dim leading-relaxed mb-10">
            Raz w tygodniu piszę do ludzi, którzy szukają głębi — nie kolejnych trików. Bez algorytmów, bez lajków, bez
            komentarzy. Tylko Ty, ja i Twoja skrzynka mailowa.
          </p>
          <Link
            to="/newsletter"
            className="inline-block border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded px-8 py-4 hover:border-electric hover:text-electric transition-colors focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
          >
            DOŁĄCZ DO NEWSLETTERA →
          </Link>
        </div>
      </section>

      {/* ═══ CLOSING FOOTER ═══ */}
      <section className="py-20 relative overflow-hidden bg-void-glow">
        {/* Background photo – pinned left */}
        <div className="absolute left-0 top-0 h-full pointer-events-none hidden lg:block">
          <img src={onPurple1} alt="" className="h-full w-auto object-cover object-left" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="font-heading text-2xl font-bold text-white mb-2">Diamentowy umysł.</h2>
          <p className="text-dim uppercase tracking-widest text-xs mb-8">OTWARTA PRZYŁBICA.</p>

          {/* Divider */}
          <div className="w-12 h-1 bg-brand-gradient mx-auto rounded-full mb-8" />

          <p className="font-heading text-xl text-white tracking-wide mb-8">Ludwik C. Siadlak</p>

          <div className="flex justify-center gap-8">
            <Link
              to="/about"
              className="text-xs text-dim uppercase tracking-wider hover:text-electric transition-colors"
            >
              O mnie
            </Link>
            <Link
              to="/program"
              className="text-xs text-dim uppercase tracking-wider hover:text-electric transition-colors"
            >
              Programy
            </Link>
            <Link
              to="/contact"
              className="text-xs text-dim uppercase tracking-wider hover:text-electric transition-colors"
            >
              Kontakt
            </Link>
          </div>

          <p className="text-xs text-dim mt-12">
            © {new Date().getFullYear()} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
