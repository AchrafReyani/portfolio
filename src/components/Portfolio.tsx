import { useTranslations } from "next-intl";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function Portfolio() {
  const t = useTranslations("Portfolio");

  const project = {
    name: t("project"),
    description: t("project_description"),
    image: "/images/project.jpg",
    url: "https://job-matching-website.vercel.app/",
    github_url: process.env.NEXT_PUBLIC_MY_GITHUB + "/job-matching-platform",
  };

  return (
    <section
      id="portfolio"
      className="min-h-[1111px] md:min-h-[600px] bg-gray-100 text-gray-900 px-6 md:px-20 py-16 flex flex-col items-center" //probably a cleaner way to do this
    >
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-indigo-600 inline-block pb-2">
        {t("title")}🛠️
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
        {/* Image with hover overlay */}
        <div className="relative w-full md:w-2/3 rounded-lg shadow-lg overflow-hidden group">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover aspect-[1899/1045] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold flex items-center gap-2">
                Check it out <FaExternalLinkAlt />
              </span>
            </div>
          </a>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center w-full md:w-1/3 space-y-4">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-gray-800">{project.description}</p>
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline mt-2"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
