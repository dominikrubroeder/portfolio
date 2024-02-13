import React, { useCallback, useEffect, useState } from 'react';

export const useControlBar = (collapse: boolean) => {
  const [state, setState] = useState<{
    controlBar: 'collapsed' | 'expanded';
    activeTab: string | null;
    mobileMenu: 'visible' | 'invisible';
  }>({ controlBar: 'collapsed', activeTab: null, mobileMenu: 'invisible' });

  useEffect(
    () =>
      setState((prevState) => {
        return {
          activeTab: collapse ? null : prevState.activeTab,
          controlBar: collapse ? 'collapsed' : 'expanded',
          mobileMenu: 'invisible'
        };
      }),
    [collapse]
  );

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      // first prevent the default behavior
      e.preventDefault();

      // get the element by id and use scrollIntoView
      const element = document.getElementById(targetId);

      element?.scrollIntoView({
        behavior: 'smooth'
      });

      setState(() => {
        return {
          controlBar: 'expanded',
          activeTab: targetId,
          mobileMenu: 'invisible'
        };
      });
    },
    [setState]
  );

  /** Handle active section with Search Params */

  return { state, setState, handleScroll };
};
