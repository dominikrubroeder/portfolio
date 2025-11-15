import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';

export function HomeHero() {
  return (
    <Animate direction="scaleUp">
      <Container
        as="section"
        className="space-y-6 pt-5 pb-1 lg:px-0 lg:pb-2"
        id="hero"
      >
        <div className="space-y-2">
          <Badge size="medium" color="primary">
            Team Frontend
          </Badge>

          <h2>
            Building user interfaces for the web. A craft, about UI components
            and design systems.
          </h2>
        </div>

        <ButtonGroup>
          <Button>Modify theme</Button>
          <Button variant="ghost">Open Storybook</Button>
        </ButtonGroup>
      </Container>
    </Animate>
  );
}
