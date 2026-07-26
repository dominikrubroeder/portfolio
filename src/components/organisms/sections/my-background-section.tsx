import { H2 } from '@/components/organisms/typography';
import { IntroductionMyBackground } from '@/components/organisms/introduction';
import { Container } from '@/components/organisms/layout';

export function MyBackgroundSection() {
  return (
    <Container
      as="section"
      size="container-readable"
      className="animate-in-to-left-160 bg-background"
    >
      <H2>My Journey</H2>
      <IntroductionMyBackground />
    </Container>
  );
}
