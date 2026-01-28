import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import {
  FaqDesignEngineerVsUxEngineer,
  FaqUxDesigner,
  FaqUxEngineer,
  FaqWhatIsAUxEngineer
} from '@/components/organisms/faq';
import { Accordion } from '@/components/atoms/accordion';

export function FAQ() {
  return (
    <Animate direction="up">
      <Container className="space-y-8" id="faq">
        <h2>
          QA
          <span className="ml-2 font-medium text-muted-foreground">
            Some questions and answers about UX design engineering
          </span>
        </h2>

        <Accordion
          variant="contained"
          items={[
            {
              title: 'What is a UX Engineer?',
              children: <FaqWhatIsAUxEngineer />
            },
            {
              title: 'On which predicates should a UX Designer focus on?',
              children: <FaqUxDesigner />
            },
            {
              title: 'On which predicates should a UX Engineer focus on?',
              children: <FaqUxEngineer />
            },
            {
              title: 'Design Engineer vs UX Engineer',
              children: <FaqDesignEngineerVsUxEngineer />
            }
          ]}
          accordionGroupId="accordion-group-faq"
          focusView="start"
        />
      </Container>
    </Animate>
  );
}
