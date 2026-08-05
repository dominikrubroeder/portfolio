import { ExternalLink } from '@/components/atoms/external-link';
import { H3 } from '@/components/organisms/typography';

export function IntroductionDesignPrinciples() {
  return (
    <>
      <div className="space-y-4">
        <div
          className="scroll-mt-20 space-y-2"
          id="principle-design-with-code-code-by-design"
        >
          <div className="scroll-mt-20 space-y-2">
            <H3>Design with code, code by design</H3>

            <p>
              While design covers research, concept and visualization, code
              covers implementation, performance and building the user
              interface.
            </p>

            <p>
              To me, it is not about design vs. code or code vs. design, it is
              about design <i>with</i> code and code <i>by</i> design. It is a
              synergetic connection between those professions where one benefits
              and improves the other – also known as the 1 + 1 = 3 effect.
            </p>

            <p>
              The end product is more in harmony and straightforward when both
              professions are valued similarly.
            </p>
          </div>
        </div>

        <div
          className="scroll-mt-20 space-y-3"
          id="principle-start-small-and-grow-with-demands"
        >
          <H3>Start small and grow with demands</H3>

          <div>
            <p>
              <i>Ikigai</i> is a Japanese term which describes their whole art
              of living. In the book of the same name by Ken Mogi, an own
              chapter of it is dedicated to "Starting small".
            </p>

            <p>
              I noticed it myself when i prepared for a 10km run. I always was a
              sporty person, but after a longer break i had to start from a
              lower level. How will i mangemt to get to a full 10km run, with a
              good pace and keeping it up regularly for more then just 1 month.
            </p>

            <p>
              I split it up im smaller chunks: First, run 5 times 5km, then run
              5 times 6km, then running 5 times 8km and finally, going up to
              10km. This process took about 3 month but in the end i was able to
              comfortable run 10km with the pace i desired to achieve.
            </p>

            <p>
              The lesson here for me was it's always up to the in-the-end goal
              and the person and its background that is doing it for how the
              process for it should look like.
            </p>

            <p>
              The key amphisize for design is:{' '}
              <i>you don't have to do everything at once</i>. You dont have to
              layout, design, ... if the target of a mockup is to simply
              visualize something else. The goal simply should be clearly
              visualized.
            </p>

            <p>
              This reduces the cognitive load before starting a new task and
              helps getting started, and maybe more important: sticking with it.
            </p>

            <p>
              It is very inspiring to keep the barrier low, not rush into a
              task, especially if its something new. First, see and listen what
              is requested, analyse it, ask questions, make sure you understand
              everything clearly – then, slowly digging deeper into it and
              provide ideas, recommendations or action items. sketching ideas
              and.
            </p>

            <p>
              but to see and hear the what is requested, listen to the
              requirements.
            </p>

            <p>
              To make my life easier for any task, I'd like to put the hurdle as
              low as possible and focus on the core first. This allows making
              progress in covering the most important aspects first – while the
              rest of the structure can grow with it, and align (almost)
              automatically.
            </p>

            <p>
              Depending on the task, this can be quite a challenge when it is
              cut as a big task from the beginning: this might be a sign to
              reevaluate the task requiremnts itself. Can it be broken down
              smaller? (even in smaller tasks?) (even more?)
            </p>

            <p>
              'with demands' is about what <i>really</i> needs to be done now.
              Not planned to be too much in the future, nore denining to less
              effort in the moment.
            </p>

            <p>
              The kickoff in any task or project as easy as possible, focus on
              the core. The hurdle of getting into the task and starting gets
              easier the lower the blockers are.
            </p>
          </div>
        </div>

        <div
          className="scroll-mt-20 space-y-3"
          id="principle-freeform-gathering-funnel-process"
        >
          <H3 className="block">Freeform–Gathering–Funnel Process</H3>

          <div>
            <small className="mb-3 block uppercase">Freeform</small>
            <p>
              When creativity is needed, this is the main framework i like to
              follow: First, freely pin down ideas, visions, snapshots of what a
              good solution might be, even if its correct or not. This allows
              all possibilities to be heard, seen and probably tested. It is
              also helpful because no idea is getting lost – returning to it
              later again eventually. It increases the feeling for the project
              and getting warm with the topic.
            </p>

            <small className="mb-3 block uppercase">Gathering</small>
            <p>
              Revise what you put down on paper or on the interface where you
              ideas were visualized. You can now group them and see with more
              focus what has potential to be explored in more detail. During
              this step, it is also important to regularly come back to the
              initial requirements and check if those ideas are still on the
              right path – towards the desired outcome. You might return to the
              freemform vs. gathering process 2, 3 or multiples times until i
              know it is time to proceed: funneling.
            </p>

            <small className="mb-3 block uppercase">Funneling</small>
            <p>
              Now I'm seeing clearly, looking at my results and filter out (i
              don't remove those ideas, i simply move them to another page, or
              move the filtered ideas to another page, or hide them with opacity
              / visible settings). what will be in the final output–again
              checking the requirements and compare why the solution is a good,
              fitting and appropriate solution (/approach).
            </p>
          </div>
        </div>

        <div
          className="scroll-mt-20 space-y-2"
          id="principle-design-features-not-layouts"
        >
          <H3>Design features, not layouts</H3>

          <p>
            One of the most important advices i ever got is to{' '}
            <i>design features, not layouts</i>. This comes from Alan Wathan,
            the creator of Tailwind CSS, and Steve Schroger in their paper on
            designing for developers called
            <ExternalLink href="https://refactoringui.com">
              <span>Refactoring UI</span>
            </ExternalLink>
            .
          </p>

          <p>
            It is a great principle because it helps you to focus on the core
            feature, while the outer layout "constructs" itself when you try to
            visualize the feature requirements on the canvas.
          </p>

          <p>
            So, the feature requirements actually design the corresponding
            layout for it. The task for us designers is to do exactly that:
            visualize the requirements from text form into the corresponding UI
            (layout and components) and make the feature usable, understandable
            and enjoyable.
          </p>
        </div>

        <div
          className="scroll-mt-20 space-y-2"
          id="principle-design-communicates-always"
        >
          <H3>Design communicates, always</H3>

          <p>
            When providing designs, everything communicates: the colors, the
            font, the spacing, the layout, animations, transitions, icons,
            imagery – in other words: the theme communicates.
          </p>

          <p>
            Which message do you want to transport? What should be the feel of
            the UI? Who is the target group? What do you want to communicate in
            the first couple of seconds and in the first view? Those questions
            are transported in a couple of seconds or even milliseconds from the
            view to the user.
          </p>

          <p>
            Clarifying those questions will guide your structure on the page
            from almost itself.
          </p>
        </div>

        <div
          className="scroll-mt-20 space-y-2"
          id="principle-youre-an-espresso-maker"
        >
          <H3>You're an espresso maker</H3>

          <p>
            Our job as designer is to distill and filter all the requirements,
            from internal and external sources, into the final features. Which
            in turn build the whole user interface.
          </p>

          <p>
            This requires good communication skills, being active in asking
            questions beforehand, ask for the reason why until the essence of
            the target goal we want to achieve is cristal clear. Because
            sometimes the initial request does not even fit for{' '}
            <i>solving the problem</i>.
          </p>

          <p>
            It is a band-aid for the problem, jumping right on a first solution
            thought instead of analyzing and talking about what the acutal issue
            is.
          </p>

          <p>
            So it maybe saves a couple or hundred of hours, and probably also
            money as well, to really talk down about the issue in detail, to
            find a proper, fitting and adequate solution that solve the issue at
            the root.
          </p>
        </div>

        <div
          className="scroll-mt-20 space-y-2"
          id="principle-business-leads-design-serves"
        >
          <H3>Business leads, design serves</H3>

          <p>
            No, this is not a debate about "i know what i am doing why should
            somebody tell me what to do?" – the requirements <i>must</i> come
            from the business or sales department, because they know best what
            the company is to go for, where the money comes from and to make the
            business financially successful.
          </p>

          <p>
            We as designers are not in the blind and out of control tho, we can
            consult, guide and share our opinion on those topics and can of
            course also approach our own ideas on how to achieve those business
            goals.
          </p>

          <p>
            But we must ensure that our design target those business goals,
            because no design can be successful when the business is not
            successful.
          </p>
        </div>

        <div className="scroll-mt-20 space-y-2">
          <H3>Design context-aware</H3>
          <div>
            <p>
              Are you designing for a car? Which brand? In what situation the
              people are using the design? Whether it is a digital design or a
              physical object, the rule is the same: design context-aware.
            </p>

            <p>
              We must take in account the environment, our surrounding, and the
              situation in which the people are using the design. When
              designing, it is important to know your environment. take this
              into account to make proper, fitting and more accurate solution.
            </p>
          </div>
        </div>

        <div className="scroll-mt-20 space-y-2">
          <H3>Design better user interfaces with psychology</H3>
          <div>
            <p>
              Psychology. The science of human mind and behaviour. The question
              is why not leverage those findings about cognition and perception
              of the human mind also in the field of design and the user
              experience? Many people are doing this. The author
              <ExternalLink href="https://reggelin.com" className="-mr-1">
                <b>Jonas Reggelin</b>
              </ExternalLink>
              , the product designer
              <ExternalLink href="https://jonyablonski.com">
                <b>Jon Yablonski</b>
              </ExternalLink>
              and the famous UX pioneer <b>Don Norman</b>, who has
              <ExternalLink href="https://www.nngroup.com/people/don-norman/">
                his roots in the cognitive science department
              </ExternalLink>
              .
            </p>
          </div>
        </div>

        <div className="scroll-mt-20 space-y-2" id="principle-design-in-system">
          <H3>Design in system</H3>
          <div>
            <p>
              Designing in system means leveraging a system. We don't want to
              reinvent the wheel over and over again, making the same thing over
              and over again and think about the same things again and again.
            </p>

            <p>
              We want to unify and document already solved problems which return
              regularly, and we want a system that works reliable with a
              predictable mental model.
            </p>

            <p>This way, we save time and effort to</p>

            <p>Use system thinking to solutionize</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>Combine design and code into one craft; design engineering</div>
        <div>Work with a mindful hands-on mentality</div>
        <div>
          Documentation is a crucial part of the workflow; it is good for
          manifesting and sharing knowledge, Write notes on a regular basis
        </div>
        <div>
          Consider the global scope – think system through from paper to
          production
        </div>
        <div>Compose trends with core design principles and UI patterns</div>
        <div>Fix the problem at the root, not the symptoms</div>
      </div>
    </>
  );
}
