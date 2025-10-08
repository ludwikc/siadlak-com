import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail } from "@/lib/icons";
import { Linkedin, Instagram, Clock, Heart, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";

const Contact = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/contact")} />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-deep-space via-neural-blue to-deep-space text-white overflow-hidden">
        {/* Premium static background elements */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-zenith-gold/50 to-neural-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-neural-blue to-twilight-indigo rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">
                Bezpośredni kontakt
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Porozmawiajmy
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90/90 leading-relaxed max-w-2xl mx-auto">
              Cenię bezpośrednią komunikację i osobiście odpowiadam na
              wiadomości. Jeśli szukasz transformacji zamiast tylko kolejnego
              kursu, lub masz pytania o odzyskanie kontroli nad cyfrowym życiem
              - daj znać.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Clock className="w-5 h-5 text-zenith-gold" />
                <span className="text-sm font-medium">Odpowiedź w 24h</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Heart className="w-5 h-5 text-zenith-gold" />
                <span className="text-sm font-medium">100% osobiście</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Shield className="w-5 h-5 text-zenith-gold" />
                <span className="text-sm font-medium">Zero botów</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-gradient-to-b from-luminous-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                Wybierz preferowaną formę kontaktu
              </h2>
              <p className="text-lg text-subtle-slate">
                Każda wiadomość otrzymuje osobistą odpowiedź ode mnie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Email Card */}
              <div className="group glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-zenith-gold/20">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-zenith-gold to-zenith-gold/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      Email
                    </h3>
                    <p className="text-subtle-slate text-sm mb-4">
                      Najlepsza opcja dla dłuższych wiadomości i szczegółowych
                      pytań
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      window.open("mailto:connect@siadlak.email", "_self")
                    }
                    className="w-full bg-zenith-gold hover:bg-zenith-gold/90 text-white font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    Napisz email
                  </Button>
                  <p className="text-xs text-subtle-slate font-mono">
                    connect@siadlak.email
                  </p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="group glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0077B5]/20">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      LinkedIn
                    </h3>
                    <p className="text-subtle-slate text-sm mb-4">
                      Idealne do networkingu i dyskusji biznesowych
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/ludwikc",
                        "_blank",
                      )
                    }
                    className="w-full bg-[#0077B5] hover:bg-[#005885] text-white font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    Wyślij wiadomość
                  </Button>
                  <p className="text-xs text-subtle-slate font-mono">
                    linkedin.com/in/ludwikc
                  </p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="group glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-500/20">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      Instagram DM
                    </h3>
                    <p className="text-subtle-slate text-sm mb-4">
                      Świetne do szybkich pytań i spontanicznych rozmów
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      window.open("https://instagram.com/ludwikc", "_blank")
                    }
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    Napisz na DM
                  </Button>
                  <p className="text-xs text-subtle-slate font-mono">
                    @ludwikc
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-white to-silver-mist/10">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-zenith-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-zenith-gold" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">
                  Każda wiadomość jest ważna
                </h3>
                <p className="text-lg text-subtle-slate leading-relaxed">
                  Nie używam automatycznych odpowiedzi ani szablonów. Każda
                  wiadomość otrzymuje osobistą, przemyślaną odpowiedź. Jeśli
                  pytasz o transformację swojego życia, zasługujesz na
                  autentyczną rozmowę, nie kopiuj-wklej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
