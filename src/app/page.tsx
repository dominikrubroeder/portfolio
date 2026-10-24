import { Animate } from '@/components/ui/animate';
import { Blockquote } from '@/components/ui/blockquote';
import { Container } from '@/components/ui/container';
import { DotsDivider } from '@/components/ui/dots-divider';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

import { BrandList } from '@/components/feature/brand';
import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/feature/events';
import {
  homeHeading,
  homeIntro,
  homePrinciples,
  homeStatements
} from '@/components/feature/home';
import { PhilosophyCore } from '@/components/feature/philosophy';
import { mainTechnologies } from '@/components/feature/technologies';
import { DrawerTechnologies } from '@/components/feature/technologies';
import { mainTools } from '@/components/feature/tools';
import { DrawerTools } from '@/components/feature/tools';
import { H2, Ol } from '@/components/feature/typography';

export const instant = false;

export default async function HomePage() {
  return (
    <>
      <ScrollToTop />

      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <h1 className="sr-only">{homeHeading}</h1>

      <DotsDivider dots={1} delay={-250} className="mt-0 mb-6">
        <div className="hidden text-muted-foreground peer-hover:block">
          Hovering ...
        </div>
      </DotsDivider>

      <Animate delay={0.16}>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[0]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate delay={0.32}>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[1]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate delay={0.44}>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[2]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[3]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[4]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[5]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[6]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate className="bg-primary text-primary-foreground">
        <Container as="section">
          <div className="mb-0 py-8 text-statement leading-[1.1] font-semibold text-balance text-primary-foreground">
            {homeStatements[7]}
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="mb-5 text-statement leading-[1.1] font-semibold text-balance text-foreground">
            {homeStatements[8]}
          </div>

          <PhilosophyCore />
        </Container>
      </Animate>

      <DotsDivider animate={false} alignment="horizontal" />

      <Animate>
        <Container className="space-y-3">
          <Blockquote className="mt-0 mb-3">{homeIntro.quote}</Blockquote>

          {homeIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p>{homeIntro.signature}</p>
        </Container>
      </Animate>

      <Animate>
        <Container as="section">
          <h2>Principles</h2>

          <Ol>
            {homePrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </Ol>
        </Container>
      </Animate>

      <Animate>
        <Container as="section">
          <H2 className="flex items-center justify-between gap-4">
            Main tools <DrawerTools />
          </H2>
          <BrandList brands={mainTools} />
        </Container>
      </Animate>

      <Animate>
        <Container as="section">
          <H2 className="flex items-center justify-between gap-4">
            Main technologies <DrawerTechnologies />
          </H2>
          <BrandList brands={mainTechnologies} />
        </Container>
      </Animate>
    </>
  );
}
