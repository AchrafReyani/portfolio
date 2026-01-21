'use client';

import {ScrollToButton} from '@/components/shared/ScrollToButton';

export function ScrollDownButton() {
  return (
    <ScrollToButton
      targetId="about"
      position="relative"
      direction="down"
      ariaLabel="Scroll to About section"
      dropShadow={false}
    />
  );
}
