import { Suspense } from 'react';
import LoadingList from '@/components/LoadingList';
import ToolList from '@/components/tools/ToolList';

export default function ToolSection() {
  return (
    <section
      id="tools"
      className="min-h-dvh flex flex-col justify-center py-16 gap-8"
    >
      <header className="flex gap-1 px-16">
        <h2 className="text-white font-bold">Tools</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <ToolList />
      </Suspense>
    </section>
  );
}
