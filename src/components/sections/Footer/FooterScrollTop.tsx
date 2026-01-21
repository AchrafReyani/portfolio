'use client';

import {ScrollToButton} from '@/components/shared/ScrollToButton';

export function FooterScrollTop() {
  return (
    <ScrollToButton
      targetId="home"
      position="-top-8"
      direction="up"
      dropShadow
      ariaLabel="Back to top"
    />
  );
}
