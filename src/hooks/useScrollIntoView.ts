import { useCallback } from 'react';

export const useScrollIntoView = () => {
  const scrollIntoView = useCallback(
    (elementId: string, options?: ScrollIntoViewOptions | undefined) => {
      const element = document.getElementById(elementId);
      const defaultOptions: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'center'
      };

      element?.scrollIntoView(options ?? defaultOptions);
    },
    []
  );

  return { scrollIntoView };
};
