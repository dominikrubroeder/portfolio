import Accordion from '@/components/accordion';

export default function NotesSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-2xl">
        <Accordion title="What is and UX Engineer?">
          <h3 className="font-bold text-white">UX Engineer</h3>

          <br />

          <p>
            The Bridge between Design and Development. Can also be the combo
            package itself, a Designer which is capable of developing his
            thoughts, layouts and concepts. Strong at coding, design and
            architecture.
          </p>

          <br />

          <p>
            The working tool (Figma for Designers, IDEs for developers), are not
            the crucial part – the thoughts and mental model is. The tools are
            just a way of making the concept <i>visual</i> and <i>visible</i>.
          </p>

          <br />

          <div>
            Softskills
            <ul className="list-disc pl-8">
              <li>
                Benefitial is a sense of empathy and coursiosiy for tech and
                design
              </li>
            </ul>
          </div>
        </Accordion>

        <Accordion title="Mindset">
          <div>Some text here</div>
        </Accordion>
      </div>
    </section>
  );
}
