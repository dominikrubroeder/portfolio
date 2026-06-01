import { Accordion } from '@/components/molecules/accordion';

export function IntroductionDesignPrinciples() {
  return (
    <>
      <Accordion
        variant="contained"
        items={[
          {
            title: 'Freeform–Gathering–Funnel Process',
            children: <div>Hello, world</div>
          }
        ]}
        accordionGroupId="introduction-design-principles"
      />
      <div className="space-y-3">
        <div className="space-y-2">
          <b className="block">Freeform–Gathering–Funnel Process</b>
          <div>
            <p>
              When creativity is needed, this is the main framework i like to
              follow: First, freely pin down ideas, visions, snapshots of what a
              good solution might be, even if its correct or not. This allows
              all possibilities to be heard, seen and probably tested. It is
              also helpful because no idea is getting lost – returning to it
              later again eventually. It increases the feeling for the project
              and getting warm with the topic.
            </p>

            <p>
              Gathering: Revise what you put down on paper or on the interface
              where you ideas were visualized. You can now group them and see
              with more focus what has potential to be explored in more detail.
              During this step, it is also important to regularly come back to
              the initial requirements and check if those ideas are still on the
              right path – towards the desired outcome. You might return to the
              freemform vs. gathering process 2, 3 or multiples times until i
              know it is time to proceed: funneling.
            </p>

            <p>
              Funneling: Now I'm seeing clearly, looking at my results and
              filter out (i don't remove those ideas, i simply move them to
              another page, or move the filtered ideas to another page, or hide
              them with opacity / visible settings). what will be in the final
              output–again checking the requirements and compare why the
              solution is a good, fitting and appropriate solution (/approach).
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <b className="block">Start small and grow with demands</b>
          <div>
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

        <div className="space-y-2">
          <b className="block">Design in system</b>
          <div>
            <p>
              Designing in system means leveraging a system. We don't want to
              reinvent the wheel over and over again, making the same thing over
              and over again, but unify and document already solved problems
              which return regularly.
            </p>

            <p>This way, we save time and effort to</p>

            <p>Use system thinking to solutionize</p>
          </div>
        </div>

        <div className="space-y-2">
          <b className="block">Design better user interfaces with psychology</b>
          <div>
            <p>
              Psychology. The science of human mind and behaviour. Why not
              leverage those findings about cognition and perception also in the
              field of the user experience and the user interface as well? Many
              people are doing this like <b>Jon Yablonski</b>,
              <b>Jonas Reggeling</b>
              and one of the founders of the NN/g group and author of many
              fundamental books <b>Don Norman</b> himself.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <b className="block">Design context-aware</b>
          <div>
            <p>
              Are you designing for a car? Which brand? In what situation the
              people are using your design? Weather it is a digital design or a
              physical designed object, the rule is the same: design
              context-aware.
            </p>

            <p>
              We must take in account the environment, the surrounding, the
              situation in which the people are using the design. When
              designing, it is important to know your environment. take this
              into account to make proper, fitting and more accurate solution.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <b className="block">Design with code, code by design</b>
          <div>
            <p>
              Especially as a frontend design engineer like me, this is a simple
              rule to follow: when writing code, I like to think more about the
              design if one is availble, the requirements and the desired
              outcome then about the actual code itself. The reason is simple:
              with code we want to make the design come to life, the code is the
              tool to make this happen.
            </p>

            <p>
              So the outcome should be in the center of attention, the code
              aligning with the required steps to get there.
            </p>

            <p>
              I also want to get into the perspective of the frontend engineer
              that will translate the design to code, in terms of naming,
              handover – there should be a symmetry in those fields, when
              designer is someone else as the developer.
            </p>
          </div>
        </div>

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
