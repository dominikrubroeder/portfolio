import { cn } from '@/lib/utils';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import type { Brand } from '@/components/organisms/brand';

export function BrandLink({
  brand,
  size = 'medium'
}: {
  brand: Brand;
  size?: 'small' | 'medium';
}) {
  return (
    <Button
      variant="ghost"
      href={brand.href}
      title={`Open ${brand.name} website`}
      aria-label={`Open ${brand.name} website`}
      className={cn(
        size === 'small' && 'p-3 [&>img]:size-8 [&>svg]:size-8',
        size === 'medium' && 'p-4 [&>img]:size-12 [&>svg]:size-12'
      )}
    >
      {!!brand.logo ? brand.logo : <BrandLogo brand={brand.name} />}
      <span className="sr-only">Open {brand.name}</span>
    </Button>
  );
}
