import type { LearningResource } from '@/components/organisms/training';
import {
  IconAtomicDesign,
  IconAtomicDesignTokens
} from '@/components/atoms/icon';
import { IconAnimationsOnTheWeb } from '@/components/atoms/icon/icon-animations-on-the-web';
import { LogoUdemy } from '@/components/atoms/logo';

export const courses: LearningResource[] = [
  {
    title: 'Subatomic, The Complete Guide to Design Tokens',
    author: 'Brad and Ian Frost',
    icon: (
      <IconAtomicDesignTokens
        className="size-16"
        id="courses-list-atomic-design-tokens-icon"
      />
    ),
    href: 'https://designtokenscourse.com',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'Atomic Design Certification Course',
    author: 'Brad Frost',
    icon: <IconAtomicDesign className="size-16" />,
    href: 'https://atomicdesigncourse.com',
    progress: 100,
    isCurrent: true,
    type: 'Course'
  },
  {
    title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    author: 'Jonas Schmedtmann',
    icon: (
      <LogoUdemy
        className="size-16"
        id="courses-advanced-css-and-sass-udemy-logo"
      />
    ),
    href: 'https://www.udemy.com/course/advanced-css-and-sass',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'CSS – The Complete Guide 2025 (incl. Flexbox, Grid  & Sass)',
    author: 'Maximilian Schwarzmüller',
    icon: (
      <LogoUdemy className="size-16" id="courses-css-the-complete-guide-logo" />
    ),
    href: 'https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'Modern JavaScript From the Beginning 2.0 (2024)',
    author: 'Brad Traversy',
    icon: <LogoUdemy className="size-16" id="courses-javascript-logo" />,
    href: 'https://www.udemy.com/course/modern-javascript-from-the-beginning',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'Motion Design with Figma: Animations, Motion Graphics, UX/UI',
    author: 'Andrei Neagoie with Daniel Schifano',
    icon: (
      <LogoUdemy
        className="size-16"
        id="courses-motion-design-with-figma-logo"
      />
    ),
    href: 'https://www.udemy.com/course/motion-design-with-figma-animations-motion-graphics-uxui',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'Next.js & React - The Complete Guide',
    author: 'Maximilian Schwarzmüller',
    icon: <LogoUdemy className="size-16" id="courses-nextjs-logo" />,
    href: 'https://www.udemy.com/course/nextjs-react-the-complete-guide',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
    author: 'Maximilian Schwarzmüller',
    icon: <LogoUdemy className="size-16" id="courses-react-logo" />,
    href: 'https://www.udemy.com/course/nextjs-react-the-complete-guide',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    author: 'Jonas Schmedtmann',
    icon: (
      <LogoUdemy
        className="size-16"
        id="courses-javascript-the-complete-course-logo"
      />
    ),
    href: 'https://www.udemy.com/course/the-complete-javascript-Course',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'Understanding TypeScript',
    author: 'Maximilian Schwarzmüller',
    icon: <LogoUdemy className="size-16" id="courses-typescript-logo" />,
    href: 'https://www.udemy.com/course/understanding-typescript/',
    progress: 20,
    isCurrent: false,
    type: 'Course'
  },
  {
    title: 'Animations on the Web',
    author: 'Emil Kowalski',
    icon: (
      <IconAnimationsOnTheWeb
        className="size-16"
        id="courses-animations-on-the-web-icon"
      />
    ),
    href: 'https://animations.dev',
    progress: 100,
    isCurrent: false,
    type: 'Course'
  }
];
