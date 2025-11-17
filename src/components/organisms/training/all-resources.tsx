import { ToggleContent } from '@/components/molecules/toggle-content';
import { CoursesList } from '@/components/organisms/training/courses';
import { PlatformsBlogsPeopleList } from '@/components/organisms/training/platforms-blogs-people';

export function AllResources() {
  return (
    <ToggleContent label="All resources" className="mt-8 space-y-8">
      <CoursesList />
      <PlatformsBlogsPeopleList />
    </ToggleContent>
  );
}
