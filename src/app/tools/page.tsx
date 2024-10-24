import { Suspense } from 'react';
import ToolGrid from '@/components/sections/tool-section/tool-grid';

export default function Tools() {
  return (
    <section className="hero px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground">Tools</h1>
      </div>

      <Suspense fallback="Loading..">
        <ToolGrid />
      </Suspense>
    </section>
  );
}
