import { H2 } from '@/components/organisms/typography';
import { ExternalLink } from '@/components/atoms/external-link';
import { Container } from '@/components/organisms/layout';
import { getTools } from '@/components/organisms/tools';
import { BrandLogo } from '@/components/organisms/brand';

export function MyWorkHistorySection() {
  const linkedIn = getTools({ names: ['LinkedIn'] });

  return (
    <Container as="section" size="container-readable" className="bg-background">
      <H2>Work history</H2>

      <p>
        View my work history on
        <ExternalLink
          href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
          className="ml-1"
        >
          <BrandLogo brand="LinkedIn" id="my-work-history-linkedin" />
          <span>LinkedIn</span>
        </ExternalLink>
        .
      </p>
    </Container>
  );
}
