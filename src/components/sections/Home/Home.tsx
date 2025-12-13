import {HomeBackground} from './HomeBackground';
import {HomeHero} from './HomeHero';
import {ScrollDownButton} from './ScrollDownButton';

export function Home() {
  return (
    <HomeBackground
      hero={<HomeHero />}
      scrollButton={<ScrollDownButton />}
    />
  );
}
