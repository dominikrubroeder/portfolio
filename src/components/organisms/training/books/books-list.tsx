import { cn } from '@/lib/utils';

import { AnimatedProgressListItem } from '@/components/atoms/animated-progress-list-item';
import { Ul } from '@/components/atoms/ul';
import { getBooks } from '@/components/organisms/training/books/index';

export function BooksList({ className }: { className?: string }) {
  return (
    <Ul headline="Books" className={cn('leading-relaxed', className)}>
      {[...getBooks({ sortBy: 'progress-100-0' })]?.map((book) => (
        <li key={book.title}>
          <AnimatedProgressListItem item={book} />
        </li>
      ))}
    </Ul>
  );
}
