import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import { Accordion, AccordionItemProps } from '@/components/atoms/accordion';
import { AllBlogPosts } from '@/components/organisms/blog/all-blog-posts';
import { blogPosts } from '@/components/organisms/blog/blog-posts';

export function Blog() {
  const items: AccordionItemProps[] = blogPosts.map((post) => {
    return { title: post.title, href: post.href, children: post.content };
  });

  return (
    <Animate>
      <Container className="space-y-4" id="blog">
        <h2>
          Blog posts
          <span className="ml-2 font-medium text-muted-foreground">
            that cover dedicated frontend design and engineering topics
          </span>
        </h2>

        <Accordion
          variant="contained"
          items={[
            ...items,
            {
              title: 'Blog post 2',
              children: <div>Blog post content</div>,
              href: '/blog/blog-post-2'
            },
            {
              title: 'Blog post 3',
              children: <div>Blog post content</div>,
              href: '/blog/blog-post-3'
            },
            {
              title: 'Blog post 4',
              children: <div>Blog post content</div>,
              href: '/blog/blog-post-4'
            }
          ]}
          accordionGroupId="accordion-group-blog"
          accordionIcon="arrow-right"
        />

        <AllBlogPosts />
      </Container>
    </Animate>
  );
}
