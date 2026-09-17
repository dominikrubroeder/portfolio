import type { HeroNavigationPathname } from '@/components/molecules/hero-navigation';

export const heroNavigation: {
  icon: string;
  label: string;
  href: HeroNavigationPathname;
  hidden: boolean;
}[] = [
  {
    icon: 'avatar',
    label: 'Introduction',
    href: '/',
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
    label: 'Tools and Technologies',
    href: '/tools-and-technologies',
    hidden: false
  },
  {
    icon: 'balloon',
    label: 'Playground',
    href: '/playground',
    hidden: false
  }
];
