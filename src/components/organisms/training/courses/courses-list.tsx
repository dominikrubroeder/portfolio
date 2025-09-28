import { AnimatedProgressListItem } from '@/components/atoms/animated-progress-list-item';
import { Ul } from '@/components/atoms/ul';
import { getCourses } from '@/components/organisms/training/courses/helper';

export function CoursesList() {
  const courses = getCourses({ sortBy: 'progress-100-0' });

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
