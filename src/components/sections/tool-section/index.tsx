import { Suspense } from 'react';
import LoadingList from '@/components/ui/loading-list';
import ToolList from '@/components/sections/tool-section/tool-list';
import Section from '@/components/sections/section';

export default function ToolSection() {
  return (
    <Section id="tools">
      <header className="flex gap-1 px-4 sm:px-16">
        <h2 className="font-bold text-foreground">Tools</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <ToolList />
      </Suspense>
    </Section>
  );
}
