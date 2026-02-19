import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle } from "@/lib/icons";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";

export default function SiedemTechnik() {
  return (
    <Layout>
      <SEO {...getSEOConfig("/program/7-technik")} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-void-glow text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">
                77 minut, które zmienią Twój dzień
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              7 NAJSKUTECZNIEJSZYCH
              <br />
              Technik Produktywności
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
              77 minut, które ustawią Ci (każdy!) dzień
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-sm border border-white/20">
                <CheckCircle className="w-5 h-5 text-electric" />
                <span className="text-sm font-medium">Dostęp natychmiast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-sm border border-white/20">
                <CheckCircle className="w-5 h-5 text-electric" />
                <span className="text-sm font-medium">Bez aplikacji</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-sm border border-white/20">
                <CheckCircle className="w-5 h-5 text-electric" />
                <span className="text-sm font-medium">Dostęp lifetime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Logo */}
      <section className="py-16 bg-gradient-to-b from-diamond to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="relative max-w-2xl mx-auto">
              <img
                src="/lovable-uploads/e615021d-1367-4c9b-a003-5ceae847d2e8.png"
                alt="7 Technik Produktywności - Logo kursu"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-background to-diamond overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-5 py-2 bg-depth/10 rounded-full border border-depth/20">
                <span className="text-sm font-semibold text-depth uppercase tracking-wide">
                  Co dostajesz
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-on-light">
                Co dostajesz w 77 minut
              </h2>
              <div className="w-24 h-1.5 bg-brand-gradient mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
              <div className="bg-white rounded-sm p-8 border-2 border-electric/20">
                <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-on-light-dim leading-relaxed">
                  <strong>7 sprawdzonych technik</strong> w prostych punktach —
                  zero „teorii dla teorii"
                </p>
              </div>

              <div className="bg-white rounded-sm p-8 border-2 border-electric/20">
                <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-on-light-dim leading-relaxed">
                  <strong>Po każdej technice jedno zadanie</strong>, które
                  wdrażasz od razu
                </p>
              </div>

              <div className="bg-white rounded-sm p-8 border-2 border-depth/20">
                <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-on-light-dim leading-relaxed">
                  <strong>Zero aplikacji</strong> — wystarczy zwykły timer
                </p>
              </div>

              <div className="bg-white rounded-sm p-8 border-2 border-depth/20">
                <div className="w-12 h-12 bg-gradient-to-br from-depth to-electric rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-on-light-dim leading-relaxed">
                  <strong>Dostęp natychmiast</strong> po zakupie
                </p>
              </div>
            </div>

            {/* 7 Techniques */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-on-light mb-4">
                7 Technik (w jednym zdaniu każda)
              </h3>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Blokowanie zadań",
                  description:
                    "grupujesz podobne rzeczy w jednym bloku; jedziesz A→B bez postojów.",
                },
                {
                  number: "2",
                  title: "Praca głęboka",
                  description:
                    "25 minut w trybie samolot: powiadomienia OFF, Ty ON.",
                },
                {
                  number: "3",
                  title: "Zatrudnij pierwszego robota",
                  description:
                    "Zapier/IFTTT/Make: zaloguj → połącz → start; gwiazdka w Gmailu = zadanie w Todoist.",
                },
                {
                  number: "4",
                  title: "Hackowanie własnego maila",
                  description:
                    "plusy i kropki (ludwik+fb@... / lu.dw.ik@...) = porządek, filtry i automaty.",
                },
                {
                  number: "5",
                  title: "Werwa do pracy",
                  description:
                    "zrób próżnię: usuń Gmail z telefonu na weekend, zainstaluj w poniedziałek.",
                },
                {
                  number: "6",
                  title: "Estymowanie czasochłonności",
                  description:
                    "doliczasz połowę czasu i pracujesz spokojnie, bez czerwonego pola.",
                },
                {
                  number: "7",
                  title: "Otaczanie się skutecznymi Ludźmi",
                  description:
                    "silent co-working i społeczność siadlak.wip (PL kanał) trzymają Cię w działaniu.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-sm p-6 border-2 border-depth/20 hover:border-depth/50 transition-all duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-all duration-300">
                      {t.number}
                    </div>
                    <div className="text-on-light-dim">
                      <p className="leading-relaxed text-lg">
                        <strong className="text-depth">
                          {t.title}
                        </strong>{" "}
                        — {t.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-16 bg-gradient-to-b from-diamond to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img
              src="/lovable-uploads/d08df776-7e4c-49e0-aa5a-b43910072e53.png"
              alt="7 Technik Produktywności - Podgląd kursu na różnych urządzeniach"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 md:py-24 bg-void-glow text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-sm p-10 md:p-16 border border-white/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Inwestycja w Twoją produktywność
              </h2>

              <div className="my-12">
                <div className="inline-flex flex-col items-center gap-4 p-8 rounded-sm border-2 border-white/30 bg-white/5">
                  <p className="text-lg text-white/90 font-semibold">
                    Cena kursu
                  </p>
                  <p className="text-6xl font-bold text-white">497 PLN</p>
                </div>
              </div>

              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                77 minut, które zaoszczędzą Ci setki godzin w przyszłości
              </p>

              <a
                href="https://cart.easy.tools/checkout/siadlak/7technik?plan=price_1QY7K8LDgmse4Mm3C7S7M9Yx&lang=pl"
                className="relative inline-block group"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-depth via-depth to-depth rounded blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative bg-white hover:bg-white/90 text-depth px-8 py-6 rounded text-lg font-bold flex items-center gap-3 transition-all">
                  Kup teraz za 497 PLN
                  <ArrowRight size={20} />
                </button>
              </a>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                   <div className="h-2 w-2 bg-electric rounded-full"></div>
                   <span>Bezpieczne płatności</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="h-2 w-2 bg-electric rounded-full"></div>
                   <span>Dostęp NATYCHMIAST</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="h-2 w-2 bg-electric rounded-full"></div>
                  <span>Dostęp LIFETIME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
