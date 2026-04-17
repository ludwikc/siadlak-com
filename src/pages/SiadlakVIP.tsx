import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getWebPageEntity, getOrganizationEntity } from "@/lib/structured-data";

const TheCut = () => <div className="the-cut" />;

const Eyebrow = ({ children, color = "electric" }: { children: string; color?: "electric" | "depth" | "dim" }) => {
  const colorClass = color === "electric" ? "text-electric" : color === "depth" ? "text-depth" : "text-on-light-dim";
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${colorClass}`}>{children}</p>;
};

export default function SiadlakVIP() {
  const seo = getSEOConfig("/siadlakvip");

  return (
    <Layout>
      <SEO {...seo} jsonLd={[
        getOrganizationEntity(),
        getWebPageEntity('/siadlakvip', 'SIADLAK.VIP - Jedno miejsce. Wszystkie drzwi.', 'Parasol nad społecznościami SIADLAK.VIP - Telegram, Lifehackerzy, DeepWork.pl, UwazneZycie.pl.', ['/start', '/program', '/discovery']),
      ]} />
      {(() => { const t = getTopicalConfig("/siadlakvip"); return t ? <TopicalMeta {...t} /> : null; })()}

      {/* ─── HERO ─── */}
      <section className="bg-void-glow py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>SPOŁECZNOŚĆ</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
            SIADLAK.VIP
          </h1>
          <p className="font-heading text-2xl md:text-3xl font-bold text-white leading-[1.15] tracking-[-0.02em] mb-6">
            Jedno miejsce. Wszystkie drzwi.
          </p>
          <p className="text-dim text-base md:text-lg leading-relaxed">
            Tutaj zaczyna się każda ścieżka w moim świecie - od surowych myśli o 6 rano, przez cichą pracę w skupieniu, po pełne programy transformacji. Wybierz drzwi, które pasują do Ciebie teraz.
          </p>
        </div>
      </section>

      <TheCut />

      {/* ─── TELEGRAM ─── */}
      <section className="bg-void-glow py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow>01 · SIADLAK.VIP TELEGRAM</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-3">
            Mój warsztat. Surowe myśli, zanim staną się produktem.
          </h2>

          <div className="bg-surface border border-white/10 rounded-md p-6 md:p-8 mt-8">
            <p className="text-white text-base leading-relaxed mb-4">
              Prywatna, zamknięta grupa na Telegramie. Wiadomości głosowe - nagrywane w biegu, między sesjami, po medytacji, czasem o 5 rano, gdy coś nie daje mi spokoju.
            </p>
            <p className="text-electric text-base font-bold leading-relaxed mb-6">
              To nie jest content. To jest myślenie na głos.
            </p>
            <p className="text-dim text-base leading-relaxed mb-4">
              Rzeczy, które tu mówię, nie trafiają na Instagram. Nie trafiają do newslettera. Część z nich nigdy nie trafi nigdzie - bo nie każda myśl zasługuje na oprawę. Ale te, które zasługują, słyszysz tu pierwsze.
            </p>
            <p className="text-dim text-sm leading-relaxed mb-6 italic">
              Od razu ostrzegam: niektóre rozkminki są „odklejone". Kiedy temat sięga tak głęboko, że ani technologia ani nauka jeszcze nie potrafią tego opisać - mówię dalej. Bo tam jest najciekawiej.
            </p>

            <div className="space-y-2 mb-6 border-l-2 border-electric/30 pl-4">
              <p className="text-dim text-base leading-relaxed">
                <strong className="text-white">Value</strong> - przychodzi z doświadczania życia.
              </p>
              <p className="text-dim text-base leading-relaxed">
                <strong className="text-white">Impact</strong> - pojawia się, gdy pozwolisz sobie na zmianę perspektywy.
              </p>
              <p className="text-dim text-base leading-relaxed">
                <strong className="text-white">Progress</strong> - to już Twoja przestrzeń do zagospodarowania.
              </p>
            </div>

            <p className="text-dim text-sm leading-relaxed italic mb-8">
              Podróż do środka. Cieszę się, że decydujesz się towarzyszyć.
            </p>
            <a
              href="https://t.me/+bOZV8ebGFxgzYTMy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
            >
              Dołącz do SIADLAK.VIP na Telegramie →
            </a>
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── TRZY PRZESTRZENIE ─── */}
      <section className="bg-diamond py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow color="dim">02 · TRZY PRZESTRZENIE</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-light leading-[1.1] tracking-[-0.02em] mb-8">
            Otwarte drzwi
          </h2>

          <div className="space-y-6">
            {/* Lifehackerzy */}
            <div className="bg-white border border-black/5 rounded-md p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">💬</span>
                <div>
                  <h3 className="font-heading font-bold text-on-light text-lg mb-1">
                    Lifehackerzy.pl
                  </h3>
                  <p className="text-electric text-sm font-bold uppercase tracking-wider mb-4">
                    Społeczność
                  </p>
                  <p className="text-on-light-dim text-base leading-relaxed mb-3">
                    Pełna społeczność na Discordzie. 500+ osób z 8+ krajów. Codzienne spotkania o 12:34 (Daily Coaching), forum, Protipy, wzajemne wsparcie. Ludzie, którzy zdecydowali, że chcą rosnąć - i robią to razem.
                  </p>
                  <p className="text-on-light-dim text-base leading-relaxed mb-6">
                    Dostęp dostajesz po zainstalowaniu dowolnego{" "}
                    <Link to="/program" className="text-electric font-bold hover:underline">programu</Link>.
                  </p>
                  <a
                    href="https://Lifehackerzy.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric text-sm font-bold hover:underline"
                  >
                    Wejdź na Lifehackerzy.pl →
                  </a>
                </div>
              </div>
            </div>

            {/* DeepWork.pl */}
            <div className="bg-white border border-black/5 rounded-md p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🖥️</span>
                <div>
                  <h3 className="font-heading font-bold text-on-light text-lg mb-1">
                    DeepWork.pl
                  </h3>
                  <p className="text-electric text-sm font-bold uppercase tracking-wider mb-4">
                    Skupienie
                  </p>
                  <p className="text-on-light-dim text-base leading-relaxed mb-3">
                    Wirtualna przestrzeń do pracy w ciszy. Włączasz kamerę, wyłączasz rozpraszacze, pracujesz razem z innymi. Bez rozmów. Bez muzyki. Czysta energia grupy, która robi swoje.
                  </p>
                  <p className="text-on-light-dim text-base leading-relaxed mb-6">
                    Bezpłatne. Otwarte dla każdego. Wchodzisz, kiedy potrzebujesz.
                  </p>
                  <a
                    href="https://deepwork.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric text-sm font-bold hover:underline"
                  >
                    Dołącz do sesji na DeepWork.pl →
                  </a>
                </div>
              </div>
            </div>

            {/* UwazneZycie.pl */}
            <div className="bg-white border border-black/5 rounded-md p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🧘</span>
                <div>
                  <h3 className="font-heading font-bold text-on-light text-lg mb-1">
                    UwazneZycie.pl
                  </h3>
                  <p className="text-electric text-sm font-bold uppercase tracking-wider mb-4">
                    Praktyka
                  </p>
                  <p className="text-on-light-dim text-base leading-relaxed mb-6">
                    Prowadzone medytacje co wtorek o 6:30 rano. Nie musisz siedzieć w lotosie. Nie musisz „wyciszyć umysłu". Wystarczy, że się pojawisz.
                  </p>
                  <a
                    href="https://uwaznezycie.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric text-sm font-bold hover:underline"
                  >
                    Zacznij medytować na UwazneZycie.pl →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── NAWIGACJA ─── */}
      <section className="bg-void-glow py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>CO DALEJ?</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-8">
            Chcesz zobaczyć pełen obraz?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/program"
              className="inline-block bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
            >
              Wszystkie programy →
            </Link>
            <Link
              to="/discovery"
              className="inline-block border border-white/20 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 transition-colors"
            >
              Sesja Discovery →
            </Link>
            <Link
              to="/about"
              className="inline-block border border-white/20 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 transition-colors"
            >
              O mnie →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── P.S. ─── */}
      <section className="bg-void-glow pb-20 pt-4">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-dim text-sm leading-relaxed italic">
            <strong className="text-white not-italic">P.S.</strong> Społeczność to nie produkt. To ludzie, którzy zdecydowali, że chcą rosnąć w towarzystwie innych, którzy też rosną. Jeśli to brzmi jak coś dla Ciebie - wejdź. Jeśli nie - nie ma problemu. Drzwi są otwarte, gdy będziesz gotowy.
          </p>
          <p className="text-white text-sm font-bold mt-4">- Ludwik</p>
        </div>
      </section>
    </Layout>
  );
}
