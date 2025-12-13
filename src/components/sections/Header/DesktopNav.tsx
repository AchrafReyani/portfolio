import {useTranslations} from 'next-intl';
import {sections} from './sections';

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
          className={`transition ${
            activeSection === id
              ? 'text-primary-light dark:text-primary-dark font-bold'
              : 'text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark'
          }`}
        >
          {t(id)}
        </button>
      ))}
    </nav>
  );
}
