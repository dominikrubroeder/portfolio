import { ToggleContent } from '@/components/molecules/toggle-content';
import { CoursesList } from '@/components/organisms/training/courses';

export function AllResources() {
  return (
    <ToggleContent label="All resources" className="mt-8">
      <CoursesList />
    </ToggleContent>
  );
}
