import { cn } from '@/lib/utils';

import type { Brand } from '@/components/organisms/brand';
import { BrandLink } from '@/components/organisms/brand';
import { Ul } from '@/components/organisms/typography';

export function BrandList({
  brands,
  className
}: {
  brands: Brand[];
  className?: string;
}) {
  return (
    <Ul
      className={cn(
        'grid grid-cols-3 gap-4 gap-y-10 sm:grid-cols-4 md:-ml-1.5 md:-ml-2.5 md:flex md:flex-wrap',
        className
      )}
    >
      {brands.map((brand, index) => (
        <li key={`brand-link-${brand.name}-${index}`}>
          <BrandLink
            brandLogoId={`brand-link-${brand.name}-${index}`}
            brand={brand}
            labelPosition="bottom"
            showLabel
          />
        </li>
      ))}
    </Ul>
  );
}
