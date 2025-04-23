
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const approachPoints = [
    "Technology should serve you, not the other way around",
    "Your human capabilities are irreplaceable and must be protected",
    "The right systems let you command technology while staying human",
    "Balance is not about using less technology, but about being in control of it"
  ];

  const credentials = [
    "15+ years as a Microsoft Certified Trainer",
    "Trained teams across Fortune 500 companies and military organizations",
    "Creator of the Hackerzy community with over 1,500 active members",
    "Developer of the Digital Command Method used by professionals worldwide"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neural-violet to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Ludwik
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              I help professionals command technology, not serve it
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg">
                  For over 15 years, I've stood at the intersection of cutting-edge technology and human performance. With expertise from both worlds, I guide professionals to take back control of their digital lives without sacrificing what makes them uniquely human.
                </p>
                
                <p className="text-lg">
                  My journey began as a Microsoft Certified Trainer, where I saw firsthand how technology could either empower or overwhelm. While others focused solely on technical skills, I recognized that the missing piece was teaching people how to maintain their human edge while leveraging digital tools.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-neural-violet hover:bg-ascension-pink text-silver-mist">
                    Schedule a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for profile image */}
                <div className="bg-gradient-to-br from-neural-violet to-ascension-pink h-full w-full flex items-center justify-center">
                  <span className="text-white text-xl font-medium">Ludwik Siadlak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              My approach is simple but powerful
            </h2>
            
            <div className="space-y-6">
              {approachPoints.map((point, index) => (
                <div key={index} className="flex glass-card p-5 rounded-xl bg-luminous-white dark:bg-deep-space">
                  <div className="mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <p className="text-deep-charcoal dark:text-silver-mist text-lg">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl text-deep-charcoal dark:text-silver-mist">
                What sets my work apart is the focus on keeping you in command. I don't just teach technical skills or mindfulness separately—I show you how to integrate both for true digital mastery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Credentials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Experience that delivers results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="glass-card p-6 rounded-xl bg-luminous-white dark:bg-deep-space">
                  <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                    <Award className="text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <p className="text-deep-charcoal dark:text-silver-mist">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to take back control of your digital life?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Start with my weekly insights or book a Discovery Call.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/newsletter">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Get Weekly Insights
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
