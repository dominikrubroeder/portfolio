import { ExternalLink } from '@/components/atoms/external-link';
import { H3, Ul } from '@/components/organisms/typography';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';
import { BrandLogo } from '@/components/organisms/brand';
import { Hr } from '@/components/atoms/hr';
import { Divider } from '@/components/atoms/divider';
import { Blockquote } from '@/components/atoms/blockquote';
import { IconTheProductEngineeringSweetSpotAnimated } from '@/components/atoms/icon/icon-the-product-engineering-sweet-spot-animated';

export function IntroductionMyBackground() {
  return (
    <div className="space-y-4">
      <div>
        <BadgeHrGroup badgeProps={[{ children: '2016' }]} />

        <H3>Started as a designer</H3>

        <p>
          <b className="font-bold text-foreground">Back in 2016</b>, i started
          as Media Designer in a small digital agency &#39;Loy GmbH&#39; where
          we focused on small or mid-sized companies handling their online
          e-commerce business for them.
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
      </div>

      <div>
        <BadgeHrGroup badgeProps={[{ children: '2017' }]} />

        <H3 className="mt-0">From design to development, a first step</H3>

        <p>
          At first, i only handled HTML and CSS changes, primarily in Shopware 5
          at that time, which used Twig as template engine.
        </p>

        <p>
          JavaScript was the part were i had the least knowledge. Coding in
          general was new to me – but i was always fascinated by the ability to
          do it. So the only chance for me to do it was to learn it by myself –
          since my training was about design.
        </p>

        <p>
          I took a first Udemy course, and another one, and another one. Sample
          projects helped me to deepen the practise. As with all languages, if
          you don't speak it regularly, it won't stick for long.
        </p>

        <p>
          It took me several starts until this whole ecosystem clicked to me.
          But the more i knew about it, the more i knew: i found something which
          i really care and be enthusiastic about.
        </p>

        <p>Much thanks to:</p>

        <Ul listStyle="disc">
          <li>
            <ExternalLink href="https://www.udemy.com/user/brad-traversy">
              <span>Brad Traversy</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.udemy.com/user/jonasschmedtmann/">
              <span>Jonas Schmedtmann</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.udemy.com/user/academind">
              <span>Maximilian Schwarzmüller</span>
            </ExternalLink>
          </li>
        </Ul>

        <p>
          Being able to code also gave my design career a great boost: when
          designing i was now better on estimating the required technical effort
          to implement it, being more aware of how a design change will affect
          the technical user interface and its budget.
        </p>
      </div>

      <div>
        <BadgeHrGroup badgeProps={[{ children: '2021' }]} />

        <H3 className="mt-0">React, Next.js and TypeScript</H3>

        <p>
          Translating an idea from the mind, to paper, to pixel, to code into
          real-world applications become the most motivating thought that drove
          my mentality to keep on learning.
        </p>
        <p>
          With that, building large applications in the modern JavaScript
          ecosystem inevitability led to the big players
          <ExternalLink href="https://react.dev" className="ml-0.5">
            <BrandLogo brand="React" id="introduction-react" />
            <span>React</span>
          </ExternalLink>
          and
          <ExternalLink href="https://nextjs.org" className="ml-0.5">
            <BrandLogo brand="Next.js" id="introduction-nextjs" />
            <span>Next.js.</span>
          </ExternalLink>
        </p>
        <p>
          While i also took a close look at
          <ExternalLink href="https://vuejs.org" className="ml-0.5">
            <BrandLogo brand="Vue.js" id="introduction-vue" />
            <span>Vue</span>
          </ExternalLink>
          and enjoyed the elegant and more &#39;premium&#39; syntax of it, i
          stuck and got more into React because of its larger community, the
          wide-spread package options and the job opportunities.
        </p>
        <p>
          Also, with React i felt more in the real JavaScript environment than
          with Vue (which can be a pro or a con depending on how you look at
          it).
        </p>
        <p>
          <ExternalLink href="https://www.typescriptlang.org">
            <BrandLogo brand="TypeScript" id="introduction-typescript" />
            <span>TypeScript</span>
          </ExternalLink>
          came as last piece to the puzzle which in the retrospective was a wise
          decision, as most of today&#39;s web applications or frameworks
          require TypeScript as the base.
        </p>
        <p>Of course, there are much more frameworks out there, like:</p>
        <Ul listStyle="disc">
          <li>
            <ExternalLink
              href="https://astro.build/"
              title="Visit Astrob website"
              aria-label="Visit Astrob website"
              className="[&_svg:first-child]:mb-0"
            >
              <BrandLogo brand="Astro" id="introduction-astro" />
              <span>Astro</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://nuxtjs.org/"
              title="Visit Nuxt website"
              aria-label="Visit Nuxt website"
              className="ml-0.5"
            >
              <BrandLogo brand="Nuxt" id="introduction-nuxt" />
              <span>Nuxt</span>
            </ExternalLink>
            <span className="font-normal">(Fullstack Vue.js framework)</span>
          </li>
          <li>
            <ExternalLink
              href="https://remix.run/"
              title="Visit Remix website"
              aria-label="Visit Remix website"
            >
              <BrandLogo brand="Remix" id="introduction-remix" />
              <span>Remix</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://svelte.dev/"
              title="Visit Svelte website"
              aria-label="Visit Svelte website"
            >
              <BrandLogo brand="Svelte" id="introduction-svelte" />
              <span>Svelte</span>
            </ExternalLink>
          </li>
          <li>and several more</li>
        </Ul>
        <p>
          But in the end, the tech stack is the <i>framework</i> bringing the
          application to life, not the key factor of the project.
        </p>
        <p>
          Together with other tools, technologies and people, it adds to the
          system that makes this initial thought a reality.
        </p>
      </div>

      <div className="hidden">
        <BadgeHrGroup badgeProps={[{ children: '2026' }]} />

        <H3 className="mt-0">
          Making the full circle, connecting with my root dots
        </H3>

        <p>TBD.</p>

        <div className="hidden">
          <IconTheProductEngineeringSweetSpotAnimated id="" />

          <p>
            On the left side, we have design. Standing for research, concept and
            visualization. On the right side, we have development, standing for
            performing, building and function.
          </p>

          <p>
            The overlap, this is what i call
            <i className="ml-1">the product engineering sweet spot</i>, the best
            place to be for engineering a digital product — because it embodies
            the perfect mix of all the things that are required.
          </p>

          <p>
            Because, design and development both rely on another crucial
            department: the business. So lets put business to the graph:
          </p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>

          <p>
            Then, the business is talking to the marketing and sales team,
            fighting for awareness, advocating and selling the actual product –
            so we might have to also add them here to the picture as well:
          </p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>

          <p>
            Without the actual equipment and people in the organization, nothing
            of this will work. So, what do we need? Exactly. HR and IT, added to
            the graph:
          </p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>
          <p>Hmmm. Who is managing this people? We need managers!</p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>
          <p>
            Great. When we have a good amount of our app built, how do we know
            where to improve, how the app performs and how users respond, think
            and interact with the app?
          </p>

          <p>Right. We need another department: Data and Analytics</p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>
          <p>
            Wow, we are growing, but what now? We are deep into our product,
            what is a good direction to go for next? Well, maybe consultants can
            help us.
          </p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>
          <p>Hopefully, I think, the picture is clear by now.</p>

          <p>
            Design, Engineering, Marketing, Business, Sales, Product,
            Operations, IT, Consulting, HR, Data, Analytics, Consulting plus
            many many many more are needed to fulfill the whole job, the product
            engineering pipeline. One department needs the other, one department
            is connected to the other. Everyone has to do their part and
            contribution with deliberate, honest effort, encouragement and
            dedication to make it all work.
          </p>

          <p>But it is worth it!</p>

          <p>
            As the famous UX technologist Don Normans would like to say: the
            result is very "delightful" and "rewarding". And most probably
            successful.
          </p>

          <p>Because in the end what turns out is this:</p>

          <div className="mb-3 flex items-center justify-center text-muted-foreground">
            <div className="relative size-14">
              <span className="absolute bottom-0 left-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-2 border-foreground" />
              <span className="absolute top-1/2 left-1/2 flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
            </div>
          </div>

          <p>
            The flower of product engineering, showcasing a simple fact:
            <b className="ml-1">
              it takes all to create a great and successful product
            </b>
            .
          </p>

          <p className="mb-0">
            My job as a design engineer is to distill and filter all those
            requirements, internally and externally, into the final designed
            product. Weather it is a concept, an interface or an entire app. The
            same principles have to be applied, and we need this prerequisite
            knowledge from all the departments to design, build and deliver the
            right product based on the right fundamentals.
          </p>

          <Divider variant="three-dotted" />

          <p>
            Personally, it took me a while to accept that there is not
            <i className="mx-1">the one thing</i>
            that changes a product and its success, a simple recipe you can
            blindly follow to achieve what you want to achieve. It is the
            greater total that is more than the sum of it ingredients. Everyone
            and every department needs to make their honest and dedicated
            contribution to make it all work, and to make it successful,
            healthy, satisfied, good-mooded, sustainable and stand the test of
            time.
          </p>

          <p>Some other things i learned this year:</p>

          <p>
            You have to look closely on a daily basis what is the right
            descision for the given situation, sometimes look broader and widen
            your perspective on the other days. Ask others in case of questions,
            reach out to them and talk about open stuff and connect to find the
            best solution.
          </p>

          <p>There is often a reference to the famous equation:</p>

          <Blockquote>1 + 1 = 3</Blockquote>

          <p>
            And to me this equation is totally true, even tho it is
            mathematically not correct (well, maybe this is an even greater
            reason to believe in it).
          </p>

          <p>
            I want to continue this believe and apply it regularly to everyday
            work, conversations and actually, to everyday life. A lot of
            similarities can be shared here. And of course also for building
            products as digital interfaces like they should be build:
            holistically.
          </p>

          <Divider variant="three-dotted" />

          <p>
            <b>Design Engineering</b>. It is per definition described as "Design
            engineering combines design (appearance) with coding (functionality)
            to create smooth, easy user experiences."
          </p>

          <Divider variant="three-dotted" />

          <p>
            All departments of an organization target the same outcome:
            providing a great product.
          </p>

          <p>
            <span className="inline-flex size-4 shrink-0 rounded-full bg-primary" />{' '}
            This is what i call <i>the product engineering sweet spot</i>
            Everything around that is research, testing, prototyping,
            developing, designing, product management, consulting – funneled and
            backed into the app. The app, as a holistic whole in the center.
          </p>

          <p>
            Why? This incoorporate all aspecting of developing digital products
            together. From research, concept, UX, visual design, prototyping to
            building performant applications in code.
          </p>

          <p>
            <b>Design Engineering.</b> It is per definition described as "Design
            engineering combines design (appearance) with coding (functionality)
            to create smooth, easy user experiences."
          </p>

          <p>
            This makes the workflow complete from the design sketch to
            production-ready frontend code. To plan, visualize and create on the
            design side and to build, perform and function in the engineering
            part. Successful user interfaces need both – plus the fundamentals
            of the business, marketing and sales strategy baked and embodied
            into it.
          </p>

          <p>
            But as the possibilities seem endless in the era of AI, another
            topic arises more and more: requirement engineering.
          </p>

          <p>
            When everything can be build and it is not a question of the "how"
            and "if", the question wanders more to the "what" and "why" – like
            show me the real benefit of what you're building, what is the
            purpose. This pool of options requires a clear definition about the
            project (and task) goals, dos, don'ts and constraints – in other
            words, the <i>requirements</i> are getting more important than ever.
          </p>

          <p>
            Otherwise the result will be fuzzy, and budget plus timeline is lost
            quickly, moving into the false direction.
          </p>

          <p>
            During the last years working more in the field of coding, i noticed
            something crucially for me. I miss design. Without a vision while
            work, simply building user interfaces for the sake of it, feels
            shallow, almost hollow to me. No soul, no good reason to reach for.
            It becomes harder for me to enjoy what i am doing.
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
      </div>
    </div>
  );
}
