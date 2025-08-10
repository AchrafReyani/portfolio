import TestComp from '@/components/TestComp';
import { Locale } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function IndexPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
    <TestComp/>
    </>
  );
}
