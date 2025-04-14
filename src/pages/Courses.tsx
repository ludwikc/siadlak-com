import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Calendar, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { bilingualCoursesData } from '../data/courses';

const Courses = () => {
  const { getLocalizedPath } = useLanguage();
  
  // Generate the courses array from the bilingual data for English version
  const coursesData = Object.keys(bilingualCoursesData).map((key) => ({
    id: key,
    ...bilingualCoursesData[key].en
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Capabilities
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Structured programs designed to enhance your mental performance, productivity, and leadership presence.
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
                        <span className="text-white font-medium">Featured Program</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Course Details */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    {course.featured && (
                      <div className="inline-block bg-ascension-pink/10 dark:bg-ascension-pink/20 text-ascension-pink dark:text-luminal-magenta px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Featured Program
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
                        What You'll Get:
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
                      <Link to={`/courses/${course.id}`}>
                        <Button className="bg-neural-violet hover:bg-ascension-pink">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      
                      <Link to="/contact">
                        <Button variant="outline">
                          Request Information
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
              Custom Programs
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Need something more tailored to your specific needs? I offer custom-designed programs
              for individuals and organizations with unique challenges and goals.
            </p>
            
            <Link to="/contact">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                Inquire About Custom Programs
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
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  How do I know which program is right for me?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Each program is designed for specific needs and goals. I recommend booking a free discovery call where we can discuss your situation and identify the best path forward.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  What is your refund policy?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  All programs come with a 14-day satisfaction guarantee. If you're not satisfied with the program after the first two sessions, I'll provide a full refund.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Do you offer payment plans?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Yes, flexible payment options are available for all programs. Details are provided during the enrollment process or can be discussed during your discovery call.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  How much time should I allocate weekly for these programs?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Most programs require 3-5 hours per week, including live sessions and independent work. The exact time commitment varies by program and will be clearly outlined before you enroll.
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
              Ready to Elevate Your Potential?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Take the first step toward transforming your capabilities and reclaiming your agency in our technology-driven world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/newsletter">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Join the Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
