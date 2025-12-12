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
        size === 'medium' && 'p-4 [&>img]:size-12 [&>svg]:size-12',
        showLabel &&
          (labelPosition === 'top' || labelPosition === 'bottom') &&
          'grid items-center justify-center text-center',
        showLabel &&
          (labelPosition === 'left' || labelPosition === 'right') &&
          'flex items-center',
        showLabel && 'gap-3'
      )}
    >
      {!!brand.logo ? (
        brand.logo
      ) : (
        <BrandLogo brand={brand.name} className="mx-auto" />
      )}

      <span className={cn(!showLabel && 'sr-only')}>{brand.name}</span>
    </Button>
  );
}
