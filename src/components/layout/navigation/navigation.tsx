'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationData = [
  {
    name: 'How i work',
    href: '/how-i-work',
    title: 'How i work page',
    ariaLabel: 'Link to How i work page'
  },
  {
    name: 'How i work',
    href: '/how-i-work',
    title: 'How i work page',
    ariaLabel: 'Link to Book page'
  }
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex justify-center gap-4">
        <li>
          <Link
            href="/how-i-work"
            className={`transition hover:text-theme-contrary ${
              pathname === '/how-i-work' ? 'text-theme-contrary' : 'text-muted'
            }`}
            title="How i work page"
            aria-label="Link to How i work page"
          >
            How i work
          </Link>
        </li>
        <li>
          <Link
            href="/books"
            className={`transition hover:text-theme-contrary ${
              pathname === '/books' ? 'text-theme-contrary' : 'text-muted'
            }`}
            title="Books page"
            aria-label="Link to Books page"
          >
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
}
