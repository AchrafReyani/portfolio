import {useTranslations} from 'next-intl';
import {Section} from '@/components/sections/About/Section';
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
    <Section id="portfolio">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-primary-light dark:border-primary-dark inline-block pb-2">
          {t('title')} 🛠️
        </h2>

        <PortfolioProject project={project} />
      </div>
    </Section>
  );
}
