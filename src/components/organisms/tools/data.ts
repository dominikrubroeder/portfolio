import { Tool } from './types';

export const highlightTools: Tool[] = [
  {
    title: 'Figma',
    website: 'https://www.figma.com',
    logo: '/figma.png',
    description:
      'How you design, align, and build  matters. Do it together with Figma',
    type: 'Interfacetool',
    knowledge: 'Daily',
    certificate: '/Dominik-Rubröder-Udemy-Figma-Motion-Design-UX.pdf',
    certificateTitle:
      'Motion Design with Figma: Animations, Motion Graphics, UX/UI (Udemy)',
    certificateDescription:
      'This certificate of completion confirms that Dominik Rubröder has completed the course Motion Design with Figma: Animations, Motion Graphics, UX/UI taught by Andrei Neagoie, Daniel Schifano on 19.12.2022. The certificate of completion states that all course lessons have the status “Completed”. The course duration corresponds to the total duration of the course videos at the time the course was last completed.',
    certificateMaterial:
      'https://www.udemy.com/share/105tUo3@TN2KmFo8eT5rr0ApIOlklOjl-SjnYlkLsMMwxb4J-X8BRmEBWRLeyH3PeiAzMeTq/',
    searchKeywords: ['figma', 'design', 'ui', 'interface']
  },
  {
    title: 'WebStorm',
    website: 'https://www.jetbrains.com/de-de/webstorm/',
    logo: '/webstorm.png',
    description: 'The smartest JavaScript IDE',
    type: 'IDE',
    knowledge: 'Daily',
    searchKeywords: ['webstorm', 'code', 'ide']
  },
  {
    title: 'Craft',
    website: 'https://www.craft.do',
    logo: '/tool/craft.png',
    description: 'Craft the best docs in the world',
    type: 'Notes / Docs',
    knowledge: 'Daily',
    searchKeywords: [
      'craft',
      'notes',
      'docs',
      'documentation',
      'brainstorm',
      'ideation'
    ]
  },
  {
    title: 'GitHub',
    website: 'https://github.com/dominikrubroeder',
    logo: '/github.png',
    description: 'The world’s leading AI-powered developer platform.',
    type: 'Version Control',
    knowledge: 'Daily',
    searchKeywords: ['github', 'git', 'version control', 'versioning']
  },
  {
    title: 'GitLab',
    website: 'https://about.gitlab.com',
    logo: '/gitlab.png',
    description:
      'Software. Faster. GitLab is the most comprehensive AI-powered DevSecOps Platform.',
    type: 'Version Control',
    knowledge: 'Daily',
    searchKeywords: ['gitlab', 'git', 'version control', 'versioning']
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
        knowledge: 'Not started',
        searchKeywords: ['pa11ty', 'accessibility']
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
        knowledge: 'Professional',
        searchKeywords: ['chatgpt', 'ai', 'artificial', 'intelligence']
      },
      {
        title: 'Claude AI',
        website: 'https://claude.ai',
        logo: '',
        description: 'Talk with Claude, an AI assistant from Antrophic',
        type: 'AI',
        knowledge: 'Used',
        searchKeywords: [
          'claude',
          'claude ai',
          'ai',
          'artificial',
          'intelligence'
        ]
      },
      {
        title: 'Cursor AI',
        website: '',
        logo: '',
        description: '',
        type: 'AI',
        knowledge: 'Not started',
        searchKeywords: [
          'cursor',
          'cursor ai',
          'ai',
          'artificial',
          'intelligence'
        ]
      },
      {
        title: 'v0.dev',
        website: '',
        logo: '',
        description: '',
        type: 'AI',
        knowledge: 'Professional',
        searchKeywords: [
          'v0',
          'v0.dev',
          'v0 dev',
          'dev',
          'vercel',
          'ai',
          'artificial',
          'intelligence'
        ]
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
        knowledge: 'Used',
        searchKeywords: [
          'google analytics',
          'google',
          'analytics',
          'analyse',
          'tracking'
        ]
      },
      {
        title: 'Hotjar',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse',
        knowledge: 'Used',
        searchKeywords: ['hotjar', 'analytics', 'analyse', 'tracking']
      },
      {
        title: 'Vercel Speedinsights',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse',
        knowledge: 'Experienced',
        searchKeywords: [
          'vercel speedinsights',
          'vercel',
          'speed',
          'speedtest',
          'performance',
          'analytics',
          'analyse'
        ]
      },
      {
        title: 'Vercel Web Analytics',
        website: '',
        logo: '',
        description: '',
        type: 'Analyse',
        knowledge: 'Experienced',
        searchKeywords: [
          'vercel analytics',
          'vercel',
          'performance',
          'analytics',
          'analyse'
        ]
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
        knowledge: 'Used',
        searchKeywords: [
          'axios',
          'npm',
          'fetch',
          'http',
          'https',
          'network',
          'networking',
          'data fetching'
        ]
      },
      {
        title: 'Postman',
        website: '',
        logo: '',
        description: "The World's Leading API Platform",
        type: 'API',
        knowledge: 'Used',
        searchKeywords: [
          'postman',
          'fetch',
          'http',
          'https',
          'network',
          'networking',
          'data fetching',
          'dx'
        ]
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
        knowledge: 'Professional',
        searchKeywords: [
          'auth.js',
          'auth js',
          'next-auth',
          'next auth',
          'auth',
          'authentication',
          'account',
          'login',
          'logout'
        ]
      },
      {
        title: 'Clerk',
        website: 'https://clerk.com',
        logo: '',
        description:
          'The easiest way to add authentication and user management to your application.',
        type: 'Authentication',
        knowledge: 'Not started',
        searchKeywords: [
          'clerk',
          'auth',
          'authentication',
          'account',
          'login',
          'logout'
        ]
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
        knowledge: 'Used',
        searchKeywords: ['arc', 'browser']
      },
      {
        title: 'Brave',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Not started',
        searchKeywords: ['brave', 'browser']
      },
      {
        title: 'Chrome',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Daily',
        searchKeywords: ['chrome', 'google', 'google chrome', 'browser']
      },
      {
        title: 'Firefox',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Daily',
        searchKeywords: ['firefox', 'mozilla', 'mozilla firefox', 'browser']
      },
      {
        title: 'Safari',
        website: '',
        logo: '',
        description: '',
        type: 'Browser',
        knowledge: 'Daily',
        searchKeywords: [
          'safari',
          'macos',
          'mac os',
          'ios',
          'ipados',
          'ipad os',
          'browser'
        ]
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
        knowledge: 'Daily',
        searchKeywords: [
          'storyblok',
          'cms',
          'headless',
          'content',
          'management',
          'system',
          'content management system'
        ]
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
        knowledge: 'Daily',
        searchKeywords: ['slack', 'chat', 'write', 'communication']
      },
      {
        title: 'Teams',
        description: '',
        website: '',
        logo: '',
        type: 'Communication',
        knowledge: 'Daily',
        searchKeywords: [
          'teams',
          'microsoft',
          'microsoft teams',
          'chat',
          'write',
          'communication'
        ]
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
        knowledge: 'Not started',
        searchKeywords: ['color designer', 'hex', 'rgb', 'hsl', 'color']
      },
      {
        title: 'uicolors',
        description: '',
        website: 'https://uicolors.app',
        logo: '',
        type: 'Color',
        knowledge: 'Used',
        searchKeywords: ['uicolors', 'hex', 'rgb', 'hsl', 'color']
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
        knowledge: 'Used',
        searchKeywords: [
          'aws',
          'aws amplify',
          'amazon',
          'web services',
          'deployment',
          'hosting'
        ]
      },
      {
        title: 'Netlify',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting',
        knowledge: 'Used',
        searchKeywords: [
          'netlify',
          'static deployment',
          'deployment',
          'hosting'
        ]
      },
      {
        title: 'platform.sh',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting',
        knowledge: 'Used',
        searchKeywords: ['platform.sh', 'deployment', 'hosting']
      },
      {
        title: 'Vercel',
        description: '',
        website: '',
        logo: '',
        type: 'Deployment + Hosting',
        knowledge: 'Daily',
        searchKeywords: ['vercel', 'deployment', 'hosting']
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
        knowledge: 'Professional',
        searchKeywords: ['adobe xd', 'adobe', 'design', 'ui', 'interface']
      },
      {
        title: 'Figma',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface',
        knowledge: 'Daily',
        searchKeywords: ['figma', 'design', 'ui', 'interface']
      },
      {
        title: 'InVision Studio',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface',
        knowledge: 'Used',
        searchKeywords: ['invision studio', 'design', 'ui', 'interface']
      },
      {
        title: 'Sketch',
        description: '',
        website: '',
        logo: '',
        type: 'Design + Interface',
        knowledge: 'Experienced',
        searchKeywords: ['sketch', 'design', 'ui', 'interface']
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
        knowledge: 'Used',
        searchKeywords: [
          'procreate',
          'digital',
          'art',
          'sketch',
          'drawing',
          'digital art'
        ]
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
        knowledge: 'Daily',
        searchKeywords: [
          'craft',
          'notes',
          'docs',
          'documentation',
          'brainstorm',
          'ideation'
        ]
      },
      {
        title: 'Inkdrop',
        description: '',
        website: '',
        logo: '',
        type: 'Docs + Notes',
        knowledge: 'Daily',
        searchKeywords: [
          'inkdrop',
          'notes',
          'docs',
          'documentation',
          'brainstorm',
          'ideation'
        ]
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
        knowledge: 'Daily',
        searchKeywords: ['heroicons', 'react', 'svg', 'icons']
      },
      {
        title: 'luicide-react',
        description: '',
        website: '',
        logo: '',
        type: 'Icons',
        knowledge: 'Professional',
        searchKeywords: ['luicide', 'react', 'svg', 'icons']
      },
      {
        title: 'Material Icons',
        description: '',
        website: '',
        logo: '',
        type: 'Icons',
        knowledge: 'Used',
        searchKeywords: [
          'material icons',
          'mui',
          'material',
          'react',
          'svg',
          'icons'
        ]
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
        knowledge: 'Professional',
        searchKeywords: [
          'vs code',
          'visual studio code',
          'microsoft',
          'code',
          'ide'
        ]
      },
      {
        title: 'WebStorm',
        description: '',
        website: '',
        logo: '',
        type: 'IDE',
        knowledge: 'Daily',
        searchKeywords: ['webstorm', 'jetbrains', 'code', 'ide']
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
        knowledge: 'Not started',
        searchKeywords: [
          'dall-e',
          'ai',
          'artificial',
          'intelligence',
          'artificial intelligence',
          'image'
        ]
      },
      {
        title: 'Midjourney',
        description: '',
        website: '',
        logo: '',
        type: 'Image',
        knowledge: 'Not started',
        searchKeywords: [
          'midjourney',
          'ai',
          'artificial',
          'intelligence',
          'artificial intelligence',
          'image'
        ]
      },
      {
        title: 'Unplash',
        description: '',
        website: '',
        logo: '',
        type: 'Image',
        knowledge: 'Experienced',
        searchKeywords: [
          'unsplash',
          'foto',
          'photo',
          'stock',
          'stock photo',
          'inspiration',
          'ai',
          'artificial',
          'intelligence',
          'artificial intelligence',
          'image'
        ]
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
        type: 'Inspiration',
        knowledge: 'Used',
        searchKeywords: ['dribbble', 'portfolio', 'gallery', 'inspiration']
      },
      {
        title: 'Mobbin',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration',
        knowledge: 'Used',
        searchKeywords: ['mobbin', 'portfolio', 'gallery', 'inspiration']
      },
      {
        title: 'Pinterest',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration',
        knowledge: 'Experienced',
        searchKeywords: [
          'pinterest',
          'moodboard',
          'mood',
          'example',
          'sample',
          'stock',
          'gallery',
          'inspiration'
        ]
      },
      {
        title: 'Toolfolio',
        description: '',
        website: '',
        logo: '',
        type: 'Inspiration',
        knowledge: 'Not started',
        searchKeywords: [
          'toolfolio',
          'tool',
          'tools',
          'moodboard',
          'mood',
          'inspiration'
        ]
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
        knowledge: 'Experienced',
        searchKeywords: [
          'animations.dev',
          'animation',
          'animations',
          'emil',
          'emil kowalski',
          'motion',
          'course',
          'tutorial',
          'guide',
          'ux',
          'learning'
        ]
      },
      {
        title: 'Build UI',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Professional',
        searchKeywords: [
          'build ui',
          'ui',
          'sam',
          'sam selikoff',
          'course',
          'tutorial',
          'guide',
          'learning'
        ]
      },
      {
        title: 'Builder.io',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Not started',
        searchKeywords: [
          'builder.io',
          'builder io',
          'steve',
          'guide',
          'learning'
        ]
      },
      {
        title: 'Design+Code',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Experienced',
        searchKeywords: [
          'design + code',
          'design + code',
          'design',
          'code',
          'design code',
          'course',
          'tutorial',
          'guide',
          'learning'
        ]
      },
      {
        title: 'dev.to',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Used',
        searchKeywords: [
          'dev.to',
          'dev to',
          'dev',
          'news',
          'blog',
          'guide',
          'tutorial',
          'guide',
          'article',
          'learning'
        ]
      },
      {
        title: 'Fireship',
        description: '',
        website: '',
        logo: '',
        type: 'Learning',
        knowledge: 'Professional',
        searchKeywords: ['fireship', 'youtube']
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
        title: '@vercel/analytics',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: '@vercel/speed-insights',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: 'class-variance-authority',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Experienced'
      },
      {
        title: 'clsx',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: '@heroicons/react',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: '@shopware/api-client',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: '@storyblok/react',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: 'ESLint',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily',
        searchKeywords: [
          'eslint',
          'syntax',
          'highlight',
          'syntax highlight',
          'dx',
          'package',
          'packages'
        ]
      },
      {
        title: 'eslint-plugin-tailwindcss',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: 'html-react-parser',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Experienced'
      },
      {
        title: 'lucide-react',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Used'
      },
      {
        title: 'next-view-transitions',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Not started'
      },
      {
        title: 'react-hook-form',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Experienced'
      },
      {
        title: 'react-instantsearch-nextjs',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Experienced'
      },
      {
        title: 'react-syntax-highlighter',
        description: '',
        website: '',
        logo: '',
        type: 'Packages',
        knowledge: 'Used'
      },
      {
        title: 'use-debounce',
        description: '',
        website: 'https://www.npmjs.com/package/use-debounce',
        logo: '',
        type: 'Packages',
        knowledge: 'Daily'
      },
      {
        title: 'prettier',
        description: '',
        website: '',
        logo: '',
        type: 'DX',
        knowledge: 'Daily',
        searchKeywords: [
          'prettier',
          'syntax',
          'highlight',
          'syntax highlight',
          'dx',
          'package',
          'packages'
        ]
      },
      {
        title: 'zod',
        description:
          'TypeScript-first schema validation with static type inference',
        website: 'https://zod.dev',
        logo: '',
        type: 'Packages',
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
