import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'dev' | 'dev-light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isDevTheme: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  
  useEffect(() => {
    // Check user preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'dev')) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);
  
  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('dark', 'dev', 'dev-light');
    
    if (theme === 'dark' || theme === 'dev') {
      document.documentElement.classList.add('dark');
    }
    
    if (theme === 'dev') {
      document.documentElement.classList.add('dev');
    } else if (theme === 'dev-light') {
      document.documentElement.classList.add('dev-light');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  function toggleTheme() {
    setTheme(prevTheme => {
      if (prevTheme === 'dev') return 'dev-light';
      if (prevTheme === 'dev-light') return 'dev';
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  }
  
  const isDevTheme = theme === 'dev' || theme === 'dev-light';
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDevTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
