import { H2 } from '@/components/organisms/typography';
import { TrainingAccordion } from '@/components/organisms/training';
import { Container } from '@/components/organisms/layout';

export function MyEducationSection() {
  return (
    <Container as="section" size="container-readable">
      <H2>Education</H2>
      <TrainingAccordion />
    </Container>
  );
}
