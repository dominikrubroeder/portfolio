import type { ReactNode } from 'react';

import { IconAtomicDesign, IconAtomicDesignTokens } from '@/components/ui/icon';

import { BrandLink } from '@/components/feature/brand';
import { footerCertifications } from '@/components/feature/footer';

import type { BaseComponentProps } from '@/lib/types';

type CertificateName = (typeof footerCertifications)[number]['name'];

/** Icon-only link to a certificate PDF; the tooltip says what it certifies. */
export function ButtonCertificate({
  name,
  id,
  className
}: BaseComponentProps & { name: CertificateName }) {
  const certificate = footerCertifications.find((item) => item.name === name);

  if (!certificate) return null;

  const logoId = id || `button-certificate-${name}`;
  const logos: Record<string, ReactNode> = {
    'Atomic Design': <IconAtomicDesign />,
    Subatomic: <IconAtomicDesignTokens id={logoId} />
  };

  return (
    <BrandLink
      brandLogoId={logoId}
      brand={{ name, href: certificate.href, logo: logos[name] }}
      size="small"
      label={certificate.label}
      className={className}
    />
  );
}
