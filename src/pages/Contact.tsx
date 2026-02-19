import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";

const Contact = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/contact")} />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-void-glow text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">
                Bezpośredni kontakt
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                   <a
                href="mailto:ludwikc@siadlak.email?subject=Kontakt%20ze%20strony&body=Cze%C5%9B%C4%87%20Ludwik%2C%0A%0AMam%20nast%C4%99puj%C4%85c%C4%85%20spraw%C4%99%3A%0A%0A"
                className="hover:text-electric transition-colors"
              >
                ludwikc@siadlak.email
              </a>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Żadnych formularzy. Po prostu napisz. Jeśli chcesz porozmawiać 1:1, "synchronicznie" - umów się na Sesję Discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Social Media
              </h2>
              <p className="text-lg text-dim">
                Najczęściej jestem na Discordzie SIADLAK.VIP - tam spotkasz mnie cały czas. Ale jeśli wolisz inne appki - jestem też na: 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
              {/* LinkedIn Card */}
              <div className="group bg-card p-8 rounded-sm border border-border hover:border-[#0077B5]/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-sm flex items-center justify-center">
                    <Linkedin className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      LinkedIn
                    </h3>
                    <p className="text-dim text-sm mb-4">
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
                    className="w-full bg-[#0077B5] hover:bg-[#005885] text-white font-semibold py-6 rounded transition-all"
                  >
                    Wyślij wiadomość
                  </Button>
                  <p className="text-xs text-dim font-mono">
                    linkedin.com/in/ludwikc
                  </p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="group bg-card p-8 rounded-sm border border-border hover:border-depth/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-brand-gradient rounded-sm flex items-center justify-center">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Instagram DM
                    </h3>
                    <p className="text-dim text-sm mb-4">
                      Świetne do szybkich pytań i spontanicznych rozmów
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      window.open("https://instagram.com/ludwikc", "_blank")
                    }
                    className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold py-6 rounded transition-all"
                  >
                    Napisz na DM
                  </Button>
                  <p className="text-xs text-dim font-mono">
                    @ludwikc
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-card p-8 md:p-12 rounded-sm border border-border text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-electric" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Każda wiadomość jest ważna
                </h3>
                <p className="text-lg text-dim leading-relaxed">
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
