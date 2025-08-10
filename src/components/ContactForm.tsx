import React from "react";
import { useTranslations } from "next-intl";
import { AttachmentInput } from "./AttachmentInput";

interface ContactFormProps {
  t: ReturnType<typeof useTranslations>;
  loading: boolean;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  feedback: string | null;
}

export function ContactForm({
  t,
  loading,
  file,
  setFile,
  handleSubmit,
  feedback,
}: ContactFormProps) {
  return (
    <div className="flex-1 w-full">
      <h2 className="text-4xl font-bold mb-8">
        {t("title")}🤝
      </h2>
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
          />
        </div>

        {/* Attachment Input */}
        <AttachmentInput file={file} setFile={setFile} />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? t("sending") || "Sending..." : t("submit")}
        </button>
      </form>

      {feedback && (
        <p className="mt-4 text-center text-sm">{feedback}</p>
      )}
    </div>
  );
}
