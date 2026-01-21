import { useTranslations } from 'next-intl';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  const t = useTranslations('Header');
  const tFooter = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  const portfolioRepoUrl = `${process.env.NEXT_PUBLIC_MY_GITHUB}/portfolio`;

  return (
    <footer className="bg-bg-light dark:bg-bg-dark w-full border-t border-secondary-light dark:border-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Name and Copyright */}
        <div className="text-sm text-text-light dark:text-text-dark">
          <p className="font-semibold">{t('name')}</p>
          <p className="text-xs text-muted-light dark:text-muted-dark">
            © {currentYear}. {tFooter('all_rights_reserved')}.
          </p>
        </div>

        {/* Center: GitHub Link */}
        <a
          href={portfolioRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition"
          aria-label="GitHub Repository"
        >
          <FaGithub className="text-lg" />
          <span className="text-sm">{tFooter('portfolio')}</span>
        </a>
      </div>
    </footer>
  );
}
