'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Sun, Moon} from 'lucide-react';

export default function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Theme"
      className="
        p-2 rounded-lg transition-colors
        hover:bg-accent-light dark:hover:bg-accent-dark
      "
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
