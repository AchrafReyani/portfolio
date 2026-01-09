import { headers } from 'next/headers';

export async function resolveContinent(): Promise<string | null> {
  const h = await headers();

  // 1️⃣ Dev override via query param (safe + deterministic)
  if (process.env.NODE_ENV === 'development') {
    const url = h.get('x-url');
    if (url) {
      const continent = new URL(url).searchParams.get('continent');
      if (continent) {
        console.log('[geo] dev override continent:', continent);
        return continent;
      }
    }
  }

  // 2️⃣ Middleware / Vercel geo
  const continent = h.get('x-user-continent');
  if (continent) {
    return continent;
  }

  // 3️⃣ Fallback
  return null;
}
