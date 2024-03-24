import { Suspense } from 'react';
import LoadingList from '@/components/ui/loading-list';
import ToolList from '@/components/sections/tool-section/tool-list';

export default function ToolSection() {
  return (
    <section id="tools" className="flex flex-col justify-center gap-8 py-16">
      <header className="flex gap-1 px-4 sm:px-16">
        <h2 className="font-bold text-theme-contrary">Tools</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <ToolList />
      </Suspense>
    </section>
  );
}
