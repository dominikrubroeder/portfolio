import { IntroductionDegreesList } from '@/components/organisms/introduction';
import { BooksList } from '@/components/organisms/training/books';
import { AllResources } from '@/components/organisms/training/all-resources';

export function TrainingAccordion() {
  return (
    <>
      <IntroductionDegreesList />
      <BooksList />
      <AllResources />
    </>
  );
}
