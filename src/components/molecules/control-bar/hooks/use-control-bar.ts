import { useCallback, useState } from 'react';

export const useControlBar = () => {
  const [state, setState] = useState<{
    activeSection: number | undefined;
    isUnfolded: boolean;
  }>({
    activeSection: undefined,
    isUnfolded: false
  });

  const setActiveSection = useCallback(
    ({ activeSection }: { activeSection: number }) => {
      setState((previousState) => {
        return { ...previousState, activeSection: activeSection };
      });
    },
    []
  );

  const toggleIsUnfolded = useCallback(() => {
    setState((previousState) => {
      return { ...previousState, isUnfolded: !previousState.isUnfolded };
    });
  }, []);

  return {
    activeSection: state.activeSection,
    setActiveSection: setActiveSection,
    isUnfolded: state.isUnfolded,
    toggleIsUnfolded: toggleIsUnfolded
  };
};
