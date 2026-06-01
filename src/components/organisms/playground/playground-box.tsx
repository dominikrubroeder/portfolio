import { ReactNode } from 'react';

export function PlaygroundBox({
  title,
  filename,
  children
}: {
  title: string;
  filename: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-theme border">
      <div className="flex min-h-32 items-center justify-center p-4">
        {children}
      </div>

      <div className="border-t px-4 py-3">
        <b>{title}</b> {filename}
      </div>
    </div>
  );
}
