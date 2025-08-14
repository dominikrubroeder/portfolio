import {
  CraftLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  WebstormLogo
} from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';
import type { Tools } from '@/components/organisms/tools/types';

export const mainTools: Brand[] = [
  {
    name: 'Figma',
    description: 'for user interface design and prototyping',
    logo: <FigmaLogo className="size-12" />,
    href: 'https://www.figma.com',
    knowledge: 'Daily'
  },
  {
    name: 'WebStorm',
    description: 'as IDE',
    logo: <WebstormLogo className="size-12" />,
    href: 'https://www.jetbrains.com/webstorm',
    knowledge: 'Daily'
  },
  {
    name: 'Craft',
    description: 'as my main note and documentation tool',
    logo: <CraftLogo className="size-12" />,
    href: 'https://www.craft.do',
    knowledge: 'Daily'
  },
  {
    name: 'GitHub',
    description: 'to store my private codebase',
    logo: <GithubLogo className="size-12" />,
    href: 'https://github.com/dominikrubroeder',
    knowledge: 'Daily'
  },
  {
    name: 'GitLab',
    description: 'is mostly used at workspace',
    logo: <GitlabLogo className="size-12" />,
    href: 'https://gitlab.com',
    knowledge: 'Daily'
  }
];

export const tools: Tools = [
  {
    group: 'Accessibility',
    children: [
      {
        name: 'Pa11y',
        href: 'https://pa11y.org',
        logo: '',
        description: 'Pa11y is your automated accessibility testing pal.',
        knowledge: 'Not started'
      },
      {
        name: 'Lighthouse',
        description:
          'An open-source, automated tool for improving the quality of web pages',
        href: 'https://developers.google.com/web/tools/lighthouse',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'AI',
    children: [
      {
        name: 'ChatGPT',
        href: 'https://chatgpt.com',
        logo: '',
        description:
          'A conversational AI system that listens, learns, and challenges.',
        knowledge: 'Professional'
      },
      {
        name: 'Claude AI',
        href: 'https://claude.ai',
        logo: '',
        description: 'Talk with Claude, an AI assistant from Antrophic',
        knowledge: 'Used'
      },
      {
        name: 'v0',
        href: 'https://v0.dev',
        logo: '',
        description:
          'Generate UI with shadcn/ui from simple text prompts and images',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Analytics',
    children: [
      {
        name: 'Google Analytics',
        href: 'https://analytics.google.com',
        logo: '',
        description:
          'Measure your advertising ROI as well as track your Flash, video, and social networking sites and applications',
        knowledge: 'Experienced'
      },
      {
        name: 'Google Tag Manager',
        href: 'https://tagmanager.google.com',
        logo: '',
        description:
          'Google Tag Manager helps make tag management simple, easy and reliable',
        knowledge: 'Used'
      },
      {
        name: 'Hotjar',
        href: 'https://www.hotjar.com',
        logo: '',
        description:
          'See how visitors are really using your website, collect user feedback and turn more visitors into customers',
        knowledge: 'Used'
      },
      {
        name: 'Vercel Speedinsights',
        href: 'https://vercel.com/docs/speed-insights',
        logo: '',
        description:
          'Real-time performance insights for your Vercel deployments',
        knowledge: 'Experienced'
      },
      {
        name: 'Vercel Web Analytics',
        href: 'https://vercel.com/docs/analytics',
        logo: '',
        description: 'Privacy-friendly analytics for your Vercel projects',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'API',
    children: [
      {
        name: 'Axios',
        href: 'https://axios-http.com/',
        logo: '',
        description: 'Promise based HTTP client for the browser and node.js',
        knowledge: 'Used'
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        logo: '',
        description: "The World's Leading API Platform",
        knowledge: 'Used'
      },
      {
        name: 'Bruno',
        href: 'https://www.usebruno.com/',
        logo: '',
        description: 'Opensource IDE for exploring and testing APIs',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Authentication',
    children: [
      {
        name: 'Auth.js',
        href: 'https://authjs.dev',
        logo: '',
        description: 'Authentication for the Web. Free and open source.',
        knowledge: 'Daily'
      },
      {
        name: 'Clerk',
        href: 'https://clerk.com',
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
        name: 'Arc',
        href: 'https://arc.net',
        logo: '',
        description: 'A better way to browse',
        knowledge: 'Used'
      },
      {
        name: 'Brave',
        href: 'https://brave.com',
        logo: '',
        description: 'Secure, fast & private web browser with adblocker',
        knowledge: 'Not started'
      },
      {
        name: 'Chrome',
        href: 'https://www.google.com/chrome',
        logo: '',
        description:
          'A fast, secure, and free web browser built for the modern web',
        knowledge: 'Daily'
      },
      {
        name: 'Firefox',
        href: 'https://www.mozilla.org/firefox',
        logo: '',
        description: 'Firefox is more than a browser',
        knowledge: 'Experienced'
      },
      {
        name: 'Safari',
        href: 'https://www.apple.com/safari',
        logo: '',
        description: 'A faster, smarter way to browse the web',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'CMS',
    children: [
      {
        name: 'Contentserv',
        href: 'https://www.contentserv.com',
        logo: '',
        description:
          'Product Information Management and Marketing Experience Management',
        knowledge: 'Not started'
      },
      {
        name: 'Storyblok',
        href: 'https://www.storyblok.com',
        logo: '/storyblok.png',
        description: 'The Way to Modern Content',
        knowledge: 'Daily'
      },
      {
        name: 'Typo3',
        href: 'https://typo3.org',
        logo: '',
        description: 'The Professional, Flexible Content Management System',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Cookie Consent',
    children: [
      {
        name: 'CookieHub',
        href: 'https://www.cookiehub.com',
        logo: '',
        description: 'Cookie consent management platform',
        knowledge: 'Not started'
      },
      {
        name: 'Usercentrics',
        href: 'https://usercentrics.com',
        logo: '',
        description:
          'Consent Management Platform for GDPR, CCPA & ePrivacy compliance',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Communication',
    children: [
      {
        name: 'Slack',
        description: 'Where work happens',
        href: 'https://slack.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Teams',
        description: 'Meet, chat, call, and collaborate in just one place',
        href: 'https://www.microsoft.com/microsoft-teams',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Color',
    children: [
      {
        name: 'Color Designer',
        description: 'Simple color palette generator',
        href: 'https://colordesigner.io',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'uicolors',
        description: 'Tailwind CSS color generator',
        href: 'https://uicolors.app',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Deployment + Hosting',
    children: [
      {
        name: 'AWS Amplify',
        description: 'Build full-stack web and mobile apps in hours',
        href: 'https://aws.amazon.com/amplify',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Netlify',
        description:
          'The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web',
        href: 'https://www.netlify.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'platform.sh',
        description:
          'The end-to-end cloud platform for building, running and scaling web applications',
        href: 'https://platform.sh',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Vercel',
        description: 'Develop. Preview. Ship. For the best frontend teams',
        href: 'https://vercel.com',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Design + Interface',
    children: [
      {
        name: 'Adobe XD (deprecated)',
        description: 'Design, prototype, and share user experiences',
        href: 'https://www.adobe.com/products/xd.html',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'Canva',
        description:
          'Create stunning visuals, from social media posts to presentations',
        href: 'https://www.figma.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Figma',
        description: 'The collaborative interface design tool',
        href: 'https://www.figma.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Framer',
        description: 'Design and publish stunning sites',
        href: 'https://www.framer.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'InVision Studio',
        description: "The world's most powerful screen design tool",
        href: 'https://www.invisionapp.com/studio',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Sketch',
        description: 'Design, prototype, collaborate and handoff',
        href: 'https://www.sketch.com',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Digital Art',
    children: [
      {
        name: 'Procreate',
        description: 'Made for artists, by artists',
        href: 'https://procreate.art',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Docs + Notes',
    children: [
      {
        name: 'Craft',
        description: 'A fresh take on documents',
        href: 'https://www.craft.do',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Inkdrop',
        description: 'Organizing your Markdown notes made simple',
        href: 'https://inkdrop.app',
        logo: '/tools/inkdrop.png',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Icons',
    children: [
      {
        name: 'heroicons',
        description:
          'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS',
        href: 'https://heroicons.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'luicide-react',
        description:
          'Beautiful & consistent icon toolkit made by the community',
        href: 'https://lucide.dev',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'Material Icons',
        description: 'Material Design icons by Google',
        href: 'https://fonts.google.com/icons',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'IDE + Editor',
    children: [
      {
        name: 'Cursor AI',
        href: 'https://cursor.sh',
        logo: '',
        description: 'The AI-first code editor',
        knowledge: 'Not started'
      },
      {
        name: 'Sublime Text',
        description: 'A sophisticated text editor for code, markup and prose',
        href: 'https://www.sublimetext.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'VS Code',
        description: 'Code editing. Redefined.',
        href: 'https://code.visualstudio.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'WebStorm',
        description: 'The smartest JavaScript IDE',
        href: 'https://www.jetbrains.com/webstorm',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'zed',
        description: 'A high-performance, multiplayer code editor',
        href: 'https://zed.dev',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Image',
    children: [
      {
        name: 'Dall-E',
        description: 'Creating images from text',
        href: 'https://openai.com/dall-e-2',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Midjourney',
        description:
          'An independent research lab exploring new mediums of thought',
        href: 'https://www.midjourney.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Unplash',
        description: "The internet's source for visuals",
        href: 'https://unsplash.com',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Inspiration',
    children: [
      {
        name: 'Dribbble',
        description: "Discover the world's top designers & creatives",
        href: 'https://dribbble.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Mobbin',
        description: 'Latest mobile design patterns',
        href: 'https://mobbin.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Pinterest',
        description:
          'Discover recipes, home ideas, style inspiration and other ideas to try',
        href: 'https://www.pinterest.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'Toolfolio',
        description:
          'Discover new tools and resources for designers and developers',
        href: 'https://www.toolfolio.io',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Learning',
    children: [
      {
        name: 'animations.dev',
        description: 'CSS and JavaScript animations',
        href: 'https://animations.dev',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'Build UI',
        description: 'Advanced React component patterns and techniques',
        href: 'https://buildui.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'Builder.io',
        description: 'Drag and drop page builder and CMS',
        href: 'https://www.builder.io',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Design+Code',
        description: 'Learn to design and code React and Swift apps',
        href: 'https://designcode.io',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'dev.to',
        description:
          'A constructive and inclusive social network for software developers',
        href: 'https://dev.to',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Fireship',
        description: 'High-intensity code tutorials and tech news',
        href: 'https://fireship.io',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'FrontendMasters',
        description:
          'Advance your skills with in-depth, modern front-end engineering courses',
        href: 'https://frontendmasters.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'frontendmentor.io',
        description:
          'Improve your front-end coding skills by building real projects',
        href: 'https://www.frontendmentor.io',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Learn Next.js',
        description: 'The React Framework for Production',
        href: 'https://nextjs.org/learn',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Refactoring UI',
        description:
          "Learn how to design awesome UIs by yourself using specific tactics explained from a developer's point-of-view",
        href: 'https://www.refactoringui.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Udemy',
        description: 'Online learning and teaching marketplace',
        href: 'https://www.udemy.com',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Motion + Animation',
    children: [
      {
        name: 'jitter.video',
        description: 'Simple motion design tool',
        href: 'https://jitter.video',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'LottieFiles',
        description:
          'Lightweight, scalable animations for your website and apps',
        href: 'https://lottiefiles.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'LottieFiles for Developers',
        description: 'Ship Lottie animations to any platform',
        href: 'https://lottiefiles.com/developers',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Motion',
        description: 'A modern animation library for JavaScript and React',
        href: 'https://motion.dev/',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Procreate Dreams',
        description: 'Animation made easy',
        href: 'https://procreate.art/dreams',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'News',
    children: [
      {
        name: 'daily.dev',
        description: 'Where developers grow together',
        href: 'https://daily.dev',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'The Verge',
        description: 'Technology, science, art, and culture',
        href: 'https://www.theverge.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'X',
        description: "What's happening?!",
        href: 'https://x.com',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Package Manager',
    children: [
      {
        name: 'bun',
        description:
          'Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one',
        href: 'https://bun.sh',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'npm',
        description: 'Build amazing things',
        href: 'https://www.npmjs.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'pnpM',
        description: 'Fast, disk space efficient package manager',
        href: 'https://pnpm.io',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'yarn',
        description: 'Safe, stable, reproducible projects',
        href: 'https://yarnpkg.com',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Packages',
    children: [
      {
        name: '@vercel/analytics',
        description: 'Privacy-friendly analytics for Vercel deployments',
        href: 'https://vercel.com/docs/analytics',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: '@vercel/speed-insights',
        description: 'Real-time performance insights for Vercel deployments',
        href: 'https://vercel.com/docs/speed-insights',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'class-variance-authority',
        description: 'Creating variants with the "cva" function',
        href: 'https://cva.style',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'clsx',
        description:
          'A tiny utility for constructing className strings conditionally',
        href: 'https://github.com/lukeed/clsx',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: '@heroicons/react',
        description: 'Beautiful hand-crafted SVG icons for React',
        href: 'https://heroicons.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: '@meilisearch/instant-meilisearch',
        description: 'The search client to use Meilisearch with InstantSearch',
        href: 'https://www.npmjs.com/package/@meilisearch/instant-meilisearch',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: '@shopware/api-client',
        description: 'Shopware API client for JavaScript/TypeScript',
        href: 'https://www.npmjs.com/package/@shopware/api-client',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: '@shopware/api-gen',
        description: 'Generate TypeScript types from Shopware API',
        href: 'https://www.npmjs.com/package/@shopware/api-gen',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: '@storyblok/react',
        description: 'React SDK for Storyblok',
        href: 'https://www.npmjs.com/package/@storyblok/react',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: '@eslint/config',
        description: 'Find and fix problems in your JavaScript code',
        href: 'https://eslint.org',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'eslint-plugin-tailwindcss',
        description: 'ESLint plugin for Tailwind CSS usage',
        href: 'https://www.npmjs.com/package/eslint-plugin-tailwindcss',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'html-react-parser',
        description: 'HTML to React parser',
        href: 'https://www.npmjs.com/package/html-react-parser',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'lucide-react',
        description:
          'Beautiful & consistent icon toolkit made by the community',
        href: 'https://lucide.dev',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'next-view-transitions',
        description: 'Use CSS View Transitions API in Next.js App Router',
        href: 'https://www.npmjs.com/package/next-view-transitions',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'react-hook-form',
        description:
          'Performant, flexible and extensible forms with easy validation',
        href: 'https://react-hook-form.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'react-instantsearch',
        description:
          'Lightning-fast search for React and React Native applications',
        href: 'https://www.npmjs.com/package/react-instantsearch',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'react-instantsearch-nextjs',
        description: 'React InstantSearch for Next.js',
        href: 'https://www.npmjs.com/package/react-instantsearch-nextjs',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'react-syntax-highlighter',
        description: 'Syntax highlighting component for React',
        href: 'https://www.npmjs.com/package/react-syntax-highlighter',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'use-debounce',
        description: 'Debounce hook for React',
        href: 'https://www.npmjs.com/package/use-debounce',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'prettier',
        description: 'Opinionated code formatter',
        href: 'https://prettier.io',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'prism-react-renderer',
        description: 'Lightweight and flexible syntax highlighter for React',
        href: 'https://github.com/FormidableLabs/prism-react-renderer',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'zod',
        description:
          'TypeScript-first schema validation with static type inference',
        href: 'https://zod.dev',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Payment',
    children: [
      {
        name: 'Klarna',
        description: 'Smooth payments',
        href: 'https://www.klarna.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'PayOne',
        description: 'Payment service provider',
        href: 'https://www.payone.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'PayPal',
        description: 'The safer, easier way to pay online',
        href: 'https://www.paypal.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        name: 'Stripe',
        description: 'Online payment processing for internet businesses',
        href: 'https://stripe.com',
        logo: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Performance',
    children: [
      {
        name: 'Lighthouse',
        description:
          'Automated auditing, performance metrics, and best practices for the web',
        href: 'https://developers.google.com/web/tools/lighthouse',
        logo: '',
        knowledge: 'Professional'
      }
    ]
  },
  {
    group: 'Photo + Graphics',
    children: [
      {
        name: 'Illustrator',
        description:
          'Create logos, icons, drawings, typography, and illustrations',
        href: 'https://www.adobe.com/products/illustrator.html',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'InDesign',
        description: 'Design and publish great projects',
        href: 'https://www.adobe.com/products/indesign.html',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'Photoshop',
        description: 'Imaging and graphic design software',
        href: 'https://www.adobe.com/products/photoshop.html',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Project Management',
    children: [
      {
        name: 'Jira',
        href: 'https://www.atlassian.com/software/jira',
        logo: '',
        description: 'Issue & project tracking software',
        knowledge: 'Daily'
      },
      {
        name: 'Miro',
        href: 'https://miro.com',
        logo: '/miro.png',
        description:
          "With the Power of Miro, You Can Visually Collaborate Any Time Anywhere Across Your Company. Don't Let Distances or Timezones Stop You from Building Beautiful Products for Your Users. Miro for UX & Design.",
        knowledge: 'Professional'
      },
      {
        name: 'TeamGrid',
        href: 'https://www.teamgrid.com',
        logo: '',
        description: 'Project management and team collaboration',
        knowledge: 'Professional'
      },
      {
        name: 'Trello',
        href: 'https://www.trello.com/',
        logo: '',
        description: '',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Research + Study',
    children: [
      {
        name: 'Baymard Institute',
        description: 'UX research for e-commerce',
        href: 'https://baymard.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'Human Interface Guidelines (Apple)',
        description: 'Design principles and guidelines for Apple platforms',
        href: 'https://developer.apple.com/design/human-interface-guidelines',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'nn/g Group',
        description: 'Nielsen Norman Group - UX research and consulting',
        href: 'https://www.nngroup.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'Statista',
        description: 'Market and consumer data',
        href: 'https://www.statista.com',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Search',
    children: [
      {
        name: 'Algolia',
        href: 'https://www.algolia.com',
        logo: '/algolia.png',
        description: 'AI-Search, that understands',
        knowledge: 'Experienced'
      },
      {
        name: 'Elastic Search',
        href: 'https://www.elastic.co/elasticsearch',
        logo: '',
        description: 'Distributed, RESTful search and analytics engine',
        knowledge: 'Not started'
      },
      {
        name: 'meilisearch',
        href: 'https://www.meilisearch.com/',
        logo: '',
        description:
          'Lightning Fast, Ultra Relevant, and Typo-Tolerant Search Engine',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Shop System + Ecommerce',
    children: [
      {
        name: 'Shopify',
        href: 'https://www.shopify.com',
        logo: '',
        description: 'Commerce platform for everyone',
        knowledge: 'Not started'
      },
      {
        name: 'Shopware',
        href: 'https://www.shopware.com',
        logo: '/shopware.png',
        description:
          'Build the exceptional. Comprehensive ecommerce solutions for all your B2C and B2B needs. Powered by the leading open commerce platform.',
        knowledge: 'Daily'
      },
      {
        name: 'Adobe Commerce (Magento)',
        href: 'https://business.adobe.com/de/products/magento/magento-commerce.html',
        logo: '',
        description: 'Flexible, scalable eCommerce solutions',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'Testing',
    children: [
      {
        name: 'Ghost Inspector',
        href: 'https://ghostinspector.com',
        logo: '',
        description: 'Automated browser testing',
        knowledge: 'Used'
      },
      {
        name: 'Jest',
        href: 'https://jestjs.io',
        logo: '',
        description: 'Delightful JavaScript Testing',
        knowledge: 'Used'
      },
      {
        name: 'Playwright',
        href: 'https://playwright.dev',
        logo: '',
        description: 'Reliable end-to-end testing for modern web apps',
        knowledge: 'Not started'
      },
      {
        name: 'cypress',
        href: 'https://www.cypress.io',
        logo: '',
        description:
          'Easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds',
        knowledge: 'Not started'
      }
    ]
  },
  {
    group: 'UI',
    children: [
      {
        name: 'Headless UI',
        description: 'Completely unstyled, fully accessible UI components',
        href: 'https://headlessui.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'Material UI',
        description: 'React components for faster and easier web development',
        href: 'https://mui.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        name: 'Practical UI',
        description: 'Practical UI components and patterns',
        href: 'https://practicalui.dev',
        logo: '',
        knowledge: 'Professional'
      },
      {
        name: 'Radix UI',
        description: 'Low-level UI primitives with a focus on accessibility',
        href: 'https://www.radix-ui.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'shadcn/ui',
        description:
          'Beautifully designed components built with Radix UI and Tailwind CSS',
        href: 'https://ui.shadcn.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'Tailwind UI',
        description:
          'Beautiful UI components, crafted by the creators of Tailwind CSS',
        href: 'https://tailwindui.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        name: 'Refactoring UI',
        description:
          "Learn how to design awesome UIs by yourself using specific tactics explained from a developer's point-of-view",
        href: 'https://www.refactoringui.com',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  },
  {
    group: 'Version Control',
    children: [
      {
        name: 'GitHub',
        description: "The world's leading AI-powered developer platform",
        href: 'https://github.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        name: 'GitLab',
        description: 'The most comprehensive AI-powered DevSecOps Platform',
        href: 'https://about.gitlab.com',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  }
];
