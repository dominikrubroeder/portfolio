import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Container } from '@/components/organisms/layout';
import { ButtonContact } from '@/components/atoms/button';
import { cn } from '@/lib/utils';
import {
  heroNavigation,
  HeroNavigationPathname
} from '@/components/molecules/hero-navigation';

export function HeroNavigation({
  hiddenLink,
  showContactButton = true,
  className
}: {
  hiddenLink?: HeroNavigationPathname;
  showContactButton?: boolean;
  className?: string;
}) {
  return (
    <Container className={cn('space-y-5', className)}>
      <div>
        <small className="uppercase">More</small>
      </div>

      <ul
        className={cn(
          'mx-auto max-w-(--container) space-y-3',
          !showContactButton && 'mb-0'
        )}
      >
        {heroNavigation
          .filter((item) => item.href !== hiddenLink)
          .map((item, index, array) => (
            <li
              key={item.href}
              className={cn(index + 1 < array.length && 'border-b pb-3')}
            >
              <Link
                href={item.href}
                className="group flex w-full items-center justify-between gap-2 sm:inline-flex sm:gap-4"
              >
                <div>{item.label}</div>
                <div className="flex size-11 items-center justify-center rounded-theme bg-muted transition hover:rounded-theme-xl hover:bg-muted-hover">
                  <ArrowRightIcon className="size-5" />
                </div>
              </Link>
            </li>
          ))}
      </ul>

      {showContactButton && (
        <div className="flex items-center justify-center">
          <ButtonContact />
        </div>
      )}
    </Container>
  );
}
