import {MetadataRoute} from 'next';
import {Locale} from 'next-intl';
import {host} from '@/config';
import {routing} from '@/i18n/routing';
import {getPathname} from '@/i18n/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  return getEntries('/');
}

function getEntries(href: Parameters<typeof getPathname>[0]['href']) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      )
    }
  }));
}

function getUrl(href: Parameters<typeof getPathname>[0]['href'], locale: Locale) {
  const pathname = getPathname({locale, href});
  return host + pathname;
}
