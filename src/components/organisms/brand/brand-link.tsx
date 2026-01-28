import { cn } from '@/lib/utils';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import type { Brand } from '@/components/organisms/brand';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

export function BrandLink({
  brand,
  size = 'medium',
  showLabel,
  labelPosition = 'top'
}: {
  brand: Brand;
  size?: 'small' | 'medium';
  showLabel?: boolean;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
}) {
  return (
    <Button
      variant="ghost"
      href={brand.href}
      title={`Open ${brand.name} website`}
      aria-label={`Open ${brand.name} website`}
      className={cn(
        'group relative [&>img]:block [&>svg]:block',
        size === 'small' && 'h-14 w-16 p-1 [&>img]:size-8 [&>svg]:size-8',
        size === 'medium' && 'h-17 w-18 p-2 [&>img]:size-12 [&>svg]:size-12',
        showLabel &&
          (labelPosition === 'top' || labelPosition === 'bottom') &&
          'grid items-center justify-center text-center [&>img]:mx-auto [&>svg]:mx-auto',
        showLabel &&
          (labelPosition === 'left' || labelPosition === 'right') &&
          'flex items-center',
        showLabel && 'gap-3'
      )}
    >
      {!!brand.logo ? (
        brand.logo
      ) : (
        <BrandLogo brand={brand.name} className="mx-auto flex" />
      )}

      <div className="absolute -top-1.5 -right-1.5 flex size-5 -rotate-45 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100">
        <ArrowRightIcon className="size-3" />
      </div>

      <span
        className={cn(
          'absolute -bottom-6 left-1/2 w-max max-w-18 -translate-x-1/2 truncate text-sm',
          !showLabel && 'sr-only'
        )}
      >
        {brand.name}
      </span>
    </Button>
  );
}
