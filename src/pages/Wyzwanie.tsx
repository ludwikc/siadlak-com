import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Calendar, Clock, Video, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from 'sonner';

// Countdown Timer Component
function ChallengeCountdown() {
  const targetDate = new Date('2025-10-07T11:30:00+02:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 mb-8">
      <div className="text-center">
        <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-foreground">{timeLeft.days}</div>
          <div className="text-sm text-muted-foreground uppercase">dni</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-foreground">{timeLeft.hours}</div>
          <div className="text-sm text-muted-foreground uppercase">godz</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-foreground">{timeLeft.minutes}</div>
          <div className="text-sm text-muted-foreground uppercase">min</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-foreground">{timeLeft.seconds}</div>
          <div className="text-sm text-muted-foreground uppercase">sek</div>
        </div>
      </div>
    </div>
  );
}

// Signup Form Component
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error('Musisz wyrazić zgodę na przetwarzanie danych');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
    toast.success('Dziękujemy za rejestrację! Sprawdź swoją skrzynkę email.');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Imię"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full"
        />
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground leading-tight cursor-pointer">
          Tak, chcę otrzymać link do wyzwania i materiały wspomagające
        </label>
      </div>
      <Button type="submit" size="lg" className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
        Zapisz się bezpłatnie (0 PLN)
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Twoje dane są bezpieczne. Zero spamu.<br />
        Tylko konkret: link, materiały, przypomnienia.
      </p>
    </form>
  );
}

