import { projects } from '@/components/organisms/projects/data';

export function getProject({ title }: { title: string }) {
  return projects.find((project) => project.title === title);
}
