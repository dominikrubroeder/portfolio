import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import type { Brand } from '@/components/organisms/brand';

export function BrandList({
  brands,
  className
}: {
  brands: Brand[];
  className?: string;
}) {
  return (
    <ul className={cn('-ml-4 space-y-1', className)}>
      {brands.map((brand) => (
        <li key={brand.name}>
          <div className="inline-flex items-center gap-4">
            <Button
              variant="ghost"
              href={brand.href}
              title={`Open ${brand.name} website`}
              className="p-4 [&>svg]:size-12"
            >
              {brand.logo}
              <span className="sr-only">Open {brand.name}</span>
            </Button>

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
