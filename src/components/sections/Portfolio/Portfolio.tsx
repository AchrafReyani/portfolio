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
    <Section
      id="portfolio"
      className="
        min-h-0
        flex-col
        justify-start
        py-16
      "
    >
      <div className="w-full flex flex-col items-center">
        <h2 className={`${sectionTitleClass} mb-12`}>
          {t('title')} 🛠️
        </h2>

        <PortfolioProject project={project} />
      </div>
    </Section>
  );
}
