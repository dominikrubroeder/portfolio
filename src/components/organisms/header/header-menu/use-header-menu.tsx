'use client';

import { useCallback, useMemo, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import {
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ListBulletIcon,
  PaintBrushIcon,
  Square2StackIcon,
  UserIcon
} from '@heroicons/react/24/outline';

import type { UseScrollInViewProps } from '@/hooks/use-scroll-into-view';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';

export const useHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollIntoView } = useScrollIntoView();
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleNavigation = useCallback(
    ({ href }: { href: string }) => router.push(href),
    [router]
  );

  const currentNavigation = useMemo(() => {
    if (pathname === '/') {
      return [
        {
          href: 'hero',
          label: 'Introduction',
          icon: <DocumentTextIcon className="size-6" />
        },
        {
          href: 'why',
          label: 'Why?',
          icon: <UserIcon className="size-6" />
        },
        {
          href: 'projects',
          label: 'Projects',
          icon: <Square2StackIcon className="size-6" />
        },
        {
          href: 'tools',
          label: 'Tools',
          icon: <PaintBrushIcon className="size-6" />
        },
        {
          href: 'technologies',
          label: 'Technologies',
          icon: <CodeBracketIcon className="size-6" />
        },
        {
          href: 'socials',
          label: 'Socials',
          icon: <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
        },
        {
          href: 'faq',
          label: 'Questions and Answers',
          icon: <ListBulletIcon className="size-6" />
        },
        {
          href: 'contact',
          label: 'Contact',
          icon: <EnvelopeIcon className="size-6" />
        }
      ];
    }

    if (pathname === '/frontend-vision-ui') {
      return [
        {
          href: 'hero',
          label: 'Introduction',
          icon: <DocumentTextIcon className="size-5" />
        },
        {
          href: 'components',
          label: 'Components',
          icon: <DocumentTextIcon className="size-5" />
        },
        {
          href: 'about-frontend-vision-ui',
          label: 'About Frontend Vision UI',
          icon: <DocumentTextIcon className="size-5" />
        },
        {
          href: 'analytics',
          label: 'Analytics',
          icon: <DocumentTextIcon className="size-5" />
        }
      ];
    }
  }, [pathname]);

  const pages = useMemo(
    () => [
      {
        href: '/',
        label: 'Home'
      },
      {
        href: '/frontend-vision-ui',
        label: 'Frontend Vision UI'
      }
    ],
    []
  );

  const handleScrollToSection = useCallback(
    ({
      activeSection,
      scrollIntoViewProps
    }: {
      activeSection: string;
      scrollIntoViewProps: UseScrollInViewProps;
    }) => {
      setIsOpen(false);

      setTimeout(() => {
        setActiveSection(activeSection);
        scrollIntoView({ ...scrollIntoViewProps });
      }, 400);
    },
    [scrollIntoView]
  );

  return {
    isOpen,
    setIsOpen,
    activeSection,
    setActiveSection,
    handleScrollToSection,
    handleNavigation,
    currentNavigation,
    pages,
    scrollIntoView,
    pathname,
    router
  };
};
