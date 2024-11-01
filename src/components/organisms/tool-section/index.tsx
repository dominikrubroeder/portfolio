import { Suspense } from 'react';
import LoadingList from '@/components/atoms/loading-list';
import ToolList from '@/components/organisms/tool-section/tool-list';
import Section from '@/components/organisms/section';

export default function ToolSection() {
  return (
    <Section id="tools">
      <header className="flex gap-1 px-4 xl:px-16">
        <h2 className="font-bold text-foreground">Tools</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <ToolList />
      </Suspense>
    </Section>
  );
}
