import AppleLogo from '../components/svg/AppleLogo';
import FigLogoSymbol from '../components/svg/FigLogoSymbol';
import FramerMotionLogo from '../components/svg/FramerMotionLogo';
import GitHubLogo from '../components/svg/GitHubLogo';
import GitLabLogo from '../components/svg/GitLabLogo';
import HeadlessUiLogo from '../components/svg/HeadlessUiLogo';
import HeadlessUiLogoSymbol from '../components/svg/HeadlessUiLogoSymbol';
import HeroiconsLogoSymbol from '../components/svg/HeroiconsLogoSymbol';
import HeroiconsLogo from '../components/svg/HeroiconsLogo';
import NextJsLogoSymbol from '../components/svg/NextJsLogoSymbol';
import PrettierLogoSymbol from '../components/svg/PrettierLogoSymbol';
import ReactLogoSymbol from '../components/svg/ReactLogoSymbol';
import StorybookLogo from '../components/svg/StorybookLogo';
import StorybookLogoSymbol from '../components/svg/StorybookLogoSymbol';
import TailwindLogoSymbol from '../components/svg/TailwindLogoSymbol';
import TailwindCssLogoSymbol from '../components/svg/TailwindLogoSymbol';
import TypeScriptLogo from '../components/svg/TypeScriptLogo';
import VercelLogo from '../components/svg/VercelLogo';
import VercelLogoSymbol from '../components/svg/VercelLogoSymbol';
import VisualStudioCodeLogo from '../components/svg/VisualStudioCodeLogo';
import VueJsLogo from '../components/svg/VueJsLogo';
import ToolsAndTechnologies from '../components/sections/ToolsAndTechnologies/index';
import MuiLogoSymbol from '../components/svg/MuiLogoSymbol';
import CssLogoSymbol from '../components/svg/CssLogoSymbol';
import SvelteLogoSymbol from '../components/svg/SvelteLogoSymbol';
import GatsbyLogo from '../components/svg/GatsbyLogo';
import GatsbyLogoSymbol from '../components/svg/GatsbyLogoSymbol';
import QwikLogo from '../components/svg/QwikLogoSymbol';
import QwikLogoSymbol from '../components/svg/QwikLogoSymbol';
import AstroLogo from '../components/svg/AstroLogo';
import AstroLogoSymbol from '../components/svg/AstroLogoSymbol';
import TailwindUiLogo from '../components/svg/TailwindUiLogo';
import Socials from '../components/sections/Socials';
import SwiftUILogoSymbol from '../components/img/SwiftUILogoSymbol';
import LinkedInLogoSymbol from '../components/img/LinkedInLogoSymbol';
import XingLogoSymbol from '../components/svg/XingLogoSymbol';
import Projects from '../components/sections/Projects';
import FigmaLogoSymbol from '../components/svg/FigmaLogoSymbol';
import AdobePhotoshopLogoSymbol from '../components/svg/AdobePhotoshopLogoSymbol';
import AdobeIllustratorLogoSymbol from '../components/svg/AdobeIllustratorLogoSymbol';
import AdobeInDesignLogoSymbol from '../components/svg/AdobeInDesignLogoSymbol';
import AdobeXdLogo from '../components/svg/AdobeXdLogo';
import AdobeXdLogoSymbol from '../components/svg/AdobeXdLogoSymbol';
import AppleKeynoteLogoSymbol from '../components/img/AppleKeynoteLogoSymbol';
import FontAwesomeLogoSymbol from '../components/svg/FontAwesomeLogoSymbol';
import AdobeCreativeCloudLogoSymbol from '../components/svg/AdobeCreativeCloudLogoSymbol';
import ShopwareLogo from '../components/svg/ShopwareLogo';
import ShopwareLogoSymbol from '../components/svg/ShopwareLogoSymbol';

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
  { title: 'Projects', content: <Projects /> },
  { title: 'Socials', content: <Socials /> }
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

