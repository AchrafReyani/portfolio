import {Section} from '@/components/shared/Section';
import {ContactContainer} from './ContactContainer';

export function Contact() {
  return (
    <>
      <div className="bg-bg-light dark:bg-bg-dark w-full flex justify-center py-8">
        <div className="flex items-center justify-center w-full max-w-7xl px-6 md:px-20">
          <div className="flex-1 h-px bg-primary-light dark:bg-primary-dark" />
          <div className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark mx-4" />
          <div className="flex-1 h-px bg-primary-light dark:bg-primary-dark" />
        </div>
      </div>
      <Section id="contact" minHeight="auto" className="items-start justify-start">
        <ContactContainer />
      </Section>
    </>
  );
}
