'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

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
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        { pathname, query: { ...params } },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative inline-block text-gray-700',
        isPending && 'opacity-60 pointer-events-none transition-opacity duration-300'
      )}
      aria-label={label}
    >
      <select
        className="
          appearance-none
          bg-white
          border
          border-gray-300
          rounded-md
          py-2
          pl-3
          pr-8
          text-sm
          font-medium
          text-gray-800
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
          cursor-pointer
        "
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span
        className="
          pointer-events-none
          absolute
          top-1/2
          right-3
          -translate-y-1/2
          w-4
          h-4
          border-l-2
          border-b-2
          border-gray-500
          rotate-45
          "
        aria-hidden="true"
      />
    </label>
  );
}
