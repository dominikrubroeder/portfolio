import AppleLogo from '../components/svg/AppleLogo';
import FigLogoSymbol from '../components/svg/FigLogoSymbol';
import FramerMotionLogo from '../components/svg/FramerMotionLogo';
import GitHubLogo from '../components/svg/GitHubLogo';
import GitLabLogo from '../components/svg/GitLabLogo';
import HeadlessUiLogo from '../components/svg/HeadlessUiLogo';
import HeroiconsLogo from '../components/svg/HeroiconsLogo';
import NextJsLogo from '../components/svg/NextJsLogo';
import StorybookLogo from '../components/svg/StorybookLogo';
import TailwindCssLogoSymbol from '../components/svg/TailwindCssLogoSymbol';
import TailwindUiLogo from '../components/svg/TailwindUiLogo';
import TypeScriptLogo from '../components/svg/TypeScriptLogo';
import VercelLogoSymbol from '../components/svg/VercelLogoSymbol';
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
  quoteDescription: string;
  tags: string[];
  logo: JSX.Element;
  logoSymbol: JSX.Element;
  category: (
    | 'platform'
    | 'development'
    | 'design'
    | 'ecommerce'
    | 'environment'
    | 'animation'
  )[];
  personalNote: string;
};

export const toolsAndTechnologiesData: ToolAndTechnology[] = [
  {
    title: 'Apple',
    href: 'https://www.apple.com/',
    quote: 'Apple quote.',
    quoteDescription: 'quoteDescription',
    tags: ['apple'],
    logo: <AppleLogo />,
    logoSymbol: <AppleLogo />,
    category: ['environment'],
    personalNote: 'Apple personalNote'
  },
  {
    title: 'VS Code',
    href: 'https://code.visualstudio.com/',
    quote: 'Code editing. Redefined.',
    quoteDescription: 'quoteDescription',
    tags: ['vs-code'],
    logo: <VisualStudioCodeLogo />,
    logoSymbol: <VisualStudioCodeLogo />,
    category: ['environment'],
    personalNote: 'VS code personalNote'
  },
  {
    title: 'Next.js',
    href: 'https://nextjs.org/',
    quote: 'The react production ready librarby.',
    quoteDescription: 'quoteDescription',
    tags: ['nextjs'],
    logo: <NextJsLogo />,
    logoSymbol: <NextJsLogo />,
    category: ['development'],
    personalNote: 'Next.js personalNote'
  },
  {
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    quote: 'Rapidly build modern websites without ever leaving your HTML.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'tailwind-css'],
    logo: <TailwindCssLogoSymbol />,
    logoSymbol: <TailwindCssLogoSymbol />,
    category: ['development'],
    personalNote: 'Tailwind CSS personalNote'
  },
  {
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    quote: 'JavaScript with syntax for types.',
    quoteDescription: 'quoteDescription',
    tags: ['typescript'],
    logo: <TypeScriptLogo />,
    logoSymbol: <TypeScriptLogo />,
    category: ['development'],
    personalNote: 'TypeScript personalNote'
  },
  {
    title: 'Framer Motion',
    href: 'https://www.framer.com/motion/',
    quote: 'A production-ready motion library for React.',
    quoteDescription: 'quoteDescription',
    tags: ['framer-motion'],
    logo: <FramerMotionLogo />,
    logoSymbol: <FramerMotionLogo />,
    category: ['development', 'animation'],
    personalNote: 'Framer Motion personalNote'
  },
  {
    title: 'Tailwind UI',
    href: 'https://tailwindui.com/',
    quote: 'Build your next idea even faster.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'tailwind-ui'],
    logo: <TailwindUiLogo />,
    logoSymbol: <TailwindUiLogo />,
    category: ['development'],
    personalNote:
      'Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.'
  },
  {
    title: 'Headless UI',
    href: 'https://headlessui.com/',
    quote:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'headless-ui', 'react', 'vue'],
    logo: <HeadlessUiLogo />,
    logoSymbol: <HeadlessUiLogo />,
    category: ['development'],
    personalNote: 'Headless UI personalNote'
  },
  {
    title: 'React',
    href: 'https://reactjs.org/',
    quote: 'A JavaScript library for building user interfaces.',
    quoteDescription: 'quoteDescription',
    tags: ['react.js'],
    logo: <HeadlessUiLogo />,
    logoSymbol: <HeadlessUiLogo />,
    category: ['development'],
    personalNote: 'React personalNote'
  },
  {
    title: 'Vue.js',
    href: 'https://vuejs.org/',
    quote: 'The Progressive JavaScript Framework.',
    quoteDescription: 'quoteDescription',
    tags: ['vue.js'],
    logo: <VueJsLogo />,
    logoSymbol: <VueJsLogo />,
    category: ['development'],
    personalNote: 'Vue.js personalNote'
  },
  {
    title: 'Heroicons',
    href: 'https://heroicons.com/',
    quote: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'icon-library'],
    logo: <HeroiconsLogo />,
    logoSymbol: <HeroiconsLogo />,
    category: ['development', 'design'],
    personalNote: 'Heroicons personalNote'
  },
  {
    title: 'Storybook',
    href: 'https://storybook.js.org/',
    quote: 'Build UIs without the grunt work',
    quoteDescription: 'quoteDescription',
    tags: ['storybook'],
    logo: <StorybookLogo />,
    logoSymbol: <StorybookLogo />,
    category: ['development'],
    personalNote:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free."
  },
  {
    title: 'Prettier',
    href: 'https://prettier.io/',
    quote: 'A opinionated code formatter',
    quoteDescription: 'quoteDescription',
    tags: ['prettier'],
    logo: <AppleLogo />,
    logoSymbol: <AppleLogo />,
    category: ['development'],
    personalNote: 'Prettier personalNote'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/',
    quote: 'A opinionated code formatter',
    quoteDescription: 'quoteDescription',
    tags: ['github'],
    logo: <GitHubLogo />,
    logoSymbol: <GitHubLogo />,
    category: ['development'],
    personalNote: 'Github personalNote'
  },
  {
    title: 'GitLab',
    href: 'https://about.gitlab.com/',
    quote: 'The One DevOps Platform',
    quoteDescription:
      'From planning to production, bring teams together in one application. Ship secure code more efficiently to deliver value faster.',
    tags: ['gitlab'],
    logo: <GitLabLogo />,
    logoSymbol: <GitLabLogo />,
    category: ['development'],
    personalNote: 'GitLab personalNote'
  },
  {
    title: 'Vercel',
    href: 'https://about.gitlab.com/',
    quote: 'The One DevOps Platform',
    quoteDescription:
      'From planning to production, bring teams together in one application. Ship secure code more efficiently to deliver value faster.',
    tags: ['vercel'],
    logo: <VercelLogoSymbol />,
    logoSymbol: <VercelLogoSymbol />,
    category: ['development'],
    personalNote: 'Vercel personalNote'
  },
  {
    title: 'Fig',
    href: 'https://fig.io/',
    quote: 'The next-generation command line.',
    quoteDescription: 'Fig quoteDescription',
    tags: ['fig'],
    logo: <FigLogoSymbol />,
    logoSymbol: <FigLogoSymbol />,
    category: ['development'],
    personalNote: 'Fig personalNote'
  }
];
