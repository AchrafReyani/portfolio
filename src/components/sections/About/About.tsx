import { Section } from '@/components/shared/Section';
import { AboutImage } from './AboutImage';
import {AboutContent} from './AboutContent';

export function About() {
  return (
    <Section id="about">
      <AboutImage />
      <AboutContent />
    </Section>
  );
}
