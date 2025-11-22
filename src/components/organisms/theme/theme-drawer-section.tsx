import { ReactNode } from 'react';

export function ThemeDrawerSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div>
        <b>{title}</b>
      </div>

      <div className="space-y-6 rounded-xl border p-6">{children}</div>
    </div>
  );
}
