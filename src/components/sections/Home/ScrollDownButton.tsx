'use client';

import {FaArrowUp} from 'react-icons/fa';
import {buttonPrimaryCircular} from '@/styles/componentStyles';

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
      className={`absolute bottom-10 z-10 ${buttonPrimaryCircular}`}
      aria-label="Scroll to About section"
    >
      <FaArrowUp className="transform rotate-180 text-4xl" />
    </button>
  );
}
