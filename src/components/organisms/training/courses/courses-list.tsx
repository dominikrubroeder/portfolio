import { AnimatedProgressListItem } from '@/components/atoms/animated-progress-list-item';
import { Badge } from '@/components/atoms/badge';
import { Ul } from '@/components/atoms/ul';
import { getCourses } from '@/components/organisms/training/courses/helper';

export function CoursesList() {
  const courses = getCourses({ sortBy: 'progress-100-0' });

  return (
    <Ul headline="Courses">
      {courses?.map((course) => (
        <li key={course.title}>
          {course.isCurrent ? (
            <div className="flex flex-wrap items-center gap-2">
              <AnimatedProgressListItem item={course} />
              <Badge size="small">Currently</Badge>
            </div>
          ) : (
            <AnimatedProgressListItem item={course} />
          )}
        </li>
      ))}
    </Ul>
  );
}
