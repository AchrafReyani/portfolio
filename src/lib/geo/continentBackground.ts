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

const DEFAULT_CONTINENT: ContinentCode = 'AN';

export function getBackgroundForContinent(
  continent: string | null
): string {
  const key =
    continent && continent in continentBackgroundMap
      ? (continent as ContinentCode)
      : DEFAULT_CONTINENT;

  return continentBackgroundMap[key];
}
