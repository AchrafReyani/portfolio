'use client';

import {useTranslations} from 'next-intl';
import React from 'react';
import {useTypewriter} from './useTypewriter';

export function HomeHero() {
  const t = useTranslations('Home');

  const introDuration = 2;
  const bottomDuration = 3;

  const [topFinished, setTopFinished] = React.useState(false);

  const typedIntroduction = useTypewriter(
    t('introduction'),
    introDuration,
    true
  );

  const typedBottomText = useTypewriter(
    t('bottom_text'),
    bottomDuration,
    topFinished
  );

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setTopFinished(true);
    }, introDuration * 1000);

    return () => clearTimeout(timeout);
  }, [introDuration]);

  return (
    <div className="p-6 rounded-md max-w-full bg-bg-light/50 dark:bg-bg-dark/50">
      <h1
        className="
          font-bold mb-4
          text-2xl sm:text-4xl md:text-5xl
          text-text-light dark:text-text-dark
          whitespace-normal sm:whitespace-nowrap
        "
      >
        {typedIntroduction} 🧑‍💻
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-text-light dark:text-text-dark whitespace-normal sm:whitespace-nowrap">
        {typedBottomText}
      </p>
    </div>
  );
}
