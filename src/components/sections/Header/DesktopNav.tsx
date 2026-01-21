import {useTranslations} from 'next-intl';
import {sections, navItemBaseClass, navItemActiveClass} from './sections';

type Props = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

export function DesktopNav({activeSection, onNavigate}: Props) {
  const t = useTranslations('Header');

  return (
    <nav className="hidden md:flex space-x-8">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={activeSection === id ? navItemActiveClass : navItemBaseClass}
        >
          {t(id)}
        </button>
      ))}
    </nav>
  );
}
