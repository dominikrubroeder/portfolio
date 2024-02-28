import React, { useCallback, useEffect, useState } from 'react';
import { ControlBarState } from '@/interfaces';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export const useControlBar = (collapse: boolean) => {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const [state, setState] = useState<ControlBarState>({
    controlBarVisibility: 'collapsed',
    mobileMenuVisibility: 'invisible'
  });

  const scrollIntoView = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();

      updateSearchParams({ withName: 'section', withValue: targetId });
    },
    [updateSearchParams]
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

  useEffect(
    () =>
      setState({
        controlBarVisibility: collapse ? 'collapsed' : 'expanded',
        mobileMenuVisibility: 'invisible'
      }),
    [collapse]
  );

  useEffect(() => {
    if (searchParams.get('section')) {
      const targetId = searchParams.get('section');

      if (targetId === null) return;

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
    }
  }, [searchParams]);

  return {
    state,
    scrollIntoView,
    toggleMobileMenu,
    activeSection: searchParams.get('section')
  };
};
