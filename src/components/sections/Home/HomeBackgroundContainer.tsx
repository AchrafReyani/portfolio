import { HomeBackground } from './HomeBackground';
import { getBackgroundForContinent } from '@/lib/geo/continentBackground';
import { resolveContinent } from '@/lib/geo/resolveContinent';

type Props = {
  hero: React.ReactNode;
  scrollButton: React.ReactNode;
};

export async function HomeBackgroundContainer({
  hero,
  scrollButton,
}: Props) {
  const continent = await resolveContinent();
  const backgroundImage = getBackgroundForContinent(continent);

  return (
    <HomeBackground
      hero={hero}
      scrollButton={scrollButton}
      backgroundImage={backgroundImage}
    />
  );
}
