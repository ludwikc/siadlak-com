
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-deep-space/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta">
                Ludwik Siadlak
              </h3>
            </Link>
            <p className="text-subtle-slate dark:text-silver-mist/70 max-w-xs">
              Guiding professionals at the intersection of technology and human potential.
            </p>
            <div className="flex space-x-4 text-subtle-slate">
              <a href="https://instagram.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/mental-elevator" className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  Mental Elevator
                </Link>
              </li>
              <li>
                <Link to="/courses/hakowanie-produktywnosci" className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  Hakowanie Produktywności
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">Newsletter</h4>
            <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
              Subscribe for insights at the intersection of technology and human potential.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="py-2 px-3 rounded-l-md border-y border-l border-border bg-luminous-white dark:bg-deep-space w-full"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit"
                className="bg-ascension-pink hover:bg-luminal-magenta text-white p-2 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-subtle-slate dark:text-silver-mist/70 text-sm">
            &copy; {currentYear} Ludwik Siadlak. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
