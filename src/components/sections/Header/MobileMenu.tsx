'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';
import {sections} from './sections';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeSection: string;
  onNavigate: (id: string) => void;
  isHomePage: boolean;
};

export function MobileMenu({
  open,
  setOpen,
  activeSection,
  onNavigate,
  isHomePage
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
          className="h-6 w-6 text-text-light dark:text-text-dark"
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
        <nav className="absolute left-0 top-16 z-40 w-full bg-bg-light shadow-md dark:bg-bg-dark md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            {isHomePage &&
              sections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className={`block w-full text-left transition ${
                      activeSection === id
                        ? 'font-bold text-primary-light dark:text-primary-dark'
                        : 'text-text-light hover:text-primary-light dark:text-text-dark dark:hover:text-primary-dark'
                    }`}
                  >
                    {t(id)}
                  </button>
                </li>
              ))}

            {!isHomePage && (
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="
                    block rounded-lg bg-primary-light px-4 py-2 text-center
                    font-medium text-white shadow-card-light
                    dark:bg-primary-dark dark:shadow-card-dark
                  "
                >
                  Back to home
                </Link>
              </li>
            )}

            <li className="pt-2">
              <LocaleSwitcher />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
