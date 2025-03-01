export type Knowledge =
  | 'Not started'
  | 'Used'
  | 'Experienced'
  | 'Professional'
  | 'Daily';

export interface Tool {
  title: string;
  description: string;
  website: string;
  logo: string;
  knowledge: Knowledge;
}
