import { H2, Ul } from '@/components/organisms/typography';
import { Container } from '@/components/organisms/layout';

export function MyCompanyGoodiesSection() {
  return (
    <Container as="section" size="container-readable" className="bg-background">
      <H2>What's important to me in a company</H2>

      <Ul listStyle="disc">
        <li>To identify a clear vision in the company</li>
        <li>A vivid communication within the team</li>
        <li>
          To see and feel that a products success is a cross-department success
        </li>
      </Ul>
    </Container>
  );
}
