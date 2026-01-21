import { Section } from '@/components/shared/Section';
import { AboutImage } from './AboutImage';
import {AboutContent} from './AboutContent';

export function About() {
  return (
    <Section id="about" minHeight="auto" className="items-start justify-start">
      <AboutImage />
      <AboutContent />
    </Section>
  );
}
