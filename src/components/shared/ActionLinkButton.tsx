import { ReactNode } from 'react';

type ActionLinkButtonProps = {
  href: string;
  icon: ReactNode;
  label: string;
  description?: string;
};

export function ActionLinkButton({
  href,
  icon,
  label,
  description,
}: ActionLinkButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2 px-6 py-3 
          bg-primary-light text-text-light 
          dark:bg-primary-dark dark:text-text-dark 
          font-semibold rounded-md shadow-md 
          hover:bg-accent-light dark:hover:bg-accent-dark 
          transition
        "
      >
        {icon}
        {label}
      </a>

      {description && (
        <p className="mt-2 text-muted-light dark:text-muted-dark text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
