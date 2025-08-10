import { useTranslations } from "next-intl";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <div className="bg-gray-900 w-full text-white">
      <section
        id="contact"
        className="min-h-screen flex flex-col md:flex-row items-start justify-center px-6 md:px-20 py-16 max-w-7xl mx-auto gap-12"
      >
        {/* Left: Contact Form */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                {t("subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                {t("message")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition"
            >
              {t("submit")}
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 w-full space-y-8">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-indigo-500 text-2xl" />
            <span>{t("my_address")}</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-indigo-500 text-2xl" />
            <a
              href="mailto:achrafreyani99@gmail.com"
              className="hover:underline"
            >
              achrafreyani99@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-indigo-500 text-2xl" />
            <a
              href="https://github.com/achrafreyani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/achrafreyani
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
