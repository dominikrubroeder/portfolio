import type { Brand } from '@/components/organisms/brand';
import type { Tools } from '@/components/organisms/tools/types';
import { getTools } from '@/components/organisms/tools/helper';

export const tools: Tools = [
  {
    group: 'Accessibility',
    children: [
      {
        name: 'Pa11y',
        href: 'https://pa11y.org'
      }
    ]
  },
  {
    group: 'AI + Agents',
    children: [
      {
        name: 'ChatGPT',
        href: 'https://chatgpt.com'
      },
      {
        name: 'Codex',
        href: 'https://chatgpt.com/de-DE/codex'
      },
      {
        name: 'Claude',
        href: 'https://claude.ai'
      },
      {
        name: 'Junie',
        href: 'https://www.jetbrains.com/junie/'
      },
      {
        name: 'v0',
        href: 'https://v0.dev'
      }
    ]
  },
  {
    group: 'Analytics + Tracking',
    children: [
      {
        name: 'Google Analytics',
        href: 'https://analytics.google.com'
      },
      {
        name: 'Google Tag Manager',
        href: 'https://tagmanager.google.com'
      },
      {
        name: 'Hotjar',
        href: 'https://www.hotjar.com'
      },
      {
        name: 'Vercel Speed Insights',
        href: 'https://vercel.com/docs/speed-insights'
      },
      {
        name: 'Vercel Web Analytics',
        href: 'https://vercel.com/docs/analytics'
      },
      {
        name: 'Lighthouse',
        href: 'https://developers.google.com/web/tools/lighthouse'
      }
    ]
  },
  {
    group: 'API',
    children: [
      {
        name: 'Postman',
        href: 'https://www.postman.com/'
      },
      {
        name: 'Bruno',
        href: 'https://www.usebruno.com/'
      }
    ]
  },
  {
    group: 'Headless CMS',
    children: [
      {
        name: 'Storyblok',
        href: 'https://www.storyblok.com'
      }
    ]
  },
  {
    group: 'Cookie Consent',
    children: [
      {
        name: 'CookieHub',
        href: 'https://www.cookiehub.com'
      },
      {
        name: 'Usercentrics',
        href: 'https://usercentrics.com'
      }
    ]
  },
  {
    group: 'Communication',
    children: [
      {
        name: 'Slack',
        href: 'https://slack.com'
      },
      {
        name: 'Teams',
        href: 'https://www.microsoft.com/microsoft-teams'
      }
    ]
  },
  {
    group: 'Deployment + Hosting',
    children: [
      {
        name: 'AWS Amplify',
        href: 'https://aws.amazon.com/amplify'
      },
      {
        name: 'netlify',
        href: 'https://www.netlify.com'
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com'
      }
    ]
  },
  {
    group: 'Design + Interface',
    children: [
      {
        name: 'Figma',
        href: 'https://www.figma.com'
      },
      {
        name: 'Framer',
        href: 'https://www.framer.com'
      },
      {
        name: 'Paper',
        href: 'https://paper.design'
      },
      {
        name: 'pen',
        href: 'https://pen.dev'
      },
      {
        name: 'Sketch',
        href: 'https://www.sketch.com'
      }
    ]
  },
  {
    group: 'Digital Art',
    children: [
      {
        name: 'Procreate',
        href: 'https://procreate.art'
      }
    ]
  },
  {
    group: 'Docs + Notes',
    children: [
      {
        name: 'Craft',
        href: 'https://www.craft.do'
      },
      {
        name: 'Inkdrop',
        href: 'https://inkdrop.app'
      }
    ]
  },
  {
    group: 'Frontend Workshop',
    children: [
      {
        name: 'Storybook',
        href: 'https://storybook.js.org'
      }
    ]
  },
  {
    group: 'IDE / Editor',
    children: [
      {
        name: 'Cursor',
        href: 'https://cursor.com'
      },
      {
        name: 'Visual Studio Code',
        href: 'https://code.visualstudio.com'
      },
      {
        name: 'WebStorm',
        href: 'https://www.jetbrains.com/webstorm'
      },
      {
        name: 'Windsurf',
        href: 'https://windsurf.com'
      },
      {
        name: 'zed',
        href: 'https://zed.dev'
      }
    ]
  },
  {
    group: 'Image',
    children: [
      {
        name: 'Unsplash',
        href: 'https://unsplash.com'
      }
    ]
  },
  {
    group: 'Design Inspiration',
    children: [
      {
        name: 'Dribbble',
        href: 'https://dribbble.com'
      },
      {
        name: 'Mobbin',
        href: 'https://mobbin.com'
      },
      {
        name: 'Pinterest',
        href: 'https://www.pinterest.com'
      },
      {
        name: 'Toolfolio',
        href: 'https://www.toolfolio.io'
      }
    ]
  },
  {
    group: 'Motion',
    children: [
      {
        name: 'Jitter',
        href: 'https://jitter.video'
      },
      {
        name: 'LottieFiles',
        href: 'https://lottiefiles.com'
      }
    ]
  },
  {
    group: 'News',
    children: [
      {
        name: 'daily.dev',
        href: 'https://daily.dev'
      },
      {
        name: 'The Verge',
        href: 'https://www.theverge.com'
      },
      {
        name: 'X',
        href: 'https://x.com'
      }
    ]
  },
  {
    group: 'Package Manager',
    children: [
      {
        name: 'Bun',
        href: 'https://bun.sh'
      },
      {
        name: 'npm',
        href: 'https://www.npmjs.com'
      },
      {
        name: 'pnpm',
        href: 'https://pnpm.io'
      },
      {
        name: 'Yarn',
        href: 'https://yarnpkg.com'
      }
    ]
  },
  {
    group: 'Project Management',
    children: [
      {
        name: 'Jira',
        href: 'https://www.atlassian.com/software/jira'
      },
      {
        name: 'TeamGrid',
        href: 'https://teamgrid.app'
      }
    ]
  },
  {
    group: 'Research + Study + Data',
    children: [
      {
        name: 'Baymard Institute',
        href: 'https://baymard.com'
      },
      {
        name: 'Human Interface Guidelines (Apple)',
        href: 'https://developer.apple.com/design/human-interface-guidelines'
      },
      {
        name: 'Nielsen Norman Group',
        href: 'https://www.nngroup.com'
      },
      {
        name: 'Statista',
        href: 'https://www.statista.com'
      },
      {
        name: 'Refactoring UI',
        href: 'https://www.refactoringui.com'
      }
    ]
  },
  {
    group: 'Search Service',
    children: [
      {
        name: 'Algolia',
        href: 'https://www.algolia.com'
      },
      {
        name: 'FactFinder',
        href: 'https://www.fact-finder.de'
      },
      {
        name: 'meilisearch',
        href: 'https://www.meilisearch.com/'
      },
      {
        name: 'react-instantsearch',
        href: 'https://www.npmjs.com/package/react-instantsearch'
      },
      {
        name: 'react-instantsearch-nextjs',
        href: 'https://www.npmjs.com/package/react-instantsearch-nextjs'
      }
    ]
  },
  {
    group: 'Shop System + Ecommerce',
    children: [
      {
        name: 'Shopware',
        href: 'https://www.shopware.com'
      },
      {
        name: 'Adobe Commerce',
        href: 'https://business.adobe.com/de/products/magento/magento-commerce.html'
      }
    ]
  },
  {
    group: 'UI + Components',
    children: [
      {
        name: 'Base UI',
        href: 'https://base-ui.com'
      },
      {
        name: 'Headless UI',
        href: 'https://headlessui.com'
      },
      {
        name: 'HeroUI',
        href: 'https://heroui.com'
      },
      {
        name: 'Material UI',
        href: 'https://mui.com'
      },
      {
        name: 'Radix UI',
        href: 'https://www.radix-ui.com'
      },
      {
        name: 'React Aria',
        href: 'https://react-aria.adobe.com'
      },
      {
        name: 'shadcn/ui',
        href: 'https://ui.shadcn.com'
      },
      {
        name: 'Tailwind UI',
        href: 'https://tailwindui.com'
      },
      {
        name: 'Tanstack',
        href: 'https://tanstack.com'
      }
    ]
  },
  {
    group: 'Version Control',
    children: [
      {
        name: 'GitHub',
        href: 'https://github.com'
      },
      {
        name: 'GitLab',
        href: 'https://about.gitlab.com'
      }
    ]
  },
  {
    group: 'Whiteboard',
    children: [
      {
        name: 'Miro',
        href: 'https://miro.com'
      }
    ]
  }
];

export const mainTools: Brand[] = getTools({
  names: ['Figma', 'WebStorm', 'Junie', 'Craft', 'Claude', 'Codex'],
  sortBy: 'A-Z'
});
