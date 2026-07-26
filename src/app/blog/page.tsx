import { Container } from '@/components/organisms/layout';
import { Accordion } from '@/components/molecules/accordion';
import { Blockquote } from '@/components/atoms/blockquote';
import { Ul } from '@/components/organisms/typography';
import {
  IconAtomicDesign,
  IconAtomicDesignTokens
} from '@/components/atoms/icon';
import { Markup } from '@/components/atoms/markup';
import { ExternalLink } from '@/components/atoms/external-link';
import { Hr } from '@/components/atoms/hr';
import { IntroductionTechStack } from '@/components/organisms/introduction';
import { PageTemplate } from '@/components/templates/page-template';
import { redirect } from 'next/navigation';

export default async function BlogPage() {
  redirect('/');

  return (
    <PageTemplate
      h1="Blog"
      heroBlockquote="Blog description"
      heroNavigationHiddenLink="/blog"
    >
      <Container className="animate-in-to-left-160">
        <small className="uppercase">Blog, Principles, Thoughts</small>

        <Accordion
          variant="contained"
          buttonVariant={{ variant: 'contained-foreground' }}
          items={[
            {
              title:
                'Architecture: Atomic Design ... Subatomic Design ... Design Tokens and more',
              children: (
                <div className="space-y-3">
                  <div className="space-y-3">
                    <b className="block">The Atomic Design Model</b>

                    <Blockquote className="mt-4">
                      <p>
                        <b>Atomic Design</b> is a structured component
                        architecture approach that organizes components in
                      </p>
                      <Ul listStyle="disc">
                        <li>Atoms</li>
                        <li>Molecules</li>
                        <li>Organisms</li>
                        <li>Templates</li>
                        <li>
                          and Pages
                          <span className="ml-1 font-normal text-muted-foreground">
                            concurrently working together to create effective
                            and scalable user interface design systems.
                          </span>
                        </li>
                      </Ul>
                    </Blockquote>

                    <p>
                      It is worth mentioning that this explicit naming is not
                      mandatory, it is about the mental model of this approach:
                      going from the smallest element to the biggest, and group
                      components accordingly to that.
                    </p>
                  </div>

                  <b className="block">
                    Atomic Design: Created in 2013, still relevant today
                  </b>
                  <div className="text-muted-foreground">
                    <p>
                      Brad Frost created
                      <b className="mx-1.5 inline-flex items-center gap-1.5">
                        <IconAtomicDesign className="size-4" />
                        Atomic Design
                      </b>
                      in 2013 and it got extended with the
                      <b className="mx-1.5 inline-flex items-center gap-1.5">
                        <IconAtomicDesignTokens
                          id="blog-icon-atomic-design"
                          className="size-3"
                        />
                        Subatomic
                      </b>
                      Design approach in 2024. He structures components in
                      standalone elements from smallest (Atoms) to biggest
                      (Pages), making it highly scalable for components from a
                      count of 1-5 up to 100, 1000 or 10000 as demands grow.
                      with reference to the periodic table of chemistry.
                    </p>

                    <p>
                      making them organizable, and apply structure. which had a
                      remarkable impact on how we organize and structure
                      component systems and design system in general.
                    </p>

                    <p>
                      While this approach is very handy and can be applied
                      across systems, touchpoints (Note: Make tooltip here, what
                      does cross-system mean), across tools (Note: Make tooltip
                      here, what does cross-tooling mean) and in design and in
                      code vice versa –
                      <b className="ml-1">
                        Brad himself repeatably says having
                        <i className="ml-1">a</i> system in place is even more
                        important than having <i>this</i> exact structure in
                        place
                      </b>
                      . AI-generated tools often provide in a simple
                      <Markup>ui</Markup> folder... The architectural system
                      simply needs to be understandable and usable by all
                      participating people and it must fit into the
                      organizations way of work.
                    </p>

                    <p>
                      So it is more about the mindset, the mental model and
                      really making thoughts about a clear way to structure and
                      organize components that's important.
                    </p>

                    <p>
                      I cannot encourage you enough to check out
                      <ExternalLink
                        href="https://bradfrost.com"
                        title="Go to Brad Frost website"
                        aria-label="Click to go to Brad Frost website"
                      >
                        his work
                      </ExternalLink>
                      and courses on his website, also providing material about
                      AI + Design Systems in combination.
                    </p>

                    <Hr />

                    <Ul headline="Sources" listStyle="disc">
                      <li>
                        <ExternalLink
                          href="
                    https://bradfrost.com"
                        >
                          Brad Frost website
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href="https://atomicdesign.bradfrost.com">
                          Atomic Design by Brad Frost paper
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href="https://designtokenscourse.com">
                          Subatomic Design by Brad and Ian Frost website
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href="https://aianddesign.systems">
                          AI + Design Systems by TJ Pitre, Brad and Ian Frost
                          course
                        </ExternalLink>
                      </li>
                    </Ul>
                  </div>
                </div>
              )
            },
            {
              title:
                'Animations: Delightful joy! And a guiding navigation and interaction principle',
              children: (
                <div>
                  <p>
                    <b>
                      Animations provide navigation guidance and add delightful
                      joy to user interactions, transitions
                    </b>
                  </p>

                  <p>
                    Animations exist in different types and styles:
                    Microanimations, Animations on scroll, on Click
                  </p>

                  <p>
                    A well known animation engineer in the react community is
                    Emil Kowalski, dealing with details of animations and
                    interaction principle in good detail. Because it makes a
                    difference. A difference in the perception of animations and
                    their emmitting feel–therefore, the feel of the entire
                    interface.
                  </p>

                  <p>
                    Fast, slight animation lead to a performant website, smooth,
                    slow and relaxed animations lead to wellness or health-based
                    websites. Animations and transitions and interactions
                    provide feel to user, and visualise the brands intensions
                    with it as well. "What the brand should be wahrgenommen"
                  </p>

                  <p>
                    But besides the verceral impact of animations in UI design,
                    it also has a functional impact. Notice how you will notice
                    the last element the most:
                  </p>

                  <p>
                    Notice how your eye will move to the last element: #example
                    here that's visual guidance.
                  </p>
                </div>
              )
            },
            {
              title: 'Color: A major player',
              children: (
                <div>
                  <p>
                    60/30/10 principle is a essential guidline to priotizie
                    color, and make aware of the most prominent and important
                    actions
                  </p>
                </div>
              )
            },
            {
              title: 'Typography: Character vs. Allrounder',
              children: (
                <div>
                  <p>
                    One thing is for sure: next to color, typography is the next
                    big area for a brand to be recognized, even more on the
                    subconscious level.
                  </p>

                  <p>
                    But look at those differences: #example here of remarkable
                    fonts
                  </p>

                  <p>Do you know them?</p>
                  <p>
                    You have to ask yourself, what do i want to achieve with my
                    typography? Do i want to stand out? How does it fit to my
                    brand, are there already some guidlines made up for it?
                  </p>
                </div>
              )
            },
            {
              title: 'Psychology: Why it plays a major role in UX',
              children: (
                <div>
                  What does connect us all and is the majority of people
                  similar, or at least overlaps, same structure and patterns
                  appear across people? Psychology.
                  <p>
                    Psychology is the study of human behavior and mental
                    processes, so why is it not recognized as more important in
                    the field of UX? In his book, The Design of Everyday Things,
                    the founder Don Norman covers a lot of topics about this
                    interseption of psychology, cognition and design. He also
                    lays the foundations about the user expereinece here, almost
                    coined the term <i>user expereince</i> himself.
                  </p>
                  <p>
                    Another important person in this area is Jon Yablonski, with
                    his collection of guidelines and principles of psychology
                    and UX: The Laws of UX.
                  </p>
                  <p>
                    In there, he covers and connects many findings, resources
                    and research into applicable action items, making them
                    available to designers and engineers but also marketers and
                    sales people. This is also a great opportunity for having
                    the cards in place for meetings and disucssions.
                  </p>
                  <p>
                    The third author showing the importance of psychology and UX
                    is Jonas Reggelin. His work "Neurowebdesign" shows how the
                    human mind (psychology) influences and relates to the design
                    and layout of websites and user interfaces in general – how
                    they are perceived by visitng users, and what make the
                    differences and effects of desicioning.
                  </p>
                </div>
              )
            },
            {
              title: 'Descioning: How to argument design descitions?',
              children: (
                <div>
                  In his book "Articulating design desiscions", Tom Greever
                  describes ways and principles on how arguments can be made. In
                  there, wroke a book called "Articulating design descisions"
                  which covers the complete flow
                </div>
              )
            },
            {
              title: 'My Tech Stack of Choice',
              children: <IntroductionTechStack />
            }
          ]}
          accordionGroupId="accordion-group-introduction"
          focusView="start"
          className="mt-0"
        />
      </Container>
    </PageTemplate>
  );
}
