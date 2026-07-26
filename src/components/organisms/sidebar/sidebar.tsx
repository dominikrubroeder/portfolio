'use client';

import { ReactNode } from 'react';
import { useSidebar } from '@/components/organisms/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/button';

export function Sidebar({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  const { isOpen, close } = useSidebar();

  return (
    <>
      <aside
        className={cn(
          'fixed top-2 right-2 z-max h-[97svh] min-w-40 scrollbar-none overflow-y-auto rounded-2xl border bg-background [html[data-theme=default]_&]:transition-all',
          isOpen
            ? 'translate-x-0 scale-100 opacity-100'
            : 'translate-x-full scale-95 opacity-75'
        )}
      >
        <header className="sticky top-0 z-10 bg-background px-6 pt-6 pb-4">
          <div className="title mb-0">{title}</div>
        </header>

        <div className="h-full space-y-6 overflow-hidden overflow-y-scroll px-6 pt-4">
          {children}
        </div>

        <footer className="sticky bottom-0 z-10 w-full bg-background px-4 py-4">
          <Button className="w-full" onClick={() => close()}>
            Done
          </Button>
        </footer>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/10 dark:bg-black/30"
          onClick={() => close()}
        />
      )}
    </>
  );
}
