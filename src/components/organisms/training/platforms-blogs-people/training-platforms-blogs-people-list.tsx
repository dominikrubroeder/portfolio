import { AnimatedProgressListItem } from '@/components/atoms/animated-progress';
import { Ul } from '@/components/atoms/ul';
import { getPlatformsBlogsPeople } from '@/components/organisms/training/platforms-blogs-people';

export function TrainingPlatformsBlogsPeopleList() {
  const platformsBlogsPeople = getPlatformsBlogsPeople({ sortBy: 'type-A-Z' });

  return (
    <Ul headline="Platforms + Blogs + People">
      {platformsBlogsPeople?.map((course, index) => (
        <li key={course.title}>
          <AnimatedProgressListItem item={course} />
        </li>
      ))}
    </Ul>
  );
}