export const toolsAndTechnologies: {
  development: {
    all: ToolAndTechnology[];
    environment: ToolAndTechnology[];
    uiLibraries: ToolAndTechnology[];
    animationLibraries: ToolAndTechnology[];
    versionControlTools: ToolAndTechnology[];
    frameworks: ToolAndTechnology[];
  };
  design: {
    all: ToolAndTechnology[];
  };
  ecommerce: {
    all: ToolAndTechnology[];
  };
} = {
  development: {
    all: [],
    environment: [],
    uiLibraries: [],
    animationLibraries: [],
    versionControlTools: [],
    frameworks: []
  },
  design: {
    all: []
  },
  ecommerce: {
    all: []
  }
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
    logo: <NextJsLogoSymbol />,
    logoSymbol: <NextJsLogoSymbol />,
    category: ['development'],
    personalNote: 'Next.js personalNote'
  },
  {
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    quote: 'Rapidly build modern websites without ever leaving your HTML.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'tailwind-css'],
    logo: <TailwindUiLogo />,
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
    tags: ['framer-motion', 'animation'],
    logo: <FramerMotionLogo />,
    logoSymbol: <FramerMotionLogo />,
    category: ['development', 'animation'],
    personalNote: 'Framer Motion personalNote'
  },
  {
    title: 'React',
    href: 'https://reactjs.org/',
    quote: 'A JavaScript library for building user interfaces.',
    quoteDescription: 'quoteDescription',
    tags: ['react.js', 'development-framework', 'javascript-framework'],
    logo: <ReactLogoSymbol />,
    logoSymbol: <ReactLogoSymbol />,
    category: ['development'],
    personalNote: 'React personalNote'
  },
  {
    title: 'Vue.js',
    href: 'https://vuejs.org/',
    quote: 'The Progressive JavaScript Framework.',
    quoteDescription: 'quoteDescription',
    tags: ['vue.js', 'development-framework', 'javascript-framework'],
    logo: <VueJsLogo />,
    logoSymbol: <VueJsLogo />,
    category: ['development'],
    personalNote: 'Vue.js personalNote'
  },
  {
    title: 'Astro',
    href: 'https://astro.build/',
    quote: 'Build faster websites.',
    quoteDescription:
      'Pull content from anywhere and serve it fast with Astros next-gen island architecture.',
    tags: ['astro', 'development-framework', 'javascript-framework'],
    logo: <AstroLogo />,
    logoSymbol: <AstroLogoSymbol />,
    category: ['development'],
    personalNote: 'Astro personalNote'
  },
  {
    title: 'Gatsby',
    href: 'https://www.gatsbyjs.com/',
    quote: 'The future of web development is here.',
    quoteDescription:
      'There’s a reason why the world’s top-performing website teams use Gatsby. Whether your site has 100 pages or 100,000 pages—we’re obsessed with delivering dynamic web experiences with performance and security that scales.',
    tags: ['gatbsy', 'development-framework', 'javascript-framework'],
    logo: <GatsbyLogo />,
    logoSymbol: <GatsbyLogoSymbol />,
    category: ['development'],
    personalNote: 'Gatsby personalNote'
  },
  {
    title: 'Svelte',
    href: 'https://svelte.dev/',
    quote: 'Cybernetically enhanced web apps',
    quoteDescription: 'Svelte quoteDescription',
    tags: ['svelte', 'development-framework', 'javascript-framework'],
    logo: <SvelteLogoSymbol />,
    logoSymbol: <SvelteLogoSymbol />,
    category: ['development'],
    personalNote: 'Svelte personalNote'
  },
  {
    title: 'qwik',
    href: 'https://qwik.builder.io/',
    quote: 'Framework reimagined for the edge.',
    quoteDescription:
      'No hydration, auto lazy-loading, edge-optimized, and fun.',
    tags: ['qwik', 'development-framework', 'javascript-framework'],
    logo: <QwikLogo />,
    logoSymbol: <QwikLogoSymbol />,
    category: ['development'],
    personalNote: 'qwik personalNote'
  },
  {
    title: 'Swift UI',
    href: 'https://developer.apple.com/xcode/swiftui/',
    quote:
      'Swift UI – declarative syntax for building native applications on all Apple platforms.',
    quoteDescription:
      'SwiftUI helps you build great-looking apps across all Apple platforms with the power of Swift — and surprisingly little code. You can bring even better experiences to everyone, on any Apple device, using just one set of tools and APIs.',
    tags: ['swift-ui', 'development-framework', 'swift-framework'],
    logo: <SwiftUILogoSymbol />,
    logoSymbol: <SwiftUILogoSymbol />,
    category: ['development'],
    personalNote: 'SwiftUI personalNote'
  },
  {
    title: 'Tailwind UI',
    href: 'https://tailwindui.com/',
    quote: 'Build your next idea even faster.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'tailwind-ui', 'ui-library'],
    logo: <TailwindLogoSymbol />,
    logoSymbol: <TailwindLogoSymbol />,
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
    tags: ['tailwind', 'headless-ui', 'ui-library', 'react', 'vue'],
    logo: <HeadlessUiLogo />,
    logoSymbol: <HeadlessUiLogoSymbol />,
    category: ['development'],
    personalNote: 'Headless UI personalNote'
  },
  {
    title: 'Storybook',
    href: 'https://storybook.js.org/',
    quote: 'Build UIs without the grunt work',
    quoteDescription: 'quoteDescription',
    tags: ['storybook'],
    logo: <StorybookLogo />,
    logoSymbol: <StorybookLogoSymbol />,
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
    logo: <PrettierLogoSymbol />,
    logoSymbol: <PrettierLogoSymbol />,
    category: ['development'],
    personalNote: 'Prettier personalNote'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/',
    quote: 'A opinionated code formatter',
    quoteDescription: 'quoteDescription',
    tags: ['github', 'version-control'],
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
    tags: ['gitlab', 'version-control'],
    logo: <GitLabLogo />,
    logoSymbol: <GitLabLogo />,
    category: ['development'],
    personalNote: 'GitLab personalNote'
  },
  {
    title: 'Vercel',
    href: 'https://vercel.com/',
    quote: 'Vercel quote',
    quoteDescription: 'Vercel quoteDescription.',
    tags: ['vercel'],
    logo: <VercelLogo />,
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
  },
  {
    title: 'Jest',
    href: 'https://jestjs.io/',
    quote:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    quoteDescription:
      'It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!',
    tags: ['jest', 'testing'],
    logo: <FigLogoSymbol />,
    logoSymbol: <FigLogoSymbol />,
    category: ['development'],
    personalNote: 'Jest personalNote'
  },
  {
    title: 'Material UI',
    href: 'https://mui.com/',
    quote: 'Move faster with intuitive React UI tools.',
    quoteDescription:
      'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.',
    tags: ['mui', 'ui-library', 'react'],
    logo: <MuiLogoSymbol />,
    logoSymbol: <MuiLogoSymbol />,
    category: ['development'],
    personalNote: 'Material UI personalNote'
  },
  {
    title: 'CSS 3',
    href: 'https://www.w3schools.com/css/',
    quote:
      'CSS (Cascading Style Sheets) is a web language for applying layout structures and styles to HTML elements.',
    quoteDescription: 'CSS quote description',
    tags: ['css', 'animation'],
    logo: <CssLogoSymbol />,
    logoSymbol: <CssLogoSymbol />,
    category: ['development'],
    personalNote: 'CSS personalNote'
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/',
    quote: 'Nothing greate is made alone.',
    quoteDescription:
      'Figma connects everyone in the design process so teams can deliver better products, faster.',
    tags: ['design', 'ui-design', 'ux-design', 'prototyping', 'wireframing'],
    logo: <FigmaLogoSymbol />,
    logoSymbol: <FigmaLogoSymbol />,
    category: ['design'],
    personalNote: 'Figma personalNote'
  },
  {
    title: 'FigJam',
    href: 'https://www.figma.com/figjam/',
    quote: 'An online whiteboard for teams to ideate and brainstorm together.',
    quoteDescription: 'FigJam quoteDescription.',
    tags: ['design', 'whiteboard', 'brainstorm'],
    logo: <FigmaLogoSymbol />,
    logoSymbol: <FigmaLogoSymbol />,
    category: ['design'],
    personalNote: 'FigJam personalNote'
  },
  {
    title: 'Keynote',
    href: 'https://www.apple.com/keynote/',
    quote: 'Presentations that stand out. Beautifully.',
    quoteDescription: 'Keynote quoteDescription',
    tags: ['presentation', 'presentation-design', 'animation'],
    logo: <AppleKeynoteLogoSymbol />,
    logoSymbol: <AppleKeynoteLogoSymbol />,
    category: ['design'],
    personalNote: 'Keynote personalNote'
  },
  {
    title: 'Adobe Creative Cloud',
    href: 'https://www.adobe.com/de/creativecloud.html',
    quote: 'Make. Create. Amazing.',
    quoteDescription:
      "Adobe Creative Cloud gives you the world's best creative apps and services so you can make anything you can imagine, wherever you're inspired.",
    tags: ['design', 'graphic-design'],
    logo: <AdobeCreativeCloudLogoSymbol />,
    logoSymbol: <AdobeCreativeCloudLogoSymbol />,
    category: ['design'],
    personalNote: 'Adobe Creative Cloud personalNote'
  },
  {
    title: 'Adobe Photoshop',
    href: 'https://www.adobe.com/de/products/photoshop.html',
    quote: 'Mit Photoshop Erstaunliches schaffen.',
    quoteDescription: 'Adobe Photoshop quoteDescription.',
    tags: ['design', 'graphic-design', 'photography'],
    logo: <AdobePhotoshopLogoSymbol />,
    logoSymbol: <AdobePhotoshopLogoSymbol />,
    category: ['design'],
    personalNote: 'Adobe Photoshop personalNote'
  },
  {
    title: 'Adobe Illustrator',
    href: 'https://www.adobe.com/de/products/illustrator.html',
    quote: 'Grafiken mit Wow-Effekt. Einfach überall realisieren.',
    quoteDescription: 'Adobe Illustrator quoteDescription.',
    tags: ['design', 'graphic-design', 'photography'],
    logo: <AdobeIllustratorLogoSymbol />,
    logoSymbol: <AdobeIllustratorLogoSymbol />,
    category: ['design'],
    personalNote: 'Adobe Illustrator personalNote'
  },
  {
    title: 'Adobe InDesign',
    href: 'https://www.adobe.com/de/products/indesign.html',
    quote: 'Für Designer und Layouter beginnt ein neues Kapitel.',
    quoteDescription:
      'Moderne Layouts für Print und digitale Medien – mit InDesign.',
    tags: ['design', 'graphic-design'],
    logo: <AdobeInDesignLogoSymbol />,
    logoSymbol: <AdobeInDesignLogoSymbol />,
    category: ['design'],
    personalNote: 'Adobe InDesign personalNote'
  },
  {
    title: 'Adobe XD',
    href: 'https://www.adobe.com/de/products/xd.html',
    quote: 'Entwirf das Unglaubliche.',
    quoteDescription:
      'Lebensecht in jeder Hinsicht. Erstelle atemberaubend realistische UI-/UX-Designs und hebe dich von anderen ab..',
    tags: ['design', 'ui-design', 'ux-design', 'prototyping', 'wireframing'],
    logo: <AdobeXdLogo />,
    logoSymbol: <AdobeXdLogoSymbol />,
    category: ['design'],
    personalNote: 'Adobe XD personalNote'
  },
  {
    title: 'Heroicons',
    href: 'https://heroicons.com/',
    quote: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    quoteDescription: 'quoteDescription',
    tags: ['tailwind', 'icon-library'],
    logo: <HeroiconsLogo />,
    logoSymbol: <HeroiconsLogoSymbol />,
    category: ['development', 'design'],
    personalNote: 'Heroicons personalNote'
  },
  {
    title: 'Font Awesome',
    href: 'https://fontawesome.com/',
    quote: 'Take the hassle out of icons in your website.',
    quoteDescription:
      'Font Awesome is the Internets icon library and toolkit, used by millions of designers, developers, and content creators.',
    tags: ['icon-library'],
    logo: <FontAwesomeLogoSymbol />,
    logoSymbol: <FontAwesomeLogoSymbol />,
    category: ['development', 'design'],
    personalNote: 'Heroicons personalNote'
  },
  {
    title: 'Shopware',
    href: 'https://shopware.com/',
    quote: 'Build the exceptional.',
    quoteDescription:
      'Comprehensive ecommerce solutions for all your B2C and B2B needs. Powered by the leading open commerce platform. Elevate your business with maximum flexibility, full scalability, and expert support every step of the way. Ready to get started?.',
    tags: ['shopware', 'shop-system', 'cms'],
    logo: <ShopwareLogo />,
    logoSymbol: <ShopwareLogoSymbol />,
    category: ['development', 'ecommerce'],
    personalNote: 'Shopware personalNote'
  },
  {
      title: 'jitter',
      href:'https://jitter.video/',
      quote: 'Motion design made simple.',
      quoteDescription: 'Animate your designs easily. Export your creations as videos or GIFs. All in your browser.',
      tags: ['jitter', 'motion-design', 'prototyping'],
      logo: <AppleLogo />,
      logoSymbol: <AppleLogo />,
      category: ['design'],
      personalNote: 'jitter.video personal note'
  }
];

type Social = {
  title: string;
  href: string;
  logo: JSX.Element;
};

export const socialData: Social[] = [
  {
    title: 'GitHub',
    href: 'https://www.github.com/dominikrubroeder/',
    logo: <GitHubLogo />
  },
  {
    title: 'LinkedIn',
    href: 'https://de.linkedin.com/in/dominik-rubr%C3%B6der-49a63817b',
    logo: <LinkedInLogoSymbol />
  },
  {
    title: 'Xing',
    href: 'https://www.xing.com/profile/Dominik_Rubroeder',
    logo: <XingLogoSymbol />
  }
];
