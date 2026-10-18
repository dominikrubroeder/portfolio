'use client';

import { useCallback } from 'react';

import { useThemeSetting } from '@/components/feature/theme';

export const useScrollToTop = () => {
  const { isEnabled } = useThemeSetting('themeAnimationSettings');

  const handleScrollToTop = useCallback(
    (options?: ScrollToOptions) => {
      window.scrollTo(
        options ?? {
          top: 0,
          left: 0,
          behavior: isEnabled ? 'smooth' : 'instant'
        }
      );
    },
    [isEnabled]
  );

  return { scrollToTop: handleScrollToTop };
};
