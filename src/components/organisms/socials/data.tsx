import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin
} from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';

export const socials: Brand[] = [
  {
    name: 'GitHub',
    description: undefined,
    logo: <LogoGithub id="socials-github" />,
    href: 'https://github.com/dominikrubroeder',
    usageLevel: undefined
  },
  {
    name: 'LinkedIn',
    description: undefined,
    logo: <LogoLinkedin id="socials-linkedin" />,
    href: 'https://www.linkedin.com/in/dominik-rubröder-49a63817b',
    usageLevel: undefined
  },
  {
    name: 'Instagram',
    description: undefined,
    href: 'https://www.instagram.com/domirubroeder',
    logo: <LogoInstagram />,
    usageLevel: undefined
  }
];
