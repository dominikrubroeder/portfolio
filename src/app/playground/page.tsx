import { Container } from '@/components/organisms/layout';
import { Blockquote } from '@/components/atoms/blockquote';
import { Typewriter } from '@/components/atoms/typewriter';
import { AnimatedProgress } from '@/components/atoms/animated-progress';
import type { Metadata } from 'next';
import { PlaygroundBox } from '@/components/organisms/playground';
import { HeroNavigation } from '@/components/molecules/hero-navigation';

export const metadata: Metadata = {
  title: 'Playground | Dominik Rubröder, UX Design Engineer',
  description:
    'Experimentally using new techniques and playing around with components before usage – or simply test some ideas! Everything is allowed here'
};

export default function PlaygroundPage() {
  return (
    <>
      <Container>
        <h1>Playground</h1>
        <Blockquote>
          Experimentally using new techniques and playing around with components
          before usage – or simply test some ideas! Everything is allowed here.
        </Blockquote>
      </Container>

      <Container size="container" className="grid grid-cols-4 gap-4">
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

      <HeroNavigation />
    </>
  );
}
