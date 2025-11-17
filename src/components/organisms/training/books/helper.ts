import { books } from '@/components/organisms/training/books';
import { SortProp } from '@/lib/types';

export function getBooks({ sorting }: { sorting?: SortProp }) {
  const defaultSorting = books.sort(
    (a, b) => (b.progress ?? 0) - (a.progress ?? 0)
  );

  switch (sorting) {
    case 'A-Z':
      return books.sort((a, b) => a.title.localeCompare(b.title));
    case 'Z-A':
      return books.sort((a, b) => b.title.localeCompare(a.title));
    case 'progress-100-0':
      return defaultSorting;
    case 'progress-100-0-A-Z':
      return books.sort((a, b) => {
        if (a.progress === b.progress) {
          return a.title.localeCompare(b.title);
        }

        return (b.progress ?? 0) - (a.progress ?? 0);
      });
    default:
      return defaultSorting;
  }
}
