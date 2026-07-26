import { Container } from '@/components/organisms/layout';
import { Typewriter } from '@/components/atoms/typewriter';
import { AnimatedProgress } from '@/components/atoms/animated-progress';
import type { Metadata } from 'next';
import { PlaygroundBox } from '@/components/organisms/playground';
import { PageTemplate } from '@/components/templates/page-template';
import { Toggle } from '@/components/atoms/toggle';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Playground | Dominik Rubröder, UX Design Engineer',
  description:
    'Experimentally using new techniques and playing around with components before usage – or simply test some ideas! Everything is allowed here'
};

export default function PlaygroundPage() {
  redirect('/');

  return (
    <PageTemplate
      h1="Playground"
      heroBlockquote={
        <>
          <p>Ideas, concepts, prototypes</p>
          <p className="font-normal text-muted-foreground">
            Down below a collection of all component used on this page
          </p>
        </>
      }
      heroNavigationHiddenLink="/playground"
    >
      <Container>
        <Toggle onClick={() => {}} isEnabled={true} label="Auto-animate" />
      </Container>
      <Container className="grid grid-cols-2 gap-4">
        <PlaygroundBox title="Typewriter effect" filename="typewriter.tsx">
          <Typewriter phrases={['', 'Hello, world!']} />
        </PlaygroundBox>

        <PlaygroundBox
          title="Animated progress circle"
          filename="animated-progress.tsx"
        >
          <AnimatedProgress size={32} strokeWidth={5} progress={90} />
        </PlaygroundBox>
      </Container>
    </PageTemplate>
  );
}
