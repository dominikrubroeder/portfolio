import {
  LogoAllesAuto,
  LogoFrontendMentor,
  LogoGithub,
  LogoHdPlus,
  LogoIu,
  LogoLoyGmbh,
  LogoMediawave,
  LogoSautershop,
  LogoSegmueller
} from '@/components/atoms/logo';
import type { Project } from '@/components/organisms/projects/types';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools'; // TODO: Complete tools and technologie logos

// TODO: Complete tools and technologie logos
export const projects: Project[] = [
  {
    title: 'Uvex',
    category: ['Headless', 'B2C', 'Ecommerce'],
    url: 'https://uvex-group.shop',
    isCurrent: true,
    isActive: true,
    description:
      'Protecting People – The mission of the Uvex brand with its vison and with its products',
    timeframe: 'From 2025 – Ongoing',
    logo: <LogoSautershop id="projects-sautershop" className="h-12 w-auto" />,
    role: ['Design Engineer'],
    aspects: ['Consulting in CMS component set integration in Storyblok'],
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
    caseStudyUrls: undefined,
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
    timeframe: 'From 2024 – Feb. 2026',
    logo: <LogoSautershop id="projects-sautershop" className="h-12 w-auto" />,
    role: ['Frontend Developer'],
    aspects: undefined,
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
    caseStudyUrls: undefined,
    demoUrls: undefined,
    previewImage: '/projects/project-sautershop-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'Value Booster',
    category: ['Headless', 'B2B', 'B2C', 'Ecommerce'],
    url: 'https://www.mediawave.de/value-booster',
    description:
      'Kickstart in your headless ecommerce project with the mediawave Value Booster',
    isCurrent: true,
    isActive: true,
    timeframe: 'From 2024 – Ongoing',
    logo: <LogoMediawave id="projects-mediawave" className="h-12 w-auto" />,
    role: ['Frontend Designer', 'Frontend Developer', 'Design Consultant'],
    aspects: [
      'Building the user interface with/without design files',
      'Connecting several headless systems into one centric user interface',
      'Maintain and build up the design system to ensure a consistent, flexible and reusable user interface'
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
    caseStudyUrls: undefined,
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
    timeframe: 'From 2022 – 2023',
    logo: <LogoHdPlus id="projects-hd-plus" className="h-12 w-auto" />,
    role: ['Frontend Designer', 'Frontend Developer'],
    aspects: undefined,
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
    caseStudyUrls: undefined,
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
    timeframe: 'From 2021 – 2023',
    logo: <LogoSegmueller id="projects-segmueller" className="h-12 w-auto" />,
    role: ['Frontend Developer'],
    aspects: undefined,
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
    caseStudyUrls: ['https://www.mediawave.de/case-study/segmuller'],
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
    description: 'Online selling and re-selling and car service platform',
    isCurrent: false,
    isActive: false,
    timeframe: '2021',
    logo: (
      <LogoAllesAuto id="projects-alles-auto" className="h-6 w-auto sm:h-12" />
    ),
    role: ['Frontend Developer'],
    aspects: undefined,
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
    caseStudyUrls: ['https://www.mediawave.de/case-study/allesauto'],
    demoUrls: [
      { label: 'https://www.alles.auto', src: 'https://www.alles.auto' }
    ]
  },
  {
    title: 'IU International University of Applied Sciences',
    subline: "Bachelor's degree in Media Design",
    category: [],
    url: 'https://www.iu.de/en/bachelor/mediendesign/',
    description:
      '"Design your life. With your Media Design studies". I studied Media Design at the IU International University of Applied Sciences in Munich, with specialization in user experience. While study, we had several theoretical, but also practical projects – targeting mostly digital media, but also print media, audio and video related projects.',
    timeframe: 'From 2019 – 2023',
    role: ['Dual Student'],
    isCurrent: false,
    isActive: false,
    logo: <LogoIu id="projects-iu" className="size-32" />,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    companies: [
      {
        href: 'https://www.mediawave.de',
        label: 'mediawave commerce GmbH'
      },
      {
        href: 'https://www.loy.info',
        label: 'Loy GmbH'
      }
    ],
    caseStudyUrls: undefined,
    demoUrls: []
  },
  {
    title: 'Loy GmbH',
    subline: 'Trainee as Media Designer in Design and Tech',
    category: ['B2C', 'B2B', 'Ecommerce', 'Website'],
    url: 'https://www.loy.info',
    description:
      'A small digital agency for small and mid-sized companies nearby Munich, Bavaria. Here I spend my two and a half years of training, three additional years during dual study at the IU International University of Applied Sciences (Munich) and a full-time position. My work was all about digital media, design and development of user interfaces, layouts, and in some parts about print media.',
    isCurrent: false,
    isActive: false,
    timeframe: 'From 2016 – 2019',
    logo: <LogoLoyGmbh id="projects-loy-gmbh" className="h-12 w-auto" />,
    role: [
      'Trainee',
      'Dual Student',
      'Frontend Designer',
      'Frontend Developer'
    ],
    aspects: undefined,
    tools: getTools({
      names: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Adobe XD',
        'Sublime Text',
        'TeamGrid',
        'VS Code',
        'Cyberduck',
        'InVision Studio',
        'Shopware',
        'WordPress',
        'Contenido'
      ],
      sortBy: 'A-Z'
    }),
    technologies: getTechnologies({
      names: ['HTML', 'CSS', 'JavaScript', 'Twig']
    }),
    companies: undefined,
    caseStudyUrls: undefined,
    demoUrls: [
      {
        label: 'https://www.loy.info/referenzen-internetagentur/',
        src: 'https://www.loy.info/referenzen-internetagentur/'
      },
      {
        label: 'https://www.locaboo.com',
        src: 'https://www.locaboo.com'
      },
      {
        label: 'https://www.welleat.de',
        src: 'https://www.welleat.de'
      },
      {
        label: 'https://variasophia.de',
        src: 'https://variasophia.de'
      }
    ]
  },
  {
    title: 'Frontend Mentor',
    category: [],
    url: 'https://www.frontendmentor.io',
    description: 'Many frontend coding challenges using a real-life workflow.',
    isCurrent: false,
    isActive: false,
    logo: (
      <LogoFrontendMentor
        id="projects-frontend-mentor"
        className="h-12 w-auto"
      />
    ),
    role: [],
    aspects: undefined,
    tools: [],
    technologies: [],
    companies: undefined,
    caseStudyUrls: undefined,
    demoUrls: [
      {
        label:
          'https://github.com/dominikrubroeder?tab=repositories&q=frontendmentor',
        src: 'https://github.com/dominikrubroeder?tab=repositories&q=frontendmentor'
      },
      {
        label: 'https://expenses-chart-component-website.vercel.app',
        src: 'https://expenses-chart-component-website.vercel.app'
      },
      {
        label:
          'https://intro-section-with-dropdown-navigation-website.vercel.app',
        src: 'https://intro-section-with-dropdown-navigation-website.vercel.app'
      },
      {
        label: 'https://ecommerce-product-page-website.vercel.app',
        src: 'https://ecommerce-product-page-website.vercel.app'
      },
      {
        label: 'https://interactive-pricing-component-website.vercel.app',
        src: 'https://interactive-pricing-component-website.vercel.app'
      },
      {
        label: 'https://space-tourism-website-dr.vercel.app',
        src: 'https://space-tourism-website-dr.vercel.app'
      },
      {
        label: 'https://advice-generator-dr.vercel.app',
        src: 'https://advice-generator-dr.vercel.app'
      },
      {
        label: 'https://github-user-search-app-dr.vercel.app',
        src: 'https://github-user-search-app-dr.vercel.app'
      },
      {
        label: 'https://interactive-comments-section-dr.vercel.app',
        src: 'https://interactive-comments-section-dr.vercel.app'
      },
      {
        label: 'https://password-generator-app-dr.vercel.app',
        src: 'https://password-generator-app-dr.vercel.app'
      },
      {
        label: 'https://tip-calculator-app-dr.vercel.app',
        src: 'https://tip-calculator-app-dr.vercel.app'
      },
      {
        label: 'https://photosnap-multi-page-website-dr.vercel.app',
        src: 'https://photosnap-multi-page-website-dr.vercel.app'
      },
      {
        label: 'https://entertainment-web-app-dr.vercel.app',
        src: 'https://entertainment-web-app-dr.vercel.app'
      },
      {
        label: 'https://dictionary-web-app-dr.vercel.app',
        src: 'https://dictionary-web-app-dr.vercel.app'
      },
      {
        label: 'https://skilled-elearning-landing-page-dr.vercel.app',
        src: 'https://skilled-elearning-landing-page-dr.vercel.app'
      },
      {
        label: 'https://sunnyside-agency-landing-page-dr.vercel.app',
        src: 'https://sunnyside-agency-landing-page-dr.vercel.app'
      },
      {
        label: 'https://multi-step-form-dr.vercel.app',
        src: 'https://multi-step-form-dr.vercel.app'
      }
    ]
  },
  {
    title: 'GitHub',
    category: [],
    url: 'https://github.com/dominikrubroeder?tab=repositories',
    description:
      'All the private projects i did over the last years. Not in specific order or priority. Some are removed for clean-up!',
    isCurrent: false,
    isActive: false,
    logo: <LogoGithub id="projects-github" className="h-12 w-auto" />,
    role: [],
    aspects: undefined,
    tools: [],
    technologies: [],
    companies: undefined,
    caseStudyUrls: undefined,
    demoUrls: [
      {
        label: 'https://github.com/dominikrubroeder?tab=repositories',
        src: 'https://github.com/dominikrubroeder?tab=repositories'
      }
    ]
  }
];
