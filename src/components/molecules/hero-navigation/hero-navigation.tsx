import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Container } from '@/components/organisms/layout';
import { ButtonContact } from '@/components/atoms/button';
import { cn } from '@/lib/utils';
import {
  heroNavigation,
  HeroNavigationPathname
} from '@/components/molecules/hero-navigation';
import { IconLucide } from '@/components/atoms/icon/icon-lucide';

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
    <Container className={cn('min-w-96 space-y-5', className)}>
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
          .filter((item) => item.href !== hiddenLink && !item.hidden)
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
                  <IconLucide name={item.icon} />
                  <div className="group-hover:text-primary">{item.label}</div>
                </div>

                <div className="flex size-11 interactive items-center justify-center rounded-2xl bg-muted transition hover:rounded-xl hover:bg-muted-hover hover:bg-primary hover:text-primary-foreground">
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
