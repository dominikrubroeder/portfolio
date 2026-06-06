import { AnimatedProgressListItem } from '@/components/atoms/animated-progress';
import { Ul } from '@/components/organisms/typography';
import { getCourses } from '@/components/organisms/training/courses/helper';

export function TrainingCoursesList() {
  const courses = getCourses({ sortBy: 'progress-100-0-A-Z' });

  return (
    <Ul headline="Courses">
      {courses?.map((course) => (
        <li key={course.title}>
          <AnimatedProgressListItem item={course} />
        </li>
      ))}
    </Ul>
  );
}
