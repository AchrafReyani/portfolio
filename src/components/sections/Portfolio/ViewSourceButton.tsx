import { FaGithub } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

type Props = {
  githubUrl: string;
};

export function ViewSourceButton({ githubUrl }: Props) {
  const t = useTranslations('Portfolio');

  return (
    <div className="flex flex-col items-center">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2 px-6 py-3 
          bg-primary-light text-text-light 
          dark:bg-primary-dark dark:text-text-dark 
          font-semibold rounded-md shadow-md 
          hover:bg-accent-light dark:hover:bg-accent-dark 
          transition
        "
      >
        <FaGithub className="w-5 h-5" />
        {t('github_text')}
      </a>
    </div>
  );
}
