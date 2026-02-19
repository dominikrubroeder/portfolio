import {
  LogoAllesAuto,
  LogoFrontendMentor,
  LogoGithub,
  LogoHdPlus,
  LogoLoyGmbh,
  LogoMediawave,
  LogoSautershop,
  LogoSegmueller
} from '@/components/atoms/logo';
import type { Project } from '@/components/organisms/projects/types';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools';

// TODO: Complete tools and technologie logos
export const projects: Project[] = [
  {
    title: 'sautershop',
    category: ['Headless', 'Ecommerce', 'B2C', 'DIY'],
    url: 'https://www.sautershop.com/en',
    isCurrentProject: true,
    readableTitle:
      'Quality woodworking tools and accessorizes for DIY projects',
    timeframe: 'Ongoing – 2024',
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
      sortBy: 'like-input'
    }),
    technologies: getTechnologies({
      names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: undefined,
    demoUrls: undefined,
    previewImage: '/projects/project-sautershop-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'Value Booster',
    category: ['Headless', 'Ecommerce', 'B2B', 'B2C'],
    url: 'https://www.mediawave.de/value-booster',
    readableTitle:
      'Kickstart in your headless ecommerce project with the mediawave Value Booster',
    isCurrentProject: false,
    timeframe: 'Ongoing – 2024',
    logo: <LogoMediawave id="projects-mediawave" className="h-12 w-auto" />,
    role: ['Frontend Developer', 'Design Consulting'],
    aspects: [
      'Building the user interface with/without design files',
      'Connecting several headless systems into one centric user interface',
      'Maintaining and building up the design system to ensure consistency, flexibility and reusability'
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
      sortBy: 'like-input'
    }),
    technologies: getTechnologies({
      names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: undefined,
    demoUrls: undefined,
    previewImage: '/projects/project-value-booster-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'HD+',
    category: ['Headless', 'Website', 'B2C', 'Satellite Pay TV service'],
    url: 'https://www.hd-plus.de',
    readableTitle:
      'Watch television in HD — via satellite or internet (IP), on your TV and smartphone',
    isCurrentProject: false,
    timeframe: '2023 – 2022',
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
      sortBy: 'like-input'
    }),
    technologies: getTechnologies({
      names: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: undefined,
    demoUrls: ['https://www.hd-plus.de'],
    previewImage: '/projects/project-hd-plus-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'Segmüller',
    category: ['Ecommerce', 'Home Furniture', 'B2B'],
    url: 'https://www.segmueller.de',
    readableTitle: 'Well-known home furniture store in Augsburg (Germany)',
    isCurrentProject: false,
    timeframe: '2023 – 2021',
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
      ]
    }),
    technologies: getTechnologies({
      names: ['Twig', 'HTML', 'CSS', 'Sass']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: ['https://www.mediawave.de/case-study/segmuller'],
    demoUrls: ['https://www.segmueller.de'],
    previewImage: '/projects/project-segmueller-preview-wallpaper.png',
    previewImageTimestamp: '2026-01-06'
  },
  {
    title: 'alles.auto',
    category: ['Platform', 'Car dealership'],
    url: 'https://www.alles.auto',
    readableTitle: 'Online selling and re-selling and car service platform',
    isCurrentProject: false,
    timeframe: '2021',
    logo: (
      <LogoAllesAuto id="projects-alles-auto" className="h-6 w-auto sm:h-12" />
    ),
    role: ['Frontend Developer'],
    aspects: undefined,
    tools: getTools({
      names: ['VS Code', 'Inkdrop', 'Jira', 'Teams', 'Slack', 'Figma', 'GitLab']
    }),
    technologies: getTechnologies({
      names: ['React', 'CSS', 'Sass']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: ['https://www.mediawave.de/case-study/allesauto'],
    demoUrls: ['https://www.alles.auto']
  },
  {
    title: 'Loy GmbH',
    category: ['Ecommerce', 'Website'],
    url: 'https://www.loy.info',
    readableTitle:
      'A small digital agency for small and mid-sized companies nearby Munich, Bavaria. I spend my two and a half years training and three additional years during dual study and full-time job here. This was all about print media, digital media and my initial design and development training.',
    isCurrentProject: false,
    timeframe: '2021 – 2016',
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
      ]
    }),
    technologies: getTechnologies({
      names: ['HTML', 'CSS', 'JavaScript', 'Twig']
    }),
    company: 'Loy GmbH',
    caseStudyUrls: undefined,
    demoUrls: [
      'https://www.loy.info/referenzen-internetagentur/',
      'https://www.locaboo.com',
      'https://www.welleat.de',
      'https://variasophia.de'
    ]
  },
  {
    title: 'Frontend Mentor',
    category: ['Training', 'Learning', 'Practise'],
    url: 'https://www.frontendmentor.io',
    readableTitle: 'Many frontend coding challenges using a real-life workflow',
    isCurrentProject: false,
    logo: (
      <LogoFrontendMentor
        id="projects-frontend-mentor"
        className="h-12 w-auto"
      />
    ),
    role: ['Frontend Developer'],
    aspects: undefined,
    tools: getTools({
      names: ['Figma', 'WebStorm', 'VS Code', 'frontendmentor.io', 'GitHub']
    }),
    technologies: getTechnologies({
      names: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Motion']
    }),
    company: 'Frontend Mentor',
    caseStudyUrls: undefined,
    demoUrls: [
      'https://github.com/dominikrubroeder?tab=repositories&q=frontendmentor',
      'https://expenses-chart-component-website.vercel.app',
      'https://intro-section-with-dropdown-navigation-website.vercel.app',
      'https://ecommerce-product-page-website.vercel.app',
      'https://interactive-pricing-component-website.vercel.app',
      'https://space-tourism-website-dr.vercel.app',
      'https://advice-generator-dr.vercel.app',
      'https://github-user-search-app-dr.vercel.app',
      'https://interactive-comments-section-dr.vercel.app',
      'https://password-generator-app-dr.vercel.app',
      'https://tip-calculator-app-dr.vercel.app',
      'https://photosnap-multi-page-website-dr.vercel.app',
      'https://entertainment-web-app-dr.vercel.app',
      'https://dictionary-web-app-dr.vercel.app',
      'https://skilled-elearning-landing-page-dr.vercel.app',
      'https://sunnyside-agency-landing-page-dr.vercel.app',
      'https://multi-step-form-dr.vercel.app'
    ]
  },
  {
    title: 'GitHub',
    category: ['Private Projects'],
    url: 'https://github.com/dominikrubroeder?tab=repositories',
    readableTitle:
      'All the private projects i did over the last years. Not in specific order or priority. Some are removed for clean-up!',
    isCurrentProject: false,
    logo: <LogoGithub id="projects-github" className="h-12 w-auto" />,
    role: ['Frontend Developer', 'iOS Development'],
    aspects: undefined,
    tools: getTools({ names: ['GitHub', 'VS Code', 'WebStorm'] }),
    technologies: getTechnologies({
      names: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Motion',
        'Vue.js',
        'Remix',
        'Svelte',
        'Swift',
        'SwiftUI'
      ]
    }),
    company: undefined,
    caseStudyUrls: undefined,
    demoUrls: ['https://github.com/dominikrubroeder?tab=repositories']
  }
];
