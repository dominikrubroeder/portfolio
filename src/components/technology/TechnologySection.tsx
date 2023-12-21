import { Suspense } from 'react';
import LoadingList from '@/components/LoadingList';
import TechnologyList from '@/components/technology/TechnologyList';

export default function TechnologySection() {
  return (
    <section
      id="technologies"
      className="min-h-dvh flex flex-col justify-center py-16 gap-8"
    >
      <header className="flex gap-1 px-16">
        <h2 className="text-white font-bold">Technologies</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <TechnologyList />
      </Suspense>
    </section>
  );
}
