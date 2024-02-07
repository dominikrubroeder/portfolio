import Figma from '@/components/svg/figma';
import WebStorm from '@/components/svg/webstorm';
import GitHub from '@/components/svg/github';
import type { Brand as BrandType } from '@/types';
import Inkdrop from '@/components/img/inkdrop';
import Gitlab from '@/components/svg/gitlab';
import Shopware from '@/components/svg/shopware';
import Storyblok from '@/components/svg/storyblok';
import Miro from '@/components/svg/miro';

export default function Brand({
  brand,
  className = 'w-32 h-32'
}: {
  brand: BrandType;
  className?: string;
}) {
  if (!(brand satisfies BrandType)) return null;

  switch (brand) {
    case 'Figma':
      return <Figma className={className} />;

    case 'WebStorm':
      return <WebStorm className={className} />;

    case 'GitHub':
      return <GitHub className={className} />;

    case 'Inkdrop':
      return <Inkdrop className={className} />;

    case 'GitLab':
      return <Gitlab className={className} />;

    case 'Shopware':
      return <Shopware className={className} />;

    case 'Storyblok':
      return <Storyblok className={className} />;

    case 'Miro':
      return <Miro className={className} />;
  }
}
