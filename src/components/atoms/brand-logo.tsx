import { cn } from '@/lib/utils';

import {
  AlgoliaLogo,
  ChromeLogo,
  CraftLogo,
  CssLogo,
  DailyDevLogo,
  FigmaLogo,
  FirefoxLogo,
  FrontendMentorLogo,
  GithubLogo,
  GitlabLogo,
  HeroiconsLogo,
  HtmlLogo,
  JavascriptLogo,
  JiraLogo,
  LinkedinLogo,
  MarkdownLogo,
  MiroLogo,
  MotionLogo,
  NextjsLogo,
  NotesLogo,
  ReactLogo,
  SafariLogo,
  ShopwareLogo,
  SlackLogo,
  StoryblokLogo,
  TailwindCssLogo,
  TeamsLogo,
  TypeScriptLogo,
  VercelLogo,
  WebstormLogo,
  XingLogo
} from '@/components/atoms/logo';

import { AuthjsLogo, InkdropLogo, InstagramLogo } from '@/components/atoms/img';

export function BrandLogo({
  brand,
  className = 'size-32'
}: {
  brand: string;
  className?: string;
}) {
  switch (brand) {
    case 'Figma':
      return <FigmaLogo className={className} />;

    case 'WebStorm':
      return <WebstormLogo className={className} />;

    case 'Notes':
      return <NotesLogo className={className} />;

    case 'GitHub':
      return <GithubLogo className={className} />;

    case 'GitLab':
      return <GitlabLogo className={className} />;

    case 'Shopware':
      return <ShopwareLogo className={className} />;

    case 'Storyblok':
      return <StoryblokLogo className={className} />;

    case 'Miro':
      return <MiroLogo className={className} />;

    case 'React':
      return <ReactLogo className={className} />;

    case 'Next.js':
      return <NextjsLogo className={className} />;

    case 'TypeScript':
      return <TypeScriptLogo className={className} />;

    case 'JavaScript':
      return <JavascriptLogo className={className} />;

    case 'Markdown':
      return <MarkdownLogo className={className} />;

    case 'HTML':
      return <HtmlLogo className={className} />;

    case 'CSS':
      return <CssLogo className={className} />;

    case 'Tailwind CSS':
      return <TailwindCssLogo className={className} />;

    case 'Motion':
      return <MotionLogo className={className} />;

    case 'Auth.js':
      return <AuthjsLogo className={className} />;

    case 'LinkedIn':
      return <LinkedinLogo className={className} />;

    case 'Xing':
      return <XingLogo className={className} />;

    case 'Instagram':
      return <InstagramLogo className={className} />;

    case 'Craft':
      return <CraftLogo className={className} />;

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

    case 'frontendmentor.io':
      return <FrontendMentorLogo className={className} />;

    case 'Learn Next.js':
      return <NextjsLogo className={className} />;

    case 'Algolia':
      return <AlgoliaLogo className={className} />;

    case 'Jira':
      return <JiraLogo className={className} />;

    case 'heroicons':
      return <HeroiconsLogo className={className} />;

    case 'daily.dev':
      return <DailyDevLogo className={className} />;

    default:
      return <div className={cn('rounded bg-muted', className)} />;
  }
}
