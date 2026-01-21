'use client';

import {FaArrowUp} from 'react-icons/fa';
import {buttonPrimaryCircular} from '@/styles/componentStyles';

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
      className={`absolute -top-8 ${buttonPrimaryCircular} cursor-pointer`}
    >
      <FaArrowUp className="text-4xl drop-shadow-md" />
    </a>
  );
}
