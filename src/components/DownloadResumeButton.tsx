import { useTranslations, useLocale } from "next-intl";
import { Download } from "lucide-react";

export function DownloadResumeButton() {
  const t = useTranslations("Resume");
  const locale = useLocale();

  // Build the PDF path dynamically
  const resumePdf = `/docs/resume-${locale}.pdf`;

  return (
    <div className="flex flex-col items-center">
      <a
        href={resumePdf}
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
        <Download className="w-5 h-5" />
        {t("download_link")}
      </a>
      <p className="mt-2 text-muted-light dark:text-muted-dark text-sm">
        {t("download_link_description")}
      </p>
    </div>
  );
}
