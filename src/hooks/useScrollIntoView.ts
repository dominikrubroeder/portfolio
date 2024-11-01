import { useCallback } from 'react';

export const useScrollIntoView = () => {
  const scrollIntoView = useCallback(
    (id: string, options?: ScrollIntoViewOptions) => {
      const element = document.getElementById(id);

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
