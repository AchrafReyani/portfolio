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
    <Head>
        <title>My Portfolio – Achraf Reyani</title>
        <meta name="description" content="Welcome to my Full-stack developer portfolio." />

        {/* Open Graph */}
        <meta property="og:title" content="My Portfolio – Achraf Reyani" />
        <meta property="og:description" content="Welcome to my Full-stack developer portfolio." />
        <meta property="og:image" content="https://portfolio-rho-gold-24.vercel.app/images/preview-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-rho-gold-24.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://portfolio-rho-gold-24.vercel.app/images/preview-image.jpg" />
        <meta name="twitter:title" content="My Portfolio – Achraf Reyani" />
        <meta name="twitter:description" content="Welcome to my Full-stack developer portfolio." />
    </Head>

    <Header />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}
