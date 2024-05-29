import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const books: {
  title: string;
  author: string;
  href: string | undefined;
  new: boolean | undefined;
}[] = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    href: undefined,
    new: undefined
  },
  {
    title: 'Refactoring UI',
    author: 'Adam Wathan, Steve Schoger',
    href: undefined,
    new: undefined
  },
  {
    title: 'Practical UI',
    author: 'Adham Dannaway',
    href: undefined,
    new: undefined
  },
  {
    title: 'The Path to Senior Product Designer',
    author: 'Artiom Dashinsky',
    href: '/book/the-path-to-senior-product-designer',
    new: true
  },
  {
    title: 'Articulating Design Decisions',
    author: 'Tom Greever',
    href: undefined,
    new: undefined
  },
  {
    title: 'Atomic Design',
    author: 'Brad Frost',
    href: undefined,
    new: undefined
  },
  {
    title: 'Laws of UX',
    author: 'Jon Yablonski',
    href: undefined,
    new: undefined
  },
  {
    title: 'User Friendly',
    author: 'Cliff Kuang with Robert Fabricant',
    href: undefined,
    new: undefined
  },
  {
    title: 'Neurowebdesign',
    author: 'Jonas Reggelin',
    href: undefined,
    new: undefined
  },
  {
    title: 'The Creative Act: A Way of Being',
    author: 'Rick Rubin',
    href: undefined,
    new: undefined
  }
];

export default function Books() {
  return (
    <ul className="mb-5 grid list-disc gap-1 pl-6 leading-relaxed md:gap-0">
      {books.map((book) => (
        <li key={book.title}>
          {book.href ? (
            <Link
              href={book.href}
              className="flex items-start justify-between gap-4 rounded-xl px-0 py-1 transition-all hover:bg-gray-5 hover:px-2 md:items-center"
            >
              <p>
                {book.title} – <i>{book.author}</i>
              </p>
              <div className="flex items-center gap-2">
                <ArrowRightIcon className="mt-1.5 size-4 shrink-0 md:mt-0" />
              </div>
            </Link>
          ) : (
            <p className="py-1">
              {book.title} – <i>{book.author}</i>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
