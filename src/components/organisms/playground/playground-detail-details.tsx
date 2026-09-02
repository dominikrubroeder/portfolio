import { Container } from '@/components/organisms/layout';
import {
  LogoMotion,
  LogoNextjs,
  LogoReact,
  LogoTailwindCss
} from '@/components/atoms/logo';
import { playgroundComponents } from '@/components/organisms/playground/data';
import { Badge } from '@/components/atoms/badge';
import { Ul } from '@/components/organisms/typography';
import { ExternalLink } from '@/components/atoms/external-link';

function PlaygroundReferenceLogo({
  componentId,
  snippet
}: {
  componentId: string;
  snippet: string;
}) {
  const className = 'mr-2';

  if (snippet.includes('motion.dev')) {
    return (
      <LogoMotion
        id={`${componentId}-${snippet}-motion-logo`}
        className={className}
      />
    );
  }

  if (snippet.includes('react.dev')) {
    return (
      <LogoReact
        id={`${componentId}-${snippet}-react-logo`}
        className={className}
      />
    );
  }

  if (snippet.includes('next.org')) {
    return (
      <LogoNextjs
        id={`${componentId}-${snippet}-nextjs-logo`}
        className={className}
      />
    );
  }

  return null;
}

export async function PlaygroundDetailDetails({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const componentId = (await params)?.slug;
  const component = playgroundComponents.find(
    (component) => component.id === componentId
  );

  return (
    <Container as="section" className="space-y-8">
      <div className="space-y-2">
        <h1>{component?.title || 'Playground Component'}</h1>
        <p>{component?.description || 'Playground component description'}</p>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div>Built with</div>
          <ul className="space-y-5">
            <li>
              <span className="flex items-center gap-3 text-foreground">
                <LogoReact id={`playground-details-${componentId}-react`} />{' '}
                React
              </span>
            </li>
            <li>
              <span className="flex items-center gap-3 text-foreground">
                <LogoMotion id={`playground-details-${componentId}-motion`} />{' '}
                Motion
              </span>
            </li>
            <li>
              <span className="flex items-center gap-3 text-foreground">
                <LogoTailwindCss
                  id={`playground-details-${componentId}-tailwindcss`}
                />{' '}
                Tailwind CSS
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div>Component Directive</div>
          <div className="flex items-center gap-2">
            <Badge>'{component?.componentDirective}'</Badge>
            <span className="text-foreground">Client Component</span>
          </div>
        </div>

        {component?.references && (
          <div className="space-y-3">
            <div>References</div>
            <Ul listStyle="disc">
              {component.references.map((ref) => (
                <li key={ref}>
                  <ExternalLink href={ref}>
                    <PlaygroundReferenceLogo
                      componentId={componentId}
                      snippet={ref}
                    />
                    <span>{ref}</span>
                  </ExternalLink>
                </li>
              ))}
            </Ul>
          </div>
        )}
      </div>
    </Container>
  );
}
