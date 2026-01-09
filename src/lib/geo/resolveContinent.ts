import { headers } from 'next/headers';

export async function resolveContinent(): Promise<string | null> {
  const h = await headers();

  // 1️⃣ Dev override via query param (safe + deterministic)
  // This allows testing different continents locally by adding ?continent=EU to the URL
  if (process.env.NODE_ENV === 'development') {
    const url = h.get('x-request-url');
    if (url) {
      try {
        const urlObj = new URL(url);
        const continent = urlObj.searchParams.get('continent');
        if (continent) {
          console.log('[geo] dev override continent:', continent);
          return continent.toUpperCase();
        }
      } catch (e) {
        // Invalid URL, continue to next check
        console.warn('[geo] Failed to parse URL:', e);
      }
    }
  }

  // 2️⃣ Middleware / Vercel geo
  // This works in production on Vercel Edge Runtime
  const continent = h.get('x-user-continent');
  if (continent) {
    return continent;
  }

  // 3️⃣ Fallback
  return null;
}
