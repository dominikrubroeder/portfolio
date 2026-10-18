import type { Brand } from '@/components/feature/brand';
import { footerCertifications } from '@/components/feature/footer';
import { headerIdentity } from '@/components/feature/header';
import {
  homeHeading,
  homeIntro,
  homePrinciples,
  homeStatements
} from '@/components/feature/home';
// Direct file import: the philosophy barrel exports a client component.
import { philosophyTabs } from '@/components/feature/philosophy/philosophy-data';
import {
  HERO_PROJECT_TITLE,
  projectsHeroBlockquote
} from '@/components/feature/projects';
import { projects } from '@/components/feature/projects/projects-data';
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

const homeSection = (): string[] => [
  '## Home',
  homeHeading,
  ...homeStatements.map((statement) => `### ${statement}`),
  ...philosophyTabs.map(
    ({ title, labels, core }) =>
      `### ${title}\n\nCore: ${core}\n\n${list(labels)}`
  ),
  `> ${homeIntro.quote}`,
  ...homeIntro.paragraphs,
  homeIntro.signature,
  `### Principles\n\n${homePrinciples
    .map((principle, index) => `${index + 1}. ${principle}`)
    .join('\n')}`,
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
      ? `Fields:\n\n${list(project.responsibilities)}`
      : undefined,
    link(`View ${project.title}`, project.url)
  ]
    .filter(Boolean)
    .join('\n\n');
};

const projectsSection = (): string[] => {
  const hero = projects.find((project) => project.title === HERO_PROJECT_TITLE);
  const others = projects.filter(
    (project) => project.title !== HERO_PROJECT_TITLE
  );

  return [
    '## Projects',
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
    ...homeSection(),
    ...projectsSection(),
    '## Certifications',
    brandList(
      footerCertifications.map(({ name, href }) => ({ name, href }) as Brand)
    )
  ];

  return `${blocks.join('\n\n')}\n`;
}
