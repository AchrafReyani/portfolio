import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja', 'nl', 'ar'],
  defaultLocale: 'en'
});
