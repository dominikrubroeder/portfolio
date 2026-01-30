import { LogoInstagram } from '@/components/atoms/img';
import { LinkedinLogo, XingLogo } from '@/components/atoms/logo';
import type { Brand } from '@/components/organisms/brand';

export const mainSocials: Brand[] = [
  {
    name: 'LinkedIn',
    description: 'as business profile',
    logo: <LinkedinLogo className="size-12" />,
    href: 'https://www.linkedin.com/in/dominik-rubröder-49a63817b',
    knowledge: 'Daily'
  },
  {
    name: 'Xing',
    description: 'as business profile',
    href: 'https://www.xing.com/profile/Dominik_Rubroeder',
    logo: <XingLogo className="size-12" />,
    knowledge: 'Daily'
  },
  {
    name: 'Instagram',
    description: 'for private posts',
    href: 'https://www.instagram.com/domirubroeder',
    logo: <LogoInstagram className="size-12" />,
    knowledge: 'Daily'
  }
];
