import { courses } from '@/components/organisms/training/courses/data';

export function getCourses({
  sortBy
}: {
  sortBy?: 'A-Z' | 'Z-A' | 'progress-100-0';
}) {
  switch (sortBy) {
    case 'A-Z':
      return courses.sort((a, b) => b.progress - a.progress);
    case 'Z-A':
      return courses.sort((a, b) => b.progress - a.progress);
    default:
      /** TODO: Sort first by progress, than alphabetically by name too */
      return courses.sort((a, b) => b.progress - a.progress);
  }
}
