import { cn } from '@/lib/utils';

import {
  LogoAdobeIllustrator,
  LogoAdobePhotoshop,
  LogoAdobeXd,
  LogoAlgolia,
  LogoApple,
  LogoArc,
  LogoAuthjs,
  LogoAws,
  LogoAxios,
  LogoBaymardInstitute,
  LogoBrave,
  LogoBruno,
  LogoCanva,
  LogoChatgpt,
  LogoChrome,
  LogoClaudeAi,
  LogoClerk,
  LogoColorDesigner,
  LogoContentserv,
  LogoCookiehub,
  LogoCraft,
  LogoCss,
  LogoDailydev,
  LogoFigma,
  LogoFirefox,
  LogoFramer,
  LogoFrontendMentor,
  LogoGithub,
  LogoGitlab,
  LogoGoogleAnalytics,
  LogoGoogleTagManager,
  LogoHeroicons,
  LogoHotjar,
  LogoHtml,
  LogoInkdrop,
  LogoInstagram,
  LogoJavascript,
  LogoJira,
  LogoLighthouse,
  LogoLinkedin,
  LogoMarkdown,
  LogoMeilisearch,
  LogoMiro,
  LogoMotion,
  LogoNetlify,
  LogoNextjs,
  LogoNielsenNormanGroup,
  LogoNotes,
  LogoNpm,
  LogoPa11y,
  LogoPaper,
  LogoPostman,
  type LogoProps,
  LogoRadixUi,
  LogoReact,
  LogoSafari,
  LogoSass,
  LogoShadcnUi,
  LogoShopware,
  LogoSketch,
  LogoSlack,
  LogoStatista,
  LogoStoryblok,
  LogoStorybook,
  LogoTailwindCss,
  LogoTeams,
  LogoTwig,
  LogoTypescript,
  LogoTypo3,
  LogoUiColors,
  LogoUsercentrics,
  LogoV0,
  LogoVercel,
  LogoVisualStudioCode,
  LogoViteJs,
  LogoWebstorm,
  LogoX,
  LogoXing
} from '@/components/atoms/logo';

interface BrandLogoProps extends LogoProps {
  brand: string;
  group?: string;
}

