import {
  AllesAutoLogo,
  FrontendMentorLogo,
  GithubLogo,
  HdPlusLogo,
  LoyGmbHLogo,
  MediawaveLogo,
  SautershopLogo,
  SegmuellerLogo
} from '@/components/atoms/logo';
import type { Project } from '@/components/organisms/projects/types';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools';

// TODO: Complete tools and technologie logos
export const projects: Project[] = [
  {
    title: 'Value Booster',
    category: ['Headless', 'Ecommerce', 'B2B', 'B2C'],
    url: 'https://www.mediawave.de/value-booster',
    readableTitle: 'Kickstart in your headless ecommerce project',
    status: 'Currently developing',
    timeframe: 'Today – 2024',
    logo: <MediawaveLogo className="h-12 w-auto" />,
    role: ['Frontend Development', 'Design Consulting'],
    aspects: [
      'Building the user interface with/without design files',
      'Connecting several headless systems into one centric user interface',
      'Maintaining and building up the design system to ensure consistency, flexibility and reusability'
    ],
    tools: getTools({
      toolNames: [
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
      technologyNames: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: undefined,
    demoUrls: undefined
  },
  {
    title: 'sautershop',
    category: ['Headless', 'Ecommerce', 'B2C', 'DIY'],
    url: 'https://www.sautershop.de',
    status: 'Currently developing',
    readableTitle: 'Quality home wood-working tools for DIY projects',
    timeframe: 'Today – 2024',
    logo: <SautershopLogo className="h-12 w-auto" />,
    role: ['Frontend Development'],
    aspects: undefined,
    tools: getTools({
      toolNames: [
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
      technologyNames: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: undefined,
    demoUrls: undefined
  },
  {
    title: 'HD+',
    category: ['Headless', 'Website', 'B2C', 'Satellite Pay TV service'],
    url: 'https://www.hd-plus.de',
    readableTitle:
      'Watch television in HD — via satellite or internet (IP), on your TV and smartphone',
    status: 'Published',
    timeframe: '2021 – 2023',
    logo: <HdPlusLogo className="h-12 w-auto" />,
    role: ['Frontend Design', 'Frontend Development'],
    aspects: undefined,
    tools: getTools({
      toolNames: [
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
      technologyNames: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: undefined,
    demoUrls: ['https://www.hd-plus.de']
  },
  {
    title: 'Segmüller',
    category: ['Ecommerce', 'Home Furniture', 'B2B'],
    url: 'https://www.segmueller.de',
    readableTitle: 'Home furniture store from Germany',
    status: 'Published',
    timeframe: '2021 – 2023',
    logo: <SegmuellerLogo className="h-12 w-auto" />,
    role: ['Frontend Development'],
    aspects: undefined,
    tools: getTools({
      toolNames: [
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
      technologyNames: ['Twig', 'HTML', 'CSS', 'Sass']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: ['https://www.mediawave.de/case-study/segmuller'],
    demoUrls: ['https://www.segmueller.de']
  },
  {
    title: 'alles.auto',
    category: ['Platform', 'Car dealership'],
    url: 'https://www.alles.auto',
    readableTitle: 'Online selling, re-selling and car service platform',
    status: 'Published',
    timeframe: '2021',
    logo: <AllesAutoLogo className="h-6 w-auto sm:h-12" />,
    role: ['Frontend Development'],
    aspects: undefined,
    tools: getTools({
      toolNames: [
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
      technologyNames: ['React', 'CSS', 'Sass']
    }),
    company: 'mediawave commerce GmbH',
    caseStudyUrls: ['https://www.mediawave.de/case-study/allesauto'],
    demoUrls: ['https://www.alles.auto']
  },
  {
    title: 'Frontend Mentor',
    category: ['Training', 'Learning'],
    url: 'https://www.frontendmentor.io',
    readableTitle: 'Front-end coding challenges using a real-life workflow',
    status: 'Published',
    timeframe: '2021',
    logo: <FrontendMentorLogo className="h-12 w-auto" />,
    role: ['Frontend Development'],
    aspects: undefined,
    tools: getTools({
      toolNames: ['Figma', 'WebStorm', 'VS Code', 'frontendmentor.io', 'GitHub']
    }),
    technologies: getTechnologies({
      technologyNames: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'Motion'
      ]
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
    title: 'Loy GmbH',
    category: ['Ecommerce', 'Website'],
    url: 'https://www.loy.info',
    readableTitle:
      'A small digital agency for small and mid-sized companies nearby Munich, Bavaria. Here i spend my training and 3 additional years during dual study and full-time job; working on frontend development and design.',
    status: 'Published',
    timeframe: '2016 – 2021',
    logo: <LoyGmbHLogo className="h-12 w-auto" />,
    role: [
      'Trainee',
      'Dual Student',
      'Frontend Design',
      'Frontend Development',
      'Templating'
    ],
    aspects: undefined,
    tools: getTools({
      toolNames: [
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
      technologyNames: ['HTML', 'CSS', 'JavaScript', 'Twig']
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
    title: 'GitHub',
    category: ['Private Projects'],
    url: 'https://github.com/dominikrubroeder?tab=repositories',
    readableTitle:
      'All the projects i did over the last years. Not in specific order or priority.',
    status: 'Published',
    timeframe: 'Today – 2020',
    logo: <GithubLogo className="h-12 w-auto" />,
    role: ['Frontend Development', 'iOS Development'],
    aspects: undefined,
    tools: getTools({ toolNames: ['GitHub', 'VS Code', 'WebStorm'] }),
    technologies: getTechnologies({
      technologyNames: [
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
