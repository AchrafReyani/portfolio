import Header from '@/components/Header';
import { Home } from '@/components/Home';
import { About } from '@/components/About';
import { Resume } from '@/components/Resume';
import { Portfolio } from '@/components/Portfolio';
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
    <Header />
    <Home />
    <About />
    {/* <Resume /> */}
    <Portfolio />
    </>
  );
}
