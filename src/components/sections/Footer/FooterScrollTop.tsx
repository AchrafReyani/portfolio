'use client';

import {ScrollToButton} from '@/components/shared/ScrollToButton';

export function FooterScrollTop() {
  return (
    <ScrollToButton
      targetId="home"
      position="-top-6 right-4"
      direction="up"
      dropShadow
      ariaLabel="Back to top"
    />
  );
}
