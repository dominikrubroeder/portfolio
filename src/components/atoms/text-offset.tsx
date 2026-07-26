import { ReactNode } from 'react';

export function TextOffset({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-1 translate-y-1 text-primary/50"
      >
        {children}
      </span>

      <span className="relative text-foreground">{children}</span>
    </span>
  );
}
