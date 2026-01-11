import Header from '@/components/sections/Header/Header';
import { Home } from '@/components/sections/Home/Home';
import { About } from '@/components/sections/About/About';
import { Portfolio } from '@/components/sections/Portfolio/Portfolio';
import { Contact } from '@/components/sections/Contact/Contact';
import { Footer } from '@/components/sections/Footer/Footer';

export default function IndexPage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
