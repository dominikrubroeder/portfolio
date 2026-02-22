import type { KnowledgeLevel } from '@/components/organisms/tools';

export interface LearningResource {
  title: string;
  author: string;
  description?: string;
  href: string;
  /** A number between 0 and 100 */
  progress?: number;
  category?: string[];
  isCurrent?: boolean;
  knowledge?: KnowledgeLevel;
  type?: 'video' | 'blog' | 'people' | 'Course' | 'Book';
}
