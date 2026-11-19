import { Animate } from '@/components/ui/animate';
import { Container } from '@/components/ui/container';
import { DotsDivider } from '@/components/ui/dots-divider';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

import { BrandList } from '@/components/feature/brand';
import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/feature/events';
import {
  introductionPrinciples,
  IntroductionStatementParagraphs,
  introductionStatements
} from '@/components/feature/introduction';
import { PageNavigationBar } from '@/components/feature/page-navigation-bar';
import { PhilosophyCore } from '@/components/feature/philosophy';
import {
  DrawerTechnologies,
  mainTechnologies
} from '@/components/feature/technologies';
import { DrawerTools, mainTools } from '@/components/feature/tools';
import { H2, Ol } from '@/components/feature/typography';

export const instant = false;

export default async function IntroductionPage() {
  return (
    <>
      <ScrollToTop />

      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <DotsDivider dots={1} delay={-250} className="mt-0 mb-4 sm:mb-6" />

      <Animate delay={0.16}>
        <Container as="section">
          <h1 className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[0].text}
          </h1>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[0].paragraphs}
            terms={introductionStatements[0].terms}
          />
        </Container>
      </Animate>

      {/* The primary action: reveals as soon as any of it is on screen (no -100px
          inset), so it never waits for a scroll on a short first screen. */}
      <Animate delay={0.32} viewport={{ once: true, margin: '0px' }}>
        <PageNavigationBar />
      </Animate>

      <Animate>
        <Container as="section">
          <h2>Principles</h2>

          <Ol>
            {introductionPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </Ol>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate delay={0.32}>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[1].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[1].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate delay={0.44}>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[2].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[2].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[3].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[3].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[4].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[4].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[5].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[5].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[6].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[6].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[7].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[7].paragraphs}
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate className="bg-primary text-primary-foreground">
        <Container as="section">
          <div className="mb-0 py-8 text-statement leading-[1] font-semibold text-balance text-primary-foreground">
            {introductionStatements[8].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[8].paragraphs}
            className="-mt-3 pb-8 text-primary-foreground"
          />
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="mb-5 text-statement leading-[1] font-semibold text-balance text-foreground">
            {introductionStatements[9].text}
          </div>
          <IntroductionStatementParagraphs
            paragraphs={introductionStatements[9].paragraphs}
            className="mt-0 mb-5"
          />

          <PhilosophyCore />
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
