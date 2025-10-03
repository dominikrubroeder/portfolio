import { cn } from '@/lib/utils';

import type { Brand } from '@/components/organisms/brand';
import { BrandLink } from '@/components/organisms/brand';

export function BrandList({
  brands,
  className
}: {
  brands: Brand[];
  className?: string;
}) {
  return (
    <ul className={cn('-ml-2.5 space-y-1 md:-ml-4', className)}>
      {brands.map((brand) => (
        <li key={brand.name}>
          <div className="inline-flex items-center gap-2 lg:gap-4">
            <BrandLink brand={brand} />

            <h3 className="mb-0 space-x-1">
              <span>{brand.name}</span>
              <span className="font-medium text-muted-foreground">
                {brand.description}
              </span>
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
