import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const geo = (request as NextRequest & {
    geo?: { continent?: string };
  }).geo;

  const continent = geo?.continent;

  if (continent) {
    response.headers.set('x-user-continent', continent);
  }

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
