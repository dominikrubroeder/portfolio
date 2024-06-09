export type ControlBarAction = 'Avatar' | 'Back' | 'Up';

export type Brand =
  | 'Figma'
  | 'WebStorm'
  | 'Notes'
  | 'GitHub'
  | 'Craft'
  | 'GitLab'
  | 'Shopware'
  | 'Storyblok'
  | 'Miro'
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'JavaScript'
  | 'Markdown'
  | 'HTML'
  | 'CSS'
  | 'Tailwind CSS'
  | 'Framer Motion'
  | 'Auth.js'
  | 'LinkedIn'
  | 'Xing'
  | 'Instagram';

export type ControlBarSections = { id: string; label: string; icon: string }[];

export type ControlBarVisibility = 'collapsed' | 'expanded';

export type ControlBarMobileMenuVisibility = 'visible' | 'invisible';

export type ControlBarActiveSection = string | null;
