export interface LearningResource {
  title: string;
  author: string;
  href: string;
  progress: number;
  category?: string[];
  isCurrent?: boolean;
}
