import Figma from '@/components/svg/figma';
import WebStorm from '@/components/svg/webstorm';
import GitHub from '@/components/svg/github';
import type { Brand as BrandType } from '@/types';
import Inkdrop from '@/components/img/inkdrop';
import Gitlab from '@/components/svg/gitlab';
import Shopware from '@/components/svg/shopware';
import Storyblok from '@/components/svg/storyblok';
import Miro from '@/components/svg/miro';
import Markdown from '@/components/svg/markdown';
import React from '@/components/svg/react';
import NextJs from '@/components/svg/nextjs';
import TypeScript from '@/components/svg/typescript';
import JavaScript from '@/components/svg/javascript';
import HTML from '@/components/svg/html';
import CSS from '@/components/svg/css';
import TailwindCSS from '@/components/svg/tailwind-css';
import FramerMotion from '@/components/svg/framer-motion';

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

    case 'React':
      return <React className={className} />;

    case 'Next.js':
      return <NextJs className={className} />;

    case 'TypeScript':
      return <TypeScript className={className} />;

    case 'JavaScript':
      return <JavaScript className={className} />;

    case 'Markdown':
      return <Markdown className={className} />;

    case 'HTML':
      return <HTML className={className} />;

    case 'CSS':
      return <CSS className={className} />;

    case 'Tailwind CSS':
      return <TailwindCSS className={className} />;

    case 'Framer Motion':
      return <FramerMotion className={className} />;
  }
}
