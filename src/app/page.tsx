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
import { PhilosophyCore } from '@/components/feature/philosophy';
import { mainTechnologies } from '@/components/feature/technologies';
import { DrawerTechnologies } from '@/components/feature/technologies/technologies-drawer';
import { mainTools } from '@/components/feature/tools';
import { DrawerTools } from '@/components/feature/tools/tools-drawer';
import { H2, Ol } from '@/components/feature/typography';

export const instant = false;

export default async function HomePage() {
  return (
    <>
      <ScrollToTop />

      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <h1 className="sr-only">Design and code speak the same language</h1>

      <DotsDivider dots={1} delay={-250} className="mt-0 mb-6">
        <div className="hidden text-muted-foreground peer-hover:block">
          Hovering ...
        </div>
      </DotsDivider>

      <Animate delay={0.16}>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            I connect the worlds of design and code
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate delay={0.32}>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            It&#39;s a craft about UI components and design systems
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate delay={0.44}>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            Building things is about composing things
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            Design is about care, intention and purpose
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            Code is about functionality, efficiency and performance
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            UX is about feel, satisfaction and delight
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            Agents are about orchestration and execution
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate className="bg-primary text-primary-foreground">
        <Container as="section">
          <div className="mb-0 py-8 text-5xl leading-[1.1] font-semibold text-balance text-primary-foreground xs:text-6xl sm:text-7xl">
            We compose, direct and oversee
          </div>
        </Container>
      </Animate>

      <DotsDivider />

      <Animate>
        <Container as="section">
          <div className="text-5xl leading-[1.1] font-semibold text-balance text-foreground xs:text-6xl sm:text-7xl">
            So we shape the core product UI
          </div>

          <PhilosophyCore />
        </Container>
      </Animate>

      <DotsDivider animate={false} alignment="horizontal" />

      <Animate>
        <Container className="space-y-3">
          <Blockquote className="mt-0 mb-3">
            I love crafting UIs, their patterns, principles and systems.
          </Blockquote>

          <p>
            I also enjoy concepts and prototyping a lot. Quickly testing new
            ideas or approaches in between brings creativity more into play and
            keeps it alive.
          </p>

          <p>
            Together with today&#39;s tools and technologies we build
            user/business-need orientated and scalable user interfaces.
          </p>

          <p>
            The user experience is the leading factor how well a UI is
            perceived, consumed and remembered by the user. It is the winning
            factor of how satisfied people are using (digital) products and
            services.
          </p>

          <p>– Dominik</p>
        </Container>
      </Animate>

      <Animate>
        <Container as="section">
          <h2>Principles</h2>

          <Ol>
            <li>
              Design in context — of the environment, of the people, of the
              brand
            </li>
            <li>
              Design in system — streamline processes, principles, components as
              close as possible for one ecosystem
            </li>
            <li>
              Design problem-focused — know the problem you&#39;re solving, it
              is the root problem to be solved, not its symptoms
            </li>
            <li>
              Design business-aware — cover business cases the company and its
              users are about, to root your design in a economically supported
              background
            </li>
            <li>
              Design sustainable — make maintainable systems that can be
              upgraded, updated, expanded and are documented
            </li>
            <li>
              Design the experience — make it enjoyable, with a satisfying,
              pleasurable ease of use, think about the product as a holistic
              whole
            </li>
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
