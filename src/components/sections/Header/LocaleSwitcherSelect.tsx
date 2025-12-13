'use client';

import clsx from 'clsx';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {FaGlobe} from 'react-icons/fa';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <label
      className={clsx(
        'relative inline-block text-text-light dark:text-text-dark',
        isPending &&
          'opacity-60 pointer-events-none transition-opacity duration-300'
      )}
      aria-label={label}
    >
      <select
        className="
          appearance-none
          bg-secondary-light border border-muted-light text-text-light
          dark:bg-secondary-dark dark:border-muted-dark dark:text-text-dark
          rounded-md py-2 pl-3 pr-12 text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light
          dark:focus:ring-primary-dark dark:focus:border-primary-dark
          transition cursor-pointer
        "
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>

      <FaGlobe
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-muted-light dark:text-muted-dark"
      />
    </label>
  );
}
