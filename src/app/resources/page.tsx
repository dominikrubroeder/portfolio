import type { Metadata } from 'next';
import { ResourcesTemplate } from '@/components/templates/resources-template';

export const metadata: Metadata = {
  title: 'Resources | Dominik Rubröder, UX Design Engineer',
  description:
    'Apply community knowledge, research and proven principles to our daily work.'
};

export default function ResourcesPage() {
  return <ResourcesTemplate />;
}
