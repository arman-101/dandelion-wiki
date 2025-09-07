"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md text-text-light hover:bg-bg-tertiary transition-colors border border-border-primary"
        disabled
      >
        <Sun size={20} />
      </button>
    );
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-text-light dark:text-text-light hover:bg-bg-tertiary dark:hover:bg-border-primary hover:text-[--color-accent-pink] transition-colors border border-border-primary dark:border-border-secondary"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
