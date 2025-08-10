import { useTranslations } from "next-intl";
import { DownloadResumeButton } from "./DownloadResumeButton";

export function About() {
  const t = useTranslations("About");

  return (
    <div className="bg-gray-900 w-full">
      <section
        id="about"
        className="min-h-screen text-white flex flex-col md:flex-row items-center px-6 md:px-20 py-16 max-w-7xl mx-auto"
      >
        {/* Image - hidden on mobile, visible on md+ */}
        <div className="hidden md:flex md:justify-center md:items-center md:w-1/3">
          <img
            src="/images/about.png"
            alt="My face"
            className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
            style={{ flexShrink: 0 }}
          />
        </div>

        {/* Text content */}
        <div className="md:w-2/3 mt-8 md:mt-0 md:pl-12 text-center md:text-left max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
          <p className="text-lg leading-relaxed mb-8">{t("description")}</p>

          {/* Download Resume Button */}
          <DownloadResumeButton />
        </div>
      </section>
    </div>
  );
}
