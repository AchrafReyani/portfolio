import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {routing} from '@/i18n/routing';
import {ThemeProvider} from 'next-themes';
import FaviconThemeSwitcher from '@/components/common/FaviconThemeSwitcher';

export const dynamic = 'force-dynamic';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

const inter = Inter({subsets: ['latin']});

const domain = 'https://reyani.dev';
const imageUrl = `${domain}/images/preview-image.jpg`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: [{url: '/favicon-en-light.ico', type: 'image/x-icon', sizes: 'any'}]
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: domain,
      siteName: t('title'),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Preview Image Alt Text'
        }
      ],
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [imageUrl]
    }
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider>
            {children}
            <FaviconThemeSwitcher />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
