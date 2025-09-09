import { Ul } from '@/components/atoms/ul';
import { AnimatedProgressListItem } from '@/components/organisms/books';
import { getCourses } from '@/components/organisms/courses/helper';

export function CoursesList() {
  return (
    <Ul headline="Courses">
      {[...getCourses({ sortBy: 'progress-100-0' })]?.map((book) => (
        <li key={book.title}>
          <AnimatedProgressListItem book={book} />
        </li>
      ))}
    </Ul>
  );
}
