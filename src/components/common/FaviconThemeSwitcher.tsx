'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function FaviconThemeSwitcher() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const favicon =
      document.querySelector<HTMLLinkElement>('link[rel="icon"]');

    if (!favicon) return;

    const icon =
      resolvedTheme === 'dark'
        ? '/favicon-en-dark.ico'
        : '/favicon-en-light.ico';

    // Cache-busting query string is CRITICAL in production
    favicon.href = `${icon}?v=${resolvedTheme}-${Date.now()}`;
  }, [resolvedTheme]);

  return null;
}
