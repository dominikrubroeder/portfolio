import type { Brand } from '@/components/organisms/brand';

export type Knowledge =
  | 'Not started'
  | 'Used'
  | 'Experienced'
  | 'Professional'
  | 'Daily';

export type Tools = { group: string; children: Brand[] }[];
