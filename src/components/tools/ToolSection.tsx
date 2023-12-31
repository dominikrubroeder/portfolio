import { Suspense } from 'react';
import LoadingList from '@/components/LoadingList';
import ToolList from '@/components/tools/ToolList';

export default function ToolSection() {
  return (
    <section
      id="tools"
      className="flex min-h-dvh flex-col justify-center gap-8 py-16"
    >
      <header className="flex gap-1 px-16">
        <h2 className="font-bold text-theme-contrary">Tools</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <ToolList />
      </Suspense>
    </section>
  );
}
