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
        getWebPageEntity('/siadlakvip', 'SIADLAK.VIP - Społeczność', 'Struktura społeczności SIADLAK.VIP - Telegram, Lifehackerzy, DeepWork.pl, UwazneZycie.pl.', ['/start', '/program', '/discovery']),
      ]} />
      {(() => { const t = getTopicalConfig("/siadlakvip"); return t ? <TopicalMeta {...t} /> : null; })()}

      {/* ─── HERO ─── */}
      <section className="bg-void-glow py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>SPOŁECZNOŚĆ</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
            SIADLAK.VIP
          </h1>
          <p className="text-dim text-base md:text-lg leading-relaxed">
            Parasol nad wszystkimi moimi społecznościami. Jedno miejsce, z którego prowadzą drzwi do każdej z nich.
          </p>
        </div>
      </section>

      <TheCut />

      {/* ─── OVERVIEW ─── */}
      <section className="bg-diamond py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow color="dim">STRUKTURA</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-light leading-[1.1] tracking-[-0.02em] mb-8">
            Jak to jest zorganizowane
          </h2>

          {/* Hierarchy diagram */}
          <div className="bg-white border border-black/5 rounded-md p-6 md:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-electric font-bold text-lg">SIADLAK.VIP</span>
                <span className="text-on-light-dim text-sm">— parasol</span>
              </div>
              <div className="ml-6 border-l-2 border-electric/20 pl-6 space-y-4">
                <div>
                  <p className="text-on-light font-bold text-sm">1) SIADLAK.VIP Telegram</p>
                  <p className="text-on-light-dim text-sm">Prywatna grupa z przemyśleniami</p>
                </div>
                <div>
                  <p className="text-on-light font-bold text-sm">2) LIFEHACKERZY</p>
                  <p className="text-on-light-dim text-sm">Pełna społeczność na Discordzie</p>
                  <div className="ml-6 border-l-2 border-depth/20 pl-6 mt-3 space-y-3">
                    <div>
                      <p className="text-on-light font-bold text-sm">2A) DeepWork.pl</p>
                      <p className="text-on-light-dim text-sm">Wspólna praca głęboka</p>
                    </div>
                    <div>
                      <p className="text-on-light font-bold text-sm">2B) UwazneZycie.pl</p>
                      <p className="text-on-light-dim text-sm">Cotygodniowe medytacje (wt. 6:30)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── TELEGRAM ─── */}
      <section className="bg-void-glow py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow>01</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-3">
            SIADLAK.VIP Telegram
          </h2>
          <p className="text-electric text-sm font-bold uppercase tracking-wider mb-6">
            Prywatna grupa na Telegramie
          </p>

          <div className="bg-surface border border-white/10 rounded-md p-6 md:p-8">
            <span className="text-2xl mb-4 block" aria-hidden="true">✈️</span>
            <p className="text-dim text-base leading-relaxed mb-4">
              Moje prywatne przemyślenia, które nie trafiają nigdzie indziej. Bez algorytmu, bez lajków, bez komentarzy pod postem. Piszę, Ty czytasz. Proste.
            </p>
            <p className="text-dim text-base leading-relaxed mb-8">
              To nie jest kanał z poradami. To jest okno do mojego procesu myślenia - w czasie rzeczywistym.
            </p>
            <a
              href="https://siadlak.vip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
            >
              Dołącz do SIADLAK.VIP →
            </a>
          </div>
        </div>
      </section>

      <TheCut />

      {/* ─── LIFEHACKERZY ─── */}
      <section className="bg-diamond py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow color="dim">02</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-light leading-[1.1] tracking-[-0.02em] mb-3">
            LIFEHACKERZY
          </h2>
          <p className="text-on-light-dim text-base leading-relaxed mb-8">
            Pełna społeczność na Discordzie. Dostęp dostajesz po zainstalowaniu dowolnego{" "}
            <Link to="/program" className="text-electric font-bold hover:underline">programu</Link>.
            W środku znajdziesz dwa otwarte kanały:
          </p>

          <div className="space-y-6">
            {/* DeepWork.pl */}
            <div className="bg-white border border-black/5 rounded-md p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🖥️</span>
                <div>
                  <h3 className="font-heading font-bold text-on-light text-lg mb-1">
                    2A) DeepWork.pl
                  </h3>
                  <p className="text-electric text-sm font-bold uppercase tracking-wider mb-4">
                    Kanał wspólnej pracy głębokiej
                  </p>
                  <p className="text-on-light-dim text-base leading-relaxed mb-6">
                    Wirtualna przestrzeń do pracy w skupieniu. Włączasz kamerę, wyłączasz rozpraszacze, pracujesz razem z innymi. Bezpłatne i otwarte dla każdego.
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
                    2B) UwazneZycie.pl
                  </h3>
                  <p className="text-electric text-sm font-bold uppercase tracking-wider mb-4">
                    Cotygodniowe medytacje · Wtorek 6:30 rano
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
              to="/start"
              className="inline-block bg-electric text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-electric/90 transition-colors shadow-lg shadow-electric/20"
            >
              Wszystkie możliwości →
            </Link>
            <Link
              to="/program"
              className="inline-block border border-white/20 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 transition-colors"
            >
              Programy →
            </Link>
            <Link
              to="/discovery"
              className="inline-block border border-white/20 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 transition-colors"
            >
              Sesja Discovery →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── P.S. ─── */}
      <section className="bg-void-glow pb-20 pt-4">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-dim text-sm leading-relaxed italic">
            <strong className="text-white not-italic">P.S.</strong> Społeczność to nie produkt. To ludzie, którzy zdecydowali, że chcą rosnąć w towarzystwie innych, którzy też rosną. Jeśli to brzmi jak coś dla Ciebie - wejdź. Jeśli nie - nie ma problemu.
          </p>
          <p className="text-white text-sm font-bold mt-4">- Ludwik</p>
        </div>
      </section>
    </Layout>
  );
}
