import { useCallback, useEffect, useState } from 'react';
import { ControlBarState } from '@/interfaces';

export const useControlBar = (collapse: boolean) => {
  const [state, setState] = useState<ControlBarState>({
    activeSection: 0,
    controlBarVisibility: 'collapsed',
    mobileMenuVisibility: 'invisible'
  });

  const setActiveSection = useCallback((index: number) => {
    setState((prevState) => {
      return { ...prevState, activeSection: index };
    });
  }, []);

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
        activeSection: 0,
        controlBarVisibility: collapse ? 'collapsed' : 'expanded',
        mobileMenuVisibility: 'invisible'
      }),
    [collapse]
  );

  return {
    state,
    toggleMobileMenu,
    activeSection: state.activeSection,
    setActiveSection
  };
};
