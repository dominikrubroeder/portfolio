import type { MenuItem } from '@/components/ui/menu';

export const footerCertifications = [
  { name: 'Atomic Design', href: '/certificates/atomic-design.pdf' },
  { name: 'Subatomic', href: '/certificates/subatomic.pdf' }
];

export const footerResumeLinks: MenuItem[] = [
  {
    key: 'pdf',
    label: 'PDF',
    href: '/Lebenslauf-Dominik-Rubröder.pdf',
    newTab: true
  },
  { key: 'json', label: 'JSON', href: '/api/resume' }
];
