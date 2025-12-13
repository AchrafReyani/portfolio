import {useTranslations} from 'next-intl';
import {Reggae_One} from 'next/font/google';

const reggaeOne = Reggae_One({subsets: ['latin'], weight: '400'});

type Props = {
  onClick: () => void;
};

export function HeaderLogo({onClick}: Props) {
  const t = useTranslations('Header');

  return (
    <div
      onClick={onClick}
      className={`${reggaeOne.className} text-3xl font-bold cursor-pointer text-text-light dark:text-text-dark`}
    >
      {t('name')}
    </div>
  );
}
