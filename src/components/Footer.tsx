"use client";

import { FaArrowUp } from "react-icons/fa";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white w-full relative h-16 flex justify-center items-center">
      <a
        href="#home"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-8 rounded-full p-3 bg-indigo-600 text-gray-800 hover:bg-gray-800 hover:text-indigo-600 transition-colors cursor-pointer flex items-center justify-center"
      >
        <FaArrowUp className="text-4xl drop-shadow-md" />
      </a>
    </footer>
  );
}
