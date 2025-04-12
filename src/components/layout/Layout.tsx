
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
    backgroundImage = "url('/lovable-uploads/46d76067-5085-4c74-93c9-69c5356b4d78.png')";
  } else if (isAboutPage) {
    backgroundImage = "url('/lovable-uploads/6a666d3f-a6aa-4b45-be62-5c98cae66781.png')";
  } else if (isContactPage) {
    backgroundImage = "url('/lovable-uploads/b04d6ee7-6d24-48de-8173-5ea5d03b5fa1.png')";
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
