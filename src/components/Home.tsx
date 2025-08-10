"use client";

import { useTranslations } from "next-intl";

export function Home() {
  const t = useTranslations('Home');

  // Smooth scroll helper
  const scrollToAbout = (e: { preventDefault: () => void; }) => {
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
      {/* Overlay to darken the background a bit */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('introduction')}</h1>
        <p className="text-lg sm:text-xl">{t('bottom_text')}</p>
      </div>

      {/* Scroll button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 z-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition"
        aria-label="Scroll to About section"
      >
        ↓
      </button>
    </section>
  );
}
