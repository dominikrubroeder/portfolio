import type { HeroNavigationPathname } from '@/components/molecules/hero-navigation';

export const heroNavigation: {
  icon: string;
  label: string;
  href: HeroNavigationPathname;
  hidden: boolean;
}[] = [
  {
    icon: 'user',
    label: 'Introduction',
    href: '/introduction',
    hidden: false
  },
  {
    icon: 'chart-no-axes-gantt',
    label: 'Projects',
    href: '/projects',
    hidden: false
  },
  {
    icon: 'wrench',
    label: 'Tools',
    href: '/tools',
    hidden: false
  },
  {
    icon: 'code',
    label: 'Technologies',
    href: '/technologies',
    hidden: false
  },
  {
    icon: '',
    label: 'Showcase',
    href: '/showcase',
    hidden: true
  },
  {
    icon: 'balloon',
    label: 'Playground',
    href: '/playground',
    hidden: true
  },
  {
    icon: 'notebook-pen',
    label: 'Blog',
    href: '/blog',
    hidden: true
  },
  {
    icon: 'sparkle',
    label: 'Resources',
    href: '/resources',
    hidden: false
  }
];
