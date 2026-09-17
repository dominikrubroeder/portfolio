import { Animate } from '@/components/molecules/animate';
import { Container } from '@/components/organisms/layout';
import { H2, Ul } from '@/components/organisms/typography';

export function Principles() {
  return (
    <Animate direction="up">
      <Container>
        <H2 className="flex items-center justify-between gap-4">Principles</H2>
        <Ul className="space-y-5">
          <li>
            <span className="block text-7xl font-bold text-primary">1</span>
            <b>Design in system</b>
            <p>
              Systems are useful because they provide reusability and
              predictability in how things work in a UI. Common problems are
              approached the same way. It is a holistic view at the UI.
            </p>
          </li>
          <li>
            <span className="block text-7xl font-bold text-primary">2</span>
            <b>Design in context</b>
            <p>Make yourself aware of the brand and environment</p>
          </li>
          <li>
            <span className="block text-7xl font-bold text-primary">3</span>
            <b>Know the problem you're solving</b>
            <p>
              Whenever you start a task, make yourself aware of what problem
              you're solving with it. What gets easier after it? What need is
              fulfilled? Why is it built the way it is?
            </p>
          </li>
          <li>
            <span className="block text-7xl font-bold text-primary">4</span>
            <b>Design with code, code with design</b>
            <p>
              Harmony is the goal between design and code – this can be achieved
              by unifying naming schemes and workflows
            </p>
          </li>
        </Ul>
      </Container>
    </Animate>
  );
}
