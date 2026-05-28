import type { HeroNavigationPathname } from '@/components/molecules/hero-navigation';

export const heroNavigation: { label: string; href: HeroNavigationPathname }[] =
  [
    {
      label: 'Introduction',
      href: '/introduction'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Tools',
      href: '/tools'
    },
    {
      label: 'Technologies',
      href: '/technologies'
    },
    {
      label: 'Showcase',
      href: '/showcase'
    },
    {
      label: 'Resources',
      href: '/resources'
    }
  ];
