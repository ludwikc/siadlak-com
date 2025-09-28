import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail } from "@/lib/icons";
import { Linkedin, Instagram } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";

const Contact = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/contact")} />
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#BDBDBD] dark:text-white">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Cenię bezpośrednią komunikację i osobiście odpowiadam na
              wiadomości. Jeśli szukasz transformacji zamiast tylko kolejnego
              kursu, lub masz pytania o odzyskanie kontroli nad cyfrowym życiem
              - daj znać.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Direct Contact Options */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-ascension-pink dark:text-luminal-magenta" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Kontakt bezpośredni
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-subtle-slate dark:text-silver-mist/90 text-center">
                  Wybierz preferowaną formę kontaktu:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    onClick={() =>
                      window.open("mailto:connect@siadlak.email", "_self")
                    }
                    className="aspect-square p-6 bg-ascension-pink hover:bg-ascension-pink/80 text-white font-medium flex flex-col items-center justify-center gap-3 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-xl group"
                  >
                    <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">Wyślij email</span>
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/ludwikc", "_blank")
                    }
                    className="aspect-square p-6 bg-[#0077B5] hover:bg-[#0077B5]/80 text-white font-medium flex flex-col items-center justify-center gap-3 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-xl group"
                  >
                    <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://instagram.com/ludwikc", "_blank")
                    }
                    className="aspect-square p-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium flex flex-col items-center justify-center gap-3 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-xl group"
                  >
                    <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">Instagram DM</span>
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-subtle-slate dark:text-silver-mist/70 text-sm">
                    Odpowiadam osobiście na wszystkie wiadomości
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
