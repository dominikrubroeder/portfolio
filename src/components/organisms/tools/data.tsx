import {
  LogoAlgolia,
  LogoCraft,
  LogoFigma,
  LogoInkdrop,
  LogoShopware,
  LogoStoryblok,
  LogoWebstorm
} from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';
import type { Tools } from '@/components/organisms/tools/types';

export const mainTools: Brand[] = [
  {
    name: 'Figma',
    description: 'for user interface design and prototyping',
    logo: <LogoFigma id="tools-figma" className="size-12" />,
    href: 'https://www.figma.com',
    usageLevel: 'Expert'
  },
  {
    name: 'WebStorm',
    description: 'as IDE',
    logo: <LogoWebstorm id="tools-webstorm" className="size-12" />,
    href: 'https://www.jetbrains.com/webstorm',
    usageLevel: 'Expert'
  },
  {
    name: 'Craft',
    description: 'as my main note and documentation tool',
    logo: <LogoCraft id="tools-craft" className="size-12" />,
    href: 'https://www.craft.do',
    usageLevel: 'Expert'
  }
];

const tools: Tools = [
  {
    group: 'Accessibility',
    children: [
      {
        name: 'Pa11y',
        href: 'https://pa11y.org',
        logo: '',
        description: 'Pa11y is your automated accessibility testing pal.',
        usageLevel: 'Basic'
      },
      {
        name: 'Lighthouse',
        description:
          'An open-source, automated tool for improving the quality of web pages',
        href: 'https://developers.google.com/web/tools/lighthouse',
        logo: '',
        usageLevel: 'Advanced'
      }
    ]
  },
  {
    group: 'AI + Agents',
    children: [
      {
        name: 'ChatGPT',
        href: 'https://chatgpt.com',
        logo: '',
        description:
          'A conversational AI system that listens, learns, and challenges',
        usageLevel: 'Advanced'
      },
      {
        name: 'Claude',
        href: 'https://claude.ai',
        logo: '',
        description: 'Talk with Claude, an AI assistant from Antrophic',
        usageLevel: 'Working'
      },
      {
        name: 'Junie',
        href: 'https://www.jetbrains.com/junie/',
        logo: '',
        description:
          'Your smart coding agent. More than productivity – a new way to code',
        usageLevel: 'Working'
      },
      {
        name: 'v0',
        href: 'https://v0.dev',
        logo: '',
        description:
          'Generate UI with shadcn/ui from simple text prompts and images',
        usageLevel: 'Advanced'
      }
    ]
  },
  {
    group: 'Analytics + Tracking',
    children: [
      {
        name: 'Google Analytics',
        href: 'https://analytics.google.com',
        logo: '',
        description:
          'Measure your advertising ROI as well as track your Flash, video, and social networking sites and applications',
        usageLevel: 'Working'
      },
      {
        name: 'Google Tag Manager',
        href: 'https://tagmanager.google.com',
        logo: '',
        description:
          'Google Tag Manager helps make tag management simple, easy and reliable',
        usageLevel: 'Working'
      },
      {
        name: 'Hotjar',
        href: 'https://www.hotjar.com',
        logo: '',
        description:
          'See how visitors are really using your website, collect user feedback and turn more visitors into customers',
        usageLevel: 'Working'
      },
      {
        name: 'Vercel Speed Insights',
        href: 'https://vercel.com/docs/speed-insights',
        logo: '',
        description:
          'Real-time performance insights for your Vercel deployments',
        usageLevel: 'Applied'
      },
      {
        name: 'Vercel Web Analytics',
        href: 'https://vercel.com/docs/analytics',
        logo: '',
        description: 'Privacy-friendly analytics for your Vercel projects',
        usageLevel: 'Applied'
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
        usageLevel: 'Working'
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        logo: '',
        description: "The World's Leading API Platform",
        usageLevel: 'Working'
      },
      {
        name: 'Bruno',
        href: 'https://www.usebruno.com/',
        logo: '',
        description: 'Opensource IDE for exploring and testing APIs',
        usageLevel: 'Working'
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
        usageLevel: 'Expert'
      },
      {
        name: 'Clerk',
        href: 'https://clerk.com',
        logo: '',
        description:
          'The easiest way to add authentication and user management to your application.',
        usageLevel: 'Aware'
      },
      {
        name: 'Better Auth',
        href: 'https://www.better-auth.com',
        logo: '',
        description:
          'The most comprehensive authentication framework for TypeScript.',
        usageLevel: 'Aware'
      }
    ]
  },
  {
    group: 'Automation',
    children: [
      {
        name: 'n8n',
        href: 'https://n8n.io',
        logo: '',
        description: 'Flexible AI workflow automation for technical teams',
        usageLevel: 'Basic'
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
        usageLevel: 'Basic'
      },
      {
        name: 'Brave',
        href: 'https://brave.com',
        logo: '',
        description: 'Secure, fast & private web browser with adblocker',
        usageLevel: 'Basic'
      },
      {
        name: 'Chrome',
        href: 'https://www.google.com/chrome',
        logo: '',
        description:
          'A fast, secure, and free web browser built for the modern web',
        usageLevel: 'Expert'
      },
      {
        name: 'Firefox',
        href: 'https://www.mozilla.org/firefox',
        logo: '',
        description: 'Firefox is more than a browser',
        usageLevel: 'Expert'
      },
      {
        name: 'Safari',
        href: 'https://www.apple.com/safari',
        logo: '',
        description: 'A faster, smarter way to browse the web',
        usageLevel: 'Expert'
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
        usageLevel: 'Aware'
      },
      {
        name: 'Storyblok',
        href: 'https://www.storyblok.com',
        logo: <LogoStoryblok id="tools-storyblok" className="size-12" />,
        description: 'The Way to Modern Content',
        usageLevel: 'Expert'
      },
      {
        name: 'Typo3',
        href: 'https://typo3.org',
        logo: '',
        description: 'The Professional, Flexible Content Management System',
        usageLevel: 'Aware'
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
        usageLevel: 'Basic'
      },
      {
        name: 'Usercentrics',
        href: 'https://usercentrics.com',
        logo: '',
        description:
          'Consent Management Platform for GDPR, CCPA & ePrivacy compliance',
        usageLevel: 'Working'
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
        usageLevel: 'Expert'
      },
      {
        name: 'Teams',
        description: 'Meet, chat, call, and collaborate in just one place',
        href: 'https://www.microsoft.com/microsoft-teams',
        logo: '',
        usageLevel: 'Expert'
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
        usageLevel: 'Basic'
      },
      {
        name: 'uicolors',
        description: 'Tailwind CSS color generator',
        href: 'https://uicolors.app',
        logo: '',
        usageLevel: 'Working'
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
        usageLevel: 'Working'
      },
      {
        name: 'netlify',
        description:
          'The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web',
        href: 'https://www.netlify.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'upsun',
        description: 'Deliver every release with certainty',
        href: 'https://upsun.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Vercel',
        description: 'Develop. Preview. Ship. For the best frontend teams',
        href: 'https://vercel.com',
        logo: '',
        usageLevel: 'Advanced'
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
        usageLevel: 'Advanced'
      },
      {
        name: 'Canva',
        description:
          'Create stunning visuals, from social media posts to presentations',
        href: 'https://www.figma.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Figma',
        description: 'The collaborative interface design tool',
        href: 'https://www.figma.com',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'Framer',
        description: 'Design and publish stunning sites',
        href: 'https://www.framer.com',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'Paper',
        description: 'design incredible. for the love of design.',
        href: 'https://paper.design',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'Sketch',
        description: 'Design, prototype, collaborate and handoff',
        href: 'https://www.sketch.com',
        logo: '',
        usageLevel: 'Working'
      }
    ]
  },
  {
    group: 'Digital Art',
    children: [
      {
        name: 'Procreate',
        description: 'Art is for everyone',
        href: 'https://procreate.art',
        logo: '',
        usageLevel: 'Working'
      }
    ]
  },
  {
    group: 'Docs + Notes',
    children: [
      {
        name: 'Craft',
        description: 'Your space for notes, tasks, and big ideas',
        href: 'https://www.craft.do',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'Inkdrop',
        description: 'Organizing your Markdown notes made simple',
        href: 'https://inkdrop.app',
        logo: <LogoInkdrop />,
        usageLevel: 'Expert'
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
        usageLevel: 'Expert'
      },
      {
        name: 'luicide-react',
        description:
          'Beautiful & consistent icon toolkit made by the community',
        href: 'https://lucide.dev',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'Material Icons',
        description: 'Material Design icons by Google',
        href: 'https://fonts.google.com/icons',
        logo: '',
        usageLevel: 'Working'
      }
    ]
  },
  {
    group: 'IDE + Editor',
    children: [
      {
        name: 'Cursor',
        href: 'https://cursor.com',
        logo: '',
        description: 'The best way to code with AI',
        usageLevel: 'Working'
      },
      {
        name: 'Sublime Text',
        description: 'Text Editing, Done Right',
        href: 'https://www.sublimetext.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Visual Studio Code',
        description: 'The open source AI code editor',
        href: 'https://code.visualstudio.com',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'WebStorm',
        description: 'The JavaScript and TypeScript IDE',
        href: 'https://www.jetbrains.com/webstorm',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'Windsurf',
        description: 'Where developers are doing their best work',
        href: 'https://windsurf.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'zed',
        description: 'Love your editor again',
        href: 'https://zed.dev',
        logo: '',
        usageLevel: 'Working'
      }
    ]
  },
  {
    group: 'Image',
    children: [
      {
        name: 'Dall-E',
        description: 'Creating images from text',
        href: 'https://openai.com/dall-e-3',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'Midjourney',
        description:
          'An independent research lab exploring new mediums of thought',
        href: 'https://www.midjourney.com',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'Unsplash',
        description: "The internet's source for visuals",
        href: 'https://unsplash.com',
        logo: '',
        usageLevel: 'Applied'
      }
    ]
  },
  {
    group: 'Design Inspiration',
    children: [
      {
        name: 'Dribbble',
        description: 'Discover the World’s Top Designers',
        href: 'https://dribbble.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Mobbin',
        description: 'Discover real-world design inspiration',
        href: 'https://mobbin.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Pinterest',
        description:
          'Discover recipes, home ideas, style inspiration and other ideas to try',
        href: 'https://www.pinterest.com',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'Toolfolio',
        description: 'All the Tools You Need in one place',
        href: 'https://www.toolfolio.io',
        logo: '',
        usageLevel: 'Basic'
      }
    ]
  },
  {
    group: 'Motion + Animation',
    children: [
      {
        name: 'Jitter',
        description: 'Super fast motion for every team',
        href: 'https://jitter.video',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'LottieFiles',
        description: 'Great designs come alive with motion!',
        href: 'https://lottiefiles.com',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'Motion',
        description: 'A modern animation library for JavaScript and React',
        href: 'https://motion.dev/',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'Procreate Dreams',
        description: 'Edit. Animate. Create.',
        href: 'https://procreate.art/dreams',
        logo: '',
        usageLevel: 'Basic'
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
        usageLevel: 'Expert'
      },
      {
        name: 'The Verge',
        description: 'The Verge is about technology and how it makes us feel',
        href: 'https://www.theverge.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'X',
        description: '',
        href: 'https://x.com',
        logo: '',
        usageLevel: 'Applied'
      }
    ]
  },
  {
    group: 'Package Manager',
    children: [
      {
        name: 'Bun',
        description: 'Bun is a fast JavaScript all-in-one toolkit',
        href: 'https://bun.sh',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'npm',
        description: 'Build amazing things',
        href: 'https://www.npmjs.com',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'pnpm',
        description: 'Save time. Save disk space. Supercharge your monorepos.',
        href: 'https://pnpm.io',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Yarn',
        description:
          'Fast, reliable, and secure dependency management for JavaScript.',
        href: 'https://yarnpkg.com',
        logo: '',
        usageLevel: 'Working'
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
        usageLevel: 'Expert'
      },
      {
        name: '@vercel/speed-insights',
        description: 'Real-time performance insights for Vercel deployments',
        href: 'https://vercel.com/docs/speed-insights',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: '@tanstack/*',
        description:
          'High-quality, headless utilities for modern web development',
        href: 'https://tanstack.com',
        logo: '',
        usageLevel: 'Aware'
      },
      {
        name: 'class-variance-authority',
        description: 'Creating variants with the "cva" function',
        href: 'https://cva.style',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'clsx',
        description:
          'A tiny utility for constructing className strings conditionally',
        href: 'https://github.com/lukeed/clsx',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: '@heroicons/react',
        description: 'Beautiful hand-crafted SVG icons for React',
        href: 'https://heroicons.com',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: '@meilisearch/instant-meilisearch',
        description: 'The search client to use Meilisearch with InstantSearch',
        href: 'https://www.npmjs.com/package/@meilisearch/instant-meilisearch',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: '@shopware/api-client',
        description: 'Shopware API client for JavaScript/TypeScript',
        href: 'https://www.npmjs.com/package/@shopware/api-client',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: '@shopware/api-gen',
        description: 'Generate TypeScript types from Shopware API',
        href: 'https://www.npmjs.com/package/@shopware/api-gen',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: '@storyblok/react',
        description: 'React SDK for Storyblok',
        href: 'https://www.npmjs.com/package/@storyblok/react',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: '@eslint/config',
        description: 'Find and fix problems in your JavaScript code',
        href: 'https://eslint.org',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'next-intl',
        description: 'Internationalization for Next.js',
        href: 'https://next-intl.dev',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'eslint-plugin-tailwindcss',
        description: 'ESLint plugin for Tailwind CSS usage',
        href: 'https://www.npmjs.com/package/eslint-plugin-tailwindcss',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'html-react-parser',
        description: 'HTML to React parser',
        href: 'https://www.npmjs.com/package/html-react-parser',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'lucide-react',
        description:
          'Beautiful & consistent icon toolkit made by the community',
        href: 'https://lucide.dev',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'next-view-transitions',
        description: 'Use CSS View Transitions API in Next.js App Router',
        href: 'https://www.npmjs.com/package/next-view-transitions',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'react-hook-form',
        description:
          'Performant, flexible and extensible forms with easy validation',
        href: 'https://react-hook-form.com',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'react-instantsearch',
        description:
          'Lightning-fast search for React and React Native applications',
        href: 'https://www.npmjs.com/package/react-instantsearch',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'react-instantsearch-nextjs',
        description: 'React InstantSearch for Next.js',
        href: 'https://www.npmjs.com/package/react-instantsearch-nextjs',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'react-snowfall',
        description: 'An awesome react component that creates snowfall',
        href: 'https://www.npmjs.com/package/react-snowfall',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'react-syntax-highlighter',
        description: 'Syntax highlighting component for React',
        href: 'https://www.npmjs.com/package/react-syntax-highlighter',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'storybook',
        description: 'Frontend workshop for UI development',
        href: 'https://storybook.js.org',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'use-debounce',
        description: 'Debounce hook for React',
        href: 'https://www.npmjs.com/package/use-debounce',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'prettier',
        description: 'Opinionated code formatter',
        href: 'https://prettier.io',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'prism-react-renderer',
        description: 'Lightweight and flexible syntax highlighter for React',
        href: 'https://github.com/FormidableLabs/prism-react-renderer',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'zod',
        description:
          'TypeScript-first schema validation with static type inference',
        href: 'https://zod.dev',
        logo: '',
        usageLevel: 'Applied'
      }
    ],
    description:
      "In case you can't find a popular package, please get in touch to clarify my experience with it."
  },
  {
    group: 'Payment',
    children: [
      {
        name: 'Klarna',
        description: 'Smooth payments',
        href: 'https://www.klarna.com',
        logo: '',
        usageLevel: 'Aware'
      },
      {
        name: 'PAYONE',
        description: 'Payment service provider',
        href: 'https://www.payone.com',
        logo: '',
        usageLevel: 'Basic'
      },
      {
        name: 'PayPal',
        description: 'The safer, easier way to pay online',
        href: 'https://www.paypal.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Stripe',
        description: 'Online payment processing for internet businesses',
        href: 'https://stripe.com',
        logo: '',
        usageLevel: 'Aware'
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
        usageLevel: 'Advanced'
      }
    ]
  },
  {
    group: 'Photo + Graphics + Layout',
    children: [
      {
        name: 'Adobe Illustrator',
        description:
          'Create logos, icons, drawings, typography, and illustrations',
        href: 'https://www.adobe.com/products/illustrator.html',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'Adobe InDesign',
        description: 'Design and publish great projects',
        href: 'https://www.adobe.com/products/indesign.html',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'Adobe Photoshop',
        description: 'Imaging and graphic design software',
        href: 'https://www.adobe.com/products/photoshop.html',
        logo: '',
        usageLevel: 'Applied'
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
        usageLevel: 'Advanced'
      },
      {
        name: 'Miro',
        href: 'https://miro.com',
        logo: '/miro.png',
        description: 'Get from brainstorm to breakthrough with Miro',
        usageLevel: 'Advanced'
      },
      {
        name: 'TeamGrid',
        href: 'https://teamgrid.app',
        logo: '',
        description: 'Work. Better. Together.',
        usageLevel: 'Advanced'
      },
      {
        name: 'Trello',
        href: 'https://www.trello.com/',
        logo: '',
        description: 'Capture, organize, and tackle your to-dos from anywhere.',
        usageLevel: 'Aware'
      }
    ]
  },
  {
    group: 'Research + Study + Data',
    children: [
      {
        name: 'Baymard Institute',
        description: 'The trusted authority in ecommerce UX',
        href: 'https://baymard.com',
        logo: '',
        usageLevel: 'Advanced'
      },
      {
        name: 'Human Interface Guidelines (Apple)',
        description: 'Design principles and guidelines for Apple platforms',
        href: 'https://developer.apple.com/design/human-interface-guidelines',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'Nielsen Norman Group',
        description:
          'Research-based, results-driven. UX guidance and training.',
        href: 'https://www.nngroup.com',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'Statista',
        description: 'Empowering people with data',
        href: 'https://www.statista.com',
        logo: '',
        usageLevel: 'Applied'
      }
    ]
  },
  {
    group: 'Search',
    children: [
      {
        name: 'Algolia',
        href: 'https://www.algolia.com',
        logo: <LogoAlgolia id="tools-algolia" className="size-12" />,
        description: 'AI-Search, that understands',
        usageLevel: 'Applied'
      },
      {
        name: 'Elasticsearch',
        href: 'https://www.elastic.co/elasticsearch',
        logo: '',
        description: 'Distributed, RESTful search and analytics engine',
        usageLevel: 'Aware'
      },
      {
        name: 'FactFinder',
        href: 'https://www.fact-finder.de',
        logo: '',
        description: 'Help every visitor find the right product, fast.',
        usageLevel: 'Aware'
      },
      {
        name: 'meilisearch',
        href: 'https://www.meilisearch.com/',
        logo: '',
        description:
          'Lightning Fast, Ultra Relevant, and Typo-Tolerant Search Engine',
        usageLevel: 'Applied'
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
        description: 'The All-in-One Commerce Platform for Businesses',
        usageLevel: 'Aware'
      },
      {
        name: 'Shopware',
        href: 'https://www.shopware.com',
        logo: <LogoShopware id="tools-shopware" />,
        description: 'Open commerce. Full control. Agentic by design.',
        usageLevel: 'Expert'
      },
      {
        name: 'Adobe Commerce',
        href: 'https://business.adobe.com/de/products/magento/magento-commerce.html',
        logo: '',
        description: 'Flexible, scalable eCommerce solutions',
        usageLevel: 'Aware'
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
        description: 'Catch bugs before they cost you',
        usageLevel: 'Working'
      },
      {
        name: 'Jest',
        href: 'https://jestjs.io',
        logo: '',
        description: 'Delightful JavaScript Testing',
        usageLevel: 'Working'
      },
      {
        name: 'Playwright',
        href: 'https://playwright.dev',
        logo: '',
        description: 'Reliable end-to-end testing for modern web apps',
        usageLevel: 'Aware'
      },
      {
        name: 'cypress',
        href: 'https://www.cypress.io',
        logo: '',
        description: 'Browser testing for modern teams',
        usageLevel: 'Aware'
      }
    ]
  },
  {
    group: 'UI',
    children: [
      {
        name: 'Base UI',
        description:
          'Unstyled UI components for building accessible user interfaces',
        href: 'https://base-ui.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Headless UI',
        description: 'Completely unstyled, fully accessible UI components',
        href: 'https://headlessui.com',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'HeroUI',
        description:
          'Beautiful, accessible React UI components built on React Aria and Tailwind CSS',
        href: 'https://heroui.com',
        logo: '',
        usageLevel: 'Aware'
      },
      {
        name: 'Material UI',
        description: 'Ready to use Material Design components',
        href: 'https://mui.com',
        logo: '',
        usageLevel: 'Working'
      },
      {
        name: 'Radix UI',
        description: 'Low-level UI primitives with a focus on accessibility',
        href: 'https://www.radix-ui.com',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'shadcn/ui',
        description:
          'Beautifully designed components built with Radix UI and Tailwind CSS',
        href: 'https://ui.shadcn.com',
        logo: '',
        usageLevel: 'Expert'
      },
      {
        name: 'Tailwind UI',
        description:
          'Beautiful UI components, crafted by the creators of Tailwind CSS',
        href: 'https://tailwindui.com',
        logo: '',
        usageLevel: 'Applied'
      },
      {
        name: 'Refactoring UI',
        description:
          'Make your ideas look awesome, without relying on a designer',
        href: 'https://www.refactoringui.com',
        logo: '',
        usageLevel: 'Expert'
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
        usageLevel: 'Expert'
      },
      {
        name: 'GitLab',
        description: 'The most comprehensive AI-powered DevSecOps Platform',
        href: 'https://about.gitlab.com',
        logo: '',
        usageLevel: 'Expert'
      }
    ]
  }
];
export default tools;
