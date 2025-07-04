import { cn } from '@/lib/utils';

import { AuthjsLogo, InkdropLogo, InstagramLogo } from '@/components/atoms/img';
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
  type LogoProps,
  MarkdownLogo,
  MiroLogo,
  MotionLogo,
  NextjsLogo,
  NotesLogo,
  NpmLogo,
  RadixUILogo,
  ReactLogo,
  SafariLogo,
  ShadcnUiLogo,
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


interface BrandLogoProps extends LogoProps {
  brand: string;
  group?: string;
}

export function BrandLogo({
  brand,
  group,
  className = 'size-32'
}: BrandLogoProps) {
  const DefaultLogo = <div className={cn('rounded bg-muted', className)} />;

  const lowerCaseBrand = brand.toLowerCase();

  if (lowerCaseBrand.includes('storyblok')) {
    return <StoryblokLogo className={className} />;
  }

  if (lowerCaseBrand.includes('shopware')) {
    return <ShopwareLogo className={className} />;
  }

  if (
    lowerCaseBrand.includes('tailwind') ||
    lowerCaseBrand.includes('refactoring')
  ) {
    return <TailwindCssLogo className={className} />;
  }

  if (lowerCaseBrand.includes('heroicons')) {
    return <HeroiconsLogo className={className} />;
  }

  if (lowerCaseBrand.includes('vercel')) {
    return <VercelLogo className={className} />;
  }

  if (
    lowerCaseBrand.includes('algolia') ||
    lowerCaseBrand.includes('instant')
  ) {
    return <AlgoliaLogo className={className} />;
  }

  if (lowerCaseBrand.includes('next')) {
    return <NextjsLogo className={className} />;
  }

  if (lowerCaseBrand.includes('react')) {
    return <ReactLogo className={className} />;
  }

  if (brand.startsWith('@')) {
    return <NpmLogo className={className} />;
  }

  switch (group) {
    case 'Packages':
      return <NpmLogo className={className} />;
  }

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

    case 'Miro':
      return <MiroLogo className={className} />;

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

    case 'frontendmentor.io':
      return <FrontendMentorLogo className={className} />;

    case 'Jira':
      return <JiraLogo className={className} />;

    case 'heroicons':
      return <HeroiconsLogo className={className} />;

    case 'daily.dev':
      return <DailyDevLogo className={className} />;

    case 'npm':
      return <NpmLogo className={className} />;

    case 'shadcn/ui':
      return <ShadcnUiLogo className={className} />;

    case 'Radix UI':
      return <RadixUILogo className={className} />;

    default:
      return DefaultLogo;
  }
}
