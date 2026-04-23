import { SortAlphabeticallyProp } from '@/lib/types';
import { research } from '@/components/organisms/training/research/data';

export function getResearch({
  sorting = 'A-Z'
}: {
  sorting?: SortAlphabeticallyProp;
}) {
  const defaultSorting = research.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  switch (sorting) {
    case 'A-Z':
      return defaultSorting;
    case 'Z-A':
      return research.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return defaultSorting;
  }
}
