'use client';

import {FaArrowUp} from 'react-icons/fa';
import {buttonPrimaryCircular} from '@/styles/componentStyles';

type ScrollToButtonProps = {
  targetId: string;
  position: 'bottom-10' | '-top-8';
  direction?: 'up' | 'down';
  dropShadow?: boolean;
  ariaLabel: string;
};

export function ScrollToButton({
  targetId,
  position,
  direction = 'up',
  dropShadow = false,
  ariaLabel
}: ScrollToButtonProps) {
  const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: 'smooth'});
    }
  };

  const isAnchor = position === '-top-8';
  const iconClasses = `text-4xl ${direction === 'down' ? 'transform rotate-180' : ''} ${
    dropShadow ? 'drop-shadow-md' : ''
  }`;

  const commonProps = {
    className: `absolute ${position} ${buttonPrimaryCircular} cursor-pointer`,
    'aria-label': ariaLabel,
    onClick: handleScroll,
  };

  if (isAnchor) {
    return (
      <a href={`#${targetId}`} {...commonProps}>
        <FaArrowUp className={iconClasses} />
      </a>
    );
  }

  return (
    <button {...commonProps}>
      <FaArrowUp className={iconClasses} />
    </button>
  );
}
