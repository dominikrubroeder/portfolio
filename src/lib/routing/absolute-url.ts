import { ROUTING_PUBLIC_DOMAIN } from './constants';

export const absoluteUrl = (href: string) =>
  href.startsWith('/') ? `${ROUTING_PUBLIC_DOMAIN}${href}` : href;
