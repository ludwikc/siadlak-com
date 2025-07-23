import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendly Section */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Umów rozmowę
                </h2>
              </div>

              <p className="text-subtle-slate dark:text-silver-mist/90 mb-6">
                Preferujesz rozmowę? Wybierz termin w moim kalendarzu.
              </p>

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ludwikc/quick-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=d400ff"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>

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
