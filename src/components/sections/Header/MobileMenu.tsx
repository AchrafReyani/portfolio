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

  const navItemClass = (active?: boolean) =>
    `block w-full text-left transition ${
      active
        ? 'font-bold text-primary-light dark:text-primary-dark'
        : 'text-text-light hover:text-primary-light dark:text-text-dark dark:hover:text-primary-dark'
    }`;

  return (
    <>
      {/* Hamburger */}
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

      {/* Menu */}
      {open && (
        <nav className="absolute left-0 top-16 z-40 w-full bg-bg-light shadow-md dark:bg-bg-dark md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            {/* Home page: section navigation */}
            {isHomePage &&
              sections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className={navItemClass(activeSection === id)}
                  >
                    {t(id)}
                  </button>
                </li>
              ))}

            {/* Non-home pages: back to home (TEXT STYLE, NOT A BUTTON) */}
            {!isHomePage && (
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={navItemClass()}
                >
                  {t('back_to_home')}
                </Link>
              </li>
            )}

            {/* Global actions */}
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
