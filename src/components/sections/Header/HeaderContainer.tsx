'use client';

import {useEffect, useState} from 'react';
import {HeaderLogo} from './HeaderLogo';
import {DesktopNav} from './DesktopNav';
import {HeaderActions} from './HeaderActions';
import {MobileMenu} from './MobileMenu';
import {sections} from './sections';

export function HeaderContainer() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = 'home';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
    setMobileOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <HeaderLogo onClick={() => scrollToSection('home')} />

        <DesktopNav
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        <HeaderActions />

        <MobileMenu
          open={mobileOpen}
          setOpen={setMobileOpen}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      </div>
    </div>
  );
}
