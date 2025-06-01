import { LinkedinLogo, XingLogo } from '@/components/atoms/logo';
import { InstagramLogo } from '@/components/atoms/img';

export const mainSocials = [
  {
    name: 'LinkedIn',
    description: 'as business profile',
    logo: <LinkedinLogo className="size-12" />,
    href: 'https://www.linkedin.com/in/dominik-rubröder-49a63817b'
  },
  {
    name: 'Xing',
    description: 'as business profile',
    href: 'https://www.xing.com/profile/Dominik_Rubroeder',
    logo: <XingLogo className="size-12" />
  },
  {
    name: 'Instagram',
    description: 'for private posts',
    href: 'https://www.instagram.com/domirubroeder',
    logo: <InstagramLogo className="size-12" />
  }
];
