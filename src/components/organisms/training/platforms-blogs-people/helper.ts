import type { LearningResource } from '@/components/organisms/training';
import { platformsBlogsPeople } from '@/components/organisms/training/platforms-blogs-people/data';
import { SortAlphabeticallyProp, SortByType } from '@/lib/types';

export function getPlatformsBlogsPeople({
  sortBy = 'type-A-Z'
}: {
  sortBy?: SortAlphabeticallyProp | SortByType;
}) {
  const defaultSorting = platformsBlogsPeople.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  switch (sortBy) {
    case 'A-Z':
      return defaultSorting;
    case 'Z-A':
      return platformsBlogsPeople.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    case 'type-A-Z':
      return Object.values(
        platformsBlogsPeople.reduce(
          (acc, item) => {
            const key = item.type ?? 'unknown';
            (acc[key] ||= []).push(item);
            return acc;
          },
          {} as Record<string, LearningResource[]>
        )
      )
        .map((group) => group.sort((a, b) => a.title.localeCompare(b.title)))
        .flat();
    default:
      return defaultSorting;
  }
}
