import { useTranslations, useLocale } from "next-intl";

export function Resume() {
  const t = useTranslations("Resume");
  const locale = useLocale();

  // Dynamically build PDF path based on locale
  const resumePdf = `/docs/resume-${locale}.pdf`;

  return (
    <section
      id="resume"
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 md:px-20 py-16 max-w-7xl mx-auto"
    >
      {/* Education */}
      <div className="w-full max-w-4xl mb-16">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-600 inline-block pb-2">
          {t("education")}
        </h2>

        <div>
          <h3 className="text-2xl font-semibold">{t("university_title")}</h3>
          <p className="text-lg font-medium text-indigo-700">{t("university_name")}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{t("university_description")}</p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-600 inline-block pb-2">
          {t("work")}
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold">{t("job_1_name")}</h3>
          <p className="mt-2 text-gray-700">{t("job_1_description")}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{t("job_2_name")}</h3>
          <p className="mt-2 text-gray-700">{t("job_2_description")}</p>
        </div>
      </div>

      {/* Download Resume Link */}
      <div className="mt-16">
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition"
        >
          {t("download_link")}
        </a>
        <p className="mt-2 text-gray-600 text-sm">{t("download_link_description")}</p>
      </div>
    </section>
  );
}
