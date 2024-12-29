import { Tool } from '@/interfaces';

export const highlightTools: Tool[] = [
  {
    title: 'Figma',
    website: 'https://www.figma.com',
    logo: '/figma.png',
    description:
      'How you design, align, and build  matters. Do it together with Figma',
    type: 'Interfacetool',
    knowledge: 'Daily'
  },
  {
    title: 'WebStorm',
    website: 'https://www.jetbrains.com/de-de/webstorm/',
    logo: '/webstorm.png',
    description: 'The smartest JavaScript IDE',
    type: 'IDE',
    knowledge: 'Daily'
  },
  {
    title: 'Craft',
    website: 'https://www.craft.do',
    logo: '/tool/craft.png',
    description: 'Craft the best docs in the world',
    type: 'Notes / Docs',
    knowledge: 'Daily'
  },
  {
    title: 'GitHub',
    website: 'https://github.com/dominikrubroeder',
    logo: '/github.png',
    description: 'The world’s leading AI-powered developer platform.',
    type: 'Version Control',
    knowledge: 'Daily'
  },
  {
    title: 'GitLab',
    website: 'https://about.gitlab.com',
    logo: '/gitlab.png',
    description:
      'Software. Faster. GitLab is the most comprehensive AI-powered DevSecOps Platform.',
    type: 'Version Control',
    knowledge: 'Daily'
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
        type: 'Accessibility',
        knowledge: 'Daily'
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
        type: 'AI',
        knowledge: 'Professional'
      },
      {
        title: 'Claude AI',
        website: 'https://claude.ai',
        logo: '',
        description: 'Talk with Claude, an AI assistant from Antrophic',
        type: 'AI',
        knowledge: 'Used'
      },
      {
        title: 'Cursor AI',
        website: '',
        logo: '',
        description: '',
        type: 'AI',
        knowledge: 'Not started'
      },
      {
        title: 'v0.dev',
        website: '',
        logo: '',
        description: '',
        type: 'AI',
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
        type: 'Analyse',
        knowledge: 'Used'
      },
      {
        title: 'Hotjar',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse',
        knowledge: 'Used'
      },
      {
        title: 'Vercel Speedinsights',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse',
        knowledge: 'Experienced'
      },
      {
        title: 'Vercel Web Analytics',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse',
        knowledge: 'Experienced'
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
        type: 'API',
        knowledge: 'Used'
      },
      {
        title: 'Postman',
        website: '',
        logo: '',
        description: "The World's Leading API Platform",
        type: 'API',
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
        type: 'Authentication',
        knowledge: 'Professional'
      },
      {
        title: 'Clerk',
        website: 'https://clerk.com',
        logo: '',
        description:
          'The easiest way to add authentication and user management to your application.',
        type: 'Authentication',
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
        type: 'Browser',
        knowledge: 'Used'
      },
      {
        title: 'Brave',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Not started'
      },
      {
        title: 'Chrome',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Daily'
      },
      {
        title: 'Firefox',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Daily'
      },
      {
        title: 'Safari',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
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
        type: 'CMS',
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
        type: 'Communication',
        knowledge: 'Daily'
      },
      {
        title: 'Teams',
        description: '',
        website: '',
        logo: '',
        type: 'Communication',
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
        type: 'Color',
        knowledge: 'Not started'
      },
      {
        title: 'uicolors',
        description: '',
        website: 'https://uicolors.app',
        logo: '',
        type: 'Color',
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
        type: 'Deployment + Hosting',
        knowledge: 'Used'
      },
      {
        title: 'Netlify',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting',
        knowledge: 'Used'
      },
      {
        title: 'platform.sh',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting',
        knowledge: 'Used'
      },
      {
        title: 'Vercel',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting',
        knowledge: 'Daily'
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
        type: 'Design + Interface',
        knowledge: 'Professional'
      },
      {
        title: 'Figma',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface',
        knowledge: 'Daily'
      },
      {
        title: 'InVision Studio',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface',
        knowledge: 'Used'
      },
      {
        title: 'Sketch',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface',
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
        type: 'Digital Art',
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
        type: 'Docs + Notes',
        knowledge: 'Daily'
      },
      {
        title: 'Inkdrop',
        description: '',
        website: '',
        logo: '',
        type: 'Docs + Notes',
        knowledge: 'Daily'
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
        type: 'DX',
        knowledge: 'Daily'
      },
      {
        title: 'prettier',
        description: '',
        website: '',
        logo: '',
        type: 'DX',
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
        type: 'Icons',
        knowledge: 'Daily'
      },
      {
        title: 'luicide-react',
        description: '',
        website: '',
        logo: '',
        type: 'Icons',
        knowledge: 'Professional'
      },
      {
        title: 'Material Icons',
        description: '',
        website: '',
        logo: '',
        type: 'Icons',
        knowledge: 'Used'
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
        type: 'IDE',
        knowledge: 'Professional'
      },
      {
        title: 'WebStorm',
        description: '',
        website: '',
        logo: '',
        type: 'IDE',
        knowledge: 'Daily'
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
        type: 'Image',
        knowledge: 'Not started'
      },
      {
        title: 'Midjourney',
        description: '',
        website: '',
        logo: '',
        type: 'Image',
        knowledge: 'Not started'
      },
      {
        title: 'Unplash',
        description: '',
        website: '',
        logo: '',
        type: 'Image',
        knowledge: 'Experienced'
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
        type: 'Inspiration',
        knowledge: 'Used'
      },
      {
        title: 'Mobbin',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration',
        knowledge: 'Used'
      },
      {
        title: 'Pinterest',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration',
        knowledge: 'Experienced'
      },
      {
        title: 'Toolfolio',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration',
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
        type: 'Learning',
        knowledge: 'Experienced'
      },
      {
        title: 'Build UI',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Professional'
      },
      {
        title: 'Builder.io',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Not started'
      },
      {
        title: 'Design+Code',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Experienced'
      },
      {
        title: 'dev.to',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Used'
      },
      {
        title: 'Fireship',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Professional'
      },
      {
        title: 'FrontendMasters',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Not started'
      },
      {
        title: 'frontendmentor.io',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Daily'
      },
      {
        title: 'Learn Next.js',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Daily'
      },
      {
        title: 'Refactoring UI',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Daily'
      },
      {
        title: 'Udemy',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
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
        type: 'Motion',
        knowledge: 'Not started'
      },
      {
        title: 'LottieFiles',
        description: '',
        website: '',
        logo: '',
        type: 'Motion',
        knowledge: 'Not started'
      },
      {
        title: 'LottieFiles for Developers',
        description: '',
        website: '',
        logo: '',
        type: 'Motion',
        knowledge: 'Not started'
      },
      {
        title: 'motion (formerly framer-motion)',
        description: '',
        website: '',
        logo: '',
        type: 'Motion',
        knowledge: 'Daily'
      },
      {
        title: 'Procreate Dreams',
        description: '',
        website: '',
        logo: '',
        type: 'Motion',
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
        type: 'News',
        knowledge: 'Daily'
      },
      {
        title: 'The Verge',
        description: '',
        website: '',
        logo: '',
        type: 'News',
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
        type: 'Package Manager',
        knowledge: 'Not started'
      },
      {
        title: 'npm',
        description: '',
        website: '',
        logo: '',
        type: 'Package Manager',
        knowledge: 'Daily'
      },
      {
        title: 'pnpM',
        description: '',
        website: '',
        logo: '',
        type: 'Package Manager',
        knowledge: 'Used'
      },
      {
        title: 'yarn',
        description: '',
        website: '',
        logo: '',
        type: 'Package Manager',
        knowledge: 'Used'
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
        type: 'Packages',
        knowledge: 'Experienced'
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
        type: 'Payment',
        knowledge: 'Not started'
      },
      {
        title: 'PayOne',
        description: '',
        website: '',
        logo: '',
        type: 'Payment',
        knowledge: 'Experienced'
      },
      {
        title: 'Stripe',
        description: '',
        website: '',
        logo: '',
        type: 'Payment',
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
        type: 'Performance',
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
        type: 'Photo + Graphics',
        knowledge: 'Professional'
      },
      {
        title: 'InDesign',
        description: '',
        website: '',
        logo: '',
        type: 'Photo + Graphics',
        knowledge: 'Professional'
      },
      {
        title: 'Photoshop',
        description: '',
        website: '',
        logo: '',
        type: 'Photo + Graphics',
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
        type: 'Project Management',
        knowledge: 'Daily'
      },
      {
        title: 'Miro',
        website: 'https://miro.com',
        logo: '/miro.png',
        description:
          "With the Power of Miro, You Can Visually Collaborate Any Time Anywhere Across Your Company. Don't Let Distances or Timezones Stop You from Building Beautiful Products for Your Users. Miro for UX & Design.",
        type: 'Project Management',
        knowledge: 'Professional'
      },
      {
        title: 'TeamGrid',
        website: '',
        logo: '',
        description: '',
        type: 'Project Management',
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
        type: 'Research + Study',
        knowledge: 'Daily'
      },
      {
        title: 'Human Interface Guidelines (Apple)',
        description: '',
        website: '',
        logo: '',
        type: 'Research + Study',
        knowledge: 'Experienced'
      },
      {
        title: 'nn/g Group',
        description: '',
        website: '',
        logo: '',
        type: 'Research + Study',
        knowledge: 'Experienced'
      },
      {
        title: 'Statista',
        description: '',
        website: '',
        logo: '',
        type: 'Research + Study',
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
        type: 'Search',
        knowledge: 'Experienced'
      },
      {
        title: 'Elastic Search',
        website: '',
        logo: '',
        description: '',
        type: 'Search',
        knowledge: 'Not started'
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
        type: 'Shop System',
        knowledge: 'Not started'
      },
      {
        title: 'Shopware',
        website: 'https://www.shopware.com',
        logo: '/shopware.png',
        description:
          'Build the exceptional. Comprehensive ecommerce solutions for all your B2C and B2B needs. Powered by the leading open commerce platform.',
        type: 'Shop System',
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
        type: 'Testing',
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
        type: 'UI',
        knowledge: 'Experienced'
      },
      {
        title: 'Material UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI',
        knowledge: 'Used'
      },
      {
        title: 'Practical UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI',
        knowledge: 'Professional'
      },
      {
        title: 'Radix UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI',
        knowledge: 'Experienced'
      },
      {
        title: 'shadcn/ui',
        description: '',
        website: '',
        logo: '',
        type: 'UI',
        knowledge: 'Daily'
      },
      {
        title: 'Tailwind UI',
        description: '',
        website: '',
        logo: '',
        type: 'UI',
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
        type: 'Version Control',
        knowledge: 'Daily'
      },
      {
        title: 'GitLab',
        description: '',
        website: '',
        logo: '',
        type: 'Version Control',
        knowledge: 'Daily'
      }
    ]
  }
];
