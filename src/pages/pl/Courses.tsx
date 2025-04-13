import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Calendar, Star, CheckCircle } from 'lucide-react';
import { bilingualCoursesData } from '../../data/courses';

// Generate the courses array from the bilingual data for Polish version
const coursesData = Object.keys(bilingualCoursesData).map((key) => ({
  id: key,
  ...bilingualCoursesData[key].pl
}));

const PolishCourses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformuj swoje możliwości
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Ustrukturyzowane programy zaprojektowane, aby wzmocnić Twoją wydajność umysłową, produktywność i obecność przywódczą.
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses Overview */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {coursesData.map((course) => (
              <div 
                key={course.id}
                className={`mb-12 glass-card rounded-xl overflow-hidden ${
                  course.featured 
                    ? 'border-2 border-ascension-pink dark:border-luminal-magenta' 
                    : 'border border-border'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Course Image/Gradient */}
                  <div className="lg:col-span-1 h-48 lg:h-auto bg-gradient-to-br from-neural-violet to-ascension-pink flex items-center justify-center">
                    {course.featured && (
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Star className="h-6 w-6 text-white inline mr-2" />
                        <span className="text-white font-medium">Wyróżniony program</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Course Details */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    {course.featured && (
                      <div className="inline-block bg-ascension-pink/10 dark:bg-ascension-pink/20 text-ascension-pink dark:text-luminal-magenta px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Wyróżniony program
                      </div>
                    )}
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 text-deep-charcoal dark:text-silver-mist">
                      {course.title}
                    </h2>
                    
                    <p className="text-neural-violet dark:text-luminal-magenta font-medium mb-4">
                      {course.subtitle}
                    </p>
                    
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                      {course.description}
                    </p>
                    
                    {/* Course Quick Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.duration}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.format}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.level}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.startDate}</span>
                      </div>
                    </div>
                    
                    {/* Course Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-3 text-deep-charcoal dark:text-silver-mist">
                        Co otrzymasz:
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                            <span className="text-subtle-slate dark:text-silver-mist/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={`/pl/courses/${course.id}`}>
                        <Button className="bg-neural-violet hover:bg-ascension-pink">
                          Dowiedz się więcej
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      
                      <Link to="/pl/contact">
                        <Button variant="outline">
                          Zapytaj o szczegóły
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Programs Section */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Programy na zamówienie
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Potrzebujesz czegoś bardziej dopasowanego do swoich specyficznych potrzeb? Oferuję programy zaprojektowane na zamówienie dla osób indywidualnych i organizacji z wyjątkowymi wyzwaniami i celami.
            </p>
            
            <Link to="/pl/contact">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                Zapytaj o programy na zamówienie
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Często zadawane pytania
            </h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Skąd mam wiedzieć, który program jest dla mnie odpowiedni?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Każdy program jest zaprojektowany dla konkretnych potrzeb i celów. Polecam zarezerwowanie darmowej rozmowy Discovery, podczas której omówimy Twoją sytuację i określimy najlepszą drogę.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Jaka jest polityka zwrotów?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Wszystkie programy objęte są 14-dniową gwarancją satysfakcji. Jeśli po pierwszych dwóch sesjach nie będziesz zadowolony, otrzymasz pełny zwrot kosztów.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Czy oferujesz raty płatności?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Tak, elastyczne opcje płatności są dostępne dla wszystkich programów. Szczegóły podawane są podczas procesu rekrutacji lub mogą być omówione podczas rozmowy Discovery.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Ile czasu tygodniowo powinienem przeznaczyć na te programy?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Większość programów wymaga 3-5 godzin tygodniowo, łącznie z sesjami na żywo i pracą wdrożeniową. Dokładny nakład czasu zostanie jasno określony przed zapisaniem się.
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
              Gotów podnieść swój potencjał?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Zrób pierwszy krok w kierunku transformacji swoich możliwości i odzyskania wpływu w naszym cyfrowym świecie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pl/contact">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Umów rozmowę Discovery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/pl/newsletter">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Zapisz się do newslettera
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishCourses;
