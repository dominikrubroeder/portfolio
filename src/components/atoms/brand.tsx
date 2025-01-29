import { cn } from '@/lib/utils';

import {
  ChromeLogo,
  CraftIcon,
  CSSIcon,
  FigmaIcon,
  FirefoxLogo,
  GithubIcon,
  GitlabIcon,
  HTMLIcon,
  JavaScriptIcon,
  LinkedinIcon,
  MarkdownIcon,
  MiroIcon,
  MotionIcon,
  NextJsIcon,
  NotesIcon,
  ReactIcon,
  SafariLogo,
  ShopwareIcon,
  SlackLogo,
  StoryblokIcon,
  TailwindCssIcon,
  TeamsLogo,
  TypescriptIcon,
  VercelLogo,
  WebstormIcon,
  XingIcon
} from '@/components/atoms/svg';

import { AuthJsLogo, InkdropLogo, InstagramLogo } from '@/components/atoms/img';

export default function Brand({
  brand,
  className = 'size-32'
}: {
  brand: string;
  className?: string;
}) {
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

    case 'Motion (formerly Framer Motion)':
      return <MotionIcon className={className} />;

    case 'Auth.js':
      return <AuthJsLogo className={className} />;

    case 'LinkedIn':
      return <LinkedinIcon className={className} />;

    case 'Xing':
      return <XingIcon className={className} />;

    case 'Instagram':
      return <InstagramLogo className={className} />;

    case 'Craft':
      return <CraftIcon className={className} />;

    case 'Inkdrop':
      return <InkdropLogo className={className} />;

    case 'Chrome':
      return <ChromeLogo className={className} />;

    case 'Firefox':
      return <FirefoxLogo className={className} />;

    case 'Safari':
      return <SafariLogo className={className} />;

    case 'Slack':
      return <SlackLogo className={className} />;

    case 'Teams':
      return <TeamsLogo className={className} />;

    case 'Vercel':
      return <VercelLogo className={className} />;

    default:
      return <div className={cn('rounded bg-muted', className)} />;
  }
}
