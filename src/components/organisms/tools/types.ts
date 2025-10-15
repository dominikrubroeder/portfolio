import type { Brand } from '@/components/organisms/brand';

export type KnowledgeLevel =
  | 'Not started'
  | 'Used'
  | 'Experienced'
  | 'Professional'
  | 'Regularly'
  | 'Daily';

export type Tools = { group: string; children: Brand[] }[];
