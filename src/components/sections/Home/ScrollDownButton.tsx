'use client';

import {ScrollToButton} from '@/components/shared/ScrollToButton';

export function ScrollDownButton() {
  return (
    <ScrollToButton
      targetId="about"
      position="bottom-10"
      direction="down"
      ariaLabel="Scroll to About section"
    />
  );
}
