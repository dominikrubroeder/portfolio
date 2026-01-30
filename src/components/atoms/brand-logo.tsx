import { cn } from '@/lib/utils';

import {
  LogoAuthjs,
  LogoInkdrop,
  LogoInstagram,
  LogoPostman,
  LogoTwig
} from '@/components/atoms/img';
import {
  AdobeIllustratorLogo,
  AdobePhotoshopLogo,
  AdobeXdLogo,
  AlgoliaLogo,
  ArcLogo,
  AwsLogo,
  AxiosLogo,
  BraveLogo,
  BrunoLogo,
  CanvaLogo,
  ChatGptLogo,
  ChromeLogo,
  ClaudeAiLogo,
  ClerkLogo,
  ColorDesignerLogo,
  ContentservLogo,
  CookiehubLogo,
  CraftLogo,
  CssLogo,
  DailyDevLogo,
  FigmaLogo,
  FirefoxLogo,
  FramerLogo,
  FrontendMentorLogo,
  GithubLogo,
  GitlabLogo,
  GoogleAnalyticsLogo,
  GoogleTagManagerLogo,
  HeroiconsLogo,
  HotjarLogo,
  HtmlLogo,
  JavascriptLogo,
  JiraLogo,
  LighthouseLogo,
  LinkedinLogo,
  type LogoProps,
  MarkdownLogo,
  MeilisearchLogo,
  MiroLogo,
  MotionLogo,
  NetlifyLogo,
  NextjsLogo,
  NotesLogo,
  NpmLogo,
  Pa11yLogo,
  RadixUILogo,
  ReactLogo,
  SafariLogo,
  SassLogo,
  ShadcnUiLogo,
  ShopwareLogo,
  SketchLogo,
  SlackLogo,
  StoryblokLogo,
  StorybookLogo,
  TailwindCssLogo,
  TeamsLogo,
  TypeScriptLogo,
  Typo3Logo,
  UicolorsLogo,
  UsercentricsLogo,
  V0Logo,
  VercelLogo,
  VisualStudioCodeLogo,
  ViteJsLogo,
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
  className = 'size-12'
}: BrandLogoProps) {
  const DefaultLogo = (
    <div
      className={cn(
        'flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded border border-transparent bg-muted text-muted-foreground transition group-hover:border-border group-hover:text-foreground hover:text-foreground',
        className
      )}
    >
      {brand.charAt(0)}
    </div>
  );

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

  if (lowerCaseBrand.includes('meilisearch')) {
    return <MeilisearchLogo className={className} />;
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

  if (lowerCaseBrand.includes('storybook')) {
    return <StorybookLogo className={className} />;
  }

  if (
    lowerCaseBrand.includes('auth.js') ||
    lowerCaseBrand.includes('next-auth')
  ) {
    return <LogoAuthjs className={className} />;
  }

  if (brand.startsWith('@')) {
    return <NpmLogo className={className} />;
  }

  if (brand.startsWith('VS') || brand.startsWith('Visual Studio')) {
    return <VisualStudioCodeLogo className={className} />;
  }

  if (brand.includes('Photoshop')) {
    return <AdobePhotoshopLogo className={className} />;
  }

  if (brand.includes('Illustrator')) {
    return <AdobeIllustratorLogo className={className} />;
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

    case 'LinkedIn':
      return <LinkedinLogo className={className} />;

    case 'Xing':
      return <XingLogo className={className} />;

    case 'Instagram':
      return <LogoInstagram className={className} />;

    case 'Craft':
      return <CraftLogo className={className} />;

    case 'Inkdrop':
      return <LogoInkdrop className={className} />;

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

    case 'Lighthouse':
      return <LighthouseLogo className={className} />;

    case 'Pa11y':
      return <Pa11yLogo className={className} />;

    case 'ChatGPT':
      return <ChatGptLogo className={className} />;

    case 'Claude':
      return <ClaudeAiLogo className={className} />;

    case 'v0':
      return <V0Logo className={className} />;

    case 'Google Analytics':
      return <GoogleAnalyticsLogo className={className} />;

    case 'Hotjar':
      return <HotjarLogo className={className} />;

    case 'Google Tag Manager':
      return <GoogleTagManagerLogo className={className} />;

    case 'Axios':
      return <AxiosLogo className={className} />;

    case 'Bruno':
      return <BrunoLogo className={className} />;

    case 'Postman':
      return <LogoPostman className={className} />;

    case 'Clerk':
      return <ClerkLogo className={className} />;

    case 'Arc':
      return <ArcLogo className={className} />;

    case 'Brave':
      return <BraveLogo className={className} />;

    case 'Contentserv':
      return <ContentservLogo className={className} />;

    case 'Typo3':
      return <Typo3Logo className={className} />;

    case 'Color Designer':
      return <ColorDesignerLogo className={className} />;

    case 'uicolors':
      return <UicolorsLogo className={className} />;

    case 'CookieHub':
      return <CookiehubLogo className={className} />;

    case 'Usercentrics':
      return <UsercentricsLogo className={className} />;

    case 'Motion':
      return <MotionLogo className={className} />;

    case 'Framer':
      return <FramerLogo className={className} />;

    case 'Twig':
      return <LogoTwig className={className} />;

    case 'Sass':
      return <SassLogo className={className} />;

    case 'Adobe XD (deprecated)':
      return <AdobeXdLogo className={className} />;

    case 'AWS Amplify':
      return <AwsLogo className={className} />;

    case 'netlify':
      return <NetlifyLogo className={className} />;

    case 'Sketch':
      return <SketchLogo className={className} />;

    case 'Canva':
      return <CanvaLogo className={className} />;

    case 'Vite':
      return <ViteJsLogo className={className} />;

    default:
      return DefaultLogo;
  }
}
