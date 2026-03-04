import { ToggleContent } from '@/components/molecules/toggle-content';
import {
  TrainingCoursesList,
  TrainingPlatformsBlogsPeopleList
} from '@/components/organisms/training';

export function TrainingResourcesList() {
  return (
    <ToggleContent
      label="All resources"
      className="scroll-mt-responsive-md space-y-8"
      id="all-resources"
    >
      <TrainingCoursesList />
      <TrainingPlatformsBlogsPeopleList />
    </ToggleContent>
  );
}
