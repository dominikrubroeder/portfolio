import { ReactNode } from 'react';

export default function BlogLayout({
  title,
  subline,
  publishedAt,
  author,
  children
}: {
  title: string;
  subline?: string;
  publishedAt: string;
  author: string;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="mx-auto max-w-screen-md">
        <h1
          className="text-4xl font-bold text-theme-contrary"
          aria-label={`Blog title: ${title}`}
        >
          {title}
        </h1>
        {subline && <h2>{subline}</h2>}
        <div>{publishedAt}</div>
        <br />
        <p>{author}</p>
        <br />
        <hr />
      </section>

      <div className="mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
