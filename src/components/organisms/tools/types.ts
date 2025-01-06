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
  type: string;
  knowledge: Knowledge;
  for?: string[];
  certificate?: string;
  certificateTitle?: string;
  certificateDescription?: string;
  certificateMaterial?: string;
  searchKeywords: string[];
}
