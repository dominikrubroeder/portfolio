import {
  BlogPost,
  BlogPostAboutFrontendArchitecture,
  BlogPostAboutTimelineAndReleasePlanning
} from '@/components/organisms/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'about-timeline-and-release-planning',
    title: 'About timeline and release planning',
    description: 'From the perspective of a design engineer',
    href: '/blog/about-timeline-and-release-planning',
    content: <BlogPostAboutTimelineAndReleasePlanning />,
    author: 'Dominik Rubröder',
    dateOfRelease: '2026-12-31T14:03:00',
    foreword: <>This is the foreword</>,
    summary: <>This is the summary!</>,
    furtherLinks: [
      {
        href: 'https',
        label: 'Google',
        isExternalLink: true
      },
      {
        href: 'https',
        label: 'Google',
        isExternalLink: true
      },
      {
        href: 'https',
        label: 'Google',
        isExternalLink: true
      }
    ],
    nextBlogPostId: 'about-frontend-architecture'
  },
  {
    id: 'about-frontend-architecture',
    title: 'About fronted architecture',
    description: 'Atomic Design, Subatomic, Design Tokens ...what?',
    href: '/blog/about-frontend-architecture',
    content: <BlogPostAboutFrontendArchitecture />,
    author: 'Dominik Rubröder',
    dateOfRelease: '2026-01-02',
    foreword: <>This is the foreword</>,
    summary: <>This is the summary!</>,
    furtherLinks: [
      {
        href: 'https',
        label: 'Google',
        isExternalLink: true
      },
      {
        href: 'https',
        label: 'Google',
        isExternalLink: true
      },
      {
        href: 'https',
        label: 'Google',
        isExternalLink: true
      }
    ],
    nextBlogPostId: undefined
  }
];
