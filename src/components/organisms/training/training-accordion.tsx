import { Accordion } from '@/components/atoms/accordion';
import { IntroductionDegreesList } from '@/components/organisms/introduction';
import { AllResources } from '@/components/organisms/training';
import { BooksList } from '@/components/organisms/training/books';

export function TrainingAccordion() {
  return (
    <Accordion title="Training">
      <IntroductionDegreesList />
      <BooksList />
      <AllResources />
    </Accordion>
  );
}
