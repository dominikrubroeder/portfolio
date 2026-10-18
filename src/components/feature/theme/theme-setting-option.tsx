import type { ReactNode } from 'react';

export function ThemeSettingOption({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      {children}
    </div>
  );
}
