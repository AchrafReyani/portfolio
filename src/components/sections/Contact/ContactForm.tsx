import React from 'react';
import {useTranslations} from 'next-intl';
import {AttachmentInput} from './AttachmentInput';
import {sectionTitleClass, formLabelClass, formInputClass, formTextareaClass, textPrimaryClass} from '@/styles/componentStyles';

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
      <h2 className={`${sectionTitleClass} mb-8`}>
        {t('title')}🤝
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className={formLabelClass}
          >
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={formInputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={formLabelClass}
          >
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={formInputClass}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className={formLabelClass}
          >
            {t('subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={formInputClass}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className={formLabelClass}
          >
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={formTextareaClass}
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
        <p className={`mt-4 text-center text-sm ${textPrimaryClass}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}
