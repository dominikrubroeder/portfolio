import { Container } from '@/components/organisms/layout';
import type { Metadata } from 'next';
import { PlaygroundBox } from '@/components/organisms/playground';
import { PageTemplate } from '@/components/templates/page-template';
import { playgroundComponents } from '@/components/organisms/playground/data';

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
      heroNavigationHiddenLink="/playground"
    >
      <div className="animate-in-to-left-160">
        <Container className="grid grid-cols-2 gap-4">
          {playgroundComponents.map((component) => (
            <PlaygroundBox key={component.id} playgroundComponent={component} />
          ))}
        </Container>
      </div>
    </PageTemplate>
  );
}
