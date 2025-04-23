
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
