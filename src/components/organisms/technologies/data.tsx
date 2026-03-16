import {
  LogoAngular,
  LogoAstro,
  LogoCss,
  LogoDeno,
  LogoGraphQl,
  LogoHtml,
  LogoJavascript,
  LogoMarkdown,
  LogoMotion,
  LogoNextjs,
  LogoNodeJs,
  LogoNueJs,
  LogoReact,
  LogoSass,
  LogoSvelte,
  LogoSwift,
  LogoSwiftUi,
  LogoTailwindCss,
  LogoTwig,
  LogoTypescript,
  LogoVueJs
} from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';

export const mainTechnologies: Brand[] = [
  {
    name: 'React',
    description: 'as user interface web library',
    logo: <LogoReact id="technologies-react" className="size-12" />,
    href: 'https://react.dev/',
    usageLevel: 'Expert'
  },
  {
    name: 'Next.js',
    description: 'as fullstack web framework',
    logo: <LogoNextjs id="technologies-next-js" className="size-12" />,
    href: 'https://nextjs.org/',
    usageLevel: 'Expert'
  },
  {
    name: 'TypeScript',
    description: 'as superset to JavaScript',
    logo: <LogoTypescript id="technologies-typescript" className="size-12" />,
    href: 'https://www.typescriptlang.org/',
    usageLevel: 'Expert'
  },
  {
    name: 'Tailwind CSS',
    description: 'as superset to CSS',
    logo: (
      <LogoTailwindCss id="technologies-tailwind-css" className="size-12" />
    ),
    href: 'https://tailwindcss.com/',
    usageLevel: 'Expert'
  },
  {
    name: 'Motion',
    description: 'as animation library',
    logo: <LogoMotion id="technologies-motion" className="size-12" />,
    href: 'https://motion.dev/',
    usageLevel: 'Expert'
  }
];

