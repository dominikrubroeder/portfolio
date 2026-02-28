'use client';

import { useCallback, useMemo, useState } from 'react';
import { getProjects } from '@/components/organisms/projects/helper';

export const useProjectCarousel = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const projects = getProjects({ sorting: 'is-current-first' });

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

  const isShowCurrentProjectTooltip = useMemo(() => {
    const currentProjectsCount = projects.filter(
      (project) => project.isCurrent
    )?.length;

    return currentProjectsCount > 1;
  }, []);

  return {
    projects,
    activeProject,
    setActiveProject,
    project,
    goNext,
    goPrevious,
    isImageLoading,
    isShowCurrentProjectTooltip,
    setIsImageLoading
  };
};
