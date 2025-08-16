"use client";

import React, { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { Reggae_One } from "next/font/google";

const reggaeOne = Reggae_One({ subsets: ["latin"], weight: "400" });
const sections: ("home" | "about" | "portfolio" | "contact")[] = [
  "home",
  "about",
  "portfolio",
  "contact",
];

export default function Header() {
  const t = useTranslations("Header");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div
            className={`${reggaeOne.className} text-3xl font-bold cursor-pointer`}
            onClick={() => scrollToSection("home")}
          >
            {t("name")}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition ${
                  activeSection === id
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {t(id)}
              </button>
            ))}
          </nav>

          {/* LocaleSwitcher */}
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>

          {/* Mobile menu button */}
          <MobileMenuButton
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </header>
  );
}

// Mobile menu
interface MobileMenuButtonProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

function MobileMenuButton({ activeSection, scrollToSection }: MobileMenuButtonProps) {
  const [open, setOpen] = useState(false);

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && <MobileMenu setOpen={setOpen} activeSection={activeSection} scrollToSection={scrollToSection} />}
    </>
  );
}

interface MobileMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

function MobileMenu({ setOpen, activeSection, scrollToSection }: MobileMenuProps) {
  const t = useTranslations("Header");

  const handleClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40">
      <ul className="flex flex-col space-y-4 p-4">
        {sections.map((id) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`block w-full text-left transition ${
                activeSection === id
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t(id)}
            </button>
          </li>
        ))}
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
    </nav>
  );
}
