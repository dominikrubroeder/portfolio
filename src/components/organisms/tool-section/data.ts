import { Tool } from '@/interfaces';

export const highlightTools: Tool[] = [
  {
    title: 'Figma',
    website: 'https://www.figma.com',
    logo: '/figma.png',
    description:
      'How you design, align, and build  matters. Do it together with Figma',
    type: 'Interfacetool'
  },
  {
    title: 'WebStorm',
    website: 'https://www.jetbrains.com/de-de/webstorm/',
    logo: '/webstorm.png',
    description: 'The smartest JavaScript IDE',
    type: 'IDE'
  },
  {
    title: 'Craft',
    website: 'https://www.craft.do',
    logo: '/tool/craft.png',
    description: 'Craft the best docs in the world',
    type: 'Notes / Docs'
  },
  {
    title: 'GitHub',
    website: 'https://github.com/dominikrubroeder',
    logo: '/github.png',
    description: 'The world’s leading AI-powered developer platform.',
    type: 'Version Control'
  },
  {
    title: 'GitLab',
    website: 'https://about.gitlab.com',
    logo: '/gitlab.png',
    description:
      'Software. Faster. GitLab is the most comprehensive AI-powered DevSecOps Platform.',
    type: 'Version Control'
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
        type: 'Accessibility'
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
        type: 'AI'
      },
      {
        title: 'Claude AI',
        website: 'https://claude.ai',
        logo: '',
        description: 'Talk with Claude, an AI assistant from Antrophic',
        type: 'AI'
      },
      {
        title: 'Cursor AI',
        website: '',
        logo: '',
        description: '',
        type: 'AI'
      },
      {
        title: 'v0.dev',
        website: '',
        logo: '',
        description: '',
        type: 'AI'
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
        type: 'Analyse'
      },
      {
        title: 'Hotjar',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse'
      },
      {
        title: 'Vercel Speedinsights',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse'
      },
      {
        title: 'Vercel Web Analytics',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse'
      }
    ]
  },
  {
    group: 'API',
    children: [
      {
        title: 'Axios',
        website: '',
        logo: '',
        description: 'Promise based HTTP client for the browser and node.js',
        type: 'API'
      },
      {
        title: 'Postman',
        website: '',
        logo: '',
        description: "The World's Leading API Platform",
        type: 'API'
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
        type: 'Authentication'
      },
      {
        title: 'Clerk',
        website: 'https://clerk.com',
        logo: '',
        description:
          'The easiest way to add authentication and user management to your application.',
        type: 'Authentication'
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
        type: 'Browser'
      },
      {
        title: 'Brave',
        website: '',
        logo: '',
        description: '',
        type: 'Browser'
      },
      {
        title: 'Chrome',
        website: '',
        logo: '',
        description: '',
        type: 'Browser'
      },
      {
        title: 'Firefox',
        website: '',
        logo: '',
        description: '',
        type: 'Browser'
      },
      {
        title: 'Safari',
        website: '',
        logo: '',
        description: '',
        type: 'Browser'
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
        type: 'CMS'
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
        type: 'Communication'
      },
      {
        title: 'Teams',
        description: '',
        website: '',
        logo: '',
        type: 'Communication'
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
        type: 'Color'
      },
      {
        title: 'uicolors',
        description: '',
        website: 'https://uicolors.app',
        logo: '',
        type: 'Color'
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
        type: 'Deployment + Hosting'
      },
      {
        title: 'Netlify',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting'
      },
      {
        title: 'platform.sh',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting'
      },
      {
        title: 'Vercel',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting'
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
        type: 'Design + Interface'
      },
      {
        title: 'Figma',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface'
      },
      {
        title: 'InVision Studio',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface'
      },
      {
        title: 'Sketch',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface'
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
        type: 'Digital Art'
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
        type: 'Docs + Notes'
      },
      {
        title: 'Inkdrop',
        description: '',
        website: '',
        logo: '',
        type: 'Docs + Notes'
      }
    ]
  },
  {
    group: 'DX',
    children: [
      {
        title: 'ESLint',
        description: '',
        website: '',
        logo: '',
        type: 'DX'
      },
      {
        title: 'prettier',
        description: '',
        website: '',
        logo: '',
        type: 'DX'
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
        type: 'Icons'
      },
      {
        title: 'luicide-react',
        description: '',
        website: '',
        logo: '',
        type: 'Icons'
      },
      {
        title: 'Material Icons',
        description: '',
        website: '',
        logo: '',
        type: 'Icons'
      }
    ]
  },
  {
    group: 'IDE',
    children: [
      {
        title: 'VS Code',
        description: '',
        website: '',
        logo: '',
        type: 'IDE'
      },
      {
        title: 'WebStorm',
        description: '',
        website: '',
        logo: '',
        type: 'IDE'
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
        type: 'Image'
      },
      {
        title: 'Midjourney',
        description: '',
        website: '',
        logo: '',
        type: 'Image'
      },
      {
        title: 'Unplash',
        description: '',
        website: '',
        logo: '',
        type: 'Image'
      }
    ]
  },
  {
    group: 'Inspiration',
    children: [
      {
        title: 'Dribble',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration'
      },
      {
        title: 'Mobbin',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration'
      },
      {
        title: 'Pinterest',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration'
      },
      {
        title: 'Toolfolio',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration'
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
        type: 'Learning'
      },
      {
        title: 'Build UI',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'Builder.io',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'Design+Code',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'dev.to',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'Fireship',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'FrontendMasters',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'frontendmentor.io',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'Learn Next.js',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'Refactoring UI',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
      },
      {
        title: 'Udemy',
        description: '',
        website: '',
        logo: '',
        type: 'Learning'
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
        type: 'Motion'
      },
      {
        title: 'LottieFiles',
        description: '',
        website: '',
        logo: '',
        type: 'Motion'
      },
      {
        title: 'LottieFiles for Developers',
        description: '',
        website: '',
        logo: '',
        type: 'Motion'
      },
      {
        title: 'motion (formerly framer-motion)',
        description: '',
        website: '',
        logo: '',
        type: 'Motion'
      },
      {
        title: 'Procreate Dreams',
        description: '',
        website: '',
        logo: '',
        type: 'Motion'
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
        type: 'News'
      },
      {
        title: 'The Verge',
        description: '',
        website: '',
        logo: '',
        type: 'News'
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
        type: 'Package Manager'
      },
      {
        title: 'npm',
        description: '',
        website: '',
        logo: '',
        type: 'Package Manager'
      },
      {
        title: 'pnpM',
        description: '',
        website: '',
        logo: '',
        type: 'Package Manager'
      },
      {
        title: 'yarn',
        description: '',
        website: '',
        logo: '',
        type: 'Package Manager'
      }
    ]
  },
  {
    group: 'Packages',
    children: [
      {
        title: 'html-react-parser',
        description: '',
        website: '',
        logo: '',
        type: 'Packages'
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
        type: 'Payment'
      },
      {
        title: 'PayOne',
        description: '',
        website: '',
        logo: '',
        type: 'Payment'
      },
      {
        title: 'Stripe',
        description: '',
        website: '',
        logo: '',
        type: 'Payment'
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
        type: 'Performance'
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
        type: 'Photo + Graphics'
      },
      {
        title: 'InDesign',
        description: '',
        website: '',
        logo: '',
        type: 'Photo + Graphics'
      },
      {
        title: 'Photoshop',
        description: '',
        website: '',
        logo: '',
        type: 'Photo + Graphics'
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
        type: 'Project Management'
      },
      {
        title: 'Miro',
        website: 'https://miro.com',
        logo: '/miro.png',
        description:
          "With the Power of Miro, You Can Visually Collaborate Any Time Anywhere Across Your Company. Don't Let Distances or Timezones Stop You from Building Beautiful Products for Your Users. Miro for UX & Design.",
        type: 'Project Management'
      },
      {
        title: 'TeamGrid',
        website: '',
        logo: '',
        description: '',
        type: 'Project Management'
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
        type: 'Research + Study'
      },
      {
        title: 'Human Interface Guidelines (Apple)',
        description: '',
        website: '',
        logo: '',
        type: 'Research + Study'
      },
      {
        title: 'nn/g Group',
        description: '',
        website: '',
        logo: '',
        type: 'Research + Study'
      },
      {
        title: 'Statista',
        description: '',
        website: '',
        logo: '',
        type: 'Research + Study'
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
        type: 'Search'
      },
      {
        title: 'Elastic Search',
        website: '',
        logo: '',
        description: '',
        type: 'Search'
      }
    ]
  },
  {
    group: 'Shop System',
    children: [
      {
        title: 'Shopify',
        website: '',
        logo: '',
        description: '',
        type: 'Shop System'
      },
      {
        title: 'Shopware',
        website: 'https://www.shopware.com',
        logo: '/shopware.png',
        description:
          'Build the exceptional. Comprehensive ecommerce solutions for all your B2C and B2B needs. Powered by the leading open commerce platform.',
        type: 'Shop System'
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
        type: 'Testing'
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
        type: 'UI'
      },
      {
        title: 'Material UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI'
      },
      {
        title: 'Practical UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI'
      },
      {
        title: 'Radix UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI'
      },
      {
        title: 'shadcn/ui',
        description: '',
        website: '',
        logo: '',
        type: 'UI'
      },
      {
        title: 'Tailwind UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI'
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
        type: 'Version Control'
      },
      {
        title: 'GitLab',
        description: '',
        website: '',
        logo: '',
        type: 'Version Control'
      }
    ]
  }
];
