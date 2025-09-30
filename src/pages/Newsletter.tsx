import Layout from '@/components/layout/Layout';
import { CheckCircle, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import { getSEOConfig } from '@/lib/seo-config';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Proszę wprowadź adres email');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEO {...getSEOConfig("/newsletter")} />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-neural-violet/20 via-quantum-blue/10 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-neural-violet">
                  (🧠 + 🤖)^💜
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                  INTELIGENCJA DO POTĘGI SERCA
                </h2>
                <p className="text-xl text-deep-charcoal">
                  Przestrzeń głębokich rozmów dla myślących ludzi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Promise */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                GŁÓWNA OBIETNICA
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-semibold text-neural-violet">
                  Przestań konsumować trendy AI. Zacznij budować mądrość.
                </p>
                <p className="text-lg text-deep-charcoal">
                  Każda niedziela, punktualnie o 19:00:
                </p>
                <ul className="text-left space-y-3 max-w-2xl mx-auto">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-violet mt-1 flex-shrink-0" />
                    <span className="text-deep-charcoal">Jedna prowokacyjna myśl, która zmienia sposób patrzenia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-violet mt-1 flex-shrink-0" />
                    <span className="text-deep-charcoal">Zaproszenie do dialogu z najbardziej refleksyjnymi umysłami w Polsce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-violet mt-1 flex-shrink-0" />
                    <span className="text-deep-charcoal">Dostęp do społeczności, gdzie rozmowy naprawdę coś znaczą</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 rounded-2xl p-6 border border-neural-violet/20">
                  <p className="text-lg font-semibold text-neural-violet mb-4">
                    Pierwsze 100 osób: dostęp za 97 PLN miesięcznie. DOŻYWOTNIO.
                  </p>
                  <p className="text-sm text-deep-charcoal/70 mb-6">
                    (Sponsorowane przez Fundację HACKERZY.PL)
                  </p>
                  
                  <div className="bg-background/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-deep-charcoal">POZOSTAŁO</span>
                      <span className="text-lg font-bold text-neural-violet">23/100</span>
                    </div>
                    <div className="w-full bg-deep-charcoal/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-neural-violet to-luminal-magenta h-2 rounded-full" style={{width: '77%'}}></div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                    className="w-full bg-neural-violet hover:bg-neural-violet/90 text-white font-semibold py-3 text-lg shadow-lg shadow-neural-violet/25"
                  >
                    ZAREZERWUJ MIEJSCE ZAŁOŻYCIELSKIE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-deep-charcoal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-deep-charcoal">
                PROBLEM
              </h2>
              
              <div className="space-y-6 text-lg text-deep-charcoal">
                <p className="font-semibold text-xl">Znasz to uczucie?</p>
                
                <div className="bg-background rounded-xl p-6 border-l-4 border-neural-violet">
                  <p className="italic">
                    6:47 rano. Budzik. Telefon. LinkedIn.<br />
                    47 powiadomień. "10 narzędzi AI które zmienią twoje życie". "ChatGPT właśnie wypuścił...". "Zostajesz w tyle jeśli nie..."<br />
                    Przewijasz dalej.
                  </p>
                </div>
                
                <p>
                  Wszyscy mówią o tym samym. Wszyscy udają ekspertów. Nikt nie mówi prawdy: im więcej mamy narzędzi, tym bardziej czujemy się zagubieni.
                </p>
                
                <div className="text-center space-y-4">
                  <p className="text-xl font-semibold text-neural-violet">
                    Problem nie leży w narzędziach.
                  </p>
                  <p className="text-xl font-semibold text-neural-violet">
                    Problem leży w utracie zdolności do głębokiego myślenia.
                  </p>
                </div>
                
                <p>Zamieniamy mądrość na przeciążenie informacyjne.</p>
                <p className="font-semibold">A najgorsze? Nie masz z kim o tym porozmawiać.</p>
                
                <div className="bg-background rounded-xl p-6">
                  <p className="font-semibold mb-4">Twoi znajomi:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Konsumują te same powierzchowne trendy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Nie rozumieją, o czym mówisz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Są zbyt zajęci budowaniem sieci kontaktów, by naprawdę rozmawiać</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-center text-xl font-semibold text-neural-violet">
                  I czujesz się samotny w tłumie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-deep-charcoal">
                ROZWIĄZANIE
              </h2>
              
              <div className="text-center space-y-6">
                <p className="text-xl font-semibold text-neural-violet">
                  Przedstawiam: (🧠 + 🤖)^💜
                </p>
                <p className="text-lg">
                  To nie jest kolejny newsletter o sztucznej inteligencji.
                </p>
                <p className="text-lg font-semibold">
                  To klucz do miejsca, gdzie najbardziej refleksyjni ludzie w polskiej technologii rozmawiają o tym, co naprawdę ma znaczenie.
                </p>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-center text-deep-charcoal">
                  JAK TO DZIAŁA:
                </h3>
                
                <div className="grid gap-6">
                  <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 rounded-xl p-6 border border-neural-violet/20">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-deep-charcoal">
                          NIEDZIELA, 19:00: Rzucam prowokacyjną myśl
                        </h4>
                        <p className="text-deep-charcoal mb-4">
                          Nie porada. Nie "5 kroków do...". Perspektywa, która zderza się z twoją.
                        </p>
                        <div>
                          <p className="font-semibold mb-2">Przykłady tematów z ostatnich tygodni:</p>
                          <ul className="text-sm space-y-1 text-deep-charcoal/80">
                            <li>• "Udawaj, aż ci się uda - robisz to dobrze czy źle?"</li>
                            <li>• "Czy sztuczna inteligencja czyni nas mądrzejszymi, czy tylko bardziej wydajnymi?"</li>
                            <li>• "Dlaczego najlepsi liderzy w erze AI mówią 'nie wiem' częściej niż kiedykolwiek?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-luminal-magenta/10 to-neural-violet/10 rounded-xl p-6 border border-luminal-magenta/20">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">💬</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-deep-charcoal">
                          TY ODPOWIADASZ: Twoja perspektywa ma znaczenie
                        </h4>
                        <p className="text-deep-charcoal">
                          Odpowiedź na wiadomość. Podważ moją myśl. Rozbuduj ją. Podziel się swoją historią.<br />
                          Tu nie chodzi o mnie. Chodzi o zderzenie twoich myśli z moimi i z innymi.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 rounded-xl p-6 border border-neural-violet/20">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🔥</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-deep-charcoal">
                          SOBOTA: Zderzenie perspektyw
                        </h4>
                        <p className="text-deep-charcoal">
                          Najlepsze wymiany z tygodnia. 12 różnych punktów widzenia na jeden temat. Zero zgody. Mnóstwo mądrości.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-luminal-magenta/10 to-neural-violet/10 rounded-xl p-6 border border-luminal-magenta/20">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">💎</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-deep-charcoal">
                          A POTEM... COŚ WIĘCEJ
                        </h4>
                        <p className="text-deep-charcoal">
                          Najlepsze rozmowy przenoszą się do społeczności Lifehackerzy.pl - miejsca, gdzie spotykają się ludzie, dla których głębokie myślenie to nie hobby, ale sposób życia.
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
        <section className="py-20 bg-deep-charcoal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-deep-charcoal">
                DOWODY - PRAWDZIWE ŚWIADECTWA
              </h2>
              
              <div className="grid gap-8">
                <div className="bg-background rounded-xl p-6 border border-neural-violet/20">
                  <div className="mb-4">
                    <p className="font-semibold text-deep-charcoal">Tomasz M., założyciel startupu technologicznego</p>
                    <p className="text-sm text-deep-charcoal/70">(członek od 4 miesięcy)</p>
                  </div>
                  <blockquote className="text-deep-charcoal italic">
                    "Przed newsletterem Ludwika: produktywność oznaczała 60 godzin tygodniowo, wypalenie, zero czasu na myślenie.
                    Po 8 tygodniach: Przestałem gonić za trendami AI. Zacząłem budować mądrość. Zmieniłem całe podejście do pracy - 2 godziny dziennie głębokiej pracy przynoszą więcej niż 10 godzin zajętości.
                    Najważniejsze? Znalazłem ludzi, którzy myślą podobnie. Albo zupełnie inaczej. I obie rzeczy są równie cenne. Trzy osoby z newslettera to teraz moi najbliżsi doradcy."
                  </blockquote>
                </div>
                
                <div className="bg-background rounded-xl p-6 border border-luminal-magenta/20">
                  <div className="mb-4">
                    <p className="font-semibold text-deep-charcoal">Anna K., trenerka przywództwa</p>
                    <p className="text-sm text-deep-charcoal/70">(członkini od 6 miesięcy)</p>
                  </div>
                  <blockquote className="text-deep-charcoal italic">
                    "Jedna myśl z newslettera Ludwika zmieniła więcej niż 100 'porad produktywności' z LinkedIn.
                    Przestałam optymalizować czas. Zacząłem optymalizować jakość myślenia.
                    A społeczność Lifehackerzy.pl? To miejsce, gdzie w końcu mogę być sobą. Gdzie nie muszę udawać, że mam wszystkie odpowiedzi."
                  </blockquote>
                </div>
                
                <div className="bg-background rounded-xl p-6 border border-neural-violet/20">
                  <div className="mb-4">
                    <p className="font-semibold text-deep-charcoal">Katarzyna L., konsultantka AI</p>
                    <p className="text-sm text-deep-charcoal/70">(członkini od 3 miesięcy)</p>
                  </div>
                  <blockquote className="text-deep-charcoal italic">
                    "Ludwik nie ma racji w 40% przypadków. I właśnie dlatego rozmowy z nim są najcenniejsze.
                    Kwestionuje moje założenia, nie potakuje im. A społeczność? Pełna ludzi, którzy wolą niewygodną prawdę od grzecznego kłamstwa."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-deep-charcoal">
                STRUKTURA OFERTY
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Free Tier */}
                <div className="bg-background rounded-xl p-6 border border-deep-charcoal/20">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      🆓 KRĄG OTWARTY
                    </h3>
                    <p className="text-deep-charcoal/70">Dla każdego</p>
                    <p className="text-2xl font-bold text-neural-violet mt-4">BEZPŁATNIE</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Cotygodniowy newsletter (niedziela 19:00)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Możliwość dialogu przez email</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Comiesięczna kompilacja wymian</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Dostęp do 3 ostatnich wydań</span>
                    </li>
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                  >
                    DOŁĄCZ BEZPŁATNIE
                  </Button>
                </div>
                
                {/* Premium Tier */}
                <div className="bg-gradient-to-br from-neural-violet/10 to-luminal-magenta/10 rounded-xl p-6 border border-neural-violet/20 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-neural-violet text-white px-4 py-1 rounded-full text-sm font-semibold">NAJPOPULARNIEJSZY</span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      💎 KRĄG WEWNĘTRZNY
                    </h3>
                    <p className="text-deep-charcoal/70">Dla myślących</p>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-neural-violet">97 PLN/mies.</p>
                      <p className="text-sm text-deep-charcoal/60 line-through">197 PLN/mies.</p>
                      <p className="text-sm text-neural-violet font-semibold">DOŻYWOTNIO dla pierwszych 100</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Wszystko z Kręgu Otwartego</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Pełny dostęp do społeczności Lifehackerzy.pl</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Moje osobiste odpowiedzi na każdą wymianę</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Comiesięczne sesje Q&A na żywo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-deep-charcoal">Pełne archiwum od 2024</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full bg-neural-violet hover:bg-neural-violet/90 text-white"
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                  >
                    DOŁĄCZ DO KRĘGU WEWNĘTRZNEGO
                  </Button>
                </div>
                
                {/* Elite Tier */}
                <div className="bg-background rounded-xl p-6 border border-luminal-magenta/20">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      🏆 LIFEHACKERZY PREMIUM
                    </h3>
                    <p className="text-deep-charcoal/70">Dla gotowych na transformację</p>
                    <p className="text-lg font-semibold text-luminal-magenta mt-4">TYLKO NA ZAPROSZENIE</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <p className="text-sm text-deep-charcoal">
                      Dostęp tylko dla członków Kręgu Wewnętrznego gotowych na więcej.
                    </p>
                    <p className="text-sm text-deep-charcoal mt-4">
                      Po 3-6 miesiącach w społeczności, najaktywniejsze osoby otrzymują zaproszenie do poziomu premium.
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full" disabled>
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
              
              <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 rounded-2xl p-8 border border-neural-violet/20">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2">
                    <div className="relative group cursor-pointer">
                      <img 
                        src="/lovable-uploads/newsletter-example.png"
                        alt="Przykład newslettera - Fake it till you make it"
                        className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neural-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 space-y-6">
                    <blockquote className="text-xl font-semibold text-neural-violet">
                      "Udawaj, aż ci się uda - robisz to dobrze czy źle?"
                    </blockquote>
                    <p className="text-base text-deep-charcoal">
                      47 odpowiedzi. 12 zupełnie przeciwstawnych perspektyw. Zero zgody. Mnóstwo mądrości.
                    </p>
                    <p className="text-sm text-deep-charcoal/80">
                      To nie jest "artykuł". To żywa rozmowa, która ewoluuje przez tydzień.
                    </p>
                    <a 
                      href="https://connect.siadlak.email/preview/484845/emails/163624365229868308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-neural-violet hover:bg-neural-violet/90 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-base shadow-lg shadow-neural-violet/25"
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
        <section className="py-20 bg-gradient-to-r from-neural-violet/20 to-luminal-magenta/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                DWA WYBORY
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-neural-violet/20 space-y-4">
                  <h3 className="text-lg font-bold text-neural-violet">
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
                      className="w-full bg-neural-violet hover:bg-neural-violet/90 text-white font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'REJESTRUJĘ...' : 'TAK, CHCĘ JEDNO Z 23 MIEJSC'}
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
                    onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                  >
                    DOŁĄCZ DO KRĘGU OTWARTEGO
                  </Button>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-sm text-deep-charcoal/60">
                  P.S. 23 miejsca. Przy 2-3 zapisach dziennie, ostatnie miejsce zniknie za około 10 dni.
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
                  Napędzane przez: Społeczność Lifehackerzy.pl - ponad 150 założycieli, liderów i twórców
                </p>
              </div>
              
              <div className="pt-6 border-t border-deep-charcoal/10">
                <p className="text-deep-charcoal font-semibold">
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