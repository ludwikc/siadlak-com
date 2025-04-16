
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import LanguageSwitcher from '../layout/LanguageSwitcher';
import { Button } from '../ui/button';

export default function HeaderControls() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-3">
      <Button 
        onClick={toggleTheme} 
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={20} className="text-silver-detail" /> : <Moon size={20} className="text-deep-charcoal" />}
      </Button>
      
      <LanguageSwitcher />
    </div>
  );
}
