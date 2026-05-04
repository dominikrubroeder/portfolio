import { ExternalLink } from '@/components/atoms/external-link';
import { Ul } from '@/components/atoms/ul';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';
import { BrandName } from '@/components/organisms/brand';
import { Hr } from '@/components/atoms/hr';

export function IntroductionMyBackground() {
  return (
    <div>
      <BadgeHrGroup badgeProps={[{ children: '2016' }]} />

      <p>
        <b>Started as a designer</b>
      </p>
      <p>
        <b className="font-bold text-foreground">Back in 2016</b>, i started as
        Media Designer in a small digital agency &#39;Loy GmbH&#39; where we
        focused on small or mid-sized companies handling the online e-commerce
        business for them.
      </p>
      <p>
        My task was to create layouts, back in the days in Photoshop, and
        providing those layouts to the developer.
      </p>
      <p>
        Not long time later, i discovered that i don&#39;t want to stop there at
        designing, i wanted to know and understand what&#39;s happening after
        the design step.
      </p>

      <BadgeHrGroup badgeProps={[{ children: '2017' }]} />

      <p>
        <b> From design to development, a first step</b>
      </p>

      <p>
        At first, i only handled HTML and CSS changes, primarily in
        <BrandName
          brandName="Shopware"
          label={
            <ExternalLink href="https://twig.symfony.com">
              Shopware 5
            </ExternalLink>
          }
          className="mr-0.5 ml-1.5"
        />
        at that time, which used
        <BrandName
          brandName="Twig"
          label={
            <ExternalLink href="https://twig.symfony.com">Twig</ExternalLink>
          }
          className="mr-0.5 ml-1.5"
        />
        as template engine.
      </p>
      <p>
        <BrandName
          brandName="JavaScript"
          label="JavaScript"
          className="mr-0.5"
        />
        was coming slowly into the game, and i took a first Udemy course. (Props
        to the masters
        <ExternalLink
          href="https://www.udemy.com/user/academind"
          className="mr-0 ml-1"
        >
          Maximilian Schwarzmüller
        </ExternalLink>
        ,
        <ExternalLink href="https://www.udemy.com/user/jonasschmedtmann/">
          Jonas Schmedtmann
        </ExternalLink>
        and
        <ExternalLink href="https://www.udemy.com/user/brad-traversy">
          Brad Traversy
        </ExternalLink>
        for introducing me in the fundamentals and beyond).
      </p>
      <p>
        It took me several starts until this ecosystem clicked to me. But the
        more i knew about it, the more i knew: i found something which i really
        care and be enthusiastic about.
      </p>
      <p>
        From there on i focused on adapting the design changes into the real,
        production-ready user interfaces i initially designed.
      </p>

      <BadgeHrGroup badgeProps={[{ children: '2021' }]} />

      <p>
        <b>React, Next.js and TypeScript</b>
      </p>
      <p>
        Translating an idea from the mind, to paper, to pixel, to code into
        real-world applications has always been the most motivating thought that
        drove my mentality to keep on learning.
      </p>
      <p>
        With that, building large applications in the modern JavaScript
        ecosystem inevitability leads to the big players
        <BrandName
          brandName="React"
          label={<ExternalLink href="https://react.dev">React</ExternalLink>}
          className="mr-0.5 ml-1.5"
        />
        and
        <BrandName
          brandName="Next.js"
          label={
            <ExternalLink href="https://nextjs.org" className="mr-0">
              Next.js
            </ExternalLink>
          }
          className="ml-1.5"
        />
        .
      </p>
      <p>
        While i also took a close look at
        <BrandName
          brandName="Vue.js"
          label={<ExternalLink href="https://vuejs.org">Vue</ExternalLink>}
          className="mr-0.5 ml-1.5"
        />
        and enjoyed the elegant and more &#39;premium&#39; syntax of it, i stuck
        and got more into React because of its larger community, the wide-spread
        package options and the job opportunities.
      </p>
      <p>
        Also, with React i felt more in the real JavaScript environment than
        with Vue (which can be a pro or a con depending on how you look at it).
      </p>
      <p>
        <BrandName
          brandName="TypeScript"
          label={
            <ExternalLink href="https://www.typescriptlang.org">
              TypeScript
            </ExternalLink>
          }
          className="mr-0.5"
        />
        came as last piece to the puzzle which in the retrospective was a wise
        decision, as most of today&#39;s web applications or frameworks require
        TypeScript as the base.
      </p>
      <p>Of course, there are much more frameworks out there, like:</p>
      <Ul listStyle="disc">
        <li>
          <BrandName
            brandName="Astro"
            label={
              <ExternalLink
                href="https://astro.build/"
                title="Visit Astrob website"
                aria-label="Visit Astrob website"
              >
                Astro
              </ExternalLink>
            }
          />
        </li>
        <li>
          <BrandName
            brandName="Nuxt"
            label={
              <>
                <ExternalLink
                  href="https://nuxtjs.org/"
                  title="Visit Nuxt website"
                  aria-label="Visit Nuxt website"
                  className="mr-0.5"
                >
                  Nuxt
                </ExternalLink>
                (Fullstack Vue.js framework)
              </>
            }
          />
        </li>
        <li>
          <BrandName
            brandName="Remix"
            label={
              <ExternalLink
                href="https://remix.run/"
                title="Visit Remix website"
                aria-label="Visit Remix website"
              >
                Remix
              </ExternalLink>
            }
          />
        </li>
        <li>
          <BrandName
            brandName="Svelte"
            label={
              <ExternalLink
                href="https://svelte.dev/"
                title="Visit Svelte website"
                aria-label="Visit Svelte website"
              >
                Svelte
              </ExternalLink>
            }
          />
        </li>
        <li>and several more</li>
      </Ul>
      <p>
        But in the end, the tech stack is the <i>framework</i> bringing the
        application to life, not the key factor of the project.
      </p>
      <p>
        Together with other tools and technologies, they build up the
        technological system that makes this initial thought a reality.
      </p>

      <BadgeHrGroup badgeProps={[{ children: '2026' }]} />

      <p>
        <b>Making the full circle, connecting with the root dots</b>
      </p>

      <p>
        Design Engineering. It is per definition described as "Design
        engineering combines design (appearance) with coding (functionality) to
        create smooth, easy user experiences." which makes it good for a person
        having both abilities: to plan, visualize and create on the one hand and
        to build, perform and function on the other.
      </p>

      <p>
        This benefit, of having both sides of the spectrum makes it easier and
        better to design, while also better at coding because the same person
        knows what the other department is about and the values of it. Also, in
        the end both departments are needed to create the desired product (the
        user interface) that should mirror the business' goals and intentions
        for the people using it.
      </p>

      <p>
        During the last years working more in the field of coding, i noticed
        something crucially for me. I miss design. Without a vision while work,
        simply building user interfaces for the sake of it, feels shallow,
        almost hollow to me. No soul, no good reason to reach for. It becomes
        harder for me to enjoy what i am doing.
      </p>

      <p>
        That's why i am convinced that projects and everything what you do
        should have a clear reason why, a descriptive meaning what you want to
        achieve before you do it. This means a vision description, a mission
        description and a description of the values of it. And – sticking to it,
        investing time into it.
      </p>

      <p>
        It actually has another benefit: you have a clear path to go on. I'm
        sure that when the path is clear, so will be the product, with more
        focus and clear intentions.
      </p>

      <p>
        In the current industry, this relates most of all to requirements
        engineering, making it super clear what's to build, why to build and how
        to build. Without this roadmap, products, features or other enhancements
        are set up to fail before they had even begun.
      </p>

      <p>
        This may sound obvious, but in day to day work this often gets lost
        quickly, especially in longer-lasting projects and the overall way of
        work, focusing primarily on "making it work" and "shipping it".
        Fundamental requirements changing while being in the process is not
        agile, it is bad planning. With the lack of those definitions, the
        result will be fuzzy. Therefore, strong management is needed. And people
        that what to carry the idea and vision from beginning to end.
      </p>

      <p>
        With all of that said, i am happy to see what is coming next, and what
        good things we can build for the web and the people using it.
      </p>

      <Hr />

      <p>
        Source:
        <ExternalLink
          color="muted"
          href="https://chatgpt.com/share/69dcbda0-aae4-8330-b839-8157a9fec032"
          aria-label=""
        >
          Design Engineering
        </ExternalLink>
      </p>
    </div>
  );
}