export function BrandLogo({
  id,
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
    return <LogoStoryblok id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('shopware')) {
    return <LogoShopware id={id} className={className} />;
  }

  if (
    lowerCaseBrand.includes('tailwind') ||
    lowerCaseBrand.includes('refactoring')
  ) {
    return <LogoTailwindCss id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('heroicons')) {
    return <LogoHeroicons id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('vercel')) {
    return <LogoVercel id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('meilisearch')) {
    return <LogoMeilisearch id={id} className={className} />;
  }

  if (
    lowerCaseBrand.includes('algolia') ||
    lowerCaseBrand.includes('instant')
  ) {
    return <LogoAlgolia id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('next')) {
    return <LogoNextjs id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('react')) {
    return <LogoReact id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('storybook')) {
    return <LogoStorybook id={id} className={className} />;
  }

  if (
    lowerCaseBrand.includes('auth.js') ||
    lowerCaseBrand.includes('next-auth')
  ) {
    return <LogoAuthjs className={className} />;
  }

  if (brand.startsWith('@')) {
    return <LogoNpm id={id} className={className} />;
  }

  if (brand.startsWith('VS') || brand.startsWith('Visual Studio')) {
    return <LogoVisualStudioCode id={id} className={className} />;
  }

  if (brand.includes('Photoshop')) {
    return <LogoAdobePhotoshop id={id} className={className} />;
  }

  if (brand.includes('Illustrator')) {
    return <LogoAdobeIllustrator id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('baymard')) {
    return <LogoBaymardInstitute id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('apple')) {
    return <LogoApple id={id} className={className} />;
  }

  if (lowerCaseBrand.includes('nielsen norman')) {
    return <LogoNielsenNormanGroup id={id} className={className} />;
  }

  switch (group) {
    case 'Packages':
      return <LogoNpm id={id} className={className} />;
  }

  switch (brand) {
    case 'Figma':
      return <LogoFigma id={id} className={className} />;

    case 'WebStorm':
      return <LogoWebstorm id={id} className={className} />;

    case 'Notes':
      return <LogoNotes id={id} className={className} />;

    case 'GitHub':
      return <LogoGithub id={id} className={className} />;

    case 'GitLab':
      return <LogoGitlab id={id} className={className} />;

    case 'Miro':
      return <LogoMiro id={id} className={className} />;

    case 'TypeScript':
      return <LogoTypescript id={id} className={className} />;

    case 'JavaScript':
      return <LogoJavascript id={id} className={className} />;

    case 'Markdown':
      return <LogoMarkdown id={id} className={className} />;

    case 'HTML':
      return <LogoHtml id={id} className={className} />;

    case 'CSS':
      return <LogoCss id={id} className={className} />;

    case 'LinkedIn':
      return <LogoLinkedin id={id} className={className} />;

    case 'Xing':
      return <LogoXing id={id} className={className} />;

    case 'Instagram':
      return <LogoInstagram id={id} className={className} />;

    case 'Craft':
      return <LogoCraft id={id} className={className} />;

    case 'Inkdrop':
      return <LogoInkdrop className={className} />;

    case 'Chrome':
      return <LogoChrome id={id} className={className} />;

    case 'Firefox':
      return <LogoFirefox id={id} className={className} />;

    case 'Safari':
      return <LogoSafari id={id} className={className} />;

    case 'Slack':
      return <LogoSlack id={id} className={className} />;

    case 'Teams':
      return <LogoTeams id={id} className={className} />;

    case 'frontendmentor.io':
      return <LogoFrontendMentor id={id} className={className} />;

    case 'Jira':
      return <LogoJira id={id} className={className} />;

    case 'heroicons':
      return <LogoHeroicons id={id} className={className} />;

    case 'daily.dev':
      return <LogoDailydev id={id} className={className} />;

    case 'npm':
      return <LogoNpm id={id} className={className} />;

    case 'shadcn/ui':
      return <LogoShadcnUi id={id} className={className} />;

    case 'Radix UI':
      return <LogoRadixUi id={id} className={className} />;

    case 'Lighthouse':
      return <LogoLighthouse id={id} className={className} />;

    case 'Pa11y':
      return <LogoPa11y id={id} className={className} />;

    case 'ChatGPT':
      return <LogoChatgpt id={id} className={className} />;

    case 'Claude':
      return <LogoClaudeAi id={id} className={className} />;

    case 'v0':
      return <LogoV0 id={id} className={className} />;

    case 'Google Analytics':
      return <LogoGoogleAnalytics id={id} className={className} />;

    case 'Hotjar':
      return <LogoHotjar id={id} className={className} />;

    case 'Google Tag Manager':
      return <LogoGoogleTagManager id={id} className={className} />;

    case 'Axios':
      return <LogoAxios id={id} className={className} />;

    case 'Bruno':
      return <LogoBruno id={id} className={className} />;

    case 'Postman':
      return <LogoPostman id={id} className={className} />;

    case 'Clerk':
      return <LogoClerk id={id} className={className} />;

    case 'Arc':
      return <LogoArc id={id} className={className} />;

    case 'Brave':
      return <LogoBrave id={id} className={className} />;

    case 'Contentserv':
      return <LogoContentserv id={id} className={className} />;

    case 'Typo3':
      return <LogoTypo3 id={id} className={className} />;

    case 'Color Designer':
      return <LogoColorDesigner id={id} className={className} />;

    case 'uicolors':
      return <LogoUiColors id={id} className={className} />;

    case 'CookieHub':
      return <LogoCookiehub id={id} className={className} />;

    case 'Usercentrics':
      return <LogoUsercentrics id={id} className={className} />;

    case 'Motion':
      return <LogoMotion id={id} className={className} />;

    case 'Framer':
      return <LogoFramer id={id} className={className} />;

    case 'Twig':
      return <LogoTwig id={id} className={className} />;

    case 'Sass':
      return <LogoSass id={id} className={className} />;

    case 'Adobe XD (deprecated)':
      return <LogoAdobeXd id={id} className={className} />;

    case 'AWS Amplify':
      return <LogoAws id={id} className={className} />;

    case 'netlify':
      return <LogoNetlify id={id} className={className} />;

    case 'Sketch':
      return <LogoSketch id={id} className={className} />;

    case 'Canva':
      return <LogoCanva id={id} className={className} />;

    case 'Vite':
      return <LogoViteJs id={id} className={className} />;

    case 'Paper':
      return <LogoPaper id={id} className={className} />;

    case 'X':
      return <LogoX id={id} className={className} />;

    case 'Statista':
      return <LogoStatista id={id} className={className} />;

    default:
      return DefaultLogo;
  }
}
