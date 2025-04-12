
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import LanguageSwitcher from '../layout/LanguageSwitcher';

export default function HeaderControls() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={toggleTheme} 
        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <LanguageSwitcher />
    </div>
  );
}
