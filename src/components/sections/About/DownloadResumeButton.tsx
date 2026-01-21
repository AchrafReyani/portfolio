import { useTranslations, useLocale } from 'next-intl';
import { Download } from 'lucide-react';
import { ActionLinkButton } from '@/components/shared/ActionLinkButton';
import { isResumeAvailable } from '@/lib/availableResumes';

export function DownloadResumeButton() {
  const t = useTranslations('Resume');
  const locale = useLocale();

  // Don't show button if resume is not available for this locale
  if (!isResumeAvailable(locale)) {
    return null;
  }

  const resumePdf = `/docs/resume-${locale}.pdf`;

  return (
    <ActionLinkButton
      href={resumePdf}
      icon={<Download className="w-5 h-5" />}
      label={t('download_link')}
      description={t('download_link_description')}
    />
  );
}
