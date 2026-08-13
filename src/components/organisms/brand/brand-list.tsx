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
    <Ul className={cn('-ml-1.5 md:-ml-2.5', className)}>
      {brands.map((brand, index) => (
        <li key={`brand-link-${brand.name}-${index}`}>
          <div className="inline-flex items-center gap-2 lg:gap-4">
            <BrandLink
              brandLogoId={`brand-link-${brand.name}-${index}`}
              brand={brand}
            />

            <div className="space-x-1 leading-normal">
              <b>{brand.name}</b>
              <span className="font-normal text-muted-foreground">
                {brand.description}
              </span>
            </div>
          </div>
        </li>
      ))}
    </Ul>
  );
}
