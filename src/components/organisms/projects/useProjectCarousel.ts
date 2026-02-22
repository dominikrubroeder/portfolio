'use client';

import { useCallback, useMemo, useState } from 'react';

import { projects } from '@/components/organisms/projects/data';

export const useProjectCarousel = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const project = useMemo(() => projects[activeProject], [activeProject]);

  const goNext = useCallback(
    () =>
      setActiveProject((previousState) =>
        previousState + 1 > projects.length - 1 ? 0 : previousState + 1
      ),
    []
  );

  const goPrevious = useCallback(
    () =>
      setActiveProject((previousState) =>
        previousState - 1 < 0 ? projects.length - 1 : previousState - 1
      ),
    []
  );

  return {
    activeProject,
    setActiveProject,
    project,
    goNext,
    goPrevious,
    isImageLoading,
    setIsImageLoading
  };
};
