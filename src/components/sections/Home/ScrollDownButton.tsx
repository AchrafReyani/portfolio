'use client';

import {FaArrowUp} from 'react-icons/fa';

export function ScrollDownButton() {
  const scrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <button
      onClick={scrollToAbout}
      className="
        absolute bottom-10 z-10 rounded-full p-3
        bg-primary-light text-text-light
        dark:bg-primary-dark dark:text-text-dark
        hover:bg-accent-light dark:hover:bg-accent-dark
        hover:text-text-light dark:hover:text-text-dark
        transition flex items-center justify-center
      "
      aria-label="Scroll to About section"
    >
      <FaArrowUp className="transform rotate-180 text-4xl" />
    </button>
  );
}
