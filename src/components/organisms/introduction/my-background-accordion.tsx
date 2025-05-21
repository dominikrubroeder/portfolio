import { Accordion } from '@/components/atoms/accordion';
import { Badge } from '@/components/atoms/badge';
import { Blockquote } from '@/components/atoms/blockquote';
import { ExternalLink } from '@/components/atoms/external-link';
import { Ul } from '@/components/atoms/ul';
import { Markup } from '@/components/atoms/markup';

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
          was the most motivation thought which drives my mentality to keep on
          learning.
        </p>

        <p>
          With that, building large applications in the modern JavaScript
          ecosystem inevitabilty leads to the big players
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
          the wide spread adaptions and job opportunities.
        </p>

        <p>
          Also, with React i felt more in the real JavaScript environment than
          with Vue (which can be a pro or a con, depending on how you look at
          it).
        </p>

        <p>
          TypeScript came as last piece to the puzzle, which in the
          retrospective was a wise decision, as most of today&#39;s web
          applications or frameworks require
          <ExternalLink href="https://www.typescriptlang.org">
            TypeScript
          </ExternalLink>
          as the base.
        </p>

        <p>Of course, there are much more frameworks out there, like:</p>

        <Ul>
          <li>Astro</li>
          <li>Gatsby</li>
          <li>Nuxt (Fullstack Vue.js framework)</li>
          <li>Remix</li>
          <li>Svelte</li>
          <li>and several more</li>
        </Ul>

        <p>
          but in the end, i stick to a tech stack because once i was able to
          create my ideas into real applications, the framework is the main
          building tool making this thought a reality.
        </p>

        <hr />

        <Blockquote>
          Today i can say: <b>I enjoy what i do</b>. While i&#39;m not saying
          the learning path was, and is not causing headaches or feeling like
          you always have to be on the latest state to keep up with the
          ecosystem changes; it&#39;s worth it. It&#39;s worth it to me as a UX
          Design Engineer to challenge, exchange, confront and enhance my
          knowledge on a almost day to day basis, because i&#39;m enjoying what
          i do with it, so i know, it&#39;s worth to put the energy into it that
          it requires.
        </Blockquote>
      </div>
    </Accordion>
  );
}
