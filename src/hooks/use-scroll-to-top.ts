'use client';

import { useCallback } from 'react';

export const useScrollToTop = () => {
  const handleScrollToTop = useCallback((options?: ScrollToOptions) => {
    window.scrollTo(options ?? { top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return { scrollToTop: handleScrollToTop };
};
