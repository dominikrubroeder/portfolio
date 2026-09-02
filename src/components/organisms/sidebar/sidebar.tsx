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
          'fixed top-auto right-4 bottom-0 left-4 z-max max-h-[75svh] min-w-96 scrollbar-none overflow-y-auto rounded-2xl border bg-background ease-in-out motion-safe:duration-300 sm:top-2 sm:right-2 sm:left-auto sm:h-[97svh] sm:max-h-none [html[data-theme=default]_&]:transition-all',
          isOpen
            ? 'translate-y-4 scale-100 opacity-100 sm:translate-x-0'
            : 'translate-y-full scale-95 opacity-75 sm:translate-x-full'
        )}
      >
        <header className="sticky top-0 z-max bg-background px-6 pt-6 pb-4">
          <div className="title mb-0 text-foreground">{title}</div>
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
