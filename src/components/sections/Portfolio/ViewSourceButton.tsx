import { FaGithub } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { ActionLinkButton } from '@/components/shared/ActionLinkButton';

type Props = {
  githubUrl: string;
};

export function ViewSourceButton({ githubUrl }: Props) {
  const t = useTranslations('Portfolio');

  return (
    <ActionLinkButton
      href={githubUrl}
      icon={<FaGithub className="w-5 h-5" />}
      label={t('github_text')}
    />
  );
}
