import type { Metadata } from 'next';
import { ProjectsTemplate } from '@/components/templates/projects-template';

export const metadata: Metadata = {
  title: 'Projects | Dominik Rubröder, UX Design Engineer',
  description: 'Contributed projects from 2016 to 2026.'
};

export default function ProjectsPage() {
  return <ProjectsTemplate />;
}
