import React from 'react';
import {useTranslations} from 'next-intl';
import {AttachmentInput} from './AttachmentInput';

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
  feedback
}: ContactFormProps) {
  return (
    <div className="flex-1 w-full">
      <h2 className="text-4xl font-bold mb-8 text-text-light dark:text-text-dark border-b-4 border-primary-light dark:border-primary-dark inline-block pb-2">
        {t('title')}🤝
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
          >
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="
              w-full px-4 py-2 rounded-md
              bg-secondary-light border border-muted-light text-text-light
              dark:bg-secondary-dark dark:border-muted-dark dark:text-text-dark
              focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
            "
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
          >
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="
              w-full px-4 py-2 rounded-md
              bg-secondary-light border border-muted-light text-text-light
              dark:bg-secondary-dark dark:border-muted-dark dark:text-text-dark
              focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
            "
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
          >
            {t('subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="
              w-full px-4 py-2 rounded-md
              bg-secondary-light border border-muted-light text-text-light
              dark:bg-secondary-dark dark:border-muted-dark dark:text-text-dark
              focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
          >
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="
              w-full px-4 py-2 rounded-md
              bg-secondary-light border border-muted-light text-text-light
              dark:bg-secondary-dark dark:border-muted-dark dark:text-text-dark
              focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
            "
          />
        </div>

        {/* Attachment Input */}
        <AttachmentInput file={file} setFile={setFile} />

        <button
          type="submit"
          disabled={loading}
          className="
            px-6 py-3
            bg-primary-light text-text-light
            dark:bg-primary-dark dark:text-text-dark
            font-semibold rounded-md shadow-md
            hover:bg-accent-light dark:hover:bg-accent-dark
            transition disabled:opacity-50
          "
        >
          {loading ? t('sending') || 'Sending...' : t('submit')}
        </button>
      </form>

      {feedback && (
        <p className="mt-4 text-center text-sm text-text-light dark:text-text-dark">
          {feedback}
        </p>
      )}
    </div>
  );
}
