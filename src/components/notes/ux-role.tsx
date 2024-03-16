import Accordion from '@/components/accordion';

export default function UxRole() {
  return (
    <Accordion title="What is an UX Engineer?">
      <h3 className="font-bold text-theme-contrary">UX Engineer</h3>

      <br />

      <p>
        The Bridge between Design and Development. A UX engineer can also be the
        combo package itself, a Designer which is capable of developing his
        thoughts, layouts and concepts. Strong at coding, design and
        architecture.
      </p>

      <br />

      <p>
        The working tool (Figma/Wireframe UI tool for Designers, IDEs for
        developers), is not the crucial part – the thoughts and mental model is.
        The tools are just a way of making the concept <i>visual</i> and{' '}
        <i>visible</i>.
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
