import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getWebPageEntity, getOrganizationEntity } from "@/lib/structured-data";
import programProduktywnosc from "@/assets/LCS-program-Produktywnosc.png";
import programOdpornosc from "@/assets/LCS-program-Odpornosc.png";
import programUwaznosc from "@/assets/LCS-program-Uwaznosc.png";
import programMeskiKompas from "@/assets/LCS-program-MeskiKompas.png";

const TheCut = () => <div className="the-cut" />;

const Eyebrow = ({ children, color = "electric" }: { children: string; color?: "electric" | "depth" | "dim" }) => {
  const colorClass = color === "electric" ? "text-electric" : color === "depth" ? "text-depth" : "text-on-light-dim";
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${colorClass}`}>{children}</p>;
};

const freeItems = [
  {
    emoji: "📬",
    title: "Lista Mailingowa",
    headline: "Jedna myśl, która ma szansę zderzyć się z Twoją.",
    desc: "Jedyne miejsce, gdzie algorytm nie decyduje, czy to zobaczysz. Piszę o produktywności, AI, sensie życia - i o tym, co widzę z okna hotelowego pokoju w Norwegii. 150+ osób czyta. Zero spam.",
    cta: "Dołącz do Listy Mailingowej →",
    to: "/newsletter",
    external: false,
  },
  {
    emoji: "🧘",
    title: "Uważne Życie - Medytacje",
    headline: "Medytacja dla ludzi, którzy nie potrafią medytować.",
    desc: 'Bezpłatne prowadzone medytacje. Nie musisz siedzieć w lotosie. Nie musisz \u201Ewyciszyć umysłu\u201D. Wystarczy, że naciśniesz play.',
    cta: "Zacznij medytować →",
    to: "https://uwaznezycie.pl",
    external: true,
  },
  {
    emoji: "🖥️",
    title: "DeepWork.pl",
    headline: "Pracuj głęboko. Razem z innymi. Za darmo.",
    desc: "Wirtualna przestrzeń do pracy w skupieniu. Włączasz kamerę, wyłączasz rozpraszacze, pracujesz. Proste jak drut - i działa lepiej niż kolejna apka do blokowania stron.",
    cta: "Dołącz do sesji →",
    to: "https://deepwork.pl",
    external: true,
  },
];

const programs = [
  {
    img: programProduktywnosc,
    title: "Instaluj: Produktywność",
    emoji: "🧠",
    desc: "Zamiast zarządzać zadaniami - zarządzasz energią. Jedyna aplikacja mentalna, po której nigdy więcej nie potrzebujesz kolejnego kursu produktywności.",
    price: "1 497 PLN · 1 240+ osób zainstalowało",
    to: "/program/produktywnosc",
  },
  {
    img: programOdpornosc,
    title: "Instaluj: Silna Głowa",
    emoji: "🛡️",
    desc: "Firewall dla Twojego umysłu. Presja przestaje paraliżować - zaczyna skupiać. Krytyka przestaje ranić - zaczyna informować.",
    price: "897 PLN",
    to: "/program/odpornosc",
  },
  {
    img: programUwaznosc,
    title: "Instaluj: Uważne Życie",
    emoji: "🧘",
    desc: "Medytacja dla ludzi z ADHD i analitycznym umysłem. Nie walczysz z myślami - przejmujesz kontrolę nad kokpitem.",
    price: "777 PLN · przedsprzedaż",
    to: "/program/uwaznosc",
  },
  {
    img: programMeskiKompas,
    title: "Instaluj: Męski Kompas",
    emoji: "🧭",
    desc: "Reinstalacja systemu tożsamości. Siła przestaje być maską - staje się przezroczystą obecnością. Jak diament.",
    price: "Lista oczekujących",
    to: "/program/meskosc",
  },
];

export default function Wspolpraca() {
  const seo = getSEOConfig("/start");

  return (
    <Layout>
      <SEO {...seo} jsonLd={[
        getOrganizationEntity(),
        getWebPageEntity('/start', 'Wspolpraca - Ludwik C. Siadlak', 'Wszystkie mozliwosci wspolpracy z Ludwikiem C. Siadlakiem.', ['/program', '/discovery', '/newsletter']),
      ]} />
      {(() => { const t = getTopicalConfig("/start"); return t ? <TopicalMeta {...t} /> : null; })()}

      {/* ─── HERO ─── */}
      <section className="bg-void-glow py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
            Wszystko w jednym miejscu.
          </h1>
          <p className="text-dim text-base md:text-lg leading-relaxed mb-4">
            Nie lubię, kiedy muszę przekopywać czyjąś stronę, żeby zrozumieć, co oferuje. Ty pewnie też nie. Więc oto wszystko, co robię - uporządkowane, uczciwe i bez ukrytych drzwi.
          </p>
          <p className="text-dim text-base md:text-lg leading-relaxed">
            Zacznij tam, gdzie czujesz, że jest sens. Nie ma złej kolejności.
          </p>
        </div>
      </section>

      <TheCut />

      {/* ─── BEZPŁATNIE ─── */}
      <section className="bg-diamond py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Eyebrow color="dim">BEZPŁATNIE</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-light leading-[1.1] tracking-[-0.02em] mb-8">
            Zacznijmy lekko: bezpłatne projekty dostępne dla wszystkich
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freeItems.map((item) => (
              <div key={item.title} className="bg-white border border-black/5 rounded-md p-6 flex flex-col">
                <span className="text-2xl mb-3" aria-hidden="true">{item.emoji}</span>
                <h3 className="font-heading font-bold text-on-light text-lg mb-2">{item.title}</h3>
                <p className="font-bold text-on-light text-sm mb-3">{item.headline}</p>
                <p className="text-on-light-dim text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                {item.external ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric text-sm font-bold hover:underline"
                  >
                    {item.cta}
                  </a>
                ) : (
                  <Link to={item.to} className="text-electric text-sm font-bold hover:underline">
                    {item.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── PROGRAMY ─── */}
      <section className="bg-void-glow py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Eyebrow>PROGRAMY</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-3">
            Aplikacje Mentalne
          </h2>
          <p className="text-dim text-base leading-relaxed mb-10 max-w-2xl">
            Kompaktowe programy (4-6 tygodni), które instalujesz w swoim umyśle, żeby rozwiązać konkretny problem - bez reinstalacji całego systemu operacyjnego.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {programs.map((prog) => (
              <Link
                key={prog.to}
                to={prog.to}
                className="group bg-surface border border-white/10 rounded-md p-6 flex gap-5 hover:border-electric/40 transition-colors"
              >
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-electric transition-colors">
                    <span aria-hidden="true">{prog.emoji}</span> {prog.title}
                  </h3>
                  <p className="text-dim text-sm leading-relaxed mb-3">{prog.desc}</p>
                  <p className="text-electric text-xs font-bold uppercase tracking-wider">{prog.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
            <Link to="/program" className="text-electric font-bold hover:underline">
              Wszystkie programy w jednym miejscu →
            </Link>
            <span className="text-dim">
              Po zainstalowaniu dowolnego programu dostajesz dostęp do{" "}
              <a href="https://lifehackerzy.pl" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
                Lifehackerów
              </a>{" "}
              - bezpłatnej społeczności na Discordzie.
            </span>
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── PREMIUM ─── */}
      <section className="bg-void-glow py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow color="depth">PREMIUM</Eyebrow>
          <p className="text-dim text-sm mb-6">
            Dwa 8-tygodniowe programy mentoringowe 1:1. Wybierz, w którym miejscu uderzasz głową w sufit.
          </p>

          <div className="space-y-6">
            {/* Life OS */}
            <div className="border-2 border-electric/40 rounded-md p-6 sm:p-8 md:p-12 bg-surface">
              <span className="text-3xl mb-4 block" aria-hidden="true">⚡</span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-2 break-words">
                Life OS: System Upgrade — Mentoring 1:1
              </h2>
              <p className="text-electric text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
                8 tygodni · Maksymalnie 5 osób · Cały nowy system operacyjny
              </p>
              <p className="text-dim text-base leading-relaxed mb-4">
                Nie kolejna aplikacja mentalna - pełna praca nad fundamentami. Dla tych, którzy przeglądali programy i czuli, że żaden nie trafia w sedno. Bo problem leży głębiej, na poziomie tego, kim jesteś, a nie tego, co robisz.
              </p>
              <p className="text-dim text-base leading-relaxed mb-8">
                Zaczynamy od Sesji Discovery - 30 minut na Zoom, żebyśmy obaj wiedzieli, czy mamy ze sobą pracować.
              </p>
              <p className="text-white font-bold text-lg mb-8">
                16 000 PLN · Faktura VAT · Gwarancja transformacji
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/discovery"
                  className="inline-block text-center bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
                >
                  Sprawdź dostępność - Sesja Discovery →
                </Link>
                <Link
                  to="/program/lifeos-system-upgrade"
                  className="inline-block text-center border border-white/20 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 transition-colors"
                >
                  Pełny opis programu →
                </Link>
              </div>
            </div>

            {/* Train The Trainer: AI */}
            <div className="border-2 border-electric/40 rounded-md p-6 sm:p-8 md:p-12 bg-surface">
              <span className="text-3xl mb-4 block" aria-hidden="true">🎤</span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-2 break-words">
                Train The Trainer: AI — Mentoring 1:1
              </h2>
              <p className="text-electric text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
                8 tygodni · Maksymalnie 4 miejsca / kwartał · Rynek, dźwignia, rzemiosło
              </p>
              <p className="text-dim text-base leading-relaxed mb-4">
                Dla ekspertów AI, którzy zbudowali potęgę na laptopie — i są gotowi w końcu dostawać za nią stawki, które są warci. Most z ligi „freelancera za kilkaset złotych” do „eksperta biorącego 5 000 – 10 000 zł za dzień warsztatowy”.
              </p>
              <p className="text-dim text-base leading-relaxed mb-8">
                Prowadzi Microsoft Certified Trainer z 20-letnim doświadczeniem (US Army, US Navy, Fortune 500). Zaczynamy od rozmowy kwalifikacyjnej.
              </p>
              <p className="text-white font-bold text-lg mb-8">
                Edycja inauguracyjna 7 999 zł netto · Regularna 24 999 zł netto · Faktura VAT
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/discovery"
                  className="inline-block text-center bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
                >
                  Sprawdź dostępność - Sesja Discovery →
                </Link>
                <Link
                  to="/program/ttt-ai"
                  className="inline-block text-center border border-white/20 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 transition-colors"
                >
                  Pełny opis programu →
                </Link>
              </div>
            </div>
          </div>

          <p className="text-dim text-sm mt-6 text-center">
            Nie wiesz, który wybrać?{" "}
            <Link to="/mentoring" className="text-electric font-bold hover:underline">
              Porównaj oba programy →
            </Link>
          </p>
        </div>
      </section>

      <TheCut />

      {/* ─── NIE WIESZ OD CZEGO ZACZĄĆ? ─── */}
      <section className="bg-diamond py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow color="dim">NAWIGACJA</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-light leading-[1.1] tracking-[-0.02em] mb-8">
            Nie wiesz, od czego zacząć?
          </h2>
          <p className="text-on-light-dim text-base leading-relaxed mb-8">
            To normalne. Oto moja sugestia:
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-on-light text-base leading-relaxed">
                <strong>Jeśli dopiero mnie poznałeś</strong> - zacznij od{" "}
                <Link to="/newsletter" className="text-electric font-bold hover:underline">newslettera</Link>.
                Zobaczysz, czy mój język do Ciebie trafia. Nic nie kosztuje, nic nie zobowiązuje.
              </p>
            </div>
            <div>
              <p className="text-on-light text-base leading-relaxed">
                <strong>Jeśli masz konkretny problem</strong> (produktywność, odporność, uważność) - wybierz{" "}
                <Link to="/program" className="text-electric font-bold hover:underline">program</Link>,
                który go adresuje. 4-6 tygodni, samodzielnie, w swoim tempie.
              </p>
            </div>
            <div>
              <p className="text-on-light text-base leading-relaxed">
                <strong>Jeśli wiesz, że problem leży głębiej</strong> - i żaden program go nie dotknie - to jest{" "}
                <Link to="/program/lifeos-system-upgrade" className="text-electric font-bold hover:underline">Life OS</Link>.
                Ale najpierw{" "}
                <Link to="/discovery" className="text-electric font-bold hover:underline">Sesja Discovery</Link>.
              </p>
            </div>
            <div>
              <p className="text-on-light text-base leading-relaxed">
                <strong>Jeśli chcesz po prostu pogadać</strong> -{" "}
                <Link to="/contact" className="text-electric font-bold hover:underline">napisz do mnie</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── KONTAKT ─── */}
      <section className="bg-void-glow py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>KONTAKT</Eyebrow>
          <p className="text-dim text-base leading-relaxed mb-6">
            Masz pytanie, propozycję współpracy, albo chcesz powiedzieć, że ta strona jest za długa? Pisz.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
          >
            Skontaktuj się →
          </Link>
        </div>
      </section>

      {/* ─── P.S. ─── */}
      <section className="bg-void-glow pb-20 pt-4">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-dim text-sm leading-relaxed italic">
            <strong className="text-white not-italic">P.S.</strong> Jeśli ktoś Cię tu wysłał z poleceniem „sprawdź tego gościa" - to miłe. Ale nie wierz mi na słowo. Przeczytaj kilka niedzielnych newsletterów i zdecyduj sam. Dobry mentor nie potrzebuje rekomendacji - potrzebuje Twojego doświadczenia z nim. A ono zaczyna się od jednego kliknięcia.
          </p>
          <p className="text-white text-sm font-bold mt-4">- Ludwik</p>
        </div>
      </section>
    </Layout>
  );
}
