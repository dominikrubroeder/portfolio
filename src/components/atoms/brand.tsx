import Figma from '@/components/atoms/svg/figma';
import WebstormIcon from '@/components/atoms/svg/webstorm-icon';
import GithubIcon from '@/components/atoms/svg/github-icon';
import type { Brand as BrandType } from '@/types';
import Gitlab from '@/components/atoms/svg/gitlab';
import Shopware from '@/components/atoms/svg/shopware';
import Storyblok from '@/components/atoms/svg/storyblok';
import Miro from '@/components/atoms/svg/miro';
import Markdown from '@/components/atoms/svg/markdown';
import ReactIcon from '@/components/atoms/svg/react-icon';
import NextJsIcon from '@/components/atoms/svg/next-js-icon';
import HTML from '@/components/atoms/svg/html';
import CSS from '@/components/atoms/svg/css';
import TailwindCssIcon from '@/components/atoms/svg/tailwind-css-icon';
import FramerMotionIcon from '@/components/atoms/svg/framer-motion-icon';
import AuthJs from '@/components/atoms/img/auth-js';
import Xing from '@/components/atoms/svg/xing';
import Instagram from '@/components/atoms/img/instagram';
import LinkedinIcon from '@/components/atoms/svg/linkedin-icon';
import TypescriptIcon from '@/components/atoms/svg/typescript-icon';
import JavaScript from '@/components/atoms/svg/javascript';
import Notes from '@/components/atoms/svg/notes';
import Craft from '@/components/atoms/svg/craft';

export default function Brand({
  brand,
  className = 'w-32 h-32'
}: {
  brand: BrandType;
  className?: string;
}) {
  if (!(brand satisfies BrandType)) return null;

  switch (brand) {
    case 'Figma':
      return <Figma className={className} />;

    case 'WebStorm':
      return <WebstormIcon className={className} />;

    case 'Notes':
      return <Notes className={className} />;

    case 'GitHub':
      return <GithubIcon className={className} />;

    case 'GitLab':
      return <Gitlab className={className} />;

    case 'Shopware':
      return <Shopware className={className} />;

    case 'Storyblok':
      return <Storyblok className={className} />;

    case 'Miro':
      return <Miro className={className} />;

    case 'React':
      return <ReactIcon className={className} />;

    case 'Next.js':
      return <NextJsIcon className={className} />;

    case 'TypeScript':
      return <TypescriptIcon className={className} />;

    case 'JavaScript':
      return <JavaScript className={className} />;

    case 'Markdown':
      return <Markdown className={className} />;

    case 'HTML':
      return <HTML className={className} />;

    case 'CSS':
      return <CSS className={className} />;

    case 'Tailwind CSS':
      return <TailwindCssIcon className={className} />;

    case 'Framer Motion':
      return <FramerMotionIcon className={className} />;

    case 'Auth.js':
      return <AuthJs className={className} />;

    case 'LinkedIn':
      return <LinkedinIcon className={className} />;

    case 'Xing':
      return <Xing className={className} />;

    case 'Instagram':
      return <Instagram className={className} />;

    case 'Craft':
      return <Craft className={className} />;
  }
}
