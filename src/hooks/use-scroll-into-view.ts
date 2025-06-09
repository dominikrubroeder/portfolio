import { useCallback } from 'react';

export const useScrollIntoView = () => {
  const scrollIntoView = useCallback(
    ({ id, options }: { id: string; options?: ScrollIntoViewOptions }) => {
      const element = document.getElementById(id);

      element?.scrollIntoView(
        options ?? {
          behavior: 'smooth',
          block: 'start'
        }
      );
    },
    []
  );

  return { scrollIntoView };
};
