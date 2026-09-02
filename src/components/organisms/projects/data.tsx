import {
  LogoAllesAuto,
  LogoHdPlus,
  LogoMediawave,
  LogoSautershop,
  LogoSegmueller
} from '@/components/atoms/logo';
import type { Project } from '@/components/organisms/projects/types';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools';

export const projects: Project[] = [
  {
    title: 'Uvex',
    category: ['Headless', 'B2C', 'Ecommerce'],
    url: 'https://uvex-group.shop',
    isCurrent: false,
    isActive: false,
    description:
      'Protecting People – The mission of the Uvex brand with its vision and products',
    timeframe: '2025 – May 2026',
    logo: <LogoSautershop id="projects-sautershop" className="h-12 w-auto" />,
    role: ['Design Engineer'],
    responsibilities: ['Set up a new CMS component system in Storyblok'],
    tools: getTools({
      names: [
        'Figma',
        'WebStorm',
        'Adobe Commerce',
        'Storyblok',
        'Storybook',
        'FactFinder',
        'Jira',
        'Slack',
        'Teams',
        'GitLab',
        'GitLab'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['React', 'TypeScript']
    }),
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      }
    ],
    demoUrls: undefined,
    previewImage: '/projects/project-uvex-preview-wallpaper.png',
    previewImageTimestamp: '2026-02-27'
  },
  {
    title: 'sautershop',
    category: ['Headless', 'B2C', 'Ecommerce'],
    url: 'https://www.sautershop.com/en',
    isCurrent: false,
    isActive: false,
    description: 'Quality woodworking tools and accessorizes for DIY projects',
    timeframe: '2024 – Feb. 2026',
    logo: <LogoSautershop id="projects-sautershop" className="h-12 w-auto" />,
    role: ['Frontend Developer'],
    responsibilities: [
      'Consult in designing for a 3D configurator',
      'Build the headless frontend in Next.js with Shopware, Storyblok, Meilisearch and the React Instant Search'
    ],
    tools: getTools({
      names: [
        'Figma',
        'WebStorm',
        'Shopware',
        'Storyblok',
        'Algolia',
        'Auth.js',
        'Jira',
        'Slack',
        'Teams',
        'GitLab',
        'Motion',
        'GitLab'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      }
    ],

    demoUrls: undefined,
    previewImage: '/projects/project-sautershop-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'Value Booster',
    category: ['Headless', 'B2B', 'B2C', 'Ecommerce'],
    url: 'https://www.mediawave.de/accelerators',
    description:
      'Kickstart in your headless ecommerce project with the mediawave Value Booster',
    isCurrent: true,
    isActive: true,
    timeframe: '2024',
    logo: <LogoMediawave id="projects-mediawave" className="h-12 w-auto" />,
    role: ['Frontend Designer', 'Frontend Developer', 'Design Consultant'],
    responsibilities: [
      'Create and maintain a CMS component system in Storyblok',
      'Create and maintain a design system in Figma',
      'Create, provide and document design concepts and UI prototypes for project pitches',
      'Build the headless frontend in Next.js with the focus on blueprinting the frontend framework as starting point for new projects',
      'Create templates: Home Page, Category Page, Product Page, Cart Page, Checkout Page, Account Pages',
      'Compose the frontend architecture with its libraries'
    ],
    tools: getTools({
      names: [
        'Figma',
        'WebStorm',
        'Junie',
        'Shopware',
        'Storyblok',
        'meilisearch',
        'Auth.js',
        'Jira',
        'Slack',
        'Teams',
        'GitLab',
        'Motion',
        'GitLab'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      }
    ],

    demoUrls: undefined,
    previewImage: '/projects/project-value-booster-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'HD+',
    category: ['Headless', 'B2C', 'Ecommerce'],
    url: 'https://www.hd-plus.de',
    description:
      'Watch television in HD — via satellite or internet (IP), on your TV and smartphone',
    isCurrent: false,
    isActive: false,
    timeframe: '2023 – 2024',
    logo: <LogoHdPlus id="projects-hd-plus" className="h-12 w-auto" />,
    role: ['Frontend Designer', 'Frontend Developer'],
    responsibilities: [
      'Design the user interface in Figma',
      'Build the headless frontend in Next.js with Shopware, Storyblok, Meilisearch and the React Instant Search'
    ],
    tools: getTools({
      names: [
        'Figma',
        'WebStorm',
        'Shopware',
        'Storyblok',
        'Algolia',
        'Auth.js',
        'Jira',
        'Slack',
        'Teams',
        'GitLab',
        'Motion',
        'GitLab'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      }
    ],

    demoUrls: [
      { label: 'https://www.hd-plus.de', src: 'https://www.hd-plus.de' }
    ],
    previewImage: '/projects/project-hd-plus-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'Segmüller',
    category: ['Ecommerce', 'B2C'],
    url: 'https://www.segmueller.de',
    description: 'Well-known home furniture store in Augsburg (Germany)',
    isCurrent: false,
    isActive: false,
    timeframe: '2021 – 2023',
    logo: <LogoSegmueller id="projects-segmueller" className="h-12 w-auto" />,
    role: ['Frontend Developer'],
    responsibilities: ['Build frontend features in Twig and SCSS'],
    tools: getTools({
      names: [
        'Storyblok',
        'VS Code',
        'Inkdrop',
        'Jira',
        'Teams',
        'Slack',
        'Figma',
        'GitLab'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['Twig', 'HTML', 'CSS', 'JavaScript', 'Sass']
    }),
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      }
    ],
    demoUrls: [
      {
        label: 'https://www.segmueller.de',
        src: 'https://www.segmueller.de'
      }
    ],
    previewImage: '/projects/project-segmueller-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'alles.auto Service Portal',
    category: ['B2B'],
    url: 'https://www.alles.auto',
    description: 'Online selling, re-selling and car service platform',
    isCurrent: false,
    isActive: false,
    timeframe: '2021',
    logo: (
      <LogoAllesAuto id="projects-alles-auto" className="h-6 w-auto sm:h-12" />
    ),
    role: ['Frontend Developer'],
    responsibilities: ['Build frontend features in React'],
    tools: getTools({
      names: [
        'VS Code',
        'Inkdrop',
        'Jira',
        'Teams',
        'Slack',
        'Figma',
        'GitLab'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['React', 'CSS', 'Sass']
    }),
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      }
    ],
    demoUrls: [
      { label: 'https://www.alles.auto', src: 'https://www.alles.auto' }
    ]
  },
  {
    title: 'Locaboo',
    category: ['App', 'B2C'],
    url: 'https://www.locaboo.com',
    description: 'Location booking made digital',
    isCurrent: false,
    isActive: false,
    timeframe: '2016 – 2021',
    logo: undefined,
    role: ['Frontend Developer'],
    responsibilities: [
      'Create print media and resources for the Locaboo brand',
      'Work with the CMS Contenido'
    ],
    tools: [],
    technologies: [],
    companies: [
      {
        href: 'https://www.loy.info',
        label: 'Loy GmbH'
      }
    ],
    demoUrls: [],
    previewImage: '/projects/project-locaboo-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'Welleat',
    category: ['Ecommerce', 'B2C'],
    url: 'https://www.welleat.de',
    description: 'Healthy food supplements',
    isCurrent: false,
    isActive: false,
    timeframe: '2018 – 2019',
    logo: undefined,
    role: ['Frontend Developer'],
    responsibilities: [
      'Design the user interface in Adobe XD and Photoshop',
      'Build the frontend in Twig and SCSS with Shopware 5'
    ],
    tools: [],
    technologies: [],
    companies: [
      {
        href: 'https://www.loy.info',
        label: 'Loy GmbH'
      }
    ],
    demoUrls: [],
    previewImage: '/projects/project-welleat-preview-wallpaper.png',
    previewImageTimestamp: '2026-04-11'
  },
  {
    title: 'Variasophia',
    category: ['Ecommerce', 'B2C'],
    url: 'https://variasophia.de',
    description: 'Traditional Bavarian folk costumes',
    isCurrent: false,
    isActive: false,
    timeframe: '2017',
    logo: undefined,
    role: ['Frontend Developer'],
    responsibilities: [
      'Build the user interface in Twig and SCSS with Shopware 5'
    ],
    tools: [],
    technologies: [],
    companies: [
      {
        href: 'https://www.loy.info',
        label: 'Loy GmbH'
      }
    ],
    demoUrls: [],
    previewImage: '/projects/project-variasophia-preview-wallpaper.png',
    previewImageTimestamp: '2026-04-11'
  }
];
