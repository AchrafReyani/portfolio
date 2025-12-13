'use client';

import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';
import {sections} from './sections';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeSection: string;
  onNavigate: (id: string) => void;
};

export function MobileMenu({
  open,
  setOpen,
  activeSection,
  onNavigate
}: Props) {
  const t = useTranslations('Header');

  return (
    <>
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-text-light dark:text-text-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-bg-light dark:bg-bg-dark shadow-md z-40">
          <ul className="flex flex-col space-y-4 p-4">
            {sections.map((id) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className={`block w-full text-left transition ${
                    activeSection === id
                      ? 'text-primary-light dark:text-primary-dark font-bold'
                      : 'text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark'
                  }`}
                >
                  {t(id)}
                </button>
              </li>
            ))}
            <li><LocaleSwitcher /></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>
      )}
    </>
  );
}
