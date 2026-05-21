import { ToggleContent } from '@/components/molecules/toggle-content';
import { Accordion } from '@/components/molecules/accordion';

export function BlogPostsList() {
  return (
    <ToggleContent label="All blog posts" id="all-blog-posts">
      <Accordion
        items={[
          {
            title: 'Blog post 6',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-6'
          },
          {
            title: 'Blog post 7',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-7'
          },
          {
            title: 'Blog post 8',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-8'
          },
          {
            title: 'Blog post 9',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-9'
          },
          {
            title: 'Blog post 10',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-10'
          },
          {
            title: 'Blog post 11',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-11'
          },
          {
            title: 'Blog post 12',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-12'
          },
          {
            title: 'Blog post 13',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-13'
          },
          {
            title: 'Blog post 14',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-14'
          },
          {
            title: 'Blog post 15',
            children: <div>Blog post content</div>,
            href: '/blog/blog-post-15'
          }
        ].sort((a, b) => a.title.localeCompare(b.title))}
        variant="contained"
        accordionGroupId="accordion-group-blog-all"
        accordionIcon="arrow-right"
      />
    </ToggleContent>
  );
}
