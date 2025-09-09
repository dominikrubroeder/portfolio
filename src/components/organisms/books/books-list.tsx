import { cn } from '@/lib/utils';

import { Ul } from '@/components/atoms/ul';
import {
  AnimatedProgressListItem,
  getBooks
} from '@/components/organisms/books';

export function BooksList({ className }: { className?: string }) {
  return (
    <Ul headline="Books" className={cn('leading-relaxed', className)}>
      {[...getBooks({ sortBy: 'progress-100-0' })]?.map((book) => (
        <li key={book.title}>
          <AnimatedProgressListItem book={book} />
        </li>
      ))}
    </Ul>
  );
}
