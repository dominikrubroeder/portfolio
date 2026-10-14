import { projects } from '@/components/feature/projects/projects-data';

export function getProject({ title }: { title: string }) {
  return projects.find((project) => project.title === title);
}
