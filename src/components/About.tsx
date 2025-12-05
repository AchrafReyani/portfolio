import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {DownloadResumeButton} from './DownloadResumeButton';

export function About() {
  const t = useTranslations('About');

  return (
    <div className="bg-bg-light dark:bg-bg-dark w-full">
      <section
        id="about"
        className="min-h-screen text-text-light dark:text-text-dark flex flex-col md:flex-row items-center px-6 md:px-20 py-16 max-w-7xl mx-auto"
      >
        {/* Image - hidden on mobile, visible on md+ */}
        <div className="hidden md:flex md:justify-center md:items-center md:w-1/3">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-text-light dark:border-text-dark shadow-lg flex-shrink-0">
            <Image
              src="/images/about.png"
              alt="My face"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="md:w-2/3 mt-8 md:mt-0 md:pl-12 text-center md:text-left max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">{t('title')}🙋</h2>
          <p className="text-lg leading-relaxed mb-8">{t('description')}</p>

          {/* Download Resume Button */}
          <DownloadResumeButton />
        </div>
      </section>
    </div>
  );
}
