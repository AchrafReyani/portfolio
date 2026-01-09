import { headers } from 'next/headers';
import { HomeBackground } from './HomeBackground';
import { getBackgroundForContinent } from '@/lib/geo/continentBackground';

type Props = {
  hero: React.ReactNode;
  scrollButton: React.ReactNode;
};

export async function HomeBackgroundContainer({
  hero,
  scrollButton,
}: Props) {
  const headersList = await headers();
  const continent = headersList.get('x-user-continent');

  const backgroundImage = getBackgroundForContinent(continent);

  return (
    <HomeBackground
      hero={hero}
      scrollButton={scrollButton}
      backgroundImage={backgroundImage}
    />
  );
}
