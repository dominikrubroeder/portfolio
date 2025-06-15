import { MediawaveLogo } from '@/components/atoms/logo';
import { tools } from '@/components/organisms/tools';
import { technologies } from '@/components/organisms/technologies';

export const projects = [
  {
    title: 'Value Booster',
    category: ['Headless', 'Ecommerce'],
    url: 'https://www.mediawave.de/value-booster',
    readableTitle: 'Kick start in your headless ecommerce project',
    status: 'Currently developing',
    logo: <MediawaveLogo className="h-14 w-auto" />,
    role: ['Frontend Development', 'Design Consulting'],
    aspects: [
      'Build user interface based on design files',
      'Connect several headless systems into one centric user interface',
      'Maintain and build up design system to ensure flexibility and reusability'
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
    readableTitle: 'Home wood-working tools',
    status: '2024 – Today'
  },
  {
    title: 'HD+',
    category: ['TV'],
    url: 'https://www.hd-plus.de',
    readableTitle: 'Everything you need for good television',
    status: '2021 - 2023'
  },
  {
    title: 'Segmüller',
    category: ['Furniture'],
    url: 'https://www.segmueller.de',
    readableTitle: 'Home furniture from Germany',
    status: '2021 - 2023'
  },
  {
    title: 'alles auto',
    category: ['Car dealer'],
    url: 'https://www.alles.auto',
    readableTitle: '',
    status: '2021'
  }
];