export default function Wyzwanie() {
  return (
    <Layout hideHeader hideFooter>
      <SEO 
        title="Drwal w Białej Koszuli - 4-dniowe wyzwanie produktywności"
        description="Darmowe 4-dniowe wyzwanie dla profesjonalistów, którzy osiągają cele, ale nie czują spełnienia. 7-9 października 2025."
        keywords="produktywność, wyzwanie, cele, wartości, efektywność, coaching"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Przestań rąbać drzewa<br />w cudzym lesie
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              4-dniowe wyzwanie dla profesjonalistów, którzy osiągają cele...<br />
              ale nie czują spełnienia
            </p>
          </div>

          <ChallengeCountdown />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
            {/* LEFT COLUMN - Details */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Calendar className="w-5 h-5 text-[#2563eb]" />
                <span className="text-lg">7-9 października 2025</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-[#2563eb]" />
                <span className="text-lg">Codziennie 11:30-12:30</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Video className="w-5 h-5 text-[#2563eb]" />
                <span className="text-lg">Live na Discord</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Video className="w-5 h-5 text-[#2563eb]" />
                <span className="text-lg">Nagrania dostępne dla zapisanych</span>
              </div>
              <div className="flex items-center gap-3 text-foreground font-semibold">
                <Users className="w-5 h-5 text-[#2563eb]" />
                <span className="text-lg">Zero kosztów</span>
              </div>
            </div>

            {/* RIGHT COLUMN - Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <SignupForm />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Już zapisanych: 27 osób
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
            Znasz to uczucie?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <Check className="w-8 h-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-foreground">Pracujesz 50+ godzin tygodniowo</h3>
              <p className="text-muted-foreground leading-relaxed">
                ...i nadal masz wrażenie, że nic nie posuwasz do przodu. To nie kwestia pracowitości. To kwestia kierunku.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <Check className="w-8 h-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-foreground">Czytasz o produktywności</h3>
              <p className="text-muted-foreground leading-relaxed">
                ...ale żadna technika nie działa dłużej niż tydzień. Problem nie jest w narzędziach. Problem jest w fundamencie.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <Check className="w-8 h-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-foreground">Osiągasz cele</h3>
              <p className="text-muted-foreground leading-relaxed">
                ...i czujesz pustkę zamiast satysfakcji. Bo to nie były Twoje cele. To były cudze oczekiwania.
              </p>
            </div>
          </div>

          <div className="bg-[#2563eb]/10 border-l-4 border-[#2563eb] rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              <strong>Prawdziwy problem:</strong> Większość ludzi optymalizuje drogę... do niewłaściwego miejsca.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mają najlepsze narzędzia produktywności.<br />
              Najostrzejszą siekierę na rynku.<br />
              I rąbią 12 godzin dziennie.<br /><br />
              <strong>Tylko że to nie ich las.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* PROMISE SECTION - Timeline */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
            W 4 dni odkryjesz,<br />gdzie powinieneś rąbać
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card border border-border rounded-xl p-8 relative">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground pl-8">W którym lesie stoję?</h3>
              <ul className="space-y-2 text-muted-foreground pl-8">
                <li>• Audyt obecnych priorytetów</li>
                <li>• Ćwiczenie: Inwentaryzacja Twoich "drzew"</li>
                <li>• Pytanie: Które z nich wybrałeś świadomie?</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-card border border-border rounded-xl p-8 relative">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground pl-8">Gdzie powinienem być?</h3>
              <ul className="space-y-2 text-muted-foreground pl-8">
                <li>• Wartości jako kompas (nie cele jako mapa)</li>
                <li>• Ćwiczenie: Kalibracja Steru - Twoje TOP 5 wartości</li>
                <li>• Konfrontacja: Czy rąbiesz zgodnie z kompasem?</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-card border border-border rounded-xl p-8 relative">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground pl-8">Którędy iść?</h3>
              <ul className="space-y-2 text-muted-foreground pl-8">
                <li>• System 3 siekier: Deep Work, Shallow Work, Meta Work</li>
                <li>• Ćwiczenie: Design Your Week</li>
                <li>• Output: Twój idealny tydzień na kartce</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div className="bg-card border border-border rounded-xl p-8 relative">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground pl-8">Jak to wdrożyć?</h3>
              <ul className="space-y-2 text-muted-foreground pl-8">
                <li>• Live Coaching Session (na Twoim przykładzie)</li>
                <li>• Preview: Daily Coaching 12:34</li>
                <li>• Bonus: Prezentacja kursu "Hakowanie Produktywności"</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg">
            Każda sesja: 60 minut. Live na Discord. Nagrania zostają.
          </p>
        </div>
      </section>

      {/* FOR WHOM SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            To wyzwanie jest dla Ciebie, jeśli...
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* YES */}
            <div className="bg-card border border-green-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Check className="w-6 h-6 text-green-500" />
                To jest dla Ciebie
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Jesteś profesjonalistą z 5+ lat doświadczenia</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Osiągasz cele, ale coś ci nie pasuje</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Czujesz, że pracujesz nad cudzymi priorytetami</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Znasz techniki produktywności, ale nie masz systemu</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Chcesz szczerości, nie motywacyjnych frazesów</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Masz 4 godziny w tym tygodniu (4x60 min)</span>
                </li>
              </ul>
            </div>

            {/* NO */}
            <div className="bg-card border border-red-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                To nie jest dla Ciebie
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Szukasz magicznej pigułki na produktywność</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Chcesz jednego hacka, który wszystko zmieni</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Nie jesteś gotowy na niewygodne pytania</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Wolisz inspirację niż wdrożenie</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Nie masz czasu na pracę domową (kartka + ołówek)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Kto prowadzi?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/ludwik-siadlak-profile.png" 
                alt="Ludwik C. Siadlak"
                className="rounded-2xl w-full shadow-lg"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-2 text-foreground">Ludwik C. Siadlak</h3>
              <p className="text-xl text-[#2563eb] mb-6">Przewodnik</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Przez 10 lat hakowałem produktywność. Przeczytałem każdą książkę z półki "self-help". 
                  Przetestowałem każdą aplikację. Osiągnąłem wszystkie cele.
                </p>
                <p>
                  I odkryłem, że produktywność to nie jest cel. To narzędzie.
                </p>
                <p className="font-semibold text-foreground">
                  Prawdziwe pytanie to: czy rąbiesz właściwy las?
                </p>
                <p>
                  Od 2018 prowadzę społeczność Lifehackerzy (100+ aktywnych Lifehackerów). 
                  Codziennie o 12:34 odpowiadam na pytania podczas Daily Coachingu. 
                  Pomagam profesjonalistom przejść od "jak być bardziej produktywnym" 
                  do "nad czym powinienem w ogóle pracować".
                </p>
                <p className="font-semibold text-foreground">
                  To wyzwanie to esencja tej pracy. 4 dni. Zero lukrowania. Same niewygodne pytania.
                </p>
              </div>

              <Link to="/about" className="inline-block mt-6 text-[#2563eb] hover:underline font-semibold">
                → Więcej o mnie: siadlak.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2563eb]/10 to-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border-2 border-[#2563eb] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground text-center">
              Bonus dla uczestników wyzwania
            </h3>
            
            <p className="text-xl font-semibold text-center mb-6 text-foreground">
              Kurs "7 Technik Produktywności, które natychmiast podnoszą efektywność"
            </p>

            <div className="text-center mb-6">
              <p className="text-muted-foreground line-through mb-2">Normalna cena: 497 zł</p>
              <p className="text-3xl font-bold text-[#2563eb] mb-2">
                Dla uczestników wyzwania: 77 zł
              </p>
              <p className="text-sm text-muted-foreground">(przez 48h po zapisie)</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-center">
              7 konkretnych narzędzi, które podbiją Twoją produktywność. 
              To jak jedna frytka przed posiłkiem - smaczna, skuteczna, ale nie nakarmi Cię całkowicie.
            </p>

            <p className="text-sm text-center text-muted-foreground mt-6">
              Pełny system (pełny posiłek) - w kursie "Hakowanie Produktywności", który prezentuję w dniu 4.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Najczęstsze pytania
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Czy to naprawdę za darmo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tak. Zero kosztów. Wyzwanie jest darmowe. W dniu 4 przedstawię płatny kurs, 
                ale udział w wyzwaniu nie zobowiązuje do niczego.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Co jeśli nie mogę być na żywo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nagrania zostają dostępne dla wszystkich zapisanych. Ale interakcja na żywo jest 
                najważniejsza - szczególnie w dniu 4 (live coaching).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Czy to kolejny kurs o Pomodoro i GTD?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nie. To nie jest o technikach. To o fundamentach. Najpierw wybieramy właściwy las, 
                potem ostrzymy siekierę.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Dla kogo to NIE jest?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Dla osób szukających quick fix. Dla osób, które nie są gotowe skonfrontować się z 
                pytaniem "czy to naprawdę moje cele?". Dla osób bez 60 minut dziennie przez 4 dni.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Jak wygląda techniczne setup?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Potrzebujesz: 1) Konto Discord (za darmo), 2) Link dostaniesz w mailu po zapisie, 
                3) Instrukcja wideo: "Jak dołączyć" w pierwszym mailu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Co po wyzwaniu?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Zależy od Ciebie. Możesz wdrożyć narzędzia samodzielnie. Możesz dołączyć do kursu 
                "Hakowanie Produktywności" (8 tygodni, daily coaching, społeczność). Możesz nic nie robić. 
                Żadnych zobowiązań.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Kto jeszcze będzie na wyzwaniu?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Profesjonaliści z różnych branż: IT, biznes, freelancing, zarządzanie. Wiek: 30-45. 
                Wspólny mianownik: wysoka ambicja, poczucie, że coś jest nie tak z obecnym sposobem pracy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2563eb]/20 to-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border-2 border-[#2563eb] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Start: 7 października, 11:30
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              4 dni. 4 godziny razem.<br />
              Jedna szansa, żeby zobaczyć, czy rąbiesz właściwy las.
            </p>

            <div className="mb-8">
              <SignupForm />
            </div>

            <div className="bg-muted/50 rounded-lg p-6 text-left">
              <p className="font-semibold text-foreground mb-3">Zapisani otrzymają:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Link do Discord (4.10, piątek)</li>
                <li>• Instrukcję techniczną (wideo)</li>
                <li>• Reminder na 24h przed startem</li>
                <li>• Materiały przygotowawcze (kartka z ćwiczeniami)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Masz pytania? Napisz:{' '}
            <a href="mailto:ludwikc@siadlak.email" className="text-[#2563eb] hover:underline">
              ludwikc@siadlak.email
            </a>
          </p>
          
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/legal/privacy" className="text-muted-foreground hover:text-[#2563eb]">
              Polityka prywatności
            </Link>
            <Link to="/legal/terms" className="text-muted-foreground hover:text-[#2563eb]">
              Regulamin
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Ludwik C. Siadlak. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </Layout>
  );
}
