import Accordion from '@/components/ui/accordion';
import Link from 'next/link';
import AccordionMini from '@/components/ui/accordion-mini';
import Divider from '@/components/ui/divider';

export default function WhatIsAUxEngineer() {
  return (
    <Accordion title="What is an UX Engineer?">
      <h3 className="font-bold text-theme-contrary">UX Engineer</h3>

      <br />

      <p>
        <b className="text-theme-contrary">
          The bridge between design and development
        </b>
        . A UX engineer can also be the combo package itself, a Designer which
        is capable of developing his thoughts, layouts and concepts into real
        world (production) applications. Also, the ability of communicating on
        the how to, and why is crucial for this role.
      </p>
      <br />
      <p>
        The working tools (Wireframe tools like <i>Figma</i> for Designers or
        IDEs for developers etc.), are not the crucial part,
        <b className="mx-1.5 text-theme-contrary">
          the thoughts and
          <Link
            href="https://www.nngroup.com/articles/mental-models/"
            target="_blank"
            className="mx-1"
            title="Go to Mental model on Nielsen Norman Group page"
            aria-label="Mental model on Nielsen Norman Group"
          >
            mental model
          </Link>
          are.
        </b>
        The tools are just a way of making the concept
        <i className="mx-1">visual</i>and<i className="ml-1">visible</i>.
      </p>
      <br />
      <div>
        Softskills
        <ul className="list-disc pl-8">
          <li>
            Beneficial is a sense of empathy and curiosity for tech and design
          </li>
        </ul>
      </div>

      <Divider indented spacing="wider" className="mb-8 mt-12" />

      <AccordionMini title="Experience design">
        <br />

        <p>
          The `experience design` should be applied and added during the design
          and conception phase of a feature. It adds to all aspects of the
          positive perception and function of a feature; in the best case it
          achieves:
        </p>

        <br />

        <ul className="list-disc pl-8">
          <li>A positive perception</li>
          <li>Ease of use</li>
          <li>
            Does what it is supposed to do and makes the user feel satisfied, if
            not <i>happy</i>
          </li>
          <li>
            Provides joy and fun in dealing and interacting with the
            feature/service/process
          </li>
          <li>Adds to the business goals</li>
        </ul>

        <br />

        <p>Possible guiding questions</p>

        <br />

        <ul className="list-disc pl-8">
          <li>What does make the feature special?</li>
          <li>Where is the benefit?</li>
          <li>Is it positive, fun, exciting to use?</li>
          <li>Does it fulfil the job the task should fulfil?</li>
          <li>Does it match the project, brand and business requirements?</li>
        </ul>
      </AccordionMini>
    </Accordion>
  );
}
