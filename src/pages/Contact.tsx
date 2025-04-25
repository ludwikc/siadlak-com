
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
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
              Cenię bezpośrednią komunikację i osobiście odpowiadam na wiadomości. Jeśli szukasz transformacji zamiast tylko kolejnego kursu, lub masz pytania o odzyskanie kontroli nad cyfrowym życiem - daj znać.
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
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Preferujesz rozmowę? Wybierz termin w moim kalendarzu.
              </p>
              
              {/* Calendly embed placeholder */}
              <div className="bg-white dark:bg-quantum-blue/50 border border-border rounded-lg p-4 h-96 mb-6 flex items-center justify-center">
                <Button 
                  onClick={() => window.location.href = '/thank-you/discovery-call'}
                  className="bg-neural-violet hover:bg-neural-violet/80 text-white font-medium px-8 py-6 text-lg shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  Zarezerwuj termin
                </Button>
              </div>
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
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Wybierz preferowaną formę kontaktu:
                </p>
                
                <div className="flex flex-col space-y-4">
                  <Button 
                    onClick={() => window.location.href = 'mailto:connect@siadlak.email'}
                    className="w-full h-14 bg-ascension-pink hover:bg-ascension-pink/80 text-white font-medium flex items-center justify-center gap-3 text-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Wyślij email
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = 'https://www.linkedin.com/in/ludwikc'}
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
