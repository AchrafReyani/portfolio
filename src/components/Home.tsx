"use client";

import { useTranslations } from "next-intl";
import { FaArrowUp } from "react-icons/fa";
import React from "react";

function useTypewriter(text: string, durationSec: number, startTyping: boolean) {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    if (!startTyping) {
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    const totalChars = text.length;
    const intervalDuration = (durationSec * 1000) / totalChars;

    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedText(text.slice(0, currentIndex));
      if (currentIndex === totalChars) clearInterval(interval);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [text, durationSec, startTyping]);

  return displayedText;
}

export function Home() {
  const t = useTranslations('Home');

  const introDuration = 2;
  const bottomDuration = 3;

  const [topFinished, setTopFinished] = React.useState(false);
  const typedIntroduction = useTypewriter(t('introduction'), introDuration, true);
  const typedBottomText = useTypewriter(t('bottom_text'), bottomDuration, topFinished);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setTopFinished(true);
    }, introDuration * 1000);

    return () => clearTimeout(timeout);
  }, [introDuration]);

  // Smooth scroll helper
  const scrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white px-4 text-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl bg-black bg-opacity-50 p-6 rounded-md">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{typedIntroduction}🧑‍💻</h1>
        <p className="text-lg sm:text-xl">{typedBottomText}</p>
      </div>

      {/* Scroll button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 z-10 rounded-full p-3 bg-blue-600 hover:bg-white hover:text-blue-600 text-white transition flex items-center justify-center"
        aria-label="Scroll to About section"
      >
        <FaArrowUp className="transform rotate-180 text-4xl" />
      </button>
    </section>
  );
}
