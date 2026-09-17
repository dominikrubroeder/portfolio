import type { Brand } from '@/components/organisms/brand';
import { getTechnologies } from '@/components/organisms/technologies/helper';

export const technologies: { group: string; children: Brand[] }[] = [
  {
    group: 'Authentication',
    children: [
      {
        name: 'Auth.js',
        href: 'https://authjs.dev'
      },
      {
        name: 'Better Auth',
        href: 'https://www.better-auth.com'
      }
    ]
  },
  {
    group: 'Form',
    children: [
      {
        name: 'zod',
        href: 'https://zod.dev'
      },
      {
        name: 'React Hook Form',
        href: 'https://react-hook-form.com'
      }
    ]
  },
  {
    group: 'Framework + Library',
    children: [
      {
        name: 'React',
        href: 'https://react.dev/'
      },
      {
        name: 'Vue.js',
        href: 'https://vuejs.org'
      },
      {
        name: 'Svelte',
        href: 'https://svelte.dev/'
      },
      {
        name: 'SwiftUI',
        href: 'https://developer.apple.com/swiftui/'
      }
    ]
  },
  {
    group: 'Full-Stack Framework',
    children: [
      {
        name: 'Astro',
        href: 'https://astro.build/'
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/'
      },
      {
        name: 'Remix',
        href: 'https://remix.run/'
      },
      {
        name: 'Nuxt',
        href: 'https://nuxt.com'
      },
      {
        name: 'React Router',
        href: 'https://reactrouter.com'
      }
    ]
  },
  {
    group: 'Icons',
    children: [
      {
        name: 'heroicons',
        href: 'https://heroicons.com'
      },
      {
        name: 'Lucide',
        href: 'https://lucide.dev'
      },
      {
        name: 'Material Icons',
        href: 'https://fonts.google.com/icons'
      },
      {
        name: 'Phosphor Icons',
        href: 'https://phosphoricons.com'
      }
    ]
  },
  {
    group: 'Internationalization (i18n)',
    children: [
      {
        name: 'next-intl',
        href: 'https://next-intl.dev'
      }
    ]
  },
  {
    group: 'Programming Language',
    children: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org'
      },
      {
        name: 'JavaScript',
        href: 'https://www.w3schools.com/js/'
      },
      {
        name: 'Swift',
        href: 'https://developer.apple.com/swift/'
      }
    ]
  },
  {
    group: 'Markup Language',
    children: [
      {
        name: 'HTML',
        href: 'https://www.w3schools.com/html/'
      },
      {
        name: 'Markdown',
        href: 'https://markdown.de/'
      }
    ]
  },
  {
    group: 'CSS',
    children: [
      {
        name: 'CSS',
        href: 'https://www.w3schools.com/css/'
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/'
      },
      {
        name: 'Panda CSS',
        href: 'https://panda-css.com/'
      },
      {
        name: 'Sass',
        href: 'https://sass-lang.com'
      }
    ]
  },
  {
    group: 'Testing',
    children: [
      {
        name: 'Ghost Inspector',
        href: 'https://ghostinspector.com'
      },
      {
        name: 'Jest',
        href: 'https://jestjs.io'
      },
      {
        name: 'Playwright',
        href: 'https://playwright.dev'
      },
      {
        name: 'cypress',
        href: 'https://www.cypress.io'
      }
    ]
  },
  {
    group: 'Animation + Motion',
    children: [
      {
        name: 'Motion',
        href: 'https://motion.dev/'
      }
    ]
  },
  {
    group: 'Payment',
    children: [
      {
        name: 'PAYONE',
        href: 'https://www.payone.com'
      },
      {
        name: 'PayPal',
        href: 'https://www.paypal.com'
      }
    ]
  },
  {
    group: 'Runtime Environment',
    children: [
      {
        name: 'Node.js',
        href: 'https://nodejs.org/en'
      },
      {
        name: 'Deno',
        href: 'https://deno.com'
      }
    ]
  },
  {
    group: 'Query Language',
    children: [
      {
        name: 'GraphQL',
        href: 'https://graphql.org'
      }
    ]
  },
  {
    group: 'Build Tool',
    children: [
      {
        name: 'Vite',
        href: 'https://vite.dev/'
      }
    ]
  },
  {
    group: 'Template Engine',
    children: [
      {
        name: 'Twig',
        href: 'https://twig.symfony.com'
      }
    ]
  }
];

export const mainTechnologies: Brand[] = getTechnologies({
  names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion']
});
