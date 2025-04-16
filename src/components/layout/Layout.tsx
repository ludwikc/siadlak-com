
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // Determine if we're on a page where we want to show a background image
  const isHomePage = location.pathname === '/' || location.pathname === '/pl';
  const isAboutPage = location.pathname.includes('/about') || location.pathname.includes('/pl/about');
  const isContactPage = location.pathname.includes('/contact') || location.pathname.includes('/pl/contact');
  
  let backgroundImage;
  
  if (isHomePage) {
    backgroundImage = "url('/lovable-uploads/a18d3a53-efac-4710-bc40-e08a762736d6.png')";
  } else if (isAboutPage) {
    backgroundImage = "url('/lovable-uploads/6a666d3f-a6aa-4b45-be62-5c98cae66781.png')";
  } else if (isContactPage) {
    backgroundImage = "url('/lovable-uploads/b04d6ee7-6d24-48de-8173-5ea5d03b5fa1.png')";
  }

  // Hero gradient background for home page
  const heroGradientStyle = isHomePage ? {
    background: 'linear-gradient(135deg, rgba(74, 41, 217, 0.9), rgba(124, 0, 255, 0.8))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-luminous-white dark:bg-subtle-background-gradient">
        <Header />
        <main className="flex-grow pt-16">
          {isHomePage && (
            <div 
              className="w-full bg-cover bg-center" 
              style={heroGradientStyle}
            >
              {children}
            </div>
          )}
          
          {!isHomePage && (
            <>
              {backgroundImage && (
                <div 
                  className="fixed inset-0 z-[-1] opacity-5 dark:opacity-10" 
                  style={{ 
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    pointerEvents: 'none'
                  }}
                />
              )}
              {children}
            </>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
