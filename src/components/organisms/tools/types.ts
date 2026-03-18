import type { Brand } from '@/components/organisms/brand';

export type UsageLevel =
  | 'Aware'
  | 'Basic'
  | 'Working'
  | 'Applied'
  | 'Advanced'
  | 'Expert';

export type Tools = {
  group: string;
  children: Brand[];
  description?: string;
}[];
