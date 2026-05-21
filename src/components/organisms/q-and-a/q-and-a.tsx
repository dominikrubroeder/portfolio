import { Container } from '@/components/organisms/layout';
import { Animate } from '@/components/molecules/animate/animate';
import {
  QAndADesignEngineerVsUxEngineer,
  QAndAUxDesigner,
  QAndAUxEngineer,
  QAndAWhatIsAUxEngineer
} from '@/components/organisms/q-and-a';
import { Accordion } from '@/components/molecules/accordion';

export function QAndA() {
  return (
    <Animate>
      <Container className="space-y-8" id="faq">
        <h2>
          Q&A
          <span className="ml-2 font-medium text-muted-foreground">
            Some questions and answers about UX design engineering
          </span>
        </h2>

        <Accordion
          variant="contained"
          buttonVariant={{ variant: 'contained-muted' }}
          items={[
            {
              title: 'What is a UX Engineer?',
              children: <QAndAWhatIsAUxEngineer />
            },
            {
              title: 'On which predicates should a UX Designer focus on?',
              children: <QAndAUxDesigner />
            },
            {
              title: 'On which predicates should a UX Engineer focus on?',
              children: <QAndAUxEngineer />
            },
            {
              title: 'Design Engineer vs UX Engineer',
              children: <QAndADesignEngineerVsUxEngineer />
            }
          ]}
          accordionGroupId="accordion-group-faq"
          focusView="start"
        />
      </Container>
    </Animate>
  );
}
