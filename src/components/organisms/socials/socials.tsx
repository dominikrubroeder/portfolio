import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import { mainSocials } from '@/components/organisms/socials';
import { LiveEditContainer } from '@/components/organisms/live-edit';

export function Socials() {
  return (
    <Animate direction="up">
      <LiveEditContainer componentName="socials.tsx">
        <Container className="space-y-8" id="socials">
          <h2>
            Social accounts
            <span className="ml-2 font-medium text-muted-foreground">
              You can see my social presence on
            </span>
          </h2>

          <BrandList brands={mainSocials} />
        </Container>
      </LiveEditContainer>
    </Animate>
  );
}
