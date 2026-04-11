import { Animate } from '@/components/molecules/animate';
import { Container } from '@/components/atoms/container';
import { Ul } from '@/components/atoms/ul';
import {
  getBooks,
  getCourses,
  getPlatformsBlogsPeople
} from '@/components/organisms/training';
import { ExternalLink } from '@/components/atoms/external-link';
import { Hr } from '@/components/atoms/hr';

export function ResourcesTemplate() {
  return (
    <>
      <Animate delay={0.1}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h2>Resources</h2>
          <p>
            Resources educate and help us grow in our expertise by leveraging
            the community knowledge, research and proven principles of the past
            that stood the test of time; letting us apply them to our daily
            work.
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
                  <small className="flex flex-wrap items-center gap-2">
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

      <Hr variant="contained" />

      <Container as="section" size="container-readable">
        <h3 className="mb-0">Courses</h3>

        <Ul className="space-y-6">
          {getCourses({ sortBy: 'A-Z' }).map((course) => (
            <li key={course.title}>
              <div>
                <h4 className="mb-0">{course.title}</h4>
                <small>{course.author}</small>
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

      <Hr variant="contained" />

      <Container as="section" size="container-readable">
        <h3 className="mb-0">Platforms and People</h3>

        <Ul className="space-y-6">
          {getPlatformsBlogsPeople({ sortBy: 'A-Z' }).map((platform) => (
            <li key={platform.title}>
              <div>
                <h4 className="mb-0">{platform.title}</h4>
                <small>{platform.author}</small>
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
            </li>
          ))}
        </Ul>
      </Container>

      <Hr variant="contained" />

      <Container
        as="section"
        size="container-readable"
        className="flex items-center"
      >
        <small className="text-center">
          Note: None of these links are affiliate links or links with commercial
          background. All of those a personally curated resources found and used
          during the last years.
        </small>
      </Container>
    </>
  );
}
