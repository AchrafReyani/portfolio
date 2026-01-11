import {Home} from '@/components/sections/Home/Home';
import {About} from '@/components/sections/About/About';
import {Portfolio} from '@/components/sections/Portfolio/Portfolio';
import {Contact} from '@/components/sections/Contact/Contact';

export default function IndexPage() {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
