import AppleLogo from '../components/svg/AppleLogo';
import FramerMotionLogo from '../components/svg/FramerMotionLogo';
import HeadlessUiLogo from '../components/svg/HeadlessUiLogo';
import HeroiconsLogo from '../components/svg/HeroiconsLogo';
import NextJsLogo from '../components/svg/NextJsLogo';
import StorybookLogo from '../components/svg/StorybookLogo';
import TailwindCssLogoSymbol from '../components/svg/TailwindCssLogoSymbol';
import TailwindUiLogo from '../components/svg/TailwindUiLogo';
import TypeScriptLogo from '../components/svg/TypeScriptLogo';
import VisualStudioCodeLogo from '../components/svg/VisualStudioCodeLogo';
import VueJsLogo from '../components/svg/VueJsLogo';
import ToolsAndTechnologies from '../components/ToolsAndTechnologies';

export enum LocalStorageKeys {
  Theme = 'DR_THEME'
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  Auto = 'auto'
}

export const defaultPageSectionData = [
  { title: 'Section 1', content: <p>Section 1</p> },
  { title: 'Section 2', content: <p>Section 2</p> },
  { title: 'Section 3', content: <p>Section 3</p> }
];

export const homePageSectionData = [
  { title: 'Tools & Technologies', content: <ToolsAndTechnologies /> },
  { title: 'Projects', content: <p>Projects</p> },
  { title: 'Socials', content: <p>Socials</p> }
];

export const themeSwitchData = [
  { option: 'Dark', value: 'dark' },
  { option: 'Light', value: 'light' },
  { option: 'Auto', value: 'auto' }
];

export type ToolAndTechnology = {
  title: string;
  href: string;
  quote: string;
  tag: string[];
  logo: JSX.Element;
  category: (
    | 'platform'
    | 'development'
    | 'design'
    | 'ecommerce'
    | 'environment'
    | 'animation'
  )[];
  description: string;
};

export const toolsAndTechnologiesData: ToolAndTechnology[] = [
  {
    title: 'Apple',
    href: 'https://www.apple.com/',
    quote: 'Apple quote.',
    tag: ['apple'],
    logo: <AppleLogo />,
    category: ['environment'],
    description: 'Apple description'
  },
  {
    title: 'VS Code',
    href: 'https://code.visualstudio.com/',
    quote: 'Code editing. Redefined.',
    tag: ['vs-code'],
    logo: <VisualStudioCodeLogo />,
    category: ['environment'],
    description: 'VS code description'
  },
  {
    title: 'Next.js',
    href: 'https://nextjs.org/',
    quote: 'The react production ready librarby.',
    tag: ['nextjs'],
    logo: <NextJsLogo />,
    category: ['development'],
    description: 'Next.js description'
  },
  {
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    quote: 'Rapidly build modern websites without ever leaving your HTML.',
    tag: ['tailwind', 'tailwind-css'],
    logo: <TailwindCssLogoSymbol />,
    category: ['development'],
    description: 'Tailwind CSS description'
  },
  {
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    quote: 'JavaScript with syntax for types.',
    tag: ['typescript'],
    logo: <TypeScriptLogo />,
    category: ['development'],
    description: 'TypeScript description'
  },
  {
    title: 'Framer Motion',
    href: 'https://www.framer.com/motion/',
    quote: 'A production-ready motion library for React.',
    tag: ['framer-motion'],
    logo: <FramerMotionLogo />,
    category: ['development', 'animation'],
    description: 'Framer Motion description'
  },
  {
    title: 'Tailwind UI',
    href: 'https://tailwindui.com/',
    quote: 'Build your next idea even faster.',
    tag: ['tailwind', 'tailwind-ui'],
    logo: <TailwindUiLogo />,
    category: ['development'],
    description:
      'Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.'
  },
  {
    title: 'Headless UI',
    href: 'https://headlessui.com/',
    quote:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    tag: ['tailwind', 'headless-ui', 'react', 'vue'],
    logo: <HeadlessUiLogo />,
    category: ['development'],
    description: 'Headless UI description'
  },
  {
    title: 'React',
    href: 'https://reactjs.org/',
    quote: 'A JavaScript library for building user interfaces.',
    tag: ['react.js'],
    logo: <HeadlessUiLogo />,
    category: ['development'],
    description: 'React description'
  },
  {
    title: 'Vue.js',
    href: 'https://vuejs.org/',
    quote: 'The Progressive JavaScript Framework.',
    tag: ['vue.js'],
    logo: <VueJsLogo />,
    category: ['development'],
    description: 'Vue.js description'
  },
  {
    title: 'Heroicons',
    href: 'https://heroicons.com/',
    quote: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    tag: ['tailwind', 'icon-library'],
    logo: <HeroiconsLogo />,
    category: ['development', 'design'],
    description: 'Heroicons description'
  },
  {
    title: 'Storybook',
    href: 'https://storybook.js.org/',
    quote: 'Build UIs without the grunt work',
    tag: ['storybook'],
    logo: <StorybookLogo />,
    category: ['development'],
    description:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free."
  },
  {
    title: 'Prettier',
    href: 'https://prettier.io/',
    quote: 'A opinionated code formatter',
    tag: ['prettier'],
    logo: <AppleLogo />,
    category: ['development'],
    description: 'Prettier description'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/',
    quote: 'A opinionated code formatter',
    tag: ['github'],
    logo: <AppleLogo />,
    category: ['development'],
    description: 'Github description'
  }
];
