import { BrandLogo } from '@/components/atoms/brand-logo';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function BrandName({
  brandName,
  label,
  labelClassName,
  className
}: {
  brandName: string;
  label: ReactNode;
  labelClassName?: string;
  className?: string;
}) {
  return (
    <span className={cn('space-x-0.5', className)}>
      <BrandLogo
        id={`brand-name-${brandName}`}
        brand={brandName}
        className="min-h-none min-w-none inline-block size-4 text-xs hover:text-current"
      />

      <span className={cn('text-foreground', labelClassName)}>{label}</span>
    </span>
  );
}
