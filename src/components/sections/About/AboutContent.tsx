import {useTranslations} from 'next-intl';
import { DownloadResumeButton } from '@/components/sections/About/DownloadResumeButton';

export function AboutContent() {
  const t = useTranslations('About');

  return (
    <div className="md:w-2/3 mt-8 md:mt-0 md:pl-12 text-center md:text-left max-w-3xl">
      <h2 className="text-4xl font-bold mb-6">
        {t('title')} 🙋
      </h2>

      <p className="text-lg leading-relaxed mb-8">
        {t('description')}
      </p>

      <DownloadResumeButton />
    </div>
  );
}
