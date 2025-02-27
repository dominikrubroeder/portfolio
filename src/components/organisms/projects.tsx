import DevModeLabel from '@/components/organisms/introduction/dev-mode-label';
import React from 'react';

export default function Projects() {
  return (
    <section
      className="relative mx-auto flex min-h-64 max-w-(--breakpoint-sm) scroll-mt-24 flex-col items-center justify-center gap-4 border-y md:scroll-mt-64"
      id="projects"
    >
      <DevModeLabel>section | projects.tsx</DevModeLabel>

      <p>
        Projects
        <span className="mx-4 rounded bg-primary p-1 px-1.5 text-xs text-primary-foreground">
          Soon
        </span>
      </p>
    </section>
  );
}
