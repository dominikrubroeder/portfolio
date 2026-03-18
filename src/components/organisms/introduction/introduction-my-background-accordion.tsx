import { ExternalLink } from '@/components/atoms/external-link';
import { Markup } from '@/components/atoms/markup';
import { Ul } from '@/components/atoms/ul';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';
import { BrandName } from '@/components/organisms/brand';

export function IntroductionMyBackgroundAccordion() {
  return (
    <div>
      <BadgeHrGroup badgeProps={[{ children: '2016' }]} />

      <p>
        <b>Started as a designer</b>
      </p>
      <p>
        <b className="font-bold text-foreground">Back in 2016</b>, i started as
        Media Designer in a small ecommerce company &#39;Loy GmbH&#39; where we
        focused on small or mid-sized companies handling the online ecommerce
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
        At first, i only handled HTML and CSS changes, primarily in Shopware 5
        at that time, which used{' '}
        <BrandName
          brandName="Twig"
          label={
            <Markup variant="muted" as="span">
              .twig
            </Markup>
          }
          className="mr-1 ml-1.5"
        />
        as their template engine.
      </p>
      <p>
        JavaScript was coming slowing into the game, and i took a first Udemy
        course (props to the masters
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
        From there on i focused on adapting my design changes into the real user
        interfaces i initially designed.
      </p>

      <BadgeHrGroup badgeProps={[{ children: '2021' }]} />

      <p>
        <b>React, Next.js and TypeScript</b>
      </p>
      <p>
        Translating an idea from the mind, to paper, to pixel, to code into
        real-world applications has always been the most motivating thought that
        drives my mentality to keep learning.
      </p>
      <p>
        With that, building large applications in the modern JavaScript
        ecosystem inevitability leads to the big players
        <BrandName
          brandName="React"
          label={<ExternalLink href="https://react.dev">React</ExternalLink>}
          className="mr-1 ml-1.5"
        />
        and
        <BrandName
          brandName="Next.js"
          label={
            <ExternalLink href="https://nextjs.org" className="mr-0">
              Next.js
            </ExternalLink>
          }
          className="-mr-4 ml-1.5"
        />
        .
      </p>
      <p>
        While i also took a close look at
        <BrandName
          brandName="Vue.js"
          label={<ExternalLink href="https://vuejs.org">Vue</ExternalLink>}
          className="mr-1 ml-1.5"
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
          className="mr-1"
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
                  className="mr-1"
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
        Together with other tools and technologies, they build up the system
        that makes this initial thought a reality.
      </p>
    </div>
  );
}
