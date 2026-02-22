import { ToggleContent } from '@/components/molecules/toggle-content';
import { CoursesList } from '@/components/organisms/training/courses';
import { PlatformsBlogsPeopleList } from '@/components/organisms/training/platforms-blogs-people';

export function AllResources() {
  return (
    <ToggleContent
      label="All resources"
      className="scroll-mt-responsive-md space-y-8"
      id="all-resources"
    >
      <CoursesList />
      <PlatformsBlogsPeopleList />
    </ToggleContent>
  );
}
