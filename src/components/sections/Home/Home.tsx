import { HomeBackgroundContainer } from './HomeBackgroundContainer';
import { HomeHero } from './HomeHero';
import { ScrollDownButton } from './ScrollDownButton';

export function Home() {
  return (
    <HomeBackgroundContainer
      hero={<HomeHero />}
      scrollButton={<ScrollDownButton />}
    />
  );
}
