export type ContinentCode =
  | 'NA'
  | 'SA'
  | 'EU'
  | 'AF'
  | 'AS'
  | 'OC'
  | 'AN';

const continentBackgroundMap: Record<ContinentCode, string> = {
  NA: '/images/continents/north-america.jpg',
  SA: '/images/continents/south-america.jpg',
  EU: '/images/continents/europe.jpg',
  AF: '/images/continents/africa.jpg',
  AS: '/images/continents/asia.jpg',
  OC: '/images/continents/oceania.jpg',
  AN: '/images/continents/global.jpg',
};

const fallbackBackground = '/images/continents/global.jpg';

export function getBackgroundForContinent(
  continent: string | null
): string {
  if (!continent) return fallbackBackground;

  return (
    continentBackgroundMap[continent as ContinentCode] ??
    fallbackBackground
  );
}
