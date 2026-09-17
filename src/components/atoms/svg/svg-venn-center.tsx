import { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

/**
 * Center piece where three equal, equilateral-arranged circles (UX, Design,
 * Code) collapse into one another. Path is the triple-intersection region of
 * three circles on centers 222.5 apart (matches the source three-circle
 * diagram), arc radius nudged from the exact r=178 to 230 for a flatter
 * curve, so it drops in exactly where those circles meet.
 */
export function SvgVennCenter({
  id,
  strokeWidth = 4,
  pathClassName,
  className,
  ...rest
}: { strokeWidth?: number; pathClassName?: string } & BaseComponentProps &
  HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      viewBox="0 0 158 153"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn('size-8', className)}
      {...rest}
    >
      <path
        d="M 79 14.29 A 230 230 0 0 0 14.32 126.36 A 230 230 0 0 0 143.68 126.36 A 230 230 0 0 0 79 14.29 Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('fill-none stroke-primary', pathClassName)}
      />
    </svg>
  );
}
