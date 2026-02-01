import { cache } from 'react';
import { blogPosts } from '@/components/organisms/blog';

export const getBlogPost = cache(
  ({ id, sortBy }: { id: string; sortBy?: 'latest-first' }) =>
    blogPosts.find((blogPost) => blogPost.id === id)
);
