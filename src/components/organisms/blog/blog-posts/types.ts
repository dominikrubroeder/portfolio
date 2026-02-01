import { ReactNode } from 'react';

export interface BlogPost {
  id: string;
  /** `title` is the title of the next blog post.
   *
   * Example: 'My next blog post'
   * */
  title: string;
  /** `href` is the URL to the next blog post. Start with a leading slash `/`.
   *
   * Example: '/blog/my-next-blog-post'
   * */
  /** `description` is an optional subline in addition to the `title`. It underlines or extends the message of the `title`. */
  description?: string;
  href: string;
  content: ReactNode;
  author: 'Dominik Rubröder';
  dateOfRelease: string;
  dateOfEdited?: string;
  foreword?: ReactNode;
  summary?: ReactNode;
  furtherLinks?: { href: string; label: string; isExternalLink: boolean }[];
  nextBlogPostId?: string;
  keywords?: string[];
}
