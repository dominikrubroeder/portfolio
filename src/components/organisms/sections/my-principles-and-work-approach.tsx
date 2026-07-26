import { H2 } from '@/components/organisms/typography';
import { IntroductionDesignPrinciples } from '@/components/organisms/introduction';
import { Container } from '@/components/organisms/layout';

export function MyPrinciplesAndWorkApproachSection() {
  return (
    <Container as="section" size="container-readable">
      <H2>Principles & Work Approach</H2>

      <ol className="mb-8 pl-8.5">
        <li>
          <a
            href="#principle-start-small-and-grow-with-demands"
            className="text-primary"
          >
            Start small and grow with demands
          </a>
        </li>
        <li>
          <a
            href="#principle-freeform-gathering-funnel-process"
            className="text-primary"
          >
            Freeform–Gathering–Funnel Process
          </a>
        </li>
        <li>
          <a
            href="#principle-design-features-not-layouts"
            className="text-primary"
          >
            Design features, not layouts
          </a>
        </li>
        <li>
          <a
            href="#principle-design-features-not-layouts"
            className="text-primary"
          >
            Design communicates, always
          </a>
        </li>
        <li>
          <a href="#principle-youre-an-espresso-maker" className="text-primary">
            You're an espresso maker
          </a>
        </li>
        <li>
          <a
            href="#principle-business-leads-design-serves"
            className="text-primary"
          >
            Business leads, design serves
          </a>
        </li>
        <li>
          <a
            href="#principle-code-by-design-design-with-code"
            className="text-primary"
          >
            Code by design, design with code
          </a>
        </li>
        <li>
          <a href="#principle-design-context-aware" className="text-primary">
            Design context-aware
          </a>
        </li>
        <li>
          <a
            href="#principle-design-better-user-interfaces-with-psychology"
            className="text-primary"
          >
            Design better user interfaces with psychology
          </a>
        </li>
        <li>
          <a href="#principle-design-in-system" className="text-primary">
            Design in system
          </a>
        </li>
      </ol>

      <IntroductionDesignPrinciples />
    </Container>
  );
}
