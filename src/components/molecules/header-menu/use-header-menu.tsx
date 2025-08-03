'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import type { UseScrollInViewProps } from '@/hooks/use-scroll-into-view';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';

export const useHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollIntoView } = useScrollIntoView();
  const [activeSection, setActiveSection] = useState<string>('');

  const handleNavigation = useCallback(
    ({ href }: { href: string }) => router.push(href),
    [router]
  );

  const currentNavigation = useMemo(() => {
    if (pathname === '/') {
      return [
        {
          href: 'introduction',
          label: 'Introduction'
        },
        {
          href: 'projects',
          label: 'Projects'
        },
        {
          href: 'tools',
          label: 'Tools'
        },
        {
          href: 'technologies',
          label: 'Technologies'
        },
        {
          href: 'socials',
          label: 'Socials'
        },
        {
          href: 'faq',
          label: 'QA Questions and Answers'
        }
      ];
    }

    if (pathname === '/frontend-vision-ui') {
      return [
        {
          href: 'hero',
          label: 'Introduction'
        },
        {
          href: 'components',
          label: 'Components'
        },
        {
          href: 'about-frontend-vision-ui',
          label: 'About Frontend Vision UI'
        },
        {
          href: 'analytics',
          label: 'Analytics'
        }
      ];
    }
  }, [pathname]);

  const handleScrollToSection = useCallback(
    ({
      activeSection,
      scrollIntoViewProps
    }: {
      activeSection: string;
      scrollIntoViewProps: UseScrollInViewProps;
    }) => {
      setIsOpen(false);
      setActiveSection(activeSection);
      scrollIntoView({ ...scrollIntoViewProps });
    },
    [scrollIntoView]
  );

  useEffect(() => setIsOpen(false), [pathname]);

  return {
    isOpen,
    setIsOpen,
    activeSection,
    setActiveSection,
    handleScrollToSection,
    handleNavigation,
    currentNavigation,
    scrollIntoView,
    pathname,
    router
  };
};