export const technologies: { group: string; children: Brand[] }[] = [
  {
    group: 'Framework + Library',
    children: [
      {
        name: 'Angular',
        description:
          'The framework for building scalable web apps with confidence',
        href: 'https://angular.dev',
        logo: (
          <LogoAngular
            id="technologies-framework-angular"
            className="size-12"
          />
        ),
        usageLevel: 'Aware'
      },
      {
        name: 'React',
        description: 'The library for web and native user interfaces',
        href: 'https://react.dev/',
        logo: (
          <LogoReact id="technologies-framework-react" className="size-12" />
        ),
        usageLevel: 'Expert'
      },
      {
        name: 'Vue.js',
        description: 'The Progressive JavaScript Framework',
        href: 'https://vuejs.org',
        logo: (
          <LogoVueJs id="technologies-framework-vue-js" className="size-12" />
        ),
        usageLevel: 'Working'
      },
      {
        name: 'Nue.js',
        description: 'The UNIX of the Web',
        href: 'https://nuejs.org/',
        logo: (
          <LogoNueJs id="technologies-framework-nue-js" className="size-12" />
        ),
        usageLevel: 'Aware'
      },
      {
        name: 'Svelte',
        description: 'Web development for the rest of us',
        href: 'https://svelte.dev/',
        logo: (
          <LogoSvelte id="technologies-framework-svelte" className="size-12" />
        ),
        usageLevel: 'Basic'
      },
      {
        name: 'SwiftUI',
        description:
          'Innovative, exceptionally simple way to build user interfaces across all Apple platforms with the power of Swift',
        href: 'https://developer.apple.com/swiftui/',
        logo: (
          <LogoSwiftUi
            id="technologies-framework-swift-ui"
            className="size-12"
          />
        ),
        usageLevel: 'Working'
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
        logo: (
          <LogoAstro id="technologies-full-stack-astro" className="size-12" />
        ),
        usageLevel: 'Aware'
      },
      {
        name: 'Next.js',
        description: 'The React Framework for the Web',
        href: 'https://nextjs.org/',
        logo: (
          <LogoNextjs
            id="technologies-full-stack-next-js"
            className="size-12"
          />
        ),
        usageLevel: 'Expert'
      },
      {
        name: 'Remix',
        description: 'A Full Stack Framework Built on Web APIs',
        href: 'https://remix.run/',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'Nuxt',
        description: 'The Full-Stack Vue Framework',
        href: 'https://nuxt.com',
        logo: '',
        usageLevel: 'Aware'
      },
      {
        name: 'React Router',
        description:
          'A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere.',
        href: 'https://reactrouter.com',
        logo: '',
        usageLevel: 'Basic'
      }
    ]
  },
  {
    group: 'Programming Language',
    children: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org',
        logo: (
          <LogoTypescript
            id="technologies-full-stack-typescript"
            className="size-12"
          />
        ),
        description: 'TypeScript is JavaScript with syntax for types.',
        usageLevel: 'Expert'
      },
      {
        name: 'JavaScript',
        href: 'https://www.w3schools.com/js/',
        logo: (
          <LogoJavascript
            id="technologies-full-stack-javascript"
            className="size-12"
          />
        ),
        description: 'JavaScript is the programming language of the Web.',
        usageLevel: 'Expert'
      },
      {
        name: 'Swift',
        href: 'https://developer.apple.com/swift/',
        logo: (
          <LogoSwift
            id="technologies-programming-language-swift"
            className="size-12"
          />
        ),
        description:
          'A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS',
        usageLevel: 'Basic'
      }
    ]
  },
  {
    group: 'Markup Language',
    children: [
      {
        name: 'HTML',
        href: 'https://www.w3schools.com/html/',
        logo: <LogoHtml id="technologies-html" className="size-12" />,
        description: 'The default markup language for the web',
        usageLevel: 'Expert'
      },
      {
        name: 'Markdown',
        href: 'https://markdown.de/',
        logo: <LogoMarkdown id="technologies-markdown" className="size-12" />,
        description: 'A simplified markup language',
        usageLevel: 'Expert'
      }
    ]
  },
  {
    group: 'Style Sheet Language + Framework',
    children: [
      {
        name: 'CSS',
        href: 'https://www.w3schools.com/css/',
        logo: <LogoCss id="technologies-css" className="size-12" />,
        description: 'The default styling markup for the web',
        usageLevel: 'Expert'
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        logo: (
          <LogoTailwindCss
            id="technologies-style-sheet-language-tailwind-css"
            className="size-12"
          />
        ),
        description:
          'Rapidly build modern websites without ever leaving your HTML.',
        usageLevel: 'Expert'
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
        usageLevel: 'Expert'
      }
    ]
  },
  {
    group: 'Runtime Environment',
    children: [
      {
        name: 'Node.js',
        description: 'Run JavaScript everywhere',
        href: 'https://nodejs.org/en',
        logo: (
          <LogoNodeJs
            id="technologies-runtime-environment-node-js"
            className="size-12"
          />
        ),
        usageLevel: 'Aware'
      },
      {
        name: 'Deno',
        description: 'The next generation JavaScript runtime',
        href: 'https://deno.com',
        logo: (
          <LogoDeno
            id="technologies-runtime-environment-deno"
            className="size-12"
          />
        ),
        usageLevel: 'Aware'
      }
    ]
  },
  {
    group: 'Query Language',
    children: [
      {
        name: 'GraphQL',
        description:
          'Open-source data query and manipulation language for APIs',
        href: 'https://graphql.org',
        logo: <LogoGraphQl id="technologies-query-language-graph-ql" />,
        usageLevel: 'Aware'
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
        usageLevel: 'Working'
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
        logo: <LogoSass id="technologies-sass" />,
        usageLevel: 'Applied'
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
        logo: <LogoTwig id="technologies-template-engine-twig" />,
        usageLevel: 'Applied'
      }
    ]
  }
];
