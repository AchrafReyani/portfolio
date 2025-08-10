"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function Contact() {
  const t = useTranslations("Contact");

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
      formData.append("attachment", file);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData, // No headers — browser sets them for FormData
      });

      if (res.ok) {
        setFeedback(t("success_message") || "Message sent successfully!");
        form.reset();
        setFile(null);
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
        <ContactForm
          t={t}
          loading={loading}
          file={file}
          setFile={setFile}
          handleSubmit={handleSubmit}
          feedback={feedback}
        />
        <ContactInfo
          myAddress={t("my_address")}
          email="achrafreyani99@gmail.com"
          githubUrl="https://github.com/achrafreyani"
/>

      </section>
    </div>
  );
}
