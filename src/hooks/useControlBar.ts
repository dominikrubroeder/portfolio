import React, { useCallback, useEffect, useState } from 'react';
import { ControlBarState } from '@/interfaces';

export const useControlBar = (collapse: boolean) => {
  const [state, setState] = useState<ControlBarState>({
    controlBarVisibility: 'collapsed',
    activeSection: null,
    mobileMenuVisibility: 'invisible'
  });

  useEffect(
    () =>
      setState((prevState) => {
        return {
          activeSection: collapse ? null : prevState.activeSection,
          controlBarVisibility: collapse ? 'collapsed' : 'expanded',
          mobileMenuVisibility: 'invisible'
        };
      }),
    [collapse]
  );

  const scrollIntoView = useCallback(
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
          controlBarVisibility: 'expanded',
          activeSection: targetId,
          mobileMenuVisibility: 'invisible'
        };
      });
    },
    [setState]
  );

  const toggleMobileMenu = () => {
    setState((prevState) => {
      return {
        ...prevState,
        controlBarVisibility: prevState.controlBarVisibility,
        mobileMenuVisibility:
          prevState.mobileMenuVisibility === 'invisible'
            ? 'visible'
            : 'invisible'
      };
    });
  };

  /** Handle active section with Search Params */

  return { state, scrollIntoView, toggleMobileMenu };
};
