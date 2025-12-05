import {useTranslations} from 'next-intl';
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';

export function Portfolio() {
  const t = useTranslations('Portfolio');

  const project = {
    name: t('project'),
    image: '/images/project.jpg',
    url: 'https://job-matching-website.vercel.app/',
    github_url: process.env.NEXT_PUBLIC_MY_GITHUB + '/job-matching-platform'
  };

  const bullets = [
    t('portfolio_bulletpoint_1'),
    t('portfolio_bulletpoint_2'),
    t('portfolio_bulletpoint_3'),
    t('portfolio_bulletpoint_4'),
    t('portfolio_bulletpoint_5')
  ];

  return (
    <section
      id="portfolio"
      className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark px-6 md:px-20 py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-primary-light dark:border-primary-dark inline-block pb-2">
        {t('title')}🛠️
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Image */}
        <div className="relative w-full md:w-1/2 rounded-lg shadow-card-light dark:shadow-card-dark overflow-hidden group">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover aspect-[1899/1045] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-overlay-light dark:bg-overlay-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-text-light dark:text-text-dark text-lg font-semibold flex items-center gap-2">
                {t('image_text')} <FaExternalLinkAlt />
              </span>
            </div>
          </a>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-start w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <ul className="list-disc list-inside text-text-light dark:text-text-dark space-y-1">
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline mt-2"
          >
            <FaGithub className="mr-2" />
            {t('github_text')}
          </a>
        </div>
      </div>
    </section>
  );
}
