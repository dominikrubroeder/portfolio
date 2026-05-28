import { cn } from '@/lib/utils';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import type { Brand } from '@/components/organisms/brand';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

export function BrandLink({
  brandLogoId,
  brand,
  size = 'medium',
  showLabel,
  labelPosition = 'top',
  href,
  title,
  ariaLabel,
  className
}: {
  brandLogoId: string;
  brand: Brand;
  size?: 'small' | 'medium';
  showLabel?: boolean;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  href?: string;
  title?: string;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <Button
      variant="ghost-foreground"
      href={href || brand.href}
      title={title || `Open ${brand.name} website`}
      aria-label={ariaLabel || `Open ${brand.name} website`}
      className={cn(
        'group relative [&>img]:block [&>svg]:block',
        size === 'small' && 'h-11 w-11 p-1 [&>img]:size-6 [&>svg]:size-6',
        size === 'medium' && 'h-17 w-18 p-2 [&>img]:size-12 [&>svg]:size-12',
        showLabel &&
          (labelPosition === 'top' || labelPosition === 'bottom') &&
          'grid items-center justify-center text-center [&>img]:mx-auto [&>svg]:mx-auto',
        showLabel &&
          (labelPosition === 'left' || labelPosition === 'right') &&
          'flex items-center',
        showLabel && 'gap-3',
        className
      )}
    >
      {!!brand.logo ? (
        brand.logo
      ) : (
        <BrandLogo
          id={brandLogoId}
          brand={brand.name}
          className="mx-auto flex"
        />
      )}

      <div
        className={cn(
          'absolute flex -rotate-45 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100',
          size === 'small' && '-top-1 -right-1 size-4 [&>svg]:size-3',
          size === 'medium' && '-top-1.5 -right-1.5 size-5 [&>svg]:size-3'
        )}
      >
        <ArrowRightIcon />
      </div>

      <span
        className={cn(
          'absolute -bottom-6 left-1/2 w-max max-w-18 -translate-x-1/2 truncate text-sm font-normal',
          !showLabel && 'sr-only'
        )}
      >
        {brand.name}
      </span>
    </Button>
  );
}
