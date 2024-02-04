import { Suspense } from 'react';
import LoadingList from '@/components/LoadingList';
import TechnologyList from '@/components/technology/TechnologyList';

export default function TechnologySection() {
  return (
    <section
      id="technologies"
      className="flex min-h-screen flex-col justify-center gap-8 py-16"
    >
      <header className="flex gap-1 px-4 sm:px-16">
        <h2 className="font-bold text-theme-contrary">Technologies</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <TechnologyList />
      </Suspense>
    </section>
  );
}
