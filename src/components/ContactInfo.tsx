import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

interface ContactInfoProps {
  myAddress: string;
  email: string;
  githubUrl: string;
}

export function ContactInfo({ myAddress, email, githubUrl }: ContactInfoProps) {
  const githubDisplay = githubUrl.replace(/^https?:\/\//, "");

  return (
    <div className="flex-1 w-full space-y-8">
      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="text-indigo-500 text-2xl" />
        <span>{myAddress}</span>
      </div>

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-indigo-500 text-2xl" />
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <FaGithub className="text-indigo-500 text-2xl" />
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
