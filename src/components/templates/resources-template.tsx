import { Animate } from '@/components/molecules/animate';
import { Container } from '@/components/atoms/container';
import { Ul } from '@/components/atoms/ul';
import { getBooks, getCourses, getPlatformsBlogsPeople } from '@/components/organisms/training';
import { ExternalLink } from '@/components/atoms/external-link';
import { Hr } from '@/components/atoms/hr';
import { getResearch } from '@/components/organisms/training/research';

export function ResourcesTemplate() {
  return (
    <>
      <Animate delay={0.1}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h1>Resources</h1>
          <p>
            Resources educate and help us grow in our expertise by leveraging
            the community knowledge, research findings and proven principles of
            the past that stood the test of time; letting us apply them to our
            daily work.
          </p>
        </Container>
      </Animate>

      <Animate delay={0.16}>
        <Container as="section" size="container-readable">
          <h3 className="mb-0">Books</h3>

          <Ul className="space-y-6">
            {getBooks({ sorting: 'A-Z' }).map((book) => (
              <li key={book.title}>
                <div>
                  <h4 className="mb-0">{book.title}</h4>
                  <small className="flex flex-wrap items-center gap-2 font-normal">
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

                <ExternalLink
                  href={book.href}
                  color="primary"
                  className="-ml-1"
                  title={`Read more about ${book.title}`}
                  aria-label={`Click to read more about ${book.title} in an external tab`}
                >
                  More on {book.title}
                </ExternalLink>
              </li>
            ))}
          </Ul>
        </Container>
      </Animate>

      <Hr variant="container-readable" />

      <Container as="section" size="container-readable">
        <h3 className="mb-0">Courses</h3>

        <Ul className="space-y-6">
          {getCourses({ sortBy: 'A-Z' }).map((course) => (
            <li key={course.title}>
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
            </li>
          ))}
        </Ul>
      </Container>

      <Hr variant="container-readable" />

      <Container as="section" size="container-readable">
        <h3 className="mb-0">Platforms and People</h3>

        <Ul className="space-y-6">
          {getPlatformsBlogsPeople({ sortBy: 'A-Z' }).map((platform) => (
            <li key={platform.title}>
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
            </li>
          ))}
        </Ul>
      </Container>

      <Hr variant="container-readable" />

      <Container as="section" size="container-readable">
        <h3 className="mb-0">Research, Study and Data</h3>

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

      <Hr variant="container" />
    </>
  );
}
