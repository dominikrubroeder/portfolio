import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';

export function GuidingPrinciple() {
  return (
    <Animate>
      <Container
        className="relative z-10 space-y-2 bg-background sm:py-12"
        id="guiding-principle"
      >
        <BadgeHrGroup>Guiding principle</BadgeHrGroup>

        <h2 className="bg-background text-primary">
          "Combine design and code in one craft and you get the best of both
          worlds"
        </h2>
        <div>Dominik Rubröder, UX Design Engineer</div>
      </Container>
    </Animate>
  );
}
