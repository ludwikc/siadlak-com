
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
        className="p-2 rounded-full bg-midnight-black/10 dark:bg-luminous-white/10 hover:bg-midnight-black/20 dark:hover:bg-luminous-white/20 text-deep-charcoal dark:text-silver-detail transition-colors"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={20} className="text-silver-detail" /> : <Moon size={20} className="text-deep-charcoal" />}
      </button>
      
      <LanguageSwitcher />
    </div>
  );
}
