import { Suspense } from 'react';
import LoadingList from '@/components/ui/loading-list';
import TechnologyList from '@/components/sections/technology-section/technology-list';
import Section from '@/components/sections/section';

export default function TechnologySection() {
  return (
    <Section id="technologies">
      <header className="flex gap-1 px-4 xl:px-16">
        <h2 className="font-bold text-foreground">Technologies</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <TechnologyList />
      </Suspense>
    </Section>
  );
}
