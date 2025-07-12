import {
  CraftLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  WebstormLogo
} from '@/components/atoms/logo';
import type { Tools } from '@/components/organisms/tools/types';

export const mainTools = [
  {
    name: 'Figma',
    description: 'for user interface design and prototyping',
    logo: <FigmaLogo className="size-12" />,
    href: 'https://www.figma.com'
  },
  {
    name: 'WebStorm',
    description: 'as IDE',
    logo: <WebstormLogo className="size-12" />,
    href: 'https://www.jetbrains.com/webstorm'
  },
  {
    name: 'Craft',
    description: 'as my main note and documentation tool',
    logo: <CraftLogo className="size-12" />,
    href: 'https://www.craft.do'
  },
  {
    name: 'GitHub',
    description: 'to store my private codebase',
    logo: <GithubLogo className="size-12" />,
    href: 'https://github.com/dominikrubroeder'
  },
  {
    name: 'GitLab',
    description: 'is mostly used at workspace',
    logo: <GitlabLogo className="size-12" />,
    href: 'https://gitlab.com'
  }
];

export const tools: Tools = [
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
        description:
          'An open-source, automated tool for improving the quality of web pages',
        website: 'https://developers.google.com/web/tools/lighthouse',
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
        title: 'v0.dev',
        website: 'https://v0.dev',
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
        title: 'Google Analytics',
        website: 'https://analytics.google.com',
        logo: '',
        description:
          'Measure your advertising ROI as well as track your Flash, video, and social networking sites and applications',
        knowledge: 'Used'
      },
      {
        title: 'Google Tag Manager',
        website: 'https://tagmanager.google.com',
        logo: '',
        description:
          'Google Tag Manager helps make tag management simple, easy and reliable',
        knowledge: 'Used'
      },
      {
        title: 'Hotjar',
        website: 'https://www.hotjar.com',
        logo: '',
        description:
          'See how visitors are really using your website, collect user feedback and turn more visitors into customers',
        knowledge: 'Used'
      },
      {
        title: 'Vercel Speedinsights',
        website: 'https://vercel.com/docs/speed-insights',
        logo: '',
        description:
          'Real-time performance insights for your Vercel deployments',
        knowledge: 'Experienced'
      },
      {
        title: 'Vercel Web Analytics',
        website: 'https://vercel.com/docs/analytics',
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
        description: 'Opensource IDE for exploring and testing APIs',
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
        website: 'https://arc.net',
        logo: '',
        description: 'A better way to browse',
        knowledge: 'Used'
      },
      {
        title: 'Brave',
        website: 'https://brave.com',
        logo: '',
        description: 'Secure, fast & private web browser with adblocker',
        knowledge: 'Not started'
      },
      {
        title: 'Chrome',
        website: 'https://www.google.com/chrome',
        logo: '',
        description:
          'A fast, secure, and free web browser built for the modern web',
        knowledge: 'Daily'
      },
      {
        title: 'Firefox',
        website: 'https://www.mozilla.org/firefox',
        logo: '',
        description: 'Firefox is more than a browser',
        knowledge: 'Experienced'
      },
      {
        title: 'Safari',
        website: 'https://www.apple.com/safari',
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
        title: 'Contentserv',
        website: 'https://www.contentserv.com',
        logo: '',
        description:
          'Product Information Management and Marketing Experience Management',
        knowledge: 'Not started'
      },
      {
        title: 'Storyblok',
        website: 'https://www.storyblok.com',
        logo: '/storyblok.png',
        description: 'The Way to Modern Content',
        knowledge: 'Daily'
      },
      {
        title: 'Typo3',
        website: 'https://typo3.org',
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
        title: 'CookieHub',
        website: 'https://www.cookiehub.com',
        logo: '',
        description: 'Cookie consent management platform',
        knowledge: 'Not started'
      },
      {
        title: 'Usercentrics',
        website: 'https://usercentrics.com',
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
        title: 'Slack',
        description: 'Where work happens',
        website: 'https://slack.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Teams',
        description: 'Meet, chat, call, and collaborate in just one place',
        website: 'https://www.microsoft.com/microsoft-teams',
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
        description: 'Simple color palette generator',
        website: 'https://colordesigner.io',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'uicolors',
        description: 'Tailwind CSS color generator',
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
        description: 'Build full-stack web and mobile apps in hours',
        website: 'https://aws.amazon.com/amplify',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Netlify',
        description:
          'The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web',
        website: 'https://www.netlify.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'platform.sh',
        description:
          'The end-to-end cloud platform for building, running and scaling web applications',
        website: 'https://platform.sh',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Vercel',
        description: 'Develop. Preview. Ship. For the best frontend teams',
        website: 'https://vercel.com',
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
        description: 'Design, prototype, and share user experiences',
        website: 'https://www.adobe.com/products/xd.html',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Canva',
        description:
          'Create stunning visuals, from social media posts to presentations',
        website: 'https://www.figma.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Figma',
        description: 'The collaborative interface design tool',
        website: 'https://www.figma.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Framer',
        description: 'Design and publish stunning sites',
        website: 'https://www.framer.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'InVision Studio',
        description: "The world's most powerful screen design tool",
        website: 'https://www.invisionapp.com/studio',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Sketch',
        description: 'Design, prototype, collaborate and handoff',
        website: 'https://www.sketch.com',
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
        description: 'Made for artists, by artists',
        website: 'https://procreate.art',
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
        description: 'A fresh take on documents',
        website: 'https://www.craft.do',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Inkdrop',
        description: 'Organizing your Markdown notes made simple',
        website: 'https://inkdrop.app',
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
        description:
          'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS',
        website: 'https://heroicons.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'luicide-react',
        description:
          'Beautiful & consistent icon toolkit made by the community',
        website: 'https://lucide.dev',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Material Icons',
        description: 'Material Design icons by Google',
        website: 'https://fonts.google.com/icons',
        logo: '',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'IDE + Editor',
    children: [
      {
        title: 'Cursor AI',
        website: 'https://cursor.sh',
        logo: '',
        description: 'The AI-first code editor',
        knowledge: 'Not started'
      },
      {
        title: 'Sublime Text',
        description: 'A sophisticated text editor for code, markup and prose',
        website: 'https://www.sublimetext.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'VS Code',
        description: 'Code editing. Redefined.',
        website: 'https://code.visualstudio.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'WebStorm',
        description: 'The smartest JavaScript IDE',
        website: 'https://www.jetbrains.com/webstorm',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'zed',
        description: 'A high-performance, multiplayer code editor',
        website: 'https://zed.dev',
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
        description: 'Creating images from text',
        website: 'https://openai.com/dall-e-2',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Midjourney',
        description:
          'An independent research lab exploring new mediums of thought',
        website: 'https://www.midjourney.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Unplash',
        description: "The internet's source for visuals",
        website: 'https://unsplash.com',
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
        description: "Discover the world's top designers & creatives",
        website: 'https://dribbble.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Mobbin',
        description: 'Latest mobile design patterns',
        website: 'https://mobbin.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Pinterest',
        description:
          'Discover recipes, home ideas, style inspiration and other ideas to try',
        website: 'https://www.pinterest.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Toolfolio',
        description:
          'Discover new tools and resources for designers and developers',
        website: 'https://www.toolfolio.io',
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
        description: 'CSS and JavaScript animations',
        website: 'https://animations.dev',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Build UI',
        description: 'Advanced React component patterns and techniques',
        website: 'https://buildui.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Builder.io',
        description: 'Drag and drop page builder and CMS',
        website: 'https://www.builder.io',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Design+Code',
        description: 'Learn to design and code React and Swift apps',
        website: 'https://designcode.io',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'dev.to',
        description:
          'A constructive and inclusive social network for software developers',
        website: 'https://dev.to',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Fireship',
        description: 'High-intensity code tutorials and tech news',
        website: 'https://fireship.io',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'FrontendMasters',
        description:
          'Advance your skills with in-depth, modern front-end engineering courses',
        website: 'https://frontendmasters.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'frontendmentor.io',
        description:
          'Improve your front-end coding skills by building real projects',
        website: 'https://www.frontendmentor.io',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Learn Next.js',
        description: 'The React Framework for Production',
        website: 'https://nextjs.org/learn',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Refactoring UI',
        description:
          "Learn how to design awesome UIs by yourself using specific tactics explained from a developer's point-of-view",
        website: 'https://www.refactoringui.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Udemy',
        description: 'Online learning and teaching marketplace',
        website: 'https://www.udemy.com',
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
        description: 'Simple motion design tool',
        website: 'https://jitter.video',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'LottieFiles',
        description:
          'Lightweight, scalable animations for your website and apps',
        website: 'https://lottiefiles.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'LottieFiles for Developers',
        description: 'Ship Lottie animations to any platform',
        website: 'https://lottiefiles.com/developers',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Motion',
        description: 'A modern animation library for JavaScript and React',
        website: 'https://motion.dev/',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Procreate Dreams',
        description: 'Animation made easy',
        website: 'https://procreate.art/dreams',
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
        description: 'Where developers grow together',
        website: 'https://daily.dev',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'The Verge',
        description: 'Technology, science, art, and culture',
        website: 'https://www.theverge.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'X',
        description: "What's happening?!",
        website: 'https://x.com',
        logo: '',
        knowledge: 'Experienced'
      }
    ]
  },
  {
    group: 'Package Manager',
    children: [
      {
        title: 'bun',
        description:
          'Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one',
        website: 'https://bun.sh',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'npm',
        description: 'Build amazing things',
        website: 'https://www.npmjs.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'pnpM',
        description: 'Fast, disk space efficient package manager',
        website: 'https://pnpm.io',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'yarn',
        description: 'Safe, stable, reproducible projects',
        website: 'https://yarnpkg.com',
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
        description: 'Privacy-friendly analytics for Vercel deployments',
        website: 'https://vercel.com/docs/analytics',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@vercel/speed-insights',
        description: 'Real-time performance insights for Vercel deployments',
        website: 'https://vercel.com/docs/speed-insights',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'class-variance-authority',
        description: 'Creating variants with the "cva" function',
        website: 'https://cva.style',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'clsx',
        description:
          'A tiny utility for constructing className strings conditionally',
        website: 'https://github.com/lukeed/clsx',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@heroicons/react',
        description: 'Beautiful hand-crafted SVG icons for React',
        website: 'https://heroicons.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@meilisearch/instant-meilisearch',
        description: 'The search client to use Meilisearch with InstantSearch',
        website:
          'https://www.npmjs.com/package/@meilisearch/instant-meilisearch',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@shopware/api-client',
        description: 'Shopware API client for JavaScript/TypeScript',
        website: 'https://www.npmjs.com/package/@shopware/api-client',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@shopware/api-gen',
        description: 'Generate TypeScript types from Shopware API',
        website: 'https://www.npmjs.com/package/@shopware/api-gen',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: '@storyblok/react',
        description: 'React SDK for Storyblok',
        website: 'https://www.npmjs.com/package/@storyblok/react',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: '@eslint/config',
        description: 'Find and fix problems in your JavaScript code',
        website: 'https://eslint.org',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'eslint-plugin-tailwindcss',
        description: 'ESLint plugin for Tailwind CSS usage',
        website: 'https://www.npmjs.com/package/eslint-plugin-tailwindcss',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'html-react-parser',
        description: 'HTML to React parser',
        website: 'https://www.npmjs.com/package/html-react-parser',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'lucide-react',
        description:
          'Beautiful & consistent icon toolkit made by the community',
        website: 'https://lucide.dev',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'next-view-transitions',
        description: 'Use CSS View Transitions API in Next.js App Router',
        website: 'https://www.npmjs.com/package/next-view-transitions',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'react-hook-form',
        description:
          'Performant, flexible and extensible forms with easy validation',
        website: 'https://react-hook-form.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'react-instantsearch',
        description:
          'Lightning-fast search for React and React Native applications',
        website: 'https://www.npmjs.com/package/react-instantsearch',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'react-instantsearch-nextjs',
        description: 'React InstantSearch for Next.js',
        website: 'https://www.npmjs.com/package/react-instantsearch-nextjs',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'react-syntax-highlighter',
        description: 'Syntax highlighting component for React',
        website: 'https://www.npmjs.com/package/react-syntax-highlighter',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'use-debounce',
        description: 'Debounce hook for React',
        website: 'https://www.npmjs.com/package/use-debounce',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'prettier',
        description: 'Opinionated code formatter',
        website: 'https://prettier.io',
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
        description: 'Smooth payments',
        website: 'https://www.klarna.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'PayOne',
        description: 'Payment service provider',
        website: 'https://www.payone.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'PayPal',
        description: 'The safer, easier way to pay online',
        website: 'https://www.paypal.com',
        logo: '',
        knowledge: 'Not started'
      },
      {
        title: 'Stripe',
        description: 'Online payment processing for internet businesses',
        website: 'https://stripe.com',
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
        description:
          'Automated auditing, performance metrics, and best practices for the web',
        website: 'https://developers.google.com/web/tools/lighthouse',
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
        description:
          'Create logos, icons, drawings, typography, and illustrations',
        website: 'https://www.adobe.com/products/illustrator.html',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'InDesign',
        description: 'Design and publish great projects',
        website: 'https://www.adobe.com/products/indesign.html',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Photoshop',
        description: 'Imaging and graphic design software',
        website: 'https://www.adobe.com/products/photoshop.html',
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
        website: 'https://www.atlassian.com/software/jira',
        logo: '',
        description: 'Issue & project tracking software',
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
        website: 'https://www.teamgrid.com',
        logo: '',
        description: 'Project management and team collaboration',
        knowledge: 'Professional'
      },
      {
        title: 'Trello',
        website: 'https://www.trello.com/',
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
        title: 'Baymard Institute',
        description: 'UX research for e-commerce',
        website: 'https://baymard.com',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Human Interface Guidelines (Apple)',
        description: 'Design principles and guidelines for Apple platforms',
        website:
          'https://developer.apple.com/design/human-interface-guidelines',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'nn/g Group',
        description: 'Nielsen Norman Group - UX research and consulting',
        website: 'https://www.nngroup.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Statista',
        description: 'Market and consumer data',
        website: 'https://www.statista.com',
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
        description: 'Distributed, RESTful search and analytics engine',
        knowledge: 'Not started'
      },
      {
        title: 'meilisearch',
        website: 'https://www.meilisearch.com/',
        logo: '',
        description:
          'Lightning Fast, Ultra Relevant, and Typo-Tolerant Search Engine',
        knowledge: 'Used'
      }
    ]
  },
  {
    group: 'Shop System + Ecommerce',
    children: [
      {
        title: 'Shopify',
        website: 'https://www.shopify.com',
        logo: '',
        description: 'Commerce platform for everyone',
        knowledge: 'Not started'
      },
      {
        title: 'Shopware',
        website: 'https://www.shopware.com',
        logo: '/shopware.png',
        description:
          'Build the exceptional. Comprehensive ecommerce solutions for all your B2C and B2B needs. Powered by the leading open commerce platform.',
        knowledge: 'Daily'
      },
      {
        title: 'Adobe Commerce (Magento)',
        website:
          'https://business.adobe.com/de/products/magento/magento-commerce.html',
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
        title: 'Ghost Inspector',
        website: 'https://ghostinspector.com',
        logo: '',
        description: 'Automated browser testing',
        knowledge: 'Used'
      },
      {
        title: 'Jest',
        website: 'https://jestjs.io',
        logo: '',
        description: 'Delightful JavaScript Testing',
        knowledge: 'Used'
      },
      {
        title: 'Playwright',
        website: 'https://playwright.dev',
        logo: '',
        description: 'Reliable end-to-end testing for modern web apps',
        knowledge: 'Not started'
      },
      {
        title: 'cypress',
        website: 'https://www.cypress.io',
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
        title: 'Headless UI',
        description: 'Completely unstyled, fully accessible UI components',
        website: 'https://headlessui.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Material UI',
        description: 'React components for faster and easier web development',
        website: 'https://mui.com',
        logo: '',
        knowledge: 'Used'
      },
      {
        title: 'Practical UI',
        description: 'Practical UI components and patterns',
        website: 'https://practicalui.dev',
        logo: '',
        knowledge: 'Professional'
      },
      {
        title: 'Radix UI',
        description: 'Low-level UI primitives with a focus on accessibility',
        website: 'https://www.radix-ui.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'shadcn/ui',
        description:
          'Beautifully designed components built with Radix UI and Tailwind CSS',
        website: 'https://ui.shadcn.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'Tailwind UI',
        description:
          'Beautiful UI components, crafted by the creators of Tailwind CSS',
        website: 'https://tailwindui.com',
        logo: '',
        knowledge: 'Experienced'
      },
      {
        title: 'Refactoring UI',
        description:
          "Learn how to design awesome UIs by yourself using specific tactics explained from a developer's point-of-view",
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
        description: "The world's leading AI-powered developer platform",
        website: 'https://github.com',
        logo: '',
        knowledge: 'Daily'
      },
      {
        title: 'GitLab',
        description: 'The most comprehensive AI-powered DevSecOps Platform',
        website: 'https://about.gitlab.com',
        logo: '',
        knowledge: 'Daily'
      }
    ]
  }
];
