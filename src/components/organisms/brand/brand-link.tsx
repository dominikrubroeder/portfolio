import { cn } from '@/lib/utils';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import type { Brand } from '@/components/organisms/brand';

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
        'group relative',
        size === 'small' && 'p-3 [&>img]:size-8 [&>svg]:size-8',
        size === 'medium' && 'p-4 [&>img]:size-12 [&>svg]:size-12'
      )}
    >
      {showLabel && (
        <span
          className={cn(
            'invisible absolute z-50 w-max rounded-full bg-muted px-3 py-1 text-center text-xs text-foreground opacity-0 group-hover:visible group-hover:opacity-100',
            labelPosition === 'top' &&
              'top-0 translate-y-0 group-hover:-translate-y-9',
            labelPosition === 'bottom' &&
              'bottom-0 translate-y-0 group-hover:translate-y-9',
            labelPosition === 'left' &&
              'top-1/2 -left-3 -translate-x-full -translate-y-1/2',
            labelPosition === 'right' &&
              'top-1/2 -right-3 translate-x-full -translate-y-1/2'
          )}
        >
          {brand.name}
        </span>
      )}

      {!!brand.logo ? brand.logo : <BrandLogo brand={brand.name} />}

      <span className="sr-only">Open {brand.name}</span>
    </Button>
  );
}
