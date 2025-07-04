import { Accordion } from '@/components/atoms/accordion';
import { Badge } from '@/components/atoms/badge';
import { Blockquote } from '@/components/atoms/blockquote';
import { ExternalLink } from '@/components/atoms/external-link';
import { Markup } from '@/components/atoms/markup';
import { Ul } from '@/components/atoms/ul';

export function MyBackgroundAccordion() {
  return (
    <Accordion title="My Background">
      <div>
        <h4 className="flex items-center gap-2">
          <Badge>2016</Badge>
          Started as designer
        </h4>

        <p>
          <b className="font-bold text-foreground">Back in 2016</b>, i started
          as Media Designer in a small ecommerce company &#39;Loy GmbH&#39;
          where we focused on small or mid-sized companies handling the online
          ecommerce business for them.
        </p>

        <p>
          My task was to create layouts, back in the days in Photoshop, and
          providing those layouts to the developer.
        </p>

        <p>
          Not long time later, i discovered that i don&#39;t want to stop there
          at designing, i wanted to know and understand what&#39;s happening
          after the design step.
        </p>

        <h4 className="flex items-center gap-2">
          <Badge>2017</Badge> From design to development, a first step
        </h4>

        <p>
          At first, i only handled HTML and CSS changes, primarily in Shopware 5
          at that time, which used
          <Markup as="span" color="muted">
            .twig
          </Markup>
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
          more i knew about it, the more i knew: i found something which i
          really care and be enthusiastic about.
        </p>

        <p>
          From there on, i focused on adapting my design changes into the real
          user interfaces i designed for.
        </p>

        <h4>
          <Badge>2021</Badge> React, Next.js and TypeScript
        </h4>

        <p>
          Being able to translate a design idea, into real world applications
          was and is as of today the most motivation thought which drives my
          mentality to keep on learning.
        </p>

        <p>
          With that, building large applications in the modern JavaScript
          ecosystem inevitability leads to the big players
          <ExternalLink href="https://react.dev">React</ExternalLink> and
          <ExternalLink href="https://nextjs.org" className="mr-0">
            Next.js
          </ExternalLink>
          .
        </p>

        <p>
          While i also took a close look at
          <ExternalLink href="https://vuejs.org" className="mr-0">
            Vue
          </ExternalLink>
          , and enjoyed the elegant and more &#39;premium&#39; syntax of it, i
          stuck and get more into React because of it&#39;s larger community,
          the wide spread package options and the job opportunities.
        </p>

        <p>
          Also, with React i felt more in the real JavaScript environment than
          with Vue (which can be a pro, or a con; depending on how you look at
          it).
        </p>

        <p>
          <ExternalLink className="ml-0" href="https://www.typescriptlang.org">
            TypeScript
          </ExternalLink>
          came as last piece to the puzzle, which in the retrospective was a
          wise decision, as most of today&#39;s web applications or frameworks
          require TypeScript as the base.
        </p>

        <p>Of course, there are much more frameworks out there, like:</p>

        <Ul>
          <li>
            <ExternalLink
              href="https://astro.build/"
              title="Visit Astrob website"
              aria-label="Visit Astrob website"
              className="ml-0"
            >
              Astro
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://gatsbyjs.com/"
              title="Visit Gatsby website"
              aria-label="Visit Gatsby website"
              className="ml-0"
            >
              Gatsby
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://nuxtjs.org/"
              title="Visit Nuxt website"
              aria-label="Visit Nuxt website"
              className="ml-0"
            >
              Nuxt
            </ExternalLink>
            (Fullstack Vue.js framework)
          </li>
          <li>
            <ExternalLink
              href="https://remix.run/"
              title="Visit Remix website"
              aria-label="Visit Remix website"
              className="ml-0"
            >
              Remix
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://svelte.dev/"
              title="Visit Svelte website"
              aria-label="Visit Svelte website"
              className="ml-0"
            >
              Svelte
            </ExternalLink>
          </li>
          <li>and several more</li>
        </Ul>

        <p>
          But in the end, the tech stack is the <i>framework</i> bringing the
          application to life, not <i>the</i> only key-factor of the project.
          Together with other tools and technologies, they build up the setup
          that makes this initial thought a reality.
        </p>

        <hr />

        <Blockquote>
          Today i can say: <b>I enjoy what i do</b>. With all the requirements,
          and all the people working on it, it really feels fantastic once you
          see the application up and running and in action.
        </Blockquote>
      </div>
    </Accordion>
  );
}
