import { Container } from '@/components/organisms/layout';
import { Animate } from '@/components/molecules/animate';
import { H2 } from '@/components/organisms/typography';

export function ConceptsSection() {
  return (
    <Animate>
      <Container size="full-width">
        <H2 className="mx-auto max-w-(--container-readable)">Concepts</H2>
        <div className="grid grid-cols-6">
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
          <div className="block h-64 w-full bg-muted" />
        </div>
      </Container>
    </Animate>
  );
}
