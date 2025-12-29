import { LiveEditContainer } from '@/components/organisms/live-edit';
import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import { Accordion } from '@/components/atoms/accordion';
import { AllBlogPosts } from '@/components/organisms/blog/all-blog-posts';

export function Blog() {
  return (
    <Animate direction="up">
      <LiveEditContainer componentName="blog-list.tsx">
        <Container className="space-y-8" id="blog">
          <h2>
            Blog posts
            <span className="ml-2 font-medium text-muted-foreground">
              that cover dedicated topics from time to time
            </span>
          </h2>

          <Accordion
            variant="contained"
            items={[
              {
                title: 'Blog post 1',
                children: <div>Blog post content</div>,
                href: '/blog/blog-post-1'
              },
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
              },
              {
                title: 'Blog post 5',
                children: <div>Blog post content</div>,
                href: '/blog/blog-post-5'
              }
            ]}
            accordionGroupId="accordion-group-blog"
            accordionIcon="arrow-right"
          />

          <AllBlogPosts />
        </Container>
      </LiveEditContainer>
    </Animate>
  );
}
