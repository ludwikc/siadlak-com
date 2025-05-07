
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, CheckCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';
import WebinarTestimonials from '@/components/webinar/WebinarTestimonials';

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Imię jest wymagane' }),
  email: z.string().email({ message: 'Podaj prawidłowy adres email' }),
});

type FormValues = z.infer<typeof formSchema>;

const Webinar = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Define webinar date options - using 24h format for Polish audience
  const webinarOptions = [
    { id: '1', date: '12 czerwca 2025', day: 'Czwartek', time: '18:00', timezone: 'CEST (Warszawa)' },
    { id: '2', date: '14 czerwca 2025', day: 'Sobota', time: '11:00', timezone: 'CEST (Warszawa)' },
  ];

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    if (!selectedTime) {
      toast({
        title: "Wybierz termin",
        description: "Proszę wybrać dogodny termin webinaru",
        variant: "destructive"
      });
      return;
    }

    // Handle form submission (in a real app this would send data to a server)
    console.log("Form submitted:", { ...data, selectedTime });
    
    // Navigate to thank you page
    toast({
      title: "Zapisano pomyślnie!",
      description: "Sprawdź swoją skrzynkę email, aby uzyskać szczegóły webinaru."
    });
    
    navigate('/thank-you/webinar');
  };

  // Bullet points of what attendees will learn
  const webinarPromises = [
    "Odkryjesz 3 kluczowe blokady psychologiczne, które powstrzymują programistów przed założeniem własnej działalności - nawet tych z 10+ latami doświadczenia",
    "Poznasz fundamentalną różnicę między pracą z kodem a pracą z klientami - i dlaczego większość programistów nigdy tego nie rozumie",
    "Nauczysz się, jak zamienić swoją techniczną wiedzę w produkt, który ludzie będą chcieli kupić - bez zgadywania i straty czasu",
    "Zrozumiesz, dlaczego większość programistów nie potrafi zakomunikować swojej wartości, i jak Ty możesz to zmienić w ciągu 48 godzin",
    "Dowiesz się, jak zaplanować swoje pierwsze 90 dni transformacji od pracownika do przedsiębiorcy - z jasnym planem działania"
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-luminous-white to-secondary dark:from-deep-space dark:to-neural-violet/30 min-h-screen">
        {/* Event Header Section with Countdown */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-neural-violet/30 text-neural-violet dark:text-neural-violet-light mb-4">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-neural-violet"></span>
                  <span className="text-sm font-medium">Webinar na żywo</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-neural-violet dark:from-neural-violet to-ascension-pink dark:to-ascension-pink bg-clip-text text-transparent">
                  Wiesz, że już w dwie godziny możesz rozbudzić w sobie Czarną Panterę?
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/80">
                  Specjalny webinar transformacyjny dla programistów, którzy chcą przejąć kontrolę nad swoją karierą i zbudować coś własnego.
                </p>
                
                <WebinarCountdown />
              </div>
              
              <div className="w-full lg:w-2/5">
                <div className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-neural-violet" />
                      <h3 className="font-semibold">Wybierz termin</h3>
                    </div>
                    <span className="px-2 py-1 text-xs bg-neural-violet/10 text-neural-violet rounded-md">Darmowy</span>
                  </div>
                  
                  {/* Date Selection */}
                  <div className="space-y-3 mb-6">
                    {webinarOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedTime(option.id)}
                        className={`w-full text-left p-4 border rounded-lg transition-all ${
                          selectedTime === option.id
                            ? 'border-neural-violet bg-neural-violet/5'
                            : 'border-gray-200 dark:border-gray-700 hover:border-neural-violet/50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{option.day}, {option.date}</p>
                            <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{option.time} {option.timezone}</span>
                            </div>
                          </div>
                          {selectedTime === option.id && (
                            <div className="h-6 w-6 rounded-full bg-neural-violet/20 flex items-center justify-center">
                              <CheckCheck className="h-4 w-4 text-neural-violet" />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Registration Form */}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Imię</FormLabel>
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
                        className="w-full bg-neural-violet hover:bg-neural-violet/90 text-white"
                      >
                        Zarezerwuj miejsce
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                        Twoje dane są bezpieczne. Nie udostępniamy Twoich informacji.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Host Credentials Section */}
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Twój gospodarz: Ludwik C. Siadlak</h2>
                <p className="text-lg mb-4">
                  Przez prawie dwie dekady funkcjonuję na styku technologii i rozwoju ludzkiego potencjału. 
                  Pomogłem dziesiątkom programistów i specjalistów IT przejść od korporacyjnego burnoutu 
                  do sukcesu w ich własnym biznesie, wykorzystując moją metodologię Black Panther.
                </p>
                <p className="text-lg">
                  Nie mówię o teorii, ale o praktyce - Moje podejście opiera się na konkretnych działaniach, 
                  które przynoszą rzeczywiste rezultaty. To, co odróżnia mnie od innych mentorów, to 
                  połączenie głębokiej znajomości technologii z prawdziwym zrozumieniem biznesu.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Webinar Promise Section */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Co odkryjesz podczas tego webinaru?
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
            
            <div className="mt-12 text-center">
              <p className="text-xl font-medium mb-4">Miejsca ograniczone do 100 uczestników</p>
              <Button 
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-6 text-lg"
              >
                Zarezerwuj swoje miejsce teraz
              </Button>
            </div>
          </div>
        </section>
        
        {/* Social Proof */}
        <WebinarTestimonials />
        
        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-ascension-pink/20">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Transformacja zaczyna się od decyzji. Nie od kolejnego kursu.
            </h2>
            <p className="text-xl mb-8">
              Dołącz do mnie na tym wyjątkowym webinarze i poznaj pierwszy krok do przejęcia kontroli nad swoją karierą i życiem.
            </p>
            <Button 
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-6 text-lg"
            >
              Zarezerwuj swoje miejsce teraz
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Webinar;
