import { cn } from '@/lib/utils';

import type { Brand } from '@/components/organisms/brand';
import { BrandLink } from '@/components/organisms/brand';
import { Ul } from '@/components/atoms/ul';

export function BrandList({
  brands,
  className
}: {
  brands: Brand[];
  className?: string;
}) {
  return (
    <Ul className={cn('-ml-2.5 md:-ml-4', className)}>
      {brands.map((brand, index) => (
        <li key={brand.name}>
          <div className="inline-flex items-center gap-2 lg:gap-4">
            <BrandLink
              key={`brand-link-list-item-${index}-${brand.name}`}
              brand={brand}
            />

            <div className="space-x-1 leading-normal">
              <b>{brand.name}</b>
              <span className="font-medium">{brand.description}</span>
            </div>
          </div>
        </li>
      ))}
    </Ul>
  );
}
