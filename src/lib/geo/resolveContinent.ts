import { headers } from 'next/headers';

// Map country codes to continent codes (for Vercel country header fallback)
const countryToContinent: Record<string, string> = {
  // North America
  US: 'NA', CA: 'NA', MX: 'NA', GT: 'NA', BZ: 'NA', SV: 'NA', HN: 'NA', NI: 'NA', CR: 'NA', PA: 'NA',
  CU: 'NA', JM: 'NA', HT: 'NA', DO: 'NA', PR: 'NA', TT: 'NA', BB: 'NA', GD: 'NA', LC: 'NA', VC: 'NA',
  AG: 'NA', KN: 'NA', DM: 'NA', BS: 'NA',
  // South America
  BR: 'SA', AR: 'SA', CO: 'SA', PE: 'SA', VE: 'SA', CL: 'SA', EC: 'SA', BO: 'SA', PY: 'SA', UY: 'SA',
  GY: 'SA', SR: 'SA', GF: 'SA', FK: 'SA',
  // Europe
  GB: 'EU', FR: 'EU', DE: 'EU', IT: 'EU', ES: 'EU', PL: 'EU', NL: 'EU', BE: 'EU', GR: 'EU', PT: 'EU',
  CZ: 'EU', RO: 'EU', HU: 'EU', SE: 'EU', AT: 'EU', CH: 'EU', BG: 'EU', DK: 'EU', FI: 'EU', SK: 'EU',
  IE: 'EU', HR: 'EU', NO: 'EU', RS: 'EU', BA: 'EU', AL: 'EU', LT: 'EU', SI: 'EU', LV: 'EU', EE: 'EU',
  IS: 'EU', LU: 'EU', MT: 'EU', CY: 'EU', AD: 'EU', MC: 'EU', SM: 'EU', VA: 'EU', LI: 'EU', ME: 'EU',
  MK: 'EU', XK: 'EU', MD: 'EU', BY: 'EU', UA: 'EU', RU: 'EU',
  // Asia
  CN: 'AS', IN: 'AS', ID: 'AS', PK: 'AS', BD: 'AS', JP: 'AS', PH: 'AS', VN: 'AS', TH: 'AS', MY: 'AS',
  AF: 'AS', IQ: 'AS', NP: 'AS', YE: 'AS', KP: 'AS', SY: 'AS', KZ: 'AS', KH: 'AS', UZ: 'AS', SA: 'AS',
  MM: 'AS', IR: 'AS', KR: 'AS', IL: 'AS', AE: 'AS', TJ: 'AS', LA: 'AS', JO: 'AS', AZ: 'AS',
  SG: 'AS', LK: 'AS', GE: 'AS', OM: 'AS', AM: 'AS', KW: 'AS', QA: 'AS', MN: 'AS', BH: 'AS', TM: 'AS',
  BN: 'AS', LB: 'AS', MV: 'AS', KG: 'AS', TL: 'AS',
  // Africa
  NG: 'AF', ET: 'AF', EG: 'AF', CD: 'AF', TZ: 'AF', KE: 'AF', UG: 'AF', DZ: 'AF', SD: 'AF', MA: 'AF',
  AO: 'AF', GH: 'AF', MOZ: 'AF', MG: 'AF', CM: 'AF', CI: 'AF', NE: 'AF', BF: 'AF', ML: 'AF', MW: 'AF',
  ZM: 'AF', SN: 'AF', TD: 'AF', SO: 'AF', ZW: 'AF', GN: 'AF', RW: 'AF', BJ: 'AF', TN: 'AF', BI: 'AF',
  SS: 'AF', TG: 'AF', SL: 'AF', LY: 'AF', LR: 'AF', MR: 'AF', ER: 'AF', GA: 'AF', GM: 'AF', GW: 'AF',
  GQ: 'AF', DJ: 'AF', RE: 'AF', MU: 'AF', SC: 'AF', CV: 'AF', ST: 'AF', KM: 'AF', SH: 'AF',
  // Oceania
  AU: 'OC', PG: 'OC', NZ: 'OC', FJ: 'OC', SB: 'OC', VU: 'OC', NC: 'OC', PF: 'OC', WS: 'OC', KI: 'OC',
  FM: 'OC', PW: 'OC', TO: 'OC', MH: 'OC', TV: 'OC', NR: 'OC', CK: 'OC', NU: 'OC', TK: 'OC',
};

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
    if (process.env.NODE_ENV === 'production') {
      console.log('[geo] Using continent from middleware:', continent);
    }
    return continent;
  }

  // 3️⃣ Fallback: Try to get country from Vercel headers and map to continent
  // Vercel provides x-vercel-ip-country header
  const country = h.get('x-vercel-ip-country') || h.get('cf-ipcountry');
  if (country && countryToContinent[country]) {
    const mappedContinent = countryToContinent[country];
    if (process.env.NODE_ENV === 'production') {
      console.log('[geo] Mapped country', country, 'to continent:', mappedContinent);
    }
    return mappedContinent;
  }

  // 4️⃣ Final fallback
  if (process.env.NODE_ENV === 'production') {
    console.warn('[geo] No continent detected. Available headers:', {
      'x-user-continent': h.get('x-user-continent'),
      'x-vercel-ip-country': h.get('x-vercel-ip-country'),
      'cf-ipcountry': h.get('cf-ipcountry'),
    });
  }
  return null;
}
