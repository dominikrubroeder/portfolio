import BlogLayout from '@/components/blog/blog-layout';

export default function Page() {
  return (
    <BlogLayout
      title="Title headline"
      subline="Subline text"
      publishedAt="March, 28. 2024"
      author="Dominik Rubröder"
    >
      This is the content
    </BlogLayout>
  );
}
