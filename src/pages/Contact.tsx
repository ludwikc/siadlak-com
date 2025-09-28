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
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  Wybierz preferowaną formę kontaktu:
                </p>

                <div className="flex flex-col space-y-4">
                  <Button
                    onClick={() =>
                      window.open("mailto:connect@siadlak.email", "_self")
                    }
                    className="w-full h-14 bg-ascension-pink hover:bg-ascension-pink/80 text-white font-medium flex items-center justify-center gap-3 text-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Wyślij email
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/ludwikc", "_blank")
                    }
                    className="w-full h-14 bg-[#0077B5] hover:bg-[#0077B5]/80 text-white font-medium flex items-center justify-center gap-3 text-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <Linkedin className="w-5 h-5" />
                    Połącz się na LinkedIn
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://instagram.com/ludwikc", "_blank")
                    }
                    className="w-full h-14 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium flex items-center justify-center gap-3 text-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <Instagram className="w-5 h-5" />
                    Wyślij DM na IG
                  </Button>
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
