import { IntroductionTechStack } from '@/components/organisms/introduction/introduction-tech-stack';
import { Container } from '@/components/organisms/layout';
import { H2 } from '@/components/organisms/typography';

export function MyTechStackSection() {
  return (
    <Container as="section" size="container-readable">
      <H2>My tech stack of choice</H2>
      <IntroductionTechStack />
    </Container>
  );
}
