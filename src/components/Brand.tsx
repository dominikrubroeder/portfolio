import Figma from '@/components/svg/figma';
import WebStorm from '@/components/svg/webstorm';
import GitHub from '@/components/svg/github';
import type { Brand as BrandType } from '@/types';
import Inkdrop from '@/components/img/inkdrop';
import Gitlab from '@/components/svg/gitlab';

export default function Brand({
  brand,
  className
}: {
  brand: BrandType;
  className?: string;
}) {
  switch (brand) {
    case 'Figma':
      return <Figma />;

    case 'WebStorm':
      return <WebStorm />;

    case 'GitHub':
      return <GitHub />;

    case 'Inkdrop':
      return <Inkdrop />;

    case 'GitLab':
      return <Gitlab />;

    default:
      return null;
  }
}
