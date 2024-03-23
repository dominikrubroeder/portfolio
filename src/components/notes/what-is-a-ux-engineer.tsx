import Accordion from '@/components/accordion';

export default function WhatIsAUxEngineer() {
  return (
    <Accordion title="What is an UX Engineer?">
      <h3 className="font-bold text-theme-contrary">UX Engineer</h3>

      <br />

      <p>
        The bridge between design and development. A UX engineer can also be the
        combo package itself, a Designer which is capable of developing his
        thoughts, layouts and concepts into real world (production)
        applications. So he/she is strong at coding, design, system architecture
        and communication, his vision to all members of the team – on your how
        to, and why.
      </p>

      <br />

      <p>
        The working tools (Figma/Wireframe UI tool for Designers, IDEs for
        developers), are not the crucial part – the thoughts and mental model
        are. The tools are just a way of making the idea, vision, thought or
        concept <i>visual</i> and
        <i> visible</i>.
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
