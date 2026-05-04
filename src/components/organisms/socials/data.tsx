import { LogoInstagram, LogoLinkedin, LogoX } from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';

export const socials: Brand[] = [
  {
    name: 'LinkedIn',
    description: 'as business profile',
    logo: <LogoLinkedin id="socials-linkedin" />,
    href: 'https://www.linkedin.com/in/dominik-rubröder-49a63817b',
    usageLevel: undefined
  },
  {
    name: 'X',
    description: 'as resource for tech and design news',
    href: 'https://x.com/drubroeder',
    logo: <LogoX />,
    usageLevel: undefined
  },
  {
    name: 'Instagram',
    description: 'for private posts',
    href: 'https://www.instagram.com/domirubroeder',
    logo: <LogoInstagram />,
    usageLevel: undefined
  }
];
