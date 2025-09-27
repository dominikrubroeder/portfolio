import {
  FrontendMentorLogo,
  GithubLogo,
  HdPlusLogo,
  MediawaveLogo,
  SautershopLogo,
  SegmuellerLogo
} from '@/components/atoms/logo';
import type { Project } from '@/components/organisms/projects/types';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools';

export const projects: Project[] = [
  {
    title: 'Value Booster',
    category: ['Headless', 'Ecommerce'],
    url: 'https://www.mediawave.de/value-booster',
    readableTitle: 'Kick start in your headless ecommerce project',
    status: 'Currently developing',
    timeframe: 'Today – 2024',
    logo: <MediawaveLogo className="h-12 w-auto" />,
    role: ['Frontend Development', 'Design Consulting'],
    aspects: [
      'Building the user interface with/without design files',
      'Connecting several headless systems into one centric user interface',
      'Maintaining and building up the design system to ensure consistency, flexibility and reusability'
    ],
    tools: [
      ...getTools({
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
          'Motion'
        ],
        sortBy: 'like-input'
      })
    ],
    technologies: [
      ...getTechnologies({
        technologyNames: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
      })
    ],
    company: 'mediawave commerce GmbH'
  },
  {
    title: 'sautershop',
    category: ['DIY workers'],
    url: 'https://www.sautershop.de',
    status: undefined,
    readableTitle: 'Home wood-working tools',
    timeframe: 'Today – 2024',
    logo: <SautershopLogo className="h-12 w-auto" />,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: 'mediawave commerce GmbH'
  },
  {
    title: 'HD+',
    category: ['TV'],
    url: 'https://www.hd-plus.de',
    readableTitle: 'Everything you need for good television',
    status: undefined,
    timeframe: '2023 - 2021',
    logo: <HdPlusLogo className="h-12 w-auto" />,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: 'mediawave commerce GmbH'
  },
  {
    title: 'Segmüller',
    category: ['Furniture'],
    url: 'https://www.segmueller.de',
    readableTitle: 'Home furniture from Germany',
    status: 'Published',
    timeframe: '2023 - 2021',
    logo: <SegmuellerLogo className="h-12 w-auto" />,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: 'mediawave commerce GmbH'
  },
  {
    title: 'alles auto',
    category: ['Car dealer'],
    url: 'https://www.alles.auto',
    readableTitle: '',
    status: 'Published',
    timeframe: '2021',
    logo: undefined,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: 'mediawave commerce GmbH'
  },
  {
    title: 'Frontend Mentor',
    category: ['Training'],
    url: 'https://www.frontendmentor.io',
    readableTitle: '',
    status: 'Published',
    timeframe: '2021',
    logo: <FrontendMentorLogo className="h-12 w-auto" />,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: 'Frontend Mentor'
  },
  {
    title: 'Loy GmbH',
    category: ['Trainee', 'Dual Study', 'Full-Time'],
    url: 'https://www.loy.info',
    readableTitle: '',
    status: 'Published',
    timeframe: '2021 – 2016',
    logo: undefined,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: 'Loy GmbH'
  },
  {
    title: 'GitHub',
    category: ['Private projects and experimenting'],
    url: 'https://github.com/dominikrubroeder?tab=repositories',
    readableTitle:
      'All the projects i did over the last years. Not in specific order or priority.',
    status: 'Published',
    timeframe: 'Today – 2020',
    logo: <GithubLogo className="h-12 w-auto" />,
    role: undefined,
    aspects: undefined,
    tools: undefined,
    technologies: undefined,
    company: undefined
  }
];
