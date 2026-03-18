import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';

export function GuidingPrinciple() {
  return (
    <Animate className="xl:mb-16!">
      <Container
        className="relative z-10 space-y-2 bg-background sm:pt-12"
        id="guiding-principle"
      >
        <BadgeHrGroup badgeProps={[{ children: 'Guiding principle' }]} />

        <h2 className="bg-background text-primary">
          "Combine design and code into one craft and you get the best of both
          worlds."
        </h2>

        <div className="text-right sm:pb-8 xl:pb-12">
          – Dominik Rubröder, UX Design Engineer
        </div>
      </Container>
    </Animate>
  );
}
