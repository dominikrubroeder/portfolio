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
        website: 'https://chatgpt.com',
        logo: '',
        description:
          'A conversational AI system that listens, learns, and challenges.',
        type: 'AI'
      },
      {
        title: 'Cursor AI',
        website: 'https://chatgpt.com',
        logo: '',
        description:
          'A conversational AI system that listens, learns, and challenges.',
        type: 'AI'
      },
      {
        title: 'v0.dev',
        website: 'https://chatgpt.com',
        logo: '',
        description:
          'A conversational AI system that listens, learns, and challenges.',
        type: 'AI'
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
    group: 'Project Management',
    children: [
      {
        title: 'Miro',
        website: 'https://miro.com',
        logo: '/miro.png',
        description:
          "With the Power of Miro, You Can Visually Collaborate Any Time Anywhere Across Your Company. Don't Let Distances or Timezones Stop You from Building Beautiful Products for Your Users. Miro for UX & Design.",
        type: 'Project Management'
      }
    ]
  },
  {
    group: 'Shop System',
    children: [
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
    group: 'Search',
    children: [
      {
        title: 'Algolia',
        website: 'https://www.algolia.com',
        logo: '/algolia.png',
        description: 'AI-Search, that understands',
        type: 'Search'
      }
    ]
  }
];
