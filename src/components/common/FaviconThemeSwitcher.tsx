'use client';

import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function FaviconThemeSwitcher() {
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const linkRef = useRef<HTMLLinkElement | null>(null);

  useEffect(() => {
    if (!resolvedTheme || !locale) return;

    const lang = locale === 'ja' ? 'ja' : 'en';
    const iconHref =
      resolvedTheme === 'dark'
        ? `/favicon-${lang}-dark.ico`
        : `/favicon-${lang}-light.ico`;

    if (!linkRef.current) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      document.head.appendChild(link);
      linkRef.current = link;
    }

    linkRef.current.href = `${iconHref}?v=${lang}-${resolvedTheme}-${Date.now()}`;
  }, [resolvedTheme, locale]);

  return null;
}
