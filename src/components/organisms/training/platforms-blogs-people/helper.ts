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
      const grouped = Object.groupBy(
        platformsBlogsPeople,
        (item) => item.type ?? 'unknown'
      );

      const list: LearningResource[] = [];

      for (const [, items] of Object.entries(grouped)) {
        if (!items) continue;

        items.sort((a, b) => a.title.localeCompare(b.title));
        list.push(...items);
      }

      return list;
    default:
      return defaultSorting;
  }
}
