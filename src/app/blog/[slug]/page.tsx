import { BlogPostTemplate, getBlogPost } from '@/components/organisms/blog';
import { Metadata } from 'next';
import { PageParams } from '@/lib/types';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// TODO: Add pre-rendering

// REMINDER: Extend meta data
export async function generateMetadata({
  params
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;

  const blogPost = slug ? getBlogPost({ id: slug }) : undefined;

  return {
    title: blogPost?.title
      ? `${blogPost.title} | Blog | Dominik Rubröder`
      : 'Read the current blog post',
    description:
      blogPost?.description ??
      `Blog post of ${blogPost?.author} at Dominik Rubröder, UX Design Engineer`
  };
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const { slug } = await params;

  if (!slug) notFound();

  return (
    <Suspense>
      <BlogPostTemplate id={slug} />
    </Suspense>
  );
}
