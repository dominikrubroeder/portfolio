import {
  LogoCss,
  LogoHtml,
  LogoJavascript,
  LogoMarkdown,
  LogoMotion,
  LogoNextjs,
  LogoReact,
  LogoSass,
  LogoTailwindCss,
  LogoTwig,
  LogoTypescript
} from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';

export const mainTechnologies: Brand[] = [
  {
    name: 'React',
    description: 'as user interface web library',
    logo: <LogoReact className="size-12" />,
    href: 'https://react.dev/',
    knowledge: 'Daily'
  },
  {
    name: 'Next.js',
    description: 'as fullstack web framework',
    logo: <LogoNextjs className="size-12" />,
    href: 'https://nextjs.org/',
    knowledge: 'Daily'
  },
  {
    name: 'TypeScript',
    description: 'as superset to JavaScript',
    logo: <LogoTypescript className="size-12" />,
    href: 'https://www.typescriptlang.org/',
    knowledge: 'Daily'
  },
  {
    name: 'Tailwind CSS',
    description: 'as superset to CSS',
    logo: <LogoTailwindCss className="size-12" />,
    href: 'https://tailwindcss.com/',
    knowledge: 'Daily'
  },
  {
    name: 'Motion',
    description: 'as animation library',
    logo: <LogoMotion className="size-12" />,
    href: 'https://motion.dev/',
    knowledge: 'Daily'
  }
];

export const technologies: { group: string; children: Brand[] }[] = [
  {
    group: 'Framework + Library',
    children: [
      {
        name: 'React',
        description: 'The library for web and native user interfaces',
        href: 'https://react.dev/',
        logo: <LogoReact className="size-12" />,
        knowledge: 'Daily'
      },
      {
        name: 'Vue.js',
        description: undefined,
        href: 'https://vuejs.org',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Nue.js',
        description: undefined,
        href: 'https://nuejs.org/',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Svelte',
        description: 'Web development for the rest of us',
        href: 'https://svelte.dev/',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'SwiftUI',
        description: undefined,
        href: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Gatsby',
        description: undefined,
        href: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Full-Stack Framework',
    children: [
      {
        name: 'Astro',
        description: 'The web framework for content-driven websites',
        href: 'https://astro.build/',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Next.js',
        description: 'The React Framework for the Web',
        href: 'https://nextjs.org/',
        logo: <LogoNextjs className="size-12" />,
        knowledge: 'Daily'
      },
      {
        name: 'Remix',
        description:
          'Focused on web standards and modern web app UX, you’re simply going to build better websites',
        href: 'https://remix.run/',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Nuxt.js',
        description: undefined,
        href: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'React Router',
        description:
          'A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere.',
        href: 'https://reactrouter.com',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Programming Language',
    children: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org',
        logo: <LogoTypescript className="size-12" />,
        description: 'TypeScript is JavaScript with syntax for types.',
        knowledge: 'Daily'
      },
      {
        name: 'JavaScript',
        href: 'https://www.w3schools.com/js/',
        logo: <LogoJavascript className="size-12" />,
        description: 'JavaScript is the programming language of the Web.',
        knowledge: 'Daily'
      },
      {
        name: 'Swift',
        href: '',
        logo: '',
        description: undefined,
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Markup Language',
    children: [
      {
        name: 'HTML',
        href: 'https://www.w3schools.com/html/',
        logo: <LogoHtml className="size-12" />,
        description: 'The default markup language for the web',
        knowledge: 'Daily'
      },
      {
        name: 'Markdown',
        href: 'https://markdown.de/',
        logo: <LogoMarkdown className="size-12" />,
        description: 'A simplified markup language',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Style Sheet Language + Framework',
    children: [
      {
        name: 'CSS',
        href: 'https://www.w3schools.com/css/',
        logo: <LogoCss className="size-12" />,
        description: 'The default styling markup for the web',
        knowledge: 'Daily'
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        logo: <LogoTailwindCss className="size-12" />,
        description:
          'Rapidly build modern websites without ever leaving your HTML.',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Animation',
    children: [
      {
        name: 'Motion',
        description: 'A modern animation library for JavaScript and React',
        href: 'https://motion.dev/',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Runtime Environment',
    children: [
      {
        name: 'Node.js',
        description: undefined,
        href: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Deno',
        description: undefined,
        href: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Query Language',
    children: [
      {
        name: 'GraphQL',
        description: undefined,
        href: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Build Tool',
    children: [
      {
        name: 'Vite',
        description: undefined,
        href: 'https://vite.dev/',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Preprocessor',
    children: [
      {
        name: 'Sass',
        description: 'Syntactically Awesome Style Sheets',
        href: 'https://sass-lang.com',
        logo: <LogoSass />,
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Template Engine',
    children: [
      {
        name: 'Twig',
        description: 'The flexible, fast, and secure PHP template engine',
        href: 'https://twig.symfony.com',
        logo: <LogoTwig />,
        knowledge: 'Experienced'
      }
    ]
  }
];
