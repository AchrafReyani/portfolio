import {Section} from '@/components/shared/Section';
import {ContactContainer} from './ContactContainer';

export function Contact() {
  return (
    <Section id="contact" minHeight="auto" className="items-start justify-start">
      <ContactContainer />
    </Section>
  );
}
