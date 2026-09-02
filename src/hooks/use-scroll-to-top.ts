'use client';

import { useCallback } from 'react';
import { useTheme } from '@/components/organisms/theme';

export const useScrollToTop = () => {
  const { theme } = useTheme();

  const handleScrollToTop = useCallback(
    (options?: ScrollToOptions) => {
      window.scrollTo(
        options ?? {
          top: 0,
          left: 0,
          behavior: theme.key === 'wireframe' ? 'instant' : 'smooth'
        }
      );
    },
    [theme.key]
  );

  return { scrollToTop: handleScrollToTop };
};
