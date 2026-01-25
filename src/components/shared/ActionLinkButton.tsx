import { ReactNode } from 'react';
import { buttonPrimaryLarge } from '@/styles/componentStyles';

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
        className={buttonPrimaryLarge}
      >
        <span className="inline-flex items-center gap-2">
          {icon}
          {label}
        </span>
      </a>

      {description && (
        <p className="mt-2 text-muted-light dark:text-muted-dark text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
