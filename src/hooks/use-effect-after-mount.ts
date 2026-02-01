import { useEffect, useRef } from 'react';

/** `useEffectAfterMount` allows you to run a regular `useEffect`, but only after the first render. */
export const useEffectAfterMount = (fn: () => void, deps: any[] = []) => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    fn();
  }, deps);
};
