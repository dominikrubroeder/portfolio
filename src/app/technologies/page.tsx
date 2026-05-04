import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import { BrandList } from '@/components/organisms/brand';
import { Hr } from '@/components/atoms/hr';
import { mainTechnologies } from '@/components/organisms/technologies';

export default function TechnologiesPage() {
  return (
    <>
      <Animate delay={0.1}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h1>Technologies</h1>
          <p>
            Technologies; languages that bring design to life with code. There
            is a wide array of frameworks out there, here is what i use in daily
            coding:
          </p>
        </Container>
      </Animate>

      <Animate delay={0.16}>
        <Container as="section" size="container-readable">
          <BrandList brands={mainTechnologies} />
        </Container>
      </Animate>

      <Hr variant="container" />
    </>
  );
}
