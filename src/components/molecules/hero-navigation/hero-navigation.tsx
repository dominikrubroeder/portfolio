import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Container } from '@/components/organisms/layout';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/utils';
import {
  heroNavigation,
  HeroNavigationPathname
} from '@/components/molecules/hero-navigation';
import { IconLucide } from '@/components/atoms/icon/icon-lucide';
import { Avatar } from '@/components/atoms/avatar';

export function HeroNavigation({
  hiddenLinks,
  className
}: {
  hiddenLinks?: HeroNavigationPathname[];
  className?: string;
}) {
  return (
    <Container className={cn('min-w-96 space-y-5', className)}>
      <div>
        <small>More</small>
      </div>

      <ul className="mx-auto max-w-(--container) space-y-3">
        {heroNavigation
          .filter((item) => !hiddenLinks?.includes(item.href) && !item.hidden)
          .map((item, index, array) => (
            <li
              key={item.href}
              className={cn(index + 1 < array.length && 'border-b pb-3')}
            >
              <Link
                href={item.href}
                className="group interactive-none flex w-full items-center justify-between gap-4 sm:inline-flex sm:gap-4"
              >
                <div className="flex items-center gap-4 [&>svg]:group-hover:text-primary">
                  {item.icon === 'avatar' ? (
                    <Avatar width={24} height={24} as="Image" />
                  ) : (
                    <IconLucide name={item.icon} />
                  )}
                  <div className="group-hover:text-primary">{item.label}</div>
                </div>

                <Button variant="ghost-muted" className="mr-5">
                  <ArrowRightIcon className="size-5" />
                </Button>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
}
