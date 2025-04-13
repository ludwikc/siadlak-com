import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Clock, Calendar, Star, BarChart, Globe } from 'lucide-react';
import { bilingualCoursesData } from '../data/courses'; // Import the data structure we created
import { useLanguage } from '../contexts/LanguageContext';

const CourseDetail = () => {
  let { courseSlug } = useParams();
  // Normalize courseSlug: trim whitespace, convert to lowercase, and remove any trailing hyphens.
  if (courseSlug) {
    // Normalize courseSlug: remove diacritics, trim whitespace, convert to lowercase, and remove any trailing hyphens.
    courseSlug = courseSlug.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    courseSlug = courseSlug.trim().toLowerCase().replace(/-+$/, "");
    // Fallback: if exact lookup fails, try finding a key that starts with the normalized slug.
    if (!bilingualCoursesData[courseSlug]) {
      const fallbackKey = Object.keys(bilingualCoursesData).find(key => key.startsWith(courseSlug));
      if (fallbackKey) {
        courseSlug = fallbackKey;
      }
    }
  }
  const { language } = useLanguage();
  
  // If course doesn't exist, redirect to courses page
  if (!courseSlug || !bilingualCoursesData[courseSlug]) {
    return <Navigate to={language === 'en' ? "/courses" : "/pl/courses"} />;
  }
  
  // Get course data for the current language
  const course = bilingualCoursesData[courseSlug][language];

  return (
    <Layout>
    
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {course.featured && (
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white mb-6">
                <Star className="h-5 w-5 inline mr-2" />
                {language === 'en' ? 'Featured Program' : 'Wyróżniony Program'}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {course.title}
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-6 text-silver-mist">
              {course.subtitle}
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90 max-w-3xl">
              {course.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={language === 'en' ? "/contact" : "/pl/contact"}>
                <Button className="bg-ascension-pink hover:bg-luminal-magenta">
                  {language === 'en' ? 'Apply Now' : 'Aplikuj Teraz'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to={language === 'en' ? "/contact" : "/pl/contact"}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  {language === 'en' ? 'Request More Information' : 'Poproś o Więcej Informacji'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Overview */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                {language === 'en' ? 'Program Overview' : 'Przegląd Programu'}
              </h2>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-8">
                {course.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <Clock className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    {language === 'en' ? 'Duration' : 'Czas Trwania'}
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">{course.duration}</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <Users className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    {language === 'en' ? 'Format' : 'Format'}
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">{course.format}</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <BarChart className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    {language === 'en' ? 'Level' : 'Poziom'}
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">{course.level}</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <Calendar className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    {language === 'en' ? 'Start Date' : 'Data Rozpoczęcia'}
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">{course.startDate}</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="px-6 py-3 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-lg">
                  <span className="text-neural-violet dark:text-luminal-magenta font-bold text-xl">
                    {language === 'en' ? 'Investment: ' : 'Inwestycja: '}{course.price}
                  </span>
                </div>
              </div>
            </div>
            
            {/* What You'll Get */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                {language === 'en' ? 'What You\'ll Get' : 'Co Otrzymasz'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 glass-card rounded-lg">
                    <CheckCircle className="h-6 w-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Program Curriculum */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                {language === 'en' ? 'Program Curriculum' : 'Program Kursu'}
              </h2>
              
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="p-4 glass-card rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-neural-violet dark:bg-luminal-magenta text-white flex items-center justify-center mr-3">
                        {item.week !== null ? item.week : index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-deep-charcoal dark:text-silver-mist">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-subtle-slate dark:text-silver-mist/80 ml-11">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Outcomes */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                {language === 'en' ? 'Expected Outcomes' : 'Oczekiwane Rezultaty'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start p-4 glass-card rounded-lg">
                    <CheckCircle className="h-6 w-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              {language === 'en' ? 'What Participants Are Saying' : 'Co Mówią Uczestnicy'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <p className="text-subtle-slate dark:text-silver-mist/90 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <p className="font-bold text-deep-charcoal dark:text-silver-mist">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-subtle-slate dark:text-silver-mist/80">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              {language === 'en' ? 'Frequently Asked Questions' : 'Często Zadawane Pytania'}
            </h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'How is this program delivered?' : 'Jak dostarczany jest ten program?'}
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  {language === 'en' 
                    ? 'This program combines live sessions (via Zoom) with self-paced materials and exercises. All materials are accessible through a private online platform, and recordings of live sessions are available if you can\'t attend in real-time.'
                    : 'Ten program łączy sesje na żywo (przez Zoom) z materiałami i ćwiczeniami we własnym tempie. Wszystkie materiały są dostępne przez prywatną platformę online, a nagrania sesji na żywo są dostępne, jeśli nie możesz uczestniczyć w czasie rzeczywistym.'}
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'What happens after I apply?' : 'Co dzieje się po złożeniu aplikacji?'}
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  {language === 'en'
                    ? 'After applying, you\'ll receive an invitation for a 30-minute fit assessment call. This helps ensure the program aligns with your goals and that you\'ll benefit from the experience. If it\'s a good match, you\'ll receive enrollment details.'
                    : 'Po złożeniu aplikacji otrzymasz zaproszenie na 30-minutową rozmowę oceniającą dopasowanie. To pomaga upewnić się, że program jest zgodny z Twoimi celami i że skorzystasz z doświadczenia. Jeśli to dobry wybór, otrzymasz szczegóły dotyczące zapisów.'}
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'What\'s your refund policy?' : 'Jaka jest polityka zwrotów?'}
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  {language === 'en'
                    ? 'The program comes with a 14-day satisfaction guarantee. If after the first two sessions you feel this isn\'t right for you, you\'ll receive a full refund.'
                    : 'Program objęty jest 14-dniową gwarancją satysfakcji. Jeśli po pierwszych dwóch sesjach poczujesz, że to nie jest dla Ciebie, otrzymasz pełny zwrot.'}
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'How much time will I need to commit?' : 'Ile czasu będę musiał poświęcić?'}
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  {language === 'en'
                    ? 'Plan for 3-5 hours weekly, including live sessions and implementation work. The program is designed for busy professionals, with flexibility in how you schedule the work.'
                    : 'Zaplanuj 3-5 godzin tygodniowo, w tym sesje na żywo i pracę wdrożeniową. Program jest zaprojektowany dla zapracowanych profesjonalistów, z elastycznością w planowaniu pracy.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {language === 'en' 
                ? 'Ready to Transform Your Capabilities?' 
                : 'Gotów Przekształcić Swoje Możliwości?'}
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              {language === 'en'
                ? 'Take the first step toward enhancing your performance and reclaiming your agency in our complex world.'
                : 'Zrób pierwszy krok w kierunku zwiększenia swojej wydajności i odzyskania kontroli w naszym złożonym świecie.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={language === 'en' ? "/contact" : "/pl/contact"}>
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  {language === 'en' ? 'Apply Now' : 'Aplikuj Teraz'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to={language === 'en' ? "/contact" : "/pl/contact"}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  {language === 'en' ? 'Request More Information' : 'Poproś o Więcej Informacji'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
