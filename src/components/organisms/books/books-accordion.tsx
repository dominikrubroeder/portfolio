import { cn } from '@/lib/utils';

import { Accordion } from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';
import { Book, getBooks } from '@/components/organisms/books';

export function BooksAccordion({ className }: { className?: string }) {
  return (
    <Accordion title="Books">
      <Ul className={cn('list-none space-y-4 pl-0 leading-relaxed', className)}>
        {[...getBooks({ sortBy: 'progress-100-0' })]?.map((book) => (
          <li key={book.title}>
            <Book book={book} />
          </li>
        ))}
      </Ul>
    </Accordion>
  );
}
