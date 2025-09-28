import { books } from '@/components/organisms/training/books/index';

/** TODO: Make global `sortBy` type definition */
export function getBooks({
  sortBy
}: {
  sortBy?: 'A-Z' | 'Z-A' | 'progress-100-0';
}) {
  switch (sortBy) {
    case 'A-Z':
      return books.sort((a, b) => b.progress - a.progress);
    case 'Z-A':
      return books.sort((a, b) => b.progress - a.progress);
    default:
      /** TODO: Sort first by progress, than alphabetically by name too */
      return books.sort((a, b) => b.progress - a.progress);
  }
}
