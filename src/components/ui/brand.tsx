import Figma from '@/components/ui/svg/figma';
import WebStorm from '@/components/ui/svg/webstorm';
import GitHub from '@/components/ui/svg/github';
import type { Brand as BrandType } from '@/types';
import Gitlab from '@/components/ui/svg/gitlab';
import Shopware from '@/components/ui/svg/shopware';
import Storyblok from '@/components/ui/svg/storyblok';
import Miro from '@/components/ui/svg/miro';
import Markdown from '@/components/ui/svg/markdown';
import React from '@/components/ui/svg/react';
import NextJs from '@/components/ui/svg/next-js';
import HTML from '@/components/ui/svg/html';
import CSS from '@/components/ui/svg/css';
import TailwindCSS from '@/components/ui/svg/tailwind-css';
import FramerMotion from '@/components/ui/svg/framer-motion';
import AuthJs from '@/components/ui/img/auth-js';
import Xing from '@/components/ui/svg/xing';
import Instagram from '@/components/ui/img/instagram';
import LinkedIn from '@/components/ui/svg/linkedin';
import TypeScript from '@/components/ui/svg/typescript';
import JavaScript from '@/components/ui/svg/javascript';
import Notes from '@/components/ui/svg/notes';
import Craft from '@/components/ui/svg/craft';

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

    case 'Notes':
      return <Notes className={className} />;

    case 'GitHub':
      return <GitHub className={className} />;

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

    case 'Auth.js':
      return <AuthJs className={className} />;

    case 'LinkedIn':
      return <LinkedIn className={className} />;

    case 'Xing':
      return <Xing className={className} />;

    case 'Instagram':
      return <Instagram className={className} />;

    case 'Craft':
      return <Craft className={className} />;
  }
}
