import { Accordion } from '@/components/atoms/accordion';
import { BooksList } from '@/components/organisms/books';
import { CoursesList } from '@/components/organisms/courses';
import { DegreesList } from '@/components/organisms/introduction';

export function TrainingAccordion() {
  return (
    <Accordion title="Training">
      <DegreesList />
      <BooksList />
      <CoursesList />
    </Accordion>
  );
}
