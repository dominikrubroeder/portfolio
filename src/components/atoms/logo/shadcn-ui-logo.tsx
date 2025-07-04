import { cn } from '@/lib/utils';

import { defaultIconSize, type LogoProps } from '@/components/atoms/logo';

export function ShadcnUiLogo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <path
        d="M117 66.3037L66.5239 116.78"
        strokeWidth="20.1905"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-foreground"
      />
      <path
        d="M106.905 10.7803L11 106.685"
        strokeWidth="20.1905"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-foreground"
      />
    </svg>
  );
}
