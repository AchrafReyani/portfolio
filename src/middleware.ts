import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Pass the full URL for dev override support
  const url = request.url;
  response.headers.set('x-request-url', url);

  // Get geo information (only available on Vercel Edge Runtime in production)
  // Vercel provides geo data in request.geo object
  // Try accessing it directly first, then with type assertion
  let continent: string | undefined;
  
  // Method 1: Direct access (works on Vercel)
  if ('geo' in request && request.geo) {
    continent = (request.geo as { continent?: string }).continent;
  }
  
  // Method 2: Type assertion fallback
  if (!continent) {
    const geo = (request as NextRequest & {
      geo?: { continent?: string };
    }).geo;
    continent = geo?.continent;
  }

  // Method 3: Check Vercel-specific headers as fallback
  // Vercel also provides country code in headers
  if (!continent) {
    const country = request.headers.get('x-vercel-ip-country') || 
                    request.headers.get('cf-ipcountry');
    if (country) {
      // Pass country to resolveContinent which will map it to continent
      response.headers.set('x-vercel-ip-country', country);
    }
  }

  // Log for debugging (only in production to avoid cluttering dev logs)
  if (process.env.NODE_ENV === 'production') {
    if (continent) {
      console.log('[middleware] Detected continent:', continent);
    } else {
      // Log when geo is not available in production for debugging
      console.warn('[middleware] No continent from geo object. Request URL:', url);
      console.warn('[middleware] Geo available:', 'geo' in request);
      console.warn('[middleware] Geo object:', JSON.stringify((request as any).geo));
      console.warn('[middleware] Vercel country header:', request.headers.get('x-vercel-ip-country'));
    }
  }

  if (continent) {
    response.headers.set('x-user-continent', continent);
  }

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
