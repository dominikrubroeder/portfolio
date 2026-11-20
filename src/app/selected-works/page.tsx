import type { Metadata } from 'next';

import { getImageProps } from 'next/image';

import { preload } from 'react-dom';

import { Blockquote } from '@/components/ui/blockquote';
import { Container } from '@/components/ui/container';
import { DotsDivider } from '@/components/ui/dots-divider';
import { PageTemplate } from '@/components/ui/page-template';

import {
  getProject,
  getProjectImageSize,
  HERO_PROJECT_TITLE,
  ProjectCard,
  projects,
  projectsHeroBlockquote,
  projectsHeroHighlight
} from '@/components/feature/selected-works';
import { Ul } from '@/components/feature/typography';

import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';
import { seoTitle } from '@/lib/seo';

export const instant = false;

const SEO_TITLE = 'Selected works';
const SEO_DESCRIPTION =
  'My project contribution and responsible fields from 2016 – 2026';

// `openGraph` replaces the root layout's object as a whole, so the shared
// fields repeat here; otherwise shares of this page show the introduction description.
export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  openGraph: {
    title: seoTitle(SEO_TITLE),
    description: SEO_DESCRIPTION,
    url: `${ROUTING_PUBLIC_DOMAIN}/selected-works`,
    siteName: ROUTING_PUBLIC_DOMAIN.replace('https://www.', ''),
    images: [
      {
        url: `${ROUTING_PUBLIC_DOMAIN}/avatar.jpg`,
        width: 500,
        height: 500,
        alt: 'Profile image Dominik Rubröder'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

// Number of list images (after the hero) preloaded in the server HTML.
// The rest load lazily, so the 3-6 MB wallpapers do not compete with the hero.
const PRELOADED_LIST_IMAGES = 1;

// The images render inside client reveal wrappers, so `preload` on <Image>
// emits no <link> in the server HTML. Preload the above-the-fold ones here.
function preloadProjectImages() {
  const listProjects = projects.filter(
    (project) => project.title !== HERO_PROJECT_TITLE && project.previewImage
  );
  const heroProject = getProject({ title: HERO_PROJECT_TITLE });

  const targets = [
    ...(heroProject?.previewImage
      ? [{ project: heroProject, isHero: true }]
      : []),
    ...listProjects
      .slice(0, PRELOADED_LIST_IMAGES)
      .map((project) => ({ project, isHero: false }))
  ];

  for (const { project, isHero } of targets) {
    if (!project.previewImage) continue;

    const { props } = getImageProps({
      src: project.previewImage,
      alt: '',
      ...getProjectImageSize(project.previewImage, isHero ? 'hero' : 'list')
    });

    preload(props.src, {
      as: 'image',
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
      fetchPriority: isHero ? 'high' : 'auto'
    });
  }
}

export default function SelectedWorksPage() {
  preloadProjectImages();

  const heroProject = getProject({ title: HERO_PROJECT_TITLE });
  const listProjects = projects.filter(
    (project) => project.title !== heroProject?.title
  );

  return (
    <PageTemplate
      h1="Selected works"
      heroDescription={projectsHeroBlockquote.map((sentence, index) =>
        sentence === projectsHeroHighlight ? (
          <Blockquote
            key={`project-blockquote-sentence-${index}`}
            className="my-3"
          >
            {sentence}
          </Blockquote>
        ) : (
          <p key={`project-blockquote-sentence-${index}`}>{sentence}</p>
        )
      )}
    >
      <DotsDivider />

      {heroProject && <ProjectCard project={heroProject} variant="hero" />}

      <DotsDivider />

      <Container as="section">
        <Ul className="space-y-10 sm:space-y-12">
          {listProjects.map((project, index) => (
            // The dots divider sits inside the item, so the list holds items only.
            <li key={project.title} className="space-y-10 sm:space-y-12">
              <ProjectCard project={project} />

              {index + 1 !== listProjects.length && <DotsDivider />}
            </li>
          ))}
        </Ul>
      </Container>
    </PageTemplate>
  );
}
