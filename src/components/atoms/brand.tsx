import type { Brand as BrandType } from '@/types';
import {
  CraftIcon,
  CSSIcon,
  FigmaIcon,
  FramerMotionIcon,
  GithubIcon,
  GitlabIcon,
  HTMLIcon,
  JavaScriptIcon,
  LinkedinIcon,
  MarkdownIcon,
  MiroIcon,
  NextJsIcon,
  NotesIcon,
  ReactIcon,
  ShopwareIcon,
  StoryblokIcon,
  TailwindCssIcon,
  TypescriptIcon,
  WebstormIcon,
  XingIcon
} from '@/components/atoms/svg';
import AuthJsIcon from '@/components/atoms/img/auth-js-icon';
import InstagramIcon from '@/components/atoms/img/instagram-icon';
import { cn } from '@/lib/utils';

export default function Brand({
  brand,
  className = 'size-32'
}: {
  brand: BrandType;
  className?: string;
}) {
  if (!(brand satisfies BrandType)) return null;

  switch (brand) {
    case 'Figma':
      return <FigmaIcon className={className} />;

    case 'WebStorm':
      return <WebstormIcon className={className} />;

    case 'Notes':
      return <NotesIcon className={className} />;

    case 'GitHub':
      return <GithubIcon className={className} />;

    case 'GitLab':
      return <GitlabIcon className={className} />;

    case 'Shopware':
      return <ShopwareIcon className={className} />;

    case 'Storyblok':
      return <StoryblokIcon className={className} />;

    case 'Miro':
      return <MiroIcon className={className} />;

    case 'React':
      return <ReactIcon className={className} />;

    case 'Next.js':
      return <NextJsIcon className={className} />;

    case 'TypeScript':
      return <TypescriptIcon className={className} />;

    case 'JavaScript':
      return <JavaScriptIcon className={className} />;

    case 'Markdown':
      return <MarkdownIcon className={className} />;

    case 'HTML':
      return <HTMLIcon className={className} />;

    case 'CSS':
      return <CSSIcon className={className} />;

    case 'Tailwind CSS':
      return <TailwindCssIcon className={className} />;

    case 'Framer Motion':
      return <FramerMotionIcon className={className} />;

    case 'Auth.js':
      return <AuthJsIcon className={className} />;

    case 'LinkedIn':
      return <LinkedinIcon className={className} />;

    case 'Xing':
      return <XingIcon className={className} />;

    case 'Instagram':
      return <InstagramIcon className={className} />;

    case 'Craft':
      return <CraftIcon className={className} />;

    default:
      return <div className={cn('rounded bg-muted', className)} />;
  }
}
