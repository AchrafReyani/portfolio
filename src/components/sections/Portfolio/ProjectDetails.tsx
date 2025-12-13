import {FaGithub} from 'react-icons/fa';
import {useTranslations} from 'next-intl';

type Props = {
  name: string;
  bullets: string[];
  githubUrl: string;
};

export function ProjectDetails({name, bullets, githubUrl}: Props) {
  const t = useTranslations('Portfolio');
  
  return (
    <div className="flex flex-col justify-start w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
      <h3 className="text-2xl font-semibold">{name}</h3>

      <ul className="list-disc list-inside space-y-1">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline mt-2"
      >
        <FaGithub className="mr-2" />
        {t('github_text')}
      </a>
    </div>
  );
}
