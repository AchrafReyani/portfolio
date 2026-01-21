import {Section} from '@/components/shared/Section';
import {SectionDivider} from '@/components/shared/SectionDivider';
import {ContactContainer} from './ContactContainer';

export function Contact() {
  return (
    <>
      <SectionDivider />
      <Section id="contact" minHeight="auto" className="items-start justify-start">
        <ContactContainer />
      </Section>
    </>
  );
}
