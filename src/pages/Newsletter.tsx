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
    // Simulate API call
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

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-twilight-indigo via-neural-blue to-deep-space text-white overflow-hidden">
          {/* Premium static background elements */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-neural-blue to-twilight-indigo rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <div className="inline-block mb-4 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-white">
                  Newsletter dla myślących ludzi
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                    (🧠 + 🤖)^💜
                  </h1>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                  INTELIGENCJA DO POTĘGI SERCA
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
                  Przestrzeń głębokich rozmów dla myślących ludzi.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">150+</p>
                  <p className="text-sm text-white/80">Członków społeczności</p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">23/100</p>
                  <p className="text-sm text-white/80">
                    Miejsca założycielskie
                  </p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">~10 dni</p>
                  <p className="text-sm text-white/80">Do wyczerpania</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Promise */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-charcoal mb-2">
                  GŁÓWNA OBIETNICA
                </h2>
                <div className="h-1 bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"></div>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-xl sm:text-2xl font-bold text-twilight-indigo leading-relaxed">
                  Przestań konsumować trendy AI. Zacznij budować mądrość.
                </p>
                <div className="bg-twilight-indigo/5 rounded-xl p-4 sm:p-6 border-l-4 border-twilight-indigo">
                  <p className="text-base sm:text-lg text-deep-charcoal font-medium">
                    ⏰ Każda niedziela, punktualnie o 19:00:
                  </p>
                </div>
                <ul className="text-left space-y-4 max-w-2xl mx-auto">
                  <li className="flex items-start gap-3 group">
                    <CheckCircle className="h-6 w-6 text-twilight-indigo mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base text-deep-charcoal leading-relaxed">
                      Jedna prowokacyjna myśl, która zmienia sposób patrzenia
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <CheckCircle className="h-6 w-6 text-twilight-indigo mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base text-deep-charcoal leading-relaxed">
                      Zaproszenie do dialogu z najbardziej refleksyjnymi
                      umysłami w Polsce
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <CheckCircle className="h-6 w-6 text-twilight-indigo mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base text-deep-charcoal leading-relaxed">
                      Dostęp do społeczności, gdzie rozmowy naprawdę coś znaczą
                    </span>
                  </li>
                </ul>

                <div className="relative bg-gradient-to-br from-twilight-indigo/10 to-twilight-indigo/10 rounded-2xl p-8 sm:p-10 border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-neural-blue to-twilight-indigo text-white px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg animate-pulse">
                      🔥 OFERTA ZAŁOŻYCIELSKA
                    </span>
                  </div>

                  <div className="mt-6 mb-8">
                    <div className="text-center space-y-4">
                      <p className="text-xl sm:text-2xl font-bold text-twilight-indigo">
                        Pierwsze 100 osób: dostęp za 97 PLN miesięcznie
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-twilight-indigo">
                        DOŻYWOTNIO.
                      </p>
                      <div className="inline-block bg-white/80 rounded-lg px-4 py-2 mt-4">
                        <p className="text-sm text-deep-charcoal/80 font-medium">
                          Sponsorowane przez Fundację HACKERZY.PL
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 sm:p-6 mb-8 border-2 border-twilight-indigo/30 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-deep-charcoal uppercase tracking-wide">
                        Pozostało miejsc
                      </span>
                      <span className="text-3xl font-bold text-twilight-indigo">
                        23/100
                      </span>
                    </div>
                    <div className="w-full bg-deep-charcoal/20 rounded-full h-4 overflow-hidden mb-3">
                      <div
                        className="bg-gradient-to-r from-twilight-indigo via-twilight-indigo to-twilight-indigo h-4 rounded-full animate-pulse shadow-inner"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-deep-charcoal/70 text-center font-semibold">
                      77% wyprzedane • ~10 dni do wyczerpania
                    </p>
                  </div>

                  <div className="relative group mb-6">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-twilight-indigo via-twilight-indigo to-twilight-indigo rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://app.easycart.pl/checkout/siadlak/newsletter",
                          "_blank",
                        )
                      }
                      className="relative w-full bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo/90 hover:to-twilight-indigo/90 text-white font-bold py-6 sm:py-7 text-lg sm:text-xl shadow-xl transform hover:scale-[1.02] transition-all"
                    >
                      ZAREZERWUJ MIEJSCE ZAŁOŻYCIELSKIE →
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-deep-charcoal/60">
                      💳 Bezpieczna płatność • 🔒 Dane chronione • ⚡
                      Natychmiastowy dostęp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-20 bg-deep-charcoal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
              <div className="inline-block mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-deep-charcoal mb-2">
                  PROBLEM
                </h2>
                <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              </div>

              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-deep-charcoal">
                <p className="font-bold text-xl sm:text-2xl text-center">
                  Znasz to uczucie?
                </p>

                <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-twilight-indigo shadow-md hover:shadow-lg transition-shadow">
                  <p className="italic text-sm sm:text-base leading-relaxed">
                    6:47 rano. Budzik. Telefon. LinkedIn.
                    <br />
                    47 powiadomień. "10 narzędzi AI które zmienią twoje życie".
                    "ChatGPT właśnie wypuścił...". "Zostajesz w tyle jeśli
                    nie..."
                    <br />
                    Przewijasz dalej.
                  </p>
                </div>

                <p className="leading-relaxed">
                  Wszyscy mówią o tym samym. Wszyscy udają ekspertów. Nikt nie
                  mówi prawdy:{" "}
                  <strong>
                    im więcej mamy narzędzi, tym bardziej czujemy się zagubieni.
                  </strong>
                </p>

                <div className="bg-gradient-to-r from-twilight-indigo/10 to-twilight-indigo/10 rounded-xl p-6 sm:p-8 border-2 border-twilight-indigo/30 space-y-4">
                  <p className="text-xl sm:text-2xl font-bold text-twilight-indigo text-center">
                    Problem nie leży w narzędziach.
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-twilight-indigo text-center">
                    Problem leży w utracie zdolności do głębokiego myślenia.
                  </p>
                </div>

                <p className="text-center text-lg sm:text-xl font-semibold">
                  Zamieniamy mądrość na przeciążenie informacyjne.
                </p>
                <p className="text-center text-lg sm:text-xl font-bold text-red-600">
                  A najgorsze? Nie masz z kim o tym porozmawiać.
                </p>

                <div className="bg-red-50 rounded-xl p-6 sm:p-8 border-2 border-red-200">
                  <p className="font-bold mb-5 text-lg flex items-center gap-2">
                    <span className="text-2xl">😔</span>
                    <span>Twoi znajomi:</span>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 group">
                      <X className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base leading-relaxed">
                        Konsumują te same powierzchowne trendy
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <X className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base leading-relaxed">
                        Nie rozumieją, o czym mówisz
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <X className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base leading-relaxed">
                        Są zbyt zajęci budowaniem sieci kontaktów, by naprawdę
                        rozmawiać
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-twilight-indigo/10 to-deep-charcoal/10 rounded-xl p-6 sm:p-8 border-l-4 border-twilight-indigo">
                  <p className="text-xl sm:text-2xl font-bold text-twilight-indigo text-center">
                    💔 I czujesz się samotny w tłumie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
              <div className="inline-block mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-deep-charcoal mb-2">
                  ROZWIĄZANIE
                </h2>
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>

              <div className="text-center space-y-6 sm:space-y-8">
                <p className="text-2xl sm:text-3xl font-bold text-twilight-indigo">
                  Przedstawiam: (🧠 + 🤖)^💜
                </p>
                <p className="text-lg sm:text-xl text-deep-charcoal/80">
                  To nie jest kolejny newsletter o sztucznej inteligencji.
                </p>
                <p className="text-lg sm:text-xl font-bold text-deep-charcoal leading-relaxed max-w-3xl mx-auto">
                  To klucz do miejsca, gdzie najbardziej refleksyjni ludzie w
                  polskiej technologii rozmawiają o tym, co naprawdę ma
                  znaczenie.
                </p>
              </div>

              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-deep-charcoal mb-2">
                    JAK TO DZIAŁA:
                  </h3>
                  <div className="h-0.5 w-24 bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full mx-auto"></div>
                </div>

                <div className="grid gap-6">
                  <div className="bg-gradient-to-br from-twilight-indigo/5 to-twilight-indigo/5 rounded-xl p-6 sm:p-8 border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all hover:shadow-lg group">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                        📧
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg sm:text-xl mb-3 text-deep-charcoal group-hover:text-twilight-indigo transition-colors">
                          NIEDZIELA, 19:00: Rzucam prowokacyjną myśl
                        </h4>
                        <p className="text-sm sm:text-base text-deep-charcoal leading-relaxed mb-4">
                          Nie porada. Nie "5 kroków do...".{" "}
                          <strong>
                            Perspektywa, która zderza się z twoją.
                          </strong>
                        </p>
                        <div className="bg-white/50 rounded-lg p-4 border border-twilight-indigo/20">
                          <p className="font-semibold mb-3 text-sm sm:text-base">
                            💡 Przykłady tematów z ostatnich tygodni:
                          </p>
                          <ul className="text-xs sm:text-sm space-y-2 text-deep-charcoal/80">
                            <li className="flex items-start gap-2">
                              <span className="text-twilight-indigo flex-shrink-0">
                                →
                              </span>
                              <span>
                                "Udawaj, aż ci się uda - robisz to dobrze czy
                                źle?"
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-twilight-indigo flex-shrink-0">
                                →
                              </span>
                              <span>
                                "Czy sztuczna inteligencja czyni nas
                                mądrzejszymi, czy tylko bardziej wydajnymi?"
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-twilight-indigo flex-shrink-0">
                                →
                              </span>
                              <span>
                                "Dlaczego najlepsi liderzy w erze AI mówią 'nie
                                wiem' częściej niż kiedykolwiek?"
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-twilight-indigo/5 to-twilight-indigo/5 rounded-xl p-6 sm:p-8 border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all hover:shadow-lg group">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                        💬
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg sm:text-xl mb-3 text-deep-charcoal group-hover:text-twilight-indigo transition-colors">
                          TY ODPOWIADASZ: Twoja perspektywa ma znaczenie
                        </h4>
                        <p className="text-sm sm:text-base text-deep-charcoal leading-relaxed">
                          Odpowiedź na wiadomość. Podważ moją myśl. Rozbuduj ją.
                          Podziel się swoją historią.
                          <br />
                          <strong>
                            Tu nie chodzi o mnie. Chodzi o zderzenie twoich
                            myśli z moimi i z innymi.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-twilight-indigo/5 to-twilight-indigo/5 rounded-xl p-6 sm:p-8 border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all hover:shadow-lg group">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                        🔥
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg sm:text-xl mb-3 text-deep-charcoal group-hover:text-twilight-indigo transition-colors">
                          SOBOTA: Zderzenie perspektyw
                        </h4>
                        <p className="text-sm sm:text-base text-deep-charcoal leading-relaxed">
                          Najlepsze wymiany z tygodnia.{" "}
                          <strong>
                            12 różnych punktów widzenia na jeden temat. Zero
                            zgody. Mnóstwo mądrości.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-twilight-indigo/5 to-twilight-indigo/5 rounded-xl p-6 sm:p-8 border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all hover:shadow-lg group">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                        💎
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg sm:text-xl mb-3 text-deep-charcoal group-hover:text-twilight-indigo transition-colors">
                          A POTEM... COŚ WIĘCEJ
                        </h4>
                        <p className="text-sm sm:text-base text-deep-charcoal leading-relaxed">
                          Najlepsze rozmowy przenoszą się do społeczności{" "}
                          <strong>Lifehackerzy.pl</strong> - miejsca, gdzie
                          spotykają się ludzie, dla których głębokie myślenie to
                          nie hobby, ale sposób życia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-deep-charcoal/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal">
                  DOWODY - PRAWDZIWE ŚWIADECTWA
                </h2>
                <p className="text-lg text-deep-charcoal/70">
                  Nie musisz wierzyć mi na słowo. Posłuchaj członków
                  społeczności.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="group bg-white rounded-2xl p-8 border-2 border-twilight-indigo/20 hover:border-twilight-indigo/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      TM
                    </div>
                    <div>
                      <p className="font-bold text-lg text-deep-charcoal">
                        Tomasz M.
                      </p>
                      <p className="text-sm text-deep-charcoal/70">
                        Założyciel startupu technologicznego
                      </p>
                      <p className="text-xs text-twilight-indigo font-semibold mt-1">
                        Członek od 4 miesięcy
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-deep-charcoal leading-relaxed">
                    <span className="text-4xl text-twilight-indigo/30 float-left mr-2 leading-none">
                      "
                    </span>
                    Przed newsletterem Ludwika: produktywność oznaczała 60
                    godzin tygodniowo, wypalenie, zero czasu na myślenie. Po 8
                    tygodniach: Przestałem gonić za trendami AI. Zacząłem
                    budować mądrość. Zmieniłem całe podejście do pracy - 2
                    godziny dziennie głębokiej pracy przynoszą więcej niż 10
                    godzin zajętości. Najważniejsze? Znalazłem ludzi, którzy
                    myślą podobnie. Albo zupełnie inaczej. I obie rzeczy są
                    równie cenne. Trzy osoby z newslettera to teraz moi
                    najbliżsi doradcy.
                  </blockquote>
                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-twilight-indigo text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 border-2 border-twilight-indigo/20 hover:border-twilight-indigo/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      AK
                    </div>
                    <div>
                      <p className="font-bold text-lg text-deep-charcoal">
                        Anna K.
                      </p>
                      <p className="text-sm text-deep-charcoal/70">
                        Trenerka przywództwa
                      </p>
                      <p className="text-xs text-twilight-indigo font-semibold mt-1">
                        Członkini od 6 miesięcy
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-deep-charcoal leading-relaxed">
                    <span className="text-4xl text-twilight-indigo/30 float-left mr-2 leading-none">
                      "
                    </span>
                    Jedna myśl z newslettera Ludwika zmieniła więcej niż 100
                    'porad produktywności' z LinkedIn. Przestałam optymalizować
                    czas. Zacząłem optymalizować jakość myślenia. A społeczność
                    Lifehackerzy.pl? To miejsce, gdzie w końcu mogę być sobą.
                    Gdzie nie muszę udawać, że mam wszystkie odpowiedzi.
                  </blockquote>
                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-twilight-indigo text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 border-2 border-twilight-indigo/20 hover:border-twilight-indigo/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      KL
                    </div>
                    <div>
                      <p className="font-bold text-lg text-deep-charcoal">
                        Katarzyna L.
                      </p>
                      <p className="text-sm text-deep-charcoal/70">
                        Konsultantka AI
                      </p>
                      <p className="text-xs text-twilight-indigo font-semibold mt-1">
                        Członkini od 3 miesięcy
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-deep-charcoal leading-relaxed">
                    <span className="text-4xl text-twilight-indigo/30 float-left mr-2 leading-none">
                      "
                    </span>
                    Ludwik nie ma racji w 40% przypadków. I właśnie dlatego
                    rozmowy z nim są najcenniejsze. Kwestionuje moje założenia,
                    nie potakuje im. A społeczność? Pełna ludzi, którzy wolą
                    niewygodną prawdę od grzecznego kłamstwa.
                  </blockquote>
                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-twilight-indigo text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-background to-luminous-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal">
                  STRUKTURA OFERTY
                </h2>
                <p className="text-lg text-deep-charcoal/70">
                  Wybierz poziom zaangażowania odpowiedni dla Ciebie
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Free Tier */}
                <div className="bg-white rounded-2xl p-8 border-2 border-deep-charcoal/20 hover:border-deep-charcoal/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-deep-charcoal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🆓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-charcoal mb-2">
                      KRĄG OTWARTY
                    </h3>
                    <p className="text-deep-charcoal/70 mb-4">Dla każdego</p>
                    <p className="text-3xl font-bold text-twilight-indigo">
                      BEZPŁATNIE
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[240px]">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed">
                        Cotygodniowy newsletter (niedziela 19:00)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed">
                        Możliwość dialogu przez email
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed">
                        Comiesięczna kompilacja wymian
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed">
                        Dostęp do 3 ostatnich wydań
                      </span>
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full py-6 text-base font-semibold border-2 hover:bg-deep-charcoal/5"
                    onClick={() =>
                      window.open(
                        "https://app.easycart.pl/checkout/siadlak/newsletter",
                        "_blank",
                      )
                    }
                  >
                    DOŁĄCZ BEZPŁATNIE
                  </Button>
                </div>

                {/* Premium Tier */}
                <div className="relative bg-gradient-to-br from-twilight-indigo/10 to-twilight-indigo/10 rounded-2xl p-8 border-2 border-twilight-indigo/50 shadow-2xl transform scale-105 lg:scale-110">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-neural-blue to-twilight-indigo text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ NAJPOPULARNIEJSZY
                    </span>
                  </div>

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💎</span>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-charcoal mb-2">
                      KRĄG WEWNĘTRZNY
                    </h3>
                    <p className="text-deep-charcoal/70 mb-4">Dla myślących</p>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold text-twilight-indigo">
                        97 PLN<span className="text-lg">/mies.</span>
                      </p>
                      <p className="text-base text-deep-charcoal/60 line-through">
                        197 PLN/mies.
                      </p>
                      <div className="inline-block bg-twilight-indigo/20 rounded-lg px-4 py-2">
                        <p className="text-sm text-twilight-indigo font-bold">
                          DOŻYWOTNIO dla pierwszych 100
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[240px]">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed font-medium">
                        Wszystko z Kręgu Otwartego
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed font-medium">
                        Pełny dostęp do społeczności Lifehackerzy.pl
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed font-medium">
                        Moje osobiste odpowiedzi na każdą wymianę
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed font-medium">
                        Comiesięczne sesje Q&A na żywo
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal leading-relaxed font-medium">
                        Pełne archiwum od 2024
                      </span>
                    </li>
                  </ul>

                  <Button
                    className="w-full bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo/90 hover:to-twilight-indigo/90 text-white py-6 text-base font-bold shadow-xl transform hover:scale-[1.02] transition-all"
                    onClick={() =>
                      window.open(
                        "https://app.easycart.pl/checkout/siadlak/newsletter",
                        "_blank",
                      )
                    }
                  >
                    DOŁĄCZ DO KRĘGU WEWNĘTRZNEGO
                  </Button>
                </div>

                {/* Elite Tier */}
                <div className="bg-white rounded-2xl p-8 border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-twilight-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-charcoal mb-2">
                      LIFEHACKERZY PREMIUM
                    </h3>
                    <p className="text-deep-charcoal/70 mb-4">
                      Dla gotowych na transformację
                    </p>
                    <div className="inline-block bg-twilight-indigo/20 rounded-lg px-4 py-3">
                      <p className="text-base font-bold text-twilight-indigo">
                        TYLKO NA ZAPROSZENIE
                      </p>
                    </div>
                  </div>

                  <div className="text-center mb-8 min-h-[240px] flex flex-col justify-center">
                    <p className="text-sm text-deep-charcoal leading-relaxed mb-4">
                      Dostęp tylko dla członków Kręgu Wewnętrznego gotowych na
                      więcej.
                    </p>
                    <p className="text-sm text-deep-charcoal leading-relaxed">
                      Po 3-6 miesiącach w społeczności, najaktywniejsze osoby
                      otrzymują zaproszenie do poziomu premium.
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full py-6 text-base font-semibold border-2 border-twilight-indigo/30"
                    disabled
                  >
                    WIĘCEJ PO DOŁĄCZENIU
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Newsletter */}
        <section className="py-20 bg-deep-charcoal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-deep-charcoal">
                PRZYKŁAD PRAWDZIWEJ TREŚCI
              </h3>

              <div className="bg-gradient-to-r from-twilight-indigo/10 to-twilight-indigo/10 rounded-2xl p-8 border border-twilight-indigo/20">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2">
                    <div className="relative group cursor-pointer">
                      <img
                        src="/lovable-uploads/newsletter-example.png"
                        alt="Przykład newslettera - Fake it till you make it"
                        className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-twilight-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <blockquote className="text-xl font-semibold text-twilight-indigo">
                      "Udawaj, aż ci się uda - robisz to dobrze czy źle?"
                    </blockquote>
                    <p className="text-base text-deep-charcoal">
                      47 odpowiedzi. 12 zupełnie przeciwstawnych perspektyw.
                      Zero zgody. Mnóstwo mądrości.
                    </p>
                    <p className="text-sm text-deep-charcoal/80">
                      To nie jest "artykuł". To żywa rozmowa, która ewoluuje
                      przez tydzień.
                    </p>
                    <a
                      href="https://connect.siadlak.email/preview/484845/emails/163624365229868308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-twilight-indigo hover:bg-twilight-indigo/90 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-base shadow-lg shadow-twilight-indigo/25"
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

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-twilight-indigo/20 to-twilight-indigo/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                DWA WYBORY
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-twilight-indigo/20 space-y-4">
                  <h3 className="text-lg font-bold text-twilight-indigo">
                    Wybór 1: Dołącz do pierwszych 100
                  </h3>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>97 PLN miesięcznie dożywotnio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Natychmiastowy dostęp do społeczności</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Oszczędzasz 12 000 PLN przez 10 lat</span>
                    </li>
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
                    <Button
                      type="submit"
                      className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading
                        ? "REJESTRUJĘ..."
                        : "TAK, CHCĘ JEDNO Z 23 MIEJSC"}
                    </Button>
                  </form>
                </div>

                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-deep-charcoal/20 space-y-4">
                  <h3 className="text-lg font-bold text-deep-charcoal">
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
                    onClick={() =>
                      window.open(
                        "https://app.easycart.pl/checkout/siadlak/newsletter",
                        "_blank",
                      )
                    }
                  >
                    DOŁĄCZ DO KRĘGU OTWARTEGO
                  </Button>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm text-deep-charcoal/60">
                  P.S. 23 miejsca. Przy 2-3 zapisach dziennie, ostatnie miejsce
                  zniknie za około 10 dni.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 bg-background border-t border-deep-charcoal/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-deep-charcoal/70">
                  Sponsorowane przez: Fundacja HACKERZY.PL
                </p>
                <p className="text-sm text-deep-charcoal/70">
                  Napędzane przez: Społeczność Lifehackerzy.pl - ponad 150
                  założycieli, liderów i twórców
                </p>
              </div>

              <div className="pt-6 border-t border-deep-charcoal/10">
                <p className="text-deep-charcoal font-semibold">
                  Ludwik C. Siadlak - Kurator myśli. Facylitator dialogu.
                  Człowiek, który woli niewygodną prawdę od grzecznego kłamstwa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
