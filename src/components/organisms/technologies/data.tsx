import type { Technology } from '@/components/organisms/technologies/types';

import {
  MotionLogo,
  NextjsLogo,
  ReactLogo,
  TailwindCssLogo,
  TypeScriptLogo
} from '@/components/atoms/logo';

export const mainTechnologies = [
  {
    name: 'React',
    description: 'as frontend web library',
    logo: <ReactLogo className="size-12" />
  },
  {
    name: 'Next.js',
    description: 'as fullstack web application framework',
    logo: <NextjsLogo className="size-12" />
  },
  {
    name: 'TypeScript',
    description: 'as superset to JavaScript',
    logo: <TypeScriptLogo className="size-12" />
  },
  {
    name: 'Tailwind CSS',
    description: 'as superset to CSS',
    logo: <TailwindCssLogo className="size-12" />
  },
  {
    name: 'Motion',
    description: 'as animation library',
    logo: <MotionLogo className="size-12" />
  }
];

export const technologies: { group: string; children: Technology[] }[] = [
  {
    group: 'Framework + Library',
    children: [
      {
        title: 'React',
        website: 'https://react.dev/',
        logo: 'https://dominikrubroeder.dev/react.png',
        description: 'The library for web and native user interfaces',
        knowledge: 'Daily'
      },
      {
        title: 'Vue.js',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Nue.js',
        description: '',
        website: 'https://nuejs.org/',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Svelte',
        description: 'web development for the rest of us',
        website: 'https://svelte.dev/',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'SwiftUI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Astro',
        description: 'The web framework for content-driven websites',
        website: 'https://astro.build/',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Gatsby',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Full-Stack Framework',
    children: [
      {
        title: 'Next.js',
        description: 'The React Framework for the Web',
        website: 'https://nextjs.org/',
        logo: 'https://dominikrubroeder.dev/nextjs.png',
        knowledge: 'Daily'
      },
      {
        title: 'Remix',
        description:
          'Focused on web standards and modern web app UX, you’re simply going to build better websites',
        website: 'https://remix.run/',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Nuxt.js',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'React Router',
        description: '(v7, framework mode)',
        website: 'https://reactrouter.com/start/framework/installation',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Programming Language',
    children: [
      {
        title: 'TypeScript',
        website: 'https://www.typescriptlang.org',
        logo: 'https://dominikrubroeder.dev/typescript.png',
        description: 'TypeScript is JavaScript with syntax for types.',
        knowledge: 'Daily'
      },
      {
        title: 'JavaScript',
        website: 'https://www.w3schools.com/js/',
        logo: 'https://dominikrubroeder.dev/javascript.png',
        description: 'JavaScript is the programming language of the Web.',
        knowledge: 'Daily'
      },
      {
        title: 'Swift',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Markup Language',
    children: [
      {
        title: 'HTML',
        website: 'https://www.w3schools.com/html/',
        logo: 'https://dominikrubroeder.dev/html.png',
        description: 'The default markup language for the web',
        knowledge: 'Daily'
      },
      {
        title: 'Markdown',
        website: 'https://markdown.de/',
        logo: 'https://dominikrubroeder.dev/markdown.png',
        description: 'A simplified markup language',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Style Sheet Language + Framework',
    children: [
      {
        title: 'CSS',
        website: 'https://www.w3schools.com/css/',
        logo: 'https://dominikrubroeder.dev/css.png',
        description: 'The default styling markup for the web',
        knowledge: 'Daily'
      },
      {
        title: 'Tailwind CSS',
        website: 'https://tailwindcss.com/',
        logo: 'https://dominikrubroeder.dev/tailwind.png',
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
        title: 'Motion',
        description: 'A modern animation library for JavaScript and React',
        website: 'https://motion.dev/',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Runtime Environment',
    children: [
      {
        title: 'Node.js',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Deno',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Query Language',
    children: [
      {
        title: 'GraphQL',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Build Tool',
    children: [
      {
        title: 'Vite',
        description: '',
        website: 'https://vite.dev/',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Preprocessor',
    children: [
      {
        title: 'Sass',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  }
];
