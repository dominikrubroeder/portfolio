import { FilterProp, SortProp } from '@/lib/types';

import type { Project } from '@/components/organisms/projects';
import { projects } from '@/components/organisms/projects/data';

export function getProject({ title }: { title: string }) {
  return projects.find((project) => project.title === title);
}

export function getProjects({
  sorting,
  filter
}: {
  sorting?: SortProp;
  filter?: FilterProp;
}) {
  let formattedProjects: Project[];

  switch (filter) {
    case 'is-active':
      formattedProjects = projects.filter((project) => project.isCurrent);

      break;
    case 'is-current':
      formattedProjects = projects.filter((project) => project.isActive);

      break;
    default:
      formattedProjects = projects;
  }

  switch (sorting) {
    case 'A-Z':
      formattedProjects = projects.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      break;
    case 'Z-A':
      formattedProjects = projects.sort((a, b) =>
        b.title.localeCompare(a.title)
      );

      break;

    case 'is-current-first':
      formattedProjects = [
        ...projects.filter((item) => item.isCurrent),
        ...projects.filter((item) => !item.isCurrent)
      ];

      break;
    case 'is-current-last':
      formattedProjects = [
        ...projects.filter((item) => !item.isCurrent),
        ...projects.filter((item) => item.isCurrent)
      ];

      break;
    case 'is-active-first':
      formattedProjects = [
        ...projects.filter((item) => item.isActive),
        ...projects.filter((item) => !item.isActive)
      ];

      break;
    case 'is-active-last':
      formattedProjects = [
        ...projects.filter((item) => !item.isActive),
        ...projects.filter((item) => item.isActive)
      ];

      break;
  }

  return formattedProjects;
}
