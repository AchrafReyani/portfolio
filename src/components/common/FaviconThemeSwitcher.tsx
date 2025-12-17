'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function FaviconThemeSwitcher() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const iconHref =
      resolvedTheme === 'dark'
        ? '/favicon-en-dark.ico'
        : '/favicon-en-light.ico';

    // Remove all existing favicons
    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach(el => el.remove());

    // Create a fresh link element
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = `${iconHref}?v=${resolvedTheme}-${Date.now()}`;

    document.head.appendChild(link);
  }, [resolvedTheme]);

  return null;
}
