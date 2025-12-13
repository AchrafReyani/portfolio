'use client';

import {FaArrowUp} from 'react-icons/fa';

export function FooterScrollTop() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <a
      href="#home"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        absolute -top-8 rounded-full p-3
        bg-primary-light text-text-light
        dark:bg-primary-dark dark:text-text-dark
        hover:bg-accent-light dark:hover:bg-accent-dark
        hover:text-text-light dark:hover:text-text-dark
        transition-colors cursor-pointer
        flex items-center justify-center
      "
    >
      <FaArrowUp className="text-4xl drop-shadow-md" />
    </a>
  );
}
