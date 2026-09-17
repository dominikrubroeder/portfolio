import { Animate } from '@/components/molecules/animate';
import { Container } from '@/components/organisms/layout';
import { H2 } from '@/components/organisms/typography';
import { SvgArrow } from '@/components/atoms/svg';
import { DrawerPhilosophy } from '@/components/molecules/drawer/drawer-philosophy';
import { TabsPhilosophy } from '@/components/molecules/tabs/tabs-philosophy';

export function PhilosophySection() {
  return (
    <Animate direction="up" className="bg-primary py-8">
      <Container as="section">
        <H2 className="flex items-center justify-between gap-4 bg-primary text-primary-foreground">
          Philosophy
          <SvgArrow />
          <DrawerPhilosophy />
        </H2>

        <div className="relative">
          <div className="absolute -top-4 -left-16 text-9xl text-primary">
            "
          </div>
          <p>What makes a great UI?</p>
          <p>
            To me, it is the combination of skills to create the best possible
            output. Design and code means, one benefits the other, they are not
            separate professions, because both target the same goal: great user
            interfaces. The closer design gets to code, and code gets to design,
            the better the result will be. This is also known as the 1 + 1 = 3,
            synergy, effect.
          </p>
        </div>

        <TabsPhilosophy />
      </Container>
    </Animate>
  );
}
