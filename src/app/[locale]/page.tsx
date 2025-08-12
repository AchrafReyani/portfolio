import Header from '@/components/Header';
import { Home } from '@/components/Home';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import { Locale } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import Head from 'next/head';


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
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}
