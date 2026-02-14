import Layout from "@/components/layout/Layout";
import { CheckCircle, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Proszę wprowadź adres email");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      window.open(
        "https://app.easycart.pl/checkout/siadlak/newsletter",
        "_blank",
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEO {...getSEOConfig("/newsletter")} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 bg-void-glow overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <div className="inline-block mb-4 px-5 py-2 border border-white/10 rounded-sm">
                <span className="text-sm font-medium text-text-on-dark">
                  Newsletter dla myślących ludzi
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-text-on-dark">
                    (🧠 + 🤖)^💜
                  </h1>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-on-dark">
                  INTELIGENCJA DO POTĘGI SERCA
                </h2>
                <p className="text-xl sm:text-2xl text-text-dim max-w-2xl mx-auto leading-relaxed font-medium">
                  Przestrzeń głębokich rozmów dla myślących ludzi.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-text-on-dark">150+</p>
                  <p className="text-sm text-text-dim">Członków społeczności</p>
                </div>
                <div className="w-px bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-text-on-dark">23/100</p>
                  <p className="text-sm text-text-dim">Miejsca założycielskie</p>
                </div>
                <div className="w-px bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-text-on-dark">~10 dni</p>
                  <p className="text-sm text-text-dim">Do wyczerpania</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Main Promise */}
        <section className="py-16 sm:py-20 bg-diamond-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-on-light mb-2">
                  GŁÓWNA OBIETNICA
                </h2>
                <div className="h-1 bg-electric rounded-full"></div>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-xl sm:text-2xl font-bold text-electric leading-relaxed">
                  Przestań konsumować trendy AI. Zacznij budować mądrość.
                </p>
                <div className="bg-electric/5 rounded-sm p-4 sm:p-6 border-l-4 border-electric">
                  <p className="text-base sm:text-lg text-text-on-light font-medium">
                    ⏰ Każda niedziela, punktualnie o 19:00:
                  </p>
                </div>
                <ul className="text-left space-y-4 max-w-2xl mx-auto">
                  {[
                    "Jedna prowokacyjna myśl, która zmienia sposób patrzenia",
                    "Zaproszenie do dialogu z najbardziej refleksyjnymi umysłami w Polsce",
                    "Dostęp do społeczności, gdzie rozmowy naprawdę coś znaczą",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-electric mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-text-on-light leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative rounded-sm p-8 sm:p-10 border-2 border-electric/30">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className="text-white px-6 sm:px-8 py-2 rounded-sm text-sm sm:text-base font-bold"
                      style={{ background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))" }}
                    >
                      🔥 OFERTA ZAŁOŻYCIELSKA
                    </span>
                  </div>

                  <div className="mt-6 mb-8">
                    <div className="text-center space-y-4">
                      <p className="text-xl sm:text-2xl font-bold text-electric">
                        Pierwsze 100 osób: dostęp za 97 PLN miesięcznie
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-electric">
                        DOŻYWOTNIO.
                      </p>
                      <div className="inline-block bg-diamond-light rounded-sm px-4 py-2 mt-4 border border-text-on-light/10">
                        <p className="text-sm text-text-on-light/80 font-medium">
                          Sponsorowane przez Fundację HACKERZY.PL
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-diamond-light rounded-sm p-5 sm:p-6 mb-8 border border-text-on-light/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-text-on-light uppercase tracking-wide">
                        Pozostało miejsc
                      </span>
                      <span className="text-3xl font-bold text-electric">
                        23/100
                      </span>
                    </div>
                    <div className="w-full bg-text-on-light/10 rounded-full h-4 overflow-hidden mb-3">
                      <div
                        className="bg-electric h-4 rounded-full"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-text-on-light/70 text-center font-semibold">
                      77% wyprzedane • ~10 dni do wyczerpania
                    </p>
                  </div>

                  <div className="mb-6">
                    <button
                      onClick={() =>
                        window.open(
                          "https://app.easycart.pl/checkout/siadlak/newsletter",
                          "_blank",
                        )
                      }
                      className="w-full py-6 sm:py-7 text-lg sm:text-xl font-bold text-white rounded"
                      style={{
                        background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                        boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                      }}
                    >
                      ZAREZERWUJ MIEJSCE ZAŁOŻYCIELSKIE →
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-text-on-light/60">
                      💳 Bezpieczna płatność • 🔒 Dane chronione • ⚡ Natychmiastowy dostęp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Problem Section */}
        <section className="py-16 sm:py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
              <div className="inline-block mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center text-text-on-dark mb-2">
                  PROBLEM
                </h2>
                <div className="h-1 bg-red-500 rounded-full"></div>
              </div>

              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-text-dim">
                <p className="font-bold text-xl sm:text-2xl text-center text-text-on-dark">
                  Znasz to uczucie?
                </p>

                <div className="rounded-sm p-6 sm:p-8 border-l-4 border-electric border border-white/10">
                  <p className="italic text-sm sm:text-base leading-relaxed">
                    6:47 rano. Budzik. Telefon. LinkedIn.
                    <br />
                    47 powiadomień. "10 narzędzi AI które zmienią twoje życie".
                    "ChatGPT właśnie wypuścił...". "Zostajesz w tyle jeśli nie..."
                    <br />
                    Przewijasz dalej.
                  </p>
                </div>

                <p className="leading-relaxed">
                  Wszyscy mówią o tym samym. Wszyscy udają ekspertów. Nikt nie
                  mówi prawdy:{" "}
                  <strong className="text-text-on-dark">
                    im więcej mamy narzędzi, tym bardziej czujemy się zagubieni.
                  </strong>
                </p>

                <div className="rounded-sm p-6 sm:p-8 border border-white/10 space-y-4">
                  <p className="text-xl sm:text-2xl font-bold text-electric text-center">
                    Problem nie leży w narzędziach.
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-electric text-center">
                    Problem leży w utracie zdolności do głębokiego myślenia.
                  </p>
                </div>

                <p className="text-center text-lg sm:text-xl font-semibold text-text-on-dark">
                  Zamieniamy mądrość na przeciążenie informacyjne.
                </p>
                <p className="text-center text-lg sm:text-xl font-bold text-red-400">
                  A najgorsze? Nie masz z kim o tym porozmawiać.
                </p>

                <div className="rounded-sm p-6 sm:p-8 border border-red-500/30 bg-red-500/5">
                  <p className="font-bold mb-5 text-lg flex items-center gap-2 text-text-on-dark">
                    <span className="text-2xl">😔</span>
                    <span>Twoi znajomi:</span>
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Konsumują te same powierzchowne trendy",
                      "Nie rozumieją, o czym mówisz",
                      "Są zbyt zajęci budowaniem sieci kontaktów, by naprawdę rozmawiać",
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <X className="h-6 w-6 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm p-6 sm:p-8 border-l-4 border-electric border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-electric text-center">
                    💔 I czujesz się samotny w tłumie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Solution Section */}
        <section className="py-16 sm:py-20 bg-diamond-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
              <div className="inline-block mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center text-text-on-light mb-2">
                  ROZWIĄZANIE
                </h2>
                <div className="h-1 bg-green-500 rounded-full"></div>
              </div>

              <div className="text-center space-y-6 sm:space-y-8">
                <p className="text-2xl sm:text-3xl font-bold text-electric">
                  Przedstawiam: (🧠 + 🤖)^💜
                </p>
                <p className="text-lg sm:text-xl text-text-on-light/80">
                  To nie jest kolejny newsletter o sztucznej inteligencji.
                </p>
                <p className="text-lg sm:text-xl font-bold text-text-on-light leading-relaxed max-w-3xl mx-auto">
                  To klucz do miejsca, gdzie najbardziej refleksyjni ludzie w
                  polskiej technologii rozmawiają o tym, co naprawdę ma znaczenie.
                </p>
              </div>

              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-on-light mb-2">
                    JAK TO DZIAŁA:
                  </h3>
                  <div className="h-0.5 w-24 bg-electric rounded-full mx-auto"></div>
                </div>

                <div className="grid gap-6">
                  {[
                    { emoji: "📧", title: "NIEDZIELA, 19:00: Rzucam prowokacyjną myśl", desc: <>Nie porada. Nie "5 kroków do...". <strong>Perspektywa, która zderza się z twoją.</strong></>, extra: (
                      <div className="bg-diamond-light rounded-sm p-4 border border-text-on-light/10 mt-4">
                        <p className="font-semibold mb-3 text-sm sm:text-base">💡 Przykłady tematów z ostatnich tygodni:</p>
                        <ul className="text-xs sm:text-sm space-y-2 text-text-on-light/80">
                          <li className="flex items-start gap-2"><span className="text-electric flex-shrink-0">→</span><span>"Udawaj, aż ci się uda - robisz to dobrze czy źle?"</span></li>
                          <li className="flex items-start gap-2"><span className="text-electric flex-shrink-0">→</span><span>"Czy sztuczna inteligencja czyni nas mądrzejszymi, czy tylko bardziej wydajnymi?"</span></li>
                          <li className="flex items-start gap-2"><span className="text-electric flex-shrink-0">→</span><span>"Dlaczego najlepsi liderzy w erze AI mówią 'nie wiem' częściej niż kiedykolwiek?"</span></li>
                        </ul>
                      </div>
                    ) },
                    { emoji: "💬", title: "TY ODPOWIADASZ: Twoja perspektywa ma znaczenie", desc: <>Odpowiedź na wiadomość. Podważ moją myśl. Rozbuduj ją. Podziel się swoją historią.<br /><strong>Tu nie chodzi o mnie. Chodzi o zderzenie twoich myśli z moimi i z innymi.</strong></> },
                    { emoji: "🔥", title: "SOBOTA: Zderzenie perspektyw", desc: <>Najlepsze wymiany z tygodnia. <strong>12 różnych punktów widzenia na jeden temat. Zero zgody. Mnóstwo mądrości.</strong></> },
                    { emoji: "💎", title: "A POTEM... COŚ WIĘCEJ", desc: <>Najlepsze rozmowy przenoszą się do społeczności <strong>Lifehackerzy.pl</strong> - miejsca, gdzie spotykają się ludzie, dla których głębokie myślenie to nie hobby, ale sposób życia.</> },
                  ].map((item) => (
                    <div key={item.title} className="rounded-sm p-6 sm:p-8 border border-text-on-light/10">
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="text-3xl sm:text-4xl flex-shrink-0">{item.emoji}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg sm:text-xl mb-3 text-text-on-light">{item.title}</h4>
                          <p className="text-sm sm:text-base text-text-on-light/80 leading-relaxed">{item.desc}</p>
                          {item.extra}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Testimonials Section */}
        <section className="py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-on-dark">
                  DOWODY - PRAWDZIWE ŚWIADECTWA
                </h2>
                <p className="text-lg text-text-dim">
                  Nie musisz wierzyć mi na słowo. Posłuchaj członków społeczności.
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  { initials: "TM", name: "Tomasz M.", role: "Założyciel startupu technologicznego", since: "Członek od 4 miesięcy", quote: "Przed newsletterem Ludwika: produktywność oznaczała 60 godzin tygodniowo, wypalenie, zero czasu na myślenie. Po 8 tygodniach: Przestałem gonić za trendami AI. Zacząłem budować mądrość. Zmieniłem całe podejście do pracy - 2 godziny dziennie głębokiej pracy przynoszą więcej niż 10 godzin zajętości. Najważniejsze? Znalazłem ludzi, którzy myślą podobnie. Albo zupełnie inaczej. I obie rzeczy są równie cenne. Trzy osoby z newslettera to teraz moi najbliżsi doradcy." },
                  { initials: "AK", name: "Anna K.", role: "Trenerka przywództwa", since: "Członkini od 6 miesięcy", quote: "Jedna myśl z newslettera Ludwika zmieniła więcej niż 100 'porad produktywności' z LinkedIn. Przestałam optymalizować czas. Zacząłem optymalizować jakość myślenia. A społeczność Lifehackerzy.pl? To miejsce, gdzie w końcu mogę być sobą. Gdzie nie muszę udawać, że mam wszystkie odpowiedzi." },
                  { initials: "KL", name: "Katarzyna L.", role: "Konsultantka AI", since: "Członkini od 3 miesięcy", quote: "Ludwik nie ma racji w 40% przypadków. I właśnie dlatego rozmowy z nim są najcenniejsze. Kwestionuje moje założenia, nie potakuje im. A społeczność? Pełna ludzi, którzy wolą niewygodną prawdę od grzecznego kłamstwa." },
                ].map((t) => (
                  <div key={t.initials} className="rounded-sm p-8 border border-white/10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-depth rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-bold text-lg text-text-on-dark">{t.name}</p>
                        <p className="text-sm text-text-dim">{t.role}</p>
                        <p className="text-xs text-electric font-semibold mt-1">{t.since}</p>
                      </div>
                    </div>
                    <blockquote className="text-text-dim leading-relaxed">
                      <span className="text-4xl text-electric/30 float-left mr-2 leading-none">"</span>
                      {t.quote}
                    </blockquote>
                    <div className="mt-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-electric text-xl">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Pricing Section */}
        <section className="py-20 bg-diamond-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-on-light">
                  STRUKTURA OFERTY
                </h2>
                <p className="text-lg text-text-on-light/70">
                  Wybierz poziom zaangażowania odpowiedni dla Ciebie
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Free Tier */}
                <div className="rounded-sm p-8 border border-text-on-light/10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-text-on-light/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🆓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-on-light mb-2">KRĄG OTWARTY</h3>
                    <p className="text-text-on-light/70 mb-4">Dla każdego</p>
                    <p className="text-3xl font-bold text-electric">BEZPŁATNIE</p>
                  </div>
                  <ul className="space-y-4 mb-8 min-h-[240px]">
                    {["Cotygodniowy newsletter (niedziela 19:00)", "Możliwość dialogu przez email", "Comiesięczna kompilacja wymian", "Dostęp do 3 ostatnich wydań"].map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-on-light leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full py-6 text-base font-semibold border-2"
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                  >
                    DOŁĄCZ BEZPŁATNIE
                  </Button>
                </div>

                {/* Premium Tier */}
                <div className="relative rounded-sm p-8 border-2 border-electric/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className="text-white px-6 py-2 rounded-sm text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))" }}
                    >
                      ⭐ NAJPOPULARNIEJSZY
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-depth rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💎</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-on-light mb-2">KRĄG WEWNĘTRZNY</h3>
                    <p className="text-text-on-light/70 mb-4">Dla myślących</p>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold text-electric">97 PLN<span className="text-lg">/mies.</span></p>
                      <p className="text-base text-text-on-light/60 line-through">197 PLN/mies.</p>
                      <div className="inline-block bg-electric/10 rounded-sm px-4 py-2">
                        <p className="text-sm text-electric font-bold">DOŻYWOTNIO dla pierwszych 100</p>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8 min-h-[240px]">
                    {["Wszystko z Kręgu Otwartego", "Pełny dostęp do społeczności Lifehackerzy.pl", "Moje osobiste odpowiedzi na każdą wymianę", "Comiesięczne sesje Q&A na żywo", "Pełne archiwum od 2024"].map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-on-light leading-relaxed font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-6 text-base font-bold text-white rounded"
                    style={{
                      background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                      boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                    }}
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                  >
                    DOŁĄCZ DO KRĘGU WEWNĘTRZNEGO
                  </button>
                </div>

                {/* Elite Tier */}
                <div className="rounded-sm p-8 border border-text-on-light/10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-on-light mb-2">LIFEHACKERZY PREMIUM</h3>
                    <p className="text-text-on-light/70 mb-4">Dla gotowych na transformację</p>
                    <div className="inline-block bg-electric/10 rounded-sm px-4 py-3">
                      <p className="text-base font-bold text-electric">TYLKO NA ZAPROSZENIE</p>
                    </div>
                  </div>
                  <div className="text-center mb-8 min-h-[240px] flex flex-col justify-center">
                    <p className="text-sm text-text-on-light leading-relaxed mb-4">
                      Dostęp tylko dla członków Kręgu Wewnętrznego gotowych na więcej.
                    </p>
                    <p className="text-sm text-text-on-light leading-relaxed">
                      Po 3-6 miesiącach w społeczności, najaktywniejsze osoby otrzymują zaproszenie do poziomu premium.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full py-6 text-base font-semibold border-2" disabled>
                    WIĘCEJ PO DOŁĄCZENIU
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Example Newsletter */}
        <section className="py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-center mb-12 text-text-on-dark">
                PRZYKŁAD PRAWDZIWEJ TREŚCI
              </h3>

              <div className="rounded-sm p-8 border border-white/10">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2">
                    <img
                      src="/lovable-uploads/newsletter-example.png"
                      alt="Przykład newslettera - Fake it till you make it"
                      className="w-full rounded-sm"
                    />
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <blockquote className="text-xl font-semibold text-electric">
                      "Udawaj, aż ci się uda - robisz to dobrze czy źle?"
                    </blockquote>
                    <p className="text-base text-text-on-dark">
                      47 odpowiedzi. 12 zupełnie przeciwstawnych perspektyw. Zero zgody. Mnóstwo mądrości.
                    </p>
                    <p className="text-sm text-text-dim">
                      To nie jest "artykuł". To żywa rozmowa, która ewoluuje przez tydzień.
                    </p>
                    <a
                      href="https://connect.siadlak.email/preview/484845/emails/163624365229868308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded font-semibold text-base text-white"
                      style={{
                        background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                        boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                      }}
                    >
                      Czytaj newsletter i wszystkie wymiany
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Final CTA */}
        <section className="py-20 bg-diamond-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-on-light">
                DWA WYBORY
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-sm p-6 border-2 border-electric/30 space-y-4">
                  <h3 className="text-lg font-bold text-electric">
                    Wybór 1: Dołącz do pierwszych 100
                  </h3>
                  <ul className="text-sm space-y-2 text-left">
                    {["97 PLN miesięcznie dożywotnio", "Natychmiastowy dostęp do społeczności", "Oszczędzasz 12 000 PLN przez 10 lat"].map((text) => (
                      <li key={text} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Twój adres email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-center"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 font-semibold text-white rounded disabled:opacity-50"
                      style={{
                        background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                        boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                      }}
                    >
                      {isLoading ? "REJESTRUJĘ..." : "TAK, CHCĘ JEDNO Z 23 MIEJSC"}
                    </button>
                  </form>
                </div>

                <div className="rounded-sm p-6 border border-text-on-light/10 space-y-4">
                  <h3 className="text-lg font-bold text-text-on-light">
                    Wybór 2: Krąg Otwarty
                  </h3>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Newsletter bezpłatnie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Możliwość dialogu przez email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Bez dostępu do społeczności</span>
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                  >
                    DOŁĄCZ DO KRĘGU OTWARTEGO
                  </Button>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm text-text-on-light/60">
                  P.S. 23 miejsca. Przy 2-3 zapisach dziennie, ostatnie miejsce zniknie za około 10 dni.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* Footer */}
        <section className="py-12 bg-void-glow border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-text-dim">
                  Sponsorowane przez: Fundacja HACKERZY.PL
                </p>
                <p className="text-sm text-text-dim">
                  Napędzane przez: Społeczność Lifehackerzy.pl - ponad 150 założycieli, liderów i twórców
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-text-on-dark font-semibold">
                  Ludwik C. Siadlak - Kurator myśli. Facylitator dialogu. Człowiek, który woli niewygodną prawdę od grzecznego kłamstwa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
