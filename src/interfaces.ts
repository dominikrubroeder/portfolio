export interface Tool {
  title: string;
  website: string;
  logo: string;
  description: string;
  keyword: string;
  priority: 'low' | 'high';
  experience: 'low' | 'moderate' | 'high' | 'daily';
  projects: string[];
}

export interface Technology extends Tool {}

export interface Social {
  title: string;
  website: string;
  logo: string;
  badge: string;
}

export interface Data {
  tools: Tool[];
  technologies: Technology[];
  socials: Social[];
}
