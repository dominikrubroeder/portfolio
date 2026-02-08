import { cn } from '@/lib/utils';

import {
  LogoAdobeIllustrator,
  LogoAdobePhotoshop,
  LogoAdobeXd,
  LogoAlgolia,
  LogoArc,
  LogoAuthjs,
  LogoAws,
  LogoAxios,
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
    return <LogoStoryblok className={className} />;
  }

  if (lowerCaseBrand.includes('shopware')) {
    return <LogoShopware className={className} />;
  }

  if (
    lowerCaseBrand.includes('tailwind') ||
    lowerCaseBrand.includes('refactoring')
  ) {
    return <LogoTailwindCss className={className} />;
  }

  if (lowerCaseBrand.includes('heroicons')) {
    return <LogoHeroicons className={className} />;
  }

  if (lowerCaseBrand.includes('vercel')) {
    return <LogoVercel className={className} />;
  }

  if (lowerCaseBrand.includes('meilisearch')) {
    return <LogoMeilisearch className={className} />;
  }

  if (
    lowerCaseBrand.includes('algolia') ||
    lowerCaseBrand.includes('instant')
  ) {
    return <LogoAlgolia className={className} />;
  }

  if (lowerCaseBrand.includes('next')) {
    return <LogoNextjs className={className} />;
  }

  if (lowerCaseBrand.includes('react')) {
    return <LogoReact className={className} />;
  }

  if (lowerCaseBrand.includes('storybook')) {
    return <LogoStorybook className={className} />;
  }

  if (
    lowerCaseBrand.includes('auth.js') ||
    lowerCaseBrand.includes('next-auth')
  ) {
    return <LogoAuthjs className={className} />;
  }

  if (brand.startsWith('@')) {
    return <LogoNpm className={className} />;
  }

  if (brand.startsWith('VS') || brand.startsWith('Visual Studio')) {
    return <LogoVisualStudioCode className={className} />;
  }

  if (brand.includes('Photoshop')) {
    return <LogoAdobePhotoshop className={className} />;
  }

  if (brand.includes('Illustrator')) {
    return <LogoAdobeIllustrator className={className} />;
  }

  switch (group) {
    case 'Packages':
      return <LogoNpm className={className} />;
  }

  switch (brand) {
    case 'Figma':
      return <LogoFigma className={className} />;

    case 'WebStorm':
      return <LogoWebstorm className={className} />;

    case 'Notes':
      return <LogoNotes className={className} />;

    case 'GitHub':
      return <LogoGithub className={className} />;

    case 'GitLab':
      return <LogoGitlab className={className} />;

    case 'Miro':
      return <LogoMiro className={className} />;

    case 'TypeScript':
      return <LogoTypescript className={className} />;

    case 'JavaScript':
      return <LogoJavascript className={className} />;

    case 'Markdown':
      return <LogoMarkdown className={className} />;

    case 'HTML':
      return <LogoHtml className={className} />;

    case 'CSS':
      return <LogoCss className={className} />;

    case 'LinkedIn':
      return <LogoLinkedin className={className} />;

    case 'Xing':
      return <LogoXing className={className} />;

    case 'Instagram':
      return <LogoInstagram className={className} />;

    case 'Craft':
      return <LogoCraft className={className} />;

    case 'Inkdrop':
      return <LogoInkdrop className={className} />;

    case 'Chrome':
      return <LogoChrome className={className} />;

    case 'Firefox':
      return <LogoFirefox className={className} />;

    case 'Safari':
      return <LogoSafari className={className} />;

    case 'Slack':
      return <LogoSlack className={className} />;

    case 'Teams':
      return <LogoTeams className={className} />;

    case 'frontendmentor.io':
      return <LogoFrontendMentor className={className} />;

    case 'Jira':
      return <LogoJira className={className} />;

    case 'heroicons':
      return <LogoHeroicons className={className} />;

    case 'daily.dev':
      return <LogoDailydev className={className} />;

    case 'npm':
      return <LogoNpm className={className} />;

    case 'shadcn/ui':
      return <LogoShadcnUi className={className} />;

    case 'Radix UI':
      return <LogoRadixUi className={className} />;

    case 'Lighthouse':
      return <LogoLighthouse className={className} />;

    case 'Pa11y':
      return <LogoPa11y className={className} />;

    case 'ChatGPT':
      return <LogoChatgpt className={className} />;

    case 'Claude':
      return <LogoClaudeAi className={className} />;

    case 'v0':
      return <LogoV0 className={className} />;

    case 'Google Analytics':
      return <LogoGoogleAnalytics className={className} />;

    case 'Hotjar':
      return <LogoHotjar className={className} />;

    case 'Google Tag Manager':
      return <LogoGoogleTagManager className={className} />;

    case 'Axios':
      return <LogoAxios className={className} />;

    case 'Bruno':
      return <LogoBruno className={className} />;

    case 'Postman':
      return <LogoPostman className={className} />;

    case 'Clerk':
      return <LogoClerk className={className} />;

    case 'Arc':
      return <LogoArc className={className} />;

    case 'Brave':
      return <LogoBrave className={className} />;

    case 'Contentserv':
      return <LogoContentserv className={className} />;

    case 'Typo3':
      return <LogoTypo3 className={className} />;

    case 'Color Designer':
      return <LogoColorDesigner className={className} />;

    case 'uicolors':
      return <LogoUiColors className={className} />;

    case 'CookieHub':
      return <LogoCookiehub className={className} />;

    case 'Usercentrics':
      return <LogoUsercentrics className={className} />;

    case 'Motion':
      return <LogoMotion className={className} />;

    case 'Framer':
      return <LogoFramer className={className} />;

    case 'Twig':
      return <LogoTwig className={className} />;

    case 'Sass':
      return <LogoSass className={className} />;

    case 'Adobe XD (deprecated)':
      return <LogoAdobeXd className={className} />;

    case 'AWS Amplify':
      return <LogoAws className={className} />;

    case 'netlify':
      return <LogoNetlify className={className} />;

    case 'Sketch':
      return <LogoSketch className={className} />;

    case 'Canva':
      return <LogoCanva className={className} />;

    case 'Vite':
      return <LogoViteJs className={className} />;

    case 'Paper':
      return <LogoPaper className={className} />;

    case 'X':
      return <LogoX className={className} />;

    default:
      return DefaultLogo;
  }
}
