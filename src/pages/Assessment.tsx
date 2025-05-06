
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Zap, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import Hero from '@/components/sections/Hero';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Imię jest wymagane' }),
  email: z.string().email({ message: 'Podaj prawidłowy adres email' }),
});

type FormValues = z.infer<typeof formSchema>;

const Assessment = () => {
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
      title: 'Formularz wysłany',
      description: 'Sprawdź swoją skrzynkę email, aby rozpocząć assessment.'
    });
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  const webinarPromises = [
    "Odkryjesz 3 kluczowe blokady psychologiczne, które powstrzymują specjalistów przed rozwinięciem skrzydeł",
    "Poznasz fundamentalną różnicę między pracą techniczną a pracą z klientami - i dlaczego większość ekspertów nigdy tego nie rozumie",
    "Nauczysz się, jak zamienić swoją wiedzę w produkt, który ludzie będą chcieli kupić bez zgadywania",
    "Zrozumiesz, dlaczego większość profesjonalistów nie potrafi zakomunikować swojej wartości, i jak Ty możesz to zmienić w ciągu 48 godzin"
  ];

  return (
    <Layout>
      <Hero 
        title="Kompas równowagi: Odkryj swój potencjał przywódczy"
        subtitle="10-minutowa ocena, która zidentyfikuje Twoje mocne strony i obszary do rozwoju w kontekście metodologii Black Panther"
        ctaText="Rozpocznij test"
        ctaLink="#assessment"
        imageDescription="Odkryj swój potencjał"
      />
      
      <section id="assessment" className="py-16 bg-white/20 dark:bg-deep-space/20 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Odkryj swoją Energię Czarnej Pantery</h2>
              
              <p className="text-lg mb-6">
              Ten szybki test odsłoni unikalny wzorzec równoważenia ambicji, odpowiedzialności i regeneracji. Zarówno osoby zarządzające kodem, projektami czy ludźmi – jak i te balansujące wielość ról dom-praca – odkryją, gdzie naprawdę tracą siłę oraz jak wprowadzić mikrokorekty, by codziennie działać z lekkością i klarownością.
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold text-xl mb-4">Co otrzymasz po ukończeniu testu:</h3>
                <ul className="space-y-3">
                  {webinarPromises.map((promise, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-neural-violet flex-shrink-0 mt-0.5" />
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Podaj swoje dane, aby otrzymać wyniki</h3>
                
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
                      Rozpocznij test <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                      Twoje dane są bezpieczne. Nie udostępniamy Twoich informacji.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-ascension-pink/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Transformacja zaczyna się od samopoznania
          </h2>
          <p className="text-xl mb-8">
            Nie możesz zmienić tego, czego nie rozumiesz. Ten test to pierwszy krok w Twojej podróży 
            ku odkryciu pełnego potencjału metodologii Black Panther w Twoim życiu zawodowym.
          </p>
          <Button 
            onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neural-violet hover:bg-neural-violet/90 text-white px-6 py-2"
          >
            Rozpocznij test teraz <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Assessment;
