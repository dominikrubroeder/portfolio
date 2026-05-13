'use client';

import { ReactNode } from 'react';

export function Sidebar({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="fixed top-0 right-0 z-max h-full min-w-40 bg-blue-500 transition-all">
      <div>{title}</div>
      <div>{children}</div>
    </aside>
  );
}
