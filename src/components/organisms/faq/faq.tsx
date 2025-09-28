import { Container } from '@/components/atoms/container';
import {
  FaqDesignEngineerVsUxEngineer,
  FaqUxDesigner,
  FaqUxEngineer,
  FaqWhatIsAUxEngineer
} from '@/components/organisms/faq';

export function FAQ() {
  return (
    <Container className="space-y-8" id="faq">
      <h2>
        QA
        <span className="ml-2 font-medium text-muted-foreground">
          Some questions and answers about UX design engineering
        </span>
      </h2>

      <div id="accordion-group">
        <FaqWhatIsAUxEngineer />
        <FaqUxDesigner />
        <FaqUxEngineer />
        <FaqDesignEngineerVsUxEngineer />
      </div>
    </Container>
  );
}
