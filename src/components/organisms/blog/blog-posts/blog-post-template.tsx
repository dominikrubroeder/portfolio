import { Container } from '@/components/atoms/container';
import { Avatar } from '@/components/atoms/avatar';
import { Blockquote } from '@/components/atoms/blockquote';
import { Ul } from '@/components/atoms/ul';
import { ExternalLink } from '@/components/atoms/external-link';
import Link from 'next/link';
import { BackButton } from '@/components/atoms/button';
import {
  BlogPost,
  getBlogPost,
  NextBlogPostButton
} from '@/components/organisms/blog';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

export function BlogPostTemplate({ id }: Pick<BlogPost, 'id'>) {
  const blogPost = getBlogPost({ id });

  if (!blogPost) notFound();

  const dateReleased = formatDate({ date: new Date(blogPost.dateOfRelease) });
  const dateEdited = blogPost.dateOfEdited
    ? formatDate({ date: new Date(blogPost.dateOfEdited) })
    : undefined;

  const nextBlogPost = blogPost.nextBlogPostId
    ? getBlogPost({ id: blogPost.nextBlogPostId })
    : undefined;

  return (
    <Container as="article" className="mt-4 space-y-8 px-4">
      <header>
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.description}</h2>
        <p className="mt-2">
          <span className="space-x-1">
            <span>by</span>
            <Avatar as="Image" width={28} height={28} className="inline-flex" />
            <span>{blogPost.author}</span>
          </span>
          <span>, published {dateReleased}</span>
          {dateEdited && <span>, {dateEdited}</span>}
        </p>
      </header>

      {blogPost.foreword && (
        <div>
          <div>
            <b>Foreword</b>
          </div>

          {blogPost.foreword}
        </div>
      )}

      {blogPost.summary && (
        <div>
          <div>
            <b>Summary</b>
          </div>

          <Blockquote className="my-0">{blogPost.summary}</Blockquote>
        </div>
      )}

      <div>{blogPost.content}</div>

      {blogPost.furtherLinks?.length && (
        <div>
          <div>
            <b>Further links</b>
          </div>

          <Ul listStyle="disc">
            {blogPost.furtherLinks.map((furtherLink, index) => (
              <li key={`${furtherLink.href}-${index}`}>
                {furtherLink.isExternalLink ? (
                  <ExternalLink href={furtherLink.href}>
                    {furtherLink.label}
                  </ExternalLink>
                ) : (
                  <Link href={furtherLink.href}>{furtherLink.label}</Link>
                )}
              </li>
            ))}
          </Ul>
        </div>
      )}

      <footer className="flex flex-wrap items-center justify-between gap-4">
        <BackButton />
        {nextBlogPost && (
          <NextBlogPostButton
            title={nextBlogPost.title}
            href={nextBlogPost.href}
          />
        )}
      </footer>
    </Container>
  );
}
