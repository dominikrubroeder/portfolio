import { cn } from '@/lib/utils';

import { AnimatedProgressListItem } from '@/components/atoms/animated-progress-list-item';
import { Ul } from '@/components/atoms/ul';
import { getBooks } from '@/components/organisms/training/books';

export function BooksList({ className }: { className?: string }) {
  const books = getBooks({ sorting: 'progress-100-0-A-Z' });

  return (
    <Ul headline="Books" className={cn('leading-relaxed', className)}>
      {books.map((book) => (
        <li key={book.title}>
          <AnimatedProgressListItem item={book} />
        </li>
      ))}
    </Ul>
  );
}
