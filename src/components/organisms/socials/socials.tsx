import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import { mainSocials } from '@/components/organisms/socials';

export function Socials() {
  return (
    <Animate>
      <Container className="space-y-8" id="socials">
        <h2>
          Social accounts
          <span className="ml-2 font-medium text-muted-foreground">
            You can find my social presence on
          </span>
        </h2>

        <BrandList brands={mainSocials} />
      </Container>
    </Animate>
  );
}
