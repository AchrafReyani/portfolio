import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface ContactInfoProps {
  myAddress: string;
  email: string;
  githubUrl: string;
}

export function ContactInfo({ myAddress, email, githubUrl }: ContactInfoProps) {
  const t = useTranslations("Contact");
  const githubDisplay = githubUrl.replace(/^https?:\/\//, "");
  const [copied, setCopied] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setShowNotification(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setShowNotification(false), 1800);
    const reset = setTimeout(() => setCopied(false), 2300);
    return () => {
      clearTimeout(timer);
      clearTimeout(reset);
    };
  }, [copied]);

  return (
    <div className="flex-1 w-full space-y-8 text-text-light dark:text-text-dark">
      {/* Address */}
      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="text-primary-light dark:text-primary-dark text-2xl" />
        <span>{myAddress}</span>
      </div>

      {/* Email with copy-to-clipboard */}
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-primary-light dark:text-primary-dark text-2xl" />
        <div className="flex items-center gap-2 relative">
          <button
            onClick={handleCopyEmail}
            className="hover:underline focus:outline-none text-left"
          >
            {email}
          </button>
          {copied && (
            <span
              className={`
                px-2 py-1 text-sm
                bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark
                rounded shadow-md transition-opacity duration-200
                ${showNotification ? "opacity-100" : "opacity-0 duration-500"}
              `}
            >
              {t('copied')}
            </span>
          )}
        </div>
      </div>

      {/* Github */}
      <div className="flex items-center gap-4">
        <FaGithub className="text-primary-light dark:text-primary-dark text-2xl" />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {githubDisplay}
        </a>
      </div>
    </div>
  );
}
