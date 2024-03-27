import Accordion from '@/components/ui/accordion';
import Link from 'next/link';

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
        The working tools (Figma/ wireframe UI tool for Designers, IDEs for
        developers etc.), are not the crucial part, the thoughts and
        <Link
          href="https://www.nngroup.com/articles/mental-models/"
          target="_blank"
          className="mx-1"
          title="Go to Mental model on Nielsen Norman Group page"
          aria-label="Mental model on Nielsen Norman Group"
        >
          mental model
        </Link>
        are. The tools are just a way of making the concept
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
    </Accordion>
  );
}
