"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export function Contact() {
  const t = useTranslations("Contact");

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFeedback(t("success_message") || "Message sent successfully!");
        form.reset();
      } else {
        const data = await res.json();
        setFeedback(data.message || t("error_message") || "Failed to send message.");
      }
    } catch (error) {
      setFeedback(t("error_message") || "Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 w-full text-white">
      <section
        id="contact"
        className="min-h-screen flex flex-col md:flex-row items-start justify-center px-6 md:px-20 py-16 max-w-7xl mx-auto gap-12"
      >
        {/* Left: Contact Form */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
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
                name="email"
                required
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
                name="subject"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? t("sending") || "Sending..." : t("submit")}
            </button>
          </form>

          {feedback && (
            <p className="mt-4 text-center text-sm">
              {feedback}
            </p>
          )}
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
