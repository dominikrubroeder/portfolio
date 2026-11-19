import type { Brand } from '@/components/feature/brand';
import { footerCertifications } from '@/components/feature/footer';
import { headerIdentity } from '@/components/feature/header';
import {
  introductionPrinciples,
  introductionStatements
} from '@/components/feature/introduction';
import type { IntroductionParagraph } from '@/components/feature/introduction';
// Direct file import: the philosophy barrel exports a client component.
import {
  NAVIGATION_LEVELS_ENABLED,
  philosophyTabs,
  philosophyTopicGroups,
  philosophyTopics
} from '@/components/feature/philosophy';
import {
  getResponsibilityMarkdown,
  HERO_PROJECT_TITLE,
  projectsHeroBlockquote
} from '@/components/feature/selected-works';
import { projects } from '@/components/feature/selected-works';
import { socials } from '@/components/feature/socials';
import {
  mainTechnologies,
  technologies
} from '@/components/feature/technologies';
import { mainTools, tools } from '@/components/feature/tools';

import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';

const PROFILE_LINK_NAMES = ['GitHub', 'LinkedIn'];

const absolute = (href: string) =>
  href.startsWith('/') ? `${ROUTING_PUBLIC_DOMAIN}${href}` : href;

const link = (label: string, href: string) => `[${label}](${absolute(href)})`;

const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

const brandList = (brands: Brand[]) =>
  list(brands.map((brand) => link(brand.name, brand.href)));

const groupedBrands = (
  groups: { group: string; children: Brand[] }[]
): string[] =>
  groups
    .slice()
    .sort((a, b) => a.group.localeCompare(b.group))
    .map(
      ({ group, children }) =>
        `#### ${group}\n\n${brandList(
          children.slice().sort((a, b) => a.name.localeCompare(b.name))
        )}`
    );

// A marked term keeps its tooltip text in the markdown: "term (hint)".
const termMarkdown = (text: string, terms: Record<string, string> = {}) =>
  Object.entries(terms).reduce(
    (result, [term, hint]) => result.replace(term, `${term} (${hint})`),
    text
  );

const paragraphMarkdown = (
  paragraph: IntroductionParagraph,
  terms?: Record<string, string>
): string =>
  typeof paragraph === 'string'
    ? termMarkdown(paragraph, terms)
    : [
        `> ${paragraph.quote}`,
        ...(paragraph.author ? [`>`, `> – ${paragraph.author}`] : [])
      ].join('\n');

const principlesMarkdown = `### Principles\n\n${introductionPrinciples
  .map((principle, index) => `${index + 1}. ${principle}`)
  .join('\n')}`;

const introductionSection = (): string[] => [
  '## Introduction',
  ...introductionStatements.flatMap(({ text, paragraphs, terms }, index) => [
    [
      `### ${text}`,
      ...(paragraphs ?? []).map((paragraph) =>
        paragraphMarkdown(paragraph, terms)
      )
    ].join('\n\n'),
    // Same order as the page: principles follow the first statement.
    ...(index === 0 ? [principlesMarkdown] : [])
  ]),
  ...philosophyTabs.map(
    ({ title, labels, core }) =>
      `### ${title}\n\nCore: ${core}\n\n${list(labels)}`
  ),
  ...(NAVIGATION_LEVELS_ENABLED ? Object.entries(philosophyTopics) : []).map(
    ([topic, details]) =>
      `### ${topic}\n\n${philosophyTopicGroups
        .map(({ key, title }) => `${title}:\n\n${list(details[key])}`)
        .join('\n\n')}`
  ),
  `### Main tools\n\n${brandList(mainTools)}`,
  `### Main technologies\n\n${brandList(mainTechnologies)}`,
  '### More tools',
  ...groupedBrands(tools),
  '### More technologies',
  ...groupedBrands(technologies)
];

const projectSection = (project: (typeof projects)[number]): string => {
  const companies = (project.companies ?? []).map((company) =>
    company.href ? link(company.label, company.href) : company.label
  );
  const meta = [
    companies.join(', '),
    project.timeframe,
    project.isActive ? 'Ongoing' : undefined
  ]
    .filter(Boolean)
    .join(' · ');

  return [
    `### ${project.title}`,
    meta,
    project.description,
    project.subline,
    project.responsibilities?.length
      ? `Fields:\n\n${list(project.responsibilities.map(getResponsibilityMarkdown))}`
      : undefined,
    link(`View ${project.title}`, project.url),
    project.notes
  ]
    .filter(Boolean)
    .join('\n\n');
};

const selectedWorksSection = (): string[] => {
  const hero = projects.find((project) => project.title === HERO_PROJECT_TITLE);
  const others = projects.filter(
    (project) => project.title !== HERO_PROJECT_TITLE
  );

  return [
    '## Selected works',
    `> ${projectsHeroBlockquote}`,
    ...[...(hero ? [hero] : []), ...others].map(projectSection)
  ];
};

export function buildAgentViewMarkdown(): string {
  const profileLinks = socials.filter((social) =>
    PROFILE_LINK_NAMES.includes(social.name)
  );

  const blocks = [
    `# ${headerIdentity.name}, ${headerIdentity.role}`,
    link('Back to the site', '/'),
    brandList(profileLinks),
    ...introductionSection(),
    ...selectedWorksSection(),
    '## Certifications',
    brandList(
      footerCertifications.map(({ name, href }) => ({ name, href }) as Brand)
    )
  ];

  return `${blocks.join('\n\n')}\n`;
}
