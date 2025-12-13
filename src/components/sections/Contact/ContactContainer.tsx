'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {ContactForm} from './ContactForm';
import {ContactInfo} from './ContactInfo';

export function ContactContainer() {
  const t = useTranslations('Contact');

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (file) {
      formData.append('attachment', file);
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        setFeedback(t('success_message') || 'Message sent successfully!');
        form.reset();
        setFile(null);
      } else {
        const data = await res.json();
        setFeedback(
          data.message || t('error_message') || 'Failed to send message.'
        );
      }
    } catch {
      setFeedback(t('error_message') || 'Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full">
      <ContactForm
        t={t}
        loading={loading}
        file={file}
        setFile={setFile}
        handleSubmit={handleSubmit}
        feedback={feedback}
      />

      <ContactInfo
        myAddress={t('my_address')}
        email={process.env.NEXT_PUBLIC_MY_EMAIL || ''}
        githubUrl={process.env.NEXT_PUBLIC_MY_GITHUB || ''}
      />
    </div>
  );
}
