import type { Metadata } from 'next';

import { Container } from '@/components/ui/container';
import { PageTemplate } from '@/components/ui/page-template';

import { PlaygroundBox } from '@/components/feature/playground';
import { playgroundComponents } from '@/components/feature/playground/playground-data';

export const instant = false;

export const metadata: Metadata = {
  title: 'Playground | Dominik Rubröder, UX Engineer',
  description: 'A free space for experimenting and testing component concepts'
};

export default function PlaygroundPage() {
  return (
    <PageTemplate
      h1="Playground"
      heroBlockquote={
        <>A free space for experimenting and testing component concepts</>
      }
    >
      <div className="animate-in-to-left-160">
        <Container className="grid gap-4 sm:grid-cols-2">
          {playgroundComponents.map((component) => (
            <PlaygroundBox key={component.id} playgroundComponent={component} />
          ))}
        </Container>
      </div>
    </PageTemplate>
  );
}
