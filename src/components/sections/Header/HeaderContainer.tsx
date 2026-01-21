'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import Link from 'next/link';

import {HeaderLogo} from './HeaderLogo';
import {DesktopNav} from './DesktopNav';
import {HeaderActions} from './HeaderActions';
import {MobileMenu} from './MobileMenu';
import {sections} from './sections';

export function HeaderContainer() {
  const pathname = usePathname();
  const t = useTranslations('Header');

  const isHomePage = pathname.split('/').length === 2;

  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

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
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
    setMobileOpen(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <HeaderLogo
          onClick={() => {
            if (isHomePage) scrollToSection('home');
          }}
        />

        <div className="hidden md:flex items-center gap-6">
          {isHomePage ? (
            <DesktopNav
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />
          ) : (
            <Link
              href="/"
              className="transition text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
            >
              {t('back_to_home')}
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          <HeaderActions />

          <MobileMenu
            open={mobileOpen}
            setOpen={setMobileOpen}
            activeSection={activeSection}
            onNavigate={scrollToSection}
            isHomePage={isHomePage}
          />
        </div>
      </div>
    </div>
  );
}
