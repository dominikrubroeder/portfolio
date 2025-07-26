import { MediawaveLogo } from '@/components/atoms/logo';
import { technologies } from '@/components/organisms/technologies';
import { tools } from '@/components/organisms/tools';

export const projects = [
  {
    title: 'Value Booster',
    category: ['Headless', 'Ecommerce'],
    url: 'https://www.mediawave.de/value-booster',
    readableTitle: 'Kick start in your headless ecommerce project',
    status: 'Currently developing',
    timeframe: 'Today – 2024',
    logo: <MediawaveLogo className="h-14 w-auto" />,
    role: ['Frontend Development', 'Design Consulting'],
    aspects: [
      'Building user interface based on design files',
      'Connecting several headless systems into one centric user interface',
      'Maintaining and building up the design system to ensure flexibility and reusability'
    ],
    tools: [
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Figma'
          )
        )
        ?.children.find((technology) => technology.title === 'Figma'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'WebStorm'
          )
        )
        ?.children.find((technology) => technology.title === 'WebStorm'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Shopware'
          )
        )
        ?.children.find((technology) => technology.title === 'Shopware'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Storyblok'
          )
        )
        ?.children.find((technology) => technology.title === 'Storyblok'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Algolia'
          )
        )
        ?.children.find((technology) => technology.title === 'Algolia'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Auth.js'
          )
        )
        ?.children.find((technology) => technology.title === 'Auth.js'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Jira'
          )
        )
        ?.children.find((technology) => technology.title === 'Jira'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Slack'
          )
        )
        ?.children.find((technology) => technology.title === 'Slack'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Teams'
          )
        )
        ?.children.find((technology) => technology.title === 'Teams'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'GitLab'
          )
        )
        ?.children.find((technology) => technology.title === 'GitLab'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Craft'
          )
        )
        ?.children.find((technology) => technology.title === 'Craft')
    ],
    technologies: [
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Next.js'
          )
        )
        ?.children.find((technology) => technology.title === 'Next.js'),
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'React'
          )
        )
        ?.children.find((technology) => technology.title === 'React'),
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'TypeScript'
          )
        )
        ?.children.find((technology) => technology.title === 'TypeScript'),
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Tailwind CSS'
          )
        )
        ?.children.find((technology) => technology.title === 'Tailwind CSS')
    ]
  },
  {
    title: 'sautershop',
    category: ['DIY workers'],
    url: 'https://www.sautershop.de',
    status: 'In Progress',
    readableTitle: 'Home wood-working tools',
    timeframe: 'Today – 2024'
  },
  {
    title: 'HD+',
    category: ['TV'],
    url: 'https://www.hd-plus.de',
    readableTitle: 'Everything you need for good television',
    status: 'Terminated',
    timeframe: '2023 - 2021'
  },
  {
    title: 'Segmüller',
    category: ['Furniture'],
    url: 'https://www.segmueller.de',
    readableTitle: 'Home furniture from Germany',
    status: 'Published',
    timeframe: '2023 - 2021'
  },
  {
    title: 'alles auto',
    category: ['Car dealer'],
    url: 'https://www.alles.auto',
    readableTitle: '',
    status: 'Published',
    timeframe: '2021'
  },
  {
    title: 'Loy GmbH',
    category: ['Trainee', 'Dual Study', 'Full-Time'],
    url: 'https://www.loy.info',
    readableTitle: '',
    status: 'Published',
    timeframe: '2021 – 2016'
  },
  {
    title: 'GitHub',
    category: ['Private projects and experimenting'],
    url: 'https://github.com/dominikrubroeder?tab=repositories',
    readableTitle:
      'In my repository i just include all the projects i did over the last years. Not in specific order or priority.',
    status: 'Published',
    timeframe: 'Today – 2020'
  }
];
