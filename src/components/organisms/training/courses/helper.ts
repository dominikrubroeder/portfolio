import { courses } from '@/components/organisms/training/courses/data';

export function getCourses({
  sortBy = 'progress-100-0'
}: {
  sortBy?: 'A-Z' | 'Z-A' | 'progress-100-0' | 'progress-100-0-A-Z';
}) {
  const defaultSorting = courses.sort((a, b) =>
    b.progress && a.progress
      ? b.progress - a.progress
      : a.title.localeCompare(b.title)
  );

  switch (sortBy) {
    case 'A-Z':
      return courses.sort((a, b) => a.title.localeCompare(b.title));
    case 'Z-A':
      return courses.sort((a, b) => b.title.localeCompare(a.title));
    case 'progress-100-0':
      return defaultSorting;
    case 'progress-100-0-A-Z':
      return courses.sort((a, b) => {
        if (a.progress === b.progress) {
          return a.title.localeCompare(b.title);
        }

        return (b.progress ?? 0) - (a.progress ?? 0);
      });
    default:
      return defaultSorting;
  }
}
