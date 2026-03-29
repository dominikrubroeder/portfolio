import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import { socials } from '@/components/organisms/socials';

export function Socials() {
  return (
    <Animate>
      <Container className="space-y-8" id="socials">
        <h2>
          Socials
          <span className="ml-2 font-medium text-muted-foreground">
            You can find me on
          </span>
        </h2>

        <BrandList brands={socials} />
      </Container>
    </Animate>
  );
}
