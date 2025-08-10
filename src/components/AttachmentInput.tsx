import React, { useRef } from "react";
import { FaPaperclip } from "react-icons/fa";

interface AttachmentInputProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export function AttachmentInput({ file, setFile }: AttachmentInputProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <label
        htmlFor="attachment"
        className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:text-indigo-400 transition"
      >
        <FaPaperclip className="text-indigo-500" />
        Attachment
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
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <span>
            {file.name} ({Math.round(file.size / 1024)} KB)
          </span>
          <button
            type="button"
            onClick={clearFile}
            className="text-red-500 hover:text-red-700 font-bold"
            aria-label="Remove file"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
