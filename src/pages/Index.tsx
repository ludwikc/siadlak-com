
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import PersonaSection from '../components/sections/PersonaSection';
import TrustElements from '../components/sections/TrustElements';
import Newsletter from '../components/sections/Newsletter';
import CTASection from '../components/sections/CTASection';
import { Brain, Rocket, Cog, CircleCheck, Lightbulb, Users } from 'lucide-react';

const Index = () => {
  // How It Works steps
  const steps = [
    {
      title: "Take Back Control",
      description: "First, we identify where technology has become your master. Through proven methods, you'll regain command over your digital environment and stop feeling overwhelmed."
    },
    {
      title: "Build Systems That Serve You",
      description: "Next, we create systems that make technology work for you, not against you. These systems respect your natural strengths while amplifying your capabilities."
    },
    {
      title: "Maintain Control Long-Term",
      description: "Finally, you'll master implementation methods that last, allowing you to stay in command of your technology without sacrificing what makes you human."
    }
  ];
  
  // Personas for "Who It's For" section
  const personas = [
    {
      title: "Technical Experts Moving Into Leadership",
      description: "You've mastered the technical side, but now face the challenge of leading others. You need strategies that honor both your technical mind and your growing leadership role.",
      icon: <Brain size={24} />
    },
    {
      title: "Professionals Feeling Controlled By Technology",
      description: "You're skilled in your field but find yourself increasingly ruled by digital tools meant to help you. You're looking for ways to make these tools serve you instead.",
      icon: <Cog size={24} />
    },
    {
      title: "Entrepreneurs Balancing Growth with Wellbeing",
      description: "You're building something meaningful but struggle with constant digital demands. You want approaches that support your business without damaging your health and relationships.",
      icon: <Rocket size={24} />
    }
  ];
  
  // Trust elements testimonials
  const testimonials = [
    {
      quote: "Working with Ludwik changed everything about how I use technology. I went from feeling constantly behind to making AI tools work for me. The results have transformed both my work and personal life.",
      name: "Marketing Director",
      title: "Technology Sector"
    },
    {
      quote: "What makes this approach different is how it puts humans first while using technology smartly. I've increased my output by 40% while actually spending less time on screens. This isn't about more tech—it's about smarter control.",
      name: "Senior Project Manager",
      title: "Finance Industry"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Own your power in a digital world"
        subtitle="Stop being controlled by technology. Start commanding it for your growth."
        ctaText="Take the Power Test"
        ctaLink="/assessment"
        secondaryCtaText="Get Weekly Insights"
        secondaryCtaLink="/newsletter"
        imageDescription="Professional looking confident and in control while working with technology, showing mastery not overwhelm"
      />
      
      <div className="py-12 md:py-16 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-deep-charcoal dark:text-silver-mist">
              Technology should work for you, not against you. I help professionals transform from feeling overwhelmed to being in control of both their digital tools and their lives.
            </p>
          </div>
        </div>
      </div>
      
      <HowItWorks 
        title="Three Steps to Digital Mastery"
        steps={steps}
      />
      
      <PersonaSection 
        title="Is This For You?"
        personas={personas}
        callout="If you recognize yourself here, you're in the right place. The methods I share are specifically designed for those who refuse to be controlled by the very technology meant to help them succeed."
        ctaText="Find Your Path"
        ctaLink="/contact"
      />
      
      <TrustElements 
        title="Why This Approach Works"
        communityStats="Join over 1,500+ professionals who have taken back control of their digital lives"
        testimonials={testimonials}
        credentialsSummary="Combining 15+ years of Microsoft certification knowledge with deep understanding of human potential to create a uniquely balanced approach"
      />
      
      <Newsletter />
      
      <CTASection 
        title="Ready to Command Your Digital Life?"
        description="Take the first step toward transforming your relationship with technology."
        buttonText="Book a Discovery Call"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Index;
