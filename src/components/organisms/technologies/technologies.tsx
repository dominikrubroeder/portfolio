import { Suspense } from 'react';
import LoadingList from '@/components/atoms/loading-list';
import TechnologyList from '@/components/organisms/technologies/technology-list';
import Section from '@/components/organisms/section';

export default function Technologies() {
  return (
    <Section id="technologies">
      <header className="space-y-2 px-4 xl:px-16">
        <div className="inline-flex flex-wrap items-end gap-4">
          <h2 className="text-3xl font-bold text-foreground">Technologies:</h2>
          <p>
            Technologies are the foundation of building production ready code.
            For that:
          </p>
        </div>

        <p>
          <b className="text-foreground">I use</b>
        </p>
      </header>

      <Suspense fallback={<LoadingList />}>
        <TechnologyList />
      </Suspense>
    </Section>
  );
}
