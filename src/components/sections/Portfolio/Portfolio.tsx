import {useTranslations} from 'next-intl';
import {sectionTitleClass} from '@/styles/componentStyles';
import {Section} from '@/components/shared/Section';
import {PortfolioProject} from './PortfolioProject';

export function Portfolio() {
  const t = useTranslations('Portfolio');

  const project = {
    name: t('project'),
    image: '/images/project.jpg',
    url: 'https://job-matching-website.vercel.app/',
    githubUrl:
      process.env.NEXT_PUBLIC_MY_GITHUB + '/job-matching-platform',
    bullets: [
      t('portfolio_bulletpoint_1'),
      t('portfolio_bulletpoint_2'),
      t('portfolio_bulletpoint_3'),
      t('portfolio_bulletpoint_4'),
      t('portfolio_bulletpoint_5')
    ]
  };

  return (
    <>
      <div className="bg-bg-light dark:bg-bg-dark w-full flex justify-center py-8">
        <div className="flex items-center justify-center w-full max-w-7xl px-6 md:px-20">
          <div className="flex-1 h-px bg-primary-light dark:bg-primary-dark" />
          <div className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark mx-4" />
          <div className="flex-1 h-px bg-primary-light dark:bg-primary-dark" />
        </div>
      </div>
      <Section
        id="portfolio"
        minHeight="auto"
        className="items-start justify-start"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className={`${sectionTitleClass} mb-12`}>
            {t('title')} 🛠️
          </h2>

          <PortfolioProject project={project} />
        </div>
      </Section>
    </>
  );
}
