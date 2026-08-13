import type { Metadata } from 'next';
import { Container } from '@/components/organisms/layout';
import { H2, Ul } from '@/components/organisms/typography';
import {
  getBooks,
  getCourses,
  getPlatformsBlogsPeople
} from '@/components/organisms/training';
import { ExternalLink } from '@/components/atoms/external-link';
import { Hr } from '@/components/atoms/hr';
import { getResearch } from '@/components/organisms/training/research';
import Image from 'next/image';
import Link from 'next/link';
import { PageTemplate } from '@/components/templates/page-template';

export const metadata: Metadata = {
  title: 'Resources | Dominik Rubröder, UX Design Engineer',
  description:
    'Apply community knowledge, research and proven principles to our daily work.'
};

export default function ResourcesPage() {
  return (
    <PageTemplate
      h1="Resources"
      heroBlockquote="Resources educate and help us grow in our expertise by leveraging the community knowledge, research findings and proven principles of the past that stood the test of time; letting us apply them to our daily work."
      heroNavigationHiddenLink="/resources"
    >
      <div className="animate-in-to-left-160">
        <Container as="section" size="container-readable">
          <H2 className="sticky-headline">Books</H2>

          <Ul className="mt-0 space-y-8">
            {getBooks({ sorting: 'A-Z' }).map((book) => (
              <li key={book.title}>
                <div className="flex gap-8">
                  {book.cover && (
                    <Link
                      href={book.href}
                      target="_blank"
                      title={`Read more about ${book.title}`}
                      aria-label={`Click to read more about ${book.title} in an external tab`}
                      rel="noopener noreferrer"
                      className="h-auto w-28 shrink-0"
                    >
                      <Image
                        src={book.cover}
                        width={200}
                        height={300}
                        className="w-full"
                        alt={book.title}
                        draggable={false}
                      />
                    </Link>
                  )}

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div>
                        <h3 className="mb-0">{book.title}</h3>
                        <small className="inline-flex flex-wrap items-center gap-2 font-normal">
                          <span>{book.author}</span>

                          {book.releaseYear && (
                            <>
                              <span className="size-1 rounded-full bg-muted-foreground" />
                              <span>{book.releaseYear}</span>
                            </>
                          )}

                          {book.category && (
                            <>
                              <span className="size-1 rounded-full bg-muted-foreground" />
                              <span>{book.category.join(', ')}</span>
                            </>
                          )}
                        </small>
                      </div>

                      {book.description && <p>{book.description}</p>}
                    </div>

                    <ExternalLink
                      href={book.href}
                      color="primary"
                      className="-ml-1"
                      title={`Read more about ${book.title}`}
                      aria-label={`Click to read more about ${book.title} in an external tab`}
                    >
                      <span>More on {book.title}</span>
                    </ExternalLink>
                  </div>
                </div>
              </li>
            ))}
          </Ul>
        </Container>
      </div>

      <Hr variant="container-readable" />

      <Container as="section" size="container-readable">
        <H2>Courses</H2>

        <Ul className="space-y-6">
          {getCourses({ sortBy: 'A-Z' }).map((course) => (
            <li key={course.title}>
              <div className="flex gap-3">
                {course?.icon && course.icon}

                <div>
                  <div>
                    <h4 className="mb-0">{course.title}</h4>
                    <small className="font-normal">{course.author}</small>
                  </div>

                  <ExternalLink
                    href={course.href}
                    color="primary"
                    className="-ml-1"
                    title={`Read more about ${course.title}`}
                    aria-label={`Click to read more about ${course.title} in an external tab`}
                  >
                    More on {course.title}
                  </ExternalLink>
                </div>
              </div>
            </li>
          ))}
        </Ul>
      </Container>

      <Hr variant="container-readable" />

      <Container as="section" size="container-readable">
        <H2>Platforms and People</H2>

        <Ul className="space-y-6">
          {getPlatformsBlogsPeople({ sortBy: 'A-Z' }).map((platform) => (
            <li key={platform.title}>
              <div className="flex gap-3">
                {platform.logo && platform.logo}

                <div>
                  <div>
                    <h4 className="mb-0">{platform.title}</h4>
                    <small className="flex flex-wrap items-center gap-2 font-normal">
                      <span>{platform.author}</span>

                      {platform.releaseYear && (
                        <>
                          <span className="size-1 rounded-full bg-muted-foreground" />
                          <span>{platform.releaseYear}</span>
                        </>
                      )}

                      {platform.category && (
                        <>
                          <span className="size-1 rounded-full bg-muted-foreground" />
                          <span>{platform.category.join(', ')}</span>
                        </>
                      )}
                    </small>
                  </div>

                  {platform.description && <p>{platform.description}</p>}

                  <ExternalLink
                    href={platform.href}
                    color="primary"
                    className="-ml-1"
                    title={`Read more about ${platform.title}`}
                    aria-label={`Click to read more about ${platform.title} in an external tab`}
                  >
                    More on {platform.title}
                  </ExternalLink>
                </div>
              </div>
            </li>
          ))}
        </Ul>
      </Container>

      <Hr variant="container-readable" />

      <Container as="section" size="container-readable">
        <H2>Research, Study and Data</H2>

        <Ul className="space-y-6">
          {getResearch({ sorting: 'A-Z' }).map((researchItem) => (
            <li key={researchItem.title}>
              <h4 className="mb-0">{researchItem.title}</h4>

              {researchItem.description && (
                <p className="text-muted-foreground">
                  {researchItem.description}
                </p>
              )}

              <ExternalLink
                href={researchItem.href}
                color="primary"
                className="-ml-1"
                title={`Read more about ${researchItem.title}`}
                aria-label={`Click to read more about ${researchItem.title} in an external tab`}
              >
                More on {researchItem.title}
              </ExternalLink>
            </li>
          ))}
        </Ul>
      </Container>

      <Hr variant="container-readable" />

      <Container
        as="section"
        size="container-readable"
        className="flex items-center"
      >
        <small className="text-center">
          Note: None of these links are affiliate links or links with commercial
          intent. All of those resources are personally curated, found and used
          during the last years.
        </small>
      </Container>
    </PageTemplate>
  );
}
