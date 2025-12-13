import React, {useRef} from 'react';
import {FaPaperclip} from 'react-icons/fa';
import {useTranslations} from 'next-intl';

interface AttachmentInputProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export function AttachmentInput({file, setFile}: AttachmentInputProps) {
  const t = useTranslations('Contact');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <label
        htmlFor="attachment"
        className="
          flex items-center gap-2 text-sm font-medium cursor-pointer 
          text-primary-light dark:text-primary-dark 
          hover:text-accent-light dark:hover:text-accent-dark 
          transition
        "
      >
        <FaPaperclip className="text-primary-light dark:text-primary-dark" />
        {t('attachment')}
      </label>

      <input
        type="file"
        id="attachment"
        name="attachment"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {file && (
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-light dark:text-muted-dark">
          <span>
            {file.name} ({Math.round(file.size / 1024)} KB)
          </span>
          <button
            type="button"
            onClick={clearFile}
            className="
              text-accent-light dark:text-accent-dark 
              hover:text-accent-dark dark:hover:text-accent-light 
              font-bold
            "
            aria-label="Remove file"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
