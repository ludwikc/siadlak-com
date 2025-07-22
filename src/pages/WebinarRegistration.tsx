

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowRight, Calendar, Clock, User, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Imię jest wymagane' }),
  email: z.string().email({ message: 'Podaj prawidłowy adres email' }),
});

type FormValues = z.infer<typeof formSchema>;

const WebinarRegistration = () => {
  const navigate = useNavigate();
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    // Log form data (in a real app would send to server)
    console.log('Form submitted:', data);
    
    // Show toast notification
    toast({
      title: 'Zapisano na webinar',
      description: 'Sprawdź swoją skrzynkę email, aby uzyskać szczegóły webinaru.'
    });
    
    // Navigate to thank you page
    navigate('/thank-you/webinar');
  };

  const webinarPromises = [
    "Nieuniknioną pułapkę, w którą wpada 87% specjalistów technicznych – i precyzyjną strategię, jak jej uniknąć jeszcze w tym roku",
    "Metodę Black Panther – sprawdzony system transformacji z reaktywnego wykonawcy w suwerennego lidera, który określa warunki współpracy",
    "Trzy kluczowe filary skutecznego wykorzystania AI jako narzędzia wzmacniającego Twój potencjał zamiast zagrożenia dla Twojej przyszłości",
    "Praktyczną technikę, która w 19 minut dziennie radykalnie zwiększa Twoją wydajność i kreatywność bez kompromisów dla zdrowia",
    "Przełomowe podejście do zarządzania energią, które wdrożyłem z ponad 500 profesjonalistami z wynikami przekraczającymi ich oczekiwania"
  ];

  const testimonials = [
    {
      quote: "Ludwik to rzadki przykład eksperta, który łączy głęboką wiedzę techniczną z prawdziwym zrozumieniem ludzkiego potencjału. Jego podejście odmieniło moje myślenie o karierze i technologii.",
      author: "Marcin K., CTO"
    },
    {
      quote: "Po wdrożeniu metodologii Black Panther, którą poznałem na webinarze Ludwika, moja produktywność wzrosła o 40%, a co ważniejsze, odzyskałem kontrolę nad tym, jak i kiedy korzystam z technologii.",
      author: "Anna W., Project Manager"
    },
    {
      quote: "Webinar był momentem zwrotnym w mojej karierze. Z analityka danych stałem się strategicznym doradcą, który teraz zarabia 3x więcej i pracuje 10 godzin tygodniowo mniej.",
      author: "Tomasz P., Data Scientist"
    }
  ];

  const forWhoItems = [
    "Posiadasz zaawansowane umiejętności techniczne, ale Twoja kariera nie odzwierciedla Twojego potencjału",
    "Czujesz, że oddajesz swoją najlepszą energię korporacji, która traktuje Cię jak wymienną część",
    "Masz wrażenie, że technologia zaczyna kontrolować Twoje życie, zamiast być narzędziem do osiągania Twoich celów",
    "Wiesz, że jesteś w stanie osiągnąć więcej, ale brakuje Ci struktury i kierunku"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-neural-violet/20 dark:to-ascension-pink/20">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-3/5">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-neural-violet/30 text-neural-violet mb-4">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-neural-violet"></span>
                <span className="text-sm font-medium">Webinar na żywo</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-neural-violet dark:text-neural-violet-light">
                Jak przejąć kontrolę nad swoją karierą i życiem w erze sztucznej inteligencji
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-ascension-pink dark:text-ascension-pink-light">
                Odkryj 3 kluczowe strategie, które pozwolą Ci stać się suwerennym liderem zamiast wymienialnym trybem w maszynie
              </h2>
              
              <p className="text-lg md:text-xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/80">
                Bezpłatny masterclass z Ludwikiem C. Siadlakiem: Jak wykorzystać energię Czarnej Pantery, 
                aby technologia służyła Tobie, a nie odwrotnie
              </p>
              
              <div className="flex items-center gap-3 mb-8 py-2 px-4 bg-white/20 dark:bg-deep-space/30 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800">
                <Calendar className="h-5 w-5 text-neural-violet" />
                <span className="font-medium">Środa, 20 maja 2025</span>
                <span className="mx-2">|</span>
                <Clock className="h-5 w-5 text-neural-violet" />
                <span className="font-medium">19:00-20:30 (czasu polskiego)</span>
                <span className="mx-2">|</span>
                <span className="text-sm font-bold text-neural-violet">TYLKO TRANSMISJA NA ŻYWO</span>
              </div>
              
              <WebinarCountdown />
            </div>
            
            <div className="w-full lg:w-2/5">
              <div id="registration-form" className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
                <h3 className="text-xl font-semibold mb-6">Zarezerwuj swoje miejsce</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Imię i nazwisko</FormLabel>
                          <FormControl>
                            <Input placeholder="Jan Kowalski" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jan@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-neural-violet hover:bg-neural-violet/90 text-white mt-2"
                    >
                      ZAREZERWUJ MOJE MIEJSCE TERAZ <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                      Liczba miejsc ograniczona do 100 uczestników na żywo
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Host Section */}
      <section className="py-16 bg-white/50 dark:bg-deep-space/50 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img 
                src="/placeholder.svg" 
                alt="Ludwik C. Siadlak" 
                className="rounded-2xl shadow-lg w-full max-w-xs mx-auto"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-neural-violet mr-2" />
                <h3 className="text-lg font-medium">Prowadzi:</h3>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ludwik C. Siadlak</h2>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-neural-violet flex-shrink-0 mt-0.5" />
                  <span>15+ lat doświadczenia jako certyfikowany trener Microsoft</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-neural-violet flex-shrink-0 mt-0.5" />
                  <span>Mentor dla profesjonalistów poszukujących suwerenności zawodowej</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-neural-violet flex-shrink-0 mt-0.5" />
                  <span>Twórca metodologii "Black Panther" transformującej specjalistów IT w liderów</span>
                </li>
              </ul>
              
              <p className="text-lg">
                Przez prawie dwie dekady funkcjonuję na styku technologii i rozwoju ludzkiego potencjału. 
                Moje podejście opiera się na konkretnych działaniach, które przynoszą rzeczywiste rezultaty.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Discover Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Podczas tego ekskluzywnego masterclass odkryjesz:
          </h2>
          
          <div className="grid gap-6 max-w-3xl mx-auto">
            {webinarPromises.map((promise, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <div className="bg-neural-violet text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-medium">{index + 1}</span>
                </div>
                <p className="text-lg">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* For Who Section */}
      <section className="py-16 bg-white/20 dark:bg-deep-space/20 backdrop-blur-sm">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Dla kogo jest ten webinar?
          </h2>
          
          <p className="text-xl mb-8 text-center">
            Ten masterclass jest dla Ciebie, jeśli:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {forWhoItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-white/50 dark:bg-deep-space/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <CheckCircle className="h-6 w-6 text-neural-violet flex-shrink-0 mt-0.5" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Co mówią uczestnicy poprzednich webinarów
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-deep-space/80 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <p className="italic mb-4 text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
                <p className="font-medium text-right">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-ascension-pink/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Zarezerwuj swoje miejsce teraz
          </h2>
          <p className="text-xl mb-8">
            Pamiętaj: to nie jest typowy webinar o produktywności. To fundamentalna zmiana 
            podejścia do swojej roli w świecie zdominowanym przez technologię.
          </p>
          <Button 
            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-6 text-lg"
          >
            TAK, CHCĘ WZIĄĆ UDZIAŁ <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Potwierdzenie i link do webinaru otrzymasz natychmiast po rejestracji
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WebinarRegistration;
