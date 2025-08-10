import { useTranslations } from "next-intl";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Portfolio() {
  const t = useTranslations("Portfolio");

  const projects = [
    {
      name: t("project_1"),
      image: "/images/project1.jpg",
      url: "https://github.com/achrafreyani/project1",
    },
    {
      name: t("project_2"),
      image: "/images/project2.jpg",
      url: "https://github.com/achrafreyani/project2",
    },
    {
      name: t("project_3"),
      image: "/images/project3.jpg",
      url: "https://github.com/achrafreyani/project3",
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-[1111px] md:min-h-[600px] bg-gray-100 text-gray-900 px-6 md:px-20 py-16 flex flex-col items-center" //probably a cleaner way to do this
    >
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-indigo-600 inline-block pb-2">
        {t("title")}🛠️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full h-64 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <span className="text-white text-xl font-semibold mb-2">
                {project.name}
              </span>
              <FaExternalLinkAlt className="text-white text-lg" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
