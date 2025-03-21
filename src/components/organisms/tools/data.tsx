import { FigmaLogo } from '@/components/atoms/logo';
import { Tool } from './types';

export const highlightTools: { group: string; children: Tool[] }[] = [
  {
    group: 'Interface',
    children: [
      {
        title: 'Figma',
        website: 'https://www.figma.com',
        logo: <FigmaLogo />,
        description:
          'How you design, align, and build  matters. Do it together with Figma',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'IDE + Editor',
    children: [
      {
        title: 'WebStorm',
        website: 'https://www.jetbrains.com/de-de/webstorm/',
        logo: '/webstorm.png',
        description: 'The smartest JavaScript IDE',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Notes + Docs',
    children: [
      {
        title: 'Craft',
        website: 'https://www.craft.do',
        logo: '/tool/craft.png',
        description: 'Craft the best docs in the world',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Version Control',
    children: [
      {
        title: 'GitHub',
        website: 'https://github.com/dominikrubroeder',
        logo: '/github.png',
        description: 'The world’s leading AI-powered developer platform.',
        knowledge: 'Daily'
      },
      {
        title: 'GitLab',
        website: 'https://about.gitlab.com',
        logo: '/gitlab.png',
        description:
          'Software. Faster. GitLab is the most comprehensive AI-powered DevSecOps Platform.',
        knowledge: 'Daily'
      }
    ]
  }
];

export const tools: { group: string; children: Tool[] }[] = [
  {
    group: 'Accessibility',
    children: [
      {
        title: 'pa11ty',
        website: 'https://pa11y.org',
        logo: '',
        description: 'p11ty is your automated accessibility testing pal.',
        knowledge: 'Not started'
      },
      {
        title: 'Lighthouse',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'AI',
    children: [
      {
        title: 'ChatGPT',
        website: 'https://chatgpt.com',
        logo: '',
        description:
          'A conversational AI system that listens, learns, and challenges.',
        knowledge: 'Professional'
      },
      {
        title: 'Claude AI',
        website: 'https://claude.ai',
        logo: '',
        description: 'Talk with Claude, an AI assistant from Antrophic',
        knowledge: 'Used'
      },
      {
        title: 'Cursor AI',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Not started'
      },
      {
        title: 'v0.dev',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Analyse',
    children: [
      {
        title: 'Google Analytics',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Used'
      },
      {
        title: 'Hotjar',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Used'
      },
      {
        title: 'Vercel Speedinsights',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Vercel Web Analytics',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'API',
    children: [
      {
        title: 'Axios',
        website: 'https://axios-http.com/',
        logo: '',
        description: 'Promise based HTTP client for the browser and node.js',
        knowledge: 'Used'
      },
      {
        title: 'Postman',
        website: 'https://www.postman.com/',
        logo: '',
        description: "The World's Leading API Platform",
        knowledge: 'Used'
      },
      {
        title: 'Bruno',
        website: 'https://www.usebruno.com/',
        logo: '',
        description: "The World's Leading API Platform",
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Authentication',
    children: [
      {
        title: 'Auth.js',
        website: 'https://authjs.dev',
        logo: '',
        description: 'Authentication for the Web. Free and open source.',
        knowledge: 'Daily'
      },
      {
        title: 'Clerk',
        website: 'https://clerk.com',
        logo: '',
        description:
          'The easiest way to add authentication and user management to your application.',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Browser',
    children: [
      {
        title: 'Arc',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Used'
      },
      {
        title: 'Brave',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Not started'
      },
      {
        title: 'Chrome',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Daily'
      },
      {
        title: 'Firefox',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Safari',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'CMS',
    children: [
      {
        title: 'Storyblok',
        website: 'https://www.storyblok.com',
        logo: '/storyblok.png',
        description: 'The Way to Modern Content',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Communication',
    children: [
      {
        title: 'Slack',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Teams',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Color',
    children: [
      {
        title: 'Color Designer',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'uicolors',
        description: '',
        website: 'https://uicolors.app',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Deployment + Hosting',
    children: [
      {
        title: 'AWS Amplify',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Netlify',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'platform.sh',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Vercel',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Design + Interface',
    children: [
      {
        title: 'Adobe XD (deprecated)',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Figma',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'InVision Studio',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Sketch',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Digital Art',
    children: [
      {
        title: 'Procreate',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Docs + Notes',
    children: [
      {
        title: 'Craft',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Inkdrop',
        description: '',
        website: '',
        logo: '/tools/inkdrop.png',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Icons',
    children: [
      {
        title: 'heroicons',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'luicide-react',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Material Icons',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'IDE + Editor',
    children: [
      {
        title: 'VS Code',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'WebStorm',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'zed',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Sublime Text',
        description: '',
        website: 'https://www.sublimetext.com',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Image',
    children: [
      {
        title: 'Dall-E',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Midjourney',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Unplash',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Inspiration',
    children: [
      {
        title: 'Dribbble',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Mobbin',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Pinterest',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Toolfolio',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Learning',
    children: [
      {
        title: 'animations.dev',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Build UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Builder.io',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Design+Code',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'dev.to',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Fireship',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'FrontendMasters',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'frontendmentor.io',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Learn Next.js',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Refactoring UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Udemy',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Motion',
    children: [
      {
        title: 'jitter.video',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'LottieFiles',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'LottieFiles for Developers',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'motion (formerly framer-motion)',
        description: 'A modern animation library for JavaScript and React',
        website: 'https://motion.dev/',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Procreate Dreams',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'News',
    children: [
      {
        title: 'daily.dev',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'The Verge',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Package Manager',
    children: [
      {
        title: 'bun',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'npm',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'pnpM',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'yarn',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Packages',
    children: [
      {
        title: '@vercel/analytics',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@vercel/speed-insights',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'class-variance-authority',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'clsx',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@heroicons/react',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@meilisearch/instant-meilisearch',
        description: '',
        website:
          'https://www.npmjs.com/package/@meilisearch/instant-meilisearch',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@shopware/api-client',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@shopware/api-gen',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: '@storyblok/react',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'ESLint',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'eslint-plugin-tailwindcss',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'html-react-parser',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'lucide-react',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'next-view-transitions',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'react-hook-form',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'react-instantsearch',
        description: '',
        website: 'https://www.npmjs.com/package/react-instantsearch',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'react-instantsearch-nextjs',
        description: '',
        website: 'https://www.npmjs.com/package/react-instantsearch-nextjs',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'react-syntax-highlighter',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'use-debounce',
        description: '',
        website: 'https://www.npmjs.com/package/use-debounce',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'prettier',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'zod',
        description:
          'TypeScript-first schema validation with static type inference',
        website: 'https://zod.dev',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Payment',
    children: [
      {
        title: 'Klarna',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'PayOne',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Stripe',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Performance',
    children: [
      {
        title: 'Lighthouse',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Photo + Graphics',
    children: [
      {
        title: 'Illustrator',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'InDesign',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Photoshop',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Project Management',
    children: [
      {
        title: 'Jira',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Daily'
      },
      {
        title: 'Miro',
        website: 'https://miro.com',
        logo: '/miro.png',
        description:
          "With the Power of Miro, You Can Visually Collaborate Any Time Anywhere Across Your Company. Don't Let Distances or Timezones Stop You from Building Beautiful Products for Your Users. Miro for UX & Design.",
        knowledge: 'Professional'
      },
      {
        title: 'TeamGrid',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Research + Study',
    children: [
      {
        title: 'Baymard Institute',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Human Interface Guidelines (Apple)',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'nn/g Group',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Statista',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Search',
    children: [
      {
        title: 'Algolia',
        website: 'https://www.algolia.com',
        logo: '/algolia.png',
        description: 'AI-Search, that understands',
        knowledge: 'Experienced'
      },
      {
        title: 'Elastic Search',
        website: 'https://www.elastic.co/elasticsearch',
        logo: '',
        description: '',
        knowledge: 'Not started'
      },
      {
        title: 'meilisearch',
        website: 'https://www.meilisearch.com/',
        logo: '',
        description: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Shop System + Ecommerce',
    children: [
      {
        title: 'Shopify',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Not started'
      },
      {
        title: 'Shopware',
        website: 'https://www.shopware.com',
        logo: '/shopware.png',
        description:
          'Build the exceptional. Comprehensive ecommerce solutions for all your B2C and B2B needs. Powered by the leading open commerce platform.',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Testing',
    children: [
      {
        title: 'Jest',
        website: '',
        logo: '',
        description: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'UI',
    children: [
      {
        title: 'Headless UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Material UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Practical UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Radix UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'shadcn/ui',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Tailwind UI',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Refactoring UI',
        description: '',
        website: 'https://www.refactoringui.com',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Version Control',
    children: [
      {
        title: 'GitHub',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'GitLab',
        description: '',
        website: '',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  }
];
