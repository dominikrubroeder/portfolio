import { Accordion } from '@/components/atoms/accordion';
import { IntroductionDegreesList } from '@/components/organisms/introduction';
import { BooksList } from '@/components/organisms/training/books';
import { AllResources } from '@/components/organisms/training/all-resources';

export function TrainingAccordion() {
  return (
    <Accordion title="Training + Resources">
      <IntroductionDegreesList />
      <BooksList />
      <AllResources />
    </Accordion>
  );
}
