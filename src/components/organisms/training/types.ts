import type { UsageLevel } from '@/components/organisms/tools';

export interface LearningResource {
  title: string;
  author: string;
  description?: string;
  cover?: string;
  href: string;
  /** A number between 0 and 100 */
  progress?: number;
  category?: (
    | 'Design'
    | 'Engineering'
    | 'Psychology'
    | 'Product'
    | 'Research, Study and Data'
    | 'Learning'
  )[];
  isCurrent?: boolean;
  knowledge?: UsageLevel;
  type?: 'video' | 'blog' | 'people' | 'Course' | 'Book';
  releaseYear?: number;
  keywords?: string[];
}
