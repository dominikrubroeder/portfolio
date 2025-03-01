import { Tool } from '@/components/organisms/tools/types';

export interface Technology extends Tool {}

export interface Social {
  title: string;
  logo: string;
  href: string;
  website: string;
}
