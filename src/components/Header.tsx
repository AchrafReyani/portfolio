"use client";

import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <div className="text-xl font-bold cursor-pointer" onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
            {t("name")}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">
              {t('home')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              {t('about')}
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">
              {t('portfolio')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              {t('contact')}
            </a>
          </nav>

          {/* LocaleSwitcher */}
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>

          {/* Mobile menu button */}
          <MobileMenuButton />
        </div>
      </div>
    </header>
  )
}

// Mobile menu button and menu logic
function MobileMenuButton() {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && <MobileMenu setOpen={setOpen} />}
    </>
  );
}

interface MobileMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ setOpen }: MobileMenuProps) {
  const t = useTranslations('Header');

  // Smooth scroll and close menu on click
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40">
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <a href="#about" onClick={e => handleClick(e, '#about')} className="block text-gray-700 hover:text-blue-600">
            {t('about')}
          </a>
        </li>
        <li>
          <a href="#resume" onClick={e => handleClick(e, '#resume')} className="block text-gray-700 hover:text-blue-600">
            {t('resume')}
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={e => handleClick(e, '#portfolio')} className="block text-gray-700 hover:text-blue-600">
            {t('portfolio')}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={e => handleClick(e, '#contact')} className="block text-gray-700 hover:text-blue-600">
            {t('contact')}
          </a>
        </li>
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
    </nav>
  );
}
