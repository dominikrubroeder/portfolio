import { Suspense } from 'react';
import LoadingList from '@/components/atoms/loading-list';
import TechnologyList from '@/components/organisms/technologies/technology-list';
import Section from '@/components/organisms/section';

export default function TechnologySection() {
  return (
    <Section id="technologies">
      <header className="space-y-2 px-4 xl:px-16">
        <h2 className="text-foreground text-3xl font-bold">Technologies</h2>
        <h3>
          Technologies are the foundation of building the things we want and
          make them production ready in code. For that, i use:
        </h3>
      </header>

      <Suspense fallback={<LoadingList />}>
        <TechnologyList />
      </Suspense>
    </Section>
  );
}
